import { useState } from "react";
import { BsList } from "react-icons/bs";
const Navbar = ()=>{

  const [show_menu,set_show_menu] = useState(false);
  return(
    <>       
    <header className="w-full h-full bg-green-50">
        <nav className="flex justify-between items-center p-2">
          <div className="logo text-left">           
            <p className="text-2xl font-bold left-2">G<span className="text-orange-500 gap-1">M</span>art</p>
          </div>          
          <ul
            className={`
              ${show_menu ? 'flex' : 'hidden'}
              flex-col absolute top-20 left-0 w-full h-full bg-green-50 justify-center items-center
              sm:static sm:flex sm:flex-row
              gap-5
            `}
          >
            <li className="
              hover:text-orange-400  
                    text-orange-400 
                    cursor-pointer 
                    text-xl 
                    font-medium"
              >Home</li>
            <li className="hover:text-orange-400 cursor-pointer text-xl font-medium hover:font-medium">About</li>
            <li className="hover:text-orange-400 cursor-pointer text-xl font-medium hover:font-medium">Service</li>
            <li className="hover:text-orange-400 cursor-pointer text-xl font-medium hover:font-medium">Contact</li>

            <li className="sm:hidden mt-4">
              <button className="bg-green-400 p-2 font-medium rounded hover:bg-green-500">
                Login
              </button>
            </li>
          </ul>
          <div className="hidden sm:flex">
            <button className="btn bg-green-400 p-2 m-2 font-medium rounded hover:cursor-pointer hover:bg-green-500 text-green-50 font-bold sm:w-25  ">Login</button>
          </div>
            
          <div className="sm:hidden">
            <BsList onClick={()=>set_show_menu(!show_menu)} className="w-16 h-12 text-orange-400"/>
          </div>
        </nav>
    </header> 
    </>
  )
}

export default Navbar;