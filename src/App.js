// import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar.js'
import Menu from './components/Menu.js'
import  Banner from './components/Banner.js'
import Products from './components/Products'
import Form from './components/Form.js'
import Cards from './components/Cards.js'
import './css/bootstrap.css'

function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Products/>
                <Form/>
                <Cards/>
        </div>
   </div>
   </>
  );
}

export default App;
