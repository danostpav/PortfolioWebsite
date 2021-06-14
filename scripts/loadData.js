
function loadData() {
    return new Promise((resolve, reject) => {
        window.addEventListener("load", function () {
            setTimeout(resolve, 400);
        });
    })
}

loadData()
    .then(() => {
        let preloaderBM = document.getElementById('bm');
        let preloaderEl = document.getElementById('preloader');

        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
        preloaderBM.classList.add('hidden');
        preloaderBM.classList.remove('vidible');

    });

