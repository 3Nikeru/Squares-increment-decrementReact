import React, {useEffect} from 'react';

const Lifecycle =({users})=>{
    useEffect(()=>{
        console.log('componentDidMount')
    }, []);

    useEffect(()=>{
        console.log('componentDidUpdate')
    }, [users]);

    useEffect(()=>{
        return () =>{
            console.log('componentWillUnmount')
        }
    }, []);
    return( 
        <div>Lifecycle func</div>
    )
}

export default Lifecycle;