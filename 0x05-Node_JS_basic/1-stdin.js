process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const inputName = process.stdin.read();
  if (name) process.stdout.write(`Your name is: ${inputName}`);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
})
