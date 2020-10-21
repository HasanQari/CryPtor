// JavaScript Doc. (that have all Functions for this website).

// buttons display property function of web page
$(document).ready(function () {
    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".button").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".button").hide();
            }
        });
    }).change();
});

// change key type and add some attr.
function KFieldChange() {
    var KField = document.getElementById('KEY');
    if (this.value == 'none')
        KField.type = 'hidden';
    else if (this.value == 'Caesar') {
        KField.type = 'number';
        KField.removeAttribute('readonly');
        KField.setAttribute("max", 34);
        KField.setAttribute("min", 0);
        KField.style.color = "#000";
        KField.style.fontWeight = "bold";
    } else if (this.value == 'Monoalphabetic') {
        KField.type = 'text';
        KField.setAttribute('readonly', true);
        KField.value = "";
    } else if (this.value == 'Vigenere') {
        KField.type = 'text';
        KField.value = "";
        KField.style.textAlign = 'right'
    } else KField.type = 'hidden';
}
document.getElementById('selectedEncrpType').addEventListener('change', KFieldChange);

// CLEAR
function clearFields() {
    document.getElementById('Ptxt').value = null
    document.getElementById('Ctxt').value = null
    document.getElementById('KEY').value = null
}

// ************************************************************************************ //
// Global Code (Declearation of Arabic Alphabets const)

// initialize Arabic Alphabetic by using string for 35 char.
const Arabic_Alphabets = "أبتثجحخدذرزسشصضطظعغفقكلمنهويةإؤئءاى";

// initialize Arabic Alphabetic by using array from 0 -> 34 index
const Arabic_Alphabets_Arr = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ة", "إ", "ؤ", "ئ", "ء", "ا", "ى"]


// ************************************************************************************ //
//  Caesar Shift Cipher ...........

// concat the word
var fullAlphabet = Arabic_Alphabets + Arabic_Alphabets + Arabic_Alphabets;

// main function for shift Cipher
function shiftCipher() {

    // declear and initailize value for field of input and output
    var plainText = $('#Ptxt').val(); // Plaint Text
    var cipherOffset = $('#KEY').val(); // Key
    var cipherText = ''; // Cipher Text 

    cipherOffset = (cipherOffset % Arabic_Alphabets.length); // using mod for set the ranga of key

    // pass throgh the char. of P. text
    for (i = 0; i < plainText.length; i++) {
        var letter = plainText[i]; // assign char to var. value
        var index = Arabic_Alphabets.indexOf(letter); // declear index for that sequance and def. the index of char.

        // detairment the shift and its amount
        if (index == -1) {
            cipherText += letter;
        } else {
            index = ((index + cipherOffset) + Arabic_Alphabets.length); // new index after shift
            var nextLetter = fullAlphabet[index]; // find the Cipher char and add it to C. text to concat it
            cipherText += nextLetter;
        }
    }
    $('#Ctxt').val(cipherText); // assign a value of C. text to the var.
}

// ************************************************************************************ //
//  Mono Cipher ...........

var shuffledArr; // store shuflled Array

// shufll the alphabet array in function then store the shuflled array in var.
var shuffledArr = (function shuffle(array) {
    let shuffledArray = array.slice(0, array.length)
    var currentIndex = shuffledArray.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = shuffledArray[currentIndex];
        shuffledArray[currentIndex] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
})(Arabic_Alphabets_Arr); // insert Arabic_Alphabets_Arr as parameter to shuffle it the store it in shuffledArr var

// the main function to apply the Mono. cipher
function MonoCipher() {
    // orgnaize and set a key to display it on the field to user
    var key = document.getElementById("KEY").innerHTML = shuffledArr.join().replace(/,/g, ' ');
    document.getElementById("KEY").value = "Shuflled Alphabet: " + key;

    // cipher text array for mono cipher output
    var CtxtArr = document.getElementById("Ptxt").value.split("");

    // pass through cipher text array was contain P. txt value and compar/assign by index between 2 Array
    for (let k = 0; k < CtxtArr.length; k++) {
        if ((CtxtArr[k] == ' ') || (CtxtArr[k] == '\t') || (CtxtArr[k] == '\n'))
            continue;

        else
            CtxtArr[k] = shuffledArr[Arabic_Alphabets_Arr.indexOf(CtxtArr[k])];
    }
    // store the result from mono. cipher to var.
    var cipherText = document.getElementById("Ctxt").innerHTML = CtxtArr.join().replace(/,/g, '') + "\n-------------\n:هذا الترتيب الأساسي للأحرف المخزن في الأداة" + "\n" + Arabic_Alphabets_arr.join().replace(/,/g, ' ');
    console.log(cipherText); // print to the console for check and test
}


// ************************************************************************************ //
//  Vigener Cipher ...........


// main function for Vigener Cipher it take the message and keyword as parameters
function VigCipher() {

    // recsive value from view and assign to var.
    var M = document.getElementById("Ptxt").value.replace(/\s/g, '');
    var K = document.getElementById('KEY').value;
    var C = document.getElementById('Ctxt');

    var cipherText = ""; // Cipher Text (result of the M. from Vigener C. stored here)

    // pass through the length of the message and sum the index of char with another using key and mod to length of Alphabet
    for (var i = 0; i < M.length; i++) {
        cipherText += Arabic_Alphabets.charAt((Arabic_Alphabets.indexOf(M.charAt(i)) + Arabic_Alphabets.indexOf(K.charAt(i % K.length))) % Arabic_Alphabets.length);
    }
    C.value = cipherText; // assign C txt value to var. as show it to user
}



// ************************************************************************************ //
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// Hasan Sameer Qari 437013480 



























// ^_* !