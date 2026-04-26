import Delivery_concept from "../assets/Images/Delivery_concept.jpg";   
import google_pay from "../assets/Images/google_pay.jpg";
import Apple_store from "../assets/Images/Apple_store.jpg";
const Delivery_feed = ()=>{
    return(
        <>
        
            <div className='Delivery_feed_section mt-8  bg-pink-800'>
                <div className="Delivery_feed_section_wrapper w-[80%] h-full m-auto rounded-xl">                    
                    <div className='sm:flex flex-column w-full h-[100%] p-4 '>
                        <div className="justify-center content-around h-100 gap-4">
                            <p className="text-4xl text-pink-200 font-bold text-justify">
                                Stay Home and Get All Your Essentials From Our Market!
                            </p>
                            <p className="text-lg text-pink-200">Download the app from app store or google pay</p>
                            <div className="flex flex-row gap-2 w-[100%]">
                                <img src={google_pay} className="w-[50%]"></img>
                                <img src={Apple_store } className="w-[50%]"></img>
                            </div>
                        </div>
                        <img src={Delivery_concept} className="" ></img>                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Delivery_feed;