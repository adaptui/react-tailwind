import * as React from "react";

import CDatePicker from "./CompundDatePicker";
import { CalendarIcon } from "../calendar/Icons";

export const DatePicker: React.FC = () => {
  return (
    <>
      <CDatePicker>
        <CDatePicker.Field>
          <CDatePicker.SegmentInput />
          <CDatePicker.Trigger>
            <CalendarIcon />
          </CDatePicker.Trigger>
        </CDatePicker.Field>
        <CDatePicker.Content />
      </CDatePicker>
    </>
  );
};

export const DatePickerRange: React.FC = () => {
  return (
    <>
      <CDatePicker isRange={true}>
        <CDatePicker.Field>
          <CDatePicker.RangeStartSegmentInput /> -
          <CDatePicker.RangeEndSegmentInput />
          <CDatePicker.Trigger>
            <CalendarIcon />
          </CDatePicker.Trigger>
        </CDatePicker.Field>
        <CDatePicker.Content />
      </CDatePicker>
    </>
  );
};
