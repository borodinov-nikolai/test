"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4263],{54920:(R,m,e)=>{e.d(m,{R:()=>n});var t=e(57993),a=e(88767);function n(i={},f={}){const{id:o="",...s}=i,{get:g}=(0,t.kY)(),{data:r,isError:l,isLoading:d,refetch:M}=(0,a.useQuery)(["users",o,s],async()=>{const{data:{data:y}}=await g(`/admin/users/${o}`,{params:s});return y},f);let v=[];return o&&r?v=[r]:Array.isArray(r?.results)&&(v=r.results),{users:v,pagination:r?.pagination??null,isLoading:d,isError:l,refetch:M}}},93552:(R,m,e)=>{e.r(m),e.d(m,{default:()=>re});var t=e(67294),a=e(57993),n=e(86706),i=e(16550),f=e(36364),o=e(185),s=e(53979),g=e(29728),r=e(49066),l=e(41580),d=e(11047),M=e(75515),v=e(11276),y=e(67819),L=e(85018),B=e(67109),W=e(41054),I=e(27361),S=e.n(I),F=e(57557),j=e.n(F),N=e(78718),A=e.n(N),Y=e(45697),H=e.n(Y),X=e(86896),V=e(54920),G=e(80902),p=e(35209),ee=e(30164),te=e(85078),ae=e(39394);const se=async(D,u)=>{const{put:T}=(0,a.tg)(),{data:U}=await T(`/admin/users/${D}`,u);return U.data},ne=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],b=["email","firstname","lastname","username","isActive","roles"],w=({canUpdate:D})=>{const{formatMessage:u}=(0,X.Z)(),{params:{id:T}}=(0,i.$B)("/settings/users/:id"),{push:U}=(0,i.k6)(),{setUserDisplayName:Z}=(0,a.L7)(),h=(0,a.lm)(),{lockApp:Q,unlockApp:J}=(0,a.o1)(),k=(0,G.c)(ee.A,async()=>(await e.e(566).then(e.bind(e,20566))).MagicLinkEE);(0,a.go)();const{users:[K],isLoading:le}=(0,V.R)({id:T},{onError(c){const{status:E}=c.response;E===403?(h({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),U("/")):h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ie=async(c,E)=>{Q();try{const P=await se(T,j()(c,"confirmPassword"));h({type:"success",message:u({id:"notification.success.saved",defaultMessage:"Saved"})});const C=a.I8.getUserInfo();if(T.toString()===C.id.toString()){a.I8.setUserInfo(P);const x=S()(c,"username")||(0,p.Pp)(c.firstname,c.lastname);Z(x)}E.setValues(A()(c,b))}catch(P){const C=(0,p.Iz)(P.response.data),x=Object.keys(C).reduce(($,O)=>($[O]=C[O].id,$),{});E.setErrors(x),h({type:"warning",message:S()(P,"response.data.error.message","notification.error")})}J()},_=le||!k,de=_?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},z=Object.keys(A()(K,b)).reduce((c,E)=>E==="roles"?(c[E]=(K?.roles||[]).map(({id:P})=>P),c):(c[E]=K?.[E],c),{}),ce=z.username||(0,p.Pp)(z.firstname,z.lastname),q=u(de,{name:ce});return _?t.createElement(o.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"Users"}),t.createElement(s.T,{primaryAction:t.createElement(g.z,{disabled:!0,startIcon:t.createElement(L.Z,null),type:"button",size:"L"},u({id:"global.save",defaultMessage:"Save"})),title:q,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(B.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},u({id:"global.back",defaultMessage:"Back"}))}),t.createElement(r.D,null,t.createElement(a.dO,null))):t.createElement(o.o,null,t.createElement(a.SL,{name:"Users"}),t.createElement(W.J9,{onSubmit:ie,initialValues:z,validateOnChange:!1,validationSchema:ae.YM},({errors:c,values:E,handleChange:P,isSubmitting:C,dirty:x})=>t.createElement(a.l0,null,t.createElement(s.T,{primaryAction:t.createElement(g.z,{disabled:C||!D?!0:!x,startIcon:t.createElement(L.Z,null),loading:C,type:"submit",size:"L"},u({id:"global.save",defaultMessage:"Save"})),title:q,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(B.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},u({id:"global.back",defaultMessage:"Back"}))}),t.createElement(r.D,null,K?.registrationToken&&t.createElement(l.x,{paddingBottom:6},t.createElement(k,{registrationToken:K.registrationToken})),t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(l.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(M.Z,{variant:"delta",as:"h2"},u({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(v.r,{gap:5},ne.map($=>$.map(O=>t.createElement(y.P,{key:O.name,...O.size},t.createElement(a.jm,{...O,disabled:!D,error:c[O.name],onChange:P,value:E[O.name]||""}))))))),t.createElement(l.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(M.Z,{variant:"delta",as:"h2"},u({id:"global.roles",defaultMessage:"User's role"})),t.createElement(v.r,{gap:5},t.createElement(y.P,{col:6,xs:12},t.createElement(te.Z,{disabled:!D,error:c.roles,onChange:P,value:E.roles}))))))))))};w.propTypes={canUpdate:H().bool.isRequired};const oe=w,re=()=>{const D=(0,a.lm)(),u=(0,n.v9)(f._),T=t.useMemo(()=>({read:u.settings.users.read,update:u.settings.users.update}),[u.settings.users]),{isLoading:U,allowedActions:{canRead:Z,canUpdate:h}}=(0,a.ss)(T),{state:Q}=(0,i.TH)(),J=Q?.from??"/";return(0,t.useEffect)(()=>{U||!Z&&!h&&D({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[U,Z,h,D]),U?t.createElement(a.dO,null):!Z&&!h?t.createElement(i.l_,{to:J}):t.createElement(oe,{canUpdate:h})}},6324:(R,m,e)=>{e.d(m,{Z:()=>r});var t=e(67294),a=e(12028),n=e(57993),i=e(65186),f=e(45697),o=e.n(f),s=e(86896);const g=({children:l,target:d})=>{const M=(0,n.lm)(),{formatMessage:v}=(0,s.Z)(),{copy:y}=(0,n.VP)(),L=v({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),B=async()=>{await y(d)&&M({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(n.Y_,{endAction:t.createElement(a.h,{label:L,noBorder:!0,icon:t.createElement(i.Z,null),onClick:B}),title:d,titleEllipsis:!0,subtitle:l,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};g.propTypes={children:o().oneOfType([o().element,o().string]).isRequired,target:o().string.isRequired};const r=g},30164:(R,m,e)=>{e.d(m,{A:()=>s});var t=e(67294),a=e(45697),n=e.n(a),i=e(86896),f=e(95651),o=e(6324);const s=({registrationToken:g})=>{const{formatMessage:r}=(0,i.Z)(),l=`${window.location.origin}${f.Z}auth/register?registrationToken=${g}`;return t.createElement(o.Z,{target:l},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:n().string}},85078:(R,m,e)=>{e.d(m,{Z:()=>B});var t=e(67294),a=e(40619),n=e(82562),i=e(57993),f=e(86647),o=e(45697),s=e.n(o),g=e(86896),r=e(88767),l=e(88972);const d=(0,l.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,M=l.ZP.div`
  animation: ${d} 2s infinite linear;
`,v=()=>t.createElement(M,null,t.createElement(f.Z,null)),y=async()=>{const{get:W}=(0,i.tg)(),{data:I}=await W("/admin/roles");return I.data},L=({disabled:W,error:I,onChange:S,value:F})=>{const{status:j,data:N}=(0,r.useQuery)(["roles"],y,{staleTime:5e4}),{formatMessage:A}=(0,g.Z)(),Y=I?A({id:I,defaultMessage:I}):"",H=A({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),X=A({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),V=A({id:"app.components.Select.placeholder",defaultMessage:"Select"}),G=j==="loading"?t.createElement(v,null):void 0;return t.createElement(a.P,{id:"roles",disabled:W,error:Y,hint:X,label:H,name:"roles",onChange:p=>{S({target:{name:"roles",value:p}})},placeholder:V,multi:!0,startIcon:G,value:F.map(p=>p.toString()),withTags:!0,required:!0},(N||[]).map(p=>t.createElement(n.W,{key:p.id,value:p.id.toString()},A({id:`global.${p.code}`,defaultMessage:p.name}))))};L.defaultProps={disabled:!1,error:void 0},L.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const B=L},39394:(R,m,e)=>{e.d(m,{YM:()=>r,Rw:()=>f});var t=e(87561),a=e(57993);const n={firstname:t.Z_().trim().required(a.I0.required),lastname:t.Z_(),email:t.Z_().email(a.I0.email).lowercase().required(a.I0.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.I0.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(l,d)=>l?d.required(a.I0.required):d)},f={...n,currentPassword:t.Z_().when(["password","confirmPassword"],(l,d,M)=>l||d?M.required(a.I0.required):M),preferedLanguage:t.Z_().nullable()},s={roles:t.IX().min(1,a.I0.required).required(a.I0.required)},r=t.Ry().shape({...n,isActive:t.Xg(),...s})},67109:(R,m,e)=>{e.d(m,{Z:()=>n});var t=e(85893);const a=i=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=a}}]);
