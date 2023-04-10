function checkFormData() {
  var message = "";

  //Access the Text box content
  var tname = document.getElementById('txt_name').value;
  var temail = document.getElementById('txt_email').value;
  var tage = document.getElementById('txt_age').value;

  //Access Radio Button Values
  var tgender1 = document.getElementById('radio1').checked;
  var tgender2 = document.getElementById('radio2').checked;

  //Access Checkbox
  var tchkbox = document.getElementById('chkbox').checked;

  message += "Name: " + tname + "<br>";
  message += "Email: " + temail + "<br>";
  message += "Age: " + tage + "<br>";
  message += "Male: " + tgender1 + "<br>";
  message += "Female: " + tgender2 + "<br>";
  message += "Agreed: " + tchkbox + "<br>";

  document.getElementById('tmessage').innerHTML = message;
  console.log(message);
}