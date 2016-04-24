$(function() {
  $(".re").click(function() {
    window.location.reload();
  });

  $.ajax({
    url: "http://range-ex.com/bkn2359/0008/",
    type: 'GET',
    success: function(data) {
      var mal_p = 0;
      $('.li').html($(data).find('.pagination > li'));
      mal_p = (".li > li").length / 2 - 1;
      $('.con_tr').html($(data).find('tbody > tr'));
      $(".center").html($(data).find("header > h1"));
        
      var count = 1;
      $(".next").click(function() {
          
        count += 1
        if (count <= mal_p) {
          var tbody = $("<tbody></tbody>");
          $('table').append(tbody);
          $("tbody:last").addClass("con_tr" + count);

          if (count === mal_p) {
            $(".next").css("display", "none");
          }
          $.ajax({
            url: "http://range-ex.com/bkn2359/0008/page:" + count,
            type: "GET",
            success: function(data) {
                
              $(".con_tr" + count).html($(data).find("tbody > tr"));
              $("a").attr({"onclick":"myNavigator.pushPage('page2.html')"});
              $("td > a").click(function(e) {
                e.preventDefault();
                var url = "http://range-ex.com" + $(this).attr('href');
                       $(function() {
var w = $(window).width();
$(".back").css("width",w);
  var number = window.localStorage.getItem("result");
        $.ajax({
			url: url,
			type: 'GET',
			success: function(data) {
				$('#title').html($(data).find('.table-backnumber > tbody'));
				$(".text").html($(data).find('.back-txt'));

			}
		});
	});
                

              });
            }
          });

        }



      });


$("a").attr({"onclick":"myNavigator.pushPage('page2.html')"});
      $("td > a").click(function(e) {
        e.preventDefault();
        var url = "http://range-ex.com" + $(this).attr('href');
        console.log(url); //hoge.html
        $(function() {
var w = $(window).width();
$(".back").css("width",w);
  var number = window.localStorage.getItem("result");
    	$.ajax({
			url: url,
			type: 'GET',
			success: function(data) {
				$('#title').html($(data).find('.table-backnumber > tbody'));
				$(".text").html($(data).find('.back-txt'));

			}
		});
	});

        

      });


    },

    error: function() {
      $('con_tr').html('ファイルを読み込めませんでした。');
    },
    complete: function() {}

  });


});
