import './ItemCrypto.css';

const ItemCrypto = (props) => {
    return(
        <div className='container-crypto'>
            <div className='header-crypto'>
                <h1><b>Nombre: </b><span className='price-crypto'>{props.name}</span></h1>
                <h2>Price: <span className='price-crypto'>${parseFloat(props.price).toFixed(2)}</span></h2>
            </div>
            <div className='body-crypto'>
                <p>Ranking: {props.rank}</p>
                <p>simbolo: {props.symbol}</p>
                <p>capitalización: {props.marketCap}</p>
                <p>cantidad: {props.quantity}</p>
            </div>
        </div>
    )
};

export default ItemCrypto;