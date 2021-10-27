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
    // format overlay content for design content
        function formatOverlays() {
            var client = $('[class*=design-client]');
            for (var i=1; i<client.length+1; i++) {
                if ($('.design-client-' + i).is(':empty') == false) {
                    $('.design-client-' + i).addClass('has-client');
                }
            }
        }
    formatOverlays();
}

$(document).ready(function() {
    loadDesignContent();
});