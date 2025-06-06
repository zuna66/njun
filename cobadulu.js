<script type='text/javascript'>
document.addEventListener('DOMContentLoaded', function () {
    let getHead = document.querySelector('head');
let getBody = document.querySelector('body');

let createLinkSwiper = document.createElement('link');
createLinkSwiper.setAttribute('rel', 'stylesheet');
createLinkSwiper.setAttribute('href', 'https://unpkg.com/swiper@11.2.6/swiper-bundle.min.css');
getHead.appendChild(createLinkSwiper);

let createScriptSwiper = document.createElement('script');
createScriptSwiper.setAttribute('src', 'https://unpkg.com/swiper@11.2.6/swiper-bundle.min.js');
createScriptSwiper.onload = () => { // Tunggu sampai script Swiper selesai dimuat
    initializeSwiper(); // Panggil fungsi untuk menginisialisasi Swiper setelah script dimuat
};
getBody.appendChild(createScriptSwiper);

let createLinkFontAwesome = document.createElement('link');
createLinkFontAwesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css')
createLinkFontAwesome.setAttribute('rel', 'stylesheet')
getHead.appendChild(createLinkFontAwesome);



// 
// 
// 



let getFooter = document.querySelector('#footer .row .col-md-12');
let getWidget = document.querySelector('.widget');


let createPlayerBlock = document.createElement('div');
createPlayerBlock.classList.add('player-block');
getFooter.insertBefore(createPlayerBlock, getWidget);

let createBlockTitle = document.createElement('div');
createBlockTitle.classList.add('block-title');
createPlayerBlock.appendChild(createBlockTitle);


let divCreateTextBlockTitle = document.createElement('div');
let createTextBlockTitle = document.createTextNode('Player Online Di XOTOGEL');
divCreateTextBlockTitle.classList.add('all-player-online');
divCreateTextBlockTitle.appendChild(createTextBlockTitle);


let createDivBlockTitle = document.createElement('div');
createDivBlockTitle.setAttribute('id', 'allPlayerPlaying');

let createIconUser = document.createElement('i');
createIconUser.classList.add('fa-solid', 'fa-user', 'icon-user');

let createBoxIcon = document.createElement('div');
createBoxIcon.classList.add('box-icon');

createBoxIcon.appendChild(createIconUser);
createBoxIcon.appendChild(createDivBlockTitle);

createBlockTitle.appendChild(divCreateTextBlockTitle);
createBlockTitle.appendChild(createBoxIcon);



// 
// 
// 
// 

	let createSwiperContainer = document.createElement('div');
	createSwiperContainer.classList.add('swiper-container', 'horizontal')
	createPlayerBlock.appendChild(createSwiperContainer);
	
	let createSwiperWrapper = document.createElement('div');
	createSwiperWrapper.classList.add('swiper-wrapper')
	createSwiperContainer.appendChild(createSwiperWrapper);

let providerName = [
	'Pragmatic Play',
	'PG Soft',
	'IDN',
	'Habanero',
	];
let providerImage = [
	'https://i.ibb.co/4RH6bBWj/logo-pp.webp',
	'https://i.ibb.co/v484bnQ5/logo-pg.webp',
	'https://i.ibb.co/RkPc7cVs/idn.png',
	'https://i.ibb.co/JY8TLXM/logo-hb.webp',
	];
let playerAllCard = [
	'playerAllCardOne',
	'playerAllCardTwo',
	'playerAllCardThree',
	'playerAllCardFour'
	];
let playingGameCardOne = [
	'playingGameOneCardOne',
	'playingGameTwoCardOne',
	'playingGameThreeCardOne',
	'playingGameFourCardOne',
	'playingGameFiveCardOne'
	];
let playingGameCardTwo = [
	'playingGameOneCardTwo',
	'playingGameTwoCardTwo',
	'playingGameThreeCardTwo',
	'playingGameFourCardTwo',
	'playingGameFiveCardTwo'
	];
let playingGameCardThree = [
	'playingGameOneCardThree',
	'playingGameTwoCardThree',
	'playingGameThreeCardThree',
	'playingGameFourCardThree',
	'playingGameFiveCardThree'
	];
let playingGameCardFour = [
	'playingGameOneCardFour',
	'playingGameTwoCardFour',
	'playingGameThreeCardFour',
	'playingGameFourCardFour',
	'playingGameFiveCardFour'
	];
	
let allCardNames = [
	playingGameCardOne,
	playingGameCardTwo,
	playingGameCardThree,
	playingGameCardFour
	];
	
let nameGamePragmaticPlay = [
	'Gate Of Olympus 1000',
	'Mahjong Wins 3',
	'Starlight Princess 1000',
	'Sweet Bonanza 1000',
	'5 Lions Megaways'
	];
let nameGamePGSoft = [
	'Mahjong Ways',
	'Wild Bounty',
	'Wild Bandito',
	'Lucky Neko',
	'Treasure of Aztec'
	];
let nameGameIDN = [
	'Sir Loin',
	'Ragnarok',
	'Fortune Pot',
	'The Curse of Medusa',
	'Power Of Odin'
	];
let nameGameHabanero = [
	'Koi Gate',
	'Mystic Fortune Deluxe',
	'Lantern Luck',
	'Soju Bomb',
	'Hot Hot Fruit'
	];

	let allGameNames = [
		nameGamePragmaticPlay,
		nameGamePGSoft,
		nameGameIDN,
		nameGameHabanero,
		];

for (let i = 0; i < providerName.length ; i++) {
	
	
	let createSwiperSlide = document.createElement('div');
	createSwiperSlide.classList.add('swiper-slide')
	createSwiperWrapper.appendChild(createSwiperSlide);
	
	
	let createBlockProvider = document.createElement('div');
	createBlockProvider.classList.add('block-provider')
	createSwiperSlide.appendChild(createBlockProvider);
	

	let createHeadBlockProvider = document.createElement('a');
	createHeadBlockProvider.setAttribute('href', '#')
	createHeadBlockProvider.classList.add('head-block-provider');
	createBlockProvider.appendChild(createHeadBlockProvider);
	
	let createImageFrameHeadProvider = document.createElement('div');
	createImageFrameHeadProvider.classList.add('image-frame-head-provider');
	createHeadBlockProvider.appendChild(createImageFrameHeadProvider);

	let imageHeadProvider = document.createElement('img')
	imageHeadProvider.classList.add('image-head-provider')
	imageHeadProvider.setAttribute('src', providerImage[i])
	imageHeadProvider.setAttribute('alt', 'provider')
	createImageFrameHeadProvider.appendChild(imageHeadProvider);
	
	let createPlayerOnlineProvider = document.createElement('div');
	createPlayerOnlineProvider.classList.add('player-online-provider');
	createHeadBlockProvider.appendChild(createPlayerOnlineProvider);
		
	let createIconUserOnline = document.createElement('i');
	createIconUserOnline.classList.add('fa-solid', 'fa-user', 'me-1', 'me-sm-2', 'icon-user');
	createPlayerOnlineProvider.appendChild(createIconUserOnline)
	
	let createPlayerAllCardOne = document.createElement('div');
	createPlayerAllCardOne.setAttribute('id', playerAllCard[i]);
	createPlayerOnlineProvider.appendChild(createPlayerAllCardOne)

	
  let createTitleSectionBlockProvider = document.createElement('div');
  let titleSectionProvider = document.createTextNode(`Top 5 Most Played ${providerName[i]}`);
  createTitleSectionBlockProvider.classList.add('title-section-block-provider');
  createTitleSectionBlockProvider.appendChild(titleSectionProvider);
  createBlockProvider.appendChild(createTitleSectionBlockProvider);

	// 
	// 
	// 
	
	let createBodyBlockProvider = document.createElement('div');
	createBodyBlockProvider.classList.add('body-block-provider');
	createBlockProvider.appendChild(createBodyBlockProvider);
	
	let createSwiperContainerVertical = document.createElement('div');
	createSwiperContainerVertical.classList.add('swiper-container', 'vertical');
	createBodyBlockProvider.appendChild(createSwiperContainerVertical);
	
	let createSwiperWrapperVertical = document.createElement('div');
	createSwiperWrapperVertical.classList.add('swiper-wrapper', 'swiper-wrapper-vertical');
	createSwiperContainerVertical.appendChild(createSwiperWrapperVertical);
	

	


	for (let j = 0; j < playingGameCardOne.length; j++) {
		
	let createSwiperSlideVertical = document.createElement('div');
	createSwiperSlideVertical.classList.add('swiper-slide', 'swiper-slide-vertical');
	createSwiperWrapperVertical.appendChild(createSwiperSlideVertical);
		
	let createSectionBlockProvider = document.createElement('a');
	createSectionBlockProvider.setAttribute('href', "#")
	createSectionBlockProvider.classList.add('section-block-provider');
	createSwiperSlideVertical.appendChild(createSectionBlockProvider);
	
	
	let createTitleSectionProvider = document.createElement('div');
	let createTeksTitleSectionProvider = document.createTextNode(allGameNames[i][j])
	createTitleSectionProvider.appendChild(createTeksTitleSectionProvider)
	createTitleSectionProvider.classList.add('title-section-provider');
	createSectionBlockProvider.appendChild(createTitleSectionProvider);
	

	let createBoxPlayerOnline = document.createElement('div')
	createBoxPlayerOnline.classList.add('box-player-online');
	createSectionBlockProvider.appendChild(createBoxPlayerOnline);

	let createIconUserBlockProvider = document.createElement('i');
	createIconUserBlockProvider.classList.add('fa-solid', 'fa-user', 'me-1', 'me-sm-2', 'icon-user')
	createBoxPlayerOnline.appendChild(createIconUserBlockProvider);	
		
	let createPlayingGameCardOne = document.createElement('div');
  createPlayingGameCardOne.setAttribute('id', allCardNames[i][j]);
  createPlayingGameCardOne.classList.add('player-online-game');
  createBoxPlayerOnline.appendChild(createPlayingGameCardOne);
	

	}
	
	
}

function initializeSwiper() {
	        const swiperHorizontal = new Swiper('.horizontal', {
        slidesPerView: 3, 
        spaceBetween: 10, 
        loop:true,
        autoplay: {
            delay: 10000, 
        },
        });

        const swiperVertical = new Swiper('.vertical', {
        slidesPerView: 3,  
        direction:'vertical',
        loop:true,
        autoplay: {
            delay: 3000, 
        },
        });
}

const providerCardOne = [
  { id: "playingGameOneCardOne", initialValue: 910, min: 913, max: 1413 },
  { id: "playingGameTwoCardOne", initialValue: 831, min: 834, max: 1343 },
  { id: "playingGameThreeCardOne", initialValue: 914, min: 917, max: 1565 },
  { id: "playingGameFourCardOne", initialValue: 750, min: 753, max: 1205 },
  { id: "playingGameFiveCardOne", initialValue: 804, min: 808, max: 1430 }
];

const providerCardTwo = [
  { id: "playingGameOneCardTwo", initialValue: 842, min: 854, max: 1423 },
  { id: "playingGameTwoCardTwo", initialValue: 912, min: 923, max: 1530 },
  { id: "playingGameThreeCardTwo", initialValue: 822, min: 855, max: 1420 },
  { id: "playingGameFourCardTwo", initialValue: 912, min: 915, max: 1510 },
  { id: "playingGameFiveCardTwo", initialValue: 752, min: 760, max: 1330 }
];

const providerCardThree = [
  { id: "playingGameOneCardThree", initialValue: 432, min: 435, max: 883 },
  { id: "playingGameTwoCardThree", initialValue: 343, min: 346, max: 778 },
  { id: "playingGameThreeCardThree", initialValue: 445, min: 448, max: 880 },
  { id: "playingGameFourCardThree", initialValue: 346, min: 348, max: 711 },
  { id: "playingGameFiveCardThree", initialValue: 254, min: 251, max: 618 }
];

const providerCardFour = [
  { id: "playingGameOneCardFour", initialValue: 333, min: 336, max: 754 },
  { id: "playingGameTwoCardFour", initialValue: 438, min: 441, max: 863 },
  { id: "playingGameThreeCardFour", initialValue: 240, min: 243, max: 658 },
  { id: "playingGameFourCardFour", initialValue: 330, min: 334, max: 746 },
  { id: "playingGameFiveCardFour", initialValue: 435, min: 438, max: 874 }
];

function updateRandomNumbers(providerCards) {
  
  providerCards.forEach(card => {
    let currentNumber = card.initialValue;
    setInterval(function() {
      
      let direction;
      const numberMin = currentNumber <= card.min;
      const numberMax = currentNumber >= card.max;

      if (numberMin) {
        direction = 1;
      } else if (numberMax) {
        direction = -1;
      } else {
        direction = Math.random() > 0.5 ? 1 : -1;
      }

      const changeAmount = Math.floor(Math.random() * 10); 
      currentNumber += direction * changeAmount;

      
      if (currentNumber < card.min) currentNumber = card.min;
      if (currentNumber > card.max) currentNumber = card.max;

      
      document.getElementById(card.id).innerHTML = currentNumber;
      
     
      updateTotalScoreCardOne();
    }, 3000); 
  });
}

let totalCardOne = 0;
let totalCardTwo = 0;
let totalCardThree = 0;
let totalCardFour = 0;

function updateTotalScoreCardOne() {
  totalCardOne = providerCardOne.reduce((total, card) => {
    const cardValue = parseInt(document.getElementById(card.id).textContent);
    return total + cardValue;
  }, 0);

  totalCardTwo = providerCardTwo.reduce((total, card) => {
    const cardValue = parseInt(document.getElementById(card.id).textContent);
    return total + cardValue;
  }, 0);

  totalCardThree = providerCardThree.reduce((total, card) => {
    const cardValue = parseInt(document.getElementById(card.id).textContent);
    return total + cardValue;
  }, 0);

  totalCardFour = providerCardFour.reduce((total, card) => {
    const cardValue = parseInt(document.getElementById(card.id).textContent);
    return total + cardValue;
  }, 0);

  let playerAll = totalCardOne + totalCardTwo + totalCardThree + totalCardFour; 
 

  document.getElementById("playerAllCardOne").innerHTML = totalCardOne;
  document.getElementById("playerAllCardTwo").innerHTML = totalCardTwo;
  document.getElementById("playerAllCardThree").innerHTML = totalCardThree;
  document.getElementById("playerAllCardFour").innerHTML = totalCardFour;


  document.getElementById("allPlayerPlaying").innerHTML = playerAll;
}


  updateRandomNumbers(providerCardOne);
  updateRandomNumbers(providerCardTwo);
  updateRandomNumbers(providerCardThree);
  updateRandomNumbers(providerCardFour);
});

$(document).ready(function () {$('.copyright').append('<div class="wrapper"><div class="center-text"><a title="DMCA.com Protection Status" class="dmca-badge" href="//www.dmca.com/Protection/Status.aspx?ID=b90904fe-3361-43e0-abec-5d1354ae8099" target="_blank"><img alt="DMCA.com Protection Status" src ="https://images.dmca.com/Badges/_dmca_premi_badge_5.png?ID=b90904fe-3361-43e0-abec-5d1354ae8099" style="margin: 0 auto;"></a></div></div>');});</script>
            </p>
