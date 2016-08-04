

var i = 2;//全局变量
var timer = window.setInterval("swapImg(1)",5000);

function swapImg(action_swap)
{
	//第一次因为已经有一张图片显示了，第一遍应该从2开始，第二遍循环应该1开始
	//先取到id=img0的对象
	var img01 = document.getElementById("sliders01");
	var img02 = document.getElementById("sliders02");
	var img03 = document.getElementById("sliders03");
	var img04 = document.getElementById("sliders04");
	var img05 = document.getElementById("sliders05");
	var img_button01 = document.getElementById("img_button01");
	var img_button02 = document.getElementById("img_button02");
	var img_button03 = document.getElementById("img_button03");
	var img_button04 = document.getElementById("img_button04");
	var img_button05 = document.getElementById("img_button05");
	//修改id=img0对象的src属性的值
	switch(action_swap)
	{
		case 1:
		{	
			if(i == 1)
			{
				img01.style.display = "list-item";
				img02.style.display = "none";
				img03.style.display = "none";
				img04.style.display = "none";
				img05.style.display = "none";
				img_button01.style.backgroundColor="#009900";
				img_button02.style.backgroundColor="#ffffff";
				img_button03.style.backgroundColor="#ffffff";
				img_button04.style.backgroundColor="#ffffff";
				img_button05.style.backgroundColor="#ffffff";
				i=2;
			}
			else if(i == 2)
			{
				img01.style.display = "none";
				img02.style.display = "list-item";
				img03.style.display = "none";
				img04.style.display = "none";
				img05.style.display = "none";
				img_button01.style.backgroundColor="#ffffff";
				img_button02.style.backgroundColor="#009900";
				img_button03.style.backgroundColor="#ffffff";
				img_button04.style.backgroundColor="#ffffff";
				img_button05.style.backgroundColor="#ffffff";
				i=3;
			}
			else if(i == 3)
			{
				img01.style.display = "none";
				img02.style.display = "none";
				img03.style.display = "list-item";
				img04.style.display = "none";
				img05.style.display = "none";
				img_button01.style.backgroundColor="#ffffff";
				img_button02.style.backgroundColor="#ffffff";
				img_button03.style.backgroundColor="#009900";
				img_button04.style.backgroundColor="#ffffff";
				img_button05.style.backgroundColor="#ffffff";
				i=4;
			}
			else if(i == 4)
			{
				img01.style.display = "none";
				img02.style.display = "none";
				img03.style.display = "none";
				img04.style.display = "list-item";
				img05.style.display = "none";
				img_button01.style.backgroundColor="#ffffff";
				img_button02.style.backgroundColor="#ffffff";
				img_button03.style.backgroundColor="#ffffff";
				img_button04.style.backgroundColor="#009900";
				img_button05.style.backgroundColor="#ffffff";
				i=5;
			}
			else if(i == 5)
			{
				img01.style.display = "none";
				img02.style.display = "none";
				img03.style.display = "none";
				img04.style.display = "none";
				img05.style.display = "list-item";
				img_button01.style.backgroundColor="#ffffff";
				img_button02.style.backgroundColor="#ffffff";
				img_button03.style.backgroundColor="#ffffff";
				img_button04.style.backgroundColor="#ffffff";
				img_button05.style.backgroundColor="#009900";
				i=1;
			}
			break;
		}
		case 2:
			
			break;
	}
}
function func_button_left(action_num)
{
	switch(action_num)
	{
		case 1: 
			document.getElementById("pre_left_img").src="img/home/main/slider_left_down.png";
			break;
		case 2: 
			clearInterval(timer);
			if(i == 1)i=4;
			else if(i == 2)i=5;
			else i = i-2;
			swapImg(1);
			timer = window.setInterval("swapImg(1)",5000);
			
			break;
		case 3:
			document.getElementById("pre_left_img").src="img/home/main/slider_left.png";
			break;
	}
}
function func_button_right(action_num)
{
	switch(action_num)
	{
		case 1: 
			document.getElementById("pre_right_img").src="img/home/main/slider_right_down.png";
			break;
		case 2: 
			clearInterval(timer);
			swapImg(1);
			timer = window.setInterval("swapImg(1)",5000);
			break;
		case 3:
			document.getElementById("pre_right_img").src="img/home/main/slider_right.png";
			break;
	}
}
function func_button(action_num)
{
	switch(action_num)
	{
		case 1:
			clearInterval(timer);
			i = 1;
			swapImg(1);
			timer = window.setInterval("swapImg(1)",5000);
			break;
		case 2:
			clearInterval(timer);
			i = 2;
			swapImg(1);
			timer = window.setInterval("swapImg(1)",5000);
			break;
		case 3:
			clearInterval(timer);
			i = 3;
			swapImg(1);
			timer = window.setInterval("swapImg(1)",5000);
			break;
		case 4:
			clearInterval(timer);
			i = 4;
			swapImg(1);
			timer = window.setInterval("swapImg(1)",5000);
			break;
		case 5:
			clearInterval(timer);
			i = 5;
			swapImg(1);
			timer = window.setInterval("swapImg(1)",5000);
			break;	
	}
}

