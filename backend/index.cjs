const express = require('express');
const mongoose = require('mongoose');
const Connect = require('./config/database_connect.cjs')
const cors = require('cors');
const db = new Connect();

//ROUTES IMPORT
const roomsRoute = require('./routes/rooms.Routes.cjs')
const clientsRoute = require('./routes/clients.Routes.cjs')
const moviesRoute = require('./routes/movies.Routes.cjs')
const functidonsRoute = require('./routes/function.Routes.cjs')
const ticketsRoute = require('./routes/tickets.Routes.cjs')

const app = express();
app.use(cors());

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// API ROUTES
app.use("/rooms", roomsRoute)
app.use("/clients", clientsRoute)
app.use("/movies", moviesRoute)
app.use("/functions", functidonsRoute)
app.use("/tickets", ticketsRoute)


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});



// const Rooms = require('./models/rooms.Models.cjs')

// conection test
// mongoose
// .connect(
//     "mongodb://adminCinecampus:manuelito31!!@3.144.218.77:27017/cineCampus?authSource=cineCampus"
// )
// .then(() => {
//     console.log('Connected to database!');
//     app.listen(3000, () => {
//         console.log('Server is running on port 3000')
//     });
// })
// .catch(()=>{
//     console.log("Connection failed!")
//         });
        
// test
// app.get('/', (req,res) => {
//     res.send('hello from node API updated')
// })
        
        
        