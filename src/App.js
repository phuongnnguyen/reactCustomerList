import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Table from './components/Table'
function App() {
  const [customers, setCustomer] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://customers-apis.herokuapp.com/customers/', {
    //fetch('http://localhost:4000/customers', {
      method: 'GET',
      headers: {
        'Appcept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCustomer(data);
      })
  }, []);
  return (
    <div>
      <Header/>
      <div>
        <input value={filter} onChange={e => setFilter(e.target.value)}/>
        <button onClick={() => setFilter('')} type="button">Xoa</button>
      </div>
      <Table customers={filter.length > 0 ? customers.filter(customer => customer.phoneNo.match(filter)) : customers}/>  
    </div>
  );
}

export default App;
