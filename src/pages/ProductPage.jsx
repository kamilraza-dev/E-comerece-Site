import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import ReactStars from 'react-stars'
import Login from './Login'
import './Pages.css'
import Swal from 'sweetalert2'

export let purchasedProduct = [];
export let cartTotal = 0;


export default function ProductPage() {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [index, setIndex] = useState(0);
    const [productQuantity, setproductQuantity] = useState(1)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const addToCart = () => {


        const userLoginCheck = localStorage.getItem("userLogin");

        if(userLoginCheck == "true"){
            const payload = {
            ...product,
            productQuantity,
            totalPrice : product.price * productQuantity
        }

        purchasedProduct.push({
            productName: payload.title,
            productPrice: payload.price,
            productQuantity: payload.productQuantity,
            totalPrice: payload.totalPrice
        });

        cartTotal += payload.totalPrice;

        console.log(cartTotal)
        console.log(purchasedProduct)

        Swal.fire({
            title: 'Item Added to Cart',
            text: 'Thanks for Shopping',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
          })


        } else {
            Swal.fire({
                title: 'Login to Shop',
                text: 'You are not Login',
                icon: 'error',
                confirmButtonText: 'Login to Continue'
              })
        }
    };

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productId}`).then(json => setProduct(json.data))
    }, [productId])

    return (
        <div className="container">

            <div className="text-center my-5">

                <h1 className="">{product?.title?.toUpperCase()} - <span>{product.price}$</span></h1>
                <div className="d-flex justify-content-center">
                    <ReactStars
                        edit={false}
                        count={5}
                        size={24}
                        color2={'#ffd700'}
                        value={product.rating}
                    />

                </div>
                <button className="btn btn-minus mx-3" disabled={productQuantity == 1 ? true : false} onClick={() => setproductQuantity(productQuantity-1)}>-</button>
                {productQuantity}
                <button className="btn btn-add mx-3" onClick={() => setproductQuantity(productQuantity+1)}>+</button>
            </div>


            <div className="row mb-5">
                <div className="col-md-6">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {
                            product?.images?.map((img, i) => (
                                <Carousel.Item key={i}>
                                    <img
                                        className="d-block w-100 prod-image"
                                        src={img}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            )
                            )
                        }
                    </Carousel>
                </div>
                <div className="col-md-6">


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">{product.category}</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {product?.title}
                            </li>
                        </ol>
                    </nav>


                    <div className="p-5">
                        <h4>{product.brand}</h4>

                        <h6 className="text-secondary">Stock Available - {product.stock}</h6>

                        <p className="text-secondary">{product.description}</p>
                        <br />
                        <button className="CartBtn" onClick={addToCart}>
                            <span className="IconContainer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 576 512"
                                fill="rgb(17, 17, 17)"
                                className="cart"
                                >
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                            </span>
                            <p className="text my-auto">Add to Cart</p>
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}
