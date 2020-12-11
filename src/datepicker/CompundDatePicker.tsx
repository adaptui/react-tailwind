import * as React from "react";
import {
  DatePickerContent,
  DatePickerSegment,
  DatePickerTrigger,
  useDatePickerState,
  DatePickerStateReturn,
  DatePickerInitialState,
  DatePickerSegmentField,
  DatePicker as DatePickerWrapper,
  useDateRangePickerState,
  DateRangePickerStateReturn,
  DateRangePickerInitialState,
} from "@renderlesskit/react";
import theme from "../theme";
import { StatelessCalendar } from "../calendar";

/*
<DatePicker>
  <DatePicker.Field>
    <DatePicker.SegmentInput />
    <DatePicker.Trigger>
      <CalendarIcon />
    </DatePicker.Trigger>
  </DatePicker.Field>
  <DatePicker.Content />
</DatePicker>;
*/

type _DatePickerStateReturn = DatePickerStateReturn & {
  isRange: false;
};
type _DateRangePickerStateReturn = DateRangePickerStateReturn & {
  isRange: true;
};

const DatePickerContext = React.createContext<
  _DatePickerStateReturn | _DateRangePickerStateReturn | null
>(null);

function useDatePickerContext() {
  const context = React.useContext(DatePickerContext);
  if (!context) {
    throw new Error(
      `DatePicker compound components cannot be rendered outside the DatePicker component`,
    );
  }
  return context;
}

type DatePickerCompoundProps = DatePickerInitialState &
  DateRangePickerInitialState & {
    Field?: React.FC<{}>;
    Trigger?: React.FC<{}>;
    SegmentInput?: React.FC<{}>;
    Content?: React.FC<{}>;
    children: React.ReactNode;
    isRange?: boolean;
  };

const DatePicker = (props: DatePickerCompoundProps) => {
  return props.isRange ? (
    <DatePickerRange {...props} />
  ) : (
    <DatePickerNormal {...props} />
  );
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

const Field: React.FC = props => {
  const state = useDatePickerContext();
  return (
    <DatePickerWrapper className={theme.datepicker.base} {...state}>
      <div className={theme.datepicker.container}>{props.children}</div>
    </DatePickerWrapper>
  );
};

const RangeStartSegmentInput: React.FC = () => {
  const state = useDatePickerContext();

  if (state.isRange === false) {
    throw new Error(
      "RangeStartSegmentInput can only be used while isRange is true",
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

const RangeEndSegmentInput: React.FC = () => {
  const state = useDatePickerContext();

  if (state.isRange === false) {
    throw new Error(
      "RangeEndSegmentInput can only be used while isRange is true",
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

const SegmentInput: React.FC = () => {
  const state = useDatePickerContext();

  if (state.isRange === true) {
    throw new Error("SegmentInput can only be used while isRange is false");
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

const Trigger: React.FC = props => {
  const state = useDatePickerContext();
  return (
    <DatePickerTrigger className={theme.datepicker.trigger} {...state}>
      {props.children}
    </DatePickerTrigger>
  );
};

const Content: React.FC = () => {
  const state = useDatePickerContext();
  return (
    <DatePickerContent {...state}>
      <StatelessCalendar {...state.calendar} />
    </DatePickerContent>
  );
};

DatePicker.Field = Field;
DatePicker.Content = Content;
DatePicker.Trigger = Trigger;
DatePicker.SegmentInput = SegmentInput;
DatePicker.RangeEndSegmentInput = RangeEndSegmentInput;
DatePicker.RangeStartSegmentInput = RangeStartSegmentInput;

export default DatePicker;
