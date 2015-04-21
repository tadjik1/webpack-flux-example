var testsContext = require.context("./scripts", true, /-test$/);
testsContext.keys().forEach(testsContext);
