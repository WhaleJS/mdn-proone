// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// document.querySelector('html').onclick = function(){
// 	alert('别戳我，我怕疼')
// }

// 图片切换器
let myImg = document.querySelector('img')
myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src')
	if(mySrc === 'images/qz5.jpg'){
		myImg.setAttribute('src','images/qz3.jpg')
	}else {
		myImg.setAttribute('src','images/qz5.jpg')
	}
}

// 添加欢迎消息
// 获取按钮个标题元素
let muButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

// 获取用户名添加到内存
function setUsername () {
	let userName = prompt('请输入您的名字')
	if(!userName || userName === null){
		setUsername()
	}else{
		localStorage.setItem('name','userName')
		myHeading.innerHTML = '你好' + userName
	}
	
}

// 判断用户是否已经注册
if(!localStorage.getItem('userName')){
	console.log(localStorage.getItem('userName'))
	setUsername()
}else {
	 let storedName = localStorage.getItem('userName');
	 myHeading.textContent = '你好，' + storedName;
}
// 点击
muButton.onclick = function () {
	setUsername()
}