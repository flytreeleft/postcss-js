var parse = require('./parser');

module.exports = function (obj, options) {
    var node = parse(obj, options);
    return node.toString();
};
