import { Routes,Route } from 'react-router-dom';
import './App.css';
import Calculator from './component/calculator';
import History  from './component/History';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Calculator/>}></Route>
      <Route path='/history' element={<History/>}></Route>
    </Routes>
  );
}

export default App;
