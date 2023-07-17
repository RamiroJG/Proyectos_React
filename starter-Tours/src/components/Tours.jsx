import React, { useState } from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
    
  return (
    <section>
      <div className='title'>
        <h2>Ours Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className="tours">
        {tours.map((tour)=>{
          return(
            <Tour 
              key={tour.id}
              {...tour}
              removeTour={removeTour}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Tours

/* 

Este componente es una función de React que muestra una lista de tours. Recibe un prop llamado "tours" que contiene la información de los tours a mostrar. El componente renderiza un encabezado con el título "Our Tours" y una línea divisora debajo. Luego, dentro de un contenedor con clase "tours", se utiliza el método "map" para iterar sobre el arreglo de tours recibido como prop. Por cada tour, se renderiza un componente "Tour" pasando las propiedades individuales del tour como props. Cada tour se identifica con la propiedad "key" que se establece como el valor del ID del tour.
*/