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
    else if (this.value == 'Caesar'){
        KField.type = 'number'
        KField.removeAttribute('readonly')
        KField.setAttribute("max",25)
        KField.setAttribute("min",0)
        KField.style.color = "#000"
        KField.style.fontWeight = "bold"
    }else if (this.value == 'Monoalphabetic') {
        KField.type = 'text'
        KField.setAttribute('readonly',true)
        KField.value = ""
    } else if (this.value == 'Vigenere') {
        KField.type = 'text'
        KField.setAttribute('readonly',true)
        KField.value = ""
    } else KField.type = 'hidden'
}
document.getElementById('selectedEncrpType').addEventListener('change', KFieldChange)

// CLEAR
function cleanArea(){
    document.getElementById('Ptxt').value = "";
    document.getElementById('Ctxt').value = "";
    document.getElementById('KEY').value = "";
}

// ************************************************************************************ //
//  Caesar Shift Cipher ...........

// initialize Arabic Alphabetic
var alphabet = "أبتثجحخدذرزسشصضطظعغفقكلمنهويةإاؤئىء";

// concat the word
var fullAlphabet = alphabet + alphabet + alphabet;

// main function
function runCipher() {

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
        setTimeout(function () { runCipher(); }, 20);
    });
    $('#cypher').blur(function () {
        runCipher();
    });
    $('#offset').change(function () {
        setTimeout(runCipher(), 20);
    });
});

// ************************************************************************************ //
//  Mono Cipher ...........





// ************************************************************************************ //
//  VigenerCipher ...........





// ************************************************************************************ //
// .
// .
// .
// .
// .
// .
// Hasan Sameer Qari 437013480