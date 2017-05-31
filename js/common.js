$(function() {

	function initArticleSize(){
		var heightTopArticle = $(".articles_first").height();
		$(".article_left_1").height(heightTopArticle+50);
		$(".article_right_1").height(heightTopArticle+50);

		var heightBotArticle = $(".articles_second").height();
		$(".article_left_2").height(heightBotArticle+50);
		$(".article_right_2").height(heightBotArticle+50);
	};

	function initGreySize(){
		var widthGrey = $(".righ_bar").width();
		$(".grey_zone").width(widthGrey);

		var heightGrey = $(".righ_bar").height();
		$(".grey_zone").height(heightGrey);
	};

	initArticleSize();
	initGreySize();

});
