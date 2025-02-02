import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { ShopBy } from './pages/ShopBy'
import { ShopByStates } from './pages/ShopByStates'
import { Products } from "./pages/Products"
import { Product } from './pages/Product'

function App() {
  return <Routes>
    <Route exact path="/"  element={<Home />} />
    <Route exact path="/shop-by"  element={<ShopBy />} />
    <Route exact path="/shop-by-states"  element={<ShopByStates />} />
    <Route exact path="/products/:statename"  element={<Products />} />
    <Route exact path="/product/:id"  element={<Product />} />
  </Routes>
}

export default App
