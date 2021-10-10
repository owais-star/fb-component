import book from './images/book.jpg';
import Fbpost from "./Fbpost.jsx"
// import './App.css';

function App() {
  return (
<div>
      <Fbpost description="hi this is owais" postimg={book} userimg={book} username="wasif"/>
      <Fbpost description="hi this is owaisfd" postimg={book} userimg={book} username="bilal"/>
      <Fbpost description="hi this is owaisdfddg" postimg={book} userimg={book} username="kldfj"/>
</div>
);
}

export default App;
