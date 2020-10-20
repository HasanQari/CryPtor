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
        KField.type = 'hidden'
    else if (this.value == 'Caesar') {
        KField.type = 'number'
        KField.removeAttribute('readonly')
        KField.setAttribute("max", 34)
        KField.setAttribute("min", 0)
        KField.style.color = "#000"
        KField.style.fontWeight = "bold"
    } else if (this.value == 'Monoalphabetic') {
        KField.type = 'text'
        KField.setAttribute('readonly', true)
        KField.value = ""
    } else if (this.value == 'Vigenere') {
        KField.type = 'text'
        KField.setAttribute('readonly', true)
        KField.value = ""
    } else KField.type = 'hidden'
}
document.getElementById('selectedEncrpType').addEventListener('change', KFieldChange)

// CLEAR
function cleanArea() {
    document.getElementById('Ptxt').value = "";
    document.getElementById('Ctxt').value = "";
    document.getElementById('KEY').value = "";

}

// ************************************************************************************ //
// Global Code (declearation the var/const)

// initialize Arabic Alphabetic by using string
const alphabet = "أبتثجحخدذرزسشصضطظعغفقكلمنهويةإؤئءاى";

// initialize Arabic Alphabetic by using array from 0 -> 34 index
const arrayAlphabet = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ة", "إ", "ؤ", "ئ", "ء", "ا", "ى"]


// ************************************************************************************ //
//  Caesar Shift Cipher ...........



// concat the word
var fullAlphabet = alphabet + alphabet + alphabet;

// main function
function shiftCipher() {

    // declear and initailize value for field of input and output

    // Plaint Text
    var plainText = $('#Ptxt').val();
    // Key
    var cipherOffset = $('#KEY').val();
    // using mod for set the ranga of key
    cipherOffset = (cipherOffset % alphabet.length);
    // Cipher Text
    var cipherText = '';

    // pass throgh the char. of P. text
    for (i = 0; i < plainText.length; i++) {
        // assign char to var. value
        var letter = plainText[i];
        // declear index for that sequance and def. the index of char. 
        var index = alphabet.indexOf(letter);
        // detairment the shift and its amount
        if (index == -1) {
            cipherText += letter;
        } else {
            // new index after shift
            index = ((index + cipherOffset) + alphabet.length);
            // find the Cipher char and add it to C. text to concat it
            var nextLetter = fullAlphabet[index];
            cipherText += nextLetter;
        }
    }

    // assign a value of C. text to the var.
    $('#Ctxt').val(cipherText);
}

// Deal with the views
$(document).ready(function () {
    $('#cypher').keypress(function () {
        setTimeout(function () { shiftCipher(); }, 20);
    });
    $('#cypher').blur(function () {
        shiftCipher();
    });
    $('#offset').change(function () {
        setTimeout(shiftCipher(), 20);
    });
});

// ************************************************************************************ //
//  Mono Cipher ...........

// store shuflled Array
var shuffledArr;

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
})(arrayAlphabet);

// the core function to apply the Mono. cipher
function MonoCipher() {
    // set a key to display it on the field to user
    var key = document.getElementById("KEY").innerHTML = shuffledArr.join().replace(/,/g, ' ');
    document.getElementById("KEY").value = "Shuflled Alphabet: "+key;

    var textArr = document.getElementById("Ptxt").value.split("");
    for (let k = 0; k < textArr.length; k++) {
        if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n'))
            continue;

        else
            textArr[k] = shuffledArr[arrayAlphabet.indexOf(textArr[k])];
    }
    document.getElementById("Ctxt").innerHTML = textArr.join().replace(/,/g, '')+"\n-------------\n:هذا الترتيب الأساسي للأحرف المخزن في الأداة"+"\n"+arrayAlphabet.join().replace(/,/g, ' ');
}


// ************************************************************************************ //
//  Vigener Cipher ...........





// ************************************************************************************ //
// .
// .
// .
// .
// .
// .
// Hasan Sameer Qari 437013480