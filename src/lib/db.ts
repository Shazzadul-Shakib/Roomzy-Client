import mongoose from "mongoose";

// Declaring a variable to store the cached database connection
let cachedConnection = null;

export async function connectToMongoDB() {
  // If a cached connection exists, return it
  if (cachedConnection) {
    console.log("Using cached db connection");
    return mongoose; // Return mongoose to keep models accessible
  }
  try {
    // If no cached connection exists, establish a new connection to MongoDB
    const cnx = await mongoose.connect(process.env.MONGO_URI!);
    // Cache the connection for future use
    cachedConnection = cnx.connection;
    console.log("New MongoDB connection established");
    // Return mongoose instead of connection
    return mongoose;
  } catch (error) {
    // If an error occurs during connection, log the error and throw it
    console.log(error);
    throw error;
  }
}
