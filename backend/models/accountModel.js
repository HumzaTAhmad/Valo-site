import mongoose from 'mongoose';
import internal from 'stream';


const accountSchema = mongoose.Schema({
    name: String,
    region: String,
    account_level: Number,
    tag: String,
    foundAt: {
        type: Date,
        default: new Date()
    },
    likeCount: {
        type: Number,
        default: 0
    },
    image: String,
    rank: String,
    rank_image: String
});

const accountModel = mongoose.model('accountModel', accountSchema);

export default accountModel;