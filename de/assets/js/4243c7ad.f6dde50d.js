"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[4430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7462),a=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:p,groupId:g,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,s.U)(),[T,_]=(0,a.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=g){const e=k[g];null!=e&&e!==T&&b.some((t=>t.value===e))&&_(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),r=b[n].value;r!==T&&(x(t),_(r),null!=g&&O(g,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},v)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},7233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:1,description:"So kannst du einen Livestream erstellen, damit du auf Odysee live gehen kannst.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},s="Wie kann ich einen Livestream auf Odysee starten?",c={unversionedId:"category-livestreaming/category-creatingalivestream/menulocation",id:"category-livestreaming/category-creatingalivestream/menulocation",title:"Wie kann ich einen Livestream auf Odysee starten?",description:"So kannst du einen Livestream erstellen, damit du auf Odysee live gehen kannst.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/category-livestreaming/category-creatingalivestream/menulocation.mdx",sourceDirName:"category-livestreaming/category-creatingalivestream",slug:"/category-livestreaming/category-creatingalivestream/menulocation",permalink:"/de/category-livestreaming/category-creatingalivestream/menulocation",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/de/docusaurus-plugin-content-docs/current/category-livestreaming/category-creatingalivestream/menulocation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"So kannst du einen Livestream erstellen, damit du auf Odysee live gehen kannst.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},sidebar:"helphub",previous:{title:"Einen Livestream erstellen",permalink:"/de/category-livestreaming/category-creatingalivestream/"},next:{title:"Einstellungen und Personalisierung",permalink:"/de/category-livestreaming/category-creatingalivestream/settings"}},u={},m=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=d("OdyseeButtonRound"),g=d("OdyseeIcon"),v=d("Image"),y={toc:m};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wie-kann-ich-einen-livestream-auf-odysee-starten"},"Wie kann ich einen Livestream auf Odysee starten?"),(0,a.kt)(i.Z,{groupId:"device",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},"Um einen Livestream zu starten, musst du zun\xe4chst das Videokamera-Symbol ",(0,a.kt)(p,{url:"https://odysee.com/$/livestream",mdxType:"OdyseeButtonRound"},(0,a.kt)(g,{type:"Livestream",mdxType:"OdyseeIcon"}))," neben der Suchleiste ausw\xe4hlen.",(0,a.kt)(v,{img:"/img/de/locale_livestream_link_desktop_dark.png#dark",mdxType:"Image"}),(0,a.kt)(v,{img:"/img/de/locale_livestream_link_desktop_light.png#light",mdxType:"Image"})),(0,a.kt)(o.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"Auf mobilen Ger\xe4ten befindet sich die Schaltfl\xe4che ",(0,a.kt)("a",{href:"https://odysee.com/$/livestream"},(0,a.kt)(g,{type:"Livestream",mdxType:"OdyseeIcon"})," Livestream starten")," am unteren Rand der erweiterten Seitenleiste.",(0,a.kt)(v,{img:"/img/de/locale_livestream_link_mobile_dark.png#dark",mdxType:"Image"}),(0,a.kt)(v,{img:"/img/de/locale_livestream_link_mobile_light.png#light",mdxType:"Image"}))))}b.isMDXComponent=!0}}]);