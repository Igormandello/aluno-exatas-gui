const exec = require('child_process').exec;

let python = exec('python3 ./src/main.py', function (err) {
  if (err !== null)
    console.log('exec error: ' + err);
});

let answer = document.querySelector('#answer');
python.stdout.on('data', function(data) {
  console.log('data coming from py: ' + data);
  answer.innerText = data;
});

/*let functionInput = document.querySelector('#function');
document.querySelectorAll('.btn').forEach((btn, i) => btn.addEventListener('click', () => {
  if (i == 0)
    python.stdin.write('set ' + functionInput.value + '\n');
  else
    python.stdin.write('execute ' + (i - 1) + '\n');
}));*/