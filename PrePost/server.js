const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


app.use(express.json());


const userSchema = new mongoose.Schema({
    name :{type:String ,required:true},
    email:{type:String,required:true},
    password:{type:String, required:true},

},
{
    timeseries:true
}
);

app.post("/users", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(201).send(`user ${newUser.name} has been created successfully`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})