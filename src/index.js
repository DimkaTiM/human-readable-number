module.exports = function toReadable (number) {
    if (number == 0) return "zero"
    letters = (number + "").length == 1 ? `00${number}` : `0${number}`
    ent = letters.split("")
    // console.log(ent)
    
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
       
       
       
    // console.log( parts0[ Number(ent[0]) ] )
    // console.log( doz1[ent[1]] )
    // console.log( parts0[+ent[2]].split(" ")[0] )
    let result = parts0[ent[0]] + doz1[ent[1]] + ` ` + parts0[ent[2]].split(" ")[0]
    return result;
  }
  
//   console.log( toReadable(11) )