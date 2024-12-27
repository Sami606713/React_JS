import React from 'react'

export default function Header(props) {
  return (
    <header className="body-font bg-black text-white">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">{props.logo}</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="mr-5 hover:text-white">{props.item1}</a>
          <a className="mr-5 hover:text-white">{props.item2}</a>
          <a className="mr-5 hover:text-white">{props.item3}</a>
          <a className="mr-5 hover:text-white">{props.item4}</a>
        </nav>
      </div>
    </header>
  )
}