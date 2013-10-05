$(document).ready(function(){

  var score = 0;

  function incorrect () {
      $result.text('Incorrect!');
      $result.addClass('result-incorrect');
  }

  function correct (event) {
      $result.text('Correct!');
      $result.addClass('result-correct');
  }

  $('.options li').click(function (event) {
    var $eventTarget = $(event.target);
    $eventTarget.append('<span class="checked">x</span>');
    $eventTarget.parent().find('li').off('click');
  });

  $('[data-q1-opt1]')
    .on('click', function(event){
      $result = $('[data-result-1]');
      correct(event);
      score = score + 1;
  });

  $('[data-q1-opt2], [data-q1-opt3], [data-q1-opt4]')
    .on('click', function () {
      $result = $('[data-result-1]');
      incorrect();
  });

  $('[data-q2-opt4]')
    .on('click', function(){
      $result = $('[data-result-2]');
      correct();
      score = score + 1;
  });

  $('[data-q2-opt2], [data-q2-opt3], [data-q2-opt1]')
    .on('click', function () {
      $result = $('[data-result-2]');
      incorrect();
  });

  $('[data-q3-opt2]')
    .on('click', function(){
      $result = $('[data-result-3]');
      correct();
      score = score + 1;
  });

  $('[data-q3-opt1], [data-q3-opt3], [data-q3-opt4]')
    .on('click', function () {
      $result = $('[data-result-3]');
      incorrect();
  });

  $('[data-q4-opt1]')
    .on('click', function(){
      $result = $('[data-result-4]');
      correct();
      score = score + 1;
  });

  $('[data-q4-opt2], [data-q4-opt3], [data-q4-opt4]')
    .on('click', function () {
      $result = $('[data-result-4]');
      incorrect();
  });

  $('[data-q5-opt4]')
    .on('click', function(){
      $result = $('[data-result-5]');
      correct();
      score = score + 1;
  });

  $('[data-q5-opt2], [data-q5-opt3], [data-q5-opt1]')
    .on('click', function () {
      $result = $('[data-result-5]');
      incorrect();
  });

  $('[data-score-button]')
    .on('click', function(){
      $('[data-score-button]').text(score + " out of 5" );
  });
});


// NOTES:

  // var score = 0;
  //     // $result = $('[data-result]'); //caching it for speed

//-------------------------------------------
  // function correct (event) {
  //     // var $localResult = $(event.target).parent().parent().find('[data-result]');
  //     // $localResult.text('Correct!');
  //     // $localResult.addClass('result-correct');
  //     $result.text('Correct!');
  //     $result.addClass('result-correct');
  // }
//-------------------------------------------

 //$('[data-q1-opt2], [data-q1-opt3], [data-q1-opt4]')
    // .on('click', function(){
      // way one: append a class. the trouble with this is that it keeps adding with each click
      // $( '.question' ).append( "<div class='test'>wrong</div>" );

      // way two: add the text and class that will pop up on the screen. but copying this code over in each option is redundant.
      // $('.result').text('wrong');
      // $('.result').addClass('result-pretty');

  // });
      // way three: make a function up at the top and call it here. wrong is the function
    //.on('click', function () {
  //     $result = $('[data-result-1]');
  //     incorrect();
  // });

//-------------------------------------------

 // $('.options li').click(function (event) {
 //    var $eventTarget = $(event.target);
 //    // $eventTarget.parent().find('li').find('.checked').remove();
        // this above makes it so that you can click one box after another in the same question (change your answer)
 //    $eventTarget.append('<span class="checked">x</span>');
 //    $eventTarget.parent().find('li').off();
 //  });