import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePatch) => {
  try {
    if (!localFilePatch) return null
    //upload file in cloudinary
    const response = await cloudinary.uploader.upload(localFilePatch, {
      resource_type: "auto"
    })
    fs.unlinkSync(localFilePatch)
    return response

  } catch (error) {
    fs.unlinkSync(localFilePatch)//remove the locally saved temporary file as upload operation got failed
    return rull
  }
}

export {uploadOnCloudinary}

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) { console.log(result); });
