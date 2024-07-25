//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an object.
 * O: The function returns an array containing the values assigned to each key in the input object.
 * C: N/A
 * E: N/A
 */

function objectValues(object) {
    // Initialize output variable with an empty array
    var output = [];
    // Declare for-in loop on input object
    for (var key in object) {
        // Push object[key] values into output array
        output.push(object[key]);
    }
    // Return output
    return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an object.
 * O: The function returns a string containing the names of the keys 
 *    in the input object seperated by a space.
 * C: N/A
 * E: N/A
 */

function keysToString(object) {
    // Initialize outputArray variable with an empty array
    var outputArray = [];
    // Declare for-in loop on object
    for (var key in object) {
        // Push key into outputArray
        outputArray.push(key)
    }
    // Return outputArray joined together into a string with a space between each element
    return outputArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The funciton receives an object.
 * O: The function returns a string of the string values assigned to each key 
 *    of the input object seperated by a space. Don't not include non strings.
 * C: N/A
 * E: N/A
 */

function valuesToString(object) {
    // Initialize output variable with an empty array
    var output = [];
    // Declare for-in loop on object
    for (var key in object) {
        // Check if object[key] is a string
        if (typeof object[key] === 'string') {
            // If true, push object[key] value into output array
            output.push(object[key]);
        }
    }
    // Return output array joined together with a space between each element
    return output.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives one input of a piece of data.
 * O: The function returns a string describing if the piece of 
 *    data is an "array" or an "object".
 * C: N/A
 * E: N/A
 */

function arrayOrObject(collection) {
    // Check if collection is an array data type.
    if (Array.isArray(collection)) {
        // If true, return "array"
        return "array";
    // Check else if collection is an object data type
    } else if (typeof collection === 'object') {
        // If true, return "object"
        return "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a strings on one word.
 * O: The function returns a string of the input string with its first
 *    letter capitalized.
 * C: N/A
 * E: N/A
 */

function capitalizeWord(string) {
    // Isolate the first character of string with .charAt(0) and capitalize it with .toUpperCase()
    // Return the capitialized first letter concatenated with the rest of string using .slice(1)
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a string of multiple words seperated by a space.
 * O: The function returns the input string with the first letter of each 
 *    word capitalized.
 * C: N/A
 * E: N/A
 */

function capitalizeAllWords(string) {
    // Initialize outputArray with an empty array
    var outputArray = [];
    // Inititalize stringArray variable with string.split(' ')
    var stringArray = string.split(' ');
    // Declare for loop using i; Start: 0; Stop: stringArray.length; Increment by 1 each loop
    for (var i = 0; i < stringArray.length; i++) {
        // Invoke capitializeWord() with stringArray[i] and push it into outputArray
        outputArray.push(capitalizeWord(stringArray[i]));
    }
    // Return outerArray joined together with a space between each element
    return outputArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function welcomeMessage(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}