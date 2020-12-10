import * as React from "react";
import {
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
  CalendarButton,
  CalendarWeekTitle,
  CalendarCellButton,
  CalendarStateReturn,
  Calendar as CalendarWrapper,
} from "@renderlesskit/react";

import {
  ChevronLeft,
  ChevronRight,
  DoubleChevronLeft,
  DoubleChevronRight,
} from "./Icons";
import theme from "../theme";

export const Calendar: React.FC<CalendarStateReturn> = state => {
  return (
    <CalendarWrapper {...state} className={theme.calendar.base}>
      <div className="flex justify-between">
        <CalendarButton
          {...state}
          goto="previousYear"
          className={theme.calendar.button}
        >
          <DoubleChevronLeft />
        </CalendarButton>
        <CalendarButton
          {...state}
          goto="previousMonth"
          className={theme.calendar.button}
        >
          <ChevronLeft />
        </CalendarButton>
        <CalendarHeader
          className="text-gray-700 font-bold text-sm"
          {...state}
        />
        <CalendarButton
          {...state}
          goto="nextMonth"
          className={theme.calendar.button}
        >
          <ChevronRight />
        </CalendarButton>
        <CalendarButton
          {...state}
          goto="nextYear"
          className={theme.calendar.button}
        >
          <DoubleChevronRight />
        </CalendarButton>
      </div>

      <CalendarGrid {...state} as="table" className="p-4 mt-2">
        <thead>
          <tr className="text-center">
            {state.weekDays.map((day, dayIndex) => {
              return (
                <CalendarWeekTitle
                  {...state}
                  className={theme.calendar.weekTitle}
                  as="th"
                  scope="col"
                  key={dayIndex}
                  dayIndex={dayIndex}
                >
                  <abbr title={day.title}>{day.abbr.slice(0, 2)}</abbr>
                </CalendarWeekTitle>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {state.daysInMonth.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <CalendarCell
                  {...state}
                  as="td"
                  date={day}
                  key={dayIndex}
                  className={theme.calendar.cell}
                >
                  <CalendarCellButton className="p-2" {...state} date={day} />
                </CalendarCell>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarGrid>
    </CalendarWrapper>
  );
};
