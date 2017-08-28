import React, { Component } from 'react';
import './App.css';
import Name from './Name'
import Contact from './Contact'
class App extends Component {
  constructor() {
    super();

  }

  render() {
    const people = [
      {
        fname: " Sam",
        lname: " Neuspiel",
        phone: "704-444-4444",
      },
      {
        fname: " Ian",
        lname: "Powell",
        phone: "704-555-5555",

      },
      {
        fname: " Juan",
        lname: "David",
        phone: "704-777-7777",
      }
    ];

    const contactList = people.map(function (person, i) {
      return (<Contact key={i} firstName={person.fname} lastName={person.lname} phoneNumber={person.phone} status={person.status} />)
    })

    return (
      <div className="challange">
        <Name  name="Ivan"/>
        <Contact firstName=" Ivan" lastName="Rosario" phoneNumber="704-345-0913"  />
        {contactList}

      </div>
    );
  }
}


export default App;



// //VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.

