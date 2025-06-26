

const Logout = async(req,res)=>{

    res.clearCookie("token");
    res.status(200).json({message:"user Logout"});

}

module.exports = Logout