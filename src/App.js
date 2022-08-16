import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import RecipeItem from './components/RecipeItem';

function App() {
  useEffect(() => {
    getRandomRecipes();
  }, []); // la funcion se va a ejecutar cada vez que lo q ponga dentro del array se actualice 
  // si el array lo dejo vacio solamente se va a ejecutar en el primer render del componente

  const [recipes, setRecipes] = useState([]);

  const getRandomRecipes = async () => {
    const { data } = await Axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/recipes/random`,
      params: {
        number: 6
      }
    });
    setRecipes(data);
  };

  return (
    <div className="App">
      <h1>Caro Food</h1>
      <div>
        {
         recipes.map((recipe, index) =>
            <RecipeItem
              key={index}
              recipe={recipe}
            />)
        }
      </div>
    </div>
  );
}

export default App;
