export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
/*We define a function guardrail that accepts a single argument mathFunction, which is a function.
Inside guardrail, we initialize an empty array named queue.
We use a try-catch-finally block:
In the try block, we execute the mathFunction and push its result to the queue.
If an error occurs during the execution of mathFunction, the catch block catches the error, extracts its message, and pushes it to the queue.
The finally block always executes, regardless of whether an error occurred or not. We push the message 'Guardrail was processed' to the queue.
Finally, we return the queue array.*/