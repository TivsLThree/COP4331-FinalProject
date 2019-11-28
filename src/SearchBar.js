import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form"
class SearchBar extends Component {
  constructor (props)
  {
    super(props)
    this.state = {
      searchText: ""
    }
  }

  render () {
    return (
      <Form className="form-inline md-form form-sm mt-0">
        <Form.Row>
          <Form.Group as = {Form.Col} md="2">
            <input
              className="form-control form-control-sm ml-3 w-75"
              type= "text"
              placeholder="Search name"
              onChange = {this.handleChange}
              aria-label="Search"
              autoFocus={true}
            />
          </Form.Group>
          <Form.Group as = {Form.Col} md="3">
          <button
            type="button"
            className="btn"
            onClick={this.handleSubmit}
            ><b><span role="img" aria-label="Search"></span>Search</b></button>
          </Form.Group>
        </Form.Row>
      </Form>
    )
  }
}
export default SearchBar;
