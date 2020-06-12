let patterns = {
    skuId:  /^[A-Z]{2}[0-9]{3}$/i
}

exports.noMatch = function (params, pattern){
    return !params.match(patterns[pattern]);
}
