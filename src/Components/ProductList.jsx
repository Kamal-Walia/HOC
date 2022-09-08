import React from 'react';
import withSearch from './HOC'

class ProductList extends React.Component{
    render() {
        return(
            <div>
                <p>Hello {this.props.fname}</p>
                {
                    this.props.products.map((item,index) => {
                        return (
                            <p key={index}>{item.productName} {item.price}</p>
                        )
                    })
                }
            </div>
        )
    }
}

const EnhancedComponent = withSearch(ProductList)


export default EnhancedComponent