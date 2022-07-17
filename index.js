$(document).ready(function () {

  $("#submit").click(function () {
    let v1 = validateFirstName();
    let v2 = validateLastName();
    let v3 = validatePhone();
    let v4 = validateOfficePhone();
    let v5 = validateEmail();
    let v6 = validatePass();
    let v7 = validateconPass();
    let v8 = validateDate();
    let v9 = genderError();
    let v10 = interestError();
    let v11 = aboutError();
    let v12 = calculateAge();
    return v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v11 && v12;
  });
  var val = true;
  $("#firstname-error").hide();
  var firstNameError = true;
  $("#firstname").keyup(function () {
    validateFirstName();
  });
  function validateFirstName() {
    var firstName = $("#firstname").val();
    if (firstName == "") {
      $("#firstname-error").html("Please enter your first name");
      $("#firstname-error").show();
      val = false
    } else {
      var letters = /^[A-Za-z]+$/;
      if (firstName.match(letters)) {
        $("#firstname-error").hide();
      }
      else {
        $("#firstname-error").html("Please enter only alphabets");
        $("#firstname-error").show();
        // let firstNameError=false;
        val = false;
      }
    }
  }
  $("#lastname-error").hide();
  var lastNameError = true;
  $("#lastname").keyup(function () {
    validateLastName();
  });
  function validateLastName() {
    var lastName = $("#lastname").val();
    if (lastName == "") {
      $("#lastname-error").html("Please enter your last name");
      $("#lastname-error").show();
      // let lastNameError=false;
      val = false;
    } else {
      var letters = /^[A-Za-z]+$/;
      if (lastName.match(letters)) {
        $("#lastname-error").hide();
        //  let lastNameError=true;
      }
      else {
        $("#lastname-error").html("Please enter only alphabets");
        $("#lastname-error").show();
        // let lastNameError=false;
        val = false;

      }
    }
  }
  $("#phone-error").hide();
  var phoneError = true;
  $("#phone").keyup(function () {
    validatePhone();
  });
  function validatePhone() {
    var phone = $("#phone").val();
    if (phone == "") {
      $("#phone-error").html("Number cannot be blank ");
      $("#phone-error").show();
      // officephoneError = false;
      val = false;
    } else if (phone.length != 10) {
      $("#phone-error").html("Please Enter a valid Phone Number ");
      $("#phone-error").show();
      phoneError = false;
      val = false;
    }
    else if (phone.length == 10) {
      $("#phone-error").hide();
      phoneError = true;
    }
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phoneNum)) {
      $("#phone-error").hide();
      phoneError = true;
    }
    else {
      $("#phone-error").html("Please Enter a valid Phone Number ");
      $("#phone-error").show();
      phoneError = false;
      val = false;
    }
  }
  $("#officeno-error").hide();
  var phoneError = true;
  $("#phone-office").keyup(function () {
    validateOfficePhone();
  });
  function validateOfficePhone() {
    var officephone = $("#phone-office").val();
    if (officephone == "") {
      $("#officeno-error").html("Number cannot be blank ");
      $("#officeno-error").show();
      // officephoneError = false;
      val = false;
    } else if (officephone.length != 10) {
      $("#officeno-error").html("Please Enter a valid Phone Number ");
      $("#officeno-error").show();
      officephoneError = false;
      val = false;
    }
    else if (officephone.length == 10) {
      $("#officeno-error").hide();
      officephoneError = true;
    }
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (officephone.match(phoneNum)) {
      $("#officeno-error").hide();
      officephoneError = true;
    }
    else {
      $("officeno-error").html("Please Enter a valid Phone Number ");
      $("#officeno-error").show();
      officephoneError = false;
      val = false;
    }
  }
  var email = $("#email").val();
  var emailError = true;
  $("#email-error").hide();
  $("#email").keyup(function () {
    validateEmail();
  });
  function validateEmail() {
    var email = $("#email").val();
    if (email == "") {
      $("#email-error").html("Email cannot be blank");
      $("#email-error").show();
      emailError = false;
    } else {
      $("#email-error").hide();
      emailError = true;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((email.match(mailformat))) {
      $("#email-error").hide();
      emailError = true;
    } else {
      $("#email-error").html("Email format is not valid");
      $("#email-error").show();
      emailError = false;
      val = false;
    }
  }
  var password = $("#password").val();
  var passError = true;
  $("#password-error").hide();
  $("#password").keyup(function () {
    validatePass();
  });
  function validatePass() {
    var password = $("#password").val();
    if (password == "") {
      $("#password-error").html("password cannot be blank");
      $("#password-error").show();
      passError = false;
      val = false;
    } else {
      var pass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})"
      if (!(password.match(pass))) {
        $("#password-error").html("Password should contain alphabets,digits and special characters");
        $("#password-error").show();
        // passError = false;
        // val = false;
      } else {
        $("#password-error").hide();
        // passError = true;
      }
    }
  }
  var confirmPassword = $("#conpassword").val();
  var conPassError = true;
  $("#con-password-error").hide();
  $("#conpassword").keyup(function () {
    validateconPass();
  });
  function validateconPass() {
    var password = $("#password").val();
    var confirmPassword = $("#conpassword").val();
    if (confirmPassword == password) {
      $("#con-password-error").hide();
      conPassError = true;
    } else {
      $("#con-password-error").html("password do not match");
      $("#con-password-error").show();
      conPassError = false;
    }
  }
  $("#birth-year").mouseover(function () {
    addYear();
  });
  function addYear() {
    var years = $("#birth-year");
    var currentYear = (new Date()).getFullYear();
    for (var year = 1900; year <= currentYear; year++) {
      $(years).append("<option value=" + year + ">" + year + "</option>");
    }
  }
  $(".radio").click(function () {
    genderError();
  });
  function genderError() {
    gender = $(".radio");
    if (!(gender[0].checked || gender[1].checked)) {
      $("#gender-error").html("please select atleast 1 value");
      $("#gender-error").show();
      val = false;
    } else {
      $("#gender-error").hide();
    }
  }
  $(".checkbox").click(function () {
    interestError();
  });
  function interestError() {
    var checkboxActivity = document.querySelectorAll('input[name="chkbx-activity"]:checked').length;
    if (checkboxActivity < 1) {
      $("#interror").html("<br>+please select atleast 1 value");
      $("#interror").show();
      val = false;
    } else {
      $("#interror").hide();
    }
  }
  $("#txt-about").keyup(function () {
    aboutError();
  });
  function aboutError() {
    var text = $("#txt-about").val();
    if (text == ""){
      $("#aberror").html("please enter some text ");
      $("#aberror").show();
      val = false;
    }
    else {
      $("#aberror").hide();
    }
  }
});

function calculateAge() {
  let day = document.getElementById("birth-day").value;
  let month = document.getElementById("birth-month").value;
  let year = document.getElementById("birth-year").value;
  if (month == "4") {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "block";
    document.getElementById("day31").style.display = "none";
  };
  if (month == "6") {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "block";
    document.getElementById("day31").style.display = "none";
  };
  if (month == "9") {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "block";
    document.getElementById("day31").style.display = "none";
  };
  if (month == "11") {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "block";
    document.getElementById("day31").style.display = "none";
  };
  if (month == "2" && (year % 4 == 0)) {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "none";
    document.getElementById("day31").style.display = "none";
  } else if (month == "2" && (!(year % 4) == 0)) {
    document.getElementById("day29").style.display = "none";
    document.getElementById("day30").style.display = "none";
    document.getElementById("day31").style.display = "none";
  }
  else if (month == "1" || month == "3" || month == "5" || month == "7" || month == "8") {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "block";
    document.getElementById("day31").style.display = "block";
  };
  if (day != "day" && month != "month" && year != "year") {
    var stringDate = month + "/" + day + "/" + year
    var timestamp = Date.parse(stringDate);
    var dateObject = new Date(timestamp);
    var currentYear = new Date().getFullYear();
    var birthYear = dateObject.getFullYear();
    var age = currentYear - birthYear;
    var today = new Date();
    var birthDate = new Date(stringDate);
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
      m = 12 + m
    }
    var age = String(age) + String("." + m);
    document.getElementById("txt-age").value = age;
  }
}
