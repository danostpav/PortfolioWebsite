function closeModal(event) {
    console.log(event);
    event.preventDefault();
    event = event.target;

      event.parentNode.querySelector('.modal').style.display = "none";
      event.style.display = "none";

}   