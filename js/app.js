$(document).ready(function (){
	$('.twerk i').on('mouseover', function(){
		$('#form').toggleClass("shake shake-slow shake-constant")
		$('#app').toggleClass("shake shake-crazy shake-constant")
	});

	$('.submit').on("click", function(){
		var shoe = $(this).closest('#form').find('#shoe').val();
		var price = $(this).closest('#form').find('#price').val();
		var store = $(this).closest('#form').find('#store').val();
		var face = $('<div class="shoes">'+shoe+price+store+'</div>')
		var shoes = $('<div class="shoes">'+
			'<input type="checkbox" name="buy" class="check">'+
			'<p class="name">'+shoe+'</p>'+
			'<p class="price"><i class="fa fa-usd"></i>'+price+'</p>'+
			'<p class="store"><i class="fa fa-home"></i>'+store+'</p>'+
			'<div class="trash shake shake-horizontal"><i class="fa fa-trash-o"></i></div>'+
			'</div>');
		$("#shoe-box").append(shoes);
	});

	$('body').on("click", ".trash", function(){
		$(this).closest('.shoes').fadeOut()
	});

	$('body').on("click", '.check', function(){
		$(this).closest('.shoes').fadeTo("slow", 0.5)
	});
});