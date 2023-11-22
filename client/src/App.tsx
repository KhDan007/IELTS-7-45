import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Speaking_1 } from './pages/Speaking_1';
import { Speaking_2 } from './pages/Speaking_2';
import { Writing_1 } from './pages/Writing_1';
import { Writing_2 } from './pages/Writing_2';

function App() {
   return (
      <div className="App">
         <Router>
            <Header />

            <Routes>
               <Route path='/speaking/part-1' element={<Speaking_1 />}></Route>
               <Route path='/speaking/part-2' element={<Speaking_2 />}></Route>
               <Route path='/writing/part-1' element={<Writing_1 />}></Route>
               <Route path='/writing/part-2' element={<Writing_2 />}></Route>
            </Routes>
         </Router>
      </div>
   );
}

export default App;
