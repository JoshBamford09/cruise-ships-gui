function Controller () {
    this.initialiseSea()
};

Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = [
        './images/water0.png',
        './images/images1.png',
    ];
    let backgroundIndex = 0;
    window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]})`;
    }, 1000);
};