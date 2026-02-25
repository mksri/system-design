const CommentItems = ({data}) =>{
    
    return(
      <>
        {data.map((d ,index) => <div key={index} className="flex">            
        <img className="w-10 h-10 rounded-full object-cover" src={d.pic} alt="username"/>
        <div className="p-2 bg-gray-100 rounded-lg">
        <h1 className="font-bold">{d.name}</h1>
        <span>{d.comment}</span>
        {d.replies && d.replies.length > 0 && (
            <CommentItems data={d.replies}></CommentItems>
        )}
         </div>   
        </div>)} 
        
   </>
    )
    
}
export default CommentItems;