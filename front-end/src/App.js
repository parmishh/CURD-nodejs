
import Nav from './components/Nav.js'
import Footer from './components/footer.js'
import Signup from './components/signup.js'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateComponent from './components/PrivateComponent.js';
import Login from './components/login.js';

import peek from './peek.gif';

import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList.js';
import UpdateProduct from './components/UpdateProduct.js';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>


          <Route element={<PrivateComponent />}>

            <Route path="/" element={
            <>
            {<ProductList/>}
            <img alt="" src={peek} id="peek"/>
            </> 
          }/>

            <Route path="/add" element={<AddProduct/>}/>
            
            <Route path="/update/:id" element={<UpdateProduct/>} />
            <Route path="/logout" element={<h1>logout</h1>} />
            <Route path="/profile" element={<h1>profile</h1>} />
           </Route>
           
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />



        </Routes>
      </BrowserRouter>
        <Footer/>


    </div>
  );
}

export default App;
