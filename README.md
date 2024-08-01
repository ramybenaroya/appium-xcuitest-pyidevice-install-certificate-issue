# Example for issue in appium-xcuitest-driver

## Install
```bash
npm install
```
## Add values
Modify the following in `test.js`:
```
'appium:deviceName': 'YOUR_DEVICE_NAME',
'appium:derivedDataPath': 'YOUR_DERIVED_DATA_PATH',
'appium:udid': 'YOUR_DEVICE_UDID',
'appium:platformVersion': 'YOUR_PLATFORM_VERSION',
```

## Run
```bash
npx start
```
## Test
```bash
npm test
```