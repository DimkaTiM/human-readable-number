module.exports = function toReadable (number) {
    if (number == 0) return "zero"
    len = (number + "").length
    letters = len == 1 ? `00${number}` : len == 2 ? `0${number}` : `${number}`
    ent = letters.split("")
    
    parts0 = [ 
        "", 
        'one hundred ',
        'two hundred ',
        'three hundred ',
        'four hundred ',
        'five hundred ',
        'six hundred ',
        'seven hundred ',
        'eight hundred ',
        'nine hundred ',
    ]
    
    tenToNine2 = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ]

    doz1 = [
        "",
        tenToNine2[ent[2]],
        'twenty ',
        'thirty ',
        'forty ',
        'fifty ',
        'sixty ',
        'seventy ',
        'eighty ',
        'ninety ',
    ]

    let result = ( parts0[ent[0]] + doz1[ent[1]] + (ent[1] == 1 ? "" : parts0[ent[2]].split(" ")[0]) ).trim()
    return result;
  }