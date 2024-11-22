"use client"
import React from 'react'

const ScaleButtons = () => {
    

    const handleIncrease = () => {
        let fontSize = document.getElementsByClassName("poem-text-p")[0].style.fontSize
        fontSize = parseFloat(fontSize) || 1.2; // default to 1.6rem if fontSize is not set
        if(fontSize >= 2) {
            return
        }else{
            const setFontSize = fontSize + 0.2
            document.getElementsByClassName('poem-text-p')[0].style.fontSize = setFontSize + "rem"
        }
    }

    const handleDecrease = () => {
        let fontSize = document.getElementsByClassName("poem-text-p")[0].style.fontSize
        fontSize = parseFloat(fontSize) || 1.2; // default to 1.6rem if fontSize is not set
        if(fontSize <= 1) {
            return
        }
        document.getElementsByClassName('poem-text-p')[0].style.fontSize = fontSize-0.2 + "rem"
    }


  return (
    <div className='fixed bottom-5 left-1/2 -translate-x-1/2 w-full flex justify-end gap-5 z-20'>
        <div className='flex gap-5 p-3'>

        <button 
            className="size-button"
            onClick={handleDecrease}
            >
            -A
        </button>
        <button className='size-button' onClick={handleIncrease}>
            +A
        </button>
            </div>
    </div>
  )
}

export default ScaleButtons
