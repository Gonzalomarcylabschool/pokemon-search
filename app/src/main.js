import './style.css'
import { renderOnePokemon } from './utils/render.js';

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target)
  const dataObj = Object.fromEntries(formData);
  // const data = Object.fromEntries(new FormData(e.target));
  console.log(dataObj.pokemonName);
  renderOnePokemon(dataObj.pokemonName);
}
const main = () => {
  console.log('working');
  document.querySelector('form').addEventListener('submit', handleSubmit);
} 

main();