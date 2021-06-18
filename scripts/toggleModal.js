function toggleModal(event) {
    // var closer = document.getElementById('close-modal-m');
    // var navigation = document.getElementById('navigation-clicker');
    
    if (event.querySelector('.modal').style.display == 'block') {
        return
    }
    console.log(event);
    var elmnt = event.querySelector('.modal-content div');
    var file = elmnt.getAttribute("w3-include-html");
    if (file) {
        console.log(file);
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    elmnt.innerHTML = this.responseText;


                }
                if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("w3-include-html");
                //includeHTML();
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        event.querySelector('.modal').style.display = "block";
        event.parentNode.querySelector('.modal-overlay').style.display = 'block';
        navigation.style.pointerEvents = "none";
      
        
        
    } else {
        console.log(event)
        if (event.querySelector('.modal').style.display == 'none') {
            event.querySelector('.modal').style.display = 'block';
            event.parentNode.querySelector('.modal-overlay').style.display = 'block';
            navigation.style.pointerEvents = "none";
        }
        
    }
    
}







