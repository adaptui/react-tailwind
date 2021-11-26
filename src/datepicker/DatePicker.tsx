import * as React from "react";
import { CalendarStateReturn, toUTCString } from "@renderlesskit/react";

import {
  CalendarHeader,
  CalendarNextMonthButton,
  CalendarNextYearButton,
  CalendarPreviousMonthButton,
  CalendarPreviousYearButton,
  CalendarTable,
  CalendarTableBody,
  CalendarTableBodyContents,
  CalendarTableHead,
  CalendarTableHeadColumns,
  CalendarTableHeadRow,
  CalendarTitle,
  StatelessCalendar,
} from "../calendar";
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  DoubleChevronLeft,
  DoubleChevronRight,
} from "../calendar/Icons";

import {
  CompoundDateNormalPickerProps,
  CompoundDateRangePickerProps,
  DatePicker,
  DatePickerContent,
  DatePickerEndSegmentInput,
  DatePickerField,
  DatePickerSegmentInput,
  DatePickerStartSegmentInput,
  DatePickerTrigger,
  useDatePickerContext,
} from "./CompundDatePicker";

const Calendar = (state: CalendarStateReturn) => {
  return (
    <StatelessCalendar state={state}>
      <CalendarHeader>
        <CalendarPreviousYearButton>
          <DoubleChevronLeft />
        </CalendarPreviousYearButton>
        <CalendarPreviousMonthButton>
          <ChevronLeft />
        </CalendarPreviousMonthButton>
        <CalendarTitle />
        <CalendarNextMonthButton>
          <ChevronRight />
        </CalendarNextMonthButton>
        <CalendarNextYearButton>
          <DoubleChevronRight />
        </CalendarNextYearButton>
      </CalendarHeader>
      <CalendarTable>
        <CalendarTableHead>
          <CalendarTableHeadRow>
            <CalendarTableHeadColumns />
          </CalendarTableHeadRow>
        </CalendarTableHead>
        <CalendarTableBody>
          <CalendarTableBodyContents />
        </CalendarTableBody>
      </CalendarTable>
    </StatelessCalendar>
  );
};

const CustomInput: React.FC = () => {
  const state = useDatePickerContext();
  if (state.isRange === false) {
    return (
      <input
        className="outline-none"
        type="date"
        onClick={e => {
          e.preventDefault();
          state.toggle();
        }}
        value={toUTCString(new Date(state.dateValue))}
        onChange={e => {
          state.selectDate(e.target.value);
        }}
      />
    );
  }

  return null;
};

export const CustomInputDatePicker: React.FC<
  CompoundDateNormalPickerProps
> = props => {
  return (
    <DatePicker {...props}>
      <DatePickerField>
        <CustomInput />
      </DatePickerField>
      <DatePickerContent>{state => <Calendar {...state} />}</DatePickerContent>
    </DatePicker>
  );
};

export const CDatePicker: React.FC<CompoundDateNormalPickerProps> = props => {
  return (
    <DatePicker {...props}>
      <DatePickerField>
        <DatePickerSegmentInput />
        <DatePickerTrigger>
          <CalendarIcon />
        </DatePickerTrigger>
      </DatePickerField>
      <DatePickerContent>{state => <Calendar {...state} />}</DatePickerContent>
    </DatePicker>
  );
};

export const CDateRangePicker: React.FC<
  CompoundDateRangePickerProps
> = props => {
  return (
    <DatePicker isRange={true} {...props}>
      <DatePickerField>
        <DatePickerStartSegmentInput /> -
        <DatePickerEndSegmentInput />
        <DatePickerTrigger>
          <CalendarIcon />
        </DatePickerTrigger>
      </DatePickerField>
      <DatePickerContent>{state => <Calendar {...state} />}</DatePickerContent>
    </DatePicker>
  );
};
