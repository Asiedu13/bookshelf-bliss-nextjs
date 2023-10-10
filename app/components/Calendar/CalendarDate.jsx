import React from 'react'

const CalendarDate = () => {
  return (
    <>
      <div className="w-[50px] h-[80px] flex flex-col items-center justify-around mx-[20px] rounded-full cursor-pointer hover:bg-[#F0EEE2]">
        <p className='font-medium'>Sun</p>
        <p className='font-medium'>11</p>
      </div>
    </>
  );
}

export default CalendarDate