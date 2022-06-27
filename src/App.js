import './style/style.css';
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoudpages from "./pages/Notfoudpages";
import Layout from './components/Layout';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='blog' element={<Blogpage/>}/>
          <Route path='about' element={<Aboutpage/>}/>
          <Route path='*' element={<Notfoudpages/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
