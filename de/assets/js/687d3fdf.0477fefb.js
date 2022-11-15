"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[1003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),c=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:p,groupId:g,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:v}=(0,s.U)(),[T,w]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=g){const e=_[g];null!=e&&e!==T&&y.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==T&&(O(t),w(a),null!=g&&v(g,String(a)))},z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:z,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},2590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={sidebar_position:10,title:"Bankkonto hinzuf\xfcgen",description:"F\xfcge ein Bankkonto hinzu, um auf Odysee Geld zu verdienen.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"},keywords:["odysee","geld verdienen","konto hinzuf\xfcgen","wie f\xfcge ich mein Konto zu Odysee hinzu"],tags:["Odysee","Konto"]},s="Bankkonto hinzuf\xfcgen",c={unversionedId:"category-basics/bankaccount",id:"category-basics/bankaccount",title:"Bankkonto hinzuf\xfcgen",description:"F\xfcge ein Bankkonto hinzu, um auf Odysee Geld zu verdienen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/category-basics/bankaccount.mdx",sourceDirName:"category-basics",slug:"/category-basics/bankaccount",permalink:"/de/category-basics/bankaccount",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/de/docusaurus-plugin-content-docs/current/category-basics/bankaccount.mdx",tags:[{label:"Odysee",permalink:"/de/tags/odysee"},{label:"Konto",permalink:"/de/tags/konto"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Bankkonto hinzuf\xfcgen",description:"F\xfcge ein Bankkonto hinzu, um auf Odysee Geld zu verdienen.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"},keywords:["odysee","geld verdienen","konto hinzuf\xfcgen","wie f\xfcge ich mein Konto zu Odysee hinzu"],tags:["Odysee","Konto"]},sidebar:"helphub",previous:{title:"E-Mail \xe4ndern",permalink:"/de/category-basics/emailchanges"},next:{title:"Kreditkarte hinzuf\xfcgen",permalink:"/de/category-basics/paymentmethod"}},d={},u=[],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=m("OdyseeButton"),g=m("OdyseeIcon"),b=m("Image"),k=m("PrimaryOdyseeButton"),y={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bankkonto-hinzuf\xfcgen"},"Bankkonto hinzuf\xfcgen"),(0,r.kt)("p",null,"Wenn du ein Bankkonto hinzuf\xfcgst, kannst in Form von Trinkgeldern, Hyperchats und demn\xe4chst auch Kanalmitgliedschaften Geld verdienen. Wir empfehlen ein Konto einzurichten, damit Zuschauer Trinkgelder und Hyperchats senden k\xf6nnen."),(0,r.kt)(o.Z,{groupId:"device",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web",label:"Web",mdxType:"TabItem"},"Um ein Bankkonto hinzuzuf\xfcgen, gehe zuerst in deine ",(0,r.kt)(p,{url:"https://odysee.com/$/wallet",mdxType:"OdyseeButton"},(0,r.kt)(g,{type:"credits",mdxType:"OdyseeIcon"}),"  Brieftasche"),". Deine Brieftasche befindet sich oben rechts in der Men\xfcleiste.",(0,r.kt)(b,{img:"/img/de/locate_wallet_desktop_dark.png#dark",mdxType:"Image"}),(0,r.kt)(b,{img:"/img/de/locate_wallet_desktop_light.png#light",mdxType:"Image"})),(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"Um ein Bankkonto hinzuzuf\xfcgen, gehe zuerst in deine ",(0,r.kt)("a",{href:"https://odysee.com/$/wallet"},(0,r.kt)(g,{type:"wallet",mdxType:"OdyseeIcon"}),"  Brieftasche"),". In der mobilen Version findest du die Brieftasche im Seitenleistenmen\xfc.",(0,r.kt)(b,{img:"/img/de/locate_wallet_mobile_dark.png#dark",mdxType:"Image"}),(0,r.kt)(b,{img:"/img/de/locate_wallet_mobile_light.png#light",mdxType:"Image"}))),(0,r.kt)("p",null,"W\xe4hle hier ",(0,r.kt)(p,{url:"https://odysee.com/$/settings/tip_account",mdxType:"OdyseeButton"},(0,r.kt)(g,{type:"cogwheel",mdxType:"OdyseeIcon"})," Bankkonten")," aus."),(0,r.kt)(o.Z,{groupId:"device",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web",label:"Web",mdxType:"TabItem"},(0,r.kt)(b,{img:"/img/de/wallet_screen_bank_account_arrow_desktop_dark.png#dark",mdxType:"Image"}),(0,r.kt)(b,{img:"/img/de/wallet_screen_bank_account_arrow_desktop_light.png#light",mdxType:"Image"})),(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,r.kt)(b,{img:"/img/de/wallet_screen_bank_account_arrow_mobile_dark.png#dark",mdxType:"Image"}),(0,r.kt)(b,{img:"/img/de/wallet_screen_bank_account_arrow_mobile_light.png#light",mdxType:"Image"}))),(0,r.kt)("p",null,"Das bringt dich zur Konten\xfcbersicht, hier kannst du ",(0,r.kt)(k,{url:"https://odysee.com/$/settings/tip_account",mdxType:"PrimaryOdyseeButton"},(0,r.kt)(g,{type:"dollar",mdxType:"OdyseeIcon"})," Verbindung mit deinem Bankkonto herstellen")," ausw\xe4hlen."),(0,r.kt)(b,{src:"/img/de/connect_bank_account_screen_dark.png#dark",mdxType:"Image"}),(0,r.kt)(b,{src:"/img/de/connect_bank_account_screen_light.png#light",mdxType:"Image"}),(0,r.kt)("p",null,"Dies f\xfchrt dich von Odysee zu Stripe."),(0,r.kt)(b,{src:"/img/de/stripe_accept_payment_connect_screen.png",mdxType:"Image"}),(0,r.kt)("p",null,"Von hier aus gibst du einfach die angeforderten Informationen ein."),(0,r.kt)("p",null,"Nachdem dein Bankkonto hinzugef\xfcgt wurde, kannst du erhaltene Betr\xe4ge in deiner Brieftasche nachverfolgen."),(0,r.kt)(o.Z,{groupId:"device",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web",label:"Web",mdxType:"TabItem"},(0,r.kt)(b,{img:"/img/de/wallet_screen_desktop_dark.png#dark",mdxType:"Image"}),(0,r.kt)(b,{img:"/img/de/wallet_screen_desktop_light.png#light",mdxType:"Image"})),(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,r.kt)(b,{img:"/img/de/wallet_screen_mobile_dark.png#dark",mdxType:"Image"}),(0,r.kt)(b,{img:"/img/de/wallet_screen_mobile_light.png#light",mdxType:"Image"}))),(0,r.kt)("p",null,"Alle 2-3 Werktage werden die an deine Odysee-Brieftasche gesendeten Gelder automatisch ausgezahlt und auf dein Bankkonto \xfcberwiesen."))}h.isMDXComponent=!0}}]);