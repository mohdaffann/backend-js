import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";
dotenv.config({
  path: './env'
})
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log(`server is running at port ${process.env.PORT}`);

    })
  })
  .catch((err) => {
    console.log(`database connection failed`, err);

  })








/*
(
  async ()=>{
    try {
     await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    }
    catch(error){
    console.log(`error`);
    
    }
}
    
)()
*/