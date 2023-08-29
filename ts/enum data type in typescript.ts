enum dayofTheWeek  {
    SUN=1, MON ,TUE, WED, THU, FRI, SAT
};
const day:dayofTheWeek = dayofTheWeek.FRI;
console.log(day);
if(day === dayofTheWeek.FRI){
    console.log("its FRIday today")
}else{
    console.log("its not FRIday")
}