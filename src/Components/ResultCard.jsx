import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[16vw] h-80 bg-white rounded'>
        {item.type=='photo'?<img src={item.src}/>:''}
        {item.type=='video'?<video autoPlay loop muted src={item.src}></video>:''}
     <h1 className='text-black px-4 py-3'>{item.title}</h1> 
    </div>
  )
}

export default ResultCard
