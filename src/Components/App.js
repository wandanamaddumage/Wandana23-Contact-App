import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('Retrived Contacts:', retriveContacts);
    if (retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact AddContactHandler={AddContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
