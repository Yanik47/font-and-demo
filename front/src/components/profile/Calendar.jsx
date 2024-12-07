import React from "react";
("use client");

import { SchedulerProvider, SchedularView } from "mina-scheduler";

function Calendar() {
  return (
    <section className="flex flex-col items-center justify-center mx-6 ">
      <SchedulerProvider>
        <SchedularView />
      </SchedulerProvider>
    </section>
  );
}

export default Calendar;
