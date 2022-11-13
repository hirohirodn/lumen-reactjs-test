import './Header.css';
import backbtn from '../../assets/images/back-icon.jpg' 

function Header(props){
    return(
        <div className='header'>
            <div className='backbtn'>
            <a className='backbtn'>
              <span className="backbtn"><img src={backbtn} alt=""></img></span>
            </a>
            </div>
            <div className='tier'>
                <h1>Silver Tier</h1>
                <p>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
            </div>
        </div>
    )
}
export default Header;