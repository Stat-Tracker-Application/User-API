import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";

const app = express();

const CONNECTION_STRING = "mongodb://User1:Adminpw@User-Db:27017/User-Db"; //This can't remain here for obvious reasons

// MongoDB connection
mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  Testname: String,
  TestAge: Number,
  TimeOfCreation: { type: Date, default: Date.now },
});

// Create a model based on the schema
const UserModel = mongoose.model("User", userSchema);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Create
app.post("/createuser", async (req, res) => {
  try {
    const { Testname, TestAge } = req.body;
    const newUser = new UserModel({ Testname, TestAge });
    await newUser.save();

    // Send only the relevant data in the response
    res.json({
      Testname: newUser.Testname,
      TestAge: newUser.TestAge,
      TimeOfCreation: newUser.TimeOfCreation,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read
app.get("/getallusers", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a specific stat by ID
app.get("/getuserbyid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
app.put("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { Testname, TestAge } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { Testname, TestAge },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
app.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await UserModel.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", function (req, res) {
  res.json({
    message: "Hello world from user api",
  });
});

export default app;
