const core = require('@actions/core');
const jwt = require('jsonwebtoken');
(async function() {
    const id_token = await core.getIDToken();
    decoded = jwt.decode(id_token , {complete: true});
    core.setOutput("environment", decoded.payload.environment);
})()