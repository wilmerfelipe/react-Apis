import './App.css';
import ItemCrypto from './components/ItemCrypto/ItemCrypto'
import React from 'react';

const sample = {
  id	:	"bitcoin",
  rank	:	1,
  symbol	:	"BTC",
  name	:	"Bitcoin",
  supply	:	19535156.0000000000000000,
  maxSupply	:	21000000.0000000000000000,
  marketCapUsd	:	682916656476.4346268587827428,
  volumeUsd24Hr	:	5244390594.6605231023336186,
  priceUsd	:	34958.3415907420768413,
  changePercent24Hr	:	0.0614717086621283,
  vwap24Hr	:	35033.9865264259759012,
  explorer	:	"https://blockchain.info/"

}

function App() {
  const [listCryptos, setListCrytops] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then(response => response.json())
      .then(dataJson => {setListCrytops(dataJson.data)});
      
  }, [])
  return (
    <div className="App">
      <h1>Ranking Crytos</h1>
      {listCryptos.map(crypto => <ItemCrypto 
        symbol={crypto.symbol} 
        price={crypto.priceUsd} 
        rank={crypto.rank}
        name={crypto.name} 
        quantity={crypto.supply} 
        marketCap={crypto.marketCapUsd}
        key={crypto.symbol}
      />)}
      
    </div>
  );
}

export default App;
