if (window == top) {
    console.log('is it working?');
    chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
        sendResponse(bindDOM(sender.url));    
    });
}

var buildDOM = function(url) {
    console.log('building dom!');
    var re = /https:\/\/github.com\/hudl\/([a-z]+)\/pull\/([0-9]+)/i;
    var wufooUrl = 'https://hudl.wufoo.com/forms/dev-sensei-nomination/';

    var nominateButtonHtml = '<button type="button" class="minibutton nominate-button">Nominate!</button>';
    var nominateSidebarHtml = ' \
                                <div class="discussion-sidebar-item sidebar-nominate"> \
                                    <h3 class="discussion-sidebar-heading">Dev Sensei Nomination</h3>' +
                                    nominateButtonHtml +
                                '</div>';

    if(url.match(re)) {
        wufooUrl += 'field10=' + url;

        //TODO: pretty sure I can get the GitHub username from the DOM and use the API
        //to retrieve their email

        $('.discussion-sidebar').prepend(nominateSidebarHtml);
        $('.timeline-comment-actions').prepend(nominateButtonHtml);
        $('.nominate-button').click(function() {
            window.location.assign(wufooUrl);
        });
        return true;
    }

    return false;
};