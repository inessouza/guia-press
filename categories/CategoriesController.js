const express = require("express")
const router = express.Router()
const Category = require("./Category")

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new")
})

router.get("/categories/save", (req, res) => {
    var title = req.body.title
    if (title != undefined) {
        title: title
    } else {
        res.redirect("/admin/categories/new")
    }
})

module.exports = router;