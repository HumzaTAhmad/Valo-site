import accountModel from './../models/accountModel.js';
import axios from 'axios'
import mongoose from 'mongoose';

//This REST endpoint allows users to retrive accoutns from the database
export const getAccount = async (req, res) => {
    try {
        const accounts = await accountModel.find();

        res.status(200).json(accounts)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//This REST endpoint allows the users to create accounts into the database
export const postAccount = async (req, res) => {
    const username = req.body.username
    const tag = req.body.tag 
    const region = req.body.region

    const requestOne = axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${username}/${tag}`);
    const requestTwo = axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr-history/${region}/${username}/${tag}`);

    try{
        axios.all([requestOne, requestTwo]).then(axios.spread(async (...responses) => {
        const name = responses[0].data.data.name;
        const region = responses[0].data.data.region;
        const accountLevel = responses[0].data.data.account_level;
        const tag = responses[0].data.data.tag;
        const card = responses[0].data.data.card.small;
        const rank = responses[1].data.data[0].currenttierpatched
        const rankImage = responses[1].data.data[0].images.small

        const userData = new accountModel({
            name: name,
            region: region,
            account_level: accountLevel,
            tag: tag,
            image: card,
            rank: rank,
            rank_image: rankImage
        })

        await userData.save();
        res.status(201).json(userData)
        })).catch((error) => res.status(409).json({message: error.message}));

    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateAccount = async(req, res) => {
    const { id: _id } = req.param;
    const account = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No acc with that id');

    const updatedAccount = await accountModel.findByIdAndUpdate(_id, account, {new: true})
    
    res.json(updatedAccount);
}