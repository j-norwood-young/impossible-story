$(function() {
	var shuffle = function(data) { // A Fisher-Yates shuffle
		var copy = [];
		var n = data.length;
		var i = null;
		while(n) {
			i = Math.floor(Math.random() * data.length); // Pick an element
			if (i in data) {
				copy.push(data[i]);
				delete data[i];
				n--;
			}
		}
		return copy;
	};
	var doShuffle = function() {
		$("#movableContainer").addClass("hide");
		var movables = [];
		$(".moveable").each(function() {
			movables.push($(this).detach());
		});
		newWorldOrder = shuffle(movables);
		for (var x = 0; x < newWorldOrder.length; x++) {
			$("#movableContainer").append(newWorldOrder);
		}
		$("#movableContainer").removeClass("hide");
	};
	var movableCount = $(".moveable").length;
	var order = [];
	for (var x = 0; x < movableCount; x++) {
		order.push(x);
	}
	var count = 0;
	$(".moveable").each(function() {
		$(this).data("id", count++);
	});
	$("#btnShuffle").on("click", doShuffle);
	doShuffle();
});