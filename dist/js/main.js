//Jquery Code
$(document).ready(function () {
  $(".next").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });

  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });
});

//Booking Code AJAX

$(function () {
  var $results = $('#results');
  var $name = $('#name');
  var $email = $('#email');
  var $phone = $('#phone');
  var $room = $('#room');
  var $startDate = $('#startDate');
  var $endDate = $('#endDate');
  var $numberOfGuests = $('#numberOfGuests');

  $.ajax({
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    url: 'API.json',
    success: function (results) {
      $.each(results, function (i, result) {
        $results.append('<li>Name: ' + result.name + ' , Email: ' + result.email + ', Phone: ' + result.phone + ' , Room: ' + result.room + ', Start Date: ' + result.startDate + ' , End Date: ' + result.endDate + ' , Number of Guests booked: ' + result.numberOfGuests + ' </li>');
      });
    },
    error: function () {
      alert('error loading orders');
    }
  });


  $('#submit').on('click', function () {

    var result = {
      name: $name.val(),
      email: $email.val(),
      phone: $phone.val(),
      room: $room.val(),
      startDate: $startDate.val(),
      endDate: $endDate.val(),
      $numberOfGuests: $numberOfGuests.val(),
    };

    $.ajax({
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      url: 'API.json',
      data: result,
      success: function (newResult) {
        $results.append('<li>Name: ' + newResult.name + ' , Email: ' + newResult.email + ', Phone: ' + newResult.phone + ' , Room: ' + newResult.room + ', Start Date: ' + newResult.startDate + ' , End Date: ' + newResult.endDate + ' , Number of Guests booked: ' + newResult.numberOfGuests + ' </li>');
      },
      error: function () {
        alert('error saving result');
      }
    });
  });
});
