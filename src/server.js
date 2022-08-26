import "dotenv/config";
import app from "./app";

app.listen(process.env.API_PORT);
