import { timeStamp } from 'console';
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
                },
      email: {
        type: String,
        required: true,
        unique: true,
             },
      password: {
        type: String,
        required: true,
                 },

      profilePicture:
      {
        type : String,
        default:"https://www.google.com/imgres?q=profile%20picture%20download&imgurl=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F107-1072091_computer-icons-user-profile-facebook-instagram-instagram-profile.png&imgrefurl=https%3A%2F%2Fwww.pngkey.com%2Fmaxpic%2Fu2q8y3u2t4e6u2w7%2F&docid=2NcmuSf3huFeeM&tbnid=GDVw_WX9MCI8FM&vet=12ahUKEwiyhoLU3cOFAxURevUHHaYvBEU4ChAzegQIcxAA..i&w=750&h=750&hcb=2&ved=2ahUKEwiyhoLU3cOFAxURevUHHaYvBEU4ChAzegQIcxAA",
        

      },

      isAdmin: {
        type: Boolean,
        default: false,
      },

    },
    { timestamps: true }
      
  );
  
  const User = mongoose.model('User', userSchema);
  
  export default User;