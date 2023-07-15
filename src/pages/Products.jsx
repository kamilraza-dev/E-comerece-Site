import ProductCard from '../Components/ProductCard'
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { useEffect, useState } from "react";


export default function Products() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then(json => setProducts(json.products))

    axios.get('https://dummyjson.com/products')
    .then(data=> setProducts(data.data.products))
    .catch(err => console.log(err))


  }, [])


  return (
    <>
      {/* <Counter /> */}
      <div className="container">
        <h1 className="text-center my-5">Products</h1>
        <div className="row">
          {
            products.length > 0 ? (
              <>
                {
                  products.map((product, index) => <ProductCard key={index} productData={product} />)
                }
              </>
            ) :   <div className="d-flex justify-content-center align-items-center" style={{width:'100vw',height:'65vh'}}>
              <Spinner animation="grow" />
            </div>
          }
        </div>
      </div>
    </>
  )
}