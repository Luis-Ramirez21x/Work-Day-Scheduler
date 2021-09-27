var dayDisplayEl= $('#currentDay');
var plannerEl= $('.container');
var hourShown =9;

var date = moment().format('dddd, MMM Do');
$(dayDisplayEl).text(date);
console.log(date);

function createTimeBlocks(){
for(i = 0; i< 9; i++){
    var divEl = $('<div>');
    var btnEl = $('<button>');
    var hourEL = $('<div>');
    var textEl = $('<div>');
    var saveBtnEl = $('<div>');
    divEl.addClass('row');
    divEl.addClass('time-block')
    hourEL.addClass('hour');
    textEl.addClass('past');
    saveBtnEl.addClass('saveBtn');
    plannerEl.append(divEl);
    divEl.append(hourEL);
    divEl.append(textEl);
    divEl.append(saveBtnEl);

    if(i <4){
    hourEL.text(i+9);
    } else{
        hourEL.text(i-3);
    }

    
}
}



createTimeBlocks();