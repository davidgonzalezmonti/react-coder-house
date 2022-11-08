import './App.css';
import Navbar from "./components/Navbar";
import logoStickers from "../src/img/icono.webp";
import ItemListContainer from './components/ItemListContainer';
// import Item from "./components/Item";
// import stockStickers from './components/stockStickers'



function App() {
  return (
    <div className="container">
      <Navbar logo={logoStickers}></Navbar>
{/* <Item item={stockStickers}></Item> */}
<ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;