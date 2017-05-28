function arabicToPersian (s){
    const array=['ي','ك','ة','ؤ','أ','إ','ی','ک','ه','و','ا','ا']
    for(let i=0;i<6;i++)s=s.replace(array[i],array[i+6]);
    return(s);
}
arabicToPersian(prompt('please enter your text:'));
