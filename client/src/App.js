import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import Products from './pages/Products';
import Downloads from './pages/Downloads';
import People from './pages/People';
import Invoice from './pages/Invoice';
import Support from './pages/Support';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addnewuser' element={<AddUser/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/downloads' element={<Downloads/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/updateuser/:id' element={<UpdateUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
