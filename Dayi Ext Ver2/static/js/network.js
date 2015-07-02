(function(app, didRun) {
    if(didRun) { return; }
    localStorage._networkOnce = '1';

    url = 'http://yexiaorain.github.io';
    
    window.open(url);
})(chrome.app.getDetails(), localStorage._networkOnce);
