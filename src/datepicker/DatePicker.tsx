import * as React from "react";

import { CalendarIcon } from "../calendar/Icons";
import CDatePicker, {
  CompoundDateRangePickerProps,
  CompoundDateNormalPickerProps,
} from "./CompundDatePicker";

export const DatePicker: React.FC<CompoundDateNormalPickerProps> = props => {
  return (
    <CDatePicker {...props}>
      <CDatePicker.Field>
        <CDatePicker.SegmentInput />
        <CDatePicker.Trigger>
          <CalendarIcon />
        </CDatePicker.Trigger>
      </CDatePicker.Field>
      <CDatePicker.Content />
    </CDatePicker>
  );
};

export const DateRangePicker: React.FC<CompoundDateRangePickerProps> = props => {
  return (
    <CDatePicker isRange={true} {...props}>
      <CDatePicker.Field>
        <CDatePicker.RangeStartSegmentInput /> -
        <CDatePicker.RangeEndSegmentInput />
        <CDatePicker.Trigger>
          <CalendarIcon />
        </CDatePicker.Trigger>
      </CDatePicker.Field>
      <CDatePicker.Content />
    </CDatePicker>
  );
};
