import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as C}from"./avatars-RvFCfkV2.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=({src:n,alt:t="",size:l="md",fallback:r,showIcon:m=!1,statusIcon:d="none",online:u=!0,className:p})=>{const v=["avatar",`avatar--${l}`,p].filter(Boolean).join(" ");return e.jsxs("div",{className:v,children:[n?e.jsx("div",{className:"avatar__img-wrap",children:e.jsx("img",{src:n,alt:t,className:"avatar__img"})}):m||!r?e.jsx("div",{className:"avatar__fallback-wrap",children:e.jsx("span",{className:"avatar__icon",children:e.jsx("svg",{width:"50%",height:"50%",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z",fill:"currentColor"})})})}):e.jsx("div",{className:"avatar__fallback-wrap",children:e.jsx("span",{className:"avatar__fallback",children:r})}),(d==="online"||d==="offline")&&e.jsx("span",{className:`avatar__status avatar__status--${u?"online":"offline"}`}),d==="verified"&&e.jsx("span",{className:"avatar__verified",children:e.jsx(ye,{size:l})}),d==="company"&&e.jsx("span",{className:"avatar__company",children:e.jsx(ze,{size:l})})]})},I=({avatars:n,size:t="md",max:l=5,showAdd:r=!1,onAdd:m,className:d})=>{const u=n.slice(0,l),p=n.length-l,v={xs:"xs",sm:"sm",md:"md"};return e.jsxs("div",{className:`avatar-group avatar-group--${t} ${d??""}`,children:[u.map((x,xe)=>e.jsx(o,{src:x.src,alt:x.alt,fallback:x.fallback,size:v[t]},xe)),p>0&&e.jsxs("span",{className:"avatar-group__counter",children:["+",p]}),r&&e.jsx("button",{type:"button",className:"avatar-group__add",onClick:m,"aria-label":"Add user",children:e.jsx("svg",{width:"40%",height:"40%",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})},s=({src:n,alt:t,fallback:l,size:r="md",name:m,supportingText:d,statusIcon:u="none",online:p=!0,className:v})=>{const x={sm:"sm",md:"md",lg:"lg",xl:"xl"};return e.jsxs("div",{className:`avatar-label-group avatar-label-group--${r} ${v??""}`,children:[e.jsx(o,{src:n,alt:t,fallback:l,size:x[r],statusIcon:u,online:p}),e.jsxs("div",{className:"avatar-label-group__text",children:[e.jsx("span",{className:"avatar-label-group__name",children:m}),d&&e.jsx("span",{className:"avatar-label-group__supporting",children:d})]})]})},ge={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},ye=({size:n})=>{const t=ge[n];return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[e.jsx("path",{d:"M12.3553 2.83363C12.5073 3.20115 12.7989 3.49327 13.1662 3.64579L14.4541 4.17925C14.8217 4.33149 15.1137 4.6235 15.2659 4.99104C15.4182 5.35858 15.4182 5.77155 15.2659 6.13909L14.7328 7.42606C14.5805 7.79376 14.5803 8.20715 14.7333 8.57467L15.2655 9.86125C15.3409 10.0433 15.3798 10.2384 15.3798 10.4355C15.3799 10.6325 15.3411 10.8277 15.2657 11.0097C15.1902 11.1918 15.0797 11.3572 14.9403 11.4966C14.801 11.6359 14.6355 11.7464 14.4534 11.8217L13.1665 12.3548C12.7989 12.5068 12.5068 12.7985 12.3543 13.1657L11.8208 14.4536C11.6686 14.8212 11.3766 15.1132 11.009 15.2654C10.6415 15.4177 10.2285 15.4177 9.86099 15.2654L8.57403 14.7323C8.20648 14.5805 7.79366 14.5808 7.42634 14.7332L6.13845 15.2659C5.77111 15.4178 5.3585 15.4177 4.99126 15.2655C4.62402 15.1134 4.33217 14.8218 4.17982 14.4546L3.6462 13.1663C3.49424 12.7988 3.20256 12.5067 2.83527 12.3542L1.54739 11.8207C1.18 11.6686 0.88808 11.3767 0.735782 11.0094C0.583485 10.6421 0.583278 10.2293 0.735208 9.86181L1.26829 8.57484C1.42015 8.20729 1.41984 7.79447 1.26742 7.42715L0.735111 6.13834C0.659639 5.9563 0.620778 5.76117 0.620746 5.56411C0.620714 5.36704 0.659514 5.1719 0.734926 4.98984C0.81034 4.80778 0.920888 4.64236 1.06026 4.50304C1.19962 4.36371 1.36508 4.25322 1.54716 4.17786L2.83413 3.64479C3.20132 3.49296 3.49327 3.20164 3.6459 2.83478L4.17936 1.54689C4.3316 1.17935 4.62361 0.887337 4.99115 0.735096C5.3587 0.582855 5.77166 0.582855 6.1392 0.735096L7.42617 1.26817C7.79372 1.42004 8.20654 1.41973 8.57386 1.26731L9.86229 0.735923C10.2298 0.583767 10.6427 0.583799 11.0101 0.736009C11.3776 0.88822 11.6696 1.18015 11.8218 1.54759L12.3555 2.83587L12.3553 2.83363Z",fill:"#528BFF"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1333 5.90291C11.2401 5.73503 11.276 5.53157 11.2328 5.33728C11.1897 5.14299 11.0711 4.9738 10.9033 4.86691C10.7354 4.76003 10.5319 4.72422 10.3376 4.76735C10.1433 4.81048 9.97414 4.92903 9.86726 5.09691L6.93026 9.71191L5.58626 8.03191C5.46201 7.8765 5.2811 7.7768 5.08335 7.75477C4.88559 7.73273 4.68718 7.79016 4.53176 7.91441C4.37634 8.03867 4.27665 8.21957 4.25462 8.41733C4.23258 8.61508 4.29001 8.8135 4.41426 8.96891L6.41426 11.4689C6.4888 11.5622 6.58453 11.6363 6.6935 11.6852C6.80246 11.734 6.92152 11.7561 7.04075 11.7497C7.15998 11.7432 7.27595 11.7084 7.37901 11.6481C7.48207 11.5877 7.56923 11.5037 7.63326 11.4029L11.1333 5.90291Z",fill:"white"})]})},fe={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},he=C["Avatar company logo"],ze=({size:n})=>{var r;const t=fe[n],l=(r=he[0])==null?void 0:r.imageUrl;return e.jsx("div",{style:{width:t,height:t,borderRadius:"50%",overflow:"hidden",border:"1.5px solid white",boxSizing:"content-box",flexShrink:0},"aria-hidden":!0,children:e.jsx("img",{src:l,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})};try{o.displayName="Avatar",o.__docgenInfo={description:"Avatar — a circular user image with optional status indicator.",displayName:"Avatar",props:{src:{defaultValue:null,description:"Image source URL.",name:"src",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:{value:""},description:"Alt text.",name:"alt",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"2xl"'}]}},fallback:{defaultValue:null,description:"Fallback text (initials) when no image.",name:"fallback",required:!1,type:{name:"string | undefined"}},showIcon:{defaultValue:{value:"false"},description:"Show icon placeholder instead of image.",name:"showIcon",required:!1,type:{name:"boolean | undefined"}},statusIcon:{defaultValue:{value:"none"},description:"Status icon overlay.",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"online"'},{value:'"offline"'},{value:'"company"'},{value:'"verified"'}]}},online:{defaultValue:{value:"true"},description:"Online status (for online indicator).",name:"online",required:!1,type:{name:"boolean | undefined"}},companyType:{defaultValue:null,description:"Company icon type.",name:"companyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"company"'},{value:'"private"'},{value:'"protected"'}]}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}try{I.displayName="AvatarGroup",I.__docgenInfo={description:"AvatarGroup — a stack of overlapping avatars with optional counter and add button.",displayName:"AvatarGroup",props:{avatars:{defaultValue:null,description:"Avatar items.",name:"avatars",required:!0,type:{name:"{ src?: string | undefined; alt?: string | undefined; fallback?: string | undefined; }[]"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"xs"'}]}},max:{defaultValue:{value:"5"},description:'Max avatars to show before "+N" counter. Default: 5.',name:"max",required:!1,type:{name:"number | undefined"}},showAdd:{defaultValue:{value:"false"},description:"Show add button at the end.",name:"showAdd",required:!1,type:{name:"boolean | undefined"}},onAdd:{defaultValue:null,description:"Add button click handler.",name:"onAdd",required:!1,type:{name:"(() => void) | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}try{s.displayName="AvatarLabelGroup",s.__docgenInfo={description:"AvatarLabelGroup — avatar with name and supporting text beside it.",displayName:"AvatarLabelGroup",props:{src:{defaultValue:null,description:"Avatar image source.",name:"src",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:{value:""},description:"Avatar alt text.",name:"alt",required:!1,type:{name:"string | undefined"}},fallback:{defaultValue:null,description:"Avatar fallback initials.",name:"fallback",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},name:{defaultValue:null,description:"Primary name/title.",name:"name",required:!0,type:{name:"string"}},supportingText:{defaultValue:null,description:"Supporting text (email, role, etc).",name:"supportingText",required:!1,type:{name:"string | undefined"}},statusIcon:{defaultValue:{value:"none"},description:"Status icon.",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"online"'},{value:'"offline"'},{value:'"company"'},{value:'"verified"'}]}},online:{defaultValue:{value:"true"},description:"Online status.",name:"online",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const i=C["Male Avatar"],g=C["Female Avatar"],Ue={title:"Base Components/Avatar Group",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Avatar system — individual avatars, grouped stacks, and labeled profiles.

**Components:** Avatar, Avatar Group, Avatar Label Group.

**Sizes:** xs (24), sm (32), md (40), lg (48), xl (56), 2xl (64).

**Status icons:** Online indicator, Offline, Verified tick, Company icon.

**Features:** Fallback initials, icon placeholder, add button, overflow counter.

Uses foundation tokens and Avatars from the foundation tab.`}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],table:{category:"Appearance"}},statusIcon:{control:"select",options:["none","online","offline","verified"],table:{category:"Appearance"}}}},y={name:"Online Indicator",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(a,{title:"Offline (all sizes)",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(w,{size:n,online:!1}),e.jsx("span",{style:{fontSize:10,color:"var(--color-neutral-600)",fontFamily:"var(--sb-font-mono)"},children:n})]},n))})}),e.jsx(a,{title:"Online (all sizes)",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(w,{size:n,online:!0}),e.jsx("span",{style:{fontSize:10,color:"var(--color-neutral-600)",fontFamily:"var(--sb-font-mono)"},children:n})]},n))})})]})},f={name:"Company Icon",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(a,{title:"Company (all sizes)",children:e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(L,{size:n,type:"company"}),e.jsx("span",{style:{fontSize:10,color:"var(--color-neutral-600)",fontFamily:"var(--sb-font-mono)"},children:n})]},n))})}),e.jsx(a,{title:"Private (all sizes)",children:e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(L,{size:n,type:"private"}),e.jsx("span",{style:{fontSize:10,color:"var(--color-neutral-600)",fontFamily:"var(--sb-font-mono)"},children:n})]},n))})}),e.jsx(a,{title:"Protected (all sizes)",children:e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(L,{size:n,type:"protected"}),e.jsx("span",{style:{fontSize:10,color:"var(--color-neutral-600)",fontFamily:"var(--sb-font-mono)"},children:n})]},n))})})]})},h={name:"Verified Tick",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:e.jsx(a,{title:"All sizes",children:e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[10,12,14,16,18,20,24,28].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(be,{size:n}),e.jsxs("span",{style:{fontSize:10,color:"var(--color-neutral-600)",fontFamily:"var(--sb-font-mono)"},children:[n,"px"]})]},n))})})})},z={name:"Add Button",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(a,{title:"Default (all sizes)",children:e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(c,{size:24}),e.jsx(c,{size:32}),e.jsx(c,{size:40})]})}),e.jsx(a,{title:"Hover state (simulated with primary color)",children:e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(c,{size:24,hovered:!0}),e.jsx(c,{size:32,hovered:!0}),e.jsx(c,{size:40,hovered:!0})]})}),e.jsx(a,{title:"Focus state",children:e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(c,{size:24,focused:!0}),e.jsx(c,{size:32,focused:!0}),e.jsx(c,{size:40,focused:!0})]})}),e.jsx(a,{title:"Disabled",children:e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(c,{size:24,disabled:!0}),e.jsx(c,{size:32,disabled:!0}),e.jsx(c,{size:40,disabled:!0})]})})]})},j={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(a,{title:"With image — no status icon",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{src:i[0].imageUrl,size:n},n))})}),e.jsx(a,{title:"With image — online indicator",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{src:i[0].imageUrl,size:n,statusIcon:"online"},n))})}),e.jsx(a,{title:"With image — company icon",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{src:i[0].imageUrl,size:n,statusIcon:"company"},n))})}),e.jsx(a,{title:"With image — verified tick",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{src:i[0].imageUrl,size:n,statusIcon:"verified"},n))})}),e.jsx(a,{title:"Icon placeholder — no status",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{size:n,showIcon:!0},n))})}),e.jsx(a,{title:"Icon placeholder — online indicator",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{size:n,showIcon:!0,statusIcon:"online"},n))})}),e.jsx(a,{title:"Icon placeholder — company icon",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{size:n,showIcon:!0,statusIcon:"company"},n))})}),e.jsx(a,{title:"Text (initials) — no status",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{size:n,fallback:"OR"},n))})}),e.jsx(a,{title:"Text (initials) — online indicator",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{size:n,fallback:"OR",statusIcon:"online"},n))})}),e.jsx(a,{title:"Text (initials) — company icon",children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(n=>e.jsx(o,{size:n,fallback:"OR",statusIcon:"company"},n))})})]})},A={name:"Avatar Group",parameters:{controls:{disable:!0}},render:()=>{const n=[{src:i[0].imageUrl},{src:g[0].imageUrl},{src:i[1].imageUrl},{src:g[1].imageUrl},{src:i[2].imageUrl},{src:g[2].imageUrl},{src:i[3].imageUrl},{src:g[3].imageUrl},{src:i[4].imageUrl},{src:g[4].imageUrl}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(a,{title:"Extra small (xs)",children:e.jsx(I,{avatars:n,size:"xs",max:5,showAdd:!0,onAdd:()=>{}})}),e.jsx(a,{title:"Small (sm)",children:e.jsx(I,{avatars:n,size:"sm",max:5,showAdd:!0,onAdd:()=>{}})}),e.jsx(a,{title:"Medium (md)",children:e.jsx(I,{avatars:n,size:"md",max:5,showAdd:!0,onAdd:()=>{}})})]})}},S={name:"Avatar Label Group",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:24},children:[e.jsx(a,{title:"Small — no status",children:e.jsx(s,{src:i[0].imageUrl,size:"sm",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),e.jsx(a,{title:"Small — online",children:e.jsx(s,{src:i[0].imageUrl,size:"sm",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),e.jsx(a,{title:"Small — company",children:e.jsx(s,{src:i[0].imageUrl,size:"sm",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"company"})}),e.jsx(a,{title:"Small — verified",children:e.jsx(s,{src:i[0].imageUrl,size:"sm",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"verified"})}),e.jsx(a,{title:"Medium — no status",children:e.jsx(s,{src:i[0].imageUrl,size:"md",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),e.jsx(a,{title:"Medium — online",children:e.jsx(s,{src:i[0].imageUrl,size:"md",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),e.jsx(a,{title:"Medium — company",children:e.jsx(s,{src:i[0].imageUrl,size:"md",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"company"})}),e.jsx(a,{title:"Medium — verified",children:e.jsx(s,{src:i[0].imageUrl,size:"md",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"verified"})}),e.jsx(a,{title:"Large — no status",children:e.jsx(s,{src:i[0].imageUrl,size:"lg",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),e.jsx(a,{title:"Large — online",children:e.jsx(s,{src:i[0].imageUrl,size:"lg",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),e.jsx(a,{title:"Large — company",children:e.jsx(s,{src:i[0].imageUrl,size:"lg",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"company"})}),e.jsx(a,{title:"Large — verified",children:e.jsx(s,{src:i[0].imageUrl,size:"lg",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"verified"})}),e.jsx(a,{title:"XL — no status",children:e.jsx(s,{src:i[0].imageUrl,size:"xl",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),e.jsx(a,{title:"XL — online",children:e.jsx(s,{src:i[0].imageUrl,size:"xl",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),e.jsx(a,{title:"XL — company",children:e.jsx(s,{src:i[0].imageUrl,size:"xl",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"company"})}),e.jsx(a,{title:"XL — verified",children:e.jsx(s,{src:i[0].imageUrl,size:"xl",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"verified"})})]})};function a({title:n,children:t}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:10},children:n}),t]})}const je={xs:6,sm:8,md:10,lg:12,xl:14,"2xl":16};function w({size:n,online:t}){const l=je[n]??10;return e.jsx("div",{style:{width:l,height:l,borderRadius:"50%",background:t?"var(--color-success-500)":"var(--color-neutral-lm-300)",border:"1.5px solid var(--color-white)",boxSizing:"content-box"}})}const Ae={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},Se=C["Avatar company logo"];function L({size:n,type:t}){var m;const l=Ae[n]??14;if(t==="private")return e.jsxs("svg",{width:l,height:l,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8.5",cy:"8.5",r:"7.9",fill:"#079455",stroke:"white",strokeWidth:"1.17"}),e.jsx("path",{d:"M6.03 12.62c-.22 0-.4-.08-.55-.23a.75.75 0 0 1-.23-.55V7.77c0-.22.08-.4.23-.55a.75.75 0 0 1 .55-.24h.52V6.11c0-.54.19-1 .57-1.38.38-.38.84-.57 1.38-.57.54 0 1 .19 1.38.57.38.38.57.84.57 1.38v.87h.52c.22 0 .4.08.55.23.15.15.23.34.23.55v4.07c0 .22-.08.4-.23.55a.75.75 0 0 1-.55.23H6.03zM8.5 10.56c.21 0 .39-.07.54-.22.15-.15.22-.33.22-.54 0-.21-.07-.39-.22-.54a.73.73 0 0 0-.54-.22.73.73 0 0 0-.54.22.73.73 0 0 0-.22.54c0 .21.07.39.22.54.15.15.33.22.54.22zM7.2 6.98h2.6V6.11c0-.36-.13-.67-.38-.92a1.25 1.25 0 0 0-.92-.38c-.36 0-.67.13-.92.38-.25.25-.38.56-.38.92v.87z",fill:"white"})]});if(t==="protected")return e.jsxs("svg",{width:l,height:l,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8.5",cy:"8.5",r:"7.9",fill:"#DC6803",stroke:"white",strokeWidth:"1.17"}),e.jsx("path",{d:"M8.5 12.56c-.05 0-.09 0-.13-.01a.6.6 0 0 1-.13-.03c-.91-.33-1.64-.9-2.18-1.73-.54-.83-.81-1.72-.81-2.68V6.16c0-.16.05-.31.14-.44a.7.7 0 0 1 .37-.29l2.47-.92a.8.8 0 0 1 .27-.05c.09 0 .18.02.27.05l2.47.92c.15.06.27.16.37.29.1.13.14.28.14.44v1.95c0 .96-.27 1.85-.81 2.68-.54.83-1.27 1.4-2.18 1.73a.6.6 0 0 1-.13.03c-.04.01-.09.01-.13.01z",fill:"white"})]});const r=(m=Se[0])==null?void 0:m.imageUrl;return e.jsx("div",{style:{width:l,height:l,borderRadius:"50%",overflow:"hidden",border:"1.5px solid white",boxSizing:"content-box",flexShrink:0},children:e.jsx("img",{src:r,alt:"Company",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})}function be({size:n}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.3553 2.83363C12.5073 3.20115 12.7989 3.49327 13.1662 3.64579L14.4541 4.17925C14.8217 4.33149 15.1137 4.6235 15.2659 4.99104C15.4182 5.35858 15.4182 5.77155 15.2659 6.13909L14.7328 7.42606C14.5805 7.79376 14.5803 8.20715 14.7333 8.57467L15.2655 9.86125C15.3409 10.0433 15.3798 10.2384 15.3798 10.4355C15.3799 10.6325 15.3411 10.8277 15.2657 11.0097C15.1902 11.1918 15.0797 11.3572 14.9403 11.4966C14.801 11.6359 14.6355 11.7464 14.4534 11.8217L13.1665 12.3548C12.7989 12.5068 12.5068 12.7985 12.3543 13.1657L11.8208 14.4536C11.6686 14.8212 11.3766 15.1132 11.009 15.2654C10.6415 15.4177 10.2285 15.4177 9.86099 15.2654L8.57403 14.7323C8.20648 14.5805 7.79366 14.5808 7.42634 14.7332L6.13845 15.2659C5.77111 15.4178 5.3585 15.4177 4.99126 15.2655C4.62402 15.1134 4.33217 14.8218 4.17982 14.4546L3.6462 13.1663C3.49424 12.7988 3.20256 12.5067 2.83527 12.3542L1.54739 11.8207C1.18 11.6686 0.88808 11.3767 0.735782 11.0094C0.583485 10.6421 0.583278 10.2293 0.735208 9.86181L1.26829 8.57484C1.42015 8.20729 1.41984 7.79447 1.26742 7.42715L0.735111 6.13834C0.659639 5.9563 0.620778 5.76117 0.620746 5.56411C0.620714 5.36704 0.659514 5.1719 0.734926 4.98984C0.81034 4.80778 0.920888 4.64236 1.06026 4.50304C1.19962 4.36371 1.36508 4.25322 1.54716 4.17786L2.83413 3.64479C3.20132 3.49296 3.49327 3.20164 3.6459 2.83478L4.17936 1.54689C4.3316 1.17935 4.62361 0.887337 4.99115 0.735096C5.3587 0.582855 5.77166 0.582855 6.1392 0.735096L7.42617 1.26817C7.79372 1.42004 8.20654 1.41973 8.57386 1.26731L9.86229 0.735923C10.2298 0.583767 10.6427 0.583799 11.0101 0.736009C11.3776 0.88822 11.6696 1.18015 11.8218 1.54759L12.3555 2.83587L12.3553 2.83363Z",fill:"#528BFF"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1333 5.90291C11.2401 5.73503 11.276 5.53157 11.2328 5.33728C11.1897 5.14299 11.0711 4.9738 10.9033 4.86691C10.7354 4.76003 10.5319 4.72422 10.3376 4.76735C10.1433 4.81048 9.97414 4.92903 9.86726 5.09691L6.93026 9.71191L5.58626 8.03191C5.46201 7.8765 5.2811 7.7768 5.08335 7.75477C4.88559 7.73273 4.68718 7.79016 4.53176 7.91441C4.37634 8.03867 4.27665 8.21957 4.25462 8.41733C4.23258 8.61508 4.29001 8.8135 4.41426 8.96891L6.41426 11.4689C6.4888 11.5622 6.58453 11.6363 6.6935 11.6852C6.80246 11.734 6.92152 11.7561 7.04075 11.7497C7.15998 11.7432 7.27595 11.7084 7.37901 11.6481C7.48207 11.5877 7.56923 11.5037 7.63326 11.4029L11.1333 5.90291Z",fill:"white"})]})}function c({size:n,hovered:t,focused:l,disabled:r}){return e.jsx("button",{type:"button",disabled:r,style:{width:n,height:n,borderRadius:"50%",background:"var(--color-white)",border:`1.5px dashed ${t?"var(--color-primary)":"var(--color-neutral-lm-300)"}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:r?"not-allowed":"pointer",opacity:r?.5:1,color:t?"var(--color-primary)":"var(--color-neutral-lm-500)",boxShadow:l?"var(--focus-ring-xs)":"none",padding:0,outline:"none"},children:e.jsx("svg",{width:n*.4,height:n*.4,viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})}const b={args:{size:"lg",statusIcon:"online"},parameters:{docs:{disable:!0}},render:n=>e.jsx(o,{src:i[0].imageUrl,alt:"Ben Scott",...n})};var U,k,_,O,R;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Online Indicator",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <Section title="Offline (all sizes)">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
              <OnlineDot size={sz} online={false} />
              <span style={{
            fontSize: 10,
            color: "var(--color-neutral-600)",
            fontFamily: "var(--sb-font-mono)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
      <Section title="Online (all sizes)">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
              <OnlineDot size={sz} online={true} />
              <span style={{
            fontSize: 10,
            color: "var(--color-neutral-600)",
            fontFamily: "var(--sb-font-mono)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(_=(k=y.parameters)==null?void 0:k.docs)==null?void 0:_.source},description:{story:"Avatar online indicator — all sizes, online and offline.",...(R=(O=y.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var T,G,V,B,D;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Company Icon",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <Section title="Company (all sizes)">
        <div style={{
        display: "flex",
        gap: 12,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
              <CompanyBadge size={sz} type="company" />
              <span style={{
            fontSize: 10,
            color: "var(--color-neutral-600)",
            fontFamily: "var(--sb-font-mono)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
      <Section title="Private (all sizes)">
        <div style={{
        display: "flex",
        gap: 12,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
              <CompanyBadge size={sz} type="private" />
              <span style={{
            fontSize: 10,
            color: "var(--color-neutral-600)",
            fontFamily: "var(--sb-font-mono)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
      <Section title="Protected (all sizes)">
        <div style={{
        display: "flex",
        gap: 12,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
              <CompanyBadge size={sz} type="protected" />
              <span style={{
            fontSize: 10,
            color: "var(--color-neutral-600)",
            fontFamily: "var(--sb-font-mono)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(V=(G=f.parameters)==null?void 0:G.docs)==null?void 0:V.source},description:{story:"Avatar company icon — Company, Private, Protected types at all sizes.",...(D=(B=f.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var M,N,F,q,W;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Verified Tick",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <Section title="All sizes">
        <div style={{
        display: "flex",
        gap: 12,
        alignItems: "center"
      }}>
          {([10, 12, 14, 16, 18, 20, 24, 28] as const).map(px => <div key={px} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
              <VerifiedIcon size={px} />
              <span style={{
            fontSize: 10,
            color: "var(--color-neutral-600)",
            fontFamily: "var(--sb-font-mono)"
          }}>{px}px</span>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(F=(N=h.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:"Verified tick — all sizes.",...(W=(q=h.parameters)==null?void 0:q.docs)==null?void 0:W.description}}};var $,P,X,E,Z;z.parameters={...z.parameters,docs:{...($=z.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Add Button",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <Section title="Default (all sizes)">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          <AvatarAddBtn size={24} />
          <AvatarAddBtn size={32} />
          <AvatarAddBtn size={40} />
        </div>
      </Section>
      <Section title="Hover state (simulated with primary color)">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          <AvatarAddBtn size={24} hovered />
          <AvatarAddBtn size={32} hovered />
          <AvatarAddBtn size={40} hovered />
        </div>
      </Section>
      <Section title="Focus state">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          <AvatarAddBtn size={24} focused />
          <AvatarAddBtn size={32} focused />
          <AvatarAddBtn size={40} focused />
        </div>
      </Section>
      <Section title="Disabled">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          <AvatarAddBtn size={24} disabled />
          <AvatarAddBtn size={32} disabled />
          <AvatarAddBtn size={40} disabled />
        </div>
      </Section>
    </div>
}`,...(X=(P=z.parameters)==null?void 0:P.docs)==null?void 0:X.source},description:{story:"Avatar add button — all sizes and states.",...(Z=(E=z.parameters)==null?void 0:E.docs)==null?void 0:Z.description}}};var H,J,K,Q,Y;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      <Section title="With image — no status icon">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} />)}
        </div>
      </Section>
      <Section title="With image — online indicator">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} statusIcon="online" />)}
        </div>
      </Section>
      <Section title="With image — company icon">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} statusIcon="company" />)}
        </div>
      </Section>
      <Section title="With image — verified tick">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} statusIcon="verified" />)}
        </div>
      </Section>
      <Section title="Icon placeholder — no status">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} showIcon />)}
        </div>
      </Section>
      <Section title="Icon placeholder — online indicator">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} showIcon statusIcon="online" />)}
        </div>
      </Section>
      <Section title="Icon placeholder — company icon">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} showIcon statusIcon="company" />)}
        </div>
      </Section>
      <Section title="Text (initials) — no status">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} fallback="OR" />)}
        </div>
      </Section>
      <Section title="Text (initials) — online indicator">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} fallback="OR" statusIcon="online" />)}
        </div>
      </Section>
      <Section title="Text (initials) — company icon">
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} fallback="OR" statusIcon="company" />)}
        </div>
      </Section>
    </div>
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Avatar — all sizes with image, all status icon variants. Matches Figma node 17282-60230.",...(Y=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var ee,ne,ae,ie,te;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Avatar Group",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const avatars = [{
      src: maleAvatars[0].imageUrl
    }, {
      src: femaleAvatars[0].imageUrl
    }, {
      src: maleAvatars[1].imageUrl
    }, {
      src: femaleAvatars[1].imageUrl
    }, {
      src: maleAvatars[2].imageUrl
    }, {
      src: femaleAvatars[2].imageUrl
    }, {
      src: maleAvatars[3].imageUrl
    }, {
      src: femaleAvatars[3].imageUrl
    }, {
      src: maleAvatars[4].imageUrl
    }, {
      src: femaleAvatars[4].imageUrl
    }];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Section title="Extra small (xs)">
          <AvatarGroup avatars={avatars} size="xs" max={5} showAdd onAdd={() => {}} />
        </Section>
        <Section title="Small (sm)">
          <AvatarGroup avatars={avatars} size="sm" max={5} showAdd onAdd={() => {}} />
        </Section>
        <Section title="Medium (md)">
          <AvatarGroup avatars={avatars} size="md" max={5} showAdd onAdd={() => {}} />
        </Section>
      </div>;
  }
}`,...(ae=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:ae.source},description:{story:"Avatar group — all sizes with counter and add button. Matches Figma node 17282-60462.",...(te=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:te.description}}};var le,se,re,oe,ce;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Avatar Label Group",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24
  }}>
      <Section title="Small — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="sm" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Small — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="sm" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="Small — company">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="sm" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="company" />
      </Section>
      <Section title="Small — verified">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="sm" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="verified" />
      </Section>
      <Section title="Medium — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="md" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Medium — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="md" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="Medium — company">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="md" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="company" />
      </Section>
      <Section title="Medium — verified">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="md" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="verified" />
      </Section>
      <Section title="Large — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="lg" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Large — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="lg" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="Large — company">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="lg" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="company" />
      </Section>
      <Section title="Large — verified">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="lg" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="verified" />
      </Section>
      <Section title="XL — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="xl" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="XL — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="xl" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="XL — company">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="xl" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="company" />
      </Section>
      <Section title="XL — verified">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="xl" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="verified" />
      </Section>
    </div>
}`,...(re=(se=S.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"Avatar label group — all sizes × all status icons. Matches Figma node 17282-60149.",...(ce=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ce.description}}};var de,me,pe,ue,ve;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    size: "lg",
    statusIcon: "online"
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  render: (args: any) => <Avatar src={maleAvatars[0].imageUrl} alt="Ben Scott" {...args} />
}`,...(pe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"Interactive playground — use the controls panel to configure the Avatar.",...(ve=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ve.description}}};const ke=["OnlineIndicator","CompanyIcon","VerifiedTick","AddButton","Sizes","Group","LabelGroup","Playground"];export{z as AddButton,f as CompanyIcon,A as Group,S as LabelGroup,y as OnlineIndicator,b as Playground,j as Sizes,h as VerifiedTick,ke as __namedExportsOrder,Ue as default};
