const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`The sytem uptime is ${os.uptime()} seconds`);
