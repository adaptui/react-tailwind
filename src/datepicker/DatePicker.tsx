import * as React from "react";

import { CalendarIcon } from "../calendar/Icons";
import {
  DatePicker,
  DatePickerField,
  DatePickerTrigger,
  DatePickerContent,
  DatePickerSegmentInput,
  CompoundDateRangePickerProps,
  CompoundDateNormalPickerProps,
  DatePickerEndSegmentInput,
  DatePickerStartSegmentInput,
} from "./CompundDatePicker";

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
