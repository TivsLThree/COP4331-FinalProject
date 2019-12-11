import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form"
import '../css/Login.css'
class SearchBar extends Component {
  constructor (props)
  {
    super(props)
    this.state = {
      searchText: ""
    }
  }
  _handleKeyDown = (e) =>{
    if(e.key === 'Enter')
    {
      e.preventDefault();
      this.handleSubmit();
    }
  }
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }
  handleSubmit = (e) =>
  {
    this.props.search(this.state)
  }
  render () {
    const style = {
      position: '',
      display: 'inline-block',
      border: '1px solid black'
    };
    return (
      <Form className="form-inline md-form form-sm mt-0">
        <Form.Row>
          <Form.Group as = {Form.Col} md="2">
            <input
              className="form-control form-control-sm ml-3 w-75"
              type= "text"
              placeholder="Search some text..."
              onChange = {this.handleChange}
              aria-label="Search"
              autoFocus={true}
              style = {style}
              onKeyPress = {this._handleKeyDown}
            />
          </Form.Group>
          <Form.Group as = {Form.Col} md="3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleSubmit}
            style={style}
            ><b><span role="img" aria-label="Search"></span>Search</b></button>
          </Form.Group>
        </Form.Row>
      </Form>
    )
  }
}
export default SearchBar;
