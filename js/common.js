$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});

// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});
$('body, .top-menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
});

// одинаковой высоты разные по длине ашки
 $(".serves-block_contant_text").equalHeights();
  $(".process-step_text").equalHeights();
//Кнопка наверх с права от контента
$("body").append('<div class="button-top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".button-top", function() {
	$("html, body").animate({scrollTop: 0}, "slow");
});
// Заставляет прятаться кнопку, если посетитель на хедере
$(window).scroll(function() {
if ($(this).scrollTop() > $(this).height()) {
	$(".button-top").addClass("active");
} else
{  	$(".button-top").removeClass("active");
}
});
$(".typed-text").typed({
      strings: ["Frontend разработкой", "дизайном интерфейсов", "созданием сайтов под ключ", "созданием интернет-магазинов"],
      showCursor : true,
      typeSpeed  : 100,
      backSpeed  : 150,
      backDelay  : 250,
      loop:true
    });


//слайдер команды
	$(".owl-carousel").owlCarousel({
loop                 : true,
items                : 4,
slideSpeed           : 2500,
autoplay             : true,
stopOnHover          : false,
autoplayTimeout      : 3500,
margin               : 30,
dragBeforeAnimFinish : true,
mouseDrag            : true,
touchDrag            : true,
dots                 : true,
// nav                  : true,
stagePadding         : 30
	});


$(".top-menu ul li a, .adwise-bottom ul li a").mPageScroll2id({
layout                 : "auto",
offset                 : ".top-line",
scrollEasing           : "linear",
highlightByNextTarget  : true,
keepHighlightUntilNext : true,
autoScrollSpeed        : true,
scrollSpeed            : 1000
});

// начало блока портфолио
  $(function () {
    var filterList = {
      init: function () {
            // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixItUp({
          selectors: {
            target: '.portfolio',
            filter: '.filter'
          },
          load: {
            filter: '.card'
          }
        });
    }
  };
  // Run the show!
    filterList.init();
  });
// конец блока портфолио

// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
  mainClass    : 'mfp-fade',
  removalDelay : 400,
  type         : 'inline',
});

/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".forms-call h4").text(dataText);
	$(".forms-call [name=admin-data]").val(dataForm);
});

//Аякс отправка форм Документация: http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
//ниже вставлять js код

});
