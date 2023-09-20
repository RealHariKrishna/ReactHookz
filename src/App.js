import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Tab1 from './Component/Tab1'
import Tab2 from './Component/Tab2'
import Home from './Component/Home'
import NotFound from './Component/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Routes>
    <Route exact path="/" element={<Home/>} />
     <Route exact path="/page1" element={<Tab1/>} />
     <Route exact path="/page2" element={<Tab2/>} />
     <Route element={<NotFound/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;
