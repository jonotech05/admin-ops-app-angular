import console from "console";

import { getInput } from "@actions/core";

const inputName = getInput("name");

greet(inputName)

function greet(name: string): void {
  console.log(`'Hello, ${name} from JONO TECH!'`)
}
