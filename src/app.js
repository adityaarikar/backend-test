import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" })); // Set the data limit for json format
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //set the data encoding in url
app.use(express.static("public")); //to save some static files
app.use(cookieParser()); //to perform crud operation on cookies

export { app };
