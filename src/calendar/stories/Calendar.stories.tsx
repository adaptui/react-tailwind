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
  CalendarTableBodyContents,
  CalendarTableHead,
  CalendarTableHeadColumns,
  CalendarTableHeadRow,
  CalendarTitle,
} from "../Calendar";

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

export const Default = Template.bind({});
Default.args = {};
