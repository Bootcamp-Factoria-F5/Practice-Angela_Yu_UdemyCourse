var introMessage = "Hello";
var userName = "John";
console.log("Hello" + " John");
console.log(introMessage + " there ", userName);
console.log(userName.length);

// Write a concatenation that gives the result: You have written 182 characters, you have -42 characters left.

var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;
console.log(
  "You have written " +
    tweetCount +
    " characters, you have " +
    (140 - tweetCount) +
    " characters left."
);
