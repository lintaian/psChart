function Question($scope) {
	$scope.exam = {
		current: '未选择',
		list: [{
			name: '1月月考语文'
		}, {
			name: '2月月考'
		}],
		set: function(exam) {
			this.current = exam;
		}
	};
	$scope.klass = {
		current: function() {
			var rs = '未选择';
			for (var i = 0; i < this.list.length; i++) {
				if (this.list[i].checked) {
					rs = '已选择';
					break;
				}
			}
			return rs;
		},
		list: [{
			name: '一年级一班'
		}, {
			name: '一年级二班'
		}],
		click: function(klass, e) {
			e.stopPropagation();
			e.preventDefault();
			klass.checked = !klass.checked;
		}
	};
	Util.initChart(Util.getOption({
		title: 'test',
		legend: {
			y: 'bottom',
			data : ['一班', '二班', '三班']
		},
		xAxis: ['总分','第1题','第2题','第3题','第4题','第5题','第6题','第7题','第8题','第9题','第10题','第11题','第12题'
		        ,'第1题','第2题','第3题','第4题','第5题','第6题','第7题','第8题','第9题','第10题','第11题','第12题'
		        ,'总分','第1题','第2题','第3题','第4题','第5题','第6题','第7题','第8题','第9题','第10题','第11题','第12题'
		        ,'第1题','第2题','第3题','第4题','第5题','第6题','第7题','第8题','第9题','第10题','第11题','第12题'],
		yAxis:  [{
			type : 'value',
			axisLabel: {
				formatter: function(value) {
					return value + '%';
				}
			}
		}],
		series: [{
			name: '一班',
			type: 'bar',
			stack: '广告',
			data: [30, 14, 25, 17, 21, 13, 26, 10, 35, 26, 32, 10, 70, 14, 25, 17, 21, 13, 26, 10, 35, 26, 32, 10, 70,
			       30, 14, 25, 17, 21, 13, 26, 10, 35, 26, 32, 10, 70, 14, 25, 17, 21, 13, 26, 10, 35, 26, 32, 10, 70]
		},{
            name:'二班',
            type:'bar',
            stack: '广告',
            data: [50, 46, 34, 54, 18, 59, 21, 60, 17, 37, 61, 25, 10, 46, 34, 54, 18, 59, 21, 60, 17, 37, 61, 25, 10,
                   50, 46, 34, 54, 18, 59, 21, 60, 17, 37, 61, 25, 10, 46, 34, 54, 18, 59, 21, 60, 17, 37, 61, 25, 10]
        },
        {
            name:'三班',
            type:'bar',
            stack: '广告',
            data: [20, 40, 41, 29, 61, 28, 53, 30, 48, 37, 7, 65, 20, 40, 41, 29, 61, 28, 53, 30, 48, 37, 7, 65, 20,
                   20, 40, 41, 29, 61, 28, 53, 30, 48, 37, 7, 65, 20, 40, 41, 29, 61, 28, 53, 30, 48, 37, 7, 65, 20]
        }],
		boundaryGap: true
	}), 'questionChart', null, 0.97);
}