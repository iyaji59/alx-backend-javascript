import { taskFirst, taskNext } from "../0-constants";
//The ${...} syntax inside the template literal allows you to embed expressions, including function calls
console.log(`${taskFirst()} ${taskNext()}`);
