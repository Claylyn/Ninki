const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});




var copiedHex = ko.observable();
var clipboard = new Clipboard('#clipboardItem');

clipboard.on('success', function(el) {
    console.clear();
    console.info('Action:', el.action);
    console.info('Text:', el.text);
    console.info('Trigger:', el.trigger);
    el.clearSelection();
    
    copiedHex(el.text);
});

///