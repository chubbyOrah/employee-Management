import express from "express";
import cors from 'cors';
import { adminRoute } from "./routers/AdminRoute.js";
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Specify the exact origin of your React app
    methods: ['GET', 'POST', 'PUT'],
    credentials: true // Allow cookies to be sent with the request
}));

app.use(express.json());
app.use(cookieParser()); // Use cookie-parsr middleware
app.use('/auth', adminRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
