import ToDoList from './homePage.jsx'
import ToDoLi from './functionToDoList.jsx'
import Register from './signUp.jsx'

import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ToDoLi />} />
        <Route path='/sendHome' element={<ToDoList />} />
        <Route path='/todo' element={<ToDoLi />} />
        <Route path='/sign' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
