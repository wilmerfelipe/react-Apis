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
    // fetch("https://api.coincap.io/v2/assets")
    // fetch("https://newcastle.urbanobservatory.ac.uk/api/v1.1/sensors/json/")
    fetch("https://xeno-canto.org/api/2/recordings?query=cnt:brazil")
      .then(response => response.json())
      // .then(dataJson => {setListCrytops(dataJson.data)});
      .then(dataJson => {setListCrytops(dataJson.recordings)});
  }, [])
    // Imagenes https://picsum.photos/200/300
    // Mensajes ded mascotas https://meowfacts.herokuapp.com/
  return (
    <div className="App">
      <h1>Bird World</h1>
      {listCryptos.map(crypto => 
      <ItemCrypto 
        // symbol={crypto.symbol} 
        // price={crypto.priceUsd} 
        // rank={crypto.rank}
        // name={crypto.name} 
        // quantity={crypto.supply} 
        // marketCap={crypto.marketCapUsd}
        // key={crypto.symbol}
        symbol={crypto.sp} 
        price={crypto.id} 
        rank={crypto.en}
        name={crypto.gen} 
        quantity={crypto.loc} 
        marketCap={crypto.sono.full}
        key={crypto.id}
      />)}
      
    </div>
  );
}

export default App;
