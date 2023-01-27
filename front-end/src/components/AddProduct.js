import React from "react";

const AddProduct =()=>{

    const[name,setName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[category,setCategory]=React.useState('');
    const[company,setCompany]=React.useState('');
    const[error,setError]=React.useState(false);
    const addProduct= async()=>{

        if(!name || !price || !category || !company)
        { 
            setError(true)
            return false;
        }
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();

    }
    return(
        <div classname='product'>
            
            <h1>Add Products</h1>
            <input type="text" placeholder="enter product name" className="inputbox2" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            {error && !name && <span className="invalid">Enter valid name</span>}
            <input type="text" placeholder="enter product price" className="inputbox2" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            {error && !price && <span className="invalid">Enter valid price</span>}
            <input type="text" placeholder="enter product category" className="inputbox2" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            {error && !category && <span className="invalid">Enter valid category</span>}
            <input type="text" placeholder="enter product company" className="inputbox2" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
            {error && !company && <span className="invalid">Enter valid company</span>}
            <button onClick={addProduct} className='appButton'>Add Product</button>
           
        </div>
    )
}
export default AddProduct;