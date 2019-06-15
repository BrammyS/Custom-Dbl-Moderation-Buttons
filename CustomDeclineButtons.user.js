// ==UserScript==
// @name         DBL decline buttons
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Making my life less painful.
// @author       BrammyS
// @match        https://discordbots.org/moderation/decline*
// @grant        none
// @updateURL    https://github.com/BramEsendam/Custom-Dbl-Moderation-Buttons/raw/master/CustomDeclineButtons.user.js
// @downloadURL  https://github.com/BramEsendam/Custom-Dbl-Moderation-Buttons/raw/master/CustomDeclineButtons.user.js
// ==/UserScript==

(function () {
    var label = document.createElement("LABEL");
    var field = document.getElementsByClassName("field")[0]
    var labelText = document.createTextNode("Custom decline reasons");
    label.appendChild(labelText);
    label.className += "label";
    field.insertBefore(label, field.childNodes[25]);

    var vanillaButtons = document.getElementsByClassName("predefined-Reason");
    var i;

    for (i = 0; i < vanillaButtons.length; i++) {
        console.log("lol:", vanillaButtons[i].onclick);
        let cOnclick = vanillaButtons[i].onclick;
        vanillaButtons[i].onclick = function () {
            cOnclick();
            document.getElementsByName("declinereason")[0].focus();
        }
    }

    addButton("Mentions NSFW", "Your bot mentions NSFW in the long description. Please remove any mentioning of NSFW features in your name and description.");
    addButton("< 300 character ", "Your long description doesn't meet the 300 minimum character requirement.");
    addButton("UrbanDic in non-NSFW", "Your Urban Dictionary command can be used in non-NSFW channels.");
    addButton("NSFW reddit search", "Your Reddit command can be used to search NSFW images in non NSFW channels.");
    addButton("Loli command", "Your COMMANDNAME command provides explicit images of lolis, Please make sure that these images are not included in your bot as it is against Discord's Terms of Service to have them.");
    addButton("Copy/Paste widgets", "You are using the widgets of another bot in your long description. Please use your own widgets.");
    addButton("NSFW command in SFW", "Your COMMANDNAME has NSFW content in it. Please lock this command to NSFW channels only.");
    addButton("Reboot cmd in dms", "Your bot can be rebooted by anyone through Direct Messages.");
    addButton("Owner commands dm", "Your bot has owner commands which can be used by anyone via DMs.");
    addButton("Long description copy-paste", "Your bot's long description is a copy-paste from another bot.");
    addButton("Public eval", "Your bot has an open eval command. Please lock this command for developers only.");
    addButton("Rainbow roles", "Your bot supports rainbow roles. This is API abuse and not allowed on Discord, please remove this feature entirely.");
    addButton("Presence change spam", "Your bot's presence changes every few seconds which is considered API abuse, please limit the amount of times your bot changes it's status to a more reasonable amount, for example every 120 seconds.");
    addButton("%50+ commands not working", "More than 50% of your commands listed on your bots page/help command do not provide a response.");
    addButton("Turkish bot", "Your bot has an owner command that can be used in Direct messages. (reboot). Please restrict this to bot owners only.");
    addButton("Spam command", "Your bot has a command which causes it to spam either a text channel or a user's DMs.");

    function addButton(buttonName, reason) {
        var button = document.createElement("A");
        var buttonText = document.createTextNode(buttonName);
        button.appendChild(buttonText);
        button.className += "predefined-Reason";
        button.onclick = function () {
            var declineBox = document.getElementsByName("declinereason")[0]
            declineBox.value = reason;
            declineBox.focus();
        };
        field.insertBefore(button, field.childNodes[26]);
    }
}

)();
