const express=require('express');
require('./Db/config')
const User=require("./Db/User");
const Product=require("./Db/products");
const app=express();
const cors=require("cors"); //when we develop api in backend since our frontend and backend works on different ports
const products = require('./Db/products');
                            //so it blocks the request as two request from differnt domain they feel
                            // to resolve npm i cors,require,use as middleware

                            
//middlewares controls api data
app.use(express.json());
app.use(cors());





//when accessing http://localhost:5000/register  using post method in postman req sent here and resp sent to postman and  shown on postamn
app.post("/register",async (req,resp)=>{
  if(req.body.password !="" && req.body.email !="" && req.body.name !=""){
     //using express middleware   we can now use req.body to access the data passed
     //here in function we are taking json raw data from postman and inserting into mongodb under e-comm's users section

     let user=new User(req.body); //recieve data from postman using req.body and passing to User model and setting to user
     let result=await user.save(); //saving to mongodb

     //as we dont want to show password in response we cant use .select("-password") here as its used during find only
     result=result.toObject();
     delete result.password;

  resp.send(result);//sending data to postman as response for display
  }

})


//when accessing http://localhost:5000/login  using post method in postman req sent here and resp shown
app.post("/login",async(req,resp)=>{

//if password and email both provided then only do this
  if(req.body.password && req.body.email){
  //will matach the postamn req fields and will match to User model in mongo data base "-" sigin in password means it will send response all field to the one matched except the password
 let user=await User.findOne(req.body).select("-password");
 //if user is matched with someone in database ie user is not null then send resp as user else show message not matched
 if(user)
 resp.send(user)
 else
 resp.send("match Nhi kar raha kisi se")
  }


  else
  resp.send("no user found")
})

app.post("/add-product",async(req,resp)=>{
  let product=new Product(req.body);
  let result=await product.save();
  resp.send(result)
})


app.get("/products",async(req,resp)=>{
  let products=await Product.find();
  if(products.length>0){
    resp.send(products)
  }
  else{
    resp.send({result:"No Products found"})
  }
})

app.delete("/product/:id",async(req,resp)=>{
 
  const result= await Product.deleteOne({_id:req.params.id})
  resp.send(result)
});

app.get("/product/:id",async(req,resp)=>{
let result=await Product.findOne({_id:req.params.id})
if(result){
  resp.send(result)
}
});

app.put("/product/:id", async(req,resp)=>{
  let result=await Product.updateOne(
    {_id:req.params.id},
    {$set:req.body}
  )
  resp.send(result)
})


app.get("/search/:key", async (req, resp) => {
  let result = await Product.find({
      "$or": [
          {
              name: { $regex: req.params.key }  
          },
          {
              company: { $regex: req.params.key }
          },
          {
              category: { $regex: req.params.key }
          }
      ]
  });
  resp.send(result);
})


app.get("/",(req,resp)=>{

   
    resp.send("working ")
});
app.listen(5000);