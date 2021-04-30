function toggleModal(event) {
            console.log(event);
            var elmnt = event.querySelector('.modal-content div');
            var file = elmnt.getAttribute("w3-include-html");
            if (file) {
                console.log(file);
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) { elmnt.innerHTML = this.responseText; }
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
            } else {
                if (event.querySelector('.modal').style.display == 'none') {
                    event.querySelector('.modal').style.display = 'block';
                } else {
                    event.querySelector('.modal').style.display = "none";
                }

            }
        }