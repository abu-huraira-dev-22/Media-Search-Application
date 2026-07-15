import React, { use } from 'react'
import { removeCollection, RemoveToast } from '../redux/features/collectionSlice'
import { useDispatch } from 'react-redux'

const CollectionCard = ({item}) => {
const dispatch = useDispatch()

const removeFromCollection =(item)=>{
    dispatch(removeCollection(item.id))
    dispatch(RemoveToast())
}

  return (
    <div className="w-[16vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank" className="h-full">
        {item.type == "photo" ? <img className="h-full w-full object-center object-cover" src={item.src} /> : ""}
        {item.type == "video" ? (
          <video className="h-full w-full object-center object-cover" autoPlay loop muted src={item.src}></video>) : ("")}
      </a>
      <div id="bottom" className="flex justify-between gap-3 items-center w-full text-white px-4 py-5 absolute bottom-0">
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden ">{item.title}</h2>
        <button onClick={()=>{
          removeFromCollection(item)
        }} className="bg-indigo-600 text-white rounded px-3 py-1 font-medium cursor-pointer active:scale-95">Remove</button>
      </div>
    </div>
  )
}

export default CollectionCard
