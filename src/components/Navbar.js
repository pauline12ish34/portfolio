import React from 'react';
import {
    BrowserRouter as Router,
  
    Link
  } from "react-router-dom";
// import Home from './Home';
// import About from './About'
// import Contact from './Contact'
//  Routes,Route,

  export default function Navbar() {
    return (
        <Router>
        <nav className='flex justify-between bg-black '>
            <Link to='/' className='pl-8'> <img src="images/Pauline.png" alt="pauline logo" className='w-24 h-24'/></Link>
            <div className='px-4 cursor-pointer md:hidden'>
            <svg class="w-6 h-6 text-slate-100 svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </div>

        <div className='pr-8 md:block hidden pt-8 gap-16 links'>
        <Link to='/'> Home</Link>
        <Link to='/about' className='p-4 text-slate-50'>Home</Link>
        <Link to='/about' className='p-4 text-slate-50'> <a href="#b">About</a> </Link>
        <Link to='/menu' className='p-4 text-slate-50'> Work</Link>
        <Link to='/contact' className='p-4 text-slate-50'> Contact</Link>
        </div>
        </nav>

        {/* <Routes>
          <Route exact path="/contact" element={<Contact/>}/>
        
          <Route exact path="/about" element={ <About />}/>
    
          <Route exact path="/" element ={ <Home />}/>
           
        </Routes> */}
        </Router>
    )
}





// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,Route,
//   Link
// } from "react-router-dom";
// import Users from './ViewList'
// import NewUser from './CreateUser'
// export default function Navbar() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/" className="p-4 ">Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="p-4 ">About</Link>
//             </li>
//             <li>
//               <Link to="/users"  className="p-4 ">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           <Route exact path="/createUser" element={<NewUser/>}/>
        
//           <Route exact path="/users" element={ <Users />}/>
    
//           <Route exact path="/" element ={ <NewUser />}/>
           
//         </Routes>
//       </div>
//     </Router>
//   );
// }












