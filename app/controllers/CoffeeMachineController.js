const service = require('../services/CoffeeMachineService')
const config = require('../../config/index')
const validator = require('../validator/regexMatcher')

exports.getAll = async (req, res, next) => {
    try {
    let page = req.query.page ? req.query.page : 1;
    let limit = req.query.limit ? req.query.limit : config.pagination.limit;
    let query = {};
    let queryCount = 0;
    if(req.query.productType){
        query.productType = req.query.productType
    }
    if(req.query.waterLineCompatible){
        query.waterLineCompatible = req.query.waterLineCompatible
    }
        let machinesPaginated = await service.getAll(query, page, limit, req)
        data = machinesPaginated.coffee_machines;
        delete machinesPaginated.coffee_machines;
        if(req.query.productType || req.query.waterLineCompatible){
            queryCount = data.length
        }
        return await res.status(200).json({ status: 200, data: data , queryCount: queryCount, ...machinesPaginated,
            message: "Successfully coffee machines retrieved"});
    } catch (e) {
        // could be any 4xx error just keeping it 404 for task simplicity
        return await res.status(404).json({ status: 404, message: e.message });
    }
}

exports.getById = async (req, res, next) => {
    if(validator.noMatch(req.params.skuId, 'skuId' )){
        return res.status(400).json({ status: 404, message: 'please check sku id you sent' });
    }
    try {
        // we only require 1 result, hence fixing the page and the limit to 1
        let machine = await service.getById(req.params.skuId);
        return res.status(200).json({ status: 200, data: machine, message: "Successfully the specified coffee machine retrieved" });
    } catch (e) {
        // could be any 4xx error just keeping it 404 for task simplicity
        return res.status(404).json({ status: 404, message: e.message });
    }
}
