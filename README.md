# validatejsoncharacters

> Validates the characters of json object which matches with provided pattern

## Install

```bash
npm install validatejsoncharacters
```

## Import
```javascript
const validateJsonCharacters = require('validatejsoncharacters');
```

## Usage
### Use Case 1
```javascript
const jsonobject = {
            name: 'John',
            age: '12'
        };
const pattern = /^[a-zA-Z0-9_]*$/;
console.log(validateJsonCharacters(jsonobject,pattern)); // []
```

### Use Case 2
```javascript
const jsonobject = {
    name: 'John,s',
    age: '12'
};
const pattern = /^[a-zA-Z0-9_]*$/;
console.log(validateJsonCharacters(jsonobject,pattern)); // [ { id: 'name', value: 'John,s' } ]
```

### Use Case 3
```javascript
const jsonobject = {
    name: 'John,s',
    age: '12'
};
const pattern = /^[a-zA-Z0-9_]*$/;
const ignoreKeys = ['name'];
console.log(validateJsonCharacters(jsonobject, pattern, ignoreKeys)); // []
```

## API

## validateJsonCharacters(jsonObject, pattern, ignoreKeys)

- {jsonObject} object - json object which needs to be validated

- {pattern} regex - regex pattern for validation

- {ignoreKeys} string[] - list of keys to be ignored while validation

