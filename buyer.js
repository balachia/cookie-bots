if(BuyBot === undefined) var BuyBot = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
BuyBot.name = 'BuyBot';
BuyBot.version = '0.0.1';
BuyBot.GameVersion = '2.031';

BuyBot.launch = function(){
	/**
	
	All the code you want to delay goes here
	Put "MyMod.isLoaded = 1;" somewhere within
	
	**/
        BuyBot.init = function() {
            Game.customStatsMenu.push(function(){
                CCSE.AppendStatsVersionNumber(BuyBot.name, BuyBot.version);
            });

            BuyBot.isLoaded = 1;
            console.log('init');
        }

        console.log('test');

        if(CCSE.ConfirmGameVersion(BuyBot.name, BuyBot.version, BuyBot.GameVersion)) BuyBot.init();
}

if(!BuyBot.isLoaded){
	if(CCSE && CCSE.isLoaded){
		BuyBot.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(BuyBot.launch);
	}
}
