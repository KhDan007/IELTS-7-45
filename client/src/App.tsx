import './css/App.css';
import './css/Header.css';
import './css/Speaking.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Speaking_1 } from './pages/Speaking_1';
import { Speaking_2 } from './pages/Speaking_2';
import { Writing_1 } from './pages/Writing_1';
import { Writing_2 } from './pages/Writing_2';
import { Home } from './pages/Home';

import { QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
   return (
      <div className="App">
         <QueryClientProvider client={new QueryClient()}>
            <Router>
            <Header />

            <Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='/speaking/part-1' element={<Speaking_1 />}></Route>
               <Route path='/speaking/part-2' element={<Speaking_2 />}></Route>
               <Route path='/writing/part-1' element={<Writing_1 />}></Route>
               <Route path='/writing/part-2' element={<Writing_2 />}></Route>
            </Routes>
         </Router>
         </QueryClientProvider>
         
      </div>
   );
}

export default App;
