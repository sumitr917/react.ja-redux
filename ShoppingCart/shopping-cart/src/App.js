import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products'
import ProductCard from './components/ProductCard/ProductCard';
import Cart from './components/Cart/Cart';
import { prodStore } from './reducer/productsReducer'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={prodStore}>
      <div className="App">
      <NavBar></NavBar>
      <div className='row'>
        <div className='col-md-4'>
          <Products></Products>
        </div>
        <div className='col-md-4'>
          <ProductCard></ProductCard>
        </div>
        <div className='col-md-4'>
          <Cart></Cart>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
