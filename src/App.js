import './App.css';
import ItemBird from './components/ItemBird/ItemBird';
import React from 'react';

function App() {
  const [listBirds, setListBirds] = React.useState([]);
  const[displayBirds, setDisplayBirds] = React.useState([]);
  const[search, setSearch] = React.useState("");
  const miInput = React.useRef(null);

  React.useEffect(()=>{
    if(miInput && miInput.current){
      miInput.current.addEventListener('keyup', (e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
      })
    }
  },[])

  React.useEffect(()=>{
    const filteredData = listBirds.filter((bird) => {
      console.log(bird.gen, search)
      return bird.gen.toLowerCase().includes(search.toLowerCase()) ||
      bird.en.toLowerCase().includes(search.toLowerCase())
    });
    setDisplayBirds(filteredData);
  },[search])


  React.useEffect(() => {
    // fetch("https://api.coincap.io/v2/assets")
    // fetch("https://newcastle.urbanobservatory.ac.uk/api/v1.1/sensors/json/")
    fetch("https://xeno-canto.org/api/2/recordings?query=cnt:brazil")
      .then(response => response.json())
      // .then(dataJson => {setListCrytops(dataJson.data)});
      .then(dataJson => {
        setListBirds(dataJson.recordings);
        setDisplayBirds(dataJson.recordings);
      });
  }, [])
    // Imagenes https://picsum.photos/200/300
    // Mensajes ded mascotas https://meowfacts.herokuapp.com/
  return (
    <div className="App">
      <h1>Bird World - MOdulo 3</h1>
      <p>Busquedad por palabra clave:</p>
      <div>
        <input type="text" ref={miInput}/>
      </div>
      <div className="App-container">
        {displayBirds.map(bird => <ItemBird 
          // symbol={bird.symbol} 
          // price={bird.priceUsd} 
          // rank={bird.rank}
          // name={bird.name} 
          // quantity={bird.supply} 
          // marketCap={bird.marketCapUsd}
          // key={bird.symbol}
          symbol={bird.sp} 
          price={bird.id} 
          rank={bird.en}
          name={bird.gen} 
          quantity={bird.loc} 
          marketCap={bird.sono.full}
          key={bird.id}
        />)}
      </div>
    </div>
  );
}

export default App;
