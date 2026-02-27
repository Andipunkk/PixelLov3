function changeLayer(id, fileName) {
    const img = document.getElementById(id);
    img.src = `img/${fileName}`;
}

function setHairColor(colorName) {
    // Cambia el pelo y las cejas al mismo tiempo para que combinen
    changeLayer('layer-pelo', `pelo/estilo1_${colorName}.png`);
    changeLayer('layer-cejas', `cejas/tipo1_${colorName}.png`);
}