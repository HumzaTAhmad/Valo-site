import accountModel from './../models/accountModel.js';
import axios from 'axios'


export const getAccount = async (req, res) => {
    try {
        const accounts = await accountModel.find();

        res.status(200).json(accounts)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postAccount = async (req, res) => {
    const username = req.body.username
    const tag = req.body.tag
    console.log(`the username is: ${username} and the tag is ${tag}`)

    try{
        axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${username}/${tag}`).then( async (response) => {
        const name = response.data.data.name;
        const region = response.data.data.region;
        const accountLevel = response.data.data.account_level;
        const tag = response.data.data.tag;
        const card = response.data.data.card.small;

        const userData = new accountModel({
            name: name,
            region: region,
            account_level: accountLevel,
            tag: tag,
            image: card
        })

        await userData.save();
        res.status(201).json(userData)
        }).catch((error) => res.status(409).json({message: error.message}));

    }catch(error){
        res.status(409).json({message: error.message});
    }
}