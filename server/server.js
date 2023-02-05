const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userRoutes = require("./routes/userRoutes");
const daysRoutes = require("./routes/daysRoutes");

//settup express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

function validateUser(req, res, next) {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    function (err, decoded) {
      if (err) {
        res.json({ status: "error", message: err.message, data: null });
      } else {
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    }
  );
}


app.set("secretKey", "nodeRestApi"); // jwt secret token

//public route
app.use("/api/users", userRoutes);

//private routes
app.use("/api/users", validateUser, daysRoutes);

// app.get('/favicon.ico', function(req, res) {
//     res.sendStatus(204);
// });

//connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    //listen for requests
    app.listen(port, () =>
      console.log(
        `Connected to db, Server listening at http://localhost:${port}`
      )
    );
  })
  .catch((error) => {
    console.log(error);
  });
