$(document).ready(function() {

  $('#send').click(function(event) {
    event.preventDefault();
    var userInput = $('#keyword').val();
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + userInput + '&format=json&callback=?';
    $.getJSON(url, function(data) {
      console.log(data)
      $('#result').empty();

      for (i = 0; i < 10; i++) {

        $('#result').append('<a target="_blank" href="' + data[3][i] + '"><div class="entry"><h3>' + data[1][i] + '</h3><p>' + data[2][i] + '</p></div></a>');
        $('.entry').css({"width": "750px", "background-color": "#F2F2F2", "color": "#151515", "margin-bottom": "20px","padding": "10px 25px 10px 25px", "border-radius": "5px", "font-size": "0.8em"});
      }
    });
  });
});
