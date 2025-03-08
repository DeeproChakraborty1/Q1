async function getProblemLink(email, studentCode) {
    // Step 1: Concatenate and Lowercase
    const emailPart = email.split('@')[0];
    let combinedString = (studentCode + emailPart).toLowerCase();

    // Step 2: Remove Vowels
    combinedString = combinedString.replace(/[aeiou]/g, '');

    // Step 3: Remove Prime Numbers
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    combinedString = combinedString.replace(/\d/g, (match) => {
        if (isPrime(parseInt(match))) {
            return '';
        }
        return match;
    });

    if(!/\d/.test(combinedString)){
        combinedString += "1";
    }

    // Step 4: Select Characters at Even Indexes
    let evenIndexString = '';
    for (let i = 1; i <= combinedString.length; i += 2) {
        evenIndexString += combinedString[i - 1];
    }

    // Step 5: Convert String to Numbers
    let authenticationID = '';
    for (const char of evenIndexString) {
        const charCode = char.charCodeAt(0);
        if (char >= 'a' && char <= 'z') {
            authenticationID += charCode - 96;
        } else if (char >= '0' && char <= '9') {
            authenticationID += '28';
        } else {
            authenticationID += '27';
        }
    }

    // Make GET request
    const endpoint = `https://question-mapping.onrender.com/api/problem/${authenticationID}`;
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Problem Link:", data.problemLink);
        return data.problemLink; // Return the problem link.
    } catch (error) {
        console.error("Error fetching problem link:", error);
        return null; // Return null in case of error.
    }
}

// Example usage:
const email = 'deepro_19@rediffmail.com';
const studentCode = 'ft37_572';

getProblemLink(email, studentCode);
