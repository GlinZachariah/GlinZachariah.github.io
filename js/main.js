// $(function(){
//     for(var i=0;i<6;i++){
//         $("#"+i).click(function(){
//             console.log("working" +"#"+i);
//              $("#"+i).addClass("B700").addClass("A000");
//              $("#"+i).removeClass(" button-outline").removeClass("theme-border").removeClass("A7000");

//         });
//     }
// })

function changeNav(id){
    console.log(typeof id);
    var element = document.getElementById(id);
    if (element.classList.contains("button-outline")){
        for(var i=0;i<6;i++){
            var currentElement = document.getElementById(i.toString());
            if(currentElement.classList.contains("B700")){
                currentElement.classList.replace("B700","button-outline");
                currentElement.classList.replace("A000","theme-border");
            }
        }
        element.classList.replace("button-outline","B700");
        element.classList.replace("theme-border","A000");
    }
}