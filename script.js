function result(){
         var tMark=document.getElementById("tMark").value;
         var pMark=document.getElementById("pMark").value;
         var total = (parseInt(tMark) + parseInt(pMark));
        
    document.getElementById("totalMark").value=total;
    if (total >=80 && total <=100){
        var grade ="A+";
        var point ="5.00";
    }
    else if(total >=70 && total <=79){
        var grade ="A";
        var point ="4.50";
    }

        document.getElementById("grade").value="A+";
        document.getElementById("point").value="5.00";

}