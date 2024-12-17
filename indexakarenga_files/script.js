$(function() {
	$('#open_menu').on('click', function(e) {
		e.preventDefault();
		$('#menu_sp').toggleClass('is-open');
	});
	$('.header__menusp--list > li a').click(function(e) {
		$('#menu_sp').removeClass('is-open');
	})	
	
	$('.js-slidetoggle').on('click', function(e) {
		e.preventDefault();
		$('.js-slidetoggle').toggleClass('is-open');
		$('.js-slidetgt').toggleClass('is-open');
	});

	// カウントダウン
	const todayDate = new Date();
	const targetDate = new Date('2024/11/21 23:59:00');
  
	var count = targetDate.getTime() - todayDate.getTime();
	var countDate = (Math.trunc(count / 24 / 60 / 60 / 1000));

	if(countDate < 1 || countDate === 0) {
		// 開催日が過ぎたら「0日」で固定
		$('#js-count').text("0"); return;
	}

	if (!countDate < 1) {
	  $('#js-count').text(countDate);
	}

});
