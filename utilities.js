var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


{
  function changeImg(imgNumber)	{
  var myImages = [".images/palms.jpg", ".images/forest.jpg", ".images/ice.jpg", ".images/woods.jpg"]; 
  var imgShown = document.body.style.backgroundImage;
  var newImgNumber =Math.floor(Math.random()*myImages.length);
  document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
}
window.onload=changeImg;
}
