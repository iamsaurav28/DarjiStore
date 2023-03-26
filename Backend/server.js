const express = require("express");
const notes = require("./Data/Notes")
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const UserRoutes = require("./Routes/UserRoutes");
const { notFound, errorHandler } = require("./Middleware/ErrorMiddlewares");


const app= express();
dotenv.config()
connectDB();
app.use(express.json())



 app.get("/", (req, res) => {
      res.send("API is running ")
 })

 app.get("/api/notes", (req,res) => {
      res.json(notes)
 })

 app.use("/api/users", UserRoutes);
 app.use(notFound);
 app.use(errorHandler);



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server started on PORT ${PORT}`))


