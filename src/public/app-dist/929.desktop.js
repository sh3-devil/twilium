(window.webpackJsonptrilium=window.webpackJsonptrilium||[]).push([[929],{7929:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var s=n(9046),i=n(9800),o=n(6885);class a{constructor(){if($("#options-other").html('\n<div>\n    <h4>Spell check</h4>\n\n    <p>These options apply only for desktop builds, browsers will use their own native spell check. App restart is required after change.</p>\n\n    <div class="custom-control custom-checkbox">\n        <input type="checkbox" class="custom-control-input" id="spell-check-enabled">\n        <label class="custom-control-label" for="spell-check-enabled">Enable spellcheck</label>\n    </div>\n\n    <br/>\n\n    <div class="form-group">\n        <label for="spell-check-language-code">Language code(s)</label>\n        <input type="text" class="form-control" id="spell-check-language-code" placeholder="for example &quot;en-US&quot;, &quot;de-AT&quot;">\n    </div>\n\n    <p>Multiple languages can be separated by comma, e.g. <code>en-US, de-DE, cs</code>. Changes to the spell check options will take effect after application restart.</p>\n    \n    <p><strong>Available language codes: </strong> <span id="available-language-codes"></span></p>\n</div>\n\n<div>\n    <h4>Image compression</h4>\n\n    <div class="form-group">\n        <label for="image-max-width-height">Max width / height of an image in pixels (image will be resized if it exceeds this setting).</label>\n        <input class="form-control" id="image-max-width-height" type="number">\n    </div>\n\n    <div class="form-group">\n        <label for="image-jpeg-quality">JPEG quality (0 - worst quality, 100 best quality, 50 - 85 is recommended)</label>\n        <input class="form-control" id="image-jpeg-quality" min="0" max="100" type="number">\n    </div>\n</div>\n\n<div>\n    <h4>Note erasure timeout</h4>\n\n    <p>Deleted notes are at first only marked as deleted and it is possible to recover them \n    from Recent Notes dialog. After period of time, deleted notes are "erased" which means \n    their content is not recoverable anymore. This setting allows you to configure the length \n    of the period between deleting and erasing the note.</p>\n\n    <div class="form-group">\n        <label for="erase-notes-after-time-in-seconds">Erase notes after X seconds</label>\n        <input class="form-control" id="erase-notes-after-time-in-seconds" type="number" min="0">\n    </div>\n</div>\n\n<div>\n    <h4>Protected session timeout</h4>\n\n    <p>Protected session timeout is a time period after which the protected session is wiped out from\n        browser\'s memory. This is measured from the last interaction with protected notes. See <a href="https://github.com/zadam/trilium/wiki/Protected-notes" class="external">wiki</a> for more info.</p>\n\n    <div class="form-group">\n        <label for="protected-session-timeout-in-seconds">Protected session timeout (in seconds)</label>\n        <input class="form-control" id="protected-session-timeout-in-seconds" type="number">\n    </div>\n</div>\n\n<div>\n    <h4>Note revisions snapshot interval</h4>\n\n    <p>Note revision snapshot time interval is time in seconds after which new note revision will be created for the note. See <a href="https://github.com/zadam/trilium/wiki/Note-revisions" class="external">wiki</a> for more info.</p>\n\n    <div class="form-group">\n        <label for="note-revision-snapshot-time-interval-in-seconds">Note revision snapshot time interval (in seconds)</label>\n        <input class="form-control" id="note-revision-snapshot-time-interval-in-seconds" type="number">\n    </div>\n</div>'),this.$spellCheckEnabled=$("#spell-check-enabled"),this.$spellCheckLanguageCode=$("#spell-check-language-code"),this.$spellCheckEnabled.on("change",()=>{const e={spellCheckEnabled:this.$spellCheckEnabled.is(":checked")?"true":"false"};return i.Z.put("options",e).then(()=>o.default.showMessage("Options change have been saved.")),!1}),this.$spellCheckLanguageCode.on("change",()=>{const e={spellCheckLanguageCode:this.$spellCheckLanguageCode.val()};return i.Z.put("options",e).then(()=>o.default.showMessage("Options change have been saved.")),!1}),this.$availableLanguageCodes=$("#available-language-codes"),s.Z.isElectron()){const{webContents:e}=s.Z.dynamicRequire("electron").remote.getCurrentWindow();this.$availableLanguageCodes.text(e.session.availableSpellCheckerLanguages.join(", "))}this.$eraseNotesAfterTimeInSeconds=$("#erase-notes-after-time-in-seconds"),this.$eraseNotesAfterTimeInSeconds.on("change",()=>{const e=this.$eraseNotesAfterTimeInSeconds.val();return i.Z.put("options",{eraseNotesAfterTimeInSeconds:e}).then(()=>{o.default.showMessage("Options change have been saved.")}),!1}),this.$protectedSessionTimeout=$("#protected-session-timeout-in-seconds"),this.$protectedSessionTimeout.on("change",()=>{const e=this.$protectedSessionTimeout.val();return i.Z.put("options",{protectedSessionTimeout:e}).then(()=>{o.default.showMessage("Options change have been saved.")}),!1}),this.$noteRevisionsTimeInterval=$("#note-revision-snapshot-time-interval-in-seconds"),this.$noteRevisionsTimeInterval.on("change",()=>{const e={noteRevisionSnapshotTimeInterval:this.$noteRevisionsTimeInterval.val()};return i.Z.put("options",e).then(()=>o.default.showMessage("Options change have been saved.")),!1}),this.$imageMaxWidthHeight=$("#image-max-width-height"),this.$imageJpegQuality=$("#image-jpeg-quality"),this.$imageMaxWidthHeight.on("change",()=>{const e={imageMaxWidthHeight:this.$imageMaxWidthHeight.val()};return i.Z.put("options",e).then(()=>o.default.showMessage("Options change have been saved.")),!1}),this.$imageJpegQuality.on("change",()=>{const e={imageJpegQuality:this.$imageJpegQuality.val()};return i.Z.put("options",e).then(()=>o.default.showMessage("Options change have been saved.")),!1})}optionsLoaded(e){this.$spellCheckEnabled.prop("checked","true"===e.spellCheckEnabled),this.$spellCheckLanguageCode.val(e.spellCheckLanguageCode),this.$eraseNotesAfterTimeInSeconds.val(e.eraseNotesAfterTimeInSeconds),this.$protectedSessionTimeout.val(e.protectedSessionTimeout),this.$noteRevisionsTimeInterval.val(e.noteRevisionSnapshotTimeInterval),this.$imageMaxWidthHeight.val(e.imageMaxWidthHeight),this.$imageJpegQuality.val(e.imageJpegQuality)}}}}]);
//# sourceMappingURL=929.desktop.js.map