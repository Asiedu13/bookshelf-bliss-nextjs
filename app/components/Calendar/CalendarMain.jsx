import React from 'react'
import CalendarDate from './CalendarDate';

const CalendarMain = () => {
  return (
    <>
      <header className="h-[50px] px-[2rem] flex justify-between items-center">
        <h2 className="text-2xl">Schedule Reading</h2>
        <div className="w-[70px] flex justify-between">
          <button className="text-2xl">&lt;</button>
          <button className="text-2xl">&gt;</button>
        </div>
      </header>

      {/* Calendar */}
      <section className="p-[4rem] flex ">
        <CalendarDate />
        <CalendarDate />
        <CalendarDate />
        <CalendarDate />
      </section>
    </>
  );
}

export default CalendarMain