//该js主要用于定义控制器
//
angular.module("ctrls",[])
//创建导航栏的控制器，模拟导航栏的数据，绑定传递过去
.controller("navs",["$scope",function($scope){
	$scope.navs = [
		{link:"#/index",icon:"icon-home",text:"今日一刻"},
		{link:"#/older",icon:"icon-file-empty",text:"往期内容"},
		{link:"#/author",icon:"icon-pencil",text:"热门作者"},
		{link:"#/category",icon:"icon-menu",text:"栏目浏览"},
		{link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
		{link:"#/settings",icon:"icon-cog",text:"设置"}
	]
}])
//创建index控制器
.controller("index",["$scope","$rootScope",function($scope,$rootScope){
	//模拟数据
	$scope.msg = "控制器获取的数据";
	//绑定num,判定被点击标题被选中的状态
	$rootScope.num = 0;
}])
//创建older控制器
.controller("older",["$scope","$rootScope",function($scope,$rootScope){
	//模拟数据
	$scope.msg = "控制器获取的数据2";
	$rootScope.num = 1;
}])
//创建author控制器
.controller("author",["$scope","$rootScope",function($scope,$rootScope){
	//模拟数据
	$scope.msg = "控制器获取的数据3";
	$rootScope.num = 2;
}])