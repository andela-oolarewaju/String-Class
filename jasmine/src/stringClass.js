/** Olarewaju Oreoluwa
Checkpoint 2**/

//check if input has vowels
String.prototype.hasVowels = function () {
  //match a string with any of these characters
  var isVowel = /[aeiou]/g;
  return isVowel.test(this)
};

//convert input to uppercase
String.prototype.toUpper = function() {
  //match all lowercase characters
  var lowerCase = /[a-z]/g;
  //get uppercase ascii value of arg then convert back to char
  return this.replace(lowerCase, function(arg){
    return String.fromCharCode(arg.charCodeAt() - 32);
  });
};

//convert input to lowercase
String.prototype.toLower = function() {
  //match all uppercase characters
  var upperCase = /[A-Z]/g;
  //get lowercase ascii value of arg then convert back to char
  return this.replace(upperCase, function(arg){
    return String.fromCharCode(arg.charCodeAt() + 32);
  });
};

//capitalize only the first character of the input
String.prototype.ucFirst = function() {
  var firstChar = this[0].toUpper();
  var result = this.replace(this[0], firstChar);
  return result;
};

//check whether input is a question
String.prototype.isQuestion = function() {
  //match a string that ends with "?"
  var isQuestionRegEx = /\?$/;
  return isQuestionRegEx.test(this);
};

//return a list of the words in the string as an array
String.prototype.words = function() {
  var result = [];
  //match words that comes after and before non words 
  var isWord = /\b\w+\b/g;
  //use replace' function and push arg into array
  this.replace(isWord, function(arg) {
    result.push(arg)
  });
  return result;
};

//count the words in a string using words method
String.prototype.wordCount = function() {
  var result = this.words();
  return result.length;
};

//convert to currency, add necessary commas
String.prototype.toCurrency = function() {
  //matche a single digit, then three digits sets only and add comma to the matched digit
  var result = this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return result;
};

// convert input to digits, remove any comma
String.prototype.fromCurrency = function() {
  //matche all non-digits and non-dot then remove. Then parse to Float.
  var result = parseFloat(this.replace(/[^\d\.]/g,''));
  return result;
};