const exec = require('child_process').exec;

let python = exec('python3 ./src/main.py', function (err) {
  if (err !== null)
    console.log('exec error: ' + err);
});

python.stdout.on('data', function(data) {
  console.log('data coming from py: ' + data); 
});

document.querySelectorAll('.btn').forEach((btn, i) => btn.addEventListener('click', () => {
  python.stdin.write('execute ' + i + '\n');
}));