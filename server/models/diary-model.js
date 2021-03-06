const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Diary = new Schema(

    {
        date: {type: String, required: true},
        item1Desc: {type: String, required: true},
        item1Value: {type: Number, required: true}
        
        // items: [
        //         {
        //             desc: {type: String, required: true},
        //             value: {type: Number, required: true}
        //         },
        //         {
        //             desc: {type: String, required: true},
        //             value: {type: Number, required: true}
        //         },
        //         {
        //             desc: {type: String, required: true},
        //             value: {type: Number, required: true}
        //         },
        //         {
        //             desc: {type: String, required: true},
        //             value: {type: Number, required: true}
        //         }
        //     ]
    },
    {timestamps: true}
)

module.exports = mongoose.model('entries', Diary)