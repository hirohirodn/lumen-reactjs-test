import './Items.css';
import petrol_1 from '../../assets/images/petro1.jpg' 
import petrol_2 from '../../assets/images/petro2.jpg' 
import rebate_1 from '../../assets/images/rebate1.jpg' 
import rebate_2 from '../../assets/images/rebate2.jpg' 
import food_1 from '../../assets/images/food1.jpg' 
import food_2 from '../../assets/images/food2.jpg' 




function Items(props){
    return(
        <div className='items'>
            <div className='petrol-items'>
                <h1>   
                Petrol
                </h1>
                    <div className='wrapper'>
                        <div className='petrol-item'>
                            <div class="item" style={{backgroundImage: `url(${petrol_1})`}}>
                            </div>
                            <div className='item-content'>
                                <p>
                                15 Coins
                                </p>
                                <span>
                                50% discount for every $100 top-up on your Shell Petrol Card
                                </span>
                            </div>
                        </div>
                        <div className='petrol-item'>
                            <div class="item" style={{backgroundImage: `url(${petrol_2})`}}>
                            </div>
                            <div className='item-content'>
                                <p id='readed'>
                                1,000 Coins
                                </p>
                                <span>
                                70% discount top-up on your Shell Petrol Card
                                </span>
                                <a>
                                Insufficient coins
                                </a>
                            </div>
                        </div>
                    </div>
           
            </div>
            <div className='petrol-items'>
                <h1>   
                Rental Rebate
                </h1>
                    <div className='wrapper'>
                        <div className='petrol-item'>
                            <div class="item" style={{backgroundImage: `url(${rebate_1})`}}>
                            </div>
                            <div className='item-content'>
                                <p>
                                20 Coins
                                </p>
                                <span>
                                Get $20 Rental rebate
                                </span>
                            </div>
                        </div>
                        <div className='petrol-item'>
                            <div class="item" style={{backgroundImage: `url(${rebate_2})`}}>
                            </div>
                            <div className='item-content'>
                                <p>
                                15 Coins
                                </p>
                                <span>
                                Get $500 Rental rebate
                                </span>
                            </div>
                        </div>
                    </div>
           
            </div>
            <div className='petrol-items'>
                <h1>   
                Food and Beverage
                </h1>
                    <div className='wrapper'>
                        <div className='petrol-item'>
                            <div class="item" style={{backgroundImage: `url(${food_1})`}}>
                            </div>
                            <div className='item-content'>
                                <p>
                                25 Coins
                                </p>
                                <span>
                                NTUC Fairprice $50 Voucher  
                                </span>
                            </div>
                        </div>
                        <div className='petrol-item'>
                            <div class="item" style={{backgroundImage: `url(${food_2})`}}>
                            </div>
                            <div className='item-content'>
                                <p>
                                5 Coins
                                </p>
                                <span>
                                Free Cold Stone Sundae at any flavour!
                                </span>
                            </div>
                        </div>
                    </div>
           
            </div>
        </div>
    )
}
export default Items;