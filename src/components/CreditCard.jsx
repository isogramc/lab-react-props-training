import visa from './../assets/images/visa.png'
import master from './../assets/images/master-card.svg'

function CreditCard(props){
    const{type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    return(
        <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>

            <div className='cc-content'>
                <div className="card-img"><img src={type==="Visa"?visa:master}/></div>
                <div className='card-num'>&#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; {number.substr(-4)}</div>
                <div className='cc-one'><div>Expires {expirationMonth}/{expirationYear}</div><div className='bank'>{bank}</div></div>
                <div>{owner}</div>
            </div>
            
        </div>
    )
}

export default CreditCard;