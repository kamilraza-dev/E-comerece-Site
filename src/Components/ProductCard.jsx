import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductModal from './ProductModal'
import './Components.css'

export default function ProductCard(props) {
    return (
        <div className='col-md-4'>
            <Card className='product-card'>
                <Card.Img style={{ width: '100%', height: '250px'}} variant="top" src={props.productData.thumbnail} />
                <Card.Body>
                    <Card.Title>{props.productData.title}</Card.Title>
                    <Card.Text style={{ height: '100px' }}>
                        {props.productData.description}
                    </Card.Text>
                    <Card.Text>
                        <del>{props.productData.price}</del>    {props.productData.discountPercentage}
                    </Card.Text>
                    <ProductModal details={props.productData} />
                </Card.Body>
            </Card>
        </div>
    )
}
