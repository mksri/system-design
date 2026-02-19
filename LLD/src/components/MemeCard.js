const MemeCard = ({data}) =>{

    const {title, url, author} = data;
    
    return(
    <div >
       <div>
       <img className="w-50 h-56 border-2 rounded-2xl" src={url}></img> </div>
    </div>
    )
}

export default MemeCard;