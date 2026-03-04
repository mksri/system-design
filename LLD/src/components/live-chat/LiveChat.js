import VideoStream from "./VideoStream";
import ChatWindow from "./ChatWindow";

const LiveChat = () => {
    return(
  <div className="m-4 flex">
    <VideoStream/>
    <ChatWindow/>
    </div>
    )
}

export default LiveChat;