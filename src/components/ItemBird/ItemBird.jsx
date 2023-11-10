import './ItemBird.css';

const ItemBird = (props) => {
    return(
        <div className='container-bird'>
            <div className='header-bird'>
                <h1><b>Nombre: </b><span className='price-bird'>{props.name}</span></h1>
                <h2>id: <span className='price-bird'>{parseFloat(props.price)}</span></h2>
            </div>
            <div className='body-bird'>
                <h2 className='body-name'> the English name of the species: {props.rank}</h2>
                <p>nombre de la especie: {props.symbol}</p>
                <li><a href={props.marketCap}> Website sounds </a>
                </li>
                <img className="img-bird" src= {props.marketCap}/>
                {/* //xeno-canto.org/sounds/uploaded/TNYAZUJQBM/ffts/XC573311-med.png
                https://xeno-canto.org/sounds/uploaded/TNYAZUJQBM/ffts/XC573311-med.png */}
                <p>cantidad: {props.quantity}</p>
            </div>
        </div>
    )
};

export default ItemBird;