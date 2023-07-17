import React, { useState } from 'react'
import reviews from '../data'
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
    const [index, setIndex] = useState(0)
    const {id, name, job, image, text} = reviews[index] 

    const checkNumber = (number) =>{
        if(number > reviews.length - 1){
            return 0;
        }else if(number < 0){
            return reviews.length - 1;
        }
        return number;
    }

    const nextPerson = () =>{
        setIndex((currentIndex)=>{
            const newIndex = currentIndex + 1
            return checkNumber(newIndex)
        })
    }
    const prevPerson = () =>{
        setIndex((currentIndex)=>{
            const newIndex = currentIndex - 1
            return checkNumber(newIndex)
        })
    }
    return (
        <div>
            <main key={id} className=''>
                <article className='review'>
                    <div className='img-container '>
                        <img className='person-img' src={image} alt={name} />
                        <span className='quote-icon'>{<FaQuoteRight />}</span>
                    </div>
                    <div>
                        <h4 className='author'>{name}</h4>
                        <p className='job'>{job}</p>
                        <small className='text'>{text}</small>
                    </div>
                    <div className="btn-container">
                        <button className='prev-btn' onClick={prevPerson}>
                            <FaChevronCircleLeft />
                        </button>
                        <button className='next-btn' onClick={nextPerson}>
                            <FaChevronCircleRight />
                        </button>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Review