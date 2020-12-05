const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    model: {
        type: String,
        required: [true, 'Please Add models'],
        trim: true,
    },
    category: {
        type: String,
        required: [true, 'Please Add Category'],
        trim: true
    },
    brand: {
        type: String,
        required: [true, 'Please Add models'],
        trim: true,
    },
    location: {
        type: String,
        required: [true, 'Please Add Category'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please Add models'],
        trim: true,
    },
    seller: {
        type: String,
        required: [true, 'Please Add Category'],
        trim: true
    },
    price:{
        type:Number,
        required:true
    },
    productImage:[String],
    // productImage2:{
    //     type:String
    // },
    // productImage3:{
    //     type:String
    // },
    // productImage4:{
    //     type:String
    // },
    // productImage5:{
    //     type:String
    // },
    year:{
        type:String
    }
},
    {timestamps:true}
)

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema)