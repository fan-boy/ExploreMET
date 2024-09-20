import React from 'react';

import Renaissance from "./Images/Renaissance.png"
import Baroque from "./Images/Baroque.png"
import Rococo from "./Images/Rococo.png"
import Romanticism from "./Images/Romanticism.png"
import Impressionism from "./Images/Impressionism.png"
import Surrealism from "./Images/Surrealism.png"
import Contemporary from "./Images/Contemporary.png"
import { useNavigate } from 'react-router-dom';


const Timeline = () => {
  const timelineData = [
    { year: '1400-1600', event: 'Renaissance', image: Renaissance },
    { year: '1600-1700', event: 'Baroque', image: Baroque },
    { year: '1700-1780', event: 'Rococo', image: Rococo },
    { year: '1800-1850', event: 'Romanticism', image: Romanticism },
    { year: '1860-1880', event: 'Impressionism', image: Impressionism },
    { year: '1920-1940', event: 'Surrealism', image: Surrealism },
    { year: '1980-today', event: 'Contemporary', image: Contemporary },
  ];
  const navigate = useNavigate();
  const onClick =(event:string) =>{
    navigate(`/ages/${event}`)

  }

  return (
    <div className="flex justify-center py-12">
      <div className="relative w-10/12">
        
        <div className="absolute left-[50%] transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>

        
        {timelineData.map((item, index) => (
          <div key={index} className="mb-12 flex items-center w-full relative">
            
            {index%2 === 0 &&
            <div className="w-1/2 text-right pr-8">
              <span className="text-lg font-bold">{item.year}</span>
            </div>
            }
            {index %2 !== 0 &&
             <div className="mr-12 w-1/2 text-center items-center gap-4 cursor-pointer flex flex-col p-6" onClick={() =>onClick(item.event)}>
                  <div className="w-1/2">
                 <img src={item.image} alt={item.event}  />
                 </div>
             <h3 className="text-3xl font-serif">{item.event}</h3>
           </div>
         }

            
            <div className="absolute left-[50%] transform -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full z-10 "></div>

            
            {index%2 !== 0 &&
            <div className="w-1/2 text-left pl-8">
              <span className="text-lg font-bold">{item.year}</span>
            </div>
            }
            {index %2 === 0 &&
             <div className="ml-12 w-1/2 text-center items-center gap-4 cursor-pointer flex flex-col p-6" onClick={() =>onClick(item.event)}>
                 <div className="w-1/2">
                 <img src={item.image} alt={item.event}  />
                 </div>
             <span className="text-3xl font-serif">{item.event}</span>
           </div>
         }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
