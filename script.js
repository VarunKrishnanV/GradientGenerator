var body = document.querySelector("body");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var cssCode = document.querySelector("#css");
var copy = document.querySelector('.copy');
var code = document.querySelector('.code');

color1.addEventListener('input', gradientGen);
color2.addEventListener('input', gradientGen);


function gradientGen(){
            body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
            code.value = body.style.background;
            console.log(body.style.background);
            copy.innerHTML = '<i class="fa fa-clone"></i>';
            
}

copy.addEventListener('click', function(){
    code.select();
    document.execCommand('Copy');
    copy.innerHTML = '<i class="fas fa-check-circle"></i>';
});





