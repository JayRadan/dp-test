
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Form from './components/Form';
import EditTodo from './components/EditTodo';
function App() {
  return (
    <div className="App">
  <h1 >lets do it</h1>
  <Routes>
<Route path='/' element={<h1>Welcome to my CRUD App</h1>} />
<Route path='/todos'  >
   <Route  index element={<Form/>} />
     
    <Route   path=':id' element={<EditTodo />} />
 

</Route>

<Route   path='*' element={<h1>nooooooooooooooo</h1>} />

  </Routes>

  
    </div>
  );
}

export default App;
