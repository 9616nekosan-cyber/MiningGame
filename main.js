stoneElm.addEventListener('click', (e) => {
    let random = Math.random();
    const rect = stoneElm.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    switch (pickaxe) {
        case 0:
            if (random < 0.10) {
                add(x, y, 'coal', 1)
            } else {
                add(x, y, 'stone', 1);
            }
        break;

        case 1:
            switch (true) {
                case random < 0.10:
                    add(x, y, 'iron', 1);
                break;

                case random < 0.20:
                    add(x, y, 'coal', 1)
                break;

                default:
                    if (Math.random() < 0.10) {
                        add(x, y, 'stone', 2);
                    } else {
                        add(x, y, 'stone', 1);
                    }
                break;
            }
        break;

        case 2:
            switch (true) {
                case random < 0.02:
                    add(x, y, 'diamond', 1);
                break;

                case random < 0.10:
                    add(x, y, 'gold', 1);
                break;

                case random < 0.15:
                    add(x, y, 'iron', 1);
                break;

                case random < 0.25:
                    add(x, y, 'coal', 1)
                break;

                default:
                    if (Math.random() < 0.10) {
                        add(x, y, 'stone', Math.floor(Math.random() * 3) + 1, rect);
                    } else {
                        add(x, y, 'stone', 1);
                    }
                break;
            }
        break;

        case 3:
            switch (true) {
                case random < 0.02:
                    have[mysteryore]++;
                break;

                case random < 0.15:
                    add(x, y, 'diamond', 1);
                break;

                case random < 0.25:
                    add(x, y, 'gold', 1);
                break;

                case random < 0.30:
                    add(x, y, 'iron', 1);
                break;

                case random < 0.40:
                    add(x, y, 'coal', 1);
                break;

                default:
                    if (Math.random() < 0.10) {
                        add(x, y, 'stone', Math.floor(Math.random() * 3) + 4);
                    } else {
                        add(x, y, 'stone', 2);
                    }
                break;
            }
        break;
    }
});

setInterval(() => {
    stonecountElm.textContent = have['stone'];
    coalcountElm.textContent = have['coal'];
    ironcountElm.textContent = have['iron'];
    goldcountElm.textContent = have['gold'];
    diamondcountElm.textContent = have['diamond'];
    emeraldcountElm.textContent = have['emerald'];
    mysteryorecountElm.textContent = have['mysteryore'];
}, 10);

function add(x, y, type, n) {
    const effect = document.createElement('span');
    effect.classList.add('text-effect');
   
    let imgId = type;
    if (type == 'iron' || type == 'gold') imgId = type + '_ingot';
    if (type == 'stone') imgId = 'cobble' + type;
    const img = document.createElement('img');
    img.src = `img/${imgId}.jpg`
    effect.appendChild(img)

    const textNode = document.createTextNode('+' + n);
    effect.appendChild(textNode);

    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;

    have[type] += n;

    stoneElm.appendChild(effect);
    effect.addEventListener('animationend', () => {
        effect.remove();
    })
}