import React from "react";
import ArrowR from "./icons/ArrowR";
import ArrowL from "./icons/ArrowL";
import { getNameDay } from "../helpers/getNameDate";
import { getDate } from "../helpers/getNameMonth";
// eslint-disable-next-line react/prop-types
const Day = ({ dateM, setDateM }) => {

  const addDays = (date) => {
    let addDate = new Date(dateM)
    addDate.setDate(date.getDate() + 1)
    return addDate;
  }

  const restDays = (date) => {
    let restDate = new Date(dateM)
    restDate.setDate(date.getDate() - 1)
    return restDate;
  }

  const HandleRight = () => {
    // console.log('Right')
    setDateM(addDays(dateM))
  }
  const HandleLeft = () => {
    // console.log('left')
    setDateM(restDays(dateM))
  }
  return (
    <section className="flex justify-center items-center gap-8 my-20 [&>p]:text-gray02">
      <p
        onClick={() => HandleLeft()}
        className="cursor-pointer">
        <ArrowL />
      </p>
      <div className="w-[155px]">
        <h4 className="text-4xl font-medium">{getNameDay(dateM)}</h4>
        <p className="text-gray02">{getDate(dateM)}</p>
      </div>
      <p
        onClick={() => HandleRight()}
        className="cursor-pointer">
        <ArrowR />
      </p>
    </section>
  )
};

export default Day;
