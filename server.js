const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();



app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Adding handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server so it can begin listening to client requests
app.listen(PORT, function(){
  console.log("Server listening on: http://localhost:" + PORT);
});