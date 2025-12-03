const express = require("express")
const dbCon = require("./DB/dbConnection");
const router = require("./Router/routes");
const cors = require("cors");

const app = express()
const PORT = 5000 || process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


dbCon();

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on this port: ${PORT}`);
})