// ==UserScript==
// @name         Compact Outlook Notes
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Compact Outlook Notes
// @author       ppapousek@gmail.com
// @match        https://outlook.office.com/mail/notes
// @icon         https://www.google.com/s2/favicons?sz=64&domain=office.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let el = document.createElement('style');
    el.type = 'text/css';
    el.innerText =
            '.n-noteFocus .n-textBox { padding: 0 15px !important; }' +
            '.n-editorContainer div.public-DraftEditor-content { line-height: 12.5px !important; font-size: 12px !important; }' +
            '.n-detailViewContainer, .n-noteFocus { max-width: 1250px !important;}' +
            '.n-left-pad, .n-padding { max-width: 15px !important; }' +
            '.n-detailViewContainer { margin: 15px 0 15px !important; }';

    document.head.appendChild(el);
})();