// Remove duplicate items from array
var nameAll = ["kamal"," jamal", "bablu", "hablu", "jamal", "rakib", "bablu"];
var uniqeName=[];
for(var i=0; i<nameAll.length; i++ ){
    var element = nameAll[i];
    var index = uniqeName.indexOf(element);
    if(index==-1){
        uniqeName.push(element);
    }
}
console.log(uniqeName);