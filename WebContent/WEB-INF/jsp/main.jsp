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
				<a href="javascript:;" data-ng-click="page.change('question', 'c1')">小题得分</a>
			</li>
			<li data-ng-class="{active: page.current=='c2'}">
				<a href="javascript:;" data-ng-click="page.change('OQAnalysis', 'c2')">客观题分析</a>
			</li>
		</ul>
	  </div>
	</div>
	<div data-ng-view style="margin: 43px 0 0 0;background: #fff;"></div>
	<div data-loading data-ng-model="loader" data-config="{type:bool, width: 200}"></div>
	<div data-confirm data-ng-model="confirm"></div>
  	<div data-alert data-ng-model="alert"></div>
	<script data-main="js/ng/main" src="js/lib/require.js"></script>
</body>
</html>