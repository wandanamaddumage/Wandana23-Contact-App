import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    console.log(contact);
    const newContacts = [...contacts, { id: uuidv4(), ...contact }];
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact Component={() => <ContactList contacts={contacts} getContactId={removeContactHandler}/>}/> 
          <Route path="/add" Component={() => <AddContact AddContactHandler={AddContactHandler}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
