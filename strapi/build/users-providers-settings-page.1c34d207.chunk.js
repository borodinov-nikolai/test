(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2282],{8884:(y,x,e)=>{"use strict";e.r(x),e.d(x,{ProvidersPage:()=>le,default:()=>Ae});var t=e(67294),a=e(14087),i=e(17034),s=e(185),u=e(53979),d=e(49066),n=e(38939),l=e(8060),f=e(79031),h=e(37909),b=e(75515),p=e(63237),g=e(15234),E=e(12028),r=e(57993),c=e(4585),P=e(18721),C=e.n(P),z=e(11700),W=e.n(z),H=e(86896),N=e(88767),me=e(42866),ge=e(24969),fe=e(59946),ve=e(11047),pe=e(11276),he=e(67819),be=e(36856),ne=e(29728),ye=e(63321),xe=e(36773),Ee=e(41054),Pe=e(45697),o=e.n(Pe),Me=e(93127),Be=e(16364);const V=({description:v,disabled:L,intlLabel:j,error:A,name:T,onChange:S,placeholder:R,providerToEditName:I,type:F,value:M})=>{const{formatMessage:Z}=(0,H.Z)(),D=T==="noName"?`${window.strapi.backendURL}/api/connect/${I}/callback`:M,K=Z({id:j.id,defaultMessage:j.defaultMessage},{provider:I,...j.values}),U=v?Z({id:v.id,defaultMessage:v.defaultMessage},{provider:I,...v.values}):"";if(F==="bool")return t.createElement(Me.s,{"aria-label":T,checked:M,disabled:L,hint:U,label:K,name:T,offLabel:Z({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:Z({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:_=>{S({target:{name:T,value:_.target.checked}})}});const q=R?Z({id:R.id,defaultMessage:R.defaultMessage},{...R.values}):"",X=A?Z({id:A,defaultMessage:A}):"";return t.createElement(Be.o,{"aria-label":T,disabled:L,error:X,label:K,name:T,onChange:S,placeholder:q,type:F,value:D})};V.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},V.propTypes={description:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),disabled:o().bool,error:o().string,intlLabel:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}).isRequired,name:o().string.isRequired,onChange:o().func.isRequired,placeholder:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),providerToEditName:o().string.isRequired,type:o().string.isRequired,value:o().oneOfType([o().bool,o().string])};const Le=V,J=({headerBreadcrumbs:v,initialData:L,isSubmiting:j,layout:A,isOpen:T,onSubmit:S,onToggle:R,providerToEditName:I})=>{const{formatMessage:F}=(0,H.Z)();return T?t.createElement(me.P,{onClose:R,labelledBy:"title"},t.createElement(ge.x,null,t.createElement(ye.O,{label:v.join(", ")},v.map((M,Z,D)=>t.createElement(xe.$,{isCurrent:Z===D.length-1,key:M},M)))),t.createElement(Ee.J9,{onSubmit:M=>S(M),initialValues:L,validationSchema:A.schema,validateOnChange:!1},({errors:M,handleChange:Z,values:D})=>t.createElement(r.l0,null,t.createElement(fe.f,null,t.createElement(ve.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(pe.r,{gap:5},A.form.map(K=>K.map(U=>t.createElement(he.P,{key:U.name,col:U.size,xs:12},t.createElement(Le,{...U,error:M[U.name],onChange:Z,value:D[U.name],providerToEditName:I}))))))),t.createElement(be.m,{startActions:t.createElement(ne.z,{variant:"tertiary",onClick:R,type:"button"},F({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ne.z,{type:"submit",loading:j},F({id:"global.save",defaultMessage:"Save"}))})))):null};J.defaultProps={initialData:null,providerToEditName:null},J.propTypes={headerBreadcrumbs:o().arrayOf(o().string).isRequired,initialData:o().object,layout:o().shape({form:o().arrayOf(o().array),schema:o().object}).isRequired,isOpen:o().bool.isRequired,isSubmiting:o().bool.isRequired,onSubmit:o().func.isRequired,onToggle:o().func.isRequired,providerToEditName:o().string};const Oe=J;var ae=e(84419),B=e(99688);const Te=async v=>{try{const{get:L}=(0,r.tg)(),{data:j}=await L("/users-permissions/providers");return j}catch{throw v({type:"warning",message:{id:"notification.error"}}),new Error("error")}},je=v=>{const{put:L}=(0,r.tg)();return L("/users-permissions/providers",v)};var Ce=e(89734),Re=e.n(Ce);const Ze=v=>Re()(Object.keys(v).reduce((L,j)=>{const{icon:A,enabled:T,subdomain:S}=v[j],R=A==="envelope"?["fas","envelope"]:["fab",A];return S!==void 0?L.push({name:j,icon:R,enabled:T,subdomain:S}):L.push({name:j,icon:R,enabled:T}),L},[]),"name");var m=e(87561);const re={id:(0,B.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},se={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},w={id:(0,B.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},Y={id:(0,B.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ie={id:(0,B.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,B.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},$={id:(0,B.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},de={id:(0,B.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},k={email:{form:[[{intlLabel:Y,name:"enabled",type:"bool",description:w,size:6}]],schema:m.Ry().shape({enabled:m.Xg().required(r.I0.required)})},providers:{form:[[{intlLabel:Y,name:"enabled",type:"bool",description:w,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:$,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:$,size:12,validations:{required:!0}}],[{intlLabel:re,placeholder:se,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:m.Ry().shape({enabled:m.Xg().required(r.I0.required),key:m.Z_().when("enabled",{is:!0,then:m.Z_().required(r.I0.required),otherwise:m.Z_()}),secret:m.Z_().when("enabled",{is:!0,then:m.Z_().required(r.I0.required),otherwise:m.Z_()}),callback:m.Z_().when("enabled",{is:!0,then:m.Z_().required(r.I0.required),otherwise:m.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:Y,name:"enabled",type:"bool",description:w,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:$,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:$,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,B.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:$,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,B.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,B.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:re,placeholder:se,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:m.Ry().shape({enabled:m.Xg().required(r.I0.required),key:m.Z_().when("enabled",{is:!0,then:m.Z_().required(r.I0.required),otherwise:m.Z_()}),secret:m.Z_().when("enabled",{is:!0,then:m.Z_().required(r.I0.required),otherwise:m.Z_()}),subdomain:m.Z_().when("enabled",{is:!0,then:m.Z_().required(r.I0.required),otherwise:m.Z_()}),callback:m.Z_().when("enabled",{is:!0,then:m.Z_().required(r.I0.required),otherwise:m.Z_()})})}},le=()=>{const{formatMessage:v}=(0,H.Z)();(0,r.go)();const{notifyStatus:L}=(0,a.G)(),j=(0,N.useQueryClient)(),{trackUsage:A}=(0,r.rS)(),T=(0,t.useRef)(A),[S,R]=(0,t.useState)(!1),[I,F]=(0,t.useState)(!1),[M,Z]=(0,t.useState)(null),D=(0,r.lm)(),{lockApp:K,unlockApp:U}=(0,r.o1)(),{isLoading:q,allowedActions:{canUpdate:X}}=(0,r.ss)({update:ae._.updateProviders}),{isLoading:_,data:G,isFetching:Ue}=(0,N.useQuery)("get-providers",()=>Te(D),{onSuccess(){L(v({id:(0,B.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Se=_||Ue,Fe=(0,N.useMutation)(je,{async onSuccess(){await j.invalidateQueries("get-providers"),D({type:"info",message:{id:(0,B.OB)("notification.success.submit")}}),T.current("didEditAuthenticationProvider"),F(!1),ee(),U()},onError(){D({type:"warning",message:{id:"notification.error"}}),U(),F(!1)},refetchActive:!1}),Q=(0,t.useMemo)(()=>Ze(G),[G]),De=Q.length,ue=(0,t.useMemo)(()=>{if(!M)return!1;const O=Q.find(te=>te.name===M);return C()(O,"subdomain")},[Q,M]),ze=v({id:(0,B.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),Ie=(0,t.useMemo)(()=>M==="email"?k.email:ue?k.providersWithSubdomain:k.providers,[M,ue]),ee=()=>{R(O=>!O)},ce=O=>{X&&(Z(O.name),ee())},We=async O=>{F(!0),K(),T.current("willEditAuthenticationProvider");const te={...G,[M]:O};Fe.mutate({providers:te})};return t.createElement(i.A,null,t.createElement(r.SL,{name:ze}),t.createElement(s.o,null,t.createElement(u.T,{title:v({id:(0,B.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Se||q?t.createElement(r.dO,null):t.createElement(d.D,null,t.createElement(n.i,{colCount:3,rowCount:De+1},t.createElement(l.h,null,t.createElement(f.Tr,null,t.createElement(h.Th,null,t.createElement(b.Z,{variant:"sigma",textColor:"neutral600"},v({id:"global.name",defaultMessage:"Name"}))),t.createElement(h.Th,null,t.createElement(b.Z,{variant:"sigma",textColor:"neutral600"},v({id:(0,B.OB)("Providers.status"),defaultMessage:"Status"}))),t.createElement(h.Th,null,t.createElement(b.Z,{variant:"sigma"},t.createElement(p.T,null,v({id:"global.settings",defaultMessage:"Settings"})))))),t.createElement(g.p,null,Q.map(O=>t.createElement(f.Tr,{key:O.name,...(0,r.X7)({fn:()=>ce(O),condition:X})},t.createElement(h.Td,{width:"45%"},t.createElement(b.Z,{fontWeight:"semiBold",textColor:"neutral800"},O.name)),t.createElement(h.Td,{width:"65%"},t.createElement(b.Z,{textColor:O.enabled?"success600":"danger600","data-testid":`enable-${O.name}`},O.enabled?v({id:"global.enabled",defaultMessage:"Enabled"}):v({id:"global.disabled",defaultMessage:"Disabled"}))),t.createElement(h.Td,{...r.UW},X&&t.createElement(E.h,{onClick:()=>ce(O),noBorder:!0,icon:t.createElement(c.Z,null),label:"Edit"})))))))),t.createElement(Oe,{initialData:G[M],isOpen:S,isSubmiting:I,layout:Ie,headerBreadcrumbs:[v({id:(0,B.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),W()(M)],onToggle:ee,onSubmit:We,providerToEditName:M}))},Ae=()=>t.createElement(r.O4,{permissions:ae._.readProviders},t.createElement(le,null))},99688:(y,x,e)=>{"use strict";e.d(x,{YX:()=>s,OB:()=>u.Z});var t=e(41609),a=e.n(t);const s=d=>Object.keys(d).reduce((n,l)=>{const f=d[l].controllers,h=Object.keys(f).reduce((b,p)=>(a()(f[p])||(b[p]=f[p]),b),{});return a()(h)||(n[l]={controllers:h}),n},{});var u=e(97961)},89881:(y,x,e)=>{var t=e(47816),a=e(99291),i=a(t);y.exports=i},69199:(y,x,e)=>{var t=e(89881),a=e(98612);function i(s,u){var d=-1,n=a(s)?Array(s.length):[];return t(s,function(l,f,h){n[++d]=u(l,f,h)}),n}y.exports=i},82689:(y,x,e)=>{var t=e(29932),a=e(97786),i=e(67206),s=e(69199),u=e(71131),d=e(7518),n=e(85022),l=e(6557),f=e(1469);function h(b,p,g){p.length?p=t(p,function(c){return f(c)?function(P){return a(P,c.length===1?c[0]:c)}:c}):p=[l];var E=-1;p=t(p,d(i));var r=s(b,function(c,P,C){var z=t(p,function(W){return W(c)});return{criteria:z,index:++E,value:c}});return u(r,function(c,P){return n(c,P,g)})}y.exports=h},71131:y=>{function x(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}y.exports=x},26393:(y,x,e)=>{var t=e(33448);function a(i,s){if(i!==s){var u=i!==void 0,d=i===null,n=i===i,l=t(i),f=s!==void 0,h=s===null,b=s===s,p=t(s);if(!h&&!p&&!l&&i>s||l&&f&&b&&!h&&!p||d&&f&&b||!u&&b||!n)return 1;if(!d&&!l&&!p&&i<s||p&&u&&n&&!d&&!l||h&&u&&n||!f&&n||!b)return-1}return 0}y.exports=a},85022:(y,x,e)=>{var t=e(26393);function a(i,s,u){for(var d=-1,n=i.criteria,l=s.criteria,f=n.length,h=u.length;++d<f;){var b=t(n[d],l[d]);if(b){if(d>=h)return b;var p=u[d];return b*(p=="desc"?-1:1)}}return i.index-s.index}y.exports=a},99291:(y,x,e)=>{var t=e(98612);function a(i,s){return function(u,d){if(u==null)return u;if(!t(u))return i(u,d);for(var n=u.length,l=s?n:-1,f=Object(u);(s?l--:++l<n)&&d(f[l],l,f)!==!1;);return u}}y.exports=a},89734:(y,x,e)=>{var t=e(21078),a=e(82689),i=e(5976),s=e(16612),u=i(function(d,n){if(d==null)return[];var l=n.length;return l>1&&s(d,n[0],n[1])?n=[]:l>2&&s(n[0],n[1],n[2])&&(n=[n[0]]),a(d,t(n,1),[])});y.exports=u},49066:(y,x,e)=>{"use strict";e.d(x,{D:()=>i});var t=e(85893),a=e(41580);const i=({children:s})=>(0,t.jsx)(a.x,{paddingLeft:10,paddingRight:10,children:s})},53979:(y,x,e)=>{"use strict";e.d(x,{T:()=>h});var t=e(85893),a=e(67294),i=e(88972);const s=g=>{const E=(0,a.useRef)(null),[r,c]=(0,a.useState)(!0),P=([C])=>{c(C.isIntersecting)};return(0,a.useEffect)(()=>{const C=E.current,z=new IntersectionObserver(P,g);return C&&z.observe(E.current),()=>{C&&z.disconnect()}},[E,g]),[E,r]};var u=e(79698);const d=(g,E)=>{const r=(0,u.W)(E);(0,a.useLayoutEffect)(()=>{const c=new ResizeObserver(r);return Array.isArray(g)?g.forEach(P=>{P.current&&c.observe(P.current)}):g.current&&c.observe(g.current),()=>{c.disconnect()}},[g,r])};var n=e(41580),l=e(11047),f=e(75515);const h=g=>{const E=(0,a.useRef)(null),[r,c]=(0,a.useState)(null),[P,C]=s({root:null,rootMargin:"0px",threshold:0});return d(P,()=>{P.current&&c(P.current.getBoundingClientRect())}),(0,a.useEffect)(()=>{E.current&&c(E.current.getBoundingClientRect())},[E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:r?.height},ref:P,children:C&&(0,t.jsx)(p,{ref:E,...g})}),!C&&(0,t.jsx)(p,{...g,sticky:!0,width:r?.width})]})};h.displayName="HeaderLayout";const b=(0,i.ZP)(n.x)`
  width: ${({width:g})=>g?`${g/16}rem`:void 0};
  z-index: ${({theme:g})=>g.zIndices[1]};
`,p=a.forwardRef(({navigationAction:g,primaryAction:E,secondaryAction:r,subtitle:c,title:P,sticky:C,width:z,...W},H)=>{const N=typeof c=="string";return C?(0,t.jsx)(b,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:z,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(l.k,{justifyContent:"space-between",children:[(0,t.jsxs)(l.k,{children:[g&&(0,t.jsx)(n.x,{paddingRight:3,children:g}),(0,t.jsxs)(n.x,{children:[(0,t.jsx)(f.Z,{variant:"beta",as:"h1",...W,children:P}),N?(0,t.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:c}):c]}),r?(0,t.jsx)(n.x,{paddingLeft:4,children:r}):null]}),(0,t.jsx)(l.k,{children:E?(0,t.jsx)(n.x,{paddingLeft:2,children:E}):void 0})]})}):(0,t.jsxs)(n.x,{ref:H,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0,children:[g?(0,t.jsx)(n.x,{paddingBottom:2,children:g}):null,(0,t.jsxs)(l.k,{justifyContent:"space-between",children:[(0,t.jsxs)(l.k,{minWidth:0,children:[(0,t.jsx)(f.Z,{as:"h1",variant:"alpha",...W,children:P}),r?(0,t.jsx)(n.x,{paddingLeft:4,children:r}):null]}),E]}),N?(0,t.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:c}):c]})})},17034:(y,x,e)=>{"use strict";e.d(x,{A:()=>d});var t=e(85893),a=e(88972),i=e(41580);const s=(0,a.ZP)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:n})=>n?"auto 1fr":"1fr"};
`,u=(0,a.ZP)(i.x)`
  overflow-x: hidden;
`,d=({sideNav:n,children:l})=>(0,t.jsxs)(s,{hasSideNav:!!n,children:[n,(0,t.jsx)(u,{paddingBottom:10,children:l})]})},185:(y,x,e)=>{"use strict";e.d(x,{o:()=>u});var t=e(85893),a=e(88972),i=e(41580);const s=(0,a.ZP)(i.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,u=({labelledBy:d="main-content-title",...n})=>(0,t.jsx)(s,{"aria-labelledby":d,as:"main",id:"main-content",tabIndex:-1,...n})}}]);
