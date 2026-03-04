import ProductItems from "./ProductItems";
import { useEffect ,useState } from 'react';

const Pagination = () =>{

    const [productList , setProductList] = useState([]);
    const [noOfPages, setNoOfPages] = useState(0);
    const [currentPage , setCurrentPage] = useState(0);


    useEffect(() =>{

      fetchProducts();  

    },currentPage);


    const fetchProducts = async ()=> {

        let itemsPerPage = 10;

        const data = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}`);


        const json = await data.json();
        
        const pageCount = Math.ceil(json.total/itemsPerPage) ;
        console.log(pageCount);
        setNoOfPages(pageCount);

        console.log(json.products);

        setProductList(json.products);


    }

    return(

        <div className="p-4 flex flex-wrap"> 
         {productList.map((product) => <ProductItems key={product.id} 
         title={product.title} 
         description={product.description}
         thumbnail={product.thumbnail} 
         />)}
        <div>
        <span className="cursor-pointer">Prev</span>
        {[...Array(noOfPages).keys()].map((pn) => 
            <span className={"p-2 cursor-pointer" + (pn == currentPage && "font-bold underline")} 
             key={pn}
            onClick={() => setCurrentPage(pn)}
            >{pn + 1}            
            </span> )}
        <span className="cursor-pointer">Next</span>
    </div>
        </div>
    )
}

export default Pagination;