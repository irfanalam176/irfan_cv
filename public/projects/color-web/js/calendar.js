$(document).ready(()=>{

    // calender
var themonth = 0; // Start from the current month
renderCal(themonth);

$('.minusmonth').click(function(){
  themonth -= 1;
  renderCal(themonth);
});

$('.addmonth').click(function(){
  themonth += 1;
  renderCal(themonth);
});

function renderCal(themonth) {
  $('.calendar li').remove();
  $('.calendar ul').append('<li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li>');
  
  var d = new Date();
  var currentYear = d.getFullYear();
  var currentMonth = d.getMonth() + themonth;
  let currentDate=d.getDate()
  
  // Adjust the year if the month goes beyond December or before January
  while (currentMonth < 0) {
    currentMonth += 12;
    currentYear -= 1;
  }
  while (currentMonth > 11) {
    currentMonth -= 12;
    currentYear += 1;
  }
  
  var days = numDays(currentMonth, currentYear); // get number of days in the month
  var fDay = firstDay(currentMonth, currentYear); // find what day of the week the 1st lands on
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // month names
  
  $('.calendar p.monthname').text(months[currentMonth]); // add month and year name to calendar
  $('#year').text(months[currentMonth]+ " " + currentYear); // add year to the tag with id #year
  
  for (var i = 0; i < fDay; i++) { // place the first day of the month in the correct position
    $('<li class="empty">&nbsp;</li>').appendTo('.calendar ul');
  }
  
  for (var i = 1; i <= days; i++) { // write out the days
    $(`<li class=${i==currentDate&&"active"}>` + '<h6>' + i + '</h6>'+'<label>我的預約</label>' + '</li>').appendTo('.calendar ul');
  }

  function firstDay(month, year) {
    return new Date(year, month, 1).getDay();
  }

  function numDays(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  $('.calendar li').click(function(){ 
    $('.calendar li').removeClass('active');
    $(this).addClass('active');
  });
}


})