import ToDoList from './homePage.jsx'
import ToDoLi from './functionToDoList.jsx'
import Register from './signUp.jsx'

import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {


  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ToDoLi></ToDoLi>}></Route>
    <Route path='/sendHome' element={<ToDoList />}/>
    <Route path='/todo' element={<ToDoLi />}/>
    <Route path='/sign' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
