const myText = document.getElementById("Text");
const myResult = document.getElementById("Result");
const mySubmit = document.getElementById("Submit");
let age;

mySubmit.onclick = function ageVerification()
{
    age = myText.value;
    age = Number(age);
    if (age == 16){ // If age equals 16, give the text that they are the bare minimum age.
        myResult.textContent = "You are the bare minimum age to use this website, congratulations for being 16 years old."
    }
    else if (age > 50){ // If age is greater than 50 but not 50, give the text that they are too old and cannot use the site.
        myResult.textContent = "YOU are very OLD and cannot use this site."
    }
    else if (age <= 6){ // If age is equal to 6 or less, give the text for them to go to school.
        myResult.textContent = "You are too young to use this website, go to school."
    }
    else if (age >= 17){ // If age is equal to 17 or more, give this text which allows them to use the wevsite. Since the age > 50 statement is before, it overrides the else if statment before.
        myResult.textContent = "You can use this website!"
    }
    else if (age < 16){ // If age is less than 16, give the text saying they are too young to use the website. Since the else if statement before only checks if the age is below or equal 6, this statement only checks ages 7 - 15
        myResult.textContent = "Sorry, you are too young to use this website."
    }
    else{ // checks for non numerical inputs that dont count as age
        myResult.textContent = "Invalid age."
    }
}