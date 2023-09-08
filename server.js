import mongoose from "mongoose";
import app from "./app.js";

const { DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => {
  console.log("Database connection successful")
  app.listen(PORT, () => console.log(`Server start on PORT: ${PORT}`))
}).catch(error => {
  console.log(error.message)
  process.exit(1)

})

// 4RCOikvAnFZDEHyF