(self.webpackChunkexample=self.webpackChunkexample||[]).push([[669],{6003:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(2137),a=n(7757),o=n.n(a),c=n(7294),u=n(6010),s=n(2263),i=n(4996),l=n(2730),p=n(7386),f=n(6038),d=n(3938),m=n(8399),h=n.n(m),v=n(1647),w=n.n(v),x=n(4802),g=n.n(x),k=n(594),b=n.n(k),E=n(3850),_=n.n(E),Z=n(5355),y=n.n(Z),N=n(150),C=n.n(N),z=n(6656),L=n.n(z),S=n(4338),B=n.n(S),R=n(8867),A=n.n(R),I=n(8173),U=n(9105),H=[1,2,3,4,5,6],P=function(e){var t=e.children;return c.createElement("div",{className:(0,u.Z)("editor__group","padding-horiz--xs")},t)},q=function(e){var t=e.editor,n=e.name,r=e.action,a=e.children;return c.createElement("button",{className:(0,u.Z)("editor__icon","margin-horiz--xs",n&&t.isActive(n)&&"editor__icon--active"),onClick:r},c.createElement("span",{className:"material-icons"},a))};function F(e){var t=e.editor,n=e.save,r=e.submit,a=e.className;return t?c.createElement(c.Fragment,null,c.createElement(U.Z,null,c.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})),c.createElement("div",{className:(0,u.Z)("editor__menu","padding-vert--sm",a)},c.createElement(P,null,c.createElement(q,{editor:t,action:function(){return t.chain().focus().undo().run()}},"undo"),c.createElement(q,{editor:t,action:function(){return t.chain().focus().redo().run()}},"redo")),c.createElement(P,null,c.createElement("select",{className:(0,u.Z)("editor__select","margin-horiz--xs"),value:function(){var e=[];t.isActive("paragraph")&&e.push("paragraph");for(var n,r=(0,I.Z)(H);!(n=r()).done;){var a=n.value;t.isActive("heading",{level:a})&&e.push(a.toString())}return 1==e.length?e[0]:""}(),onChange:function(e){e.preventDefault();var n=e.target.value;if("paragraph"==n)t.chain().focus().setParagraph().run();else{var r=parseInt(n);H.includes(r)&&t.chain().focus().toggleHeading({level:r}).run()}}},c.createElement("option",{hidden:!0,disabled:!0,value:""}),c.createElement("option",{value:"paragraph"},"Normal text"),H.map((function(e){return c.createElement("option",{key:e,value:e},"Heading "+e)})))),c.createElement(P,null,c.createElement(q,{editor:t,action:function(){return t.chain().focus().toggleBold().run()},name:"bold"},"format_bold"),c.createElement(q,{editor:t,action:function(){return t.chain().focus().toggleItalic().run()},name:"italic"},"format_italic"),c.createElement(q,{editor:t,action:function(){return t.chain().focus().toggleCode().run()},name:"code"},"code")),c.createElement(P,null,c.createElement(q,{editor:t,action:function(){return t.chain().focus().toggleBulletList().run()},name:"bulletList"},"format_list_bulleted"),c.createElement(q,{editor:t,action:function(){return t.chain().focus().toggleOrderedList().run()},name:"orderedList"},"format_list_numbered"),c.createElement(q,{editor:t,action:function(){return t.chain().focus().toggleCodeBlock().run()},name:"codeBlock"},"code"),c.createElement(q,{editor:t,action:function(){return t.chain().focus().toggleBlockquote().run()},name:"blockquote"},"format_quote")),c.createElement(P,null,c.createElement(q,{editor:t,action:function(){return t.chain().focus().setHorizontalRule().run()}},"horizontal_rule"),c.createElement(q,{editor:t,action:function(){return t.chain().focus().setHardBreak().run()}},"keyboard_return")),c.createElement(P,null,c.createElement(q,{editor:t,action:function(){return t.chain().focus().unsetAllMarks().clearNodes().run()}},"format_clear")),c.createElement(P,null,c.createElement("button",{className:"editor__button margin-horiz--xs padding-horiz--sm",onClick:n},c.createElement("span",{className:"material-icons"},"file_download")," Save"),c.createElement("button",{className:"editor__button margin-horiz--xs padding-horiz--sm",onClick:r},c.createElement("span",{className:"material-icons"},"file_upload")," Submit")))):null}function j(e){var t=e.editor,n=e.className;return c.createElement("div",{className:(0,u.Z)("editor__page",n),onClick:function(){return t.chain().focus().run()}},c.createElement(l.kg,{editor:t,className:"editor__content"}))}function M(){return null}function O(e){var t=e.options,n=e.className,a=(0,c.useState)(),m=a[0],v=a[1],x=(0,c.useState)(),k=x[0],E=x[1],Z=(0,c.useState)(),N=Z[0],z=Z[1],S=(0,c.useState)(),R=S[0],I=S[1],U=(0,i.Z)("/edit"),H=t.docsPath,P=t.github,q=P.clientId,O=P.tokenUrl,T=(0,s.Z)().siteConfig,D=T.organizationName,G=T.projectName,J=(0,l.jE)({extensions:[p.Z],autofocus:"start"}),K=function(e){var t=new URL("https://github.com/login/oauth/authorize"),n=t.searchParams;n.append("client_id",q),n.append("scope","public_repo"),n.append("redirect_uri",e),window.location.replace(t)},Q=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL(t,O),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){return e.token}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,a,c,u,s,i,l,p,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URL(window.location.pathname,window.location.origin),n=new URLSearchParams(window.location.search),!(a=n.get("code"))){e.next=18;break}return window.history.replaceState(window.history.state,"",t),e.next=7,Q(a,t);case 7:return c=e.sent,u=f.v.plugin(d.T),s=new u({auth:c}),i=s.hook,l=s.rest,i.error("request",function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(403!==t.status){e.next=5;break}return e.next=3,V();case 3:e.next=6;break;case 5:throw t;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=13,l.users.getAuthenticated();case 13:return p=e.sent,m=p.data.login,e.abrupt("return",{api:l,user:m});case 18:K(t);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.api.repos.createFork({owner:D,repo:G});case 2:return t=e.sent,n=t.data,r=n.name,a=n.owner.login,e.next=8,new Promise((function(e,t){var n=setInterval((function(){R.api.repos.get({owner:a,repo:r}).then((function(t){clearInterval(n),e(t)})).catch((function(e){404!==e.status&&t(e)}))}),1e3)}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a,c,u,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.api.repos.get({owner:t,repo:n});case 3:r=e.sent,e.next=15;break;case 6:if(e.prev=6,e.t0=e.catch(0),404!==e.t0.status||t===D){e.next=14;break}return e.next=11,W();case 11:r=e.sent,e.next=15;break;case 14:throw e.t0;case 15:if(a=r.data,c=a.name,u=a.owner.login,s=a.parent,u===D){e.next=24;break}if(!s){e.next=23;break}if(i=s.name,s.owner.login===D||i===G){e.next=21;break}throw"Repo is not a fork of "+D+"/"+G;case 21:e.next=24;break;case 23:throw"Repo is not a fork of "+D+"/"+G;case 24:return e.abrupt("return",{owner:u,repo:c});case 25:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a,c,u,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.api.repos.get({owner:D,repo:G});case 2:return a=e.sent,c=a.data.default_branch,e.next=6,R.api.repos.getBranch({owner:D,repo:G,branch:c});case 6:return u=e.sent,s=u.data.commit.sha,e.next=10,R.api.git.createRef({owner:t,repo:n,sha:s,ref:"refs/heads/"+r});case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),$=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.api.repos.getBranch({owner:t,repo:n,branch:r});case 3:e.next=13;break;case 5:if(e.prev=5,e.t0=e.catch(0),404!==e.t0.status){e.next=12;break}return e.next=10,Y(t,n,r);case 10:e.next=13;break;case 12:throw e.t0;case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,r){return e.apply(this,arguments)}}(),ee=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a){var c,u,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.api.repos.getContent({owner:t,repo:n,path:a,ref:"refs/heads/"+r});case 2:return c=e.sent,u=c.data.content,s=atob(u),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),te=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a,c){var u,s,i,l,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.api.repos.getContent({owner:t,repo:n,path:a,ref:"refs/heads/"+r});case 2:if(u=e.sent,s=u.data,i=s.sha,l=s.content,(p=btoa(c)).trim()===l.trim()){e.next=10;break}return e.next=10,R.api.repos.createOrUpdateFileContents({owner:t,repo:n,branch:r,path:a,sha:i,content:p,message:"Edit "+k});case 10:case"end":return e.stop()}}),e)})));return function(t,n,r,a,o){return e.apply(this,arguments)}}(),ne=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a,c,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t+":"+n,e.next=3,R.api.pulls.list({owner:D,repo:G,state:"open",head:r});case 3:if(a=e.sent,a.data.length){e.next=12;break}return e.next=8,R.api.repos.get({owner:D,repo:G});case 8:return c=e.sent,u=c.data.default_branch,e.next=12,R.api.pulls.create({owner:D,repo:G,base:u,head:r,title:"Edit "+k});case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=B()().use(w()).use(g()).use(b()),ae=B()().use(_()).use(y(),["yaml"]).use(C(),{yaml:A().parse}).use(L()).use(h()),oe=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=J.getHTML(),e.next=3,re.process(t);case 3:return n=e.sent,r=n.contents,m&&(a=A().stringify(m),r="---\n"+a+"---\n\n"+r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.process(t);case 2:n=e.sent,r=n.data,a=n.contents,v(r),J.chain().setContent(a).focus("start").run();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,n=window.location.pathname.slice(U.length),a="edit/"+(r=""+H+n+".md").replaceAll(/[\/\.]/g,"-"),I(t),z(a),E(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(R.user,G);case 2:return t=e.sent,n=t.owner,r=t.repo,e.next=7,$(n,r,N);case 7:return a=e.sent,e.next=10,ee(n,r,a,k);case 10:return c=e.sent,e.next=13,ce(c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:return t=e.sent,e.next=5,X(R.user,G);case 5:return n=e.sent,r=n.owner,a=n.repo,e.next=10,$(r,a,N);case 10:return c=e.sent,e.next=13,te(r,a,c,k,t);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:return t=e.sent,e.next=5,X(R.user,G);case 5:return n=e.sent,r=n.owner,a=n.repo,e.next=10,$(r,a,N);case 10:return c=e.sent,e.next=13,te(r,a,c,k,t);case 13:return e.next=15,ne(r,c);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){ue()}),[]),(0,c.useEffect)((function(){R&&N&&k&&se()}),[R,N,k]),c.createElement(c.Fragment,null,R?c.createElement("div",{className:(0,u.Z)("editor",n)},c.createElement(F,{editor:J,save:ie,submit:le}),c.createElement(j,{editor:J})):c.createElement(M,null))}}}]);