import './App.css';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import MyCoupons from './components/MyCoupons/MyCoupons';
import Tabbar from './components/Tabbar/Tabbar';

function App() {
  return (
    <div className="App">
      <Header />
      <MyCoupons />
      <Items />
      <Tabbar />
    </div>
  );
}

export default App;
