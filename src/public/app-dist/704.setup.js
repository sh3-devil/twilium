(window.webpackJsonptrilium=window.webpackJsonptrilium||[]).push([[704],{704:(e,t,o)=>{"use strict";o.r(t),o.d(t,{showDialog:()=>h});var n=o(847),s=o(46),a=o(885),c=o(806),r=o(159),i=o(481);const l=$("#move-to-dialog"),d=$("#move-to-form"),u=$("#move-to-note-autocomplete"),p=$("#move-to-note-list");let f;async function h(e){f=e,s.Z.openDialog(l),u.val("").trigger("focus"),p.empty();for(const e of f){const t=c.Z.getBranch(e),o=await c.Z.getNote(t.noteId);p.append($("<li>").text(o.title))}n.Z.initNoteAutocomplete(u),n.Z.showRecentNotes(u)}d.on("submit",()=>{const e=u.getSelectedPath();if(e){l.modal("hide");const{noteId:t,parentNoteId:o}=i.Z.getNoteIdAndParentIdFromNotePath(e);c.Z.getBranchId(o,t).then(e=>async function(e){await r.Z.moveToParentNote(f,e);const t=c.Z.getBranch(e),o=await t.getNote();a.default.showMessage("Selected notes have been moved into "+o.title)}(e))}else console.error("No path to move to.");return!1})},159:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var n=o(46),s=o(800),a=o(885),c=o(806),r=o(968),i=o(520);function l(e){const t=r.Z.getHoistedNoteId();return e.filter(e=>{const o=c.Z.getBranch(e);return"root"!==o.noteId&&o.noteId!==t})}function d(e,t){return{id:e,title:"Delete status",message:t,icon:"trash"}}i.Z.subscribeToMessages(async e=>{if("delete-notes"===e.taskType)if("task-error"===e.type)a.default.closePersistent(e.taskId),a.default.showError(e.message);else if("task-progress-count"===e.type)a.default.showPersistent(d(e.taskId,"Delete notes in progress: "+e.progressCount));else if("task-succeeded"===e.type){const t=d(e.taskId,"Delete finished successfully.");t.closeAfter=5e3,a.default.showPersistent(t)}}),i.Z.subscribeToMessages(async e=>{if("undelete-notes"===e.taskType)if("task-error"===e.type)a.default.closePersistent(e.taskId),a.default.showError(e.message);else if("task-progress-count"===e.type)a.default.showPersistent(d(e.taskId,"Undeleting notes in progress: "+e.progressCount));else if("task-succeeded"===e.type){const t=d(e.taskId,"Undeleting notes finished successfully.");t.closeAfter=5e3,a.default.showPersistent(t)}});const u={moveBeforeBranch:async function(e,t){if(e=l(e),"root"!==t)for(const o of e){const e=await s.Z.put(`branches/${o}/move-before/${t}`);if(!e.success)return void alert(e.message)}else alert("Cannot move notes before root note.")},moveAfterBranch:async function(e,t){e=l(e);const o=await c.Z.getBranch(t).getNote();if("root"!==o.noteId&&o.noteId!==r.Z.getHoistedNoteId()){e.reverse();for(const o of e){const e=await s.Z.put(`branches/${o}/move-after/${t}`);if(!e.success)return void alert(e.message)}}else alert("Cannot move notes after root note.")},moveToParentNote:async function(e,t){e=l(e);for(const o of e){const e=c.Z.getBranch(o);if(e.noteId===r.Z.getHoistedNoteId()||"search"===(await e.getParentNote()).type)continue;const n=await s.Z.put(`branches/${o}/move-to/${t}`);if(!n.success)return void alert(n.message)}},deleteNotes:async function(e){if(0===(e=l(e)).length)return!1;const t=$('<div class="form-check">').append($('<input type="checkbox" class="form-check-input" id="delete-clones-checkbox">')).append($('<label for="delete-clones-checkbox">').text("delete also all note clones").attr("title","all clones of selected notes will be deleted and as such the whole note will be deleted.")),a=$("<ul>");for(const t of e){const e=await c.Z.getBranch(t).getNote();a.append($("<li>").text(e.title))}const r=$("<div>").append($("<p>").text("This will delete the following notes and their sub-notes: ")).append(a).append(t),i=await o.e(590).then(o.bind(o,590));if(!await i.confirm(r))return!1;const d=t.find("input").is(":checked"),u=n.Z.randomString(10);let p=0;for(const t of e){p++;const o=`?taskId=${u}&last=${p===e.length?"true":"false"}`,n=c.Z.getBranch(t);d?await s.Z.remove("notes/"+n.noteId+o):await s.Z.remove("branches/"+t+o)}return!0},moveNodeUpInHierarchy:async function(e){if(r.Z.isRootNode(e)||r.Z.isTopLevelNode(e)||"search"===e.getParent().data.noteType)return;const t=await s.Z.put("branches/"+e.data.branchId+"/move-after/"+e.getParent().data.branchId);t.success?!r.Z.isTopLevelNode(e)&&e.getParent().getChildren().length<=1&&(e.getParent().folder=!1,e.getParent().renderTitle()):alert(t.message)},cloneNoteAfter:async function(e,t){const o=await s.Z.put("notes/"+e+"/clone-after/"+t);o.success||alert(o.message)},cloneNoteTo:async function(e,t,o){const n=await s.Z.put(`notes/${e}/clone-to/${t}`,{prefix:o});n.success||alert(n.message)}}},847:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(800),s=o(95),a=o(46);async function c(e,t){const o=await n.Z.get("autocomplete?query="+encodeURIComponent(e)+"&activeNoteId="+s.default.tabManager.getActiveTabNoteId());0===o.length&&o.push({pathTitle:"No results",path:""}),t(o)}function r(e){a.Z.isMobile()||(e.setSelectedPath(""),e.autocomplete("val","").trigger("change"))}function i(e){a.Z.isMobile()||(e.setSelectedPath(""),e.autocomplete("val",""),e.trigger("focus"))}const l={autocompleteSource:c,initNoteAutocomplete:function(e,t){if(e.hasClass("note-autocomplete-input")||a.Z.isMobile())return e;t=t||{},e.addClass("note-autocomplete-input");const o=$("<a>").addClass("input-group-text input-clearer-button bx bx-x").prop("title","Clear text field"),n=$("<a>").addClass("input-group-text show-recent-notes-button bx bx-time").prop("title","Show recent notes"),s=$("<a>").addClass("input-group-text go-to-selected-note-button bx bx-arrow-to-right").attr("data-action","note"),l=$("<div>").addClass("input-group-append").append(o).append(n);return t.hideGoToSelectedNoteButton||l.append(s),e.after(l),o.on("click",()=>r(e)),n.on("click",t=>(i(e),!1)),e.autocomplete({appendTo:document.querySelector("body"),hint:!1,autoselect:!0,openOnFocus:!0,minLength:0,tabAutocomplete:!1},[{source:c,displayKey:"pathTitle",templates:{suggestion:function(e){return e.highlightedTitle}},cache:!1}]),e.on("autocomplete:selected",(t,o)=>e.setSelectedPath(o.path)),e.on("autocomplete:closed",()=>{e.val().trim()||r(e)}),e},showRecentNotes:i,init:function(){$.fn.getSelectedPath=function(){return $(this).val().trim()?$(this).attr("data-note-path"):""},$.fn.setSelectedPath=function(e){e=e||"",$(this).attr("data-note-path",e),$(this).closest(".input-group").find(".go-to-selected-note-button").toggleClass("disabled",!e.trim()).attr("data-note-path",e)}}}}}]);
//# sourceMappingURL=704.setup.js.map