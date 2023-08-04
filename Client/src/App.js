import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { Routes , Route , useLocation , useNavigate} from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import imgLogin from './img/xGhostx_reescaled.jpg'
import imgError from './img/Error404.jpg'
import img from './img/Sparky8571.jpg'
import Favorites from './components/Favorites/Favorites';

function App() {
   const navigate = useNavigate();
   const {pathname} = useLocation();


   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   async function onSearch(id) {
      try{
         const URL = `http://localhost:3001/rickandmorty/character/${id}`
         const { data } = await axios(URL);
         if (data.id) {
            const characterExists = characters.find((character) => character.id === data.id);
            if (characterExists) {
               alert(`Don't add repeating characters. Berrrp that's not Canon!`);
            } else {
               setCharacters((characters) => [...characters, data]);
            }
         }
      }
      catch(error){
         alert(`Oh, geez Rick, there are no characters with that ID!`);
      }
   }

   function onClose(id) {
      setCharacters(
         characters.filter((character)=>{
            return character.id !== Number(id);
         })
      )
   }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const QUERY = `?email=${email}&password=${password}`
         const { data } = await axios(URL + QUERY);
         const { access } = data;
         localStorage.setItem('access', access);
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         alert("User unknown");
      }
   }

   useEffect(() => {
      const storedAccess = localStorage.getItem('access');
      if (storedAccess) {
         setAccess(storedAccess === 'true');
      } else {
         navigate('/login');
      }
   }, [pathname]);

   // localStorage.clear()
   
   //Cambio de Background
   useEffect(()=>{
      if(pathname === "/login"){
         document.body.style.backgroundImage = `url('${imgLogin}')`;
      }else if(pathname === "/home" || 
               pathname === "/about" || 
               pathname.startsWith("/detail") || 
               pathname === "/favorites" ){
         document.body.style.backgroundImage = `url('${img}')`;
      }else {
         document.body.style.backgroundImage = `url('${imgError}')`;
      }
   },[pathname]);

   return (
      <div className='App'>
         {
            (pathname !== ("/login")) ? <Nav onSearch={onSearch}/> : null
         }
         {console.log(pathname)}
         <Routes>
            <Route 
               path='/login'
               element={<Form login={login}/>}
               />
            <Route
               path="/home"
               element={<Cards characters={characters} onClose={onClose}/>}
               />
            <Route
               path='/about'
               element={<About />}
               />
            <Route
               path='/detail/:id'
               element={<Detail />}
               />
            <Route
               path='/favorites'
               element={<Favorites onClose={onClose}/>}
               />
            <Route 
               path="*" 
               element={<Error />}
               />
         </Routes>
      </div>
   );
}

export default App;