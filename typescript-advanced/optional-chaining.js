"use strict";
// Optional chaining ?.foo?.bar?.baz
function serializeJSON(value, options) {
    var _a, _b, _c, _d;
    // default
    const indent = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.indent;
    // optional in dynamic (first bad practice, doesn't option first time)
    const indentBad = options === null || options === void 0 ? void 0 : options.formatting["indent-level"];
    const indentDynamic = (_b = options === null || options === void 0 ? void 0 : options.formatting) === null || _b === void 0 ? void 0 : _b["indent-level"];
    // functions if can be optional
    const indentFunction = (_d = (_c = options === null || options === void 0 ? void 0 : options.formatting) === null || _c === void 0 ? void 0 : _c.getIndent) === null || _d === void 0 ? void 0 : _d.call(_c);
    return JSON.stringify(value, null, indent);
}
const userTest = {
    name: 'John Volos',
    twitter: 'kurabombei'
};
const json = serializeJSON(userTest, {
    formatting: {
        "indent-level": 5,
    }
});
console.log(json);
