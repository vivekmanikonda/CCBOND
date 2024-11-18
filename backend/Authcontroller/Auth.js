const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../generateToken');

// Register User
exports.RegisterUser = async (req, res) => {
    const { Name, email, Password, CompanyName, CompanyUrl, PhoneNumber } = req.body;
    console.log("Received registration request:", { Name, email, CompanyName, CompanyUrl, PhoneNumber });

    try {
        // Check if the user already exists
        const UserExists = await User.findOne({ email });

        if (UserExists) {
            return res.status(409).json({ Message: "Email already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(Password, 20); // 20 is the salt rounds

        // Create a new user
        const user = await User.create({
            Name,
            email,
            Password: hashedPassword, // Store hashed password
            CompanyName,
            CompanyUrl,
            PhoneNumber
        });

        // Success message with generated token
        res.status(201).json({
            Message: "Successfully Registered!!",
            token: generateToken(user.id),
            user: {
                Name: user.Name,
                Email: user.email,
                id: user.id
            }
        });

    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ Message: "Server Error Occurred" });
    }
};

// In your backend login controller
exports.LoginUser = async (req, res) => {
    const { email, Password } = req.body;

    if (!email || !Password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    try {
        // Check if the user exists
        const userExists = await User.findOne({ email });
        console.log("User found:", userExists);

        if (!userExists) {
            return res.status(404).json({ Message: "User Not Found" });
        }

        // Verify the password
        if (!Password) {
            return res.status(400).json({ Message: "Password is required" });
        }

        if (!userExists.Password) {
            return res.status(400).json({ Message: "User found, but password is missing" });
        }

        const isMatch = await bcrypt.compare(Password, userExists.Password);
        if (!isMatch) {
            return res.status(401).json({ Message: "Password doesn't match" });
        }

        // Login successful
        res.json({
            Message: "Login successful",
            token: generateToken(userExists.id),
            user: {
                id: userExists.id,
                name: userExists.Name,
                email: userExists.email
            }
        });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ Message: "Server Error" });
    }
};
