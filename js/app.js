$(document).ready(function (){
	$('.twerk i').on('mouseover', function(){
		$('.shoe-box').toggleClass("shake shake-constant")
		$('#form').toggleClass("shake shake-constant")
		$('#app').toggleClass("shake shake-constant")
	});

	$('.submit').on("click", function(){
		
		var shoe = $(this).closest('#form').find('#shoe').val();
		var price = $(this).closest('#form').find('#price').val();
		var store = $(this).closest('#form').find('#store').val();
		var shoes = $('<div class="shoes">'+
			'<input type="checkbox" name="buy">'+
			'<p class="name">'+shoe+'</p>'+
			'<p class="price"><i class="fa fa-usd"></i>'+price+'</p>'+
			'<p class="store"><i class="fa fa-home"></i>'+store+'</p>'+
			'<div class="trash shake shake-horizontal"><i class="fa fa-trash-o"></i></div>'+
			'</div>');
		$(".shoe-box").append(shoes);
	});

	$('.trash').on("click", function(){
		$(this).closest('.shoes').fadeOut()
	});

	$('.check').on("click", function(){
		$(this).closest('.shoes').fadeTo("slow", 0.5)
	});
});