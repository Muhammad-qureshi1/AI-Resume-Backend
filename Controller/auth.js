const SchemaUser = require('../DB/schema');

// SIGNUP function
const  signup = async (req, res) => {
    try{

    
    const { name, email, password } = req.body;
    console.log(name);

    const existingUser = await SchemaUser.findOne({ email });
    if (existingUser) {
        return res.send({ 
            status: 505,
            message: "Email already exists, try another email" });
    }

    // New user save
    const user = { name, email, password };
    const result = new SchemaUser(user).save();

    return res.send({ 
        result,
        status: 200,
        message: `${ name } Signup Successfully!` });
    
}
 
catch (err) {
    console.log("Signup auth.js Error" , err);
    return res.send({
        status: 500,
        message: "Signup Server is not responding"
    })
}
}


// LOGIN
const login = async (req, res) => {
    try{

    
    const { email, password } = req.body;

    if (!email || !password) {
        return res.send({ 
            staus: 500,
            message: "All fields required" });
    }

    const result = await SchemaUser.findOne({ email });
    if (!result) {
        return res.send({ 
            status: 500,
            message: "User not found" });
    }

    if (result.password !== password) {
        return res.send({ message: "Wrong password" });
    }

    res.send({
        status: 200,
         message: "Login Successfully!" });


} catch (err) {
    console.log("Login error" , err);
    return res.send({
        status: 500,
        message: 'Login, Server is not responding'
    })
    
}
};

module.exports = {signup, login};