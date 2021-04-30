var slideIndex = 1;
        showDivs(document.getElementById('slide1'), slideIndex);
        showDivs(document.getElementById('slide2'), slideIndex);
        showDivs(document.getElementById('slide3'), slideIndex);

        function plusDivs(event, n) {
            showDivs(event.parentElement.parentElement, slideIndex += n);
        }


        function showDivs(event, n) {
            var i;
            var x = event.querySelectorAll(".slide");
            console.log(x);
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }