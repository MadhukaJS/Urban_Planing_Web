import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
// import Homes from './components/Homes';

function App() {
  return (
    <div>
 <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home/>}/>
        {/* <Route path="homes" element={<Homes/>}/> */}
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
