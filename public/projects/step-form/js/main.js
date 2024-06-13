// main counter this is the variable through which we will count form the number of form using object litterals ie-`form${obj.formNum}`
let obj = {
  formNum: 1,
};

// this is the condition if on form 1 remove previous button
obj.formNum == 1
? (document.getElementById("prevBtn").style.display = "none")
: (document.getElementById("prevBtn").style.display = "unset");

// this is the condition if on form 1 remove indicators button
if (obj.formNum == 1) {
  $(".indicators").css("display", "none");
} else {
  $(".indicators").css("display", "unset");
}

// this is the main logic where we restric if the forms are filled or not button name comes from html
function changeForm(buttonName) {
  let f1 = document.getElementById("field1").value;
  let f2 = document.getElementById("field2").value;
  let f3 = document.getElementById("field3").value;
  let f4 = document.getElementById("field4").value;

  let if1 = document.getElementById("infoField1").value;
  let if2 = document.getElementById("infoField2").value;
  let if3 = document.getElementById("infoField3").value;
  let if4 = document.getElementById("infoField4").value;
  let if5 = document.getElementById("infoField5").value;
  
  let q1 = document.getElementById("q1").value;
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("myTextarea").value;


  let radio = null;
  // form 1 conditions
  // regexPattern is used for email validation
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // error masseges or none by default if no entry
  $(".errorMsg").css("display", "none");

// if none of fields in form 1 is empty or email is valide the form number will increase by i using obj.formNum++ and go to next form ie 2
  if (f1.length != 0 && f2.length != 0 && f3.length != 0 && f4.length != 0&&regexPattern.test(f2)) {
    buttonName == "next" && obj.formNum <= 3 && obj.formNum++;
    $(".errorMsg").css("display", "none");
  } else {
    // if nothing is entered in a field of form 1 the errors will appear
    if (f1.length == 0) {
      $(".errorMsg.name").css("display", "block");
    }

    if (f3.length == 0) {
      $(".errorMsg.orderid").css("display", "block");
    }
    if (f4.length == 0) {
      $(".errorMsg.activationcode").css("display", "block");
    }
    if (!regexPattern.test(f2)) {
      $(".errorMsg.email").css("display", "block");
    } else {
      $(".errorMsg.email").css("display", "none");
    }
  }
  // form 2
  // this check if any radio is selected or not in form 2 obj.formNum==3 means if we are trying to go to form 3
 if(obj.formNum==3&&$(".productRadio:checked").val()!=="on"){
  obj.formNum=2
  $(".errorMsg.radioError").css("display", "block");
}else{
  $(".errorMsg.radioError").css("display", "none");
}

// form 3
// error messages for form 3 fields
if(obj.formNum==4){
  if(q1.length==0){
    $(".errorMsg.q1Error").css("display", "unset");
    obj.formNum=3
  }
  if(q3.length==0){
    $(".errorMsg.q3Error").css("display", "unset");
    obj.formNum=3
  }
  if(q4.length==0){
    $(".errorMsg.q4Error").css("display", "unset");
    obj.formNum=3
}
if($(".form3Radio:checked").val()!=="on"){
  obj.formNum=3
  $(".errorMsg.form3RadioError").css("display", "block");
}else{
  $(".errorMsg.form3RadioError").css("display", "none");
}
}

  // form 4 conditions
  // in form 4 if user click on submit button if all the fileds are filled  alertify.success("Form Submitted Successfully") will executed Else the else part will show errors of red colors under the inputs
  if (buttonName == "submit") {
    if (
      if1.length != 0 &&
      if2.length != 0 &&
      if3.length != 0 &&
      if4.length != 0 &&
      if5.length != 0
    ) {
      buttonName !== "prev" && alertify.success("Form Submitted Successfully");
      $(".errorMsg").css("display", "none");
    } else {
      if (if1.length == 0) {
        $(".errorMsg.address").css("display", "block");
      }

      if (if2.length == 0) {
        $(".errorMsg.apartment").css("display", "block");
      }
      if (if3.length == 0) {
        $(".errorMsg.city").css("display", "block");
      }
      if (if4.length == 0) {
        $(".errorMsg.region").css("display", "block");
      }
      if (if5.length == 0) {
        $(".errorMsg.phone").css("display", "block");
      }
    }
  }

  // this line will decrement the form number by 1 ie if on form 4 it will change the 4 into 3
  buttonName == "prev" && obj.formNum >= 0 ? obj.formNum-- : "";
  // this condtion will dissapeare the indicators on form 1 and will give the width to the next button else on form other than 1 it will show indicators and will give 48% width to buttons
  if (obj.formNum > 1) {
    $(".indicators").css("display", "unset");
    $("button").css("width", "48%");
  } else {
    $(".indicators").css("display", "none");
    $("button").css("width", "100%");
  }


  // here we implement the logic of submit button and previous button that if on which form we show which button and how previous button should work also change indicators using previos button
  if (obj.formNum === 4) {
    document.getElementById("submit").style.display = "unset";
    document.getElementById("next").style.display = "none";
  } else {
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "unset";
  }
  obj.formNum == 1
    ? (document.getElementById("prevBtn").style.display = "none")
    : (document.getElementById("prevBtn").style.display = "unset");
  obj.formNum <= 4 &&
    obj.formNum >= 1 &&
    document
      .querySelectorAll("form")
      .forEach((e) => (e.style.display = "none"));
  obj.formNum <= 4 &&
    (document.getElementById(`form${obj.formNum}`).style.display = "block");
  obj.formNum <= 4 &&
    obj.formNum >= 1 &&
    document
      .querySelectorAll(".indicators")
      .forEach((e) => (e.style.backgroundColor = "#8392aba2"));
  obj.formNum <= 4 &&
    (document.getElementById(`indicator-${obj.formNum}`).style.backgroundColor =
      "#2a427a");

  if (obj.formNum > 1) {
    $(".indicators").css("display", "unset");
    $("button").css("width", "48%");
  } else {
    $(".indicators").css("display", "none");
    $("button").css("width", "100%");
  }

  if(obj.formNum==3){
    
  }
}

// copy text logic

$("#copyButton").click(function () {
  console.log("copy");
  var textarea = $("#myTextarea")[0];
  textarea.select();
  document.execCommand("copy");
  alertify.success("Text Copied");
});

// star rating logic
const stars = document.querySelectorAll(".star");
const ratingValue = document.querySelector("#rating-value");

let index;

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    index = i;
    displayRating();
  });

  stars[i].addEventListener("mouseover", function () {
    for (let j = 0; j < stars.length; j++) {
      if (j <= i) {
        stars[j].classList.add("active");
      } else {
        stars[j].classList.remove("active");
      }
    }
  });

  stars[i].addEventListener("mouseout", function () {
    for (let j = 0; j < stars.length; j++) {
      if (j <= index) {
        stars[j].classList.add("active");
      } else {
        stars[j].classList.remove("active");
      }
    }
  });
}

function displayRating() {
  for (let i = 0; i < stars.length; i++) {
    if (i <= index) {
      stars[i].classList.add("active");
    } else {
      stars[i].classList.remove("active");
    }
  }

  // ratingValue.innerHTML = `You rated ${index + 1} stars.`;
  
  // messages shown under star rating if 3 stars or more
  if(index+1<4){
    $(".starDiscription").text("Could you provide feedback on any areas where we can improve our service or product")
    $("#copyButton").css("display","none");
  }else{
    $(".starDiscription").text(`If you are satisfied with your purchase, we would greatly appreciate it if you could leave a review for us on Amazon. You can leave your review by clicking the "Copy" button on the right-hand side of this text box, and then proceeding to the product page on Amazon by clicking "Next". Thank you for your support!`);
    $("#copyButton").css("display","unset");
  }

}
