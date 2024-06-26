"use client";

import { Button } from "@nextui-org/button";
import { DateRangePicker } from "@nextui-org/date-picker";
import React from "react";
import { Calendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";

import { title, subtitle } from "@/components/primitives";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Its&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Creators World&nbsp;</h1>
        <br />
        <h1 className={title()}>the world largest discord app hub.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Click the button given below to join our vibrant community today!
        </h2>
        <Button color="success" variant="flat">
          Join Now
        </Button>
      </div>
      <div className="inline-block max-w-lg text-center justify-center mt-5">
        <h2 className={subtitle({ class: "mt-0" })}>Pick a date from here!</h2>
      </div>
      <div className="inline-block max-w-lg text-center justify-center mt-2">
        <DateRangePicker className="max-w-xs" label="Stay duration" />
      </div>
      <Calendar
        isReadOnly
        aria-label="Date (Read Only)"
        value={today(getLocalTimeZone())}
      />
    </section>
  );
}

export default Hero;
