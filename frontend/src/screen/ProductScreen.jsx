import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} varient="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text>
            <Rating value={product.rating} text={product.review} />
          </Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductScreen
