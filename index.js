function validatejsoncharaters(jsonObject, pattern, ignoreKeys = []) {
    const invalidKeys = [];
    const ignoreKeysSet = new Set(ignoreKeys);

    const parseJsonObject = (jsonData) => {
        if (jsonData) {
            Object.keys(jsonData).forEach(id => {
                if (jsonData.hasOwnProperty(id) && !ignoreKeysSet.has(id)) {
                    if (typeof jsonData[id] === 'object') {
                        parseJsonObject(jsonData(jsonData[id]));
                    } else if (!pattern.test(id) || !pattern.test(jsonData[id])) {
                        invalidKeys.push({ id, value: jsonData[id] });
                    }
                }
            });
        }
    }
    parseJsonObject(jsonObject);
    return invalidKeys;
};

module.exports = validatejsoncharaters;