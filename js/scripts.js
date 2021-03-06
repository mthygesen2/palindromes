var palindromeCheck = function(userInput) {
  if (textReverser(userInput) === userInput) {
    return true;
  } else {
  return false;
  };
};

var textReverser = function(userInput) {
  var wordArray = [];
  var reverseArray = [];
  var reverseText = "";
  for (var index = 1; index <= userInput.length; index +=1) {
    wordArray.push(userInput.slice((index - 1), index));
  };
  for (var rindex = 1; rindex <= userInput.length; rindex +=1) {
    reverseArray.push(wordArray.pop());
  };
  reverseArray.forEach(function(character) {
    reverseText += character
  });
  return reverseText;
};

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var userInput = $("input#userInput").val();
    var result = palindromeCheck(userInput)
     if (result) {
       $("#result-true").show();
       $("#result-false").hide();
     } else {
       $("#result-false").show();
       $("#result-true").hide();
     };

     event.preventDefault();
  });
});
