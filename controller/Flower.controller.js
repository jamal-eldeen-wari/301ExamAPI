const { default: axios } = require('axios');
const {flowerModel} = require('../model/Flowers.Schema');


const getFlowers=(req,res) =>{
    const url = `https://flowers-api-13.herokuapp.com/getFlowers`;
    axios.get(url).then(response=>{
        res.send(response.data);
    }).catch();
}

const createFlower = (req,res)=>{
    const {name,instructions,photo} = req.body;

    const newFlower = new flowerModel({
        name:name,
        instructions:instructions,
        photo:photo,
    });
    newFlower.save();
}


const getFavFlower = (req,res) =>{
    flowerModel.find({},(error,data) =>{
        if(error){
            res.send(error);
        }else{
            res.send(data);
        }
    })

}

const deleteFlower = (res,req)=>{
    const id = req.params.id;
    flowerModel.deleteOne({_id:id},(error,data)=>{

    })
    flowerModel.find({},(error,data)=>{
        res.send(data);
    })
}

const updateFlower = (req,res) =>{
    const flowerId = req.params.flower_id;
    const {name,instructions,photo} = req.body;

    flowerModel.findByIdAndUpdate({_id:flowerId},{
        name:name,
        instructions:instructions,
        photo: photo,
    },
    // flag
    {new:true}
    ,(error, data)=>{
        res.send(data);
    }
    )
}
module.exports={
    getFlowers,
    createFlower,
    getFavFlower,
    deleteFlower,
    updateFlower

}