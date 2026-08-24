stoneElm.addEventListener('click', (e) => {
    const rect = stoneElm.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    dig(x, y, pickaxelvl);
});

exchStoneElm.addEventListener('click', () => {exchange('stone')});
exchCoalElm.addEventListener('click', () => {exchange('coal')});
exchIronElm.addEventListener('click', () => {exchange('iron')});
exchGoldElm.addEventListener('click', () => {exchange('gold')});
exchDiaElm.addEventListener('click', () => {exchange('diamond')});

upgradePickaxeElm.addEventListener('click', () => {
    if (pickaxeCost[pickaxelvl + 1] > have['emerald']) return;
    if (window.confirm(`${pickaxes[pickaxelvl + 1]} にアップグレードしますか？`)) {
        pickaxelvl++;
        have['emerald'] -= pickaxeCost[pickaxelvl];
    } else {
        return;
    }
})

buyDrillElm.addEventListener('click', () => {
    if (drillCost > have['emerald']) return;
    drillCount++;
    have['emerald'] -= drillCost;
    drillCost = Math.floor(drillCost*1.2);
})

setInterval(() => {
    stonecountElm.textContent = have['stone'];
    coalcountElm.textContent = have['coal'];
    ironcountElm.textContent = have['iron'];
    goldcountElm.textContent = have['gold'];
    diamondcountElm.textContent = have['diamond'];
    emeraldcountElm.textContent = have['emerald'];
    mysteryorecountElm.textContent = have['mysteryore'];
    document.getElementById('pickaxe').src = pickaxeImg[pickaxelvl];
    stoneElm.style.cursor = `url(${pickaxeImg[pickaxelvl]}), auto`;
    document.getElementById('drill-count').textContent = drillCount;
    document.getElementById('drill-price').textContent = drillCost;
    if (pickaxelvl >= 3) {
        document.getElementById('pickaxe-shop').style.display = 'none';
    } else {
        document.getElementById('pickaxe-price').textContent = pickaxeCost[pickaxelvl + 1];
        document.getElementById('pickaxe-shop-img').src = pickaxeImg[pickaxelvl + 1];
    }
    if (!drillCount <= 0) setDrillTimer(4000 / drillCount);
}, 10);

function dig(argx,argy,level) {
    let x;
    let y;

    if (argx) x = argx;
    if (argy) y = argy;

    let random = Math.random();
    switch (level) {
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
                        add(x, y, 'stone', Math.floor(Math.random() * 3) + 1);
                    } else {
                        add(x, y, 'stone', 1);
                    }
                break;
            }
        break;

        case 3:
            switch (true) {
                case random < 0.02:
                    add(x, y, 'mysteryore', 1);
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
}

function add(x, y, type, n) {
    if (x && y) {
        const effect = document.createElement('span');
        effect.classList.add('text-effect');
   
        let imgId = type;
        if (type == 'iron' || type == 'gold') imgId = type + '_ingot';
        if (type == 'stone') imgId = 'cobble' + type;
        const img = document.createElement('img');
        if (type == 'mysteryore') {
            img.src = 'img/mystery_ore.png';
        } else {
            img.src = `img/${imgId}.jpg`;
        }
        effect.appendChild(img)

        const textNode = document.createTextNode('+' + n);
        if (type == 'mysteryore') effect.style.color = 'red';
        effect.appendChild(textNode);

        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;
        stoneElm.appendChild(effect);
        effect.addEventListener('animationend', () => {
            effect.remove();
        })
    }

    have[type] += n;
}

function exchange(kind) {
    have['emerald'] += have[kind]*rate[kind];
    have[kind] = 0;
}

let timerID;
let timer;
function setDrillTimer(newtimer) {
    if (newtimer <= 0) return;
    if (newtimer == timer) return;

    if (timerID) {
        clearInterval(timerID);
    }

    if (newtimer) {
        timer = newtimer;
    }

    timerID = setInterval(() => {
        dig(null,null,pickaxelvl);
    }, timer);
}