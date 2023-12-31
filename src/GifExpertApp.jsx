
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = () => {
    setCategories(['Valorant',...categories])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories}/>

      {/* Listado de gif */}
      
      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
