import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCoin from './components/CryptoCoin';
import './App.css'
import cryptopro from './cryptopro.png';
const cryptoURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

 function App() {
// const [coindata, setCoinData] = useState([]);
const [coindata, setCoinData] = useState([]);
const [search, setSearch] = useState('');

  const fetchData = async () => {
    try {
      const { data } = await axios.get(cryptoURL);
      setCoinData(data);
      console.log(coindata)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = ({ target: { value }}) => setSearch(value);
  const filteredCoins = coindata.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()) )

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 5000);
    //eslint-disable-next-line
  }, []);
  return (
<div className="crypto-pro__pro">
      <img src={cryptopro} alt="logo"className="brand__logo"/>
      <h2 style={{ textAlign: "center"}}>CryptoPro</h2>
      <div className="crypto-pro__search">
        <form>
          <input type="text" onChange={handleSearch} placeholder="Search for Crypto  e.g ethereum" className="crypto-pro__input" />
        </form>
      </div>
      {
        filteredCoins.map(coin => {
          const { id, image, name, symbol, current_price, market_cap, price_change_percentage_24h, total_volume } = coin;
          return (<CryptoCoin key={id} image={image} name={name} symbol={symbol} price={current_price} 
            volume={market_cap} priceChange={price_change_percentage_24h} marketcap={market_cap} totalVolume={total_volume} />)
        })
      }
    </div>
  ) ;
}

export default App;
