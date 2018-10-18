import React, { Component } from 'react';
import { Consumer } from '../Context';
import axios from 'axios'; 
//import uuid from 'uuid';
import './addform.css';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {nameError: '', emailError:'',phoneError:''}
        }
    
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: [value],  
            error : {nameError: '', emailError:'',phoneError:''}
        });
    }
    handleSubmit = async (dispatch, e) => {
        e.preventDefault();
        console.log(dispatch,e);
        const { name, email, phone , error} = this.state;

        if (!name)
        {
            const nameError = 'Name field can not be empty';
            this.setState({error: {nameError} });
            return;
        }
        if (!email)
        {
            const emailError = 'Email field can not be empty';
           this.setState({error: {emailError} });
           return;
        }
        if (!phone) {
            const phoneError = 'Phone Number field can not be empty';
            this.setState({error: {phoneError} });
            return;
           
        }
       
      
         if (!error.emailError || !error.nameError || !error.phoneError)
         {
            const contact = {
                //id : uuid(),
                name,
                email,
                phone
            };
            const res = await axios.post("http://jsonplaceholder.typicode.com/users",contact);
            dispatch({
                type: 'ADD_CONTACT',
                payload: res.data
            })
           
            this.setState({
                name: '',
                email: '',
                phone: '',
                error: {}
            });
            this.props.history.push('/');
    
         }   
            
    }
  render() {
      const { name, email, phone, error } = this.state;
    return (
        <Consumer>
            {value => {
                return (
                    <div className="card mb-3">
                        <div className="card-header">
                            Add Contact
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit.bind(this,value.dispatch)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" className="form-control text-input" onChange={this.handleChange} placeholder="Name of Contact" value={name} />
                                    { error.nameError && <span style={errorMsg}> { error.nameError } </span> }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control text-input" onChange={this.handleChange} placeholder="Email of Contact" value={email} />
                                    { error.emailError && <span style={errorMsg}> { error.emailError } </span> }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Phone</label>
                                    <input type="tel" name="phone" className="form-control text-input" onChange={this.handleChange} placeholder="Phone Number of Contact" value={phone} />
                                    { error.phoneError && <span style={errorMsg}> { error.phoneError } </span> }
                                </div>
                                <div>
                                    <input type="submit" className="btn btn-block btn-primary" value="Add Contact" />
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

const errorMsg = {
    color: 'red'
}
export default AddContact;