//import mongoose from "mongoose";
import { z } from "zod";

const credentialSchema = z.object({
    email : z
    .string({required_error : "user@iitdh.ac.in"})
    .trim()
    .email({message: "Invalid email address"})
    .endsWith("@iitdh.ac.in", {message: "Emails ending in '@iitdh.ac.in' only allowed"})
    .toLowerCase(),

    password : z
    .string({required_error : "Enter password"})
    .trim()
    .min(6, {message : "Password must contain atleast 6 characters"})
    .max(15, {message : "Password must contain at most 15 characters"}),
});

// module.exports = { 
//     credentialSchema 
// };

export default credentialSchema;
//export const cred = mongoose.model("cred",credentialSchema);