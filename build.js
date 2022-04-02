const fse = require('fs-extra');


try {
    fse.copySync(`server.js`, `build/server.js`);
    fse.copySync(`package.json`, `build/package.json`);
    fse.copySync(`package-lock.json`, `build/package-lock.json`);
    fse.copySync(`public`, `build/public`);
    fse.copySync(`node_modules`, `build/node_modules`);
    console.log('success!');
} catch (err) {
    console.error(err);
}
