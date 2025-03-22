require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());
const recommendations ={
    happy:{
        playlist:
        "https://open.spotify.com/playlist/37i9dQZF1DXdpec7aLTmlC",
        book:"the happiness project by gretchen rubin"
    },
    sad:{
        playlist:"https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634",
        book:"little life by hanya yanagihara"
    },
    motivated:{
        playlist:"https://open.spotify.com/playlist/37i9dQZF1DX1rVvRgjX59F",
        book:"Atomic habits by james clear"
    },
    relaxed:{
        playlist:"https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgolcn6",
        book:"the little book of hygge by meik wiking"
    }
};

app.post("/recommend",(req,res)=>{
    const{mood}= req.body;

    if(!mood || !recommendations[mood]){
        return res.status(400).json({error:"invalid or missing mood"});
    }
    res.json(recommendations[mood]);
});

const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
});
