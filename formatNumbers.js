s='۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩';
function formatNumbers (s){
    let string=[];
    for(let i=0;i<s.length;i++){      
        var temp=s[i];
        temp=temp.charCodeAt();
        if(1786>temp && temp>1775)temp-=1728;
        if(1643>temp && temp>1631)temp-=1584;
        temp=String.fromCharCode(temp);
        string[i]=temp;
       // console.log(temp)
    }
    var a=string.join('');
    return(a);
}
something(s);
