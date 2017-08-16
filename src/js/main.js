'use strict';



var indexImg = 0;
var allImages = ["img/icon1.png",
				"img/icon2.png",
				"img/icon3.png"];

var allImagesContent = [
	"img/mobile-photo.jpg",
	"img/cart-photo.png",
	"img/eart-photo.png",
	"img/find-photo.png"
];

var texts = [
	{
		title: "Introdusing",
		info: "Something hot..."
	},
	{
		title: "Introdusing 2",
		info: "Something hot... 2"
	},
	{
		title: "Introdusing 3",
		info: "Something hot... 3"
	}
];


var items = document.getElementsByClassName('content__item');


var indexContentPhoto = 0;

for (var i = 0; i < items.length; i++) {
		if (i == 0) {
			items[i].classList.add("js-content__item_active");
		} else {
			items[i].classList.add("js-content__item_unactive");
		}
	
		items[i].onclick = function() {

		var indexSelect = parseInt(this.getElementsByTagName('img')[0].getAttribute('src').replace(/\D+/g,""));
		console.log(indexSelect);

		contentImg.style.opacity = 0.05;



		setTimeout(function(){
		contentImg.src = allImagesContent[indexSelect];
		}, 400);
		

		setTimeout(function(){
		contentImg.style.opacity = 1;
		}, 500);
		
		
		var activeItems = document.getElementsByClassName('js-content__item_active');
		if (activeItems.length != 0) {
			for (var i = 0; i <= activeItems.length; i++) {
				activeItems[i].classList.add("js-content__item_unactive");
				activeItems[i].classList.remove("js-content__item_active");
			}
		} 

		this.classList.toggle("js-content__item_unactive");
		this.classList.toggle("js-content__item_active");
		
	};
}


left_pointer.onclick = function () {

	slider.style.opacity = 0.0;
	
	if (indexImg < allImages.length - 1 ) {
		++indexImg;
	} else {
		indexImg = 0;
	}

	setTimeout(function() {
		headImg.src = allImages[indexImg];
		headTitle.innerHTML = texts[indexImg].title;
		headInfo.innerHTML = texts[indexImg].info;
		}, 1000);
	

	setTimeout(function(){
		slider.style.opacity = 1;
	}, 1000);


};


right_pointer.onclick = function () {

	slider.style.opacity = 0.0;

	if ( indexImg > 0) {
		--indexImg;
		
	} else {
		indexImg = allImages.length - 1;
	}	

	setTimeout(function() {
		headImg.src = allImages[indexImg];
		headTitle.innerHTML = texts[indexImg].title;
		headInfo.innerHTML = texts[indexImg].info;
		}, 2000);
	

	setTimeout(function(){
		slider.style.opacity = 1;
	}, 2000);
	
};




