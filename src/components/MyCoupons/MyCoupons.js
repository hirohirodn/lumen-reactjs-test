import './MyCoupons.css';
import background from '../../assets/images/bg-mycoupons.png' 

function MyCoupons(props){
    return(
    <div className='my-coupons' style={{backgroundImage: `url(${background})` }}>
            <div className='avai-coin-balance'>
                <span>
                Available Coin balance
                </span>
                <h1>
                340 
                </h1>
                <div className='load-line'>
                    <div className='loaded-line'></div>
                </div>
                <p>
                You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
                </p>
            </div>
            <div className='view-tier-benefits'>
                <p>
                View tier benefits
                </p>
                <button>My Coupons</button>
                <div>
                    <span>
                    Updated : 02/11/2021
                    </span>
                </div>
            </div>
        </div>
    )
}
export default MyCoupons;