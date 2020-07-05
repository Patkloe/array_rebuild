function check_array(tab){
if(tab === null || tab.length === 0) return [];
  var newarr = [];
  check_array_in(newarr,tab);
  return newarr;
}
function check_array_in(newarr,tab){
 for(let i = 0; i < tab.length; i++){
   if(Array.isArray(tab[i])){
     check_array_in(newarr,tab[i]);
   }
   else if (tab[i] !== null){
          newarr[newarr.length] = tab[i];
   }
 }
}
var arr = [1,2,[3,[[4],5],6],7];
check_array(arr);
