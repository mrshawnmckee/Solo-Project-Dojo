const mongoose = require("mongoose");

const projectDB = "projectDBnew";

//THink im good here
mongoose.connect('mongodb://localhost/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`You are connected to the database called ${projectDB}`)
    })
    .catch((err) => {
        console.log(`You had a problem connecting to the ${projectDB}. Here is the error:`, err)
    })