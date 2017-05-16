console.log('testing connect four file');

$(function() {

// Set variables for elements
  var $board = $('#board'); // getting the board id

//  var $clearButton = $('#Clear-board'); // getting the Clear-board id

  var $nextTurn = $('p'); // getting p tag from the html

  var toggle = true; // counter

  var $circleClass = $('.circle'); // getting the circle class


// Switch turns
  var toggleFunction = function(column) {
//    console.log('testing toggleFunction'); togglefunction tester

    if (toggle == true) {
      $(column).addClass('teal-token'); // if toggle is true, adds class of teal-token to $newBoardDiv created below
      $(column).removeClass('shadow'); // removes shadow class
      $nextTurn.text("It's Blue's turn"); // when teal-token is added to the div, p tag will change to blue's turn
      $nextTurn.css('color', '#0054A6'); // changes the color of the p tag to blue
    } 
      else {
      $(column).addClass('blue-token'); // if toggle is false, adds the class of blue-token to the $newBoardDiv created below
      $(column).removeClass('shadow'); // removes shadow class
      $nextTurn.text("It's Teal's turn"); // when blue-token is added to div, p tag will change to teal's turn
      $nextTurn.css('color', '#1cbbba'); // changes color of p tag to teal
    };
      toggle = !toggle; // alternates turns between teal and blue

      winsChecker(); // calls the winsChecker function to see who won

  };

// Creates the board
  var createBoard = function() {
    for (var i = 0; i < 42; i++) { // 42 white circles
      var $newBoardDiv = $('<div>'); // creates a new div that goes below the div board
        $newBoardDiv.addClass('circle'); // adds class circle to the new board div
        $newBoardDiv.addClass('shadow'); // adds class shadow to the new board div
        $newBoardDiv.attr('id', i); // adds ids with numbers to the circles
        $board.append($newBoardDiv); // appends $newBoardDiv inside the board div
      };
  }; 

  createBoard(); 

//  2. Making arrays for each column
  var column1 = [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')];
  var column2 = [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')];
  var column3 = [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')];
  var column4 = [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')];
  var column5 = [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')];
  var column6 = [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#5')];
  var column7 = [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#6')];


// gets 'play here' buttons from html
  var $button1Id = $('#button1');
  var $button2Id = $('#button2');
  var $button3Id = $('#button3');
  var $button4Id = $('#button4');
  var $button5Id = $('#button5');
  var $button6Id = $('#button6');
  var $button7Id = $('#button7');

// creates function to make 'play here' buttons clickable
  var clickButtons = function () {

    $button1Id.on('click', function(){ // for loop runs if button is clicked
      for (var i = 0; i < column1.length; i++) {
        if ($(column1[i]).hasClass('teal-token') || column1[i].hasClass('blue-token')) { // if it has teal or blue token, do nothing
        } else { // else, run toggleFunction which switches from teal/blue token
          toggleFunction(column1[i]); // makes token start teal b/c toggle is set to true
          break; // stops column from being filled completely
        }
      }
    }); 

    $button2Id.on('click', function(){
      for (var i = 0; i < column2.length; i++) {
        if (column2[i].hasClass('teal-token') || column2[i].hasClass('blue-token')) {
        } else {
          toggleFunction(column2[i]);
          break;
        }
      }
    }); 

    $button3Id.on('click', function(){
      for (var i = 0; i < column3.length; i++) {
        if (column3[i].hasClass('teal-token') || column3[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column3[i]);
          break;
        }
      }
    }); 

    $button4Id.on('click', function(){
      for (var i = 0; i < column4.length; i++) {
        if (column4[i].hasClass('teal-token') || column4[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column4[i]);
          break;
        }
      }
    }); 

    $button5Id.on('click', function(){
      for (var i = 0; i < column5.length; i++) {
        if (column5[i].hasClass('teal-token') || column5[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column5[i]);
          break;
        }
      }
    }); 

    $button6Id.on('click', function(){
      for (var i = 0; i < column6.length; i++) {
        if (column6[i].hasClass('teal-token') || column6[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column6[i]);
          break;
        }
      }
    }); 

    $button7Id.on('click', function(){
      for (var i = 0; i < column7.length; i++) {
        if (column7[i].hasClass('teal-token') || column7[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column7[i]);
          break;
        }
      }
    }); 

  }; 

  clickButtons(); // calls clickButtons function so user can click 'play here' buttons when page loads


// 4. WIN conditions!
var winsChecker = function() {
  // horizontal row #1
  if ($('#35').hasClass('teal-token') && $('#36').hasClass('teal-token') && $('#37').hasClass('teal-token') && $('#38').hasClass('teal-token') ||
      $('#36').hasClass('teal-token') && $('#37').hasClass('teal-token') && $('#38').hasClass('teal-token') && $('#39').hasClass('teal-token') ||
      $('#37').hasClass('teal-token') && $('#38').hasClass('teal-token') && $('#39').hasClass('teal-token') && $('#40').hasClass('teal-token') ||
      $('#38').hasClass('teal-token') && $('#39').hasClass('teal-token') && $('#40').hasClass('teal-token') && $('#41').hasClass('teal-token') ||
      // horizontal row #2
      $('#28').hasClass('teal-token') && $('#29').hasClass('teal-token') && $('#30').hasClass('teal-token') && $('#31').hasClass('teal-token') ||
      $('#29').hasClass('teal-token') && $('#30').hasClass('teal-token') && $('#31').hasClass('teal-token') && $('#32').hasClass('teal-token') ||
      $('#30').hasClass('teal-token') && $('#31').hasClass('teal-token') && $('#32').hasClass('teal-token') && $('#33').hasClass('teal-token') ||
      $('#31').hasClass('teal-token') && $('#32').hasClass('teal-token') && $('#33').hasClass('teal-token') && $('#34').hasClass('teal-token') ||
      // horizontal row #3
      $('#21').hasClass('teal-token') && $('#22').hasClass('teal-token') && $('#23').hasClass('teal-token') && $('#24').hasClass('teal-token') ||
      $('#22').hasClass('teal-token') && $('#23').hasClass('teal-token') && $('#24').hasClass('teal-token') && $('#25').hasClass('teal-token') ||
      $('#23').hasClass('teal-token') && $('#24').hasClass('teal-token') && $('#25').hasClass('teal-token') && $('#26').hasClass('teal-token') ||
      $('#24').hasClass('teal-token') && $('#25').hasClass('teal-token') && $('#26').hasClass('teal-token') && $('#27').hasClass('teal-token') ||
      // horizontal row #4
      $('#14').hasClass('teal-token') && $('#15').hasClass('teal-token') && $('#16').hasClass('teal-token') && $('#17').hasClass('teal-token') ||
      $('#15').hasClass('teal-token') && $('#16').hasClass('teal-token') && $('#17').hasClass('teal-token') && $('#18').hasClass('teal-token') ||
      $('#16').hasClass('teal-token') && $('#17').hasClass('teal-token') && $('#18').hasClass('teal-token') && $('#19').hasClass('teal-token') ||
      $('#17').hasClass('teal-token') && $('#18').hasClass('teal-token') && $('#19').hasClass('teal-token') && $('#20').hasClass('teal-token') ||
      // horizontal row #5
      $('#7').hasClass('teal-token') && $('#8').hasClass('teal-token') && $('#9').hasClass('teal-token') && $('#10').hasClass('teal-token') ||
      $('#8').hasClass('teal-token') && $('#9').hasClass('teal-token') && $('#10').hasClass('teal-token') && $('#11').hasClass('teal-token') ||
      $('#9').hasClass('teal-token') && $('#10').hasClass('teal-token') && $('#11').hasClass('teal-token') && $('#12').hasClass('teal-token') ||
      $('#10').hasClass('teal-token') && $('#11').hasClass('teal-token') && $('#12').hasClass('teal-token') && $('#13').hasClass('teal-token') ||
      // horizontal row #6
      $('#0').hasClass('teal-token') && $('#1').hasClass('teal-token') && $('#2').hasClass('teal-token') && $('#3').hasClass('teal-token') ||
      $('#1').hasClass('teal-token') && $('#2').hasClass('teal-token') && $('#3').hasClass('teal-token') && $('#4').hasClass('teal-token') ||
      $('#2').hasClass('teal-token') && $('#3').hasClass('teal-token') && $('#4').hasClass('teal-token') && $('#5').hasClass('teal-token') ||
      $('#3').hasClass('teal-token') && $('#4').hasClass('teal-token') && $('#5').hasClass('teal-token') && $('#6').hasClass('teal-token') ||
      // vertical column #1
      $('#35').hasClass('teal-token') && $('#28').hasClass('teal-token') && $('#21').hasClass('teal-token') && $('#14').hasClass('teal-token') ||
      $('#28').hasClass('teal-token') && $('#21').hasClass('teal-token') && $('#14').hasClass('teal-token') && $('#7').hasClass('teal-token') ||
      $('#21').hasClass('teal-token') && $('#14').hasClass('teal-token') && $('#7').hasClass('teal-token') && $('#0').hasClass('teal-token') ||
      // vertical column #2
      $('#36').hasClass('teal-token') && $('#29').hasClass('teal-token') && $('#22').hasClass('teal-token') && $('#15').hasClass('teal-token') ||
      $('#29').hasClass('teal-token') && $('#22').hasClass('teal-token') && $('#15').hasClass('teal-token') && $('#8').hasClass('teal-token') ||
      $('#22').hasClass('teal-token') && $('#15').hasClass('teal-token') && $('#8').hasClass('teal-token') && $('#1').hasClass('teal-token') ||
      // vertical column #3
      $('#37').hasClass('teal-token') && $('#30').hasClass('teal-token') && $('#23').hasClass('teal-token') && $('#16').hasClass('teal-token') ||
      $('#30').hasClass('teal-token') && $('#23').hasClass('teal-token') && $('#16').hasClass('teal-token') && $('#9').hasClass('teal-token') ||
      $('#23').hasClass('teal-token') && $('#16').hasClass('teal-token') && $('#9').hasClass('teal-token') && $('#2').hasClass('teal-token') ||
      // vertical column #4
      $('#38').hasClass('teal-token') && $('#31').hasClass('teal-token') && $('#24').hasClass('teal-token') && $('#17').hasClass('teal-token') ||
      $('#31').hasClass('teal-token') && $('#24').hasClass('teal-token') && $('#17').hasClass('teal-token') && $('#10').hasClass('teal-token') ||
      $('#24').hasClass('teal-token') && $('#17').hasClass('teal-token') && $('#10').hasClass('teal-token') && $('#3').hasClass('teal-token') ||
      // vertical column #5
      $('#39').hasClass('teal-token') && $('#32').hasClass('teal-token') && $('#25').hasClass('teal-token') && $('#18').hasClass('teal-token') ||
      $('#32').hasClass('teal-token') && $('#25').hasClass('teal-token') && $('#18').hasClass('teal-token') && $('#11').hasClass('teal-token') ||
      $('#25').hasClass('teal-token') && $('#18').hasClass('teal-token') && $('#11').hasClass('teal-token') && $('#4').hasClass('teal-token') ||
      // vertical column #6
      $('#40').hasClass('teal-token') && $('#33').hasClass('teal-token') && $('#26').hasClass('teal-token') && $('#19').hasClass('teal-token') ||
      $('#33').hasClass('teal-token') && $('#26').hasClass('teal-token') && $('#19').hasClass('teal-token') && $('#12').hasClass('teal-token') ||
      $('#26').hasClass('teal-token') && $('#19').hasClass('teal-token') && $('#12').hasClass('teal-token') && $('#5').hasClass('teal-token') ||
      // vertical column #7
      $('#41').hasClass('teal-token') && $('#34').hasClass('teal-token') && $('#27').hasClass('teal-token') && $('#20').hasClass('teal-token') ||
      $('#34').hasClass('teal-token') && $('#27').hasClass('teal-token') && $('#20').hasClass('teal-token') && $('#13').hasClass('teal-token') ||
      $('#27').hasClass('teal-token') && $('#20').hasClass('teal-token') && $('#13').hasClass('teal-token') && $('#6').hasClass('teal-token') ||
      // diagonal towards the right
      $('#21').hasClass('teal-token') && $('#15').hasClass('teal-token') && $('#9').hasClass('teal-token') && $('#3').hasClass('teal-token') ||
      $('#28').hasClass('teal-token') && $('#22').hasClass('teal-token') && $('#16').hasClass('teal-token') && $('#10').hasClass('teal-token') ||
      $('#22').hasClass('teal-token') && $('#16').hasClass('teal-token') && $('#10').hasClass('teal-token') && $('#4').hasClass('teal-token') ||
      $('#35').hasClass('teal-token') && $('#29').hasClass('teal-token') && $('#23').hasClass('teal-token') && $('#17').hasClass('teal-token') ||
      $('#29').hasClass('teal-token') && $('#23').hasClass('teal-token') && $('#17').hasClass('teal-token') && $('#11').hasClass('teal-token') ||
      $('#23').hasClass('teal-token') && $('#17').hasClass('teal-token') && $('#11').hasClass('teal-token') && $('#5').hasClass('teal-token') ||
      $('#36').hasClass('teal-token') && $('#30').hasClass('teal-token') && $('#24').hasClass('teal-token') && $('#18').hasClass('teal-token') ||
      $('#30').hasClass('teal-token') && $('#24').hasClass('teal-token') && $('#18').hasClass('teal-token') && $('#12').hasClass('teal-token') ||
      $('#24').hasClass('teal-token') && $('#18').hasClass('teal-token') && $('#12').hasClass('teal-token') && $('#6').hasClass('teal-token') ||
      $('#37').hasClass('teal-token') && $('#31').hasClass('teal-token') && $('#25').hasClass('teal-token') && $('#19').hasClass('teal-token') ||
      $('#31').hasClass('teal-token') && $('#25').hasClass('teal-token') && $('#19').hasClass('teal-token') && $('#13').hasClass('teal-token') ||
      $('#38').hasClass('teal-token') && $('#32').hasClass('teal-token') && $('#26').hasClass('teal-token') && $('#20').hasClass('teal-token') ||
      // diagonal towards the left
      $('#38').hasClass('teal-token') && $('#30').hasClass('teal-token') && $('#22').hasClass('teal-token') && $('#14').hasClass('teal-token') ||
      $('#39').hasClass('teal-token') && $('#31').hasClass('teal-token') && $('#23').hasClass('teal-token') && $('#15').hasClass('teal-token') ||
      $('#31').hasClass('teal-token') && $('#23').hasClass('teal-token') && $('#15').hasClass('teal-token') && $('#7').hasClass('teal-token') ||
      $('#40').hasClass('teal-token') && $('#32').hasClass('teal-token') && $('#24').hasClass('teal-token') && $('#16').hasClass('teal-token') ||
      $('#32').hasClass('teal-token') && $('#24').hasClass('teal-token') && $('#16').hasClass('teal-token') && $('#8').hasClass('teal-token') ||
      $('#24').hasClass('teal-token') && $('#16').hasClass('teal-token') && $('#8').hasClass('teal-token') && $('#0').hasClass('teal-token') ||
      $('#41').hasClass('teal-token') && $('#33').hasClass('teal-token') && $('#25').hasClass('teal-token') && $('#17').hasClass('teal-token') ||
      $('#33').hasClass('teal-token') && $('#25').hasClass('teal-token') && $('#17').hasClass('teal-token') && $('#9').hasClass('teal-token') ||
      $('#25').hasClass('teal-token') && $('#17').hasClass('teal-token') && $('#9').hasClass('teal-token') && $('#1').hasClass('teal-token') ||
      $('#34').hasClass('teal-token') && $('#26').hasClass('teal-token') && $('#18').hasClass('teal-token') && $('#10').hasClass('teal-token') ||
      $('#26').hasClass('teal-token') && $('#18').hasClass('teal-token') && $('#10').hasClass('teal-token') && $('#2').hasClass('teal-token') ||
      $('#27').hasClass('teal-token') && $('#19').hasClass('teal-token') && $('#11').hasClass('teal-token') && $('#3').hasClass('teal-token')) {
          $nextTurn.text("Teal Wins!");
          $nextTurn.css('color', 'white');
          $nextTurn.addClass('teal_wins');

  } else if (
      // horizontal row #1
      $('#35').hasClass('blue-token') && $('#36').hasClass('blue-token') && $('#37').hasClass('blue-token') && $('#38').hasClass('blue-token') ||
      $('#36').hasClass('blue-token') && $('#37').hasClass('blue-token') && $('#38').hasClass('blue-token') && $('#39').hasClass('blue-token') ||
      $('#37').hasClass('blue-token') && $('#38').hasClass('blue-token') && $('#39').hasClass('blue-token') && $('#40').hasClass('blue-token') ||
      $('#38').hasClass('blue-token') && $('#39').hasClass('blue-token') && $('#40').hasClass('blue-token') && $('#41').hasClass('blue-token') ||
      // horizontal row #2
      $('#28').hasClass('blue-token') && $('#29').hasClass('blue-token') && $('#30').hasClass('blue-token') && $('#31').hasClass('blue-token') ||
      $('#29').hasClass('blue-token') && $('#30').hasClass('blue-token') && $('#31').hasClass('blue-token') && $('#32').hasClass('blue-token') ||
      $('#30').hasClass('blue-token') && $('#31').hasClass('blue-token') && $('#32').hasClass('blue-token') && $('#33').hasClass('blue-token') ||
      $('#31').hasClass('blue-token') && $('#32').hasClass('blue-token') && $('#33').hasClass('blue-token') && $('#34').hasClass('blue-token') ||
      // horizontal row #3
      $('#21').hasClass('blue-token') && $('#22').hasClass('blue-token') && $('#23').hasClass('blue-token') && $('#24').hasClass('blue-token') ||
      $('#22').hasClass('blue-token') && $('#23').hasClass('blue-token') && $('#24').hasClass('blue-token') && $('#25').hasClass('blue-token') ||
      $('#23').hasClass('blue-token') && $('#24').hasClass('blue-token') && $('#25').hasClass('blue-token') && $('#26').hasClass('blue-token') ||
      $('#24').hasClass('blue-token') && $('#25').hasClass('blue-token') && $('#26').hasClass('blue-token') && $('#27').hasClass('blue-token') ||
      // horizontal row #4
      $('#14').hasClass('blue-token') && $('#15').hasClass('blue-token') && $('#16').hasClass('blue-token') && $('#17').hasClass('blue-token') ||
      $('#15').hasClass('blue-token') && $('#16').hasClass('blue-token') && $('#17').hasClass('blue-token') && $('#18').hasClass('blue-token') ||
      $('#16').hasClass('blue-token') && $('#17').hasClass('blue-token') && $('#18').hasClass('blue-token') && $('#19').hasClass('blue-token') ||
      $('#17').hasClass('blue-token') && $('#18').hasClass('blue-token') && $('#19').hasClass('blue-token') && $('#20').hasClass('blue-token') ||
      // horizontal row #5
      $('#7').hasClass('blue-token') && $('#8').hasClass('blue-token') && $('#9').hasClass('blue-token') && $('#10').hasClass('blue-token') ||
      $('#8').hasClass('blue-token') && $('#9').hasClass('blue-token') && $('#10').hasClass('blue-token') && $('#11').hasClass('blue-token') ||
      $('#9').hasClass('blue-token') && $('#10').hasClass('blue-token') && $('#11').hasClass('blue-token') && $('#12').hasClass('blue-token') ||
      $('#10').hasClass('blue-token') && $('#11').hasClass('blue-token') && $('#12').hasClass('blue-token') && $('#13').hasClass('blue-token') ||
      // horizontal row #6
      $('#0').hasClass('blue-token') && $('#1').hasClass('blue-token') && $('#2').hasClass('blue-token') && $('#3').hasClass('blue-token') ||
      $('#1').hasClass('blue-token') && $('#2').hasClass('blue-token') && $('#3').hasClass('blue-token') && $('#4').hasClass('blue-token') ||
      $('#2').hasClass('blue-token') && $('#3').hasClass('blue-token') && $('#4').hasClass('blue-token') && $('#5').hasClass('blue-token') ||
      $('#3').hasClass('blue-token') && $('#4').hasClass('blue-token') && $('#5').hasClass('blue-token') && $('#6').hasClass('blue-token') ||
      // vertical column #1
      $('#35').hasClass('blue-token') && $('#28').hasClass('blue-token') && $('#21').hasClass('blue-token') && $('#14').hasClass('blue-token') ||
      $('#28').hasClass('blue-token') && $('#21').hasClass('blue-token') && $('#14').hasClass('blue-token') && $('#7').hasClass('blue-token') ||
      $('#21').hasClass('blue-token') && $('#14').hasClass('blue-token') && $('#7').hasClass('blue-token') && $('#0').hasClass('blue-token') ||
      // vertical column #2
      $('#36').hasClass('blue-token') && $('#29').hasClass('blue-token') && $('#22').hasClass('blue-token') && $('#15').hasClass('blue-token') ||
      $('#29').hasClass('blue-token') && $('#22').hasClass('blue-token') && $('#15').hasClass('blue-token') && $('#8').hasClass('blue-token') ||
      $('#22').hasClass('blue-token') && $('#15').hasClass('blue-token') && $('#8').hasClass('blue-token') && $('#1').hasClass('blue-token') ||
      // vertical column #3
      $('#37').hasClass('blue-token') && $('#30').hasClass('blue-token') && $('#23').hasClass('blue-token') && $('#16').hasClass('blue-token') ||
      $('#30').hasClass('blue-token') && $('#23').hasClass('blue-token') && $('#16').hasClass('blue-token') && $('#9').hasClass('blue-token') ||
      $('#23').hasClass('blue-token') && $('#16').hasClass('blue-token') && $('#9').hasClass('blue-token') && $('#2').hasClass('blue-token') ||
      // vertical column #4
      $('#38').hasClass('blue-token') && $('#31').hasClass('blue-token') && $('#24').hasClass('blue-token') && $('#17').hasClass('blue-token') ||
      $('#31').hasClass('blue-token') && $('#24').hasClass('blue-token') && $('#17').hasClass('blue-token') && $('#10').hasClass('blue-token') ||
      $('#24').hasClass('blue-token') && $('#17').hasClass('blue-token') && $('#10').hasClass('blue-token') && $('#3').hasClass('blue-token') ||
      // vertical column #5
      $('#39').hasClass('blue-token') && $('#32').hasClass('blue-token') && $('#25').hasClass('blue-token') && $('#18').hasClass('blue-token') ||
      $('#32').hasClass('blue-token') && $('#25').hasClass('blue-token') && $('#18').hasClass('blue-token') && $('#11').hasClass('blue-token') ||
      $('#25').hasClass('blue-token') && $('#18').hasClass('blue-token') && $('#11').hasClass('blue-token') && $('#4').hasClass('blue-token') ||
      // vertical column #6
      $('#40').hasClass('blue-token') && $('#33').hasClass('blue-token') && $('#26').hasClass('blue-token') && $('#19').hasClass('blue-token') ||
      $('#33').hasClass('blue-token') && $('#26').hasClass('blue-token') && $('#19').hasClass('blue-token') && $('#12').hasClass('blue-token') ||
      $('#26').hasClass('blue-token') && $('#19').hasClass('blue-token') && $('#12').hasClass('blue-token') && $('#5').hasClass('blue-token') ||
      // vertical column #7
      $('#41').hasClass('blue-token') && $('#34').hasClass('blue-token') && $('#27').hasClass('blue-token') && $('#20').hasClass('blue-token') ||
      $('#34').hasClass('blue-token') && $('#27').hasClass('blue-token') && $('#20').hasClass('blue-token') && $('#13').hasClass('blue-token') ||
      $('#27').hasClass('blue-token') && $('#20').hasClass('blue-token') && $('#13').hasClass('blue-token') && $('#6').hasClass('blue-token') ||
      // diagonal towards the right
      $('#21').hasClass('blue-token') && $('#15').hasClass('blue-token') && $('#9').hasClass('blue-token') && $('#3').hasClass('blue-token') ||
      $('#28').hasClass('blue-token') && $('#22').hasClass('blue-token') && $('#16').hasClass('blue-token') && $('#10').hasClass('blue-token') ||
      $('#22').hasClass('blue-token') && $('#16').hasClass('blue-token') && $('#10').hasClass('blue-token') && $('#4').hasClass('blue-token') ||
      $('#35').hasClass('blue-token') && $('#29').hasClass('blue-token') && $('#23').hasClass('blue-token') && $('#17').hasClass('blue-token') ||
      $('#29').hasClass('blue-token') && $('#23').hasClass('blue-token') && $('#17').hasClass('blue-token') && $('#11').hasClass('blue-token') ||
      $('#23').hasClass('blue-token') && $('#17').hasClass('blue-token') && $('#11').hasClass('blue-token') && $('#5').hasClass('blue-token') ||
      $('#36').hasClass('blue-token') && $('#30').hasClass('blue-token') && $('#24').hasClass('blue-token') && $('#18').hasClass('blue-token') ||
      $('#30').hasClass('blue-token') && $('#24').hasClass('blue-token') && $('#18').hasClass('blue-token') && $('#12').hasClass('blue-token') ||
      $('#24').hasClass('blue-token') && $('#18').hasClass('blue-token') && $('#12').hasClass('blue-token') && $('#6').hasClass('blue-token') ||
      $('#37').hasClass('blue-token') && $('#31').hasClass('blue-token') && $('#25').hasClass('blue-token') && $('#19').hasClass('blue-token') ||
      $('#31').hasClass('blue-token') && $('#25').hasClass('blue-token') && $('#19').hasClass('blue-token') && $('#13').hasClass('blue-token') ||
      $('#38').hasClass('blue-token') && $('#32').hasClass('blue-token') && $('#26').hasClass('blue-token') && $('#20').hasClass('blue-token') ||
      // diagonal towards the left
      $('#38').hasClass('blue-token') && $('#30').hasClass('blue-token') && $('#22').hasClass('blue-token') && $('#14').hasClass('blue-token') ||
      $('#39').hasClass('blue-token') && $('#31').hasClass('blue-token') && $('#23').hasClass('blue-token') && $('#15').hasClass('blue-token') ||
      $('#31').hasClass('blue-token') && $('#23').hasClass('blue-token') && $('#15').hasClass('blue-token') && $('#7').hasClass('blue-token') ||
      $('#40').hasClass('blue-token') && $('#32').hasClass('blue-token') && $('#24').hasClass('blue-token') && $('#16').hasClass('blue-token') ||
      $('#32').hasClass('blue-token') && $('#24').hasClass('blue-token') && $('#16').hasClass('blue-token') && $('#8').hasClass('blue-token') ||
      $('#24').hasClass('blue-token') && $('#16').hasClass('blue-token') && $('#8').hasClass('blue-token') && $('#0').hasClass('blue-token') ||
      $('#41').hasClass('blue-token') && $('#33').hasClass('blue-token') && $('#25').hasClass('blue-token') && $('#17').hasClass('blue-token') ||
      $('#33').hasClass('blue-token') && $('#25').hasClass('blue-token') && $('#17').hasClass('blue-token') && $('#9').hasClass('blue-token') ||
      $('#25').hasClass('blue-token') && $('#17').hasClass('blue-token') && $('#9').hasClass('blue-token') && $('#1').hasClass('blue-token') ||
      $('#34').hasClass('blue-token') && $('#26').hasClass('blue-token') && $('#18').hasClass('blue-token') && $('#10').hasClass('blue-token') ||
      $('#26').hasClass('blue-token') && $('#18').hasClass('blue-token') && $('#10').hasClass('blue-token') && $('#2').hasClass('blue-token') ||
      $('#27').hasClass('blue-token') && $('#19').hasClass('blue-token') && $('#11').hasClass('blue-token') && $('#3').hasClass('blue-token')) {
        $nextTurn.text("Blue Wins!");
        $nextTurn.css('color', 'white');
        $nextTurn.addClass('blue-wins');
  } 
    else {
    console.log('what is this');
  }

}; 
    
winsChecker();
//
//// 5. Reset the board
// $clearButton.on('click', function() {
//   $board.empty(); // should reset the board after clearButton is clicked 
//   createBoard(); // 
//   $nextTurn.remove('p'); // removes p tag after new game button is clicked.
// }); 

});