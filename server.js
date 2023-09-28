import { app } from "./app.js";
import { connectDb } from "./data/database.js";

connectDb();

app.listen(() => {
    console.log(`Server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});