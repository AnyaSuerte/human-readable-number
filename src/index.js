module.exports = function toReadable(number) {
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }

    let words = "";

    if (number >= 100) {
        words += units[Math.floor(number / 100)] + " hundred ";
        if (number % 100 === 0) {
          words = words.trim();
        }
        number = number % 100;
    }

    if (number >= 10 && number < 20) {
        return words + teens[number - 10];
    }

    if (number >= 20 && number < 100) {
        words += tens[Math.floor(number / 10)];
        if (number % 10 !== 0) {
          words += ' ';
      }
        number = number % 10;
    }

    words += units[number];

    return words;
};
