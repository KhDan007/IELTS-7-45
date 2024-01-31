import './css/App.css';
import './css/Header.css';
import './css/Speaking.css';
import './css/Writing.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Speaking_1 } from './pages/Speaking_1';
import { Speaking_2 } from './pages/Speaking_2';
import { Writing_1 } from './pages/Writing_1';
import { Writing_2 } from './pages/Writing_2';
import { Home } from './pages/Home';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Srs } from './pages/Srs';

function App() {
   return (
      <div className="App d-flex flex-column" style={{ minHeight: '100vh' }}>
         <QueryClientProvider
            client={
               new QueryClient({
                  defaultOptions: {
                     queries: {
                        staleTime: Infinity
                     }
                  }
               })
            }
         >
            <Router>
               <Header />

               <Routes>
                  <Route path="/IELTS-7-45" element={<Home />}></Route>
                  <Route
                     path="/speaking/part-1"
                     element={<Speaking_1 />}
                  ></Route>
                  <Route
                     path="/speaking/part-2"
                     element={<Speaking_2 />}
                  ></Route>
                  <Route path="/writing/part-1" element={<Writing_1 />}></Route>
                  <Route path="/writing/part-2" element={<Writing_2 />}></Route>
                  <Route path="/srs" element={<Srs />}></Route>
               </Routes>

               <Footer />
            </Router>
         </QueryClientProvider>
      </div>
   );
}

export default App;