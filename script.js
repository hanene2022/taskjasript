var Allproduit = document.querySelectorAll(".list-produit li")
var div =document.querySelector("#content")
var prix=document.querySelector("#prix")

var btn=document.querySelector("#btn")
var totalPrice = 0
 document.getElementsByTagName("li")[0].setAttribute("image","images.jpeg");
 document.getElementsByTagName("li")[1].setAttribute("image","images.jpeg");
 document.getElementsByTagName("li")[2].setAttribute("image","images.jpeg");
 document.getElementsByTagName("li")[3].setAttribute("image","images.jpeg");
 document.getElementsByTagName("li")[4].setAttribute("image","ordinateur-portable-asus-x75a-ty126h.jpg");
 document.getElementsByTagName("li")[5].setAttribute("image","ordinateur-portable-asus-x75a-ty126h.jpg");
 document.getElementsByTagName("li")[6].setAttribute("image","pc-portable-dell-i5-8go-ssd-130go.png");
Allproduit.forEach(function(item){

    item.onclick=function(){
        div.innerHTML +=item.textContent + " "
        totalPrice +=+(item.getAttribute("price"))
        if(div.innerHTML!=""){

            btn.style.display="block";
                             }
                            }
    btn.onclick= function(){
        // console.log(totalPrice)
         prix.innerHTML ="le prix de produit est :" +totalPrice
    
            }
                                }

                    )

