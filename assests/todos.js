//Check off items completed by clicking on content
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

	//alternate code
	// //turn black
	// if($(this).css("color") === "rgb(128, 128, 128)") {
	// // 	$(this).css({
	// // 	color : "black",
	// // 	textDecoration : "none"
	// // });
	// 	$(this).removeClass("completed");
	// }

	// //turn gray
	// else {
	// // $(this).css({
	// // 	color : "gray",
	// // 	textDecoration : "line-through"
	// // });
	// 	$(this).addClass("completed");
	// }
});

//Remove items completed by clicking on X
$("ul").on("click", "span",  function(event) {
	//selecting parent <li> of <span>
	$(this).parent().fadeOut(300, function() {
		//referencing already selected <li>
		$(this).remove();
	});
	//Stop Event Bubbling - to stop check off function of <li>
	event.stopPropagation();
});

//add items - input box's property value in single quotes
$("input[type = 'text']").on("keypress", function(event) {
	if(event.which === 13) { 
		//use html tags to add them on the page
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + $(this).val() + "</li>");
		//clear input box
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("input[type = 'text']").fadeToggle();
})