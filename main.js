document.getElementById('stone').addEventListener('click', () => {
    let random = Math.random();
    
    switch (pickaxe) {
        case 0:
            if (random < 0.10) {
                coal++;
            } else {
                stone++;
            }
        break;

        case 1:
            switch (true) {
                case random < 0.10:
                    iron++;
                break;

                case random < 0.20:
                    coal++;
                break;

                default:
                    if (Math.random() < 0.10) {
                        stone += 2;
                    } else {
                        stone++;
                    }
                break;
            }
        break;

        case 2:
            switch (true) {
                case random < 0.02:
                    diamond++;
                break;

                case random < 0.10:
                    gold++;
                break;

                case random < 0.15:
                    iron++;
                break;

                case random < 0.25:
                    coal++;
                break;

                default:
                    if (Math.random() < 0.10) {
                        stone += Math.floor(Math.random() * 3) + 1;
                    } else {
                        stone++;
                    }
                break;
            }
        break;

        case 3:
            switch (true) {
                case random < 0.02:
                    mysteryore++;
                break;

                case random < 0.15:
                    diamond++;
                break;

                case random < 0.25:
                    gold++;
                break;

                case random < 0.30:
                    iron++;
                break;

                case random < 0.40:
                    coal++;
                break;

                default:
                    if (Math.random() < 0.10) {
                        stone += Math.floor(Math.random() * 3) + 4;
                    } else {
                        stone += 2;
                    }
                break;
            }
        break;
    }
});

setInterval(() => {
    stonecountElm.textContent = stone;
    coalcountElm.textContent = coal;
    ironcountElm.textContent = iron;
    goldcountElm.textContent = gold;
    diamondcountElm.textContent = diamond;
    emeraldcountElm.textContent = emerald;
    mysteryorecountElm.textContent = mysteryore;
}, 10);