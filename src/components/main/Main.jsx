import React, { useState } from 'react'

import myData from '../../menuApi/data'
import Card from '../card/Card'

import Navbar from '../navbar/Navbar'
const unique = [...new Set(myData.map((elem) => {
  return (
    elem.category
  )
})), "All"]


const Main = () => {
  const [getData, setData] = useState(myData)

  const filter = (ctg) => {
    if (ctg === "All") {
      return setData(myData)
    }
    const update = myData.filter((element) => {
      return (
        element.category === ctg
      )
    });
    setData(update)
  }


  return (
    <>
      <Navbar filter={filter} unique={unique} />
      <Card getData={getData} />

    </>
  )
}

export default Main
