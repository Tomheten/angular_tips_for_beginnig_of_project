const fs = require('fs');
const path = require('path');
const chProcess = require('child_process');

const command = 'ng' +
  ' serve';

chProcess.execSync(command,{stdio: 'inherit'});
