// Arabic Alphabets Counter

function letterFrequency(text) {
    var count = {};
    text.split('').forEach(function (s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}
console.log(letterFrequency("هذه الدالة تم تحديد معامل واحد ألا وهو النص مراد تحديد او معرفة عدد مرات تكرار الحروف في هذا النص نوع هذه المعامل هو الاسترينق حيث يتم استقبال النص في هذه الدالة ثم تقطيع الحروف الموجودة فيه ليتم تقسيم النص الى أحرف ثم يضاف واحد الى العداد في حال تكرار الحرف تم تطوير هذا الكود واستخدامه وفقا للحالة المرادة"));

// Hasan Sameer Qari 437013480 