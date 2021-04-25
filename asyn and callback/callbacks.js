// console.log("starts");
// setTimeout(() => {
//     var num = prompt("Enter Number");
//     console.log(num)
// }, 5000); // async == this will not block the other process of executing 

// console.log("processing");
// console.log("Ends");

///////////////////////////////////////////////

// let url = '';
// function download(refer)
// {
//     console.log("Hi");
//     setTimeout(() => {
//         console.log("Image Downloading");
//         url = 'https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg';
//         console.log("Image downloaded ")
//         refer(url)
//     }, 5000);
// }

// function process(){
//     let img = document.createElement('img');
//     img.src = url;
//     img.alt = "not found";
//     document.body.append(img)
// }
// download(process); 
//-----------------------------
// download will execute 
// Process is inside download 
// so an img tag will be created 
// img will be not found 
// Then after 5 seconds 
// then first console.log will execute 
// then the image will be loaded 
// then img downloaded will be console.logged
// then refer(url) will be executed where the img will  be shown 

/////////////////////////////////////////////////


// function sum(a,b)
// {
//     return a+b;
// }
// function sub(a,b)
// {
//     return a-b;
// }
// function mul(a,b)
// {
//     return a*b;
// }
// function div(a,b)
// {
//     return a/b;
// }
// function mod(a,b)
// {
//     return a%b;
// }
// var str = prompt("Enter Function");
// console.log(calc(10,20,window[str])) //when we are getting function reference || we use windows[str] ?? 65.55

// div id root 
// function calc(n1,n2,str)
// {
//     return str(n1, n2)
// }

//--------------------------------//

var count = 10 ;
function timer()
{
    var msg = document.getElementById("display");
    msg.innerHTML = count--;
    if(count == 0)
    {
        msg.innerHTML = "Happy Independance Day!!!";
        return;
    }
    setTimeout(timer, 1000)
}
timer();