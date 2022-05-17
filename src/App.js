
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import FavList from './Components/FavList/FavList';

function App() {
  return (
    
     

        <div className='App'>

            <header>
              < NavBar />
              <br></br>
            </header>
            
            <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/FavList' element={<FavList/>} />

            </Routes>  
            </main> 

        </div>

    
  )
}

export default App;
