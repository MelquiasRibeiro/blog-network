import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import multer from "multer"
import routes from "./routes.js";
import cors from "cors"

dotenv.config()
const port = process.env.PORT||"3333"
mongoose.connect(process.env.MONGO_URL).then(console.log("Conected to MongoDB")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });



const app = express()
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(port,()=>{
    console.log(`your aplication is runnig at http://localhost:${port}/`)
})