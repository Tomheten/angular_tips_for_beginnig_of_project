const fs = require('fs');
const fsEx = require('fs-extra');
const path = require('path');
const chProcess = require('child_process');
const argvByMinimist = require('minimist')(process.argv);
const moment = require('moment');


const command = 'ng'
  + ' build'
  + ' --prod'
// + ' --verbose=true'

const logDir = path.join(
  __dirname,
  '..',
  'log'
);

const log = path.join(logDir, `${moment(Date.now()).format('DD.MM.YY__HH_mm_ss')}.log`);

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

//////////////// simple way
// chProcess.execSync(command, {stdio: 'inherit'});
// console.log('========build end');


//////// command line arguments
// process.argv.forEach((a, idx) => console.log(`arg_${idx}: ${a}`));
// console.log('argvByMinimist', argvByMinimist);

////////
async function doAction() {
  await new Promise(((resolve, reject) => {
    chProcess.exec(
      command,
      {maxBuffer: 1024 * 1024 * 10, encoding: 'utf-8'},
      function (error, stdout) {
        console.log(stdout);
        fs.writeFileSync(log, stdout);
        resolve();
      }
    );
  }));

  console.log('==========end');
}

doAction();
