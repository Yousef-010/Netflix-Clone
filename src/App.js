
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

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
            </Routes>  
            </main> 

        </div>

    
  )
}

export default App;
