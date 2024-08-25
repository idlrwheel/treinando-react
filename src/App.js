import './App.css';
import Products from './components/Products';
import Navbar from './components/Navbar';
const productsList = [
  {
    "id": 1,
    "title": "HIMI",
    "description": "Tinta guache - Paleta com 18 cores",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzCa8h76k-22gVJKoWxpjfUemB6oUJ9mhUlcQXHaG2F6XLSeooqTi-KGDTNFtLeXJDRQsMEw3BOmJKgFfv6-42h-BjwptbI-JdNk7e5T3KuVLe334IbZKJ3Q&usqp=CAE"
    },
    {
    "id": 2,
    "title": "Winson & Newton",
    "description": "Tinta aquarela - Paleta com 25 cores.",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBwkmW-3TWzq-ntzuaQhi0naWTVPHe3wwIRGMjHE-hNCCUTi_Z7Clp_F9QHkJXHspC2mc7XTnGLmnr9ZFoxK9pVX4WQLv_sRU2AlX4aWlKU8TArSThEurK&usqp=CAE"
    },
    {
    "id": 3,
    "title": "Rembrandt",
    "description": "Tinta a óleo - Conjunto com 15 cores.",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQClVaaub_g7XQlIwcdxv39ClXEHj5oiOU6niHGrtz0MaCGs06ZQFJAORNyI0cPrG2jTcbpBbR_BD6eyym-P4tqECa2gJGsfzCb7sDYkEkLPmpeOMjr_XLHeg&usqp=CAE"
    },
    {
    "id": 4,
    "title": "Mont Marte",
    "description": "Tinta acrílica - Conjunto com 36 cores",
    "imageUrl": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTxJ25j_CjRxAJdsBLw7ss3xVqF--ENQH63kJnsiaYnl7SA_afkX9fIF8yRqkoNaLphwesedWdR3Hjmh7z588USAifXWZxZYxQKgI-WNkPEWVA53Nl6CJYQw&usqp=CAE"
    }
      
  ]


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products products={productsList}></Products>
    </div>
  );
}

export default App;
