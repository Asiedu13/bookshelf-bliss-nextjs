import React from 'react'

const Comment = () => {
  return (
    <article className="flex mt-[20px] h-[200px]  ">
      {/* Dashed svg */}
      <img
        src="/media/imgs/Dashed.png"
        alt="dashed image"
        className="w-[25px] h-[150px] relative top-[20px] mr-[20px]"
      />{" "}
      {/* TODO: Get SVG version of this image */}
      <img
        className="w-[60px] h-[60px] rounded-full shadow-md mx-[10px]"
        src=""
        alt="user profile photo"
      />
      <div className="py-[1rem] w-[500px] flex flex-col justify-around">
        <h3 className="text-xl">Gyane Jude</h3>
        <i>
          What a delightful and magical chapter it it! It indeed transports
          readers to the dragon world and far beyond
        </i>
        <div className="flex justify-between">
          <span>Chapter 5: Dragon Alley</span>
          <span>2 min ago</span>
        </div>
      </div>
    </article>
  );
}

export default Comment