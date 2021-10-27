$(document).ready(function() {

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
        donateIndicator();

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
        whatsonIndicator();

    // link in bio
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
        linkinbioIndicator();

});