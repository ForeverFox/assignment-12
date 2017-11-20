$(function() {

	$("#click").click(function() {
		$(".main-nav").toggle(reveal);
	});

	$("#recipe-1").click(function() {
		$("#recipe-card-1").toggle();
	});

	$(".recipe-click").click(function() {
		$(".recipe-reveal").fadeIn(800);
	});	

	$("#recipe-2").click(function() {
		$("#recipe-card-2").toggle();
	});

	$("#recipe-3").click(function() {
		$("#recipe-card-3").toggle();
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

