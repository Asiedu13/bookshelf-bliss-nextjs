import React from 'react'

const CardMini = () => {
  return (
    <article>
      {/* Book Image */}
      <img
        src="/media/imgs/book4.jpg"
        alt="book title"
        class="w-[150px] h-[240px] rounded-xl my-[20px] shadow-2xl"
      />
      {/* Book description */}
      <div class="flex flex-col w-[150px] h-[50px] overflow-hidden">
        <b>Game of Thrones</b>
        <i>Volume III</i>
      </div>
    </article>
  );
}

export default CardMini