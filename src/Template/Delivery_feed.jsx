import Delivery_concept from "../assets/Images/Delivery_concept.jpg";   
const Delivery_feed = ()=>{
    return(
        <>
        
            <div className='Delivery_feed_section mt-8 bg-pink-800'>
                <div className="Delivery_feed_section_wrapper w-[80%] h-100  m-auto bg-pink-800 rounded-xl">
                    {/* <h2 className="text-4xl text-white">hello Everyone</h2> */}
                    <div className='flex flex-row h-[100%] p-4'>
                        <div className="">
                            <p className="text-4xl text-pink-200 font-bold text-justify">
                                Stay Home and Get All Your Essentials From Our Market!
                            </p>
                            <p className="text-lg text-pink-200">Download the app from app store or google pay</p>
                        </div>
                        <img src={Delivery_concept} className=""></img>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Delivery_feed;