import * as React from "react";
import {
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
  CalendarButton,
  CalendarWeekTitle,
  CalendarCellButton,
  Calendar as CalendarWrapper,
  CalendarInitialState,
  useCalendarState,
} from "@renderlesskit/react";

import {
  ChevronLeft,
  ChevronRight,
  DoubleChevronLeft,
  DoubleChevronRight,
} from "./Icons";

export const Calendar: React.FC<CalendarInitialState> = props => {
  const state = useCalendarState(props);

  return (
    <CalendarWrapper
      {...state}
      className="calendar p-3 rounded-md bg-white shadow-lg w-max"
    >
      <div className="flex justify-between">
        <CalendarButton
          {...state}
          goto="previousYear"
          className="text-gray-700 w-16px"
        >
          <DoubleChevronLeft />
        </CalendarButton>
        <CalendarButton
          {...state}
          goto="previousMonth"
          className="text-gray-700 w-16px"
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
          className="text-gray-700 w-16px"
        >
          <ChevronRight />
        </CalendarButton>
        <CalendarButton
          {...state}
          goto="nextYear"
          className="text-gray-700 w-16px"
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
                  className="text-gray-500 font-light calendar__cell"
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
                  className="calendar__cell"
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
