function CleanStrings(inputArray) {
    const cleanedArray = inputArray.map(str => FormatString(str.trim()));
    cleanedArray.sort();
    return cleanedArray;
  }
  
function FormatString(str) {
    const words = str.split(' ').filter(word => word !== '');
    return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}