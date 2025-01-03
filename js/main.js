const modeDarkLight = document.querySelector(".mode");
const main_ = document.querySelector("main");
const button_ = document.querySelector("button");
const box = document.querySelector(".box");
const buttonSubmit = document.querySelector(".box>div>button");
const footer = document.querySelector('#footer')
let flag = true;
modeDarkLight.addEventListener("click", () => {
  if (flag) {
    main_.style.background = "darkblue";
    box.style.background = "black";
    box.children[0].style.color = "white";
    buttonSubmit.style.background = "darkblue";
    buttonSubmit.style.color = "white";
    modeDarkLight.children[0].style.transform ='translateX(50px)'
    modeDarkLight.children[0].style.background ='black'
    footer.children[0].style.color = "white";
    footer.style.background ='black'
    for (let i = 0; i < 3; i++) {
        
        footer.children[1].children[0].children[i].children[0].style.color = "white";
    }
    
    flag = !flag
  }else{
    main_.style.background = "#55bbed";
    box.style.background = "white";
    box.children[0].style.color = "black";
    buttonSubmit.style.background = "#55bbed";
    buttonSubmit.style.color = "black";
    modeDarkLight.children[0].style.transform ='translateX(0px)'
    modeDarkLight.children[0].style.background ='white'
    footer.children[0].style.color = "black";
    footer.style.background ='white'
    for (let i = 0; i < 3; i++) {
        
        footer.children[1].children[0].children[i].children[0].style.color = "black";
    }
    flag = !flag
  }
});
let flagSubmit
button_.addEventListener('click' , ()=>{
    flagSubmit = true



    let numsPass = box.children[3].value.search(/[0-9]/)
    let charBigPass = box.children[3].value.search(/[A-Z]/)
    let charSmallPass = box.children[3].value.search(/[a-z]/)
    let scriptPass = box.children[3].value.search(/script/)
    let symbolPass = box.children[3].value.search(/[!]|[@]|[#]|[$]|[%]|[&]|[*]|[(]|[)]|[-]|[_]|[+]|[=]/)
    let dotEmail = box.children[5].value.search(/[.]/)
    let dotLastEmail = box.children[5].value.lastIndexOf('.')
    let adEmail = box.children[5].value.search(/[@]/)
    let scriptEmail = box.children[5].value.search(/script/)
    let scriptUser = box.children[1].value.search(/script/)



    if(box.children[1].value == ''){
        box.children[2].innerHTML = 'Please enter your Username!'
        flagSubmit = false
    }else if(scriptUser != -1){
        box.children[2].innerHTML = 'Dont use script'
        flagSubmit = false
    }else{
        box.children[2].innerHTML = ''
    }

    

    

    if(box.children[3].value == ''){
        box.children[4].innerHTML = 'Please enter your Password!'
        flagSubmit = false
    }else if(numsPass == -1 || symbolPass == -1 || charBigPass == -1 || charSmallPass == -1  || box.children[3].value.length<8 ){
        box.children[4].innerHTML = 'Password is not strong'
        flagSubmit = false
    }else if(scriptPass != -1){
        box.children[4].innerHTML = 'Dont use script'
        flagSubmit = false
    }else{
        box.children[4].innerHTML = ''
    }


    

    if(box.children[5].value == ''){
        box.children[6].innerHTML = 'Please enter your Email!'
        flagSubmit = false
    }else if((dotEmail != -1 && adEmail != -1 && dotLastEmail < adEmail ) || adEmail == -1 || dotEmail == -1 ){
        box.children[6].innerHTML = 'Wrong Email'
        flagSubmit = false
    }else if(scriptEmail != -1){
        box.children[6].innerHTML = 'Dont use script'
        flagSubmit = false
    }else{
    box.children[6].innerHTML = ''
    }





    if(flagSubmit == true){
        box.children[2].innerHTML = ''
        box.children[4].innerHTML = ''
        box.children[6].innerHTML = ''
        box.children[1].value = ''
        box.children[3].value = ''
        box.children[5].value = ''
        box.children[1].focus() 
        alert('Successful')

    }
})
