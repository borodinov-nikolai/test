"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5833],{7761:(S,c,t)=>{t.d(c,{pl:()=>L,aY:()=>p,q5:()=>D.q});var e=t(67294),a=t(57993),u=t(18172);const m={data:[],isLoading:!0},f=(s,n)=>(0,u.ZP)(s,i=>{switch(n.type){case"GET_DATA_SUCCEEDED":{i.data=n.data,i.isLoading=!1;break}case"GET_DATA_ERROR":{i.isLoading=!1;break}default:return i}}),L=({ssoEnabled:s})=>{const[n,i]=(0,e.useReducer)(f,m),T=(0,a.lm)(),{get:M}=(0,a.kY)();return(0,e.useEffect)(()=>{(async()=>{try{if(!s){i({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:E}=await M("/admin/providers");i({type:"GET_DATA_SUCCEEDED",data:E})}catch(E){console.error(E),i({type:"GET_DATA_ERROR"}),T({type:"warning",message:{id:"notification.error"}})}})()},[M,s,T]),n};var g=t(14293),o=t.n(g),A=t(86896),r=t(16550),D=t(71926);const l="strapi-notification-seat-limit",C="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",p=()=>{const{formatMessage:s}=(0,A.Z)();let{license:n,isError:i,isLoading:T}=(0,D.q)();const M=(0,a.lm)(),{pathname:P}=(0,r.TH)(),{enforcementUserCount:E,permittedSeats:h,licenseLimitStatus:d,isHostedOnStrapiCloud:_}=n;(0,e.useEffect)(()=>{if(i||T)return;const U=!o()(h)&&!window.sessionStorage.getItem(`${l}-${P}`)&&(d==="AT_LIMIT"||d==="OVER_LIMIT");let R;d==="OVER_LIMIT"?R="warning":d==="AT_LIMIT"&&(R="softWarning"),U&&M({type:R,message:s({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:d}),title:s({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:d,enforcementUserCount:E,permittedSeats:h}),link:{url:_?C:v,label:s({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:_})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${P}`,!0)}})},[M,n,P,s,T,h,d,E,_,i])}},71926:(S,c,t)=>{t.d(c,{q:()=>m});var e=t(67294),a=t(57993),u=t(88767);function m({enabled:O}={enabled:!0}){const{get:f}=(0,a.kY)(),{data:I,isError:L,isLoading:g}=(0,u.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:r}}=await f("/admin/license-limit-information");return r},{enabled:O}),o=I??{},A=e.useCallback(r=>(o?.features??[]).find(l=>l.name===r)?.options??{},[o?.features]);return{license:o,getFeature:A,isError:L,isLoading:g}}},85833:(S,c,t)=>{t.r(c),t.d(c,{CreateActionEE:()=>l});var e=t(67294),a=t(11047),u=t(84495),m=t(52624),O=t(29728),f=t(51277),I=t(23293),L=t(14293),g=t.n(L),o=t(45697),A=t.n(o),r=t(86896),D=t(7761);const l=({onClick:C})=>{const{formatMessage:v}=(0,r.Z)(),{license:{permittedSeats:y,shouldStopCreate:p},isError:s,isLoading:n}=(0,D.q5)();return s||n?null:e.createElement(a.k,{gap:2},!g()(y)&&p&&e.createElement(u.u,{description:v({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},e.createElement(m.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:f.Z})),e.createElement(O.z,{"data-testid":"create-user-button",onClick:C,startIcon:e.createElement(I.Z,null),size:"S",disabled:p},v({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};l.propTypes={onClick:A().func.isRequired}}}]);
