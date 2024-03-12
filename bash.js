/*
In UNIX environments, programs communicate with streams called STDIN, STDOUT, STDERROR (Std Input, Output, Error). Simply put Std Input implies that data flows into the program and Std Output is a channel for data coming out of the program.

Node.js gives us access to these streams in the form of process.stdin, process.stdout objects. We're building a stream of communication.
*/

const prompt = data => { // helper fn to display data after entering prompt.
  console.log(data); // displays the data
  process.stdout.write('> '); // starts the prompt empty.
}

const bash = data => { // the main fn that toggles between multiple methods
  const entry = data.toString().trim(); // convert entry to string and remove white spaces
  const [command, arg] = entry.split(" "); // destructure the entry info, save command for switch/case actions below and arg for unique parameters to apply
  switch (command) {
    case 'pwd':
      require('./pwd')(prompt);
      break; // breaks out of the switch box and stops execution of more case testing.
    case 'ls':
      require('./ls')(prompt);
      break;
    case 'cat':
      require('./cat')(arg, prompt);
      break;
    case 'curl':
      require('./curl')(arg, prompt);
      break;
    case 'date':
      require('./date')(prompt);
      break;
    case 'echo':
      require('./echo')(entry, prompt);
      break;
    default:
      prompt('Command not found.')
  }
}

prompt('Start Node Shell!')
process.stdin.on('data', bash)

// ^C to quit the node prompt
