import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import { Consumer } from '../Context';
import { Link } from 'react-router-dom';


class Contact extends Component {
  state = {
    showContact: false
  }
  showContact = (e) => this.setState({ showContact: !this.state.showContact });

  onDeleteClick = async (id, dispatch) => {
    const res = await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    setTimeout(dispatch({
      type: 'DELETE_CONTACT',
      payload: id}), 300);
  } 
  

  render() {
      const {  id, name, email, phone} = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h3 style={headingStyle}>
                { name } {' '} <i onClick={this.showContact} className="fa fa-sort-down"/>
                
              <i className="fa fa-trash" style={ floatedRightStyle }  onClick={ () => this.onDeleteClick(id,dispatch) }></i>
              <Link to={`/contact/edit/${id}`} style={{ marginRight: '2rem'}}>
                  <i style={{ float: 'right',color:'green' }} className="fa fa-pencil"></i>
              </Link>
              </h3>
              { this.state.showContact && <ul className="list-group">
                  <li className="list-group-item">Email: { email }</li>
                  <li className="list-group-item">Phone: { phone }</li>
                </ul> }
            </div>
          )
        }}
      </Consumer>
      
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}
const headingStyle = {
  cursor: 'pointer'
}

const floatedRightStyle = {
  float: 'right',
  color: 'red', 
  cursor: 'pointer'
}

export default Contact;
