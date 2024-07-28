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
 * I: The function receives an object with a name property.
 * O: The function returns a string "Welcome <Name>!" where <name> comes
 *    from the input object's name property with the first letter capitalized.
 * C: N/A
 * E: N/A
 */

function welcomeMessage(object) {
    // Invoke capitalizeWord() on object.name to capitalize it
    // Return the capitalized name with "Welcome " before it and "!" after.
    return "Welcome " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an object with a name and a species.
 * O: The function returns a string "<Name> is a <Species>" where both
 *    <Name> and <Species> are capitalized and come from the input object.
 * C: N/A
 * E: N/A
 */

function profileInfo(object) {
    // Return the string "<Name> is a <Species>"
        // <Name> comes from object.name
        // <Species> comes from object.species
            // Capitalize both by invoking capitalizeWord()
    return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an object that may have a noises property containing an array.
 * O: The function returns a string of the elements in the noises array concatenated together,
 *    and if there are no elements in the array, there isn't an array, or if there
 *    isn't a noises property, it should return the string "there are no noises".
 * C: N/A
 * E: N/A
 */

function maybeNoises(object) {
    // Check if object.noises is in the object and if it contains an array
    if (object.noises && Array.isArray(object.noises)) {
        // Check if object.noises.length is 0
        if (object.noises.length === 0) {
            // If true, return "there are no noises"
            return "there are no noises";
        }
        // Return object.noises joined together with a space between each element
        return object.noises.join(' ');
    // Else, return "there are no noises"
    } else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a string of words and a string of a single word.
 * O: The function returns a boolean indicating if the input string of words
 *    contains the input single word.
 * C: N/A
 * E: N/A
 */

function hasWord(string, word) {
    // Initialize stringArray variable with string.split(' ')
    stringArray = string.split(' '); 
    // Declare for loop using i; Start: 0; Stop: stringArray.length; Increment by 1 each loop
    for (var i = 0; i < stringArray.length; i++) {
        // Check if stringArray[i].toLowerCase() === word.toLowerCase()
        if (stringArray[i].toLowerCase() === word.toLowerCase()) {
            // If true, return true.
            return true;
        }
    }
    // Return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a string representing a name of a friend
 *    and an object with a friends property with the value of an array.
 * O: The function returns the input object with an updated friends property
 *    containing the input friend name string.
 * C: N/A
 * E: N/A
 */

function addFriend (name, object) {
    // Push name into object.friends array
    object.friends.push(name);
    // Return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a string representing a name and an object.
 * O: The function returns true if the input string name is in the input
 *    object's friends array.
 * C: N/A
 * E: N/A
 */

function isFriend(name, object) {
    // Check if object.friends is an array
    if (Array.isArray(object.friends)) {
        // If true, declare for loop using i; Start: 0; Stop: object.friends.length; Increment by 1 each loop
        for (var i = 0; i < object.friends.length; i++) {
            // Check if object.friends[i] is strictly equal to name
            if (object.friends[i] === name) {
                // If true, return true.
                return true;
            }
        }
    // Else, return false.
    } else {
        return false;
    }
// Return false
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a string representing a name and an array
 *    containing a list of objects with a name and friends property.
 * O: The function returns an array of string names the input name is 
 *    not friends with.
 * C: N/A
 * E: N/A
 */

function nonFriends(name, array) {
    // Initialize nonFriends variable with an empty array.
    var nonFriends = [];
    // Declare for loop using i; Start: 0; Stop: array.length; Increment by 1 each loop
    for (var i = 0; i < array.length; i++) {
        // Check if array[i].name !== name
        if (array[i].name !== name) {
            // If true, push array[i].name into nonFriends
            nonFriends.push(array[i].name);
            // Declare a for loop using j; Start: 0; Stop: array[i].friends.length; Increment by 1 each loop
            for (var j = 0; j < array[i].friends.length; j++) {
                // Check if array[i].friends[j] === name
                if (array[i].friends[j] === name) {
                    // If true, pop off the last entry of nonFriends
                    nonFriends.pop();
                }
            }
        }
    }
    // Return nonFriends
    return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an object, a key (string), and a value.
 * O: The function updates the input property key on input object with 
 *    the new input value. If the input key does not exist on input
 *    object, the function creates it with the value. Returns the updated 
 *    object.
 * C: N/A
 * E: N/A
 */

function updateObject(object, key, value) {
    // Update object with key and value using bracket notation
    object[key] = value;
    // Return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an object and an array of strings representing
 *    property names.
 * O: The function removes any properties on input object that are listed
 *    in the input array. The function then returns the updated object.
 * C: N/A
 * E: N/A
 */

function removeProperties(object, array) {
    // Declare for in loop on object
    for (var key in object) {
        // Declare for loop using i; Start: 0; Stop: array.length; Increment by 1 each loop
        for (var i = 0; i < array.length; i++) {
            // Check if key === array[i]
            if (key === array[i]) {
                // If true, delete object[key]
                delete object[key];
            }
        }
    }
    // Return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array.
 * O: The function returns an array with all the duplicates in the input
 *    array removed.
 * C: N/A
 * E: N/A
 */

function dedup(array) {
    // Initialize output variable with an empty array.
    var output = [];
    
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