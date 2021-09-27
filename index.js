var dayDisplayEl= $('#currentDay');
var plannerEl= $('.container');

var date = moment().format('dddd, MMM Do');
$(dayDisplayEl).text(date);
console.log(date);


var currentTime = moment().format('H');
//console.log(currentTime);
var adjCurrentTime = currentTime - 12;
//console.log(adjCurrentTime);



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
    textEl.attr("data-index", i);
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




function saveToLocal(){
    console.log(date);
}

createTimeBlocks();
var saveBtn = $('.saveBtn');
plannerEl.on('click', function(){
    var id = $(this).attr('data-index');
    console.log(id);
    
    


    console.log(element);
})
/*
var element = event.target;
if(element.matches('button') === true){
    var index = element.parentElement.getAttribute("data-index");
    console.log(index);
}*/