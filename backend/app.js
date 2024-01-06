const express = require('express')
const app = express()
const cors = require('cors')
const {validateBody} = require('./zod')

app.use(express.json())
app.use(cors())

const {Ecard} = require('./db')

app.get('/ecard',  async(req, res) => {
    const cards = await Ecard.find({});
    res.json({cards})
})

app.post('/ecard',validateBody, async(req, res) => {
    console.log(req.body)
    const card = await Ecard.create(req.body)
    await card.save();
    console.log(card)
})
app.put('/ecard/:id',  async(req, res) => {
    const id = req.params.id;
    const update = await Ecard.findOneAndUpdate({_id : id},req.body)
    if(update){
        res.json({msg:"updated"})
    }
    else{
        res.json({msg:"could not update"})
    }

})
app.delete('/ecard/:id',  async(req, res) => {
    const id = req.params.id;
    const update = await Ecard.findOneAndDelete({_id : id})
    if(update){
        res.json({msg:"deleted"})
    }
    else{
        res.json({msg:"could not delete"})
    }
})

app.listen(3000)

