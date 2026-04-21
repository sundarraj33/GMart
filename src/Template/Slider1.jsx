import vegitable from "../assets/Images/vegitable.jpg";
import leaf1 from "../assets/Images/leaf1.jpg";
import leaf2 from "../assets/Images/leaf2.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const Slider1 = ()=>{    
    return(
        <>       
        <img src={leaf1} className="w-32 h-16 rotate-[-20deg] absolute sm:right-10 m-2 pl-12 sm:pl-14"></img>
        <img src={leaf2} className="w-32 h-16 rotate-[-40deg] absolute right-[10%] top-[50%] sm:left-[30%] sm:top-[75%] m-2 pl-12 sm:pl-14"></img>
        <div className="slider_wrapper w-full sm:w-[80%] m-auto  h-[100vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-green-50 sm:grid sm:grid-cols-4 ">                      
            <div className="slider_wrapper_left col-span-2 flex justify-center flex-col items-center sm:items-start">
                <p className="slider_head text-lg bg-orange-100 flex text-orange-900 w-fit p-2 rounded-full text-left m-2" style={{"text-shadow":"2px 2px 10px #ff8b38"}}>Take New Experience...</p>                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                <p className="slider_body text-6xl font-bold p-2 text-wrap" style={{"text-shadow":"2px 2px 10px #6dfe72"}}>Enjoy Fresh <span className='text-green-600' style={{"text-shadow":"1px 1px 1px black"}}>Vegetables</span> &  <span className='text-orange-600'  style={{"text-shadow":"1px 1px 1px black"}}>Fruits</span></p>
                </motion.div>

                <motion.button  
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <button className="slider_btn bg-green-500 w-fit p-2 text-white-1 w-50 rounded-sm shadow-lg hover:cursor-pointer hover:bg-green-600 text-start text-green-50 m-2 flex items-center justify-between gap-2 "><FaShoppingCart /> Shop Now...</button>
                </motion.button>                
            </div>


            <div className="slider_wrapper_right col-span-2 flex items-center justify-center overflow-hidden ">              
              <img src={vegitable} className="static" style={{"filter":"drop-shadow(1px 1px 20px green"}}></img>
            </div>


            

        </div>                
        </>
    )
}

export default Slider1;