import React from 'react'
import {Body} from './Components/Body'
import LifeCycleMethods from './Components/LifeCycleMethods'
import ProductList from './Components/ProductList'


class Myapp extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         fname: ''
    //     }
    // }

    // updateFname = (name) => {
    //     this.setState({fname:name })
    // }



    render() {
        // const midname = ''
        return (
            <div>
                {/* <Body fname={this.state.fname} lName={'Walia'} midname={midname} updateFname={this.updateFname}/>

                {this.state.fname ? <LifeCycleMethods /> : null} */}

                <ProductList />
            </div>
           
        )
    }
}

export default Myapp;