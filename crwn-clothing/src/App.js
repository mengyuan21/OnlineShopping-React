import './App.css';
import { SHOP_NOW } from './utils/utils';

function App() {

  const categories = [
    {
      title:'Hats',
      id:1,
    },
    {
      title:'Jackets',
      id:2,
    },
    {
      title:'Sneakers',
      id:3,
    },
    {
      title:'Womens',
      id:4,
    },
    {
      title:'Mens',
      id:5,
    },
  ]

  return (
    <div className='categories-container'> 
      {categories.map((item) => (
        <div className='category-container'>
          <div className='category-body-container'>
            <h2> {item.title} </h2>
            <p> {SHOP_NOW} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
