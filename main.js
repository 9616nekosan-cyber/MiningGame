stoneElm.addEventListener('click', (e) => {
    let random = Math.random();
    const rect = stoneElm.getBoundingClientRect();

    switch (pickaxe) {
        case 0:
            if (random < 0.10) {
                add(coal,1,rect,e);
            } else {
                add(stone,1,rect,e);
            }
        break;

        case 1:
            switch (true) {
                case random < 0.10:
                    add(iron,1,rect,e);
                break;

                case random < 0.20:
                    add(coal,1,rect,e);
                break;

                default:
                    if (Math.random() < 0.10) {
                        add(stone,2,rect,e);
                    } else {
                        add(stone,1,rect,e);
                    }
                break;
            }
        break;

        case 2:
            switch (true) {
                case random < 0.02:
                    add(diamond,1,rect,e);
                break;

                case random < 0.10:
                    add(gold,1,rect,e);
                break;

                case random < 0.15:
                    add(iron,1,rect,e);
                break;

                case random < 0.25:
                    add(coal,1,rect,e);
                break;

                default:
                    if (Math.random() < 0.10) {
                        add(stone, Math.floor(Math.random() * 3) + 1, rect);
                    } else {
                        add(stone,1,rect,e);
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
                    add(diamond,1,rect,e);
                break;

                case random < 0.25:
                    add(gold,1,rect,e);
                break;

                case random < 0.30:
                    add(iron,1,rect,e);
                break;

                case random < 0.40:
                    add(coal,1,rect,e);
                break;

                default:
                    if (Math.random() < 0.10) {
                        add(stone, Math.floor(Math.random() * 3) + 4, rect);
                    } else {
                        add(stone,2,rect,e);
                    }
                break;
            }
        break;
    }
});

setInterval(() => {
    stonecountElm.textContent = have[stone];
    coalcountElm.textContent = have[coal];
    ironcountElm.textContent = have[iron];
    goldcountElm.textContent = have[gold];
    diamondcountElm.textContent = have[diamond];
    emeraldcountElm.textContent = have[emerald];
    mysteryorecountElm.textContent = have[mysteryore];
}, 10);

function add(type, num, rect, e) {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const effect = document.createElement('span');
    effect.classList.add('text-effect');
    
    if (type == iron || type == gold) type = type + '_ingot';
    const img = document.createElement('img');
    img.src = `img/${type}.jpg`
    effect.appendChild(img)

    const textNode = document.createTextNode(type + '+' + num);
    effect.appendChild(textNode);

    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;

    have[type] += num;

    stoneElm.appendChild(effect);
    effect.addEventListener('animationend', () => {
        effect.remove();
    })
}