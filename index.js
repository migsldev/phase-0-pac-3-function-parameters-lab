// name function
function introduction(name){
    return `Hi, my name is ${name}.`
}
console.log(introduction("Aki"));

//2 parameters
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage("Samip", "React"));

//2 parameters default to Javascript
function introductionWithLanguageOptional(name, language = "Javascript") {

    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional("Gracie"));

//2 parameters deagult to JS and can be overridden
function introductionWithLanguageOptional(name, language) {
    language = language || "Javascript"
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional("Samip", "React"));