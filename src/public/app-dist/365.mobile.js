(window.webpackJsonptrilium=window.webpackJsonptrilium||[]).push([[365],{4365:(t,o,e)=>{"use strict";e.r(o),e.d(o,{showDialog:()=>f});var n=e(9847),a=e(9046),c=e(8481),i=e(6885),l=e(9806),s=e(8159);const r=$("#clone-to-dialog"),d=$("#clone-to-form"),p=$("#clone-to-note-autocomplete"),u=$("#clone-prefix"),w=$("#clone-to-note-list");let g;async function f(t){g=[];for(const o of t)g.includes(o)||g.push(o);a.Z.openDialog(r),p.val("").trigger("focus"),w.empty();for(const t of g){const o=await l.Z.getNote(t);w.append($("<li>").text(o.title))}n.Z.initNoteAutocomplete(p),n.Z.showRecentNotes(p)}d.on("submit",()=>{const t=p.getSelectedPath();return t?(r.modal("hide"),async function(t){const{noteId:o,parentNoteId:e}=c.Z.getNoteIdAndParentIdFromNotePath(t),n=await l.Z.getBranchId(e,o);for(const t of g){await s.Z.cloneNoteTo(t,n,u.val());const o=await l.Z.getNote(t),e=await l.Z.getBranch(n).getNote();i.default.showMessage(`Note "${o.title}" has been cloned into ${e.title}`)}}(t)):console.error("No path to clone to."),!1})}}]);
//# sourceMappingURL=365.mobile.js.map