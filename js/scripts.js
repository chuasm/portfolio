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

// show megamenu on tab hover
    $('li.nav-item.has-megamenu').hover(
        function() {
            $('#megamenu').addClass('active');
        }, function() {
            $('#megamenu').removeClass('active');
        }
    );

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
        window.setTimeout(loadDesignContent, 100);
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
        window.setTimeout(loadDesign, 200);
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
            window.setTimeout(() => {$('.nav-item:nth-child(1)').addClass('active'), 0});
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
        $('#navbar-toggler').removeClass('active');
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
        $('#navbar-toggler').css ({
            'left': navWidth + 15
        });
        $('#navbar-toggler').addClass('active');
        $('body').css ({
            'overflow-y': 'hidden'
        });
    }

// open/close sidebar on toggler click
    $('.navbar-toggler').on('click',function() {
        togglerClicks += 1;
        if (togglerClicks % 2 == 0) {
            closeSidebar();
        }
        else {
            openSidebar();
        }  
    });

// close sidebar on nav item click
    $('.nav-item').on('click',function() {
        if (window.matchMedia('(max-width: 991px)').matches) {
            togglerClicks += 1;
            closeSidebar();
        }  
    });

// close sidebar on main body content click
    $('#tabs-and-footer').on('click',function() {
        if ($('body').css('overflow-y') == 'hidden') {
            togglerClicks += 1;
            closeSidebar();
        }  
    });

// load design content
    var loadDesignContent = function() {
        $.ajax({
            url: 'json/design.json',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                for (var i=1; i<data.length+1; i++) {
                    $('.design-medium-' + i).append(data[i-1].medium);
                    $('.design-client-' + i).append(data[i-1].client);
                    $('.design-desc-' + i).append(data[i-1].desc);
                    $('.design-thumb-' + i).attr('src',data[i-1].thumb);
                    $('.design-actual-' + i).attr('src',data[i-1].actual);
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
        window.setTimeout(formatOverlays, 100);
    }
    
// format overlay content for design content
    function formatOverlays() {
        var client = $('[class*=design-client]');
        for (var i=1; i<client.length+1; i++) {
            if ($('.design-client-' + i).is(':empty') == false) {
                $('.design-client-' + i).addClass('has-client');
            }
        }
    }

// scroll indicators
    // admissions
        function admissionsIndicator() {
            const progressBar = document.querySelector('#admissions-indicator .progress-bar');
            const admissionsPCT = document.querySelector('#admissions-indicator .pct');
            const totalLength = progressBar.getTotalLength();
            progressBar.style.strokeDasharray = totalLength;
            progressBar.style.strokeDashoffset = totalLength;
            window.addEventListener('scroll', () => {
                setAdmissionsProgress(admissionsPCT, progressBar, totalLength);
            });
        }       
        function setAdmissionsProgress(percentage, progressBar, totalLength) {
            const admissions = document.querySelector('#admissions');
            const admissionsScrollHeight = admissions.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            
            var admissionsOffsetTop = admissions.offsetTop;
            var admissionsPercentage = (scrollTop - admissionsOffsetTop) / admissionsScrollHeight;

            if (admissionsPercentage < 0) {
                admissionsPercentage = 0;
                $('#admissions-indicator').addClass('inactive');
                $('#admissions-indicator').addClass('before');
            } else if (admissionsPercentage > 0 || admissionsPercentage <= 1) {
                $('#admissions-indicator').removeClass('inactive');
                $('#admissions-indicator').removeClass('before');
            }
            if (admissionsPercentage > 1) {
                admissionsPercentage = 1;
                $('#admissions-indicator').addClass('completed');
                $('#admissions-indicator').addClass('inactive');
            } else {
                $('#admissions-indicator').removeClass('completed');
            }
            percentage.innerHTML = Math.round(admissionsPercentage * 100) + '%';
            progressBar.style.strokeDashoffset = totalLength - totalLength * admissionsPercentage;  
        }
        function admissions() {
            $('html, body').animate({
                scrollTop: $('#admissions').offset().top + 1
            }, 'fast');
        }
    // venues
        function venuesIndicator() {
            const progressBar = document.querySelector('#venues-indicator .progress-bar');
            const venuesPCT = document.querySelector('#venues-indicator .pct');
            const totalLength = progressBar.getTotalLength();
            progressBar.style.strokeDasharray = totalLength;
            progressBar.style.strokeDashoffset = totalLength;
            window.addEventListener('scroll', () => {
                setVenuesProgress(venuesPCT, progressBar, totalLength);
            });
        }       
        function setVenuesProgress(percentage, progressBar, totalLength) {
            const venues = document.querySelector('#venues');
            const venuesScrollHeight = venues.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            
            var venuesOffsetTop = venues.offsetTop;
            var venuesPercentage = (scrollTop - venuesOffsetTop) / (venuesScrollHeight - clientHeight);

            if (venuesPercentage < 0) {
                venuesPercentage = 0;
                $('#venues-indicator').addClass('inactive');
                $('#venues-indicator').addClass('before');
            } else if (venuesPercentage > 0 || venuesPercentage <= 1) {
                $('#venues-indicator').removeClass('inactive');
                $('#venues-indicator').removeClass('before');
            }
            if (venuesPercentage > 1) {
                venuesPercentage = 1;
                $('#venues-indicator').addClass('completed');
                $('#venues-indicator').addClass('inactive');
            } else {
                $('#venues-indicator').removeClass('completed');
            }
            percentage.innerHTML = Math.round(venuesPercentage * 100) + '%';
            progressBar.style.strokeDashoffset = totalLength - totalLength * venuesPercentage;  
        }
        function venues() {
            $('html, body').animate({
                scrollTop: $('#venues').offset().top + 1
            }, 'fast');
        }
    // donate
        function donateIndicator() {
            const progressBar = document.querySelector('#donate-indicator .progress-bar');
            const donatePCT = document.querySelector('#donate-indicator .pct');
            const totalLength = progressBar.getTotalLength();
            progressBar.style.strokeDasharray = totalLength;
            progressBar.style.strokeDashoffset = totalLength;
            window.addEventListener('scroll', () => {
                setDonateProgress(donatePCT, progressBar, totalLength);
            });
        }       
        function setDonateProgress(percentage, progressBar, totalLength) {
            const donate = document.querySelector('#donate');
            const donateScrollHeight = donate.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            
            var donateOffsetTop = donate.offsetTop;
            var donatePercentage = (scrollTop - donateOffsetTop) / donateScrollHeight;

            if (donatePercentage < 0) {
                donatePercentage = 0;
                $('#donate-indicator').addClass('inactive');
                $('#donate-indicator').addClass('before');
            } else if (donatePercentage > 0 || donatePercentage <= 1) {
                $('#donate-indicator').removeClass('inactive');
                $('#donate-indicator').removeClass('before');
            }
            if (donatePercentage > 1) {
                donatePercentage = 1;
                $('#donate-indicator').addClass('completed');
                $('#donate-indicator').addClass('inactive');
            } else {
                $('#donate-indicator').removeClass('completed');
            }
            percentage.innerHTML = Math.round(donatePercentage * 100) + '%';
            progressBar.style.strokeDashoffset = totalLength - totalLength * donatePercentage;  
        }
        function donate() {
            $('html, body').animate({
                scrollTop: $('#donate').offset().top + 1
            }, 'fast');
        }
    // what's on
        function whatsonIndicator() {
            const progressBar = document.querySelector('#whatson-indicator .progress-bar');
            const whatsonPCT = document.querySelector('#whatson-indicator .pct');
            const totalLength = progressBar.getTotalLength();
            progressBar.style.strokeDasharray = totalLength;
            progressBar.style.strokeDashoffset = totalLength;
            window.addEventListener('scroll', () => {
                setWhatsonProgress(whatsonPCT, progressBar, totalLength);
            });
        }       
        function setWhatsonProgress(percentage, progressBar, totalLength) {
            const whatson = document.querySelector('#whatson');
            const whatsonScrollHeight = whatson.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            
            var whatsonOffsetTop = whatson.offsetTop;
            var whatsonPercentage = (scrollTop - whatsonOffsetTop) / whatsonScrollHeight;

            if (whatsonPercentage < 0) {
                whatsonPercentage = 0;
                $('#whatson-indicator').addClass('inactive');
                $('#whatson-indicator').addClass('before');
            } else if (whatsonPercentage > 0 || whatsonPercentage <= 1) {
                $('#whatson-indicator').removeClass('inactive');
                $('#whatson-indicator').removeClass('before');
            }
            if (whatsonPercentage > 1) {
                whatsonPercentage = 1;
                $('#whatson-indicator').addClass('completed');
                $('#whatson-indicator').addClass('inactive');
            } else {
                $('#whatson-indicator').removeClass('completed');
            }
            percentage.innerHTML = Math.round(whatsonPercentage * 100) + '%';
            progressBar.style.strokeDashoffset = totalLength - totalLength * whatsonPercentage;  
        }
        function whatson() {
            $('html, body').animate({
                scrollTop: $('#whatson').offset().top + 1
            }, 'fast');
        }
    // venues
        function linkinbioIndicator() {
            const progressBar = document.querySelector('#linkinbio-indicator .progress-bar');
            const linkinbioPCT = document.querySelector('#linkinbio-indicator .pct');
            const totalLength = progressBar.getTotalLength();
            progressBar.style.strokeDasharray = totalLength;
            progressBar.style.strokeDashoffset = totalLength;
            window.addEventListener('scroll', () => {
                setLinkinbioProgress(linkinbioPCT, progressBar, totalLength);
            });
        }       
        function setLinkinbioProgress(percentage, progressBar, totalLength) {
            const linkinbio = document.querySelector('#linkinbio');
            const linkinbioScrollHeight = linkinbio.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            
            var linkinbioOffsetTop = linkinbio.offsetTop;
            var linkinbioPercentage = (scrollTop - linkinbioOffsetTop) / (linkinbioScrollHeight - clientHeight);

            if (linkinbioPercentage < 0) {
                linkinbioPercentage = 0;
                $('#linkinbio-indicator').addClass('inactive');
                $('#linkinbio-indicator').addClass('before');
            } else if (linkinbioPercentage > 0 || linkinbioPercentage <= 1) {
                $('#linkinbio-indicator').removeClass('inactive');
                $('#linkinbio-indicator').removeClass('before');
            }
            if (linkinbioPercentage > 1) {
                linkinbioPercentage = 1;
                $('#linkinbio-indicator').addClass('completed');
                $('#linkinbio-indicator').addClass('inactive');
            } else {
                $('#linkinbio-indicator').removeClass('completed');
            }
            percentage.innerHTML = Math.round(linkinbioPercentage * 100) + '%';
            progressBar.style.strokeDashoffset = totalLength - totalLength * linkinbioPercentage;  
        }
        function linkinbio() {
            $('html, body').animate({
                scrollTop: $('#linkinbio').offset().top + 1
            }, 'fast');
        }
    // activate the above
        function activateCrossIndicators() {
            window.setTimeout(admissionsIndicator, 100);
            window.setTimeout(venuesIndicator, 100);
        }
        function activateOthersIndicators() {
            window.setTimeout(donateIndicator, 100);
            window.setTimeout(whatsonIndicator, 100);
            window.setTimeout(linkinbioIndicator, 100);
        }
        $(window).on('load resize', function() {
            if (window.location.href.indexOf('work-sotacross') > -1) {
                activateCrossIndicators();
            } else {
                activateOthersIndicators();
            }
        });
        $('#work-tab').on('click','#work-sotacross',function() {
            activateCrossIndicators();
        });
        $('#work-items').on('click','#work-sotacross',function() {
            activateCrossIndicators();
        });
        $('#work-tab').on('click','#work-sotaother',function() {
            activateOthersIndicators();
        });
        $('#work-items').on('click','#work-sotaother',function() {
            activateOthersIndicators();
        });
    // toggling between absolute and fixed positioning
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
    
