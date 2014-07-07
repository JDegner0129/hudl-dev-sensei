hudl-dev-sensei
===============

This is a Chrome extension for Hudl's dev sensei award nominations. It uses the [GitHub Users API](https://developer.github.com/v3/users/)
to fill in the email of the currently logged in GitHub user, as well as the email of the user receiving a nomination, provided a comment
button is clicked. Because of the nature of the API, only accounts with publicly visible email addresses will have their email information
filled in.

### Installing
To install this extension and check it out yourself, simply download the [hudl-dev-sensei.crx](https://github.com/JDegner0129/hudl-dev-sensei/blob/master/hudl-dev-sensei.crx)
file and drag it into your [extensions page](chrome://extensions). *NOTE: Simply downloading the file and hitting 'Install' will not work.* Once the extension is installed, 
go to any Hudl pull request and check it out! You should see a "Nominate!" button in the pull request's sidebar, as well as on every comment in the pull request.

### Developing
If you see any room for improvement for this extension, check out the [tutorials and documentation](https://developer.chrome.com/extensions/overview) for Chrome Extensions
and feel free to go to town.