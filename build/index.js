(()=>{"use strict";const e=window.wp.commands,t=window.wp.data,o=window.wp.i18n,a=window.React,c=window.wp.primitives,n=(0,a.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(c.Path,{d:"m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"}),(0,a.createElement)(c.Path,{d:"m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"})),l=(0,a.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(c.Path,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})),s=(0,a.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(c.Path,{d:"M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"})),i=(0,a.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(c.Path,{d:"M8 12.5h8V11H8v1.5Z M19 6.5H5a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2ZM5 8h14a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8Z"}));(0,t.dispatch)(e.store).registerCommand({name:"dev-blog/gutenberg-experiments",label:(0,o.__)("Gutenberg Experiments","dev-blog"),icon:n,context:"site-editor",callback:({close:e})=>{document.location.href="admin.php?page=gutenberg-experiments",e()}}),(0,t.dispatch)(e.store).registerCommand({name:"dev-blog/gutenberg-demo",label:(0,o.__)("Gutenberg Demo","dev-blog"),icon:l,callback:({close:e})=>{document.location.href="admin.php?page=gutenberg",e()}}),void 0!==wp.editPost&&(0,t.dispatch)(e.store).registerCommand({name:"dev-blog/discussion-panel",label:(0,o.__)("Toggle Discussion Panel","dev-blog"),icon:s,callback:({close:e})=>{(0,t.dispatch)("core/edit-post").toggleEditorPanelEnabled("discussion-panel"),e()}}),(0,t.dispatch)(e.store).registerCommand({name:"dev-blog/toggle-button-labels",label:(0,o.__)("Toggle Button Labels","dev-blog"),icon:i,callback:({close:e})=>{void 0!==wp.editSite?(0,t.dispatch)("core/preferences").toggle("core/edit-site","showIconLabels"):void 0!==wp.editPost&&(0,t.dispatch)("core/preferences").toggle("core/edit-post","showIconLabels"),e()}})})();