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
    //HARD: Using an array of contacts, loop through each one and create a new Contact component for each
    const contactList = people.map(function (person, i) {
      return (<Contact key={i} firstName={person.fname} lastName={person.lname} phoneNumber={person.phone} status={person.status} />)
    })

    return (
      <div className="challange">
      //VERY EASY: Create a React class component that renders "hello world" in an h1 tag. You don't need props for this one.
      //EASY:  Pass a prop for "name" into the component you just created so the h1 tag reads, "Hello world, {name}"
        <Name  name="Ivan"/>
      //MEDIUM: Create a child Contact component inside the original component you created that you pass in a firstName, lastName, and phoneNumber and print out "You need to contact {firstName} {lastName} at {phoneNumber}
        <Contact firstName=" Ivan" lastName="Rosario" phoneNumber="704-345-0913"  />
        {contactList}

      </div>
    );
  }
}


export default App;



// //VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.

