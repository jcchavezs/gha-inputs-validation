const core = require('@actions/core');
import { evaluate } from 'cel-js'

try {
  // Fetch the value of the input 'who-to-greet' specified in action.yml
  const schema = core.getInput('schema');
  evaluate(schema, { user: { role: 'admin' } })
} catch (error) {
  // Handle errors and indicate failure
  core.setFailed(error.message);
}