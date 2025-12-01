
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import CreateComponent from './components/CreateComponent';
import UpdateComponent from './components/UpdateComponent';
import ReadComponent from './components/ReadComponent';
import DeleteComponent from './components/DeleteComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent />}></Route>
        <Route path='/create' element={<CreateComponent />}></Route>
        <Route path='/update/:id' element={<UpdateComponent />}></Route>
        <Route path='/read/:id' element={<ReadComponent />}></Route>
        <Route path='/delete/:id' element={<DeleteComponent />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
