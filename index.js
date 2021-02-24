const admin = require('firebase-admin');

const app = admin.initializeApp({
    credential: admin.credential.applicationDefault()
});
const messaging = admin.messaging();

const deviceToken = process.env.DEVICE_TOKEN;

const message = {
    data: {
        title: "This is the title.",
        body: "This is the body. Send by admin sdk."
    },
    token: deviceToken
};

async function sendMessage(message) {
    try {
        const response = await messaging.send(message);
        console.log("Successfully sent message:", response);
    } catch (error) {
        console.log("Error sending message:", error);
    } finally {
        app.delete();
    }
}

sendMessage(message);