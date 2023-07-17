import React from 'react'
import { useState } from 'react'

const Tour = ({id, name, info, price, image, removeTour}) => {

  const [readMore, setReadMore] = useState(false)
  
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button type='button' className='info-btn' onClick={()=>setReadMore(!readMore)}>Read more</button>
        </p>
        <button type='button' className='btn btn-block delete-btn' onClick={()=>removeTour(id)}>Remove Tour</button>
      </div>
    </article>
  )
}

export default Tour

/* 
Este componente es una función de React que muestra la información de un tour específico. Recibe varias propiedades individuales, incluyendo "id", "name", "info", "price" e "image". Dentro del componente, se renderiza un artículo con la clase "single-tour". En el artículo se muestra una imagen del tour con la etiqueta "img" cuyo origen es el valor de la propiedad "image" y el texto alternativo es el valor de la propiedad "name". También se muestra el precio del tour con la clase "tour-price" y el valor de la propiedad "price". A continuación, se muestra un contenedor de información del tour con la clase "tour-info". Dentro de este contenedor se muestra el nombre del tour con la etiqueta "h5" y el valor de la propiedad "name", y luego se muestra la información del tour con otra etiqueta "h5" y el valor de la propiedad "info".
*/