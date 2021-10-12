
import React, { Component } from 'react';
import ListContacts from './ListContacts';
// class ContactList extends React.Component {
//   render() {
//     // const people2 = [
//     //   { name: 'aaaaa' },
//     //   { name: 'bbbbb' },
//     //   { name: 'ccccc' }
//     // ]
//     const people2 = this.props.contacts
//     return <ol>
//       {people2.map(person => (<li key={person.name}> {person.name} </li>))}
//     </ol>
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <ContactList  contacts={[{name:'aaaaaaaa'},{name:'bcbcbcb'},{name:'ccmcmcmc'}]}/>
//         <ContactList contacts={[{name:'amanada'},{name:'foo'},{name:'ahahah'}]}/>
//       </div>
//     )
//   }
// }


// const contacts = [
//   {
//     "id": "ryan",
//     "name": "Ryan Florence",
//     "email": "ryan@reacttraining.com",
//     "avatarURL": "http://localhost:5001/ryan.jpg"
//   },
//   {
//     "id": "michael",
//     "name": "Michael Jackson",
//     "email": "michael@reacttraining.com",
//     "avatarURL": "http://localhost:5001/michael.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "email": "tyler@reacttraining.com",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
// ]

class App extends Component {
  //now if something changes the ui will update - App comnponent is managing data
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  // create method to delete a contact
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts:state.contacts.filter((c) => c.id !== contact.id) //keep only the objects from array that their id is not equal to the one selected


    }))
  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
