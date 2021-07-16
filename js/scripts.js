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

// highlight tabs on click
    $('li.nav-item').on('click', function() {
        if ($(this).is(':last-child') == false) {
            $(this).addClass('selected');
            $('.nav-item').removeClass('active');
            $('.selected').addClass('active');
            $('.selected').removeClass('selected');
        }
    });

// scroll to top of page on tab click
    function toTheTop() {
        $('html, body').animate({
            scrollTop: $('#tab-content').offset().top
        }, 'fast');
    }

// scroll to top of work section
    function toWorkSection() {
        $('html, body').animate({
            scrollTop: $('#work-section').offset().top
        }, 'fast');
    }

// load work.html on entry & page load
    $(document).ready(function(){
        $('#work-tab').load('/work.html');
        toTheTop();
    });

// load individual work items on work-item click
    $('#work-tab').on('click','#work-skills',function() {
        $('#work-tab').load('/work/skills.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaopenhouse',function() {
        $('#work-tab').load('/work/openhouses.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaawards',function() {
        $('#work-tab').load('/work/awards.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotacross',function() {
        $('#work-tab').load('/work/cross.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaother',function() {
        $('#work-tab').load('/work/other.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-emailgenerator',function() {
        $('#work-tab').load('/work/emailgenerator.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-hdbbto',function() {
        $('#work-tab').load('/work/hdbbto.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-portfolio',function() {
        $('#work-tab').load('/work/thisportfolio.html');
        toTheTop();
    });

// load pages by js functions
    function loadWork() {
        $('.nav-item a#work').tab('show');  
        $('.nav-item a#work').parent().addClass('active');    
        $('#work-tab').load('/work.html');
        window.setTimeout(toWorkSection, 50);
    }
    function loadDesign() {
        $('.nav-item a#design').tab('show');
        $('.nav-item a#design').parent().addClass('active');
        $('#design-tab').load('/design.html');
        toTheTop();
    }
    function loadMusic() {
        $('.nav-item a#music').tab('show');
        $('.nav-item a#music').parent().addClass('active');
        $('#music-tab').load('/music.html');
        toTheTop();
    }
    function loadAbout() {
        $('.nav-item a#about').tab('show');
        $('.nav-item a#about').parent().addClass('active');
        $('#about-tab').load('/about.html');
        toTheTop();
    }
    function loadWorkSkills() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('/work/skills.html');
        toTheTop();
    }
    function loadWorkOpenHouse() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('/work/openhouses.html');
        toTheTop();
    }
    function loadWorkAwards() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('/work/awards.html');
        toTheTop();
    }
    function loadWorkCross() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('/work/cross.html');
        toTheTop();
    }
    function loadWorkOther() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('/work/other.html');
        toTheTop();
    }
    function loadWorkEmailGenerator() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('/work/emailgenerator.html');
        toTheTop();
    }
    function loadWorkHdbBto() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('/work/hdbbto.html');
        toTheTop();
    }
    function loadWorkPortfolio() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('/work/thisportfolio.html');
        toTheTop();
    }

// load tab pages on tab click
    $('#work').on('click', function() {
        window.setTimeout(loadWork, 200);
    });
    $('#design').on('click', function() {
        loadDesign();
    });
    $('#music').on('click', function() {
        loadMusic();
    });
    $('#about').on('click', function() {
        loadAbout();
    });

// enabling the browser's back & forwards buttons
    // change the text in the pseudo-state container
        function selectPage(page) {    
            $('#pseudo-state').text(page);
        };
    // create an item in the browser's history
        function doPushState (page) {
            var state = { selectedPage: page },
                title = 'Page title',
                path  = page;
            history.pushState(state, title, '#' + path);
        };
    // listen for browser back/forward
        window.addEventListener('popstate', function (event) {
            var state = event.state;
            if (state) {
                selectPage( state.selectedPage );
            }
        });
    // determine the syntax of the page url
        $('.createState').on('click', function() {
            var page = $(this).attr('id');
            selectPage(page);
            doPushState(page);
        });
        $('#work-tab').on('click','.createState',function() {
            var page = $(this).attr('id');
            selectPage(page);
            doPushState(page);
        });
    // check text in pseudo state container
        window.addEventListener('popstate', function () {
            $('.nav-item').removeClass('active');
            if ($('#pseudo-state').html() == 'work') {
                loadWork();
            } else if ($('#pseudo-state').html() == 'design') {
                loadDesign();
            } else if ($('#pseudo-state').html() == 'music') {
                loadMusic();
            } else if ($('#pseudo-state').html() == 'about') {
                loadAbout();
            } else if ($('#pseudo-state').html() == 'work-skills') {
                loadWorkSkills();
            } else if ($('#pseudo-state').html() == 'work-sotaopenhouse') {
                loadWorkOpenHouse();
            } else if ($('#pseudo-state').html() == 'work-sotaawards') {
                loadWorkAwards();
            } else if ($('#pseudo-state').html() == 'work-sotacross') {
                loadWorkCross();
            } else if ($('#pseudo-state').html() == 'work-sotaother') {
                loadWorkOther();
            } else if ($('#pseudo-state').html() == 'work-emailgenerator') {
                loadWorkEmailGenerator();
            } else if ($('#pseudo-state').html() == 'work-hdbbto') {
                loadWorkHdbBto();
            } else if ($('#pseudo-state').html() == 'work-portfolio') {
                loadWorkPortfolio();
            }
        });

// check URL for hash on reload, load pages accordingly
    $(document).ready(function() {
        $('.nav-item').removeClass('active');
        if (window.location.href.indexOf('work') > -1) {
            var url = window.location.href;
            if (url.length == url.indexOf('work') + 4) {
                window.setTimeout(loadWork, 0);
            }  else {
                if (window.location.href.indexOf('skills') > -1) {
                    window.setTimeout(loadWorkSkills, 0);
                } else if (window.location.href.indexOf('sotaopenhouse') > -1) {
                    window.setTimeout(loadWorkOpenHouse, 0);
                } else if (window.location.href.indexOf('sotaawards') > -1) {
                    window.setTimeout(loadWorkAwards, 0);
                } else if (window.location.href.indexOf('sotacross') > -1) {
                    window.setTimeout(loadWorkCross, 0);
                } else if (window.location.href.indexOf('sotaother') > -1) {
                    window.setTimeout(loadWorkOther, 0);
                } else if (window.location.href.indexOf('emailgenerator') > -1) {
                    window.setTimeout(loadWorkEmailGenerator, 0);
                } else if (window.location.href.indexOf('hdbbto') > -1) {
                    window.setTimeout(loadWorkHdbBto, 0);
                } else if (window.location.href.indexOf('portfolio') > -1) {
                    window.setTimeout(loadWorkPortfolio, 0);
                } 
            }
        } else if (window.location.href.indexOf('design') > -1) {
            window.setTimeout(loadDesign, 0);
        } else if (window.location.href.indexOf('music') > -1) {
            window.setTimeout(loadMusic, 0);
        } else if (window.location.href.indexOf('about') > -1) {
            window.setTimeout(loadAbout, 0);
        } else {
            window.setTimeout($('.nav-item:nth-child(1)').addClass('active'), 0);
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

// shrink navbar on scroll, only for desktop
    if (window.matchMedia('(min-width: 992px)').matches) {
        $(document).on('scroll',function() {
            var st = $(this).scrollTop();
            if (st > 0) {
                $('.navbar > div ul li').css({
                    'height': '58px'
                });
            } else {
                $('.navbar > div ul li').css({
                    'height': '68px'
                });
            }
        });
    }
    
// open/close sidebar on toggler click
    var togglerClicks = 0;
    var navWidth = $('#nav').width();
    function closeSidebar() {
        $('.navbar.fixed-top').css ({
            'left': '-992px'
        });
        $('#tabs-and-footer').css ({
            'left': 0
        });
        $('#navbar-toggler').css ({
            'left': 15
        });
        $('body').css ({
            'overflow': 'initial'
        });
    }
    function openSidebar() {
        $('.navbar.fixed-top').css ({
            'left': '0'
        });
        $('#tabs-and-footer').css ({
            'left': navWidth
        });
        $('#navbar-toggler').css ({
            'left': navWidth + 15
        });
        $('body').css ({
            'overflow': 'hidden'
        });
    }
    $('.navbar-toggler').on('click',function() {
        togglerClicks += 1;
        if (togglerClicks % 2 == 0) {
            closeSidebar();
        }
        else {
            openSidebar();
        }  
    });


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

// highlight tabs on click
    $('li.nav-item').on('click', function() {
        if ($(this).is(':last-child') == false) {
            $(this).addClass('selected');
            $('.nav-item').removeClass('active');
            $('.selected').addClass('active');
            $('.selected').removeClass('selected');
        }
    });

// scroll to top of page on tab click
    function toTheTop() {
        $('html, body').animate({
            scrollTop: $('#tab-content').offset().top
        }, 'fast');
    }

// scroll to top of work section
    function toWorkSection() {
        $('html, body').animate({
            scrollTop: $('#work-section').offset().top
        }, 'fast');
    }

// load work.html on entry & page load
    $(document).ready(function(){
        $('#work-tab').load('work.html');
        toTheTop();
    });

// load individual work items on work-item click
    $('#work-tab').on('click','#work-skills',function() {
        $('#work-tab').load('work/skills.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaopenhouse',function() {
        $('#work-tab').load('work/openhouses.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaawards',function() {
        $('#work-tab').load('work/awards.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotacross',function() {
        $('#work-tab').load('work/cross.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaother',function() {
        $('#work-tab').load('work/other.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-emailgenerator',function() {
        $('#work-tab').load('work/emailgenerator.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-hdbbto',function() {
        $('#work-tab').load('work/hdbbto.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-portfolio',function() {
        $('#work-tab').load('work/thisportfolio.html');
        toTheTop();
    });

// load pages by js functions
    function loadWork() {
        $('.nav-item a#work').tab('show');  
        $('.nav-item a#work').parent().addClass('active');    
        $('#work-tab').load('work.html');
        window.setTimeout(toWorkSection, 50);
    }
    function loadDesign() {
        $('.nav-item a#design').tab('show');
        $('.nav-item a#design').parent().addClass('active');
        $('#design-tab').load('design.html');
        toTheTop();
    }
    function loadMusic() {
        $('.nav-item a#music').tab('show');
        $('.nav-item a#music').parent().addClass('active');
        $('#music-tab').load('music.html');
        toTheTop();
    }
    function loadAbout() {
        $('.nav-item a#about').tab('show');
        $('.nav-item a#about').parent().addClass('active');
        $('#about-tab').load('about.html');
        toTheTop();
    }
    function loadWorkSkills() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/skills.html');
        toTheTop();
    }
    function loadWorkOpenHouse() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/openhouses.html');
        toTheTop();
    }
    function loadWorkAwards() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/awards.html');
        toTheTop();
    }
    function loadWorkCross() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/cross.html');
        toTheTop();
    }
    function loadWorkOther() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/other.html');
        toTheTop();
    }
    function loadWorkEmailGenerator() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/emailgenerator.html');
        toTheTop();
    }
    function loadWorkHdbBto() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/hdbbto.html');
        toTheTop();
    }
    function loadWorkPortfolio() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/thisportfolio.html');
        toTheTop();
    }

// load tab pages on tab click
    $('#work').on('click', function() {
        window.setTimeout(loadWork, 200);
    });
    $('#design').on('click', function() {
        loadDesign();
    });
    $('#music').on('click', function() {
        loadMusic();
    });
    $('#about').on('click', function() {
        loadAbout();
    });

// enabling the browser's back & forwards buttons
    // change the text in the pseudo-state container
        function selectPage(page) {    
            $('#pseudo-state').text(page);
        };
    // create an item in the browser's history
        function doPushState (page) {
            var state = { selectedPage: page },
                title = 'Page title',
                path  = page;
            history.pushState(state, title, '#' + path);
        };
    // listen for browser back/forward
        window.addEventListener('popstate', function (event) {
            var state = event.state;
            if (state) {
                selectPage( state.selectedPage );
            }
        });
    // determine the syntax of the page url
        $('.createState').on('click', function() {
            var page = $(this).attr('id');
            selectPage(page);
            doPushState(page);
        });
        $('#work-tab').on('click','.createState',function() {
            var page = $(this).attr('id');
            selectPage(page);
            doPushState(page);
        });
    // check text in pseudo state container
        window.addEventListener('popstate', function () {
            $('.nav-item').removeClass('active');
            if ($('#pseudo-state').html() == 'work') {
                loadWork();
            } else if ($('#pseudo-state').html() == 'design') {
                loadDesign();
            } else if ($('#pseudo-state').html() == 'music') {
                loadMusic();
            } else if ($('#pseudo-state').html() == 'about') {
                loadAbout();
            } else if ($('#pseudo-state').html() == 'work-skills') {
                loadWorkSkills();
            } else if ($('#pseudo-state').html() == 'work-sotaopenhouse') {
                loadWorkOpenHouse();
            } else if ($('#pseudo-state').html() == 'work-sotaawards') {
                loadWorkAwards();
            } else if ($('#pseudo-state').html() == 'work-sotacross') {
                loadWorkCross();
            } else if ($('#pseudo-state').html() == 'work-sotaother') {
                loadWorkOther();
            } else if ($('#pseudo-state').html() == 'work-emailgenerator') {
                loadWorkEmailGenerator();
            } else if ($('#pseudo-state').html() == 'work-hdbbto') {
                loadWorkHdbBto();
            } else if ($('#pseudo-state').html() == 'work-portfolio') {
                loadWorkPortfolio();
            }
        });

// check URL for hash on reload, load pages accordingly
    $(document).ready(function() {
        $('.nav-item').removeClass('active');
        if (window.location.href.indexOf('work') > -1) {
            var url = window.location.href;
            if (url.length == url.indexOf('work') + 4) {
                window.setTimeout(loadWork, 0);
            }  else {
                if (window.location.href.indexOf('skills') > -1) {
                    window.setTimeout(loadWorkSkills, 0);
                } else if (window.location.href.indexOf('sotaopenhouse') > -1) {
                    window.setTimeout(loadWorkOpenHouse, 0);
                } else if (window.location.href.indexOf('sotaawards') > -1) {
                    window.setTimeout(loadWorkAwards, 0);
                } else if (window.location.href.indexOf('sotacross') > -1) {
                    window.setTimeout(loadWorkCross, 0);
                } else if (window.location.href.indexOf('sotaother') > -1) {
                    window.setTimeout(loadWorkOther, 0);
                } else if (window.location.href.indexOf('emailgenerator') > -1) {
                    window.setTimeout(loadWorkEmailGenerator, 0);
                } else if (window.location.href.indexOf('hdbbto') > -1) {
                    window.setTimeout(loadWorkHdbBto, 0);
                } else if (window.location.href.indexOf('portfolio') > -1) {
                    window.setTimeout(loadWorkPortfolio, 0);
                } 
            }
        } else if (window.location.href.indexOf('design') > -1) {
            window.setTimeout(loadDesign, 0);
        } else if (window.location.href.indexOf('music') > -1) {
            window.setTimeout(loadMusic, 0);
        } else if (window.location.href.indexOf('about') > -1) {
            window.setTimeout(loadAbout, 0);
        } else {
            window.setTimeout($('.nav-item:nth-child(1)').addClass('active'), 0);
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

// shrink navbar on scroll, only for desktop
    if (window.matchMedia('(min-width: 992px)').matches) {
        $(document).on('scroll',function() {
            var st = $(this).scrollTop();
            if (st > 0) {
                $('.navbar > div ul li').css({
                    'height': '58px'
                });
            } else {
                $('.navbar > div ul li').css({
                    'height': '68px'
                });
            }
        });
    }
    
// open/close sidebar on toggler click
    var togglerClicks = 0;
    var navWidth = $('#nav').width();
    function closeSidebar() {
        $('.navbar.fixed-top').css ({
            'left': '-992px'
        });
        $('#tabs-and-footer').css ({
            'left': 0
        });
        $('#navbar-toggler').css ({
            'left': 15
        });
        $('body').css ({
            'overflow': 'initial'
        });
    }
    function openSidebar() {
        $('.navbar.fixed-top').css ({
            'left': '0'
        });
        $('#tabs-and-footer').css ({
            'left': navWidth
        });
        $('#navbar-toggler').css ({
            'left': navWidth + 15
        });
        $('body').css ({
            'overflow': 'hidden'
        });
    }
    $('.navbar-toggler').on('click',function() {
        togglerClicks += 1;
        if (togglerClicks % 2 == 0) {
            closeSidebar();
        }
        else {
            openSidebar();
        }  
    });

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

// highlight tabs on click
    $('li.nav-item').on('click', function() {
        if ($(this).is(':last-child') == false) {
            $(this).addClass('selected');
            $('.nav-item').removeClass('active');
            $('.selected').addClass('active');
            $('.selected').removeClass('selected');
        }
    });

// scroll to top of page on tab click
    function toTheTop() {
        $('html, body').animate({
            scrollTop: $('#tab-content').offset().top
        }, 'fast');
    }

// scroll to top of work section
    function toWorkSection() {
        $('html, body').animate({
            scrollTop: $('#work-section').offset().top
        }, 'fast');
    }

// load work.html on entry & page load
    $(document).ready(function(){
        $('#work-tab').load('work.html');
        toTheTop();
    });

// load individual work items on work-item click
    $('#work-tab').on('click','#work-skills',function() {
        $('#work-tab').load('work/skills.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaopenhouse',function() {
        $('#work-tab').load('work/openhouses.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaawards',function() {
        $('#work-tab').load('work/awards.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotacross',function() {
        $('#work-tab').load('work/cross.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-sotaother',function() {
        $('#work-tab').load('work/other.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-emailgenerator',function() {
        $('#work-tab').load('work/emailgenerator.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-hdbbto',function() {
        $('#work-tab').load('work/hdbbto.html');
        toTheTop();
    });
    $('#work-tab').on('click','#work-portfolio',function() {
        $('#work-tab').load('work/thisportfolio.html');
        toTheTop();
    });

// load pages by js functions
    function loadWork() {
        $('.nav-item a#work').tab('show');  
        $('.nav-item a#work').parent().addClass('active');    
        $('#work-tab').load('work.html');
        window.setTimeout(toWorkSection, 50);
    }
    function loadDesign() {
        $('.nav-item a#design').tab('show');
        $('.nav-item a#design').parent().addClass('active');
        $('#design-tab').load('design.html');
        toTheTop();
    }
    function loadMusic() {
        $('.nav-item a#music').tab('show');
        $('.nav-item a#music').parent().addClass('active');
        $('#music-tab').load('music.html');
        toTheTop();
    }
    function loadAbout() {
        $('.nav-item a#about').tab('show');
        $('.nav-item a#about').parent().addClass('active');
        $('#about-tab').load('about.html');
        toTheTop();
    }
    function loadWorkSkills() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/skills.html');
        toTheTop();
    }
    function loadWorkOpenHouse() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/openhouses.html');
        toTheTop();
    }
    function loadWorkAwards() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/awards.html');
        toTheTop();
    }
    function loadWorkCross() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/cross.html');
        toTheTop();
    }
    function loadWorkOther() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/other.html');
        toTheTop();
    }
    function loadWorkEmailGenerator() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/emailgenerator.html');
        toTheTop();
    }
    function loadWorkHdbBto() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/hdbbto.html');
        toTheTop();
    }
    function loadWorkPortfolio() {
        $('.nav-item a#work').tab('show');
        $('.nav-item a#work').parent().addClass('active');
        $('#work-tab').load('work/thisportfolio.html');
        toTheTop();
    }

// load tab pages on tab click
    $('#work').on('click', function() {
        window.setTimeout(loadWork, 200);
    });
    $('#design').on('click', function() {
        loadDesign();
    });
    $('#music').on('click', function() {
        loadMusic();
    });
    $('#about').on('click', function() {
        loadAbout();
    });

// enabling the browser's back & forwards buttons
    // change the text in the pseudo-state container
        function selectPage(page) {    
            $('#pseudo-state').text(page);
        };
    // create an item in the browser's history
        function doPushState (page) {
            var state = { selectedPage: page },
                title = 'Page title',
                path  = page;
            history.pushState(state, title, '#' + path);
        };
    // listen for browser back/forward
        window.addEventListener('popstate', function (event) {
            var state = event.state;
            if (state) {
                selectPage( state.selectedPage );
            }
        });
    // determine the syntax of the page url
        $('.createState').on('click', function() {
            var page = $(this).attr('id');
            selectPage(page);
            doPushState(page);
        });
        $('#work-tab').on('click','.createState',function() {
            var page = $(this).attr('id');
            selectPage(page);
            doPushState(page);
        });
    // check text in pseudo state container
        window.addEventListener('popstate', function () {
            $('.nav-item').removeClass('active');
            if ($('#pseudo-state').html() == 'work') {
                loadWork();
            } else if ($('#pseudo-state').html() == 'design') {
                loadDesign();
            } else if ($('#pseudo-state').html() == 'music') {
                loadMusic();
            } else if ($('#pseudo-state').html() == 'about') {
                loadAbout();
            } else if ($('#pseudo-state').html() == 'work-skills') {
                loadWorkSkills();
            } else if ($('#pseudo-state').html() == 'work-sotaopenhouse') {
                loadWorkOpenHouse();
            } else if ($('#pseudo-state').html() == 'work-sotaawards') {
                loadWorkAwards();
            } else if ($('#pseudo-state').html() == 'work-sotacross') {
                loadWorkCross();
            } else if ($('#pseudo-state').html() == 'work-sotaother') {
                loadWorkOther();
            } else if ($('#pseudo-state').html() == 'work-emailgenerator') {
                loadWorkEmailGenerator();
            } else if ($('#pseudo-state').html() == 'work-hdbbto') {
                loadWorkHdbBto();
            } else if ($('#pseudo-state').html() == 'work-portfolio') {
                loadWorkPortfolio();
            }
        });

// check URL for hash on reload, load pages accordingly
    $(document).ready(function() {
        $('.nav-item').removeClass('active');
        if (window.location.href.indexOf('work') > -1) {
            var url = window.location.href;
            if (url.length == url.indexOf('work') + 4) {
                window.setTimeout(loadWork, 0);
            }  else {
                if (window.location.href.indexOf('skills') > -1) {
                    window.setTimeout(loadWorkSkills, 0);
                } else if (window.location.href.indexOf('sotaopenhouse') > -1) {
                    window.setTimeout(loadWorkOpenHouse, 0);
                } else if (window.location.href.indexOf('sotaawards') > -1) {
                    window.setTimeout(loadWorkAwards, 0);
                } else if (window.location.href.indexOf('sotacross') > -1) {
                    window.setTimeout(loadWorkCross, 0);
                } else if (window.location.href.indexOf('sotaother') > -1) {
                    window.setTimeout(loadWorkOther, 0);
                } else if (window.location.href.indexOf('emailgenerator') > -1) {
                    window.setTimeout(loadWorkEmailGenerator, 0);
                } else if (window.location.href.indexOf('hdbbto') > -1) {
                    window.setTimeout(loadWorkHdbBto, 0);
                } else if (window.location.href.indexOf('portfolio') > -1) {
                    window.setTimeout(loadWorkPortfolio, 0);
                } 
            }
        } else if (window.location.href.indexOf('design') > -1) {
            window.setTimeout(loadDesign, 0);
        } else if (window.location.href.indexOf('music') > -1) {
            window.setTimeout(loadMusic, 0);
        } else if (window.location.href.indexOf('about') > -1) {
            window.setTimeout(loadAbout, 0);
        } else {
            window.setTimeout($('.nav-item:nth-child(1)').addClass('active'), 0);
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

// shrink navbar on scroll, only for desktop
    if (window.matchMedia('(min-width: 992px)').matches) {
        $(document).on('scroll',function() {
            var st = $(this).scrollTop();
            if (st > 0) {
                $('.navbar > div ul li').css({
                    'height': '58px'
                });
            } else {
                $('.navbar > div ul li').css({
                    'height': '68px'
                });
            }
        });
    }
    
// open/close sidebar on toggler click
    var togglerClicks = 0;
    var navWidth = $('#nav').width();
    function closeSidebar() {
        $('.navbar.fixed-top').css ({
            'left': '-992px'
        });
        $('#tabs-and-footer').css ({
            'left': 0
        });
        $('#navbar-toggler').css ({
            'left': 15
        });
        $('body').css ({
            'overflow': 'initial'
        });
    }
    function openSidebar() {
        $('.navbar.fixed-top').css ({
            'left': '0'
        });
        $('#tabs-and-footer').css ({
            'left': navWidth
        });
        $('#navbar-toggler').css ({
            'left': navWidth + 15
        });
        $('body').css ({
            'overflow': 'hidden'
        });
    }
    $('.navbar-toggler').on('click',function() {
        togglerClicks += 1;
        if (togglerClicks % 2 == 0) {
            closeSidebar();
        }
        else {
            openSidebar();
        }  
    });


// close sidebar on menu item or main content click
    $('.nav-item').on('click',function(){
        if (window.matchMedia('(max-width: 991px)').matches) {
            togglerClicks += 1;
            closeSidebar();
        }
    });
    $('#tabs-and-footer').on('click',function(){
        if (window.matchMedia('(max-width: 991px)').matches) {
            togglerClicks += 1;
            closeSidebar();
        }
    });
