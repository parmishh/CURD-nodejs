import React,{useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct =()=>{

    const[name,setName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[category,setCategory]=React.useState('');
    const[company,setCompany]=React.useState('');
    const navigate=useNavigate();
    
    const params=useParams();
    useEffect(()=>{
        getProductDetails();

    },[])
    const  getProductDetails=async()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`)
        result =await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
   const updateProduct=async()=>{
    let result =fetch(`http://localhost:5000/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':"application/json"
        }
    })
    navigate('/');

   }

    return(
        <div classname='product'>
            
            <h1>Update Product</h1>
            <input type="text" placeholder="enter product name" className="inputbox2" value={name} onChange={(e)=>{setName(e.target.value)}}/>

            <input type="text" placeholder="enter product price" className="inputbox2" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
           
            <input type="text" placeholder="enter product category" className="inputbox2" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            
 
            <button onClick={updateProduct} className='appButton'>Update Product</button>
           
        </div>
    )
}
export default UpdateProduct;