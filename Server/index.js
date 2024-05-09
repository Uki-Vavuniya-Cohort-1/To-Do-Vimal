const express = require('express');
const mongoose = require('mongoose');
const Note = require('./note.model');
const cors = require('cors');

const URI = "mongodb+srv://Vimal:vimal123@cluster0.nxgex.mongodb.net/your-database-name?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3004;

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Fetch all notes
app.get("/notes", async (req, res) => {
   try {
      const notes = await Note.find();
      res.json(notes);
   } catch (err) {
      console.error('Error fetching notes:', err);
      res.status(500).json({ error: 'An error occurred while fetching notes' });
   }
});

// Create a new note
app.post('/notes', async (req, res) => {
   try {
      const note = await Note.create(req.body);
      res.status(201).json(note);
   } catch (err) {
      console.error('Error creating note:', err);
      res.status(500).json({ error: 'An error occurred while creating the note' });
   }
});


app.put('/product/:id', async (req, res) => {
   try {
      const { id } = req.params;
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
      const { id } = req.params;
      const product = await User.findByIdAndDelete(id)
      if (!product) {
         return res.status(404).json({ message: "Product not found" })
      }
      res.status(200).json(product)
      console.log("Deleted")

   }
   catch (err) {
      console.log(err)
   }
})

// app.get("/note/:id", async (req, res) => {
//    const Id = req.params.Id;
//    const note = await Note.findById(Id);
//    res.send(note);
// });


// app.post('/Note', async (req, res) => {
//    try {
//       const product = await Note.create(req.body)
//       res.status(200).json(product)
//    }
//    catch (err) {
//       console.log(err);
//    }
// })

// app.put('/product/:id', async (req, res) => {
//    try {
//       const { id } = req.params;
//       await Note.findByIdAndUpdate(id, req.body);
//       const product = await Note.findById(id)
//       res.status(200).json(product);
//    }
//    catch (err) {
//       console.log(err)
//    }
// })

// app.delete('/product/:id', async (req, res) => {
//    try {
//       const { id } = req.params;
//       const product = await Note.findByIdAndDelete(id)
//       if (!product) {
//          return res.status(404).json({ message: "Product not found" })
//       }
//       res.status(200).json(product)
//       console.log("Deleted")

//    }
//    catch (err) {
//       console.log(err)
//    }
// }
// )  

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
