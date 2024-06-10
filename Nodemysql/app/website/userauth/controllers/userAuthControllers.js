const db = require('../../../models');
const EmployeeAuth = db.userAuth;
const responseHandler = require("../../../utils/helper/responseHandler")
const methods = require('../../../utils/helper/methods')

exports.register = async (req, res) => {
  let profile_img = req.file ? req.file.path : "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg";
  const customerId = methods.randomString(7, '# A')
  const newUser = await EmployeeAuth.create({ ...req.body, profile_img, "customer_id": `CST${customerId}`, });
  return responseHandler.successResponse(res, 'User registered successfully', newUser, 201, true);
};
exports.logout = async (req, res) => {
};
