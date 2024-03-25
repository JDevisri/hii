// // var btn=document.getElementById('mybtn');
// // btn.addEventListener('click', function(){
// //     myFun();
// // });

// // function myFun(){
// //     document.getElementById('demo').innerHTML='demo content'
// // }


// let uname_status=false;
// let upass_status=false;
// let uname=document.getElementById('uname');
// let upass=document.getElementById('upass');
// let submit_btn=document.getElementsByClassName('mybtn')[0];
// uname.addEventListener('input',function(){
//     if(uname.value.length>=3){
//         uname_status=true;
//         // document.getElementById('uname_val').classList.add('hide');
//         uname.classList.remove('red');
//     }else{
//         uname_status=false;
//         // document.getElementById('uname_val').classList.remove('hide');
//        uname.classList.add('red');
//     }validate()
// })
// upass.addEventListener('input',function(){
//     if(upass.value.length>=6){
//         upass_status=true;
//         // document.getElementById('upass_val').classList.add('hide');
//         upass.classList.remove('red');
//     }else{
//         upass_status=false;
//         // document.getElementById('upass_val').classList.remove('hide');
//         upass.classList.add('red');
//     }validate()
// })
// function validate(){
//     if(uname_status && upass_status){
//         submit_btn.classList.remove('disabled');
//     }else{
//         submit_btn.classList.add('disabled');
//     }
// }


// //avg
// var arr=[1,2,3,4,5];
// let sum=0;
// for(i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// var average=sum/arr.length;
// console.log(average);



//palindrome
function checkPalindrome(string){
    var len=string.length;
    for(i=0;i<len/2;i++){
      if(string[i]!=string[len-i-1]){
          return 'it is not a palindrome'
      }
    }
    return 'it is palindrome'
  }
//   var string="abcba";
  var string=prompt("enter a string");
  console.log(checkPalindrome(string));



  

  //vowels
  function getVowels(string) {
    const Vowels = 'aAeEiIoOuU';
    let vowelsCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }

    return vowelsCount;
}

const inputString = 'A Computer Science Portal for Geeks';
console.log(`The Number of vowels in "${inputString}": ${getVowels(inputString)}`);



function findVowels(str) {
    // Initialize an empty string to store vowels
    let vowels = "";
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Convert the character to lowercase for case-insensitive comparison
      const char = str[i].toLowerCase();
  
      // Check if the character is a vowel
      if (["a", "e", "i", "o", "u"].includes(char)) {
        // Add the vowel to the vowels string
        vowels += char;
      }
    }
  
    // Return the string of vowels
    return vowels;
  }
  
  // Example usage
  const text = "Hello, world!";
  const vowels = findVowels(text);
  console.log(`Vowels in '${text}': ${vowels}`);