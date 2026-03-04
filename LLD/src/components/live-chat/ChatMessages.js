const ChatMessages = ({name, message, pic}) =>{
    return(
        <div>
            <div className="flex m-2">
            <img className="w-7 h-7 rounded-2xl p-1" src={pic} alt="profilepic"/>
            <span className="font-bold text-nowrap">{name} </span>
            <span className="px-1">- {message}</span>
            </div>
        </div>
    )
}

export default ChatMessages;