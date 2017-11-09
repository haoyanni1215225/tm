/*
* @Author: UEK-2016
* @Date:   2017-10-16 11:06:05
* @Last Modified by:   UEK-2016
* @Last Modified time: 2017-10-17 11:07:18
*/
let cons=document.querySelectorAll(".content");
// 滚动头部 
{let topbar=document.querySelector(".topbar");
		window.onscroll=function(){
			let obj=document.body.scrollTop===0?document.documentElement:document.body;
			let st=obj.scrollTop;
			if(st>=800){
				topbar.style.top="0";
			}else{
				topbar.style.top="-60px";
			}
		} 
}

// 左侧滚动栏
{let left=document.querySelector(".left");
		let btns=document.querySelectorAll(".btn");	
		window.addEventListener("scroll",function(){
			let obj=document.body.scrollTop===0?document.documentElement:document.body;
			let st=obj.scrollTop;
			if(st>=800){
				left.style.cssText="width:30px;height:264px";	
				
			}else{
				left.style.cssText="width:0;height:0";
			}
			for(let i=0;i<cons.length;i++){
				if(st>=cons[i].offsetTop-50){
					for(let i=0;i<btns.length;i++){
						btns[i].classList.remove("active");
					}
					btns[i].classList.add("active");
				}
			}
			btns.forEach(function(ele,index){
							ele.onclick=function(){
								let h=cons[index].offsetTop;
								animate(obj,{scrollTop:h},function(){
								});
							}
						});
		});}
// 回到顶部
	{let totop=document.querySelector(".totop");
	totop.onclick=function(){
		let obj=document.body.scrollTop===0?document.documentElement:document.body;
		let st=obj.scrollTop;
		let speed=100;
		let t=setInterval(function(){
			st-=speed;
			if(st<=0){
				st=0;
				clearInterval(t);
			}
			obj.scrollTop=st;
		},50);
	}
}

// 按需加载图片
	{window.addEventListener("scroll",function(){
			let obj=document.body.scrollTop===0?document.documentElement:document.body;
			let st=obj.scrollTop;
			for(let i=0;i<cons.length;i++){
				if(st>cons[i].offsetTop-window.innerHeight){
					let imgs=cons[i].querySelectorAll("img");
					for(let i=0;i<imgs.length;i++){
						imgs[i].src=imgs[i].getAttribute("data-src");
					}
				}
			}
		});
	}
