import React from 'react'

const Question2 = () => {
    const names = ["Brial", "Paul", "Krug", "Halley"];
    const listItems = names?.map((item,index) => <li key={index}>{item}</li>);
  return (
    <ul>{listItems}</ul>
  )
}

export default Question2