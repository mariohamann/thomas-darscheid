const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTP_USER,
    // Password optional, prompted if none given
    password: process.env.FTP_PASS,
    host: process.env.FTP_SERVER,
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/",

    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["**/*", "*", ".htaccess"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));