import './style/style.css';
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoudpages from "./pages/Notfoudpages";

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/blog' element={<Blogpage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='*' element={<Notfoudpages/>}/>
      </Routes>
    </div>
  );
}

export default App;
