import React, { useEffect, useState } from "react";

const Loading =() =>{
    const funFacts = [
        "The MET houses over 2 million works of art spanning 5,000 years of world history.",
        "The MET's collection includes an ancient Egyptian temple—The Temple of Dendur, which dates back to 15 B.C.!",
        "The oldest object at the MET is a prehistoric stone tool from the Paleolithic era, over 300,000 years old!",
        "Van Gogh's famous painting 'Wheat Field with Cypresses' is one of the most beloved pieces in the MET’s collection.",
        "The MET’s Costume Institute holds over 33,000 fashion pieces, including rare items from Chanel and Dior.",
        "The MET has one of the largest collections of Islamic art in the world, with over 12,000 objects from Islamic cultures.",
        "The MET has an entire section dedicated to armor and weaponry, displaying intricately crafted pieces from the Middle Ages.",
        "The MET’s collection isn’t just ancient and classical—works by Picasso, Jackson Pollock, and Andy Warhol are also showcased.",
        "The MET Cloisters, a branch of the museum, is dedicated to the art and architecture of medieval Europe.",
        "The museum's collection includes a 3,200-year-old sphinx from ancient Egypt, carved from a single block of granite!"
      ];
    
      const [randomFact, setRandomFact] = useState("");
    
      useEffect(() => {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        setRandomFact(funFacts[randomIndex]);
      }, []);
    

    return(

        <div className="w-full mt-20 text-center items-center flex flex-col gap-4">

          <span className="w-1/2 text-2xl font-serif">
           {randomFact}
          </span>
          <span className="text-lg ">
            Loading...
          </span>
        </div>

    );


}

export default Loading;