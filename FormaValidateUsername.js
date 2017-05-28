
function FormaValidateUsername (s){
    if(s.length<3)return false
    const reg=/^[\w\d][\w\d\-\.]*[\w\d]$/
    if(reg.test(s))return s.toLowerCase();
    return false;
}
regex(prompt('please enter your username'));

