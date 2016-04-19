const sourceContext = require.context('./src/client', true, /.+main.js$/);
const testContext = require.context('./test/', true, /.+\.spec\.jsx?$/);

sourceContext.keys().forEach(sourceContext);
testContext.keys().forEach(testContext);
