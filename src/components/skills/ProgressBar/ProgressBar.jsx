import React from 'react'
import {motion} from "framer-motion"
import {languages} from "./LanguageData.js"
import Bar from './Bar.jsx'

const ProgressBar = () => {
  return (
    <div className=' bg-black w-full flex flex-col'>
      {
        languages.map((item,index)=>
        (
        <div className='progressbar-main-container sm:p-3 lg:p-8'>
            <span className='text-white pl-10'>{item.language}</span>
            <Bar key={index} item={item}/>
        </div>
        ))
      }
    </div>
  )
}

export default ProgressBar