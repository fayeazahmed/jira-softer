const router = require('express').Router()

router.get("/", (req, res) => {
    try {

        res.send('Birds home page')

    } catch (error) {
        console.log(error.message);;
    }
})

module.exports = router
