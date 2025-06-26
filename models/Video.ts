import mongoose, {Schema, model, models} from "mongoose"

export const VIDEO_DIMENTION = {
    width: 1080,
    height: 1920
} as const

export interface IVideo {
    _id?: mongoose.Types.ObjectId
    title: String
    description: String
    videoUrl: String
    thumbnailUrl: String
    controls?: Boolean
    transformation?: {
        height: Number
        width: Number
        quality?: Number
    }
}

const videoSchema = new mongoose.Schema<IVideo>(
    {
        title: {type: String, required: true },
        description: {type: String, required: true},
        videoUrl: {type: String, required: true},
        thumbnailUrl: {type: String, required: true},
        controls: {type: Boolean, default: true},
        transformation: {
            height: {type: Number, default: VIDEO_DIMENTION.height},
            width: {type: Number, default: VIDEO_DIMENTION.width},
            quality: {type: Number, min: 1, max: 100}
        }
    },
    {
        timestamps: true
    }
)

const Video = models?.Video || model<IVideo>("Video", videoSchema)

export default Video