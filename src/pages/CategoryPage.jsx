import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './Pages.css'

export default function CategoryPage() {
    const { categoryName } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setProducts(json.data.products))
    }, [categoryName])

    
    return (
        <div className="container">
            <div className="text-center my-5">
                <h1>{categoryName.toUpperCase()}</h1>
            </div>

            <div className="row">


                {
                    products.map((val, key) =>
                        <div className="col-md-4 my-5" key={key}>
                            <Link to={`/products/${val.id}`} className='text-decoration-none'>
                                <Card>
                                    <Card.Img className='product-card' variant="top" src={val.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{val.title}</Card.Title>
                                        <Card.Text>
                                            Price <del>{val.price}</del>   {val.discountPercentage}
                                        </Card.Text>
                                        <Card.Text className='card-desc'>
                                            {val.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    )
                }


            </div>
        </div>
    )
}
