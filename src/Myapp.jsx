import React from 'react'
import {Body} from './Components/Body'
import LifeCycleMethods from './Components/LifeCycleMethods'
import ProductList from './Components/ProductList'


class Myapp extends React.Component {
    constructor() {
        super()
        this.state = {
            fname: ''
        }
    }

    updateFname = (e) => {
        this.setState({fname:e.target.value })
    }



    render() {
        // const midname = ''
        console.log('KW101', this)
        return (
            <div>
                {/* <Body fname={this.state.fname} lName={'Walia'} midname={midname} updateFname={this.updateFname}/> */}

                {this.state.fname ? <LifeCycleMethods /> : null}

                <input type="text" value={this.state.fname} onChange={this.updateFname} />

                <ProductList fname={this.state.fname}/>
            </div>
           
        )
    }
}

export default Myapp;