
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
 

import './App.css';

function App() {
  return (
    
     

        <div className='App'>

            <header>
              < NavBar />
            </header>

            <main>
            <Routes>
              <Route path='/' element={<Home/>} />  
            </Routes>  
            </main> 

        </div>

    
  )
}

export default App;
