const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

//BodyParser Middleware
app.use(express.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


app.use(passport.initialize());// Passport config
require("./config/passport")(passport);

//Use routes 
app.use("/api/users", users);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is listening on ${port}`));
