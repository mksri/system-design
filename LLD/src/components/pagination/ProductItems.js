

const ProductItems = ({
    title,
    description,
    thumbnail   
}) =>{
    return(
   <div>
    <div className="m-2 gap-0.5 border-pink-400 shadow-pink-300 w-70 h-70 bg-pink-100 object-cover">
        <h1 className="font-bold">{title}</h1>
        <h2>{description}</h2>
        <img className="w-40 h-30" src={thumbnail} alt="thumbnail"/>
    </div>
   </div>
    )
}

export default ProductItems;