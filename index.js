const express = require('express');
const mongoose = require('mongoose');
const User = require('./note_model');
const URI = "mongodb+srv://Vimal:vimal123@cluster0.nxgex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const app = express();
app.use(express.json());

const connect = async () => {
    try {                                  
       await mongoose.connect(URI, { useNewUrlParser: true })
       console.log('Connected to MongoDB');
    } catch (err) {
       console.log(err);
    }
 } 
 connect()

 app.listen(3000, () => {
   console.log('Server is running on port 3000');
});



// app.get('/home', (req, res) => {
//    res.send("Welcometo Our Home Page")
// })



// app.get('/about', (req, res) => {
//    const prices = UseR.map(product => UseR.name);
//    res.send(`Product Prices: ${prices}`);
// });

// app.get('/product/:id', (req, res) => {
//    const productId = req.params.id;
//    const product = UseR.find(product => UseR.id === parseInt(2));
//    if (product) {
//       res.send(`Product Details: ${JSON.stringify(product)}`);
//    } else {
//       res.status(404).send('Product not found');
//    }
// });




app.post('/product', async (req, res) => {
   try {
      const product = await User.create(req.body)
      res.status(200).json(product)
   }
    catch (err) {
      console.log(err);
   }
})

app.put('/product/:id', async (req, res) => {
   try {
       const {id} = req.params;
       await User.findByIdAndUpdate(id, req.body);
       const product = await User.findById(id)
       res.status(200).json(product);
   }
   catch (err) {
       console.log(err)
   }
}
)

app.delete('/product/:id', async (req, res) => {
   try {
       const {id} = req.params;
       const product = await User.findByIdAndDelete(id)
       if(!product) {
           return res.status(404).json({message: "Product not found"})
       }
       res.status(200).json(product)
       console.log("Deleted")
       
   }
   catch (err) {
       console.log(err)
   }
}
)