(window.webpackJsonptrilium=window.webpackJsonptrilium||[]).push([[900,274],{900:(e,t,s)=>{"use strict";s.r(t),s.d(t,{showDialog:()=>g});var o=s(9046),a=s(8481),r=s(1274);const i=$("#import-dialog"),d=$("#import-form"),n=i.find(".import-note-title"),p=$("#import-file-upload-input"),c=$("#import-button"),l=$("#safe-import-checkbox"),u=$("#shrink-images-checkbox"),f=$("#text-imported-as-text-checkbox"),m=$("#code-imported-as-code-checkbox"),h=$("#explode-archives-checkbox");let k=null;async function g(e){p.val("").trigger("change"),l.prop("checked",!0),u.prop("checked",!0),f.prop("checked",!0),m.prop("checked",!0),h.prop("checked",!0),k=e,n.text(await a.Z.getNoteTitle(k)),o.Z.openDialog(i)}function b(e){return e.is(":checked")?"true":"false"}d.on("submit",()=>(c.attr("disabled","disabled"),async function(e){const t=Array.from(p[0].files),s={safeImport:b(l),shrinkImages:b(u),textImportedAsText:b(f),codeImportedAsCode:b(m),explodeArchives:b(h)};i.modal("hide"),await r.default.uploadFiles(e,t,s)}(k),!1)),p.on("change",()=>{p.val()?c.removeAttr("disabled"):c.attr("disabled","disabled")})},1274:(e,t,s)=>{"use strict";s.r(t),s.d(t,{uploadFiles:()=>n,default:()=>c});var o=s(6885),a=s(9800),r=s(1520),i=s(9046),d=s(8003);async function n(e,t,s){if(0===t.length)return;const o=i.Z.randomString(10);let r,d=0;for(const i of t){d++;const n=new FormData;n.append("upload",i),n.append("taskId",o),n.append("last",d===t.length?"true":"false");for(const e in s)n.append(e,s[e]);({noteId:r}=await $.ajax({url:baseApiUrl+"notes/"+e+"/import",headers:a.Z.getHeaders(),data:n,dataType:"json",type:"POST",timeout:36e5,contentType:!1,processData:!1}))}}function p(e,t){return{id:e,title:"Import status",message:t,icon:"plus"}}r.Z.subscribeToMessages(async e=>{if("import"===e.taskType)if("task-error"===e.type)o.default.closePersistent(e.taskId),o.default.showError(e.message);else if("task-progress-count"===e.type)o.default.showPersistent(p(e.taskId,"Import in progress: "+e.progressCount));else if("task-succeeded"===e.type){const t=p(e.taskId,"Import finished successfully.");t.closeAfter=5e3,o.default.showPersistent(t),e.result.importedNoteId&&await d.default.tabManager.getActiveTabContext().setNote(e.result.importedNoteId)}});const c={uploadFiles:n}}}]);
//# sourceMappingURL=900.desktop.js.map