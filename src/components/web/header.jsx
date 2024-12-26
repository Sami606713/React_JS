import React from 'react'
import "./header.css"
export default function Header(props) {
  return (
    <nav>
        <div>
            <h1>{props.logo}</h1>
        </div>
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
            <li>{props.item4}</li>
        </ul>
    </nav>
  )
}
