$(function() {

	$("#click").click(function() {
		$(".main-nav").toggle(reveal);
	});

	$("#recipe-1").click(function() {
		$("#recipe-card-1").toggle();
		$("#recipe-card-2").hide();
		$("#recipe-card-3").hide();
		$("#recipe-card-4").hide();
		$("#recipe-card-5").hide();
		$("#recipe-card-6").hide();
		$("#recipe-card-7").hide();
	});

	$("#recipe-click-1").click(function() {
		$("#recipe-reveal-1").fadeIn(800);
		$("#recipe-click-1").hide();
	});	

	$("#recipe-2").click(function() {
		$("#recipe-card-2").toggle();
		$("#recipe-card-1").hide();
		$("#recipe-card-3").hide();
		$("#recipe-card-4").hide();
		$("#recipe-card-5").hide();
		$("#recipe-card-6").hide();
		$("#recipe-card-7").hide();
	});

	$("#recipe-click-2").click(function() {
		$("#recipe-reveal-2").fadeIn(800);
		$("#recipe-click-2").hide();
	});		

	$("#recipe-3").click(function() {
		$("#recipe-card-3").toggle();
		$("#recipe-card-1").hide();
		$("#recipe-card-2").hide();
		$("#recipe-card-4").hide();
		$("#recipe-card-5").hide();
		$("#recipe-card-6").hide();
		$("#recipe-card-7").hide();
	});

	$("#recipe-click-3").click(function() {
		$("#recipe-reveal-3").fadeIn(800);
		$("#recipe-click-3").hide();
	});	

	$("#recipe-4").click(function() {
		$("#recipe-card-4").toggle();
	});

	$("#recipe-5").click(function() {
		$("#recipe-card-5").toggle();
	});

	$("#recipe-6").click(function() {
		$("#recipe-card-6").toggle();
	});	

	$("#recipe-7").click(function() {
		$("#recipe-card-7").toggle();
	});		
});

function reveal() {
	$(this).animate( {
		left: "0",
		top: "0",
	}, 800, "swing");
};

function hideCards() {
	$("article").not("#recipe-card-1").hide();
}