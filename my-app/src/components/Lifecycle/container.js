import React from 'react';

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('componentDidMount');

        this.setState({
            text: 'lorem'
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', {
            prevProps, 
            prevState, 
            snapshot
        })
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render(){
        return(
            <div>Lifecycle</div>
        )
    }
}

export default Lifecycle;