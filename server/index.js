const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// MongoDB connection
const uri =
  "mongodb+srv://connect-care:p6s5S4iDlNPuVzTt@faisal.yl6wev4.mongodb.net/?appName=Faisal";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("ConnectCare");
    const doctorsCollection = db.collection("doctors");

    
   
  


    // Root route
    app.get("/", (req, res) => {
      res.send("ConnectCare API running...");
    });

  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);

app.listen(port, () => console.log(`Server running on port ${port}`));
