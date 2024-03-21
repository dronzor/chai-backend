import mongoose,{Schema} from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt"

new userSchema=new Schema(
    {
        usrname:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:0

        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,

        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true

        },
        avatar:{
            type:String,  //cloudinary url
            required:true

        },
        coveriImage:{
            type:String
        },
        watchHistory:[
            { 
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,"password required"]
        },
        refreshtoken:{
            type:String
        }
        
    },
    {
        timestamps:true
    }
)
userSchema.pre("save", async function name(next) {
    if(!this.isModified("password")){
        return next()
    }
    this.password=bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateaccessToken=async function(){
    return await jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    }),
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
        
    
}
userSchema.methods.generateRefreshToken=async function(){
    return await jwt.sign({
        _id:this._id
        
    }),
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
}
export const User=mongoose.model("User",userSchema)