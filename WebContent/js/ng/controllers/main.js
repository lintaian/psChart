function Main($scope, $rootScope, $timeout, $interval, $location, User) {
	
	$scope.page = {
		current: '',
		sub: '',
		change: function(url, code, sub) {
			this.current = code;
			this.sub = sub;
			window.location.href = 'main#/' + url;
		}
	};
	
	
	
	$(function() {
		resize();
		$(window).resize(function() {
			resize();
		});
	});
	$scope.getTableHeight = function() {
		var height = Util.getWinHeight();
		if (height < 600) {
			height = 600;
		}
		return height - 180;
	}

	function resize() {
		var height = Util.getWinHeight();
		if (height < 600) {
			height = 600;
		}
		$('#report').height(height - 122);
		$('#question').height(height - 324);
		var width = Util.getWinWidth();
		if (width < 1024) {
			width = 1024;
		}
		$('body').width(width);

		/*var ids = ['classAvg','scoreDetail', 'answerNum','classAvgKnowledge',
		           'scoreDetailKnowledge', 'classAvgPower', 'scoreDetailPower', 
		           'originalAnswer'];
		for (var i = 0; i < ids.length; i++) {
			if ($('#' + ids[i] + ':visible').length > 0) {
				var id =  ids[i];
				var col = $('#'+id).data('col');
				var height = Util.getWinHeight();
				if (height < 600) {
					height = 600;
				}
				Util.fixTable(id, col, {maxHeight: height - 180});
			}
		}*/
	};
};
