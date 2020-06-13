const assert = require('assert');
const validateJsonCharacters = require('../index');

describe('Validate', function () {
    it('should return empty array when valid jsonobject passed', function () {
        const jsonobject = {
            name: 'John',
            age: '12'
        };
        const pattern = /^[a-zA-Z0-9_]*$/;
        const output = validateJsonCharacters(jsonobject, pattern);
        assert.equal(output.length, 0);
    });

    it('should return invalid array when invalid jsonobject passed', function () {
        const jsonobject = {
            name: 'John,s',
            age: '12'
        };
        const pattern = /^[a-zA-Z0-9_]*$/;
        const output = validateJsonCharacters(jsonobject, pattern);
        assert.equal(output[0].id, 'name');
    });

    it('should return valid array when jsonobject passed with ignorekeys', function () {
        const jsonobject = {
            name: 'John,s',
            age: '12'
        };
        const ignorekeys = ['name'];
        const pattern = /^[a-zA-Z0-9_]*$/;
        const output = validateJsonCharacters(jsonobject, pattern, ignorekeys);
        assert.equal(output.length, 0);
    });
});