function addNewWEField(){
    //console.log("Adding new field");

    //new node crete kiya isako set karana he we(work exprince) ke andhar
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    
    newNode.classList.add("wefield") ;
    newNode.classList.add("mt-2")

    //rows attribute
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" ,"Enter here");

    let weOb=document.getElementById("we");

    //weAddButton iska refrence yaha pe isailiye nikal rahe he taki naya node isake pahile add karana he 
    let weAddButtonOb=document.getElementById("weAddButton");

    //matalb jab add button pe click karoge to new textArea open ho jayega
    //kise insert kaerana he kisake pahile insert karana he ye sab pass kardo
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField(){


      //new node crete kiya isako set karana he we(work exprince) ke andhar
      let newNode=document.createElement("textarea");
      newNode.classList.add("form-control");
      
      newNode.classList.add("eqField") ;
      newNode.classList.add("mt-2")
  
      //rows attribute
      newNode.setAttribute("rows",3);
      newNode.setAttribute("placeholder" ,"Enter here");
  
      let aqOb=document.getElementById("aq");
  
      //weAddButton iska refrence yaha pe isailiye nikal rahe he taki naya node isake pahile add karana he 
      let aqAddButtonOb=document.getElementById("aqAddButton");
  
      //matalb jab add button pe click karoge to new textArea open ho jayega
      //kise insert kaerana he kisake pahile insert karana he ye sab pass kardo
      aqOb.insertBefore(newNode,aqAddButtonOb);

}



   //genetare CV     ye sab tempalte ke liye he tempalte ki feild me data ayega
function generateCV(){

    
    console.log("generating cv");
//form bhartae waqt aap jo bhi name feild me naam doge o tempalte ki feild me add ho jayega
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");
    //name feild ka text badhal diya jo naam apane enter kiya
    nameT1.innerHTML=nameField;


    //direct 
    //second cloumn pe jo naam he o change ho jayega rupali bhore objective ke upar jo name ata he o
   // direct ise bhi kar sakate ho upaer ki 3 line se ekahi line me
    document.getElementById("nameT2").innerHTML=nameField

    //contact Field
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address Field
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;



    //LINKS
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;


    //set Objective
    document.getElementById("objectivT").innerHTML=document.getElementById("objectiveField").value;

    //work Exprience ke pass kahi saari filds he aur uanki sari class he weField to hume class wise data
    //nikala na he to hume kahi sare data nikala na he to hume loop lagana padega

    // document.getElementById("weT").innerHTML=document.getElementById("wefield").value;

    //pahile aary ka object nikalte he isame array of object hoga  (weField class ki he)
    let wes=document.getElementsByClassName("wefield");

    //ek ek karake textarea nikalenge
    //li ko create karane ke liye ek varible banate ha

    let str="";

    for (let e of wes) {

        str= str + `<li> ${e.value} </li>`;
        
    }
   

    document.getElementById("weT").innerHTML= str;
 
    

    
//acadamic qualification
let aqs=document.getElementsByClassName("eqField");

let str1="";

for(const e of aqs)
{
    str1 += `<li >${e.value} </li>`;
    
}
document.getElementById("aqT").innerHTML=str1;



//dyanamically image ko set karenge
let file=document.getElementById("imgField").files[0];

console.log(file);

//file se us content ko read karana he read kar sakata he file reader ka object(file reader is also 
//reader)

let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);


//set image into your template
//jab iamge jo load kar raha he jise hi o end hoga ye function call hoga
reader.onloadend=function()
{

document.getElementById("imgTemplate").src=reader.result;

};



//cv form none hoga 
document.getElementById("cv-form").style.display="none";

document.getElementById("cv-template").style.display="block";

}

//prit CV Function

function printCV()
{
    window.print();
}




