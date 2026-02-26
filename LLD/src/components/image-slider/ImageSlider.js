import { useState ,useEffect } from "react";

const data = [

    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?_gl=1*hencmc*_ga*MTg4MjQ2MjAxNS4xNzcyMDg3NDk5*_ga_8JE65Q40S6*czE3NzIwODc0OTkkbzEkZzEkdDE3NzIwODc1NjckajU4JGwwJGgw",
    "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?_gl=1*twfb5l*_ga*MTg4MjQ2MjAxNS4xNzcyMDg3NDk5*_ga_8JE65Q40S6*czE3NzIwODc0OTkkbzEkZzEkdDE3NzIwODc4OTckajUyJGwwJGgw",
    "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?_gl=1*ojfrvh*_ga*MTg4MjQ2MjAxNS4xNzcyMDg3NDk5*_ga_8JE65Q40S6*czE3NzIwODc0OTkkbzEkZzEkdDE3NzIwODc5MjQkajI1JGwwJGgw",
    "https://images.pexels.com/photos/1996046/pexels-photo-1996046.jpeg?_gl=1*1kocgj9*_ga*MTg4MjQ2MjAxNS4xNzcyMDg3NDk5*_ga_8JE65Q40S6*czE3NzIwODc0OTkkbzEkZzEkdDE3NzIwODc5NTckajU5JGwwJGgw",
    "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?_gl=1*1pjlibi*_ga*MTg4MjQ2MjAxNS4xNzcyMDg3NDk5*_ga_8JE65Q40S6*czE3NzIwODc0OTkkbzEkZzEkdDE3NzIwODc5NzkkajM3JGwwJGgw"
]


const ImageSlider = () =>{

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() =>{
        console.log(currentImage);
    
       const interval = setInterval(() =>{
           moveImageForward();
        },3000)

        return() =>{
        clearInterval(interval);
        }

    },[]);


    const moveImageForward =() =>{

        setCurrentImage(prev => 
            prev === data.length -1 ? 0 : prev + 1
        );

       // console.log(currentImage);

    }


      const moveImageBackword =() =>{

        setCurrentImage(prev =>
            prev === 0 ? data.length : prev - 1
        )
      
    }

    return(

        <div>
            <div className="relative  mx-120 my-10 flex items-center">
                 <img className="w-5 absolute left-2 -translate-y-1/2 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/722/722215.png" alt="left" onClick={()=> moveImageBackword()}/>
                <img className="w-120 h-120" src={data[currentImage]} alt="thumbail"/>            
                <img className="w-3 absolute mr-25 top-55 right-2 cursor-pointer" src="https://simg.nicepng.com/png/small/118-1183010_slider-arrow-svg-png-icon-free-download-slider.png" alt="right" onClick={()=> moveImageForward()}/>
            </div>
        </div>
    )
}

export default ImageSlider;