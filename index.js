import express from "express";
import AppRoutes from './Routers/hall.booking.js'



const app = express();

const PORT = 4000;

app.use(express.json());

app.use('/hallbooking', AppRoutes);

app.listen(PORT, () => {
    console.log("App is running in", PORT);
})