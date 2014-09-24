function OQAnalysis($scope) {
	$scope.question = {
		current: '1小题',
		list: [{
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
		Util.initChart({
		    title : '',
		    tooltip : {
		        trigger: 'item',
		        formatter: "{b} : {c} ({d}%)"
		    },
		    legend: {
//		        orient : 'vertical',
		        y : 'bottom',
		        data:['A','B','C','D']
		    },
		    toolbox: {
		        show : false
		    },
		    calculable : false,
		    series : [
		        {
		            name:'百分比',
		            type:'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'A'},
		                {value:310, name:'B'},
		                {value:234, name:'C'},
		                {value:135, name:'D'},
		            ]
		        }
		    ]
		}, 'oqaChart', null, 0.97);
	}
	draw();
}