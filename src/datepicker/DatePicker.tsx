import * as React from "react";
import { format } from "date-fns";

import { CalendarIcon } from "../calendar/Icons";
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

export const CustomInputDatePicker: React.FC<CompoundDateNormalPickerProps> = props => {
  return (
    <DatePicker {...props}>
      <DatePickerField>
        <CustomInput />
      </DatePickerField>
      <DatePickerContent />
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
      <DatePickerContent />
    </DatePicker>
  );
};

export const CDateRangePicker: React.FC<CompoundDateRangePickerProps> = props => {
  return (
    <DatePicker isRange={true} {...props}>
      <DatePickerField>
        <DatePickerStartSegmentInput /> -
        <DatePickerEndSegmentInput />
        <DatePickerTrigger>
          <CalendarIcon />
        </DatePickerTrigger>
      </DatePickerField>
      <DatePickerContent />
    </DatePicker>
  );
};
