import React from 'react'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

class LoginPage extends React.Component
{
  render() {
    return (
      <div>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Smüdge</span>
      </nav>
      <Form className="col-md-6 col-md-offset-3">
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
    )
  }
}
export default LoginPage;
