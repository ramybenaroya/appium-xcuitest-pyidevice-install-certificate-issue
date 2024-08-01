const { remote } = require('webdriverio');
const { readFileSync } = require('fs');
const { join } = require('path');

const run = async () => {
    const driver = await remote({
        capabilities: {
            platformName: 'iOS',
            'appium:deviceName': 'YOUR_DEVICE_NAME',
            'appium:derivedDataPath': 'YOUR_DERIVED_DATA_PATH',
            'appium:udid': 'YOUR_DEVICE_UDID',
            'appium:platformVersion': 'YOUR_PLATFORM_VERSION',
            'appium:usePrebuiltWDA': true,
            'appium:automationName': 'XCUITest',
        }
    });
    const certContent = readFileSync(join(__dirname, './exampleCert.pem'), { encoding: 'base64' });
    await driver.execute('mobile: installCertificate', {
      content: certContent,
      commonName: 'Example',
    });
    await driver.execute('mobile: installCertificate', {
      content: certContent,
      commonName: 'Example',
    });
}

run().then(() => {
    console.log('done');
}).catch((e) => {
    console.error(e);
});