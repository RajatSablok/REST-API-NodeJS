const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /prodcuts'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name : req.body.name,
        price : req.body.price
    }
    res.status(200).json({
        message: 'Handling POST requests to /prodcuts',
        createdProduct : product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'Special boi!',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an invalid ID'
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Update product!'
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    })
})

module.exports = router;