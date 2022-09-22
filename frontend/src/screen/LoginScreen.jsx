import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/shared/Message'
import Loader from '../components/shared/Loader'
import { login } from '../actions/userAction'
import FormContainer from '../components/shared/FormContainer'

const LoginScreen = () => {
  const location = useLocation()
  const navigate = useNavigate() //navigate is used in place of history

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.pathname ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <FormContainer>
        <h1>SIGNIN</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form actions="POST" onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
        <Row>
          <Col>
            New Customer ?
            <Link
              to={redirect ? ` register?redirect=${redirect}` : '/register'}
            >
              Register
            </Link>
          </Col>
        </Row>
        {/* <Form onSubmit={submitHandler}>
          <FormGroup controlId="email">
            <From.Label>Email Address</From.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            <From.Label>Password</From.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </FormGroup>
          <Button type="submit" variant="primary">
            SIGN IN
          </Button>
        </Form> */}
      </FormContainer>
    </>
  )
}

export default LoginScreen
