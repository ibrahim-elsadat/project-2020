$(document).ready(function(){

	$(".next").click(function(){
		const current_img = $(".show") ;
		const next_img = current_img.next();

		if(next_img.length){
			current_img.removeClass("show");
			next_img.addClass("show");
		}
	});
	$(".prev").click(function(){
		const current_img = $(".show") ;
		const prev_img = current_img.prev();

		if(prev_img.length){
			current_img.removeClass("show");
			prev_img.addClass("show");
		}
	});
});


