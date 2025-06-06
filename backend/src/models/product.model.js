import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    }
},
    {
        timestamps: true,
    }
)

export const Product = mongoose.model("Product", productSchema)