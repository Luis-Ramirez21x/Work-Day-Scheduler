var dayDisplayEl= $('#currentDay');
var plannerEl= $('.container');

var date = moment().format('dddd, MMM Do');
$(dayDisplayEl).text(date);
console.log(date);


var currentTime = moment().format('H');

var adjCurrentTime = currentTime - 12;


function createTimeBlocks(){
for(i = 0; i< 9; i++){
    var divEl = $('<div>');
    var hourEL = $('<div>');
    var textEl = $('<input>');
    var saveBtnEl = $('<button>');
    divEl.addClass('row');
    divEl.addClass('time-block')
    hourEL.addClass('hour');
    //textEl.addClass('past');
    
    textEl.attr("id", i);
    textEl.val(localStorage.getItem(i));
    saveBtnEl.addClass('saveBtn').text('SAVE');
    plannerEl.append(divEl);
    divEl.append(hourEL);
    divEl.append(textEl);
    divEl.append(saveBtnEl);

    if(i <4){
    hourEL.text(i+9);
        var hour = parseInt(hourEL.text());
        console.log(hour);
        if(hour < currentTime){
            textEl.addClass('past');
        } else if(hour == currentTime){
            textEl.addClass('present');
        } else{
            textEl.addClass('future');
        }
       
    } else{
        hourEL.text(i-3);
        var hour = parseInt(hourEL.text());
        console.log(hour);
        if(hour < adjCurrentTime){
            textEl.addClass('past');
        } else if(hour == adjCurrentTime){
            textEl.addClass('present');
        } else{
            textEl.addClass('future');
        }    
    }
}
}

createTimeBlocks();
var saveBtn = $('.saveBtn');

saveBtn.on('click', function(event){
    
    var element = event.target;
    var index = element.parentElement.children[1].getAttribute("id");
    
    var userInput = $('#'+index).val();
    console.log(index);
    console.log(userInput);
    localStorage.setItem(index , userInput);
    

})
