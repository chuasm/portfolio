$(document).ready(function() {

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
        admissionsIndicator();

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
        venuesIndicator();

});