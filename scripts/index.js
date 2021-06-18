var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/data.json'
})

var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('bm1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/data.json'
})

screen.orientation.lock();