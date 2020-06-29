function check_array(tab){
 if(tab === null || tab.length === 0) return [];
   var newarr = [];
   check_array_in(newarr, tab);
   return newarr;
}
function check_array_in(newarr, tab){
  for (let i = 0; i < tab.length; i++){
   if(Array.isArray(tab[i])){
      check_array_in(newarr, tab[i]);
   }
    else if(tab[i] !== null){
     newarr.push(tab[i]);
   }
   
 }
}
arr = [1,2,[[]],6];
check_array(arr);