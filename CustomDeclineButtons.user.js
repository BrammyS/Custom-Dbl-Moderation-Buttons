// ==UserScript==
// @name         DBL decline buttons
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Making my life less painful.
// @author       BrammyS
// @match        https://discordbots.org/moderation/decline*
// @grant        none
// ==/UserScript==

(function () {
    console.log("loaded");
    var label = document.createElement("LABEL");
    var field = document.getElementsByClassName("field")[0]
    var labelText = document.createTextNode("Custom decline reasons");
    label.appendChild(labelText);
    label.className += "label";
    field.insertBefore(label, field.childNodes[25]);

    addButton("Mentions NSFW", "Your bot mentions NSFW in the long description.");
    addButton("UrbanDic in non-NSFW", "Your Urban Dictionary command can be used in non-NSFW channels.");
    addButton("NSFW reddit search", "Your Reddit command can be used to search NSFW images in non NSFW channels.");
    addButton("Loli command", "Your COMMANDNAME command provides explicit images of lolis, Please make sure that these images are not included in your bot as it is against Discord's Terms of Service to have them.");
    addButton("Copy/Paste widgets", "You are using the widgets of another bot in your long description. Please use your own widgets.");
    addButton("NSFW command in SFW", "Your COMMANDNAME has NSFW content in it. Please lock this command to NSFW channels only.");
    addButton("Public eval", "Your bot has an open eval command. Please lock this command for developers only.");
    addButton("Rainbow roles", "Your bot supports rainbow roles. This is API abuse and not allowed on Discord, please remove this feature entirely.");
    addButton("Presence change spam", "Your bot's presence changes every few seconds which is considered API abuse, please limit the amount of times your bot changes it's status to a more reasonable amount, for example every 120 seconds.");
    addButton("%50+ commands not working", "More than 50% of your commands listed on your bots page/help command do not provide a response.");

    function addButton(buttonName, reason) {
        var button = document.createElement("A");
        var buttonText = document.createTextNode(buttonName);
        button.appendChild(buttonText);
        button.className += "predefined-Reason";
        button.onclick = function () {
            var declineBox = document.getElementsByName("declinereason")[0]
            declineBox.value = reason;
        };
        field.insertBefore(button, field.childNodes[26]);
    }
}

)();
