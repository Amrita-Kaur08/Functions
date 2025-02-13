// String Functions

// String at()
let text = "Hello";
let character = text.at(0);
console.log(character)

let str1="Welcome to JavaScript"
console.log(str1.at(2))

//String anchor()
const String = "Hello JavaScript";
console.log(String.anchor("Hello"))

//String Concat()
const string1 = "String is";
const string2 = "immutable";

console.log(string1.concat(" ", string2));
console.log(string2.concat("_", string1));

//String endswith()

let sentence1 = "Hii! Everyone";
console.log(sentence1.endsWith("Everyone"));
console.log(sentence1.endsWith("Everyone", 5));

let sentence2 = "Is JavaScript easy?";
console.log(sentence2.endsWith("easy?"));

//String startswith 
let text1="Hii! Everyone";
console.log(text1.startsWith("Hii!"));

let text2="Is JavaScript easy?";
console.log(text2.startsWith("Is",0));

//String includes()
let sentence = "Hello world, welcome to the universe.";
let word = "welcome";
console.log(sentence.includes(word))

      
//String indexof
let paragraph = "Welcome to JavaScript String indexof function";
let Term = "JavaScript";
let index = paragraph.indexOf(Term);
console.log(`The index of the "${Term}" is ${index}`);

//String replace()
const replaces_word = "Hard work is the key to success";
console.log(replaces_word.replace("the", "a"));

//String Split
const str = "Javascript make page dynamic and interactive";
const letters = str.split(" ");
console.log(letters[3]);

//String tolowercase
let lower = "hello world , Im Javascript";
console.log(lower.toLowerCase());

//String touppercase
let upper = "hello world , Im Javascript";
console.log(lower.toUpperCase());

//String trim()
const message = "   Hello world!   ";
console.log(message.trim());

//String StringLength
let mssg="Hello JavaScript"
console.log(mssg.length)
