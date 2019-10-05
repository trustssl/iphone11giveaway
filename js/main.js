$(document).ready(function() {



    function clear_delay(timeoutID_here) {

        window.clearTimeout(timeoutID_here);

    }



    /* Run 1 */

    function run_loading_run_1(time_delay) {

        timeoutID1 = window.setTimeout(run_loading_1, time_delay);

    }



    function run_loading_1() {

        $('.thank_for_close, .run_loading_2').fadeIn();

        $('.main_review').hide();

    }



    /* Run 2 */

    function run_loading_run_2(time_delay) {

        timeoutID2 = window.setTimeout(run_loading_2, time_delay);

    }



    function run_loading_2() {

        $('.run_loading_2').hide();

        $('.run_loading_3, .li_run_loading_1, .li_run_loading_2').fadeIn();

    }



    /* Run 3 */

    function run_loading_run_3(time_delay) {

        timeoutID3 = window.setTimeout(run_loading_3, time_delay);

    }



    function run_loading_3() {

        $('.run_loading_3').hide();

        $('.run_loading_4, .li_run_loading_3').fadeIn();

    }



    /* Run 4 */

    function run_loading_run_4(time_delay) {

        timeoutID3 = window.setTimeout(run_loading_4, time_delay);

    }



    function run_loading_4() {

        $('.run_loading_4, .loading').hide();

        $('.done_marker').hide();

        $('.li_run_loading_4, li_run_loading_5, .run_loading_5, .show_end').fadeIn();





    }









    $(document).on('click', '.next', function(e) {

        e.preventDefault();

        $(this).parent().hide().next().fadeIn();

		window.scrollTo(0, $("#enter-give-away-now").offset().top);



    });



    $(document).on('click', '.run_loading', function(e) {

        if ($('#user-email-submit').val() != '') {

            $(".rewards-outer-wrapper").slideUp("slow");

            e.preventDefault();

            $(this).parent().hide().next().fadeIn();

			window.scrollTo(0, $("#enter-give-away-now").offset().top);

            $('.step4 .loading').show();

            run_loading_run_1('2000');

            run_loading_run_2('4500');

            run_loading_run_3('6500');

            run_loading_run_4('8900');

        } else {

            sweetAlert("Error", "Please enter your E-mail Address.", "error");

			

        }

    });



    var X00Gems = ['iPhone 7 Plus Silver 128GB', 'iPhone 7 Plus Gold 256GB', 'iPhone 7 Plus Black 128GB', 'iPhone 7 Plus Space Grey 256GB', 'iPhone 7 Plus Rose Gold 32GB'];

    var X00CF = ['img/cf/UK.png', 'img/cf/US.png', 'img/cf/Germany.png', 'img/cf/Netherlands.png', 'img/cf/Sweden.png', 'img/cf/Australia.png', 'img/cf/France.png', 'img/cf/Switzerland.png'];



    function X00Random(X00Minimum, X00Maximum) {

        return Math.floor((Math.random() * X00Maximum) + X00Minimum);

    }



    var X00ActivityIntervalSeconds;

    var X00ActivitySecondsCurrent = 0;



    function X00ActivitiesAdd() {

        clearInterval(X00ActivityIntervalSeconds);

        X00ActivitySecondsCurrent = 0;

        $('#X00Activities div').remove();

        $('<div style="text-align: center;"><h3><img src="' + X00CF[X00Random(0, X00CF.length)] + '" alt="Country Flag" class="country-flag" /><span class="subheader ipsubheader">IP: ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.XXX.XXX</span> <span class="subheader">has won</span> <span class="subheader recgenvalue" style="font-weight: bold; color: #353535;">' + X00Gems[X00Random(0, X00Gems.length)] + ' </span> <span class="subheader"><span id="X00ActivitySeconds" class="ipsubheader"> 0s</span> ago</span></div>').appendTo('#X00Activities').hide().fadeIn(250);

        X00ActivityIntervalSeconds = setInterval(function() {

            X00ActivitySecondsCurrent++;

            $('#X00ActivitySeconds').html(X00ActivitySecondsCurrent + 's');

        }, 1000);

    }



    $(function() {



        X00ActivitiesAdd();

        var X00Activities = function() {

            setTimeout(function() {

                X00ActivitiesAdd();

                X00Activities();

            }, X00Random(20000, 250000));

        };

        X00Activities();





    });

	

	$(".follow-scroll").hide();

	$(window).scroll(function() {

		console.log($(window).scrollTop());

		if ($(window).scrollTop() > 500) {

			$(".follow-scroll").fadeIn();

		} else {

			$(".follow-scroll").fadeOut();

		}



	});



    $('.scroll-me').bind("click", function(e) {

        var target = $(this).attr("href"); // Get the target element

        var scrollToPosition = $(target).offset().top; // Position to scroll to

        $('html /* For FF & IE */,body /* For Chrome */').animate({

            'scrollTop': scrollToPosition

        }, 500, function(target) {

            window.location.hash = target;

        });

        e.preventDefault();

    });



    $('.parallaxme').parallax("50%", 0.1);



    $('.human-verification-button').magnificPopup({

        type: 'inline',

        preloader: true

    });



    $('.popup-tos').magnificPopup({

        type: 'inline',

        preloader: false

    });

    $('.popup-contact').magnificPopup({

        type: 'inline',

        preloader: false

    });

    $('.popup-pp').magnificPopup({

        type: 'inline',

        preloader: false

    });



});