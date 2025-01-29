const myText = document.getElementById("Text");
const myResult = document.getElementById("Result");
const mySubmit = document.getElementById("Submit");
let age;

mySubmit.onclick = function ageVerification()
{
    age = myText.value;
    age = Number(age);
    if (age == 16){
        myResult.textContent = "You are the bare minimum age to use this website, congratulations for being 16 years old."
    }
    else if (age > 50){
        myResult.textContent = "YOU are very OLD and cannot use this site."
    }
    else if (age <= 6){
        myResult.textContent = "You are too young to use this website, go to school."
    }
    else if (age >= 17){
        myResult.textContent = "You can use this website!"
    }
    else if (age < 16){
        myResult.textContent = "Sorry, you are too young to use this website."
    }
    else{
        myResult.textContent = "Invalid age."
    }
}