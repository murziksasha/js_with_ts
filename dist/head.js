export function loggerMe() {
    const family = ['Peter', 'Ann', 'Alex', 'Linda'];
    function showFamily(arr) {
        let result = '';
        if (Array.isArray(arr) && arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                result += arr[i] + ' ';
            }
        }
        return `Семья состоит из: ${result.trim()}`;
    }
    showFamily(family);
    // const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
    // function standardizeStrings(arr) {
    // }
}
