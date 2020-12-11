import * as React from "react";

import {
  DatePickerSegment,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerStateReturn,
  DatePickerSegmentField,
  DatePicker as DatePickerWrapper,
} from "@renderlesskit/react";

import { StatelessCalendar } from "../calendar";
import { CalendarIcon } from "../calendar/Icons";
import theme from "../theme";

export const DatePicker: React.FC<DatePickerStateReturn> = state => {
  return (
    <>
      <DatePickerWrapper className={theme.datepicker.base} {...state}>
        <div className={theme.datepicker.container}>
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

          <DatePickerTrigger className={theme.datepicker.trigger} {...state}>
            <CalendarIcon />
          </DatePickerTrigger>
        </div>
      </DatePickerWrapper>
      <DatePickerContent {...state}>
        <StatelessCalendar {...state.calendar} />
      </DatePickerContent>
    </>
  );
};
