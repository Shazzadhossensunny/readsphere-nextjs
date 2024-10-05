// utils/mongodb.js
import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
const uri = 'mongodb+srv://readSphere:095otYhvIXnZmvIy@cluster0.5kgqkgx.mongodb.net/readSphare?retryWrites=true&w=majority&appName=Cluster0';
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // Create a new MongoClient for development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Use a new MongoClient for production
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
