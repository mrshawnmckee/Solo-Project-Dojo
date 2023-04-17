const express = require("express");
const cors = require("cors");
const app = express();

//Think im good here

//Middelware
//First two ensure that the information sent by the client will be converted and read properly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Ensures front ens and back end can talk to each other
app.use(cors({
    origin: "http://localhost:3000"
}));

//connects server to DB
require("./config/mongoose.config");

const ProjectRoutes = require("./routes/project.routes")
ProjectRoutes(app);

// Starts up the server
app.listen(8000, () => {
    console.log("Listening on Port 8000")
});