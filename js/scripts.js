// run these whenever window is resized, to optimise for developer tools
    $(window).resize(function() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('.navbar.fixed-top').css ({
                'left': 0
            });
            $('#tabs-and-footer').css ({
                'left': 0
            });
        }
        else {
            $('.navbar.fixed-top').css ({
                'left': '-991px'
            });
        }
    });

// show megamenu on tab hover
    // $('li.nav-item.has-megamenu').hover(
    //     function() {
    //         $('#megamenu').addClass('active');
    //     }, function() {
    //         $('#megamenu').removeClass('active');
    //     }
    // );

// scroll to top of page on tab click
    function toTheTop() {
        $('html, body').animate({
            scrollTop: $('#tab-content').offset().top
        }, 'fast');
    }

// check URL, then highlight tab accordingly
    $(document).ready(function() {
        $('.nav-item').removeClass('active');
        if (window.location.href.indexOf('design') > -1) {
            $('li.nav-item#design').addClass('active');
        } else if (window.location.href.indexOf('music') > -1) {
            $('li.nav-item#music').addClass('active');
        } else if (window.location.href.indexOf('about') > -1) {
            $('li.nav-item#about').addClass('active');
        } else {
            $('li.nav-item#work').addClass('active');
        }
    });
     
// fade hero items on scroll
    const checkpoint = 550;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= checkpoint) {
            opacity = 1 - currentScroll / checkpoint;
        } else {
            opacity = 0;
        }
        $('#hero-items').css({
            'opacity' : opacity
        });
    });

// shift hero items down on scroll
    function parallax() {
            var scrollTop = $(window).scrollTop();
        var translate = scrollTop / $(window).height() * 100;
        $('#hero-items').css({
            'transform': 'translateY(' + translate +'%)'
        });
    }
    $(document).on({
        scroll: function () {
            parallax();
        }, ready: function () {
            parallaxImg();
        }
    });

// shrink navbar & move megamenu up accordingly on scroll, only for desktop
    if (window.matchMedia('(min-width: 992px)').matches) {
        $(document).on('scroll',function() {
            var st = $(this).scrollTop();
            if (st > 0) {
                $('.navbar > div ul li').css({
                    'height': '58px'
                });
                $('#megamenu').css({
                    'top': '58px'
                });
            } else {
                $('.navbar > div ul li').css({
                    'height': '68px'
                });
                $('#megamenu').css({
                    'top': '68px'
                });
            }
        });
    }
    
// functions to open/close sidebar
    var navWidth = $('#nav').width();
    function closeSidebar() {
        $('.navbar.fixed-top').css ({
            'left': '-992px'
        });
        $('#tabs-and-footer').css ({
            'left': 0
        });
        $('#tabs-and-footer .toggle-overlay').css ({
            'display': 'none'
        });
        $('#navbar-toggler').css ({
            'display': 'block'
        });
        $('body').css ({
            'overflow-y': 'initial'
        });
    }
    function openSidebar() {
        $('.navbar.fixed-top').css ({
            'left': '0'
        });
        $('#tabs-and-footer').css ({
            'left': navWidth
        });
        $('#tabs-and-footer .toggle-overlay').css ({
            'display': 'block'
        });
        $('#navbar-toggler').css ({
            'display': 'none'
        });
        $('body').css ({
            'overflow-y': 'hidden'
        });
    }

// open sidebar on toggler click
    $('.navbar-toggler').on('click',function() {
        openSidebar();
    });

// close sidebar on nav item click
    $('.nav-item').on('click',function() {
        if (window.matchMedia('(max-width: 991px)').matches) {
            closeSidebar();
        }  
    });

// close sidebar on main body content click
    $('#tabs-and-footer').on('click',function() {
        if ($('body').css('overflow-y') == 'hidden') {
            closeSidebar();
        }  
    });

// scroll indicators - toggling between absolute and fixed positioning
    $(window).on('scroll', function () {
        var scrollTop     = $(window).scrollTop();
        var offset = $('.indicator-stick').offset().top;
        distance = (offset - scrollTop - 58);
        if (distance <= 0) {
            $('.scroll-indicator').css({
                'position'  : 'fixed',
                'top'       : '88px'
            });
        } else {
            $('.scroll-indicator').css({
                'position'  : 'absolute',
                'top'       : '30px'
            });
        }
    });
    
