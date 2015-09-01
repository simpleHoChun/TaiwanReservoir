$(function() {

	// api request
	$.ajax({
		type : 'GET',
		dataType : 'jsonp',
		data : {},
		url : "http://localhost:10080/today",
		error : function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
		},
		success : function(data) {
			parserJSON(data);
		}
	});

	$('.button-collapse').sideNav();
	$('.tooltipped').tooltip({delay: 50});
});

function parserJSON(data) {
	//console.log(data);
	var html = "";
	$.each(data, function(key, data) {
		$.each(data, function(index, data) {
			html = '<div class="col s12 m4">' + '<div class="icon-block">' + '<div class="chart" data-percent="' + data.immediatePercentage + '">' + '<h5 class="center">' + data.reservoirName + '蓄水量百分比' + data.immediatePercentage + '</h5>' + '</div></div></div>';
			$("#r").append(html);

		});
	});

	// Easy pie charts

	$('.chart').easyPieChart({
		easing : 'easeOutBounce',
		animate : 3000
	});

}