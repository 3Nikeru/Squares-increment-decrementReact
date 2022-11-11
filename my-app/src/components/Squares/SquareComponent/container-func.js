import React, {useState} from 'react';
import '../style.scss'

const SquareComponent =({onAddNumber, onMinusNumber, num})=>{
    return( 
        <div className='square'>
            <button 
                className="add"
                onClick={onAddNumber}
            >
                +
            </button>
            {num}
            <button
            onClick={onMinusNumber}
            >
                -
            </button>
        </div>
    
    )
}

export default SquareComponent;