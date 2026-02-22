import { config } from "../utils/config";


const About = () =>{


     const data = config.sp;
   


    return(

        <div> 
            <div className="text-sm">
                <h1 className="font-bold ">{data.title}</h1>
                <p>{data.desc}</p>           
                <h1 className="font-bold">{data.title2}</h1>
                <p>{data.desc}</p>
                 </div>
        </div>
    )
}

export default About;