import * as React from "react";

import {
  DatePickerSegment,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerStateReturn,
  DatePickerSegmentField,
  DatePicker as DatePickerWrapper,
  CalendarStateReturn,
  CalendarHeader,
} from "@renderlesskit/react";

import {
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
import theme from "../theme";

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
        <Calendar {...state.calendar} />
      </DatePickerContent>
    </>
  );
};
