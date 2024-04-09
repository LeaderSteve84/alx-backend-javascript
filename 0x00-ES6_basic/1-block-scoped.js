export default function taskBlock(trueOrFalse) {
  task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    task2 = false;
  }

  return [task, task2];
}
