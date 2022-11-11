import React, {useState} from 'react';
import SquareComponent from './SquareComponent';
import './style.scss'

const Square =()=>{
    const [num, setNum] = useState(0);


    const handleAddNumber = () =>{
        const newNum = num + 1;
        setNum(newNum);
    }

    const handleMinusNumber = () =>{
        const newNum = num - 1;
        setNum(newNum);
    }

    return( 
            <SquareComponent
                onAddNumber={handleAddNumber}
                onMinusNumber={handleMinusNumber}
                num={num}
            />
    )
}

export default Square;