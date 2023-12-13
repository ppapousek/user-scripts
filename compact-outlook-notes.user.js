// ==UserScript==
// @name         Compact Outlook Notes
// @namespace    https://github.com/ppapousek/user-scripts
// @version      2
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
    // language=CSS
    el.innerText = `
        #LeftRail, #TopBar, .n-detailViewHeader, #appContainer > div[tabindex="-1"] {
            display: none !important;
        }

        .rCmFE {
            height: calc(100vh - 40px) !important;
        }

        .n-noteFocus {
            max-height: 1500px !important;

            .n-textBox {
                padding: 0 15px !important;
            }
        }

        .n-stickyNotePreview {
            margin-top: -20px !important;

            & p:nth-child(1) ~ * {
                display: none !important;
            }
        }

        .n-notePreviewContent {
            padding-bottom: 5px !important;
        }

        .n-viewContainer {
            margin-top: -50px !important;
        }

        .n-editorContainer div.public-DraftEditor-content {
            line-height: 15px !important;
            font-size: 14px !important;
        }

        .n-detailViewContainer, .n-noteFocus {
            max-width: 1250px !important;
        }

        .n-left-pad, .n-padding {
            max-width: 15px !important;
        }

        .n-detailViewContainer {
            margin: 15px 0 15px !important;
        }`;

    document.head.appendChild(el);
})();