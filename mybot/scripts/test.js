const path = require('path');

module.exports = robot => {
  robot.hear("I like pie", (res) => {
    const exec = require('child_process').exec;
    const scriptPath = path.resolve(__dirname, '../../tools/scripts')
    exec(`chmod +x ${scriptPath}/mkdir.sh`, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
      } else if (stdout) {
        console.log(stdout);
      } else {
        console.log(stderr);
      }
    });
    exec(`${scriptPath}/mkdir.sh`, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
      } else if (stdout) {
        console.log(stdout);
      } else {
        console.log(stderr);
      }
    });
    res.reply("makes a freshly baked apple pie ver2")
  })
}
    