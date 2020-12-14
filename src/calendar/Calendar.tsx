import * as React from "react";
import {
  CalendarCell,
  CalendarGrid,
  CalendarHeader as RenderlessCalendarHeader,
  CalendarButton,
  CalendarWeekTitle,
  CalendarCellButton,
  Calendar as RenderlessCalendar,
  useCalendarState,
  CalendarInitialState,
  CalendarStateReturn,
} from "@renderlesskit/react";

import theme from "../theme";
import { CalendarProvider, useCalendarContext } from "./helpers";

export interface CalendarProps extends CalendarInitialState {}

export const Calendar: React.FC<CalendarProps> = props => {
  const { children } = props;
  const ctx = useCalendarState(props);
  const context = React.useMemo(() => ctx, [ctx]);

  return (
    <CalendarProvider value={context}>
      <RenderlessCalendar {...ctx} className={theme.calendar.base}>
        {children}
      </RenderlessCalendar>
    </CalendarProvider>
  );
};

export const StatelessCalendar: React.FC<
  CalendarProps & { state: CalendarStateReturn }
> = props => {
  const { children } = props;
  const context = React.useMemo(() => props.state, [props.state]);

  return (
    <CalendarProvider value={context}>
      <RenderlessCalendar {...props.state} className={theme.calendar.base}>
        {children}
      </RenderlessCalendar>
    </CalendarProvider>
  );
};

export const CalendarHeader: React.FC<{}> = props => {
  return <div className={theme.calendar.header.base} {...props}></div>;
};

export const CalendarPreviousYearButton: React.FC<{}> = props => {
  const state = useCalendarContext();

  return (
    <CalendarButton
      {...state}
      goto="previousYear"
      className={theme.calendar.header.button}
      {...props}
    />
  );
};

export const CalendarPreviousMonthButton: React.FC<{}> = props => {
  const state = useCalendarContext();

  return (
    <CalendarButton
      {...state}
      goto="previousMonth"
      className={theme.calendar.header.button}
      {...props}
    />
  );
};

export const CalendarTitle: React.FC<{}> = props => {
  const state = useCalendarContext();

  return (
    <RenderlessCalendarHeader
      {...state}
      className={theme.calendar.header.title}
      {...props}
    />
  );
};

export const CalendarNextMonthButton: React.FC<{}> = props => {
  const state = useCalendarContext();

  return (
    <CalendarButton
      {...state}
      goto="nextMonth"
      className={theme.calendar.header.button}
      {...props}
    />
  );
};

export const CalendarNextYearButton: React.FC<{}> = props => {
  const state = useCalendarContext();

  return (
    <CalendarButton
      {...state}
      goto="nextYear"
      className={theme.calendar.header.button}
      {...props}
    />
  );
};

export const CalendarTable: React.FC<{}> = props => {
  const state = useCalendarContext();

  return (
    <CalendarGrid {...state} className={theme.calendar.table.base} {...props} />
  );
};

export const CalendarTableHead: React.FC<{}> = props => {
  return <thead className={theme.calendar.table.head.base} {...props} />;
};

export const CalendarTableHeadRow: React.FC<{}> = props => {
  return <tr className={theme.calendar.table.head.row} {...props} />;
};

export const CalendarTableHeadHeader: React.FC<any> = props => {
  const { dayIndex, ...rest } = props;
  const state = useCalendarContext();

  return (
    <CalendarWeekTitle
      {...state}
      className={theme.calendar.table.head.header.base}
      as="th"
      scope="col"
      dayIndex={dayIndex}
      {...rest}
    />
  );
};

export const CalendarTableHeadHeaderAbbr: React.FC<any> = props => {
  const { day, ...rest } = props;

  return (
    <abbr
      title={day.title}
      className={theme.calendar.table.head.header.abbr}
      {...rest}
    >
      {day.abbr.slice(0, 2)}
    </abbr>
  );
};

export const CalendarTableBody: React.FC<{}> = props => {
  return <tbody className={theme.calendar.table.body.base} {...props} />;
};

export const CalendarTableBodyRow: React.FC<{}> = props => {
  return <tr className={theme.calendar.table.body.row} {...props} />;
};

export const CalendarTableBodyData: React.FC<any> = props => {
  const { day, dayIndex, ...rest } = props;
  const state = useCalendarContext();

  return (
    <CalendarCell
      as="td"
      date={day}
      className={theme.calendar.table.body.data.base}
      {...state}
      {...rest}
    />
  );
};

export const CalendarTableBodyDataButton: React.FC<any> = props => {
  const { day, ...rest } = props;
  const state = useCalendarContext();

  return (
    <CalendarCellButton
      date={day}
      className={theme.calendar.table.body.data.button}
      {...state}
      {...rest}
    />
  );
};

export const CalendarTableHeadColumns: React.FC = () => {
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

export const CalendarTableBodyContents: React.FC = () => {
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
