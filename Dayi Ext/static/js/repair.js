/*
all path:

need repair
dayi.im/teacher/teacherid
dayi.im/weixin/chat/studentid
dayi.im/q/t/teacherid

don't need
dayi.im/q/teacher/teacherid
dayi.im/q/workbench/
dayi.im/stat/teacher/work_list

*/


var hreflist;
var i,maxi;

// change /q/qid or /q/qid/ or /q/qid?from_msg=true--> /q/detail/qid
var qpath=/^\/q\/\d+\/?(\?from_msg=true)?$/;//question path
hreflist=$("[href^='\/q\/']");
maxi=hreflist.length;
for(i=0;i<maxi;i++){
	var href=$(hreflist[i]).attr('href');
	if(!qpath.test(href))
		continue;
	num=(href).match(/\d+/g);
	hreflist[i].href='/q/detail/'+num;
	//console.log(hreflist[i].href);
}

//change /student/sid --> /q/student/sid
var spath=/^\/student\/\d+\/?$/;//student path
hreflist=$("[href^='\/student\/']");
maxi=hreflist.length;
for(i=0;i<maxi;i++){
	var href=$(hreflist[i]).attr('href');
	if(!spath.test(href))
		continue;
	num=(href).match(/\d+/g);
	hreflist[i].href='/q/student/'+num;
	//console.log(hreflist[i].href);
}