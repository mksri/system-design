import { useState } from 'react';

const AccordianItems = ({ data , isOpen ,onToggle }) =>{

    const { title, description } = data;

   // const [isOpen , setIsOpen] = useState(false);

    return(
        <div className="border-1">
            <div className="border-b-0 p-2 bg-gray-300 cursor-pointer flex justify-between" onClick={onToggle}>{title}
                <span>⬇️</span>
            </div>
           {isOpen && <div className="p-4">{description}</div>}
        </div>
    )
}

export default AccordianItems;