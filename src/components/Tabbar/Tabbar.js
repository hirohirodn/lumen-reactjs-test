import './Tabbar.css';
import home from '../../assets/images/home-icon.jpg'
import noti from '../../assets/images/noti-icon.jpg'
import user from '../../assets/images/user-icon.jpg'
import wallet from '../../assets/images/wallet-icon.jpg'

function Tabbar(props){
    return(
        <div className="tab-bar">
        <ul className="tab-bar">
            <li className="tab">
            <a className="tab" href="#" data-text="Home">
                    <span className="icon"><img src={home} alt=""></img></span>
                  </a>
            </li>
            <li className="tab">
            <a className="tab" href="#" data-text="Home">
                    <span className="icon"><img src={noti} alt=""></img></span>
                  </a>
            </li>
            <li className="tab">
            <a className="tab" href="#" data-text="Home">
                    <span className="icon"><img src={wallet} alt=""></img></span>
                  </a>
            </li>
            <li className="tab">
            <a className="tab" href="#" data-text="Home">
                    <span className="icon"><img src={user} alt=""></img></span>
                  </a>
            </li>
         
        </ul>
      </div>
    )
}
export default Tabbar;