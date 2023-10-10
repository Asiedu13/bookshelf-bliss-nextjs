import React from 'react'
import CardMini from './components/Cards/CardMini'
import CalendarMain from './components/Calendar/CalendarMain';

const Home = () => {
  return (
    <main className="p-[40px] w-[100vw] h-[100vh] text-[#252733]">
      <header className="flex justify-between mt-[2rem] h-[350px] ">
        {/* Main */}
        <section className="w-[400px] h-[inherit]">
          <h1 className="text-6xl">Happy reading, Felix</h1>
          <p className="mt-[2rem] mb-[4rem]">
            Wow! You've delved deep into the dragon world's secrets. Have
            Violet's dragons shown up yet? Oops! looks like you're not there
            yet. Get reading now!
          </p>

          <a
            href="#"
            className="bg-[black] text-[white] py-[.8rem] px-[2rem] rounded-3xl"
          >
            Keep reading
          </a>
        </section>

        {/* {{-- Trending book profile  */}
        <section className="flex justify-between w-[750px] h-[inherit]">
          <img
            src="/media/imgs/book3.jpg"
            alt="trending book"
            className="h-[90%] w-[240px] shadow-2xl rounded"
          />
          {/* {{-- Book profile description --}} */}
          <div className="w-[55%]">
            {/* {{-- Title --}} */}
            <h2 className="text-4xl w-[90%] font-semibold my-[10px]">
              Fourth Wing: The Empyrean
            </h2>

            {/* {{-- Page details --}} */}
            <div className="mNamet-[20px] mb-[40px]">
              <span className="text-[#1592e6] text-xl">154</span>
              <span className="text-xl">/ 500 pages</span>
            </div>
            {/* {{-- Quote --}} */}
            <div className="mt-[20px] h-[160px] flex flex-col justify-between">
              <p>
                Yet, with everyday that passes, the war outside grows more
                deadly, the kingdom's protective wards are failing, and the
                death...{" "}
              </p>
              <div className="mt-[20px] text-right p-[2rem] ">
                <strong>~ Rebecca Yarros</strong>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* {{-- Popular & Schedule reading --}} */}
      <section className="flex border-gray border-2">
        {/* {{-- Popular books section --}} */}
        <section className="w-[55%]  h-[400px]">
          <header>
            <h2 className="text-2xl p-[1rem]">Popular Now</h2>
          </header>

          {/* {{-- book cards --}} */}
          <div class="flex justify-around">
            <CardMini />
            <CardMini />
            <CardMini />
            <CardMini />
          </div>
        </section>
        {/* Schedule reading section */}
        <section className="flex flex-1 flex-col p-[1rem] ">
          <CalendarMain />
        </section>
      </section>
    </main>
  );
}
export default Home