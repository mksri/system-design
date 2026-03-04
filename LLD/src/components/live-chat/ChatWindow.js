import ChatMessages from "./ChatMessages";
import { useEffect , useState } from "react";

const ChatWindow = () =>{

    const DATA_LIMIT = 10;

    const [chatData , setChatData] = useState([]);

  const nameList =  [
"Aaren"
,
"Aarika"
,
"Abagael"
,
"Abagail"
,
"Abbe"
,
"Abbey"
,
"Abbi"
,
"Abbie"
,
"Abby"
,
"Abbye"
,
"Abigael"
,
"Abigail"
,
"Abigale"
,
"Abra"
,
"Ada"
,
"Adah"
,
"Adaline"
,
"Adan"
,
"Adara"
,
"Adda"
,
"Addi"
,
"Addia"
,
"Addie"
,
"Addy"
,
"Adel"
,
"Adela"
,
"Adelaida"
,
"Adelaide"
,
"Adele"
,
"Adelheid"
,
"Adelice"
,
"Adelina"
,
"Adelind"
,
"Adeline"
,
"Adella"
,
"Adelle"
,
"Adena"
,
"Adey"
,
"Adi"
,
"Adiana"
,
"Adina"
,
"Adora"
,
"Adore"
,
"Adoree"
,
"Adorne"
,
"Adrea"
,
"Adria"
,
"Adriaens"
,
"Adrian"
,
"Adriana"
,
"Adriane"
,
"Adrianna"
,
"Adrianne"
,
"Adriena"
,
"Adrienne"
,
"Aeriel"
,
"Aeriela"
,
"Aeriell"
,
"Afton"
,
"Ag"
,
"Agace"
,
"Agata"
,
"Agatha"
,
"Agathe"
,
"Aggi"
,
"Aggie"
,
"Aggy"
,
"Agna"
,
"Agnella"
,
"Agnes"
,
"Agnese"
,
"Agnesse"
,
"Agneta"
,
"Agnola"
,
"Agretha"
,
"Aida"
,
"Aidan"
,
"Aigneis"
,
"Aila"
,
"Aile"
,
"Ailee"
,
"Aileen"
,
"Ailene" ];


    useEffect(() =>{

      const s = setInterval(fetchData, 2000); 

      return() =>{
      clearInterval(s);
      }
        
    },[]);

    const fetchData = () =>{
      setChatData((messages) => {
      let newMessageList = [...data , ...messages];
       newMessageList = newMessageList.splice(0, DATA_LIMIT);
      return newMessageList;
      })
    }

    const generateRandomNames =() => {
      var finalName = nameList[Math.floor(Math.random() * nameList.length)];
        return finalName; 
    };

    const data = [
        {
            name: generateRandomNames(),
            message: "This is live your streaming chat window demo for system design round",
            pic:"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png"
        }     
    ];


    return(
   <div className="flex flex-col-reverse w-130 h-125 border-2 mx-4 overflow-y-scroll">
    {chatData.map((msg ,index) => <ChatMessages key={index} {...msg}/>)}
   </div>
    )
}

export default ChatWindow;