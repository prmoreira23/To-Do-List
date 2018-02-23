$("#input-text").keypress(function(event){
	if(event.which === 13){
		var todoText = $("#input-text").val();
		$("#input-text").val("");
		$("#todo-list").append("<li><span><i class=\"far fa-trash-alt\"></i></span> "+todoText+"</li>");
		$("#input-text").fadeToggle();
	}
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("#toggle-form").click(function(){
	$("#input-text").fadeToggle();
});