var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'test-site/images/pony.jfif)') {
      myImage.setAttribute ('src','test-site/images/pony.jfif');
    } else {
      myImage.setAttribute ('src','test-site/images/pony.jfif');
    }
}
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}