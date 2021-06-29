import React from 'react'
import './CryptoCoin.css';
const CryptoCoin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
      return (
            <div className="crypto-pro__container">
                  <div className="crypto-pro__row">
                        <div className="crypto-pro__coin">
                              <img src={image} alt="crypto coin" />
                              <h1>{ name }</h1>
                              <p className="crypto-pro__symbol"> {symbol} </p>
                        </div>
                        <div className="crypto-pro__data">
                              <p className="crypto-pro__price">NGN {price} </p>
                              <p className="crypto-pro__volume"> NGN { volume.toLocaleString() } </p>
                              { priceChange < 0 ? (<p className="coin-percent red"> { priceChange.toFixed(2)}% </p>) 
                                                : (<p className="coin-percent red"> { priceChange.toFixed(2)}% </p>)}
                              <p className="crypto-pro__marketcap">
                                    Mkt Cap: NGN{ marketcap.toLocaleString() }
                              </p>
                        </div>
                  </div>
            </div>
      )
}

export default CryptoCoin;
