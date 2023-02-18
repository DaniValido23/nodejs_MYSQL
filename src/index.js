import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRouters from "./routes/index.routes.js";
import "./config.js"

const app = express();


//Settings
app.set("appName", "miProyect");
app.set("port", 3000);

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


app.listen(app.set("port"));
console.log(`Run ${app.set("appName")} in port ${app.set("port")}`);
