import React from 'react'

const Header = (props) => {
  return (
    <header>
          <h2 className="text-2xl font-semibold p-[1rem]">{ props.title}</h2>
    </header>
  );
}

export default Header