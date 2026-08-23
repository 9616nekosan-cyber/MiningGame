const stoneElm = document.getElementById('stone');

const stonecountElm = document.getElementById('cobblestone-count');
const coalcountElm = document.getElementById('coal-count');
const ironcountElm = document.getElementById('iron-ingot-count');
const goldcountElm = document.getElementById('gold-ingot-count');
const diamondcountElm = document.getElementById('diamond-count');
const emeraldcountElm = document.getElementById('emerald-count');
const mysteryorecountElm = document.getElementById('mystery-ore-count');

let have = {
    stone: 0,
    coal: 0,
    iron: 0,
    gold: 0,
    diamond: 0,
    emerald: 0,
    mysteryore: 0
}

let pickaxe = 0;
/*
0:wooden pickaxe
1:stone pickaxe
2:iron pickaxe
3:diamond pickaxe
*/