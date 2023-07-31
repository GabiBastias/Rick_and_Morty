import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { Routes , Route , useLocation , useNavigate } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import imgLogin from './img/xGhostx_reescaled.jpg'
import imgError from './img/Error404.jpg'
import img from './img/Sparky8571.jpg'
import Favorites from './components/Favorites/Favorites';

function App() {

   // const email = ;
   // const password = ;

   const navigate = useNavigate();
   const {pathname} = useLocation();

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.id) {
            const characterExists = characters.find((character) => character.id === data.id);
            if (!characterExists) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert(`Don't add repeating characters. Berrrp that's not Canon!`);
            }
         }
      })
      .catch((error) => {
         if (error.response) {
           alert(`Oh, geez Rick, there are no characters with that ID!`);
         }
      })
   }

   function onRandom(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.id) {
            const characterExists = characters.find((character) => character.id === data.id);
            if (!characterExists) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert(`Don't add repeating characters. Berrrp that's not Canon!`);
            }
         }
      })
      .catch((error) => {
         if (error.response) {
           alert(`Oh, geez Rick, there are no characters with that ID!`);
         }
      })
   }

   function onClose(id) {
      setCharacters(
         characters.filter((character)=>{
            return character.id !== Number(id);
         })
      )
   }

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      if (!access) navigate('/');
   }, [access, navigate]);


   //Cambio de Background
   useEffect(()=>{
      if(pathname === "/"){
         document.body.style.backgroundImage = `url('${imgLogin}')`;
      }else if(pathname === "*"){
         document.body.style.backgroundImage = `url('${imgError}')`;
      }else {
         document.body.style.backgroundImage = `url('${img}')`;
      }
   },[pathname]);

   return (
      <div className='App'>
         {
            pathname !== ("/") && <Nav onSearch={onSearch} onRandom={onRandom}/>
         }
         <Routes>
            <Route 
               path='/'
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
               path="*" 
               element={<Error />}
               />
            <Route
               path='/favorites'
               element={<Favorites onClose={onClose}/>}
               />
         </Routes>
      </div>
   );
}

export default App;