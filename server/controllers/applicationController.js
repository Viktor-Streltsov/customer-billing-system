const {Application} = require('../models/models')
const ApiError = require('../error/ApiError')

class ApplicationController {
    async create(req, res, next) {
        try {
            const {phone, name, address, time} = req.body
            const application = await Application.create({phone, name, address, time})
            return res.json(application)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const application = await Application.findAll()
        return res.json(application)
    }
}

module.exports = new ApplicationController()