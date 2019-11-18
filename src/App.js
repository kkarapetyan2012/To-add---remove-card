import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Card from './components/Card/Card';
import './App.css';

function App() {

  // const [tab, setTab] = useState(false)
  const [tab, setTab] = useState({tab: 'Product'})
  const [selected, setSelected] = useState([])

  const changeTab = (tab) => {
    setTab({tab: tab})
  }

  const addCard = (item) => {
    setSelected([...selected, item]) 
  }

  const removeCard = (id) => {
    setSelected([...selected].filter(item => item.id !== id))
  }



  return (
    <div className="App">
      <Navigation count={selected} changeTab={changeTab} />
      {/* <div>
        <button onClick={() => setTab(false)}>Product</button>
        <button onClick={() => setTab(true)}>Cart</button>
      </div> */}
      

      {/* {tab ? <Products /> : <Card />} */}

      {(tab.tab === "Product") ? <Products addCard={addCard} /> : <Card removeCard={removeCard} selected={selected}/>}


    </div>
  );
}

export default App;
