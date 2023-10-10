import React from 'react'
import CardMini from './components/Cards/CardMini'

const Home = () => {
  return (
      <main class="p-[40px] w-[100vw] h-[100vh] text-[#252733]">
        <header class="flex justify-between mt-[2rem] h-[350px] ">
          {/* Main */}
          <section class="w-[400px] h-[inherit]">
            <h1 class="text-6xl">Happy reading, Felix</h1>
            <p class="mt-[2rem] mb-[4rem]">
              Wow! You've delved deep into the dragon world's secrets. Have
              Violet's dragons shown up yet? Oops! looks like you're not there
              yet. Get reading now!
            </p>

            <a
              href="#"
              class="bg-[black] text-[white] py-[.8rem] px-[2rem] rounded-3xl"
            >
              Keep reading
            </a>
          </section>

          {/* {{-- Trending book profile  */}
          <section class="flex justify-between w-[750px] h-[inherit]">
            <img
              src="/media/imgs/book3.jpg"
              alt="trending book"
              class="h-[90%] w-[240px] shadow-2xl rounded"
            />
            {/* {{-- Book profile description --}} */}
            <div class="w-[55%]">
              {/* {{-- Title --}} */}
              <h2 class="text-4xl w-[90%] font-semibold my-[10px]">
                Fourth Wing: The Empyrean
              </h2>

              {/* {{-- Page details --}} */}
              <div class="mt-[20px] mb-[40px]">
                <span class="text-[#1592e6] text-xl">154</span>
                <span class="text-xl">/ 500 pages</span>
              </div>
              {/* {{-- Quote --}} */}
              <div class="mt-[20px] h-[160px] flex flex-col justify-between">
                <p>
                  Yet, with everyday that passes, the war outside grows more
                  deadly, the kingdom's protective wards are failing, and the
                  death...{" "}
                </p>
                <div class="mt-[20px] text-right p-[2rem] ">
                  <strong>~ Rebecca Yarros</strong>
                </div>
              </div>
            </div>
          </section>
        </header>

        {/* {{-- Popular & Schedule reading --}} */}
        <section class="flex">
          {/* {{-- Popular books section --}} */}
          <section class="w-[55%]  h-[400px]">
            <header>
              <h2 class="text-2xl p-[1rem]">Popular Now</h2>
            </header>

            {/* {{-- book cards --}} */}
            <div class="flex justify-around">
              <CardMini />
              <CardMini />
              <CardMini />
              <CardMini />
            </div>
          </section>
        </section>
      </main>
  );
}
export default Home