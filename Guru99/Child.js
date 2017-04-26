var parent = require('./Parent.js'); 
var exports = module.exports={};
exports.subBase = function()
{
console.log("This is a child");

}
exports.subBase.par = function()
{
 var pare = parent
  pare.Base();
}