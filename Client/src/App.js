import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Note from './Pages/Note/Note'
import Contact from './Pages/Contact/Contact'
// import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login'
import Signup from './Pages/Signin/Signin'
import Todo from './Components/Todo-Form/Todo';


export default function home() {
  return(
      <div>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Note' element={<Note/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Login' element={<Login/>}/>
           <Route path='/Signup' element={<Signup/>}/>
           <Route path='/Todo' element={<Todo/>}/>
         </Routes>
      </div>
  )
}



// const ColorChangingButton = () => {
//   const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'cyan', 'magenta', 'teal', 'pink', 'black'];
//   const [currentColorIndex, setCurrentColorIndex] = useState(0);
//   const changeColor = () => {
//     const nextColorIndex = (currentColorIndex + 1) % colors.length;
//     setCurrentColorIndex(nextColorIndex);
//   };
//   return (
//     <button style={{ backgroundColor: colors[currentColorIndex] }} onClick={changeColor}>
//       Click me to change color
//     </button>
//   );
// };
// export default ColorChangingButton;



// export default function App() {
//   const [count, setCount] = useState(0);
//   const decrementCount = () => {
//     setCount(prevCount => prevCount - 1);
//   }
//   const incrementCount = () => {
//     setCount(prevCount => prevCount + 1);
//   }
//   return (
//     <div>
//       <h1> Vaanakam</h1>
//       <div className="button-container">
//         <button onClick={decrementCount}> - </button>
//         <span> {count} </span>
//         <button onClick={incrementCount}> + </button>
//       </div>
     
//     </div>
//   );
// }




// function App() {
//     return (
//       <div>
//         <Home/>
//       </div>
//     );
//   }

// export default App;
