$(document).ready(function(){
//  var arr = [10,'-',1];
//  var so = eval(arr.join(' '));
//  console.log(so);
console.log($('#screen').html().length);
  var zeroSet = $('<div class="sero-set">'),
      firstSet = $('<div class="first-set">'),
      secondSet = $('<div class="second-set">'),
      thirdSet = $('<div class="third-set">');

  var equal = $('<div class="btn btn-warning  tools" id="result">=</div>'),
      plus = $('<div class="btn btn-danger tools" id="plus">+</div>'),
      mins = $('<div class="btn btn-primary tools" id="mins">-</div>'),
      mulitplication = $('<div class="btn btn-success tools" id="multiple">*</div>'),
      division = $('<div class="btn btn-info tools" id="division">/</div>'),
      dot = $('<div class="btn btn-default tools" id="dot">.</div>'),
      zeroMins = $('<div class="btn btn-default tools" id="zero-min-plus">+ / -</div>');
      
  
    for (var i = 0; i < 10; i++){
      
    if (i == 0){
      var iNumber0 = $('<div class="btn btn-default number" id="'+i+'">'+i+'</div>');
      $(zeroSet).append(zeroMins, iNumber0, dot, plus);
    }
    if(i > 0 && i < 4){
//      console.log(i);
      var iNumber1 = $('<div class="btn btn-default number" id="'+i+'">'+i+'</div>');
      $(firstSet).append(iNumber1, mins);

    }
    if(i >= 4 && i < 7){
//      console.log(i);
      var iNumber2 = $('<div class="btn btn-default number" id="'+i+'">'+i+'</div>');
      $(secondSet).append(iNumber2, mulitplication);
    }
    if(i >= 7 && i < 10 ){
//      console.log(i);
      var iNumber3 = $('<div class="btn btn-default number" id="'+i+'">'+i+'</div>');
      $(thirdSet).append(iNumber3, division);
    }
      
    $('#numbers').append(thirdSet, secondSet, firstSet, zeroSet);
    $('#result-place').after(equal);
      
      
    $('#' + i).click(function() {
      
      
      var vas = '';
      var iNumberValue = $(this).html();

      $('#screen').append(iNumberValue);
      $('input').val(iNumberValue);
      vas = vas + $('#screen').html();
      console.log(vas);
      console.log($('#screen').html());
      console.log($('#screen').html().length);
    });
  }

  

  function addTool(e) {
    
    if($('#screen').text().length <= 0) {
      console.log('no');

    } else {
      $('#screen').append(' ' + $(this).html() + ' ');
      $('input').val($(this).html());
    }
  } // math operations function
  

  $('#division').click(addTool); // division

  $('#multiple').click(addTool); // mulitplication
  
  $('#mins').click(addTool); //  mins
  
  $('#plus').click(addTool); // plus
  
  
  $('#result').on('click', function() {
    
//    if ($('#screen').text() == 0){
//      alert('Nothing to calc');
//      
//    } else {
      var result = $('#screen').html();

      console.log(eval(result));

      
      var finalResult = eval(result);
      $('#result-place').text(finalResult);
//    }
  });

});