import * as React from "react";
import { format } from "date-fns";
import { CalendarStateReturn } from "@renderlesskit/react";

import {
  DatePicker,
  DatePickerField,
  DatePickerTrigger,
  DatePickerContent,
  useDatePickerContext,
  DatePickerSegmentInput,
  CompoundDateRangePickerProps,
  CompoundDateNormalPickerProps,
  DatePickerEndSegmentInput,
  DatePickerStartSegmentInput,
} from "./CompundDatePicker";
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
  ChevronLeft,
  ChevronRight,
  DoubleChevronLeft,
  DoubleChevronRight,
  CalendarIcon,
} from "../calendar/Icons";

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
        value={format(new Date(state.dateValue), "yyyy-MM-dd")}
        onChange={e => {
          state.selectDate(e.target.value);
        }}
      />
    );
  }

  return null;
};

export const CustomInputDatePicker: React.FC<CompoundDateNormalPickerProps> =
  props => {
    return (
      <DatePicker {...props}>
        <DatePickerField>
          <CustomInput />
        </DatePickerField>
        <DatePickerContent>
          {state => <Calendar {...state} />}
        </DatePickerContent>
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

export const CDateRangePicker: React.FC<CompoundDateRangePickerProps> =
  props => {
    return (
      <DatePicker isRange={true} {...props}>
        <DatePickerField>
          <DatePickerStartSegmentInput /> -
          <DatePickerEndSegmentInput />
          <DatePickerTrigger>
            <CalendarIcon />
          </DatePickerTrigger>
        </DatePickerField>
        <DatePickerContent>
          {state => <Calendar {...state} />}
        </DatePickerContent>
      </DatePicker>
    );
  };
