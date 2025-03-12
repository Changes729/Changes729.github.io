onload = function () {
  var h1 = document.getElementsByTagName("h1");
  console.log(h1[0].innerText);
  h1[0].innerText = 'Hello world';
};
