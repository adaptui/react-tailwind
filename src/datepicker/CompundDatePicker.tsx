import * as React from "react";
import {
  DatePickerContent as Content,
  DatePickerSegment,
  DatePickerTrigger as Trigger,
  useDatePickerState,
  DatePickerStateReturn,
  DatePickerInitialState,
  DatePickerSegmentField,
  DatePicker as DatePickerWrapper,
  useDateRangePickerState,
  DateRangePickerStateReturn,
  DateRangePickerInitialState,
  CalendarStateReturn,
} from "@renderlesskit/react";
import theme from "../theme/defaultTheme";

export type withRange<T, K> = T & { isRange: K };

const DatePickerContext = React.createContext<
  | withRange<DatePickerStateReturn, false>
  | withRange<DateRangePickerStateReturn, true>
  | undefined
>(undefined);

export type CompoundDateRangePickerProps = Partial<
  withRange<DateRangePickerInitialState, true>
>;
export type CompoundDateNormalPickerProps = Partial<
  withRange<DatePickerInitialState, false>
>;

export type DatePickerCompoundProps = (
  | CompoundDateNormalPickerProps
  | CompoundDateRangePickerProps
) & {
  children?: React.ReactNode;
};

function useDatePickerContext() {
  const context = React.useContext(DatePickerContext);
  if (!context) {
    throw new Error(
      `DatePicker compound components cannot be rendered outside the DatePicker component`,
    );
  }
  return context;
}

/*
  What is happening here is that we need to set the isRange to `false or true` inorder to narrow the type.
  we cannot do an undefined check here to narrow it down.

  And if we do parameter destructuring, it will cause the isRange to be removed from the props object
  and typescript cannot do type narrowing by captured variables
  @see https://github.com/microsoft/TypeScript/issues/12184
  @see https://stackoverflow.com/a/61181442/10629172

  We faced a similar issue in our Accordion component too
  @see renderlesskit-react/blob/8f5cbba8b8cf422fac533b0bd1be27ecf1034dfa/src/accordion/AccordionState.ts#L46-L51
*/
function isUndefinedDiscrimination(
  props: CompoundDateNormalPickerProps | CompoundDateRangePickerProps,
): props is CompoundDateNormalPickerProps {
  return props.isRange === false || props.isRange === undefined;
}

const DatePicker = (props: Partial<DatePickerCompoundProps>) => {
  if (props.isRange === true) {
    return <DatePickerRange {...props} />;
  }

  if (isUndefinedDiscrimination(props)) {
    return <DatePickerNormal {...props} />;
  }

  return null;
};

const DatePickerNormal: React.FC<DatePickerInitialState> = props => {
  const state = useDatePickerState(props);
  return (
    <DatePickerContext.Provider value={{ ...state, isRange: false }}>
      {props.children}
    </DatePickerContext.Provider>
  );
};

const DatePickerRange: React.FC<DateRangePickerInitialState> = props => {
  const state = useDateRangePickerState(props);
  return (
    <DatePickerContext.Provider value={{ ...state, isRange: true }}>
      {props.children}
    </DatePickerContext.Provider>
  );
};

const DatePickerField: React.FC = props => {
  const state = useDatePickerContext();
  return (
    <DatePickerWrapper className={theme.datepicker.base} {...state}>
      <div className={theme.datepicker.container}>{props.children}</div>
    </DatePickerWrapper>
  );
};

const DatePickerStartSegmentInput: React.FC = () => {
  const state = useDatePickerContext();

  if (state.isRange === false) {
    throw new Error(
      "DatePickerStartSegmentInput can only be used while isRange is true",
    );
  }

  return (
    <DatePickerSegmentField
      {...state.startSegmentState}
      className={theme.datepicker.segment_field}
      aria-label="start date"
    >
      {state.startSegmentState.segments.map((segment, i) => (
        <DatePickerSegment
          key={i}
          segment={segment}
          className={theme.datepicker.segment}
          {...state}
          {...state.startSegmentState}
        />
      ))}
    </DatePickerSegmentField>
  );
};

const DatePickerEndSegmentInput: React.FC = () => {
  const state = useDatePickerContext();

  if (state.isRange === false) {
    throw new Error(
      "DatePickerEndSegmentInput can only be used while isRange is true",
    );
  }

  return (
    <DatePickerSegmentField
      {...state.endSegmentState}
      className={theme.datepicker.segment_field}
      aria-label="end date"
    >
      {state.endSegmentState.segments.map((segment, i) => (
        <DatePickerSegment
          key={i}
          segment={segment}
          className={theme.datepicker.segment}
          {...state}
          {...state.endSegmentState}
        />
      ))}
    </DatePickerSegmentField>
  );
};

const DatePickerSegmentInput: React.FC = () => {
  const state = useDatePickerContext();

  if (state.isRange === true) {
    throw new Error(
      "DatePickerSegmentInput can only be used while isRange is false",
    );
  }

  return (
    <DatePickerSegmentField
      {...state}
      className={theme.datepicker.segment_field}
    >
      {state.segments.map((segment, i) => (
        <DatePickerSegment
          key={i}
          segment={segment}
          {...state}
          className={theme.datepicker.segment}
        />
      ))}
    </DatePickerSegmentField>
  );
};

const DatePickerTrigger: React.FC = props => {
  const state = useDatePickerContext();
  return (
    <Trigger className={theme.datepicker.trigger} {...state}>
      {props.children}
    </Trigger>
  );
};

const DatePickerContent: React.FC<{
  children: (state: CalendarStateReturn) => JSX.Element;
}> = ({ children }) => {
  const state = useDatePickerContext();
  return (
    <Content {...state}>
      {typeof children === "function" ? children(state.calendar) : children}
    </Content>
  );
};

export {
  useDatePickerContext,
  DatePicker,
  DatePickerField,
  DatePickerTrigger,
  DatePickerContent,
  DatePickerSegmentField,
  DatePickerSegmentInput,
  DatePickerEndSegmentInput,
  DatePickerStartSegmentInput,
};
