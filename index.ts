import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var argv = require("minimist")(process.argv.slice(2));
  return {
    action: argv.action,
    params: JSON.parse(argv.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv);
  const result = controller.processOptions(params);
  console.log(result);
}

main();
