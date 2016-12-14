console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing koalas on page load
  getKoalas();

  // add koala button click
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    var objectToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      sex: $('#sexIn').val(),
      ready_for_transfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
    };
    // call saveKoala with the new obejct
    saveKoala( objectToSend );
  }); //end addButton on click
}); // end doc ready

var getKoalas = function(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    url: '/getKoalas',
    type: 'GET',
    success: function( data ){
      console.log( 'got some koalas: ', data );
      displayKoala(data);
    } // end success
  }); //end ajax
  // display on DOM with buttons that allow edit of each
}; // end getKoalas

function displayKoala(array) {
  var htmlString = '<table><thead><td>Age</td><td>Name</td><td>Notes</td><td>Ready for Transfer</td><td>Sex</td></thead>';
  for (var i = 0; i < array.length; i++) {
    htmlString += '<tr><td>' + array[i].age + '</td><td>' + array[i].name + '</td><td>' + array[i].notes + '</td><td>' + array[i].ready_for_transfer + '</td><td>'+ array[i].sex + '</td></tr>';
  }
  htmlString += '</table>';
  $('#viewKoalas').html(htmlString);
}

var saveKoala = function( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    url: '/addKoala',
    type: 'POST',
    data: newKoala,
    success: function( data ){
      console.log( 'got some koalas: ', data );
      getKoalas();
    } // end success
  }); //end ajax
};
