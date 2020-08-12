const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Diary = new Schema(

    {
        date: {type: String, required: true},
        item1Description:  {type: String, required: true},
        item1Value: {type: Number, required: true}
        },
    {timestamps: true}
    
    // {
    //     date: {type: String, required: true},
    //     item1: {
    //         description: {type: String, required: true},
    //         value: {type: Number, required: true}
    //     },
    //     item2: {
    //         description: {type: String, required: false},
    //         value: {type: Number, required: false}
    //     },
    //     item3: {
    //         description: {type: String, required: false},
    //         value: {type: Number, required: false}
    //     },
    //     item4: {
    //         description: {type: String, required: false},
    //         value: {type: Number, required: false}
    //     },
    //     item5: {
    //         description: {type: String, required: false},
    //         value: {type: Number, required: false}
    //     },
    //     item6: {
    //         description: {type: String, required: false},
    //         value: {type: Number, required: false}
    //     }
    // },
    //     {timestamps: true}
    
    )


module.exports = mongoose.model('entries', Diary)