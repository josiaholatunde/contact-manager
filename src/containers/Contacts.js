import React, { Component } from 'react'
import Contact from '../components/Contact';
import { Consumer } from '../Context';
class Contacts extends Component {
  render() {
    
    return (
        <Consumer>
            {value => {
                return (
                    <React.Fragment>
                        { value.contacts.map(contact => (
                            <Contact key={contact.id} contact={contact} />
                        ))}
                    </React.Fragment>
                )
            }}
        </Consumer>
      
    )
  }
}
export default Contacts;