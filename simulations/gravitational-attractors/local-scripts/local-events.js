function resetSketchEvent() {
    attractors = []

    let minXPos = 1;
    let maxXPos = simulationContainer.clientWidth;
    let minYPos = 1;
    let maxYPos = simulationContainer.clientHeight;
    let minVel = -0.5;
    let maxVel = 0.5;
    let mass = Number(attractorMassSlider.value) ** Number(attractorMassPowerSlider.value);
    let id = 1;

    for (let i = 0; i < Number(numberOfAttractorsSlider.value); i++) {
        let x = Math.random() * (maxXPos - minXPos) + minXPos;
        let y = Math.random() * (maxYPos - minYPos) + minYPos;
        let vx = Math.random() * (maxVel - minVel) + minVel;
        let vy = Math.random() * (maxVel - minVel) + minVel;
        attractors.push(new Attractor(x, y, vx, vy, mass, id));
        id++;
    }

    for (let i = 0; i < attractors.length; i++) {
        const otherAttractor = attractors.slice(0, i).concat(attractors.slice(i + 1)); // Exclude current mover
        attractors[i].attract(otherAttractor);
    }
}