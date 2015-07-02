$(function() {
    var ext = chrome.extension.getBackgroundPage(),
        swapButtons = function() {
            $('#start').toggle();
            $('#stop').toggle();
        };

        //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.getSelected(function(tab){
        var timer = ext.timers.get(tab.id);
        if(timer) {
            swapButtons();
            var min = timer.interval / (60 * 1000);
            $('#minutes').val(Math.floor(min));
			//console.log(min - Math.floor(min) );
            $('#seconds').val(Math.round((min - Math.floor(min)) * 60));
        }
    });
    
    $('#start').on('click', function() {
        //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.getSelected(function(tab){
            var interval = ($('#minutes').val() * 60 * 1000) + ($('#seconds').val() * 1000);
            ext.timers.set(tab, interval);
        });
        swapButtons();
    });
    
    $('#stop').on('click', function() {
        chrome.tabs.getSelected(function(tab){
        //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            ext.timers.remove(tab.id,0);
        });
        swapButtons();
    });
    
    setTimeout(function() {
        $('#seconds').focus()[0].select();
    }, 1);
});
