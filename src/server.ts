import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const startServer = async () => {
    app.listen(process.env.PORT || 3000);
};
startServer();
