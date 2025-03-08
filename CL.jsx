Index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Contact Filter App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>


Index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



App.js

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';

const contacts = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Williams', email: 'charlie@example.com' },
  { id: 4, name: 'David Brown', email: 'david@test.com' },
  { id: 5, name: 'Eva Davis', email: 'eva@test.com' },
  { id: 6, name: 'Frank Miller', email: 'frank@example.com' },
  { id: 7, name: 'Grace Wilson', email: 'grace@test.com' },
  { id: 8, name: 'Henry Moore', email: 'henry@example.com' },
  { id: 9, name: 'Isabella Taylor', email: 'isabella@test.com' },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = contacts
    .filter((contact) => {
      const searchLower = searchQuery.toLowerCase();
      const nameLower = contact.name.toLowerCase();
      const emailLower = contact.email.toLowerCase();

      return (
        nameLower.includes(searchLower) || emailLower.includes(searchLower)
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;



Searchbar.js

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setQuery(newValue);
    onSearch(newValue);
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={query}
      onChange={handleChange}
    />
  );
}

export default SearchBar;




Contact list.js

import React from 'react';
import ContactListItem from './ContactListItem';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;



ContactlistItem.js

import React from 'react';

function ContactListItem({ contact }) {
  return (
    <li>
      {contact.name} - {contact.email}
    </li>
  );
}

export default ContactListItem;
