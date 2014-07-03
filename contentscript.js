$(function() {
    var wufooUrl = 'https://hudl.wufoo.com/forms/dev-sensei-nomination/def/field13=' + encodeURI(window.location.href);
    var usersApiUrl = 'https://api.github.com/users/'

    var nominateButtonHtml = '<button type="button" class="minibutton nominate-button">Nominate!</button>';
    var nominateSidebarHtml = ' \
                                <div class="discussion-sidebar-item sidebar-nominate"> \
                                    <h3 class="discussion-sidebar-heading">Dev Sensei Nomination</h3>' +
                                    nominateButtonHtml +
                                '</div>';

    var currentUser = $('#user-links').find('.name').text().trim();

    $.get(usersApiUrl + currentUser, function(user) {
        wufooUrl += '&field1=' + encodeURIComponent(user.email);
    });

    $('.discussion-sidebar').prepend(nominateSidebarHtml);
    $('.timeline-comment:not(.timeline-comment-current-user):not(.timeline-comment-) .timeline-comment-actions').prepend(nominateButtonHtml);
    $('.nominate-button').click(function() {
        var parents = $(this).parents('.timeline-comment-header');
        if (parents && parents.length) {
            var nominee = parents.first().find('.author').text().trim();

            $.get(usersApiUrl + nominee, function(user) {
                if (user.email) {
                   wufooUrl += '&field2=' + encodeURIComponent(user.email); 
                }
            }).always(function() {
                window.location.assign(wufooUrl);
            });
        } else {
            window.location.assign(wufooUrl);
        }
    });
});