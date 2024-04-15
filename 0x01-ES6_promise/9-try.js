export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(new Error(error.message || error.toString()));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
