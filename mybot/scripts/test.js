const path = require('path');
const spawn = require('child_process').spawn;
const scriptPath = path.resolve(__dirname, '../../tools/scripts')

module.exports = function(robot) {
  robot.hear((/^check_migration_changes_\d{8}$/i), function(res) {
    const fileName = res.match[0];
    const number = fileName.slice(24);
    res.send(number)
    exec = spawn('bash', [scriptPath + '/' + number, 33]);
    exec.stdout.on('data', function(data) {
      res.send('データが返ってきた');
      res.send(data);
    });
    exec.stderr.on('data', function(data) {
      res.send('エラーが返ってきた');
      res.send(data);
    })
  })
  robot.hear((/^bot_(start|end)$/), function(res) {
    res.send(res.match[1])
  })
}
    