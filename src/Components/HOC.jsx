import React from 'react';

const products = [
  {productName: 'Abc', price: 100},
  {productName: 'efc1', price: 1000},
  {productName: 'dfd', price: 1000},
  {productName: 'gfg', price: 10000},
  {productName: 'kmk', price: 10000},
]

const withSearch = (WrappedComponent) => {
  class SearchFuctionality extends React.Component {
    constructor(props){
      super(props)
     this.state = {
        search: ''
      }
    }

    updateSearch = (e) => {
      this.setState({search:e.target.value})
    }

    filterProducts = () => {
      return products.filter(product => product.productName.toLowerCase().includes(this.state.search));
    }

    render() {
      const updatedProducts = this.filterProducts();
      return(
        <div>
          <input type="text" onChange={this.updateSearch} />
          <WrappedComponent products={updatedProducts} {...this.props}/>
        </div>
      )
    }
  }

  return SearchFuctionality;
}

export default withSearch;