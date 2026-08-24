const stoneElm = document.getElementById('stone');

const stonecountElm = document.getElementById('cobblestone-count');
const coalcountElm = document.getElementById('coal-count');
const ironcountElm = document.getElementById('iron-ingot-count');
const goldcountElm = document.getElementById('gold-ingot-count');
const diamondcountElm = document.getElementById('diamond-count');
const emeraldcountElm = document.getElementById('emerald-count');
const mysteryorecountElm = document.getElementById('mystery-ore-count');

const exchStoneElm = document.getElementById('exchange-cobblestone');
const exchCoalElm = document.getElementById('exchange-coal');
const exchIronElm = document.getElementById('exchange-iron');
const exchGoldElm = document.getElementById('exchange-gold');
const exchDiaElm = document.getElementById('exchange-diamond');

const useMysteryoreElm = document.getElementById('mystery-ore');

const upgradePickaxeElm = document.getElementById('upgrade-pickaxe');
const buyDrillElm = document.getElementById('buy-drill');

let pickaxes = [
    '木のつるはし',
    '石のつるはし',
    '鉄のつるはし',
    'ダイヤモンドのつるはし'
]
let pickaxeCost = [0, 64, 1024, 8192];
let pickaxeImg = ['img/wooden_pickaxe.jpg', 'img/stone_pickaxe.jpg', 'img/iron_pickaxe.jpg', 'img/diamond_pickaxe.jpg',]

let clickMag = 1;
let drillMag = 1;


let mysteryoreMax = localStorage.getItem('mysteryoreMax') ? parseInt(localStorage.getItem('mysteryoreMax')) : 3;
let pickaxelvl = localStorage.getItem('pickaxelvl') ? parseInt(localStorage.getItem('pickaxelvl')) : 0;
let drillCount = localStorage.getItem('drillCount') ? parseInt(localStorage.getItem('drillCount')) : 0;
let drillCost = localStorage.getItem('drillCost') ? parseInt(localStorage.getItem('drillCost')) : 256;

// オブジェクトの読み込み（JSON.parse を使う）
let have = localStorage.getItem('have') ? JSON.parse(localStorage.getItem('have')) : {
    stone: 0,
    coal: 0,
    iron: 0,
    gold: 0,
    diamond: 0,
    emerald: 0,
    mysteryore: 0
};

let rate = localStorage.getItem('rate') ? JSON.parse(localStorage.getItem('rate')) : {
    stone: 1,
    coal: 8,
    iron: 32,
    gold: 256,
    diamond: 1024    
};