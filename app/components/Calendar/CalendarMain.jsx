import React from 'react'
import CalendarDate from './CalendarDate';
import Header from '../Header/Header';

const CalendarMain = () => {
  return (
    <>
      <header className="h-[50px] px-[2rem] flex justify-between items-center">
        <Header title="Schedule Reading" />
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
        <CalendarDate />
      </section>
    </>
  );
}

export default CalendarMain