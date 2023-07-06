import React, { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

const App = () => {
  const initialContacts = contacts.slice(0, 5);
  const [contactList, setContactList] = useState(initialContacts);

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(
      (contact) => !contactList.includes(contact)
    );

    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setContactList((prevList) => [...prevList, randomContact]);
    }
  };

  const sortByName = () => {
    const sortedContacts = contactList.slice().sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactList(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = contactList
      .slice()
      .sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedList);
  };

  const imgStyle = {
    width: "50px",
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Contacts</h1>
        <div className="buttons">
          <button onClick={addRandomContact}>Add Random Contact</button>
          <button onClick={sortByName}>Sort by Name</button>
          <button onClick={sortByPopularity}>Sort by Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} style={imgStyle} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
