type plot = 0 | 1;

function canPlaceFlowers(flowerbed: plot[], n: number): boolean {
    let countPlant = 0

    // O código considera as pontas como plantáveis

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1) {
            countPlant++;
            i++;
        }
    }

    return countPlant >= n
};

console.log(canPlaceFlowers([0, 1, 0], 1))