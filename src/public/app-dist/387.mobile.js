(window.webpackJsonptrilium=window.webpackJsonptrilium||[]).push([[387],{7387:(t,e,n)=>{"use strict";n.r(e),n.d(e,{showCurrentNoteRevisions:()=>u,showNoteRevisionsDialog:()=>f});var o=n(9046),i=n(9800),s=n(6885),a=n(4362);const d=$("#note-revisions-dialog"),r=$("#note-revision-list"),l=$("#note-revision-list-dropdown"),c=$("#note-revision-content"),p=$("#note-revision-title"),v=$("#note-revision-title-buttons"),w=$("#note-revisions-erase-all-revisions-button");l.dropdown(),l.parent().on("hide.bs.dropdown",t=>{t.clickEvent&&t.preventDefault()});let h,b,m=[];async function u(){await f(a.default.tabManager.getActiveTabNoteId())}async function f(t,e){o.Z.openDialog(d),await g(t,e)}async function g(t,e){r.empty(),c.empty(),v.empty(),h=a.default.tabManager.getActiveTabNote(),m=await i.Z.get(`notes/${t}/revisions`);for(const t of m)r.append($('<a class="dropdown-item" tabindex="0">').text(t.dateLastEdited.substr(0,16)+` (${t.contentLength} bytes)`).attr("data-note-revision-id",t.noteRevisionId).attr("title","This revision was last edited on "+t.dateLastEdited));l.dropdown("show"),b=e,m.length>0?b||(b=m[0].noteRevisionId):(p.text("No revisions for this note yet..."),b=null),w.toggle(m.length>0)}d.on("shown.bs.modal",()=>{r.find(`[data-note-revision-id="${b}"]`).trigger("focus")}),w.on("click",async()=>{const t=await n.e(590).then(n.bind(n,590));await t.confirm("Do you want to delete all revisions of this note? This action will erase revision title and content, but still preserve revision metadata.")&&(await i.Z.remove(`notes/${h.noteId}/revisions`),d.modal("hide"),s.default.showMessage("Note revisions has been deleted."))}),r.on("click",".dropdown-item",t=>(t.preventDefault(),!1)),r.on("focus",".dropdown-item",t=>{r.find(".dropdown-item").each((e,n)=>{$(n).toggleClass("active",n===t.target)}),async function(){const t=r.find(".active").attr("data-note-revision-id"),e=m.find(e=>e.noteRevisionId===t);v.empty(),c.empty(),p.html(e.title);const a=$('<button class="btn btn-sm" type="button">Restore this revision</button>');a.on("click",async()=>{const t=await n.e(590).then(n.bind(n,590));await t.confirm("Do you want to restore this revision? This will overwrite current title/content of the note with this revision.")&&(await i.Z.put(`notes/${e.noteId}/restore-revision/${e.noteRevisionId}`),d.modal("hide"),s.default.showMessage("Note revision has been restored."))});const l=$('<button class="btn btn-sm" type="button">Delete this revision</button>');l.on("click",async()=>{const t=await n.e(590).then(n.bind(n,590));await t.confirm("Do you want to delete this revision? This action will delete revision title and content, but still preserve revision metadata.")&&(await i.Z.remove(`notes/${e.noteId}/revisions/${e.noteRevisionId}`),g(e.noteId),s.default.showMessage("Note revision has been deleted."))}),v.append(a).append(" &nbsp; ").append(l).append(" &nbsp; ");const w=$('<button class="btn btn-sm btn-primary" type="button">Download</button>');w.on("click",()=>{const t=o.Z.getUrlForDownload(`api/notes/${e.noteId}/revisions/${e.noteRevisionId}/download`);o.Z.download(t)}),v.append(w);const b=await i.Z.get(`notes/${e.noteId}/revisions/${e.noteRevisionId}`);if("text"===e.type)c.html(b.content);else if("code"===e.type)c.html($("<pre>").text(b.content));else if("image"===e.type)c.html($("<img>").attr("src",`data:${h.mime};base64,`+b.content).css("max-width","100%").css("max-height","100%"));else if("file"===e.type){const t=$("<table cellpadding='10'>").append($("<tr>").append($("<th>").text("MIME: "),$("<td>").text(e.mime))).append($("<tr>").append($("<th>").text("File size:"),$("<td>").text(e.contentLength+" bytes")));b.content&&t.append($("<tr>").append($("<th>").text("Preview:"),$("<td>").append($('<pre class="file-preview-content"></pre>').text(b.content)))),c.html(t)}else c.text("Preview isn't available for this note type.")}()})}}]);
//# sourceMappingURL=387.mobile.js.map