"use client";

import { Control, Controller, useForm } from "react-hook-form";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import s from "./datePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { UseFormRegister } from "react-hook-form";
import { CreateAssignmentDto } from "@/app/api/assignment/assignment.api";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const TheDataPicker = ({  registerName,control }: Props) => {
  const [startDate, setStartDate] = useState(new Date());

  // const handleDateChange = (date: Date | null) => {
  //   if (date !== null) {
  //     setStartDate(date);
  //     console.log(date);
  //   }
  // };

  return (
    <Controller
      control={control}
      name={registerName}
      render={({ field }) => (
        <DatePicker
          selected={field.value?field.value: startDate}
          onChange={(date) => field.onChange(date)}
          showTimeSelect
          dateFormat="MMMM d, hh:mm"
          timeFormat="HH:mm"
          wrapperClassName={s.dateWrapper}
          calendarClassName={s.dateCalendar}
        />
      )}
    />
  );
};

type Props = {
  register: UseFormRegister<any>;
  registerName: string;
  control:Control<any>
};
