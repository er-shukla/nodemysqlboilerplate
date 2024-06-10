const express = require('express');
const router = express.Router();
const employeeAuthController = require('../controllers/userAuthControllers');
const { upload } = require("../../../utils/middleware/user_doc");
const validationMiddleware = require('../../../utils/middleware/joymiddleware');
const { userSchema } = require('../joyschema/userregister');
router.post('/user_Register',validationMiddleware(userSchema),upload.single("profile_img"), employeeAuthController.register);
router.post('/logout', employeeAuthController.logout);




// router.post("/iSGuestExist", userController.iSGuestExist);
// router.post("/guest_User_Registration", userController.guest_User_Registration);
// router.post("/guest_user_Login", userController.guest_user_Login);
// router.delete("/user_All_Delete_Otp_Verify_False", userController.user_All_Delete_Otp_Verify_False);
// router.post("/user_Login", userController.user_Login);
// router.put('/update_Verify_Email/:id', userController.update_Verify_Email);
// router.post('/email_Verify', userController.email_Verify);
// router.post('/verify_Opt', userController.verify_Opt);
// router.post('/resend_Otp', userController.resend_Otp);
// router.delete('/user_Logout/:userId', auth, userController.user_Logout);
// router.post('/change_Password/:id', userController.change_Password);
// router.get('/get_All_User_List', auth, userController.get_All_User_List);
// router.get('/get_ById_User_List/:id', userController.get_ById_User_List);
// router.put('/cod_Available_Update/:id', userController.cod_Available_Update);
// router.put('/user_Profile_Update/:id', upload.fields([{ name: "profile_img", maxCount: 1 }]), userController.user_Profile_Update);
// router.get('/guest_All_User_Delete', userController.guest_All_User_Delete);
// router.post('/user_Refer_Code_Send', userController.user_Refer_Code_Send);
// router.get('/all_User_List', userController.all_User_List);







module.exports = router;
