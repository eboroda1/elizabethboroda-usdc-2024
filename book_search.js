/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    for (const Content in scannedTextObj) {
        let curr = scannedTextObj[Content];
        let currContent = curr["Content"];
        for (const k in currContent) {
            let currText = currContent[k];
            if (currText["Text"].includes(" " + searchTerm)) {
                const appearance = {
                    "ISBN": curr["ISBN"],
                    "Page": currText["Page"],
                    "Line": currText["Line"]
                };
                result["Results"].push(appearance);


            }
        }
    }

    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const twentyLeaguesAndDay = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }, 
    {
        "Title": "Day",
        "ISBN": "9780000528532",
        "Content": [
            {
                "Page": 33,
                "Line": 10,
                "Text": "Danny was in love with his wife's brother."
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "Danny, how are you feeling today? Asked Violet"
            },
            {
                "Page": 41,
                "Line": 10,
                "Text": "Today is the first day of the rest of her life."
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOut2 = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const twentyLeaguesOut3 = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const combinedTextsAns1 = {
    "SearchTerm": "her",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        },
        {
            "ISBN": "9780000528532",
            "Page": 41,
            "Line": 10
        }
    ]
}

const testingComma = {
    "SearchTerm": "were",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const testingPeriod = {
    "SearchTerm": "momentum",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const testingApostrophe1 = {
    "SearchTerm": "Canadian",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const testingApostrophe2 = {
    "SearchTerm": "Canadian's",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const willFailFirstWordTest = {
    "SearchTerm": "Today",
    "Results": [
        {
            "ISBN": "9780000528532",
            "Page": 41,
            "Line": 10
        }
    ]
}



/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

const test3result = findSearchTermInBooks("The", twentyLeaguesIn)
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", test3result);
}

const test4result = findSearchTermInBooks("and", twentyLeaguesIn)
if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut3);
    console.log("Received:", test4result);
}

const test5result = findSearchTermInBooks("her", twentyLeaguesAndDay)
if (JSON.stringify(combinedTextsAns1) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", combinedTextsAns1);
    console.log("Received:", test5result);
}

const test6result = findSearchTermInBooks("were", twentyLeaguesAndDay)
if (JSON.stringify(testingComma) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", testingComma);
    console.log("Received:", test6result);
}

const test7result = findSearchTermInBooks("momentum", twentyLeaguesAndDay)
if (JSON.stringify(testingPeriod) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", testingPeriod);
    console.log("Received:", test7result);
}

const test8result = findSearchTermInBooks("Canadian", twentyLeaguesAndDay)
if (JSON.stringify(testingApostrophe1) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", testingApostrophe1);
    console.log("Received:", test8result);
}

const test9result = findSearchTermInBooks("Canadian's", twentyLeaguesAndDay)
if (JSON.stringify(testingApostrophe2) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", testingApostrophe2);
    console.log("Received:", test9result);
}

const test10result = findSearchTermInBooks("Today", twentyLeaguesAndDay)
if (JSON.stringify(willFailFirstWordTest) === JSON.stringify(test10result)) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", willFailFirstWordTest);
    console.log("Received:", test10result);
}