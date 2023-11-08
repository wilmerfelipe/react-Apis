import './ItemCrypto.css';

const ItemCrypto = (props) => {
    return(
        <div className='container-crypto'>
            <div className='header-crypto'>
                <h1><b>Nombre: </b><span className='price-crypto'>{props.name}</span></h1>
                <h2>id: <span className='price-crypto'>{parseFloat(props.price)}</span></h2>
            </div>
            <div className='body-crypto'>
                <p> the English name of the species: {props.rank}</p>
                <p>nombre de la especie: {props.symbol}</p>
                <p>Link: https://{props.marketCap}</p>
                <img className="img-bird" src= {props.marketCap}/>
                {/* //xeno-canto.org/sounds/uploaded/TNYAZUJQBM/ffts/XC573311-med.png
                https://xeno-canto.org/sounds/uploaded/TNYAZUJQBM/ffts/XC573311-med.png */}
                <p>cantidad: {props.quantity}</p>
            </div>
        </div>
    )
};

export default ItemCrypto;