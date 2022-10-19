const YourService = require('../services/your.service');

module.exports = {
    index: async (req, res) => {
        try {
            const serviceResponse = await YourService.index(req);
            return res.status(serviceResponse.code).json(serviceResponse);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    },
    showData: async (req, res) => {
        try {
            const serviceResponse = await YourService.showData(req);
            return res.status(serviceResponse.code).json(serviceResponse);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    },
    addData: async (req, res) => {
        try {
            const serviceResponse = await YourService.addData(req);
            return res.status(serviceResponse.code).json(serviceResponse);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }
}
