import { Schema, model } from "mongoose";
import { handleMongooseError, runValidateAtUpdate } from './hooks.js';

const emailRegexp = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      minLength: 6,
      required: [true, "Need set password for user"],
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Need set Email "],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
    } 
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);
userSchema.pre("findOneAndUpdate", runValidateAtUpdate);
userSchema.post("findOneAndUpdate", handleMongooseError);

const User = model("user", userSchema);

export default User;