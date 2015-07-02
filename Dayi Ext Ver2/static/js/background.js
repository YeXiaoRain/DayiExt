(function() {
    var _timers = {};
    var timers = {
        get: function(id) {
            return _timers[id] || false;
        },
        set: function(tab, interval) {
            var id = tab.id;
            
            (_timers[id]) && timers.remove(tab.id,1);
            _timers[id] = {
                tab: tab,
                nextRefresh: (new Date).getTime() + interval,
                interval: interval,
                st:1,
                timer: timers.start(id, interval)
            };
        },
        remove:  function(id,dead) {
            if(_timers[id]) {
                _timers[id].st=0;
                clearInterval(_timers[id].timer);
                if(!dead)
                    chrome.browserAction.setBadgeText({tabId: id, text: ''});
                else{
                    delete _timers[id];
                }
            }
        },
        start: function(id, interval) {
            if(_timers[id]){
                if(_timers[id].st==1)
                    return null;
                _timers[id].st=1;
            }
            return setInterval(function() {
                if(_timers[id] && (new Date).getTime() >= _timers[id].nextRefresh) {
                    chrome.tabs.reload(id, function() {
                        _timers[id].nextRefresh = (new Date).getTime() + _timers[id].interval + 1000;
                    });   
                } else if(_timers[id]) {
                    var timeLeft = moment(_timers[id].nextRefresh - (new Date).getTime());
                    //chrome.browserAction.setBadgeText({tabId: id, text: '' + timeLeft.format('m:ss')});
                    chrome.browserAction.setBadgeText({tabId: id, text: 'work.'});
                } else {
                    timers.remove(id,1);
                }
            }, 333);
        },
        toogle: function(tab){
		id=tab.id;
                console.log("toogle" + id);
	        if(_timers[id]){
	            if(_timers[id].st==0){
	                timers.set(tab,0);
	            }else{
	                timers.remove(id);
	            }
	        }else{
	            timers.set(tab,0);
	        }
        }
    };
    
    // Set timers on the window object so we can access it from the popdown
    window.timers = timers;
    
    chrome.tabs.onRemoved.addListener(function(id,removeinfo){
        //console.log('onRemoved:'+id);
        timers.remove(id,1);
    });
    chrome.browserAction.onClicked.addListener(function(tab) {
        timers.toogle(tab);
    })
})();
