var loginObj = {};

		if(!bet_native.hasWrapper()){

			var loginBtn = $("a[data-i18n='LABEL_MENU_LOGIN']");
			if(loginBtn.length > 0){
				loginBtn.off("click").on("click", function(e){
					e.stopPropagation();
					e.preventDefault();
					amplify.publish("open-sidebar");
				})
			}
		}
$(document).ready(function () {
			$(".open-right-sidebar.hide").removeClass("hide");
			bet_menu.init();
		});


 $(function () {
        var filterList = {
            init: function () {
                // MixItUp plugin
                // http://mixitup.io
                $('.promoItem').mixItUp({
                    selectors: {
                        target: '.promo-item',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.newmember, .dailybonus, .weeklybonus, .specialbonus'
                    }
                });
            }
        };
        // Run the show!
        filterList.init();
    });

$(document).ready(function () {
        $(".promo-content").hide();
        $(".goLeft").show();
        $('.goLeft').click(function () {
            // $(".promo-content").slideToggle();
            $(this).parent().parent().find(".promo-content").slideToggle();
        });
    });