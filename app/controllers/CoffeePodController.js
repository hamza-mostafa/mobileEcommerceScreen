const service = require('../services/CoffeePodService')
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
        if(req.query.flavor){
            query.flavor = req.query.flavor
        }
        if(req.query.packSize){
            query.packSize = req.query.packSize
        }
        let podsPaginated = await service.getAll(query, page, limit, req)
        data = podsPaginated.coffee_pods;
        delete podsPaginated.coffee_pods;
        if(req.query.productType || req.query.flavor || req.query.packSize){
           queryCount = data.length
        }
        return await res.status(200).json({ status: 200, data: data ,queryCount: queryCount, ...podsPaginated,
            message: "Successfully coffee pods retrieved"});
    } catch (e) {
        // could be any 4xx error just keeping it 404 for task simplicity
        return await res.status(404).json({ status: 404, message: e.message });
    }
}

exports.getById = async (req, res, next) => {
    if(validator.matcher(req.params.skuId, 'skuId' )){
        return res.status(400).json({ status: 404, message: 'please check sku id you sent' });
    }
    try {
        // we only require 1 result, hence fixing the page and the limit to 1
        let pod = await service.getById(req.params.skuId);
        return res.status(200).json({ status: 200, data: pod, message: "Successfully the specified coffee pod retrieved" });
    } catch (e) {
        // could be any 4xx error just keeping it 404 for task simplicity
        return res.status(404).json({ status: 404, message: e.message });
    }
}
