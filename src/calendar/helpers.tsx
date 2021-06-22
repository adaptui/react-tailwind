import { CalendarStateReturn } from "@renderlesskit/react";

import { createContext } from "../utils";

const [CalendarProvider, useCalendarContext] =
  createContext<CalendarStateReturn>({
    strict: false,
    name: "CalendarContext",
  });

export { CalendarProvider, useCalendarContext };
