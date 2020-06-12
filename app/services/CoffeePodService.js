let model = require('../models/CoffeePod');
const paginate = require('express-paginate')


exports.getAll = async (query, page, limit, req) => {
    try {
        let offset = (page * limit) - limit;

        const [ results, itemCount ] = await Promise.all([
            model.find(query).skip(offset).limit(limit).exec(),
            model.countDocuments()
        ]);
        const pageCount = Math.ceil(itemCount / limit);

        return {
            coffee_pods: results,
            total_items: itemCount,
            total_pages: pageCount,
            pages: paginate.getArrayPages(req)(3, pageCount, page),
            has_more_pages: paginate.hasNextPages(req)(pageCount)
        };
    } catch (e) {
        // Log Errors
        console.error(`error: ${e}   ----------`)
        throw Error('Error while fetching Machines')
    }
};

exports.getById = async (skuId) => {
    try {
        return await model.findOne({skuId: skuId});
    } catch (e) {
        // Log Errors
        throw Error('Error while fetching pod with sku id')
    }
};
