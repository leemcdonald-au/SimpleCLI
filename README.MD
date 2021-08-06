## SimpleCLI
Quick and dirty method to parse CLI input into a simple JSON object.

##### Installation
Stock NPM install.
> npm install @leemcdonald-au/simplecli

##### Usage
```javascript
// Assume script is executed node . --boolean -variable has a value that can include spaces --anotherbool --finalbool -variable2 single-value --getting-tricky
import { SimpleCLI } from '@leemcdonald-au/simplecli'

const cli = new SimpleCLI
console.log(cli)
```

The object will include EXEC and SCRIPT as addons to CLI input for easier usage.

##### Support
- RVN: RPzCvWdmgqPTBA5qMQFuRPfNoJmvPnVzw8
- ARK: Aeh9tR1zjE34hBrYfSD1EMfL1cxpkaVJKb
- ETH: 0xd9979f482da58b4432d0f52eb456f7dd1f4897e6
- BTC: 1HzR3Vyu231E8SsGLUbNYSb92bn6MGLEaV