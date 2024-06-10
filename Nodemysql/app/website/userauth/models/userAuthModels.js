module.exports = (sequelize, DataTypes) => {
    const userAuth = sequelize.define('userAuth', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
        },
        referral_link: {
            type: DataTypes.STRING
        },
        referral_code: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        password: {
            type: DataTypes.STRING
        },
        dob: {
            type: DataTypes.DATE
        },
        profile_img: {
            type: DataTypes.STRING
        },
        country_code: {
            type: DataTypes.STRING
        },
        verifyOtp: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_guest: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        otp: {
            type: DataTypes.INTEGER
        },
        token: {
            type: DataTypes.STRING
        },
        email_verify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        mobile_verify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        address: {
            type: DataTypes.STRING
        },
        appartment: {
            type: DataTypes.STRING
        },
        landmark: {
            type: DataTypes.STRING
        },
        // country_id: {
        //     type: DataTypes.UUID,
        //     allowNull: true,
        //     references: {
        //         model: 'countries',
        //         key: 'id'
        //     },
        //     // onDelete: 'CASCADE',
        //     // onUpdate: 'CASCADE'
        // },
        country_name: {
            type: DataTypes.STRING
        },
        // state_id: {
        //     type: DataTypes.UUID, 
        //     allowNull: true,
        //     references: {
        //         model: 'states', 
        //         key: 'id'
        //     }
        // },
        state_name: {
            type: DataTypes.STRING
        },
        // city_id: {
        //     type: DataTypes.UUID, 
        //     allowNull: true,
        //     references: {
        //         model: 'cities',
        //         key: 'id'
        //     }
        // },
        city_name: {
            type: DataTypes.STRING
        },
        // pincode_id: {
        //     type: DataTypes.UUID, 
        //     allowNull: true,
        //     references: {
        //         model: 'pincodes', 
        //         key: 'id'
        //     }
        // },
        pincode_name: {
            type: DataTypes.INTEGER
        },
        gst_number: {
            type: DataTypes.STRING
        },
        member_type: {
            type: DataTypes.STRING
        },
        total_purchage_amount: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        cod_available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    });
    return userAuth;
};
