import mongoose from 'mongoose';
import internal from 'stream';


const accountSchema = mongoose.Schema({
    name: String,
    region: String,
    account_level: Number,
    tag: String,
    image: String
});

const accountModel = mongoose.model('accountModel', accountSchema);

export default accountModel;