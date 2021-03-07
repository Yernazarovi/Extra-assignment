
/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/

let messageWords = []
let messageWords2 = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}



// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://i.pinimg.com/originals/dd/b3/07/ddb3072916931e04daf7a454a8d4b31f.jpg"        
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]
document.getElementById("submit").onclick = function(){
    const message = document.getElementById("message").value
    
let messageWords = []
let messageWords2 = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;

    var word = "";
    var cnt = 0;
    if(message != ""){
    for( var i = 0 ; i < message.length; ++i){
               if(message[i] != " "){
                    word+=message[i];        
               }
               else{
                var word1 = "";
                for(var j = 0 ; j < word.length; ++j){
                    if(isLetter(word[j])){
                        word1+=word[j];
                    }
                }
                messageWords2[cnt] = word1;
                word1= word1.toUpperCase();
                 messageWords[cnt] = word1;
                 cnt++;
                word="";
               }
    }
        word1 = "";
            for(var j = 0 ; j < word.length; ++j){
                if(isLetter(word[j])){
                        word1+=word[j];
                 }
           }   

     messageWords2[cnt] = word1; 
        word1= word1.toUpperCase();
    messageWords[cnt] = word1;
    var mx = 0;
    for(var i = 0; i < messageWords.length; ++i){
        var cnt1 = 1;
        for(var j = 0 ; j < messageWords.length; ++j){
            if(i != j){
                if(messageWords[i] == messageWords[j]){
                    cnt1++;
                }
            }
        }
        if(mx < cnt1){
            mx = cnt1;
            theMostFrequentWord = messageWords2[i];

        }
    }
    numberOfWordsInTheMessage = messageWords.length;
    console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
    console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)
  }
    var random = randomPhrasesAndPictures[Math.floor(randomPhrasesAndPictures.length * Math.random())];
    document.getElementById("phrase").innerHTML = random.phrase;
    document.getElementById("picture").src  = random.imageURL;
    document.getElementById("picture").style.height = "280px";
    document.getElementById("picture").style.width = "400px";
}











