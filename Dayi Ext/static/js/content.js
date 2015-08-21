/*
//grab if exist
var i;
var claimlist=$('.claim_question_btn');
var claimlen=claimlist.length;
for(i=0;i<claimlen;i++){
	claimlist[i].click();
	$('#answer_time_20')[0].click();
	$('#sure_claim_btn')[0].click();
}
//or
//grab if exist
var claimlist=$('.claim_question_btn');
if(claimlist.length!=0){
	claimlist[0].click();
	$('#answer_time_20')[0].click();
	$('#sure_claim_btn')[0].click();
}
*/

//grab by mousemove
var i;
var claimlist=$('.claim_question_btn');
var claimlen=claimlist.length;
for(i=0;i<claimlen;i++){
	claimlist[i].onmouseover=function(){
		this.click();
		$('#answer_time_20')[0].click();
		$('#sure_claim_btn')[0].click();
		/*
		var timelist=$('.answer_time');
		var tlen=timelist.length;
		for(j=0;j<tlen;j++){
			timelist[j].onmouseover=function(){
				this.click();
			}
		}
		$('#sure_claim_btn')[0].onmouseover=function(){
			this.click();
		}
		*/
	}
}
//grab by keydown
//1~9:49~57:0~8
document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e){
		var keynum=e.keyCode;
		if(keynum<49 || keynum>57)
			return;
		}
		keynum-=49;
		console.log(keynum);
		console.log("keydown:"+keynum);
		var quelist=$('.claim_question_btn');
		var quenum=quelist.length;
		if(keynum>=quenum)
			return ;
		//console.log("grabquestion:"+keynum);
		quelist[keynum].click();
		$('#answer_time_20')[0].click();
		$('#sure_claim_btn')[0].click();
};

//appoint
var appointlist=$('.accept_appoint_btn');
var appointlen=appointlist.length;
for(i=0;i<appointlen;i++){
	appointlist[i].onmouseover=function(){
		this.click();
		$('#answer_time_15')[0].click();
		$('#sure_claim_btn')[0].click();
	}
}
//refuse
var appointrefuselist=$('.refuse_appoint_btn');
var appointrefuselen=appointlist.length;
for(i=0;i<appointrefuselen;i++){
	appointrefuselist[i].onmouseover=function(){
		this.click();
		$('#refuse_reason_content').val("谢谢你的预约，但暂时有事不方便，其他老师会解答。");
		$('#sure_refuse_btn').click();
	}
}

//restrict picture height
$('.q_main [data-target]').css('max-height','400px');

//change color with different price
var questionblocklist = $('.question_block_show');
var qbllen = questionblocklist.length;
for (i = 0; i < qbllen; i++) {
    var eachblock = questionblocklist[i];
    var money = $(eachblock).find('.answer_fee_span').text();
    var colorlist = ['#225599', 'black', '#EF8F00', '#FD1400', '#00EF2E', '#006B15', 'red', 'red', 'red', 'red'];
    var colorid = 0;
    if (money == '1.5元') {
        colorid = 1;
    } else if (money == '2.0元' || money == '2元') {//bug???
        colorid = 2;
    } else if (money == '2.5元') {
        colorid = 3;
    } else if (money == '3.0元' || money == '3元') {
        colorid = 4;
    } else if (money == '3.5元') {
        colorid = 5;
    } else if (money == '4.0元' || money == '4元') {
        colorid = 6;
    } else if (money == '4.5元') {
        colorid = 7;
    } else if (money == '5.0元' || money == '5元') {
        colorid = 8;
    } else if (money == '5.5元') {
        colorid = 9;
    }
    $(eachblock).find('.question_id_show').css('color', colorlist[colorid]);
	//$(eachblock).find('img').remove();
    //console.log(colorid + '+' + money);
}

/*
//var questionblocklist = $('.question_block_show');
$(questionblocklist[0]).find('.bottom_btn');
*/

//haven't add
//$('#response_evaluation_content').val('加油～');
//$('#response_evaluation_btn').click();
//http://dayi.im/q/detail/


/*console.log(22222222);
window.addEventListener('keydown',
function(event) {
    console.log(event.keyCode + "here");
    if (event.keyCode === 27) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.keyCode + "here");
        windows.timers.toogle();//wrong here ! how to send message
        //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //chrome.tabs.getSelected(function(tab) {
        //    console.log("toogle" + tabs.id);
        //    timers.toogle(tabs.id);
        //});
    }
});
console.log(22333332);*/


/*
ajax---have low effect

var refresh=0;
function my_refresh_new_questions(){
	var new_questions_count = parseInt($('#new_questions_count').html());
	var current_time = $('#value_stack').attr('current_time');
	Dajaxice.dayi.question.workbench_get_new_questions(get_new_questions_callback, {'current_time':current_time, 'subject':2, 'category':1});
}
function f(){
	my_refresh_new_questions();
	if(refresh==1){
		setTimeout(f,1000);
	}
	console.log('refresh at '+Date().toLocaleString());
}
function s_r(){//start refresh
	refresh=1;
	f();
}
function s(){
	refresh=0;
}
s_r();

workbench_get_questions_status: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.workbench_get_questions_status', 'POST', callback_function, argv, custom_settings);
    },


var new_questions_count = parseInt($('#new_questions_count').html());
var current_time = $('#value_stack').attr('current_time');
Dajaxice.dayi.question.workbench_get_new_questions(get_new_questions_callback, {'current_time':current_time, 'subject':2, 'category':1});
*/
