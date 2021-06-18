function closeModal(event) {
    console.log(event);
    event.preventDefault();
    event = event.target;

      event.parentNode.querySelector('.modal').style.display = "none";
      event.style.display = "none";
      elm1.addEventListener('touchend', function (event) {
        var currentTime = new Date().getTime();
        var tapLength = currentTime - lastTap;
        clearTimeout(timeout);
        if (tapLength < 500 && tapLength > 0) {
            event.parentNode.querySelector('.modal').style.display = "none";
            event.style.display = "none";
            event.preventDefault();
        } else {
            elm2.innerHTML = 'Single Tap';
            timeout = setTimeout(function () {
                elm2.innerHTML = 'Single Tap (timeout)';
                clearTimeout(timeout);
            }, 500);
        }
        lastTap = currentTime;
    });

}   