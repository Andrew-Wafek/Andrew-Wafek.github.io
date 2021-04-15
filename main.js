let hamburger_icon = document.querySelector(".hamburger");
let close_icon = document.querySelector(".close");
let menu = document.querySelector(".menu");
let menu_box = document.querySelector(".menu_links");

hamburger_icon.addEventListener("click" , showMenu);
close_icon.addEventListener("click" , hideMenu);

function showMenu(){
	this.style.cssText = "animation: hide 0.3s forwards;";
	close_icon.style.cssText = "animation: show 0.3s forwards;"
	menu.style.cssText = "animation: show 0.5s forwards;";
	menu_box.style.cssText = "animation: menuUp 0.4s forwards;";
	document.querySelector("body").style.overflow = "hidden";
}	

function hideMenu(){
	this.style.cssText = "animation: hide 0.3s forwards;";
	hamburger_icon.style.cssText = "animation: show 0.3s forwards;";
	menu.style.cssText = "animation: hide 0.5s forwards;";
	menu_box.style.cssText = "animation: menuDown 0.4s forwards;";
	document.querySelector("body").style.overflow = "";

}	

// 1 slides

let dots = document.querySelectorAll(".dot");
let avatar1 = document.querySelector(".avatar_1");
let active = document.querySelector(".dot--active");

dots.forEach(i => i.addEventListener("click" , setActiveDot));

function setActiveDot(){
	dots.forEach(i=>i.classList.remove("dot--active"));
	this.classList.add("dot--active");
	avatar1.style["margin-left"] = "-" + this.attributes["data-dotNum"].value * 25 +"%";
}

// 2 Email-Entry
let inputEmail = document.querySelector(".input_email")
let inputBtn = document.querySelector(".input_btn")
let errorMsg = document.querySelector(".input_error_msg")


function showErrorMsg() {
    errorMsg.style.cssText = "opacity:1; color:rgba(253, 39, 39, 0.6);";
	inputEmail.style.cssText = "border: 1px solid rgba(253, 39, 39, 0.6);";
}

function delErrorMsg() {
	errorMsg.style.opacity = "0";
	inputEmail.style.cssText = "border: 1px solid transparent";


}
function verifyInput() {
	errorMsg.style.cssText = "opacity: 1; color: #3af251";
	inputEmail.style.cssText = "border: 1px solid #3af251";
}

function checkInput() {
    if (inputEmail.value.endsWith("" + "@gmail.com") == false || inputEmail.value.startsWith("@")) {
		errorMsg.innerText = "Please insert a valid Email";
		showErrorMsg();
        setTimeout(delErrorMsg, 5000);

    } else {
		errorMsg.innerHTML = "Your Email was sent successfully";
        verifyInput();
        setTimeout(delErrorMsg, 5000);

    }
}

inputBtn.addEventListener("click", checkInput);

// automatic slides

// setInterval(go , 1000)

// let iy = 0;
// function go(){
	
// 	active.nextElementSibling.classList.add("dot--active");
// 	active.classList.remove("dot--active");
// 	active = document.querySelector(".dot--active");

	

// 	iy++;
// 	avatar1.style["margin-left"] = "-" + iy * 25 +"%";
// 	if(iy == 3){
// 		iy = -1;
// 	}

// 	if(active == dots[3]){
// 		// active=dots[0];
// 		// dots[3].classList.remove("dot--active")
// 		setTimeout(()=>{
// 			dots[0].classList.add("dot--active");
// 			dots[3].classList.remove("dot--active");
// 			active = dots[0];

// 			avatar1.style["margin-left"] = "-" + 0* 25 +"%";
// 			go();

// 		} , 1000)


// 	}

// }

