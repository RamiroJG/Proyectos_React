import React, { useState } from 'react'
import data from '../data'
import Person from './Person'

const ListPerson = ({people}) => {
   

  return (
    <section>
        {people.map((person) =>{
            const {id} = person;
            return <Person key={id} {...person}/>
        })}
    </section>
  )
}

export default ListPerson