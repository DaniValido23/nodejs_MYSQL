import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRouters from "./routes/index.routes.js";
import {PORT} from "./config.js"

const app = express();


//Settings
app.set("appName", "miProyect");

//Middlewares
app.use(express.json())

//Routing
app.use(indexRouters);
app.use(employeesRoutes);

app.use((req,res) =>{
    res.status(404).json({
        message : "Route not found"
    })
})


app.listen(PORT);
console.log(`Run ${app.set("appName")} in port ${PORT}`);
