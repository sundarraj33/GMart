import person1 from "../assets/Images/feedback/person1.jpg";
import person2 from "../assets/Images/feedback/person2.jpg";
import person3 from "../assets/Images/feedback/person3.jpg";
import person4 from "../assets/Images/feedback/person4.jpg";
import person5 from "../assets/Images/feedback/person5.jpg";
import star_rating from "../assets/Images/feedback/feedback_star.jpg";
import black_star from "../assets/Images/feedback/black_star.jpg";
import { useEffect, useRef, useState } from "react";

const Customer_feedback = () => {

  const original = [
    { img: person1, name: "Mr.Leo", stars: 3 },
    { img: person2, name: "Mr.Sundarj", stars: 5 },
    { img: person3, name: "Mr.Dhanu", stars: 4 },
    { img: person4, name: "Mr.Thalapathi", stars: 3 },
    { img: person5, name: "Mr.Black", stars: 5 },
    { img: person3, name: "Mr.Dhanu", stars: 4 },
  ];

  // infinite clone
  const data = [...original.slice(-3), ...original, ...original.slice(0, 3)];

  const [index, setIndex] = useState(3);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === data.length - 3) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(3);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(original.length);
      }, 500);
    }
  }, [index]);

  const next = () => setIndex(prev => prev + 1);
  const prev = () => setIndex(prev => prev - 1);

  return (
    <div className="w-[100%] sm:w-[80%] m-auto mt-6">

      {/* Title */}
      <p className="text-4xl font-bold text-center underline decoration-2 decoration-green-500 underline-offset-4">
        Voice of <span className="text-green-500">Our Customers</span>
      </p>

      {/* Slider */}
      <div className="overflow-hidden">

        <div
          ref={sliderRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / 3)}%)`,
          }}
        >

          {data.map((item, i) => (
            <div key={i} className="w-1/1 sm:w-1/3 flex-shrink-0">

              <div className="feedback_section_box bg-white m-4 rounded-md shadow-lg p-2 text-center">

                <div className="border p-4">

                  <div className="flex justify-center">
                    <img src={item.img} className="w-32 h-32 rounded-full border-2 border-green-500 m-4" />
                  </div>

                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>

                  <p className="text-lg font-bold">{item.name}</p>

                  <div className="flex justify-center">
                    {[1,2,3,4,5].map((star, idx) => (
                      <img
                        key={idx}
                        src={idx < item.stars ? star_rating : black_star}
                        className="w-6 h-6"
                      />
                    ))}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={prev} className="px-4 py-2 bg-gray-300 rounded">Prev</button>
        <button onClick={next} className="px-4 py-2 bg-gray-300 rounded">Next</button>
      </div>

    </div>
  );
};

export default Customer_feedback;