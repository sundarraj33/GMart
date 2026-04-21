// import category_fruites from "../assets/Images/category_fruites.jpg";
import category_fruites from "../assets/Images/category_fruites.jpg";
import category_vegitables from "../assets/Images/category_vegitables.jpg";
import category_meat from "../assets/Images/category_meat.jpg";
const Shop_category = ()=>{
    return (
        <>
        <p className="text-4xl font-bold text-center mt-4 underline decoration-2 underline-offset-8 p-2  decoration-green-500"><span className="text-green-500">Shop</span> by Category</p>      
        
        <div className="row w-[80%] m-auto grid sm:grid-cols-3 gap-4 mt-6 mb-6 ">
            <div className='category_card 2-full shadow-lg rounded-lg bg-white p-4'>
                <img src={category_vegitables} className=""></img>
                <p className="text-justify ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta laboriosam, aut laborum perspiciatis eligendi ab recusandae expedita natus quidem excepturi vero, nostrum, quibusdam officia? Molestiae vitae ex eos autem numquam?</p>
                <button className="btn bg-green-400 m-2 p-2 rounded-lg font-bold text-green-50 hover:bg-green-600 hover:cursor-pointer ">Show More</button>
            </div>

            <div className='category_card 2-full shadow-lg rounded-lg bg-white p-4'>
                <img src={category_fruites} ></img>
                <p className="text-justify p-2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta laboriosam, aut laborum perspiciatis eligendi ab recusandae expedita natus quidem excepturi vero, nostrum, quibusdam officia? Molestiae vitae ex eos autem numquam?</p>
                <button className="btn bg-green-400 m-2 p-2 rounded-lg font-bold text-green-50 hover:bg-green-600 hover:cursor-pointer">Show More</button>
            </div>

            <div className='category_card 2-full shadow-lg rounded-lg bg-white p-4'>
                <img src={category_meat} ></img>
                <p className="text-justify p-2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta laboriosam, aut laborum perspiciatis eligendi ab recusandae expedita natus quidem excepturi vero, nostrum, quibusdam officia? Molestiae vitae ex eos autem numquam?</p>
                <button className="btn bg-green-400 m-2 p-2 rounded-lg font-bold text-green-50 hover:bg-green-600 hover:cursor-pointer">Show More</button>
            </div>


        </div>

        </>
    )
}

export default Shop_category;