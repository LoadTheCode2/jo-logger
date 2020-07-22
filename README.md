# Jo-Logger

Create log files in a folder and pick a name

# Installation

`npm i jo-logger --save`

Then...

```
const joLogger = require('jo-logger')

joLogger({
  message: 'Log Message',
  name: 'logName',
  folder: 'logFolder'
})
```

## Options

Jo-Logger support 3 options, which are optional

- "message" - _string_ (Defaults to 'Log Message')
- "name" - _string_ (Defaults to 'logName')
- "folder" - _string_ (Defaults to 'logFolder')