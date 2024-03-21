
import mongoose ,{Schema} from "mongoose"
import { User } from "./user.model"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema =new Schema({
    videoFile: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      description: {
        type:String,
        required:true
      },
      views: {
        type: Number,
        default: 0
      },
      isPublished: {
        type: Boolean,
        default: true
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref:"User"
      },
    },
    {
        timestamps:true
    }
)

export const video=mongoose.model("video",videoSchema)