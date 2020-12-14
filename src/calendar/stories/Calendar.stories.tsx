import React from "react";
import { Story, Meta } from "@storybook/react";

import "./calendar.css";
import {
  ChevronLeft,
  ChevronRight,
  DoubleChevronLeft,
  DoubleChevronRight,
} from "../Icons";
import {
  Calendar,
  CalendarHeader,
  CalendarNextMonthButton,
  CalendarNextYearButton,
  CalendarPreviousMonthButton,
  CalendarPreviousYearButton,
  CalendarTable,
  CalendarTableBody,
  CalendarTableBodyData,
  CalendarTableBodyDataButton,
  CalendarTableBodyRow,
  CalendarTableHead,
  CalendarTableHeadHeader,
  CalendarTableHeadHeaderAbbr,
  CalendarTableHeadRow,
  CalendarTitle,
} from "../Calendar";
import { useCalendarContext } from "../helpers";

export default {
  title: "Calendar",
  component: Calendar,
} as Meta;

const Template: Story = () => {
  return (
    <Calendar>
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
    </Calendar>
  );
};

const CalendarTableHeadColumns = (props: any) => {
  const state = useCalendarContext();

  return (
    <>
      {state.weekDays.map((day, dayIndex) => {
        return (
          <CalendarTableHeadHeader key={dayIndex} dayIndex={dayIndex}>
            <CalendarTableHeadHeaderAbbr day={day} />
          </CalendarTableHeadHeader>
        );
      })}
    </>
  );
};

const CalendarTableBodyContents = (props: any) => {
  const state = useCalendarContext();

  return (
    <>
      {state.daysInMonth.map((week, weekIndex) => (
        <CalendarTableBodyRow key={weekIndex}>
          {week.map((day, dayIndex) => (
            <CalendarTableBodyData day={day} key={dayIndex} dayIndex={dayIndex}>
              <CalendarTableBodyDataButton day={day} />
            </CalendarTableBodyData>
          ))}
        </CalendarTableBodyRow>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
