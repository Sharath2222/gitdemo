import './App.css';
import Home from './components/Home';
// import Login from './components/Login';
// import BlogList from './components/BlogList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NotFound from './components/NotFound';
// import Header from './components/Header';
import About from './components/About';
// import Contact from './components/Contact';
import { AuthProvider } from './components/Auth';
// import PrivateRoute from './components/PrivateRoute';
import Comments from './components/Comments';
// import Logout from './components/Logout';


function App() {
  return (
    <>
    

 
    <BrowserRouter>
    <AuthProvider>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='/logout' element={<Logout/>}/> */}
     
        {/* <Route path='/blog/:id' > */}
          {/* <Route index={true} element={<BlogDetails />}></Route> */}
          <Route path='comments' element={<Comments/>}></Route>
          
        {/* </Route> */}
        
        <Route path='*' element={<NotFound/>} />
        <Route path='/about' element={<About/>} />
        {/* <Route path='/contact' element={<Contact/>} /> */}
        {/* <Route path='/bloglist' element={<BlogList/>}/> */}


      </Routes>
    </AuthProvider>
    </BrowserRouter>
  
    
    </>
  );
}

export default App;
