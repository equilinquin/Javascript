 //list variables
    var symVal = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "~"];
    var numVal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var lowVal = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var capVal = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];
    var password = "";
//onclick start prompts
function generate() {
   
//Ask user input
    var valInput = prompt("How long do you want your password to be?");

    console.log(valInput)
    if (valInput < 8) {
        alert("That's not enough!");
    } else if (valInput > 128) {
        alert("That's too much!!");
    } else if (valInput === NaN) {
           alert("Need to type proper value.");
    }

//do they want to use special char
    var sconf = confirm("Click OK if you want to use special characters?");

//do they want to use numbers
    var nconf = confirm("Click OK if you want to use numbers?");

//do they want to use lowercase.
    var lconf = confirm("Click OK if you want to use lowercase letters?");
    
//do they want to use uppercase.
    var cconf = confirm("Click OK if you want to use capital letters?");

    for (i = 0; i < valInput; i++) {
        var symRandom = symVal[Math.floor(Math.random() * symVal.length)];
        var numRandom = numVal[Math.floor(Math.random() * numVal.length)];
        var lowRandom = lowVal[Math.floor(Math.random() * lowVal.length)];
        var capRandom = capVal[Math.floor(Math.random() * capVal.length)];


        //One false statement
        if (nconf === true && lconf === true && cconf === true) {
            var nlc = numRandom + lowRandom + capRandom;
            password = password + nlc.charAt(Math.floor(Math.random() * nlc.length));
            document.getElementById("password").innerHTML = password;
            console.log(nlc);

        } else if (sconf === true && lconf === true && cconf === true) {
            var slc = symRandom + lowRandom + capRandom;
            password = password + slc.charAt(Math.floor(Math.random() * slc.length));
            document.getElementById("password").innerHTML = password;
            console.log(slc);

        } else if (sconf === true && nconf === true && cconf === true) {
            var snc = symRandom + numRandom + capRandom;
            password = password + snc.charAt(Math.floor(Math.random() * snc.length));
            document.getElementById("password").innerHTML = password;
            console.log(snc);

        } else if (sconf === true && nconf === true && lconf === true) {
            var snl = symRandom + numRandom + lowRandom;
            password = password + snl.charAt(Math.floor(Math.random() * snl.length));
            document.getElementById("password").innerHTML = password;
            console.log(snl);
        }
        // } else if (sconf === true && nconf === true && lconf === true && cconf === true) {
        //     var all = symRandom + numRandom + lowRandom + capRandom;
        //     password = all.charAt(Math.floor(Math.random() * all.length));
        //     document.getElementById("password").innerHTML = password;
        // }

    }

    for ( i = 0; i < valInput; i++) {
            symRandom = symVal[Math.floor(Math.random() * symVal.length)];
            numRandom = numVal[Math.floor(Math.random() * numVal.length)];
            lowRandom = lowVal[Math.floor(Math.random() * lowVal.length)];
            capRandom = capVal[Math.floor(Math.random() * capVal.length)];

           // Two false statements
        if (lconf === true && cconf === true) {
            var lowCap = lowRandom + capRandom;
            password = password + lowCap.charAt(Math.floor(Math.random() * lowCap.length));
            document.getElementById("password").innerHTML = password;
            console.log(password)


        } else if (nconf === true && cconf === true) {
            var numCap = numRandom + capRandom;
            password = password + numCap.charAt(Math.floor(Math.random() * numCap.length));
            document.getElementById("password").innerHTML = password;


        } else if (nconf === true && lconf === true) {
            var numLow = numRandom + lowRandom;
            password = password + numLow.charAt(Math.floor(Math.random() * numLow.length));
            document.getElementById("password").innerHTML = password;


        } else if (sconf === true && cconf === true) {
            var symCap = symRandom + capRandom;
            password = password + symCap.charAt(Math.floor(Math.random() * symCap.length));
            document.getElementById("password").innerHTML = password;


        } else if (sconf === true && lconf === true) {
            var symLow = symRandom + lowRandom;
            password = password + symLow.charAt(Math.floor(Math.random() * symLow.length));
            document.getElementById("password").innerHTML = password;


        } else if (sconf === true && nconf === true) {
            var symNum = symRandom + numRandom;
            password = password + symNum.charAt(Math.floor(Math.random() * symNum.length));
            document.getElementById("password").innerHTML = password;
        }
    }


    for (i = 0; i < valInput; i++) {
        symRandom = symVal[Math.floor(Math.random() * symVal.length)];
        numRandom = numVal[Math.floor(Math.random() * numVal.length)];
        lowRandom = lowVal[Math.floor(Math.random() * lowVal.length)];
        capRandom = capVal[Math.floor(Math.random() * capVal.length)];

            //Three false statements
        if (lconf === false && nconf === false && sconf === false) {
            password = password + capRandom.charAt(Math.floor(Math.random) * capRandom.length);
            document.getElementById("password").innerHTML = password;


        } else if (sconf === false && nconf === false && cconf === false) {
            password = password + lowRandom.charAt(Math.floor(Math.random) * lowRandom.length);
            document.getElementById("password").innerHTML = password;


        } else if (sconf === false && lconf === false && cconf === false) {
            password = password + numRandom.charAt(Math.floor(Math.random) * numRandom.length);
            document.getElementById("password").innerHTML = password;


        } else if (nconf === false && lconf === false && cconf === true) {
            password = password + symRandom.charAt(Math.floor(Math.random() * symRandom.length));
            document.getElementById("password").innerHTML = password;
        }
    }
}
    




// function copy() {
//     document.getElementById("copy").select();
//     document.execCommand("Copy");
//     alert("Password copied to clipboard!");
//   }



//display password.