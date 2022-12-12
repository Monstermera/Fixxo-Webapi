const express = require('express')
const controller = express.Router()
// let products = require('../data/database')
const productSchema = require('../schemas/productSchema')


// GET
controller.route('/').get(async (req, res) => {   
    const products = []    
    const list = await productSchema.find()

    if (list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                tag: product.tag,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName 
            })
        } 
        res.status(200).json(products)
    } else 
        res.status(400).json()
})

// TAG 
controller.route('/:tag').get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag })

    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                tag: product.tag,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        } 
        res.status(200).json(products)
    } else
        res.status(404).json()
})

// TAG AND TAKE
controller.route('/:tag/:take').get(async (req, res) => {    
    const products = []
    const list = await productSchema.find({tag: req.params.tag}).limit(req.params.take)

    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                tag: product.tag,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else 
        res.status(404).json()
})


 // PRODUCT ARTICLE NUMBER
controller.route('/product/details/:articleNumber').get(async (req, res) => {
    const product = await productSchema.findById(req.params.articleNumber)

    if (product) {
        res.status(200).json({
            articleNumber: product._id,
            tag: product.tag,
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            rating: product.rating,
            imageName: product.imageName
        })
    } else
        res.status(404).json()
})

// secured routes
controller.route('/').post(async (req, res) => {   
    const { tag, name, description, category, price, rating, imageName } = req.body

    if (!name || !price)
        res.status(400).json({text: 'Name and price is required.'})

    const item_exists = await productSchema.findOne({name})
    if (item_exists)
        res.status(409).json({text: 'A product with the same name already exists.'})
    else {
        const product = await productSchema.create({
            tag,
            name, 
            description,
            category,
            price,
            rating,
            imageName
        })
        if (product)
            res.status(201).json({text: `The product with article number ${product._id} was created.`})
        else 
            res.status(400).json({text: 'Something went wrong when we tried to create the product.'})
    }
}) 


controller.route ('/:articleNumber').delete(async (req, res) => {    
    if(!req.params.articleNumber)
        res.status(400).json('No article number was specified.')
    else {
        const item = await productSchema.findById(req.params.articleNumber)
        if (item) {
            await productSchema.remove(item)
            res.status(200).json({text: `The product with article number ${req.params.articleNumber} has been deleted.`})
        } else {
            res.status(404).json({text: `The product with article number ${req.params.articleNumber} was not found.`})
        }
    }
})

// PUT
controller.route('/:articleNumber').put(async (req, res) => { 
    // const product = await productSchema.findById(req.params.articleNumber)
    //     if (!product) {
    //         res.status(404).json({text: `The product with article number ${req.params.articleNumber} was not found`})
    //     } else {
    //         const updatedProduct = await productSchema.findByIdAndUpdate(req.params.articleNumber, req.body, {new: true})  
    //             res.status(200).json({text: `The product with article number ${req.params.articleNumber} has been updated`})
    //             console.log(updatedProduct)
    //             }
   
    const articleNumber = req.params.articleNumber;
    const updatedData = req.body; 
    const options = { new: true }

    const product = await productSchema.findByIdAndUpdate(articleNumber, updatedData, options)
    if (product)
        res.status(200).json({text: `The product with article number ${req.params.articleNumber} has been updated`})

    else 
        res.status(404).json({text: `The product with article number ${req.params.articleNumber} was not found`})
}) 


module.exports = controller 