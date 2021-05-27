import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongod connected successfully"))
    .catch((err) => console.log("mondb error", err));
};

export default connectDB;
