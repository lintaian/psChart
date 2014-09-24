function Question($scope) {
	$scope.question = {
		current: '总分',
		list: [{
			name: '总分'
		}, {
			name: '1小题'
		}, {
			name: '2小题'
		}],
		set: function(q) {
			this.current = q;
			draw();
		}
	};
	
	function draw() {
		Util.initChart(Util.getOption({
			title: '',
			legend: {
				y: 'bottom',
				data : ['得分', '频率']
			},
			xAxis: ['学1','学2','学3','学4','学5','学6','学7','学8','学9','学10','学11','学12'],
			yAxis:  [{
				type : 'value',
				name: '分数'
			}, {
				type: 'value',
				name: '频率'
			}],
			series: [{
				name: '得分',
				type: 'bar',
				data: [30, 14, 25, 17, 21, 13, 26, 10, 35, 26, 32, 10]
			},{
				name:'频率',
				type:'line',
				yAxisIndex: 1,
				data: [0, 1, 5, 10, 20, 40, 80, 100, 90, 70, 30, 10]
			}],
			boundaryGap: true
		}), 'questionChart', null, 0.97);
	}
	draw();
}