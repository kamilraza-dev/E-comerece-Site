import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Category() {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))
  }, [])

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1>Categories</h1>
        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse animi laudantium, saepe consectetur nemo a, reprehenderit, natus nesciunt optio ut dolores perferendis eaque maxime inventore ipsa. Maxime illum nobis repellat?</p>
      </div>


      <div className="row">
        {
          categories.map((val, key) =>
            <div className="col-md-3 my-3" key={key}>
              <Link to={`/products/category/${val}`} className='text-decoration-none'>
                <Card >
                  <Card.Body>
                    <Card.Title className='text-center'>{val.toUpperCase()}</Card.Title>
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
