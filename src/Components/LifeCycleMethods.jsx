import React from 'react';

class LifeCycleMethods extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        console.log('Constructor');
    }

    // static getDerivedStateFromProps () {
    //     return {
    //         counter:1000
    //     }
    // }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('Render')
        return (
            <div>Hello Kamal {this.state.counter}</div>
        )
    }

    
}

export default LifeCycleMethods