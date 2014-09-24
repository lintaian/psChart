<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html xmlns:ng="http://angularjs.org" id="ng-app">
<head>
  <base href="<%=basePath%>">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>考试数据检查</title>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.min.css">
  <link rel="stylesheet" type="text/css" href="css/ow-bootstrap.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <link rel="stylesheet" type="text/css" href="css/dialog.css">
  <script src="js/lib/es5-shim.js"></script>
  <script src="js/lib/es5-sham.js"></script>
  <!--[if lte IE 8]>
    <script src="js/lib/html5shiv.js"></script>
    <script src="js/lib/json3.js"></script>
    <script src="js/lib/ie-fix.js"></script>
  <![endif]-->
</head>
<body data-ng-controller="Main">
	<div class="navbar navbar-fixed-top">
	  <div class="lps-navbar-inner">
        <ul class="nav">
			<li data-ng-class="{active: page.current=='c1'}">
				<a href="javascript:;" data-ng-click="page.change('question', 'c1')">单科小题得分</a>
			</li>
			<li data-ng-class="{active: page.current=='c2'}">
				<a href="javascript:;" data-ng-click="page.change('score', 'c2')">科目总分</a>
			</li>
			<li class="dropdown" data-ng-class="{active: page.current=='c3'}">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">个人比较 <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  	<li data-ng-class="{active: page.sub=='c3_1'}">
                  		<a href="javascript:;" data-ng-click="page.change('', 'c3', 'c3_1')">横向对比</a>
                  	</li>
                    <li data-ng-class="{active: page.sub=='c3_2'}">
                    	<a href="javascript:;" data-ng-click="page.change('', 'c3', 'c3_2')" >纵向对比</a>
                    </li>
                    <li data-ng-class="{active: page.sub=='c3_3'}">
                    	<a href="javascript:;" data-ng-click="page.change('', 'c3', 'c3_3')">班级对比</a>
                    </li>
                </ul>
            </li>
			<li class="dropdown" data-ng-class="{active: page.current=='c4'}">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">单选题 <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  	<li data-ng-class="{active: page.sub=='c4_1'}">
                  		<a href="javascript:;" data-ng-click="page.change('', 'c4', 'c4_1')">选项分析</a>
                  	</li>
                    <li data-ng-class="{active: page.sub=='c4_2'}">
                    	<a href="javascript:;" data-ng-click="page.change('', 'c4', 'c4_2')">题目均分</a>
                    </li>
                </ul>
            </li>
			<li class="dropdown" data-ng-class="{active: page.current=='c5'}">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">知识点<b class="caret"></b></a>
                <ul class="dropdown-menu">
                  	<li data-ng-class="{active: page.sub=='c5_1'}">
                  		<a href="javascript:;" data-ng-click="page.change('', 'c5', 'c5_1')">知识点得分</a>
                  	</li>
                    <li data-ng-class="{active: page.sub=='c5_2'}">
                    	<a href="javascript:;" data-ng-click="page.change('', 'c5', 'c5_2')">最高Top5</a>
                    </li>
                    <li data-ng-class="{active: page.sub=='c5_3'}">
                    	<a href="javascript:;" data-ng-click="page.change('', 'c5', 'c5_3')">最低Top5</a>
                    </li>
                    <li data-ng-class="{active: page.sub=='c5_4'}">
                    	<a href="javascript:;" data-ng-click="page.change('', 'c5', 'c5_4')">各科最高</a>
                    </li>
                    <li data-ng-class="{active: page.sub=='c5_5'}">
                    	<a href="javascript:;" data-ng-click="page.change('', 'c5', 'c5_5')">各科最低</a>
                    </li>
                </ul>
            </li>
			<li data-ng-class="{active: page.current=='c6'}">
				<a href="javascript:;" data-ng-click="page.change('', 'c6')">能力值</a>
			</li>
			<li data-ng-class="{active: page.current=='c7'}">
				<a href="javascript:;" data-ng-click="page.change('', 'c7')">达标</a>
			</li>
			<li class="dropdown" data-ng-class="{active: page.current=='c8'}">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">各科均分<b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li data-ng-class="{active: page.sub=='c8_1'}">
                    	<a href="javascript:;" data-ng-click="page.change('', 'c8', 'c8_1')">同次多班</a>
                    </li>
                  	<li data-ng-class="{active: page.sub=='c8_2'}">
                  		<a href="javascript:;" data-ng-click="page.change('', 'c8', 'c8_2')">同班多次</a>
                  	</li>
                </ul>
            </li>
			<li data-ng-class="{active: page.current=='c9'}">
				<a href="javascript:;" data-ng-click="page.change('', 'c9', '')">成绩报告单</a>
			</li>
			<li data-ng-class="{active: page.current=='c10'}">
				<a href="javascript:;" data-ng-click="page.change('', 'c10', '')">基本统计量</a>
			</li>
		</ul>
	  </div>
	</div>
	<div data-ng-view style="margin: 43px 0 0 0;background: #fff;"></div>
	<div data-loading data-ng-model="loader" data-config="{type:bool, width: 200}"></div>
	<div data-loading data-ng-model="loaderReport" data-config="{type:bool, width: 400}"></div>
	<div data-confirm data-ng-model="confirm"></div>
  	<div data-alert data-ng-model="alert"></div>
	<script data-main="js/ng/main" src="js/lib/require.js"></script>
</body>
</html>