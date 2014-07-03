$(function() {
    var wufooUrl = 'https://hudl.wufoo.com/forms/dev-sensei-nomination/def/field13=' + encodeURI(window.location.href);

    var nominateButtonHtml = '<button type="button" class="minibutton nominate-button">Nominate!</button>';
    var nominateSidebarHtml = ' \
                                <div class="discussion-sidebar-item sidebar-nominate"> \
                                    <h3 class="discussion-sidebar-heading">Dev Sensei Nomination</h3>' +
                                    nominateButtonHtml +
                                '</div>';

    var currentUser = $('#user-links').find('.name').text().trim();

    $.get('https://api.github.com/users/' + currentUser, function(user) {
        wufooUrl += '&field1=' + encodeURIComponent(user.email);
    });

    $('.discussion-sidebar').prepend(nominateSidebarHtml);
    $('.timeline-comment:not(.timeline-comment-current-user) .timeline-comment-actions').prepend(nominateButtonHtml);
    $('.nominate-button').click(function() {
        var parents = $(this).parents('.timeline-comment-header');
        if (parents && parents.length) {
            var nominee = parents.first().find('.author').text().trim();

            $.get('https://api.github.com/users/' + nominee, function(user) {
                if (user.email) {
                   wufooUrl += '&field2=' + encodeURIComponent(user.email); 
                }
                
                window.location.assign(wufooUrl);
            });
        } else {
            window.location.assign(wufooUrl);
        }
    });
});