$(document).ready(function(){
          //jquery for toggle sub menus
          $('.sub-btn').click(function(){
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass('rotate');
          });
        
          //jquery for expand and collapse the sidebar
          $('.menu-btn').click(function(){
            $('.side-bar').addClass('active');
            $('.menu-btn').css("visibility", "hidden");
          });
        
          $('.close-btn').click(function(){
            $('.side-bar').removeClass('active');
            $('.menu-btn').css("visibility", "visible");
          });
        });
        
        
        //top button
        jQuery("#backtotop").click(function(){
                  jQuery("body,html").animate({
                            scrollTop:0
                  },600);
        });
        
        jQuery(window).scroll(function(){
                  if(jQuery(window).scrollTop() > 150)
                  {
                            jQuery("#backtotop").addClass("visible");
                  }
                  else
                  {
                            jQuery("#backtotop").removeClass("visible");
                  }
        });
function main_news_first_responsive_div_feed_top_forward(){
    window.location.href = "test.html";
}
function main_news_first_responsive_div_feed_bottom_left_forward(){
  window.location.href = "test.html";
}
function main_news_first_responsive_div_feed_bottom_right_forward(){
  window.location.href = "test.html";
}



// news hover
let popular_news_a_i = document.getElementById("popular_news_a_i"); 
let best_news_a_i = document.getElementById("best_news_a_i"); 
let trending_news_a_i = document.getElementById("trending_news_a_i"); 
let header_main_div_first_div_popular_a_i = document.getElementById("header_main_div_first_div_popular_a_i");
let header_main_div_first_div_best_a_i = document.getElementById("header_main_div_first_div_best_a_i");
let header_main_div_first_div_trending_a_i = document.getElementById("header_main_div_first_div_trending_a_i");
function popular_news() {
  popular_news_a_i.style.color = "white";
  popular_news_a_i.style.transition = "all 0.3s"
  header_main_div_first_div_popular_a_i.style.color = "white";
  header_main_div_first_div_popular_a_i.style.transition = "all 0.3s"
}
function best_news() {
  best_news_a_i.style.color = "white";
  best_news_a_i.style.transition = "all 0.3s"
  header_main_div_first_div_best_a_i.style.color = "white";
  header_main_div_first_div_best_a_i.style.transition = "all 0.3s"
}
function trending_news() {
  trending_news_a_i.style.color = "white";
  trending_news_a_i.style.transition = "all 0.3s"
  header_main_div_first_div_trending_a_i.style.color = "white";
  header_main_div_first_div_trending_a_i.style.transition = "all 0.3s"
}
function popular_news_moveout(){
  popular_news_a_i.style.color = "#919191";
  header_main_div_first_div_popular_a_i.style.color = "#919191";
}
function best_news_moveout() {
  best_news_a_i.style.color = "#919191";
  document.getElementById("header_main_div_first_div_best_a_i").style.color = "#919191";
}
function trending_news_moveout(){
  trending_news_a_i.style.color = "#919191";
  document.getElementById("header_main_div_first_div_trending_a_i").style.color = "#919191";
}
//top button
jQuery("#backtotop").click(function(){
	jQuery("body,html").animate({
		scrollTop:0
	},600);
});

jQuery(window).scroll(function(){
	if(jQuery(window).scrollTop() > 150)
	{
		jQuery("#backtotop").addClass("visible");
	}
	else
	{
		jQuery("#backtotop").removeClass("visible");
	}
});