import './App.css';
import SearchBar from './components/SearchBar';
import BookData from '../src/db.json'

function App() {
  return (
  
<div className='App'>
<SearchBar placeholder="Enter a Book Name..." data={BookData}/>
</div>

  );
}

export default App;
