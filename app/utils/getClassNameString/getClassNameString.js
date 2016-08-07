export default classObject => Object
    .keys(classObject)
    .reduce((r, k) => classObject[k] ? `${r} ${k}` : r, '')
    .replace(/^\s\s*/, '')
    .replace(/\s\s*$/, '');
