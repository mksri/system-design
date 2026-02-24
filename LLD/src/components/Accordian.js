import AccordianItems from "./AccordianItems";
import { useState } from "react";

const Accordian = () =>{

    const [ isOpenIndex , setIsOpenIndex ] = useState(null);


    const data = [

        {
            title: "Accordian Item 1",
            description: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. "
        },
        {
            title: "Accordian Item 2",
            description: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. "
        },
        {
            title: "Accordian Item 3",
            description: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. "
        },
    ]


    return(
        <div>            
        <div className="p-4 m-auto w-[50%]">
          {data.map((d, index) => (
            <AccordianItems 
            key={index} 
            data={d}
            isOpen ={isOpenIndex == index}
            onToggle={()=> setIsOpenIndex(isOpenIndex == index ? 'null' : index)}
            /> 
            ))}     
                </div>
        </div>
    )
}

export default Accordian;