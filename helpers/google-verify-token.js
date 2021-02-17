const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = "234471422514-56mt4vvkefhubdtckagffd7n30tk85kn.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token)=>{
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                "234471422514-qr3ggmrhgpmhckb4bkob73qb52irms6t.apps.googleusercontent.com"
            ],  
            // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        // const userid = payload['sub'];
        console.log("=================== PAYLOAD ===================");
        console.log(payload);
        return {
            name: payload["name"],
            picture: payload["picture"],
            email: payload["email"],
    
        }
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
        
    } catch (error) {
        return null;
        
    }
    
}


module.exports = {
    
    validarGoogleIdToken
};
