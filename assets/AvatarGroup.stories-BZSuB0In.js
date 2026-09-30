import{j as a}from"./jsx-runtime-BYYWji4R.js";import{u as ya,T as x}from"./T-C6nayWAE.js";import{r as ba}from"./index-ClcD9ViR.js";import{a as A}from"./avatars-DeYFvwHw.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=({src:e,alt:n="",size:i="md",fallback:s,showIcon:c=!1,statusIcon:d="none",online:g=!0,className:u,name:v})=>{const p=ya(),[w,xa]=ba.useState(!1),ha=["avatar",`avatar--${i}`,u].filter(Boolean).join(" "),fa=e&&!w;return a.jsxs("div",{className:ha,children:[fa?a.jsx("div",{className:"avatar__img-wrap",children:a.jsx("img",{src:e,alt:n,className:"avatar__img",onError:()=>xa(!0)})}):c?a.jsx("div",{className:"avatar__fallback-wrap",children:a.jsx("span",{className:"avatar__icon",children:a.jsx("svg",{width:"50%",height:"50%",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:a.jsx("path",{d:"M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z",fill:"currentColor"})})})}):s||v?a.jsx("div",{className:"avatar__fallback-wrap",children:a.jsx("span",{className:"avatar__fallback",children:p(s??"")||wa(p(v??""))})}):a.jsx("div",{className:"avatar__fallback-wrap"}),(d==="online"||d==="offline")&&a.jsx("span",{className:`avatar__status avatar__status--${g?"online":"offline"}`}),d==="verified"&&a.jsx("span",{className:"avatar__verified",children:a.jsx(Sa,{size:i})}),d==="company"&&a.jsx("span",{className:"avatar__company",children:a.jsx(Aa,{size:i})})]})},k=({avatars:e,size:n="md",max:i=5,showAdd:s=!1,onAdd:c,className:d})=>{const g=e.slice(0,i),u=e.length-i,v={xs:"xs",sm:"sm",md:"md"};return a.jsxs("div",{className:`avatar-group avatar-group--${n} ${d??""}`,children:[g.map((p,w)=>a.jsx(r,{src:p.src,alt:p.alt,fallback:p.fallback,size:v[n]},w)),u>0&&a.jsx("span",{className:"avatar-group__counter",children:a.jsx(x,{children:`+${u}`})}),s&&a.jsx("button",{type:"button",className:"avatar-group__add",onClick:c,"aria-label":"Add user",children:a.jsx("svg",{width:"40%",height:"40%",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:a.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})},m=({src:e,alt:n,fallback:i,size:s="md",name:c,supportingText:d,statusIcon:g="none",online:u=!0,className:v})=>{const p={sm:"sm",md:"md",lg:"lg",xl:"xl"};return a.jsxs("div",{className:`avatar-label-group avatar-label-group--${s} ${v??""}`,children:[a.jsx(r,{src:e,alt:n,fallback:i,size:p[s],statusIcon:g,online:u}),a.jsxs("div",{className:"avatar-label-group__text",children:[a.jsx("span",{className:"avatar-label-group__name",children:a.jsx(x,{children:c})}),d&&a.jsx("span",{className:"avatar-label-group__supporting",children:a.jsx(x,{children:d})})]})]})},ja={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},Sa=({size:e})=>{const n=ja[e];return a.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[a.jsx("path",{d:"M12.3553 2.83363C12.5073 3.20115 12.7989 3.49327 13.1662 3.64579L14.4541 4.17925C14.8217 4.33149 15.1137 4.6235 15.2659 4.99104C15.4182 5.35858 15.4182 5.77155 15.2659 6.13909L14.7328 7.42606C14.5805 7.79376 14.5803 8.20715 14.7333 8.57467L15.2655 9.86125C15.3409 10.0433 15.3798 10.2384 15.3798 10.4355C15.3799 10.6325 15.3411 10.8277 15.2657 11.0097C15.1902 11.1918 15.0797 11.3572 14.9403 11.4966C14.801 11.6359 14.6355 11.7464 14.4534 11.8217L13.1665 12.3548C12.7989 12.5068 12.5068 12.7985 12.3543 13.1657L11.8208 14.4536C11.6686 14.8212 11.3766 15.1132 11.009 15.2654C10.6415 15.4177 10.2285 15.4177 9.86099 15.2654L8.57403 14.7323C8.20648 14.5805 7.79366 14.5808 7.42634 14.7332L6.13845 15.2659C5.77111 15.4178 5.3585 15.4177 4.99126 15.2655C4.62402 15.1134 4.33217 14.8218 4.17982 14.4546L3.6462 13.1663C3.49424 12.7988 3.20256 12.5067 2.83527 12.3542L1.54739 11.8207C1.18 11.6686 0.88808 11.3767 0.735782 11.0094C0.583485 10.6421 0.583278 10.2293 0.735208 9.86181L1.26829 8.57484C1.42015 8.20729 1.41984 7.79447 1.26742 7.42715L0.735111 6.13834C0.659639 5.9563 0.620778 5.76117 0.620746 5.56411C0.620714 5.36704 0.659514 5.1719 0.734926 4.98984C0.81034 4.80778 0.920888 4.64236 1.06026 4.50304C1.19962 4.36371 1.36508 4.25322 1.54716 4.17786L2.83413 3.64479C3.20132 3.49296 3.49327 3.20164 3.6459 2.83478L4.17936 1.54689C4.3316 1.17935 4.62361 0.887337 4.99115 0.735096C5.3587 0.582855 5.77166 0.582855 6.1392 0.735096L7.42617 1.26817C7.79372 1.42004 8.20654 1.41973 8.57386 1.26731L9.86229 0.735923C10.2298 0.583767 10.6427 0.583799 11.0101 0.736009C11.3776 0.88822 11.6696 1.18015 11.8218 1.54759L12.3555 2.83587L12.3553 2.83363Z",fill:"#528BFF"}),a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1333 5.90291C11.2401 5.73503 11.276 5.53157 11.2328 5.33728C11.1897 5.14299 11.0711 4.9738 10.9033 4.86691C10.7354 4.76003 10.5319 4.72422 10.3376 4.76735C10.1433 4.81048 9.97414 4.92903 9.86726 5.09691L6.93026 9.71191L5.58626 8.03191C5.46201 7.8765 5.2811 7.7768 5.08335 7.75477C4.88559 7.73273 4.68718 7.79016 4.53176 7.91441C4.37634 8.03867 4.27665 8.21957 4.25462 8.41733C4.23258 8.61508 4.29001 8.8135 4.41426 8.96891L6.41426 11.4689C6.4888 11.5622 6.58453 11.6363 6.6935 11.6852C6.80246 11.734 6.92152 11.7561 7.04075 11.7497C7.15998 11.7432 7.27595 11.7084 7.37901 11.6481C7.48207 11.5877 7.56923 11.5037 7.63326 11.4029L11.1333 5.90291Z",fill:"white"})]})},_a={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},za=A["Avatar company logo"],Aa=({size:e})=>{var s;const n=_a[e],i=(s=za[0])==null?void 0:s.imageUrl;return a.jsx("div",{style:{width:n,height:n,borderRadius:"50%",overflow:"hidden",border:"1.5px solid white",boxSizing:"content-box",flexShrink:0},"aria-hidden":!0,children:a.jsx("img",{src:i,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})};function wa(e){if(!e)return"";const n=e.trim().split(/\s+/);return n.length>=2?(n[0][0]+n[n.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}try{r.displayName="Avatar",r.__docgenInfo={description:"Avatar — a circular user image with optional status indicator.",displayName:"Avatar",props:{src:{defaultValue:null,description:"Image source URL.",name:"src",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:{value:""},description:"Alt text.",name:"alt",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"2xl"'}]}},fallback:{defaultValue:null,description:"Fallback text (initials) when no image.",name:"fallback",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"User name — used to generate initials when fallback is not provided.",name:"name",required:!1,type:{name:"string | undefined"}},showIcon:{defaultValue:{value:"false"},description:"Show icon placeholder instead of image.",name:"showIcon",required:!1,type:{name:"boolean | undefined"}},statusIcon:{defaultValue:{value:"none"},description:"Status icon overlay.",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"online"'},{value:'"offline"'},{value:'"company"'},{value:'"verified"'}]}},online:{defaultValue:{value:"true"},description:"Online status (for online indicator).",name:"online",required:!1,type:{name:"boolean | undefined"}},companyType:{defaultValue:null,description:"Company icon type.",name:"companyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"company"'},{value:'"private"'},{value:'"protected"'}]}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}try{k.displayName="AvatarGroup",k.__docgenInfo={description:"AvatarGroup — a stack of overlapping avatars with optional counter and add button.",displayName:"AvatarGroup",props:{avatars:{defaultValue:null,description:"Avatar items.",name:"avatars",required:!0,type:{name:"{ src?: string | undefined; alt?: string | undefined; fallback?: string | undefined; }[]"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"xs"'}]}},max:{defaultValue:{value:"5"},description:'Max avatars to show before "+N" counter. Default: 5.',name:"max",required:!1,type:{name:"number | undefined"}},showAdd:{defaultValue:{value:"false"},description:"Show add button at the end.",name:"showAdd",required:!1,type:{name:"boolean | undefined"}},onAdd:{defaultValue:null,description:"Add button click handler.",name:"onAdd",required:!1,type:{name:"(() => void) | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}try{m.displayName="AvatarLabelGroup",m.__docgenInfo={description:"AvatarLabelGroup — avatar with name and supporting text beside it.",displayName:"AvatarLabelGroup",props:{src:{defaultValue:null,description:"Avatar image source.",name:"src",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:{value:""},description:"Avatar alt text.",name:"alt",required:!1,type:{name:"string | undefined"}},fallback:{defaultValue:null,description:"Avatar fallback initials.",name:"fallback",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},name:{defaultValue:null,description:"Primary name/title.",name:"name",required:!0,type:{name:"string"}},supportingText:{defaultValue:null,description:"Supporting text (email, role, etc).",name:"supportingText",required:!1,type:{name:"string | undefined"}},statusIcon:{defaultValue:{value:"none"},description:"Status icon.",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"online"'},{value:'"offline"'},{value:'"company"'},{value:'"verified"'}]}},online:{defaultValue:{value:"true"},description:"Online status.",name:"online",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const o=A["Male Avatar"],Na={title:"Base Components/Avatar Group",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Avatar system — individual avatars, grouped stacks, and labeled profiles.

**Components:** Avatar, Avatar Group, Avatar Label Group.

**Sizes:** xs (24), sm (32), md (40), lg (48), xl (56), 2xl (64).

**Status icons:** Online indicator, Offline, Verified tick, Company icon.

**Features:** Fallback initials, icon placeholder, add button, overflow counter.

Uses foundation tokens and Avatars from the foundation tab.`}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],table:{category:"Appearance"}},statusIcon:{control:"select",options:["none","online","offline","verified"],table:{category:"Appearance"}}}},h={name:"Online Indicator",parameters:{controls:{disable:!0}},render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:a.jsx(t,{title:"Online (all sizes)",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-1-5)"},children:[a.jsx(La,{size:e,online:!0}),a.jsx("span",{style:{fontSize:"10px",color:"var(--cometchat-neutral-color-600)",fontFamily:"var(--cometchat-font-family)"},children:e})]},e))})})})},f={name:"Group Icons",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[a.jsx(t,{title:"Private (all sizes)",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-1-5)"},children:[a.jsx(T,{size:e,type:"private"}),a.jsx("span",{style:{fontSize:"10px",color:"var(--cometchat-neutral-color-600)",fontFamily:"var(--cometchat-font-family)"},children:e})]},e))})}),a.jsx(t,{title:"Protected (all sizes)",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-1-5)"},children:[a.jsx(T,{size:e,type:"protected"}),a.jsx("span",{style:{fontSize:"10px",color:"var(--cometchat-neutral-color-600)",fontFamily:"var(--cometchat-font-family)"},children:e})]},e))})})]})},y={name:"Avatar Variants",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[a.jsx(t,{title:"With Image",children:a.jsx(r,{src:o[0].imageUrl,size:"lg"})}),a.jsx(t,{title:"Initials — Multi-Word Name (JD)",children:a.jsx(r,{size:"lg",fallback:"JD",name:"John Doe"})}),a.jsx(t,{title:"Initials — Single-Word Name (AL)",children:a.jsx(r,{size:"lg",fallback:"AL",name:"Alice"})}),a.jsx(t,{title:"Broken Image URL (Fallback to EU)",children:a.jsx(r,{src:"https://broken-url.invalid/avatar.png",size:"lg",fallback:"EU",name:"Example User"})}),a.jsx(t,{title:"Empty Name (No Initials)",children:a.jsx(r,{size:"lg"})})]})},b={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-8)"},children:[a.jsx(t,{title:"With image — no status icon",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsx(r,{src:o[0].imageUrl,size:e},e))})}),a.jsx(t,{title:"With image — online indicator",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsx(r,{src:o[0].imageUrl,size:e,statusIcon:"online"},e))})}),a.jsx(t,{title:"Text (initials) — no status",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsx(r,{size:e,fallback:"OR"},e))})}),a.jsx(t,{title:"Text (initials) — online indicator",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsx(r,{size:e,fallback:"OR",statusIcon:"online"},e))})}),a.jsx(t,{title:"Broken image URL (fallback to initials)",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsx(r,{size:e,src:"https://broken-url.invalid/avatar.png",fallback:"EU",name:"Example User"},e))})}),a.jsx(t,{title:"Empty name — no status",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsx(r,{size:e},e))})}),a.jsx(t,{title:"Empty name — online indicator",children:a.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsx(r,{size:e,statusIcon:"online"},e))})})]})},j={name:"Avatar Label Group",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"var(--cometchat-spacing-6)"},children:[a.jsx(t,{title:"Small — no status",children:a.jsx(m,{src:o[0].imageUrl,size:"sm",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),a.jsx(t,{title:"Small — online",children:a.jsx(m,{src:o[0].imageUrl,size:"sm",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),a.jsx(t,{title:"Medium — no status",children:a.jsx(m,{src:o[0].imageUrl,size:"md",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),a.jsx(t,{title:"Medium — online",children:a.jsx(m,{src:o[0].imageUrl,size:"md",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),a.jsx(t,{title:"Large — no status",children:a.jsx(m,{src:o[0].imageUrl,size:"lg",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),a.jsx(t,{title:"Large — online",children:a.jsx(m,{src:o[0].imageUrl,size:"lg",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),a.jsx(t,{title:"XL — no status",children:a.jsx(m,{src:o[0].imageUrl,size:"xl",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),a.jsx(t,{title:"XL — online",children:a.jsx(m,{src:o[0].imageUrl,size:"xl",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})})]})},S={name:"Group Avatar Label Group",parameters:{controls:{disable:!0}},render:()=>{const e=A["Group Avatar"];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[a.jsx(t,{title:"Small — Public",children:a.jsx(l,{src:e[5].imageUrl,size:"sm",name:"Epic Game",supportingText:"248 Members",groupType:"public"})}),a.jsx(t,{title:"Small — Private",children:a.jsx(l,{src:e[1].imageUrl,size:"sm",name:"Bright Mind",supportingText:"12 Members",groupType:"private"})}),a.jsx(t,{title:"Small — Protected",children:a.jsx(l,{src:e[8].imageUrl,size:"sm",name:"Innovative Online Shopping",supportingText:"56 Members",groupType:"protected"})}),a.jsx(t,{title:"Medium — Public",children:a.jsx(l,{src:e[5].imageUrl,size:"md",name:"Epic Game",supportingText:"248 Members",groupType:"public"})}),a.jsx(t,{title:"Medium — Private",children:a.jsx(l,{src:e[1].imageUrl,size:"md",name:"Bright Mind",supportingText:"12 Members",groupType:"private"})}),a.jsx(t,{title:"Medium — Protected",children:a.jsx(l,{src:e[8].imageUrl,size:"md",name:"Innovative Online Shopping",supportingText:"56 Members",groupType:"protected"})}),a.jsx(t,{title:"Large — Public",children:a.jsx(l,{src:e[5].imageUrl,size:"lg",name:"Epic Game",supportingText:"248 Members",groupType:"public"})}),a.jsx(t,{title:"Large — Private",children:a.jsx(l,{src:e[1].imageUrl,size:"lg",name:"Bright Mind",supportingText:"12 Members",groupType:"private"})}),a.jsx(t,{title:"Large — Protected",children:a.jsx(l,{src:e[8].imageUrl,size:"lg",name:"Innovative Online Shopping",supportingText:"56 Members",groupType:"protected"})}),a.jsx(t,{title:"XL — Public",children:a.jsx(l,{src:e[5].imageUrl,size:"xl",name:"Epic Game",supportingText:"248 Members",groupType:"public"})}),a.jsx(t,{title:"XL — Private",children:a.jsx(l,{src:e[1].imageUrl,size:"xl",name:"Bright Mind",supportingText:"12 Members",groupType:"private"})}),a.jsx(t,{title:"XL — Protected",children:a.jsx(l,{src:e[8].imageUrl,size:"xl",name:"Innovative Online Shopping",supportingText:"56 Members",groupType:"protected"})})]})}},L=({language:e,code:n})=>a.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:a.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:e})}),a.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:a.jsx("code",{children:n})})]});function t({title:e,children:n}){return a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:a.jsx(x,{children:e})}),n]})}const ka={xs:6,sm:8,md:10,lg:12,xl:14,"2xl":16};function La({size:e,online:n}){const i=ka[e]??10;return a.jsx("div",{style:{width:i,height:i,borderRadius:"50%",background:n?"var(--cometchat-success-color)":"var(--cometchat-neutral-color-300)",border:"1.5px solid var(--cometchat-static-white)",boxSizing:"content-box"}})}const Ta={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},Ia=A["Avatar company logo"];function T({size:e,type:n}){var c;const i=Ta[e]??14;if(n==="private")return a.jsxs("svg",{width:i,height:i,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("circle",{cx:"8.5",cy:"8.5",r:"7.9",fill:"#079455",stroke:"white",strokeWidth:"1.17"}),a.jsx("path",{d:"M6.03 12.62c-.22 0-.4-.08-.55-.23a.75.75 0 0 1-.23-.55V7.77c0-.22.08-.4.23-.55a.75.75 0 0 1 .55-.24h.52V6.11c0-.54.19-1 .57-1.38.38-.38.84-.57 1.38-.57.54 0 1 .19 1.38.57.38.38.57.84.57 1.38v.87h.52c.22 0 .4.08.55.23.15.15.23.34.23.55v4.07c0 .22-.08.4-.23.55a.75.75 0 0 1-.55.23H6.03zM8.5 10.56c.21 0 .39-.07.54-.22.15-.15.22-.33.22-.54 0-.21-.07-.39-.22-.54a.73.73 0 0 0-.54-.22.73.73 0 0 0-.54.22.73.73 0 0 0-.22.54c0 .21.07.39.22.54.15.15.33.22.54.22zM7.2 6.98h2.6V6.11c0-.36-.13-.67-.38-.92a1.25 1.25 0 0 0-.92-.38c-.36 0-.67.13-.92.38-.25.25-.38.56-.38.92v.87z",fill:"white"})]});if(n==="protected")return a.jsxs("svg",{width:i,height:i,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("circle",{cx:"8.5",cy:"8.5",r:"7.9",fill:"#DC6803",stroke:"white",strokeWidth:"1.17"}),a.jsx("path",{d:"M8.5 12.56c-.05 0-.09 0-.13-.01a.6.6 0 0 1-.13-.03c-.91-.33-1.64-.9-2.18-1.73-.54-.83-.81-1.72-.81-2.68V6.16c0-.16.05-.31.14-.44a.7.7 0 0 1 .37-.29l2.47-.92a.8.8 0 0 1 .27-.05c.09 0 .18.02.27.05l2.47.92c.15.06.27.16.37.29.1.13.14.28.14.44v1.95c0 .96-.27 1.85-.81 2.68-.54.83-1.27 1.4-2.18 1.73a.6.6 0 0 1-.13.03c-.04.01-.09.01-.13.01z",fill:"white"})]});const s=(c=Ia[0])==null?void 0:c.imageUrl;return a.jsx("div",{style:{width:i,height:i,borderRadius:"50%",overflow:"hidden",border:"1.5px solid white",boxSizing:"content-box",flexShrink:0},children:a.jsx("img",{src:s,alt:"Company",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})}const _={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>a.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[a.jsx(t,{title:"HTML",children:a.jsx(L,{language:"HTML",code:`<!-- Single Avatar with image -->
<div class="avatar avatar--lg">
  <div class="avatar__img-wrap">
    <img class="avatar__img" src="avatar.jpg" alt="User" />
  </div>
  <span class="avatar__status avatar__status--online"></span>
</div>

<!-- Avatar with initials fallback -->
<div class="avatar avatar--md">
  <div class="avatar__fallback-wrap">
    <span class="avatar__fallback">JD</span>
  </div>
</div>

<!-- Avatar Group (stacked) -->
<div class="avatar-group avatar-group--md">
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="a1.jpg" alt="" /></div>
  </div>
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="a2.jpg" alt="" /></div>
  </div>
  <div class="avatar-group__counter">+3</div>
  <button class="avatar-group__add" type="button">+</button>
</div>

<!-- Avatar Label Group -->
<div class="avatar-label-group avatar-label-group--md">
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="avatar.jpg" alt="" /></div>
  </div>
  <div class="avatar-label-group__text">
    <span class="avatar-label-group__name">Olivia Rhye</span>
    <span class="avatar-label-group__supporting">olivia@email.com</span>
  </div>
</div>`})}),a.jsx(t,{title:"CSS (CometChat Tokens)",children:a.jsx(L,{language:"CSS",code:`.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-max);
  overflow: visible;
}

.avatar--xs { width: 24px; height: 24px; }
.avatar--sm { width: 32px; height: 32px; }
.avatar--md { width: 40px; height: 40px; }
.avatar--lg { width: 48px; height: 48px; }
.avatar--xl { width: 56px; height: 56px; }
.avatar--2xl { width: 64px; height: 64px; }

.avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--cometchat-radius-max);
}

.avatar__fallback-wrap {
  width: 100%;
  height: 100%;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-300);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar__fallback {
  font-family: var(--cometchat-font-family);
  font-weight: 500;
  color: var(--cometchat-static-white);
  text-transform: uppercase;
}

.avatar__status {
  position: absolute;
  bottom: 0;
  inset-inline-end: 0;
  border-radius: var(--cometchat-radius-max);
  border: 1.5px solid var(--cometchat-static-white);
}

.avatar__status--online { background: var(--cometchat-success-color); }
.avatar__status--offline { background: var(--cometchat-neutral-color-400); }

.avatar-group {
  display: inline-flex;
  align-items: center;
}

.avatar-group .avatar {
  border: 2px solid var(--cometchat-static-white);
  margin-inline-start: -8px;
}

.avatar-label-group {
  display: inline-flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
}

.avatar-label-group__name {
  font-weight: 500;
  color: var(--cometchat-neutral-color-900);
}

.avatar-label-group__supporting {
  font-weight: 400;
  color: var(--cometchat-neutral-color-600);
}`})})]})},z={args:{size:"lg",statusIcon:"online"},parameters:{docs:{disable:!0}},render:e=>a.jsx(r,{src:o[0].imageUrl,alt:"Ben Scott",...e})};function l({src:e,size:n,name:i,supportingText:s,groupType:c}){const d={sm:"32px",md:"40px",lg:"48px",xl:"56px"},g={sm:14,md:16,lg:20,xl:22},u=d[n],v=g[n],p=c!=="public";return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3)"},children:[a.jsxs("div",{style:{position:"relative",width:u,height:u,flexShrink:0},children:[a.jsx("img",{src:e,alt:i,style:{width:"100%",height:"100%",borderRadius:"var(--cometchat-radius-max)",objectFit:"cover",display:"block"}}),p&&a.jsx("span",{style:{position:"absolute",insetInlineEnd:-2,bottom:-2,width:v,height:v,display:"flex"},children:c==="private"?a.jsxs("svg",{viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"100%"},children:[a.jsx("circle",{cx:"8.5",cy:"8.5",r:"7.9",fill:"#079455",stroke:"white",strokeWidth:"1.17"}),a.jsx("path",{d:"M6.03 12.62c-.22 0-.4-.08-.55-.23a.75.75 0 0 1-.23-.55V7.77c0-.22.08-.4.23-.55a.75.75 0 0 1 .55-.24h.52V6.11c0-.54.19-1 .57-1.38.38-.38.84-.57 1.38-.57.54 0 1 .19 1.38.57.38.38.57.84.57 1.38v.87h.52c.22 0 .4.08.55.23.15.15.23.34.23.55v4.07c0 .22-.08.4-.23.55a.75.75 0 0 1-.55.23H6.03zM8.5 10.56c.21 0 .39-.07.54-.22.15-.15.22-.33.22-.54 0-.21-.07-.39-.22-.54a.73.73 0 0 0-.54-.22.73.73 0 0 0-.54.22.73.73 0 0 0-.22.54c0 .21.07.39.22.54.15.15.33.22.54.22zM7.2 6.98h2.6V6.11c0-.36-.13-.67-.38-.92a1.25 1.25 0 0 0-.92-.38c-.36 0-.67.13-.92.38-.25.25-.38.56-.38.92v.87z",fill:"white"})]}):a.jsxs("svg",{viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"100%"},children:[a.jsx("circle",{cx:"8.5",cy:"8.5",r:"7.9",fill:"#DC6803",stroke:"white",strokeWidth:"1.17"}),a.jsx("path",{d:"M8.5 12.56c-.05 0-.09 0-.13-.01a.6.6 0 0 1-.13-.03c-.91-.33-1.64-.9-2.18-1.73-.54-.83-.81-1.72-.81-2.68V6.16c0-.16.05-.31.14-.44a.7.7 0 0 1 .37-.29l2.47-.92a.8.8 0 0 1 .27-.05c.09 0 .18.02.27.05l2.47.92c.15.06.27.16.37.29.1.13.14.28.14.44v1.95c0 .96-.27 1.85-.81 2.68-.54.83-1.27 1.4-2.18 1.73a.6.6 0 0 1-.13.03c-.04.01-.09.01-.13.01z",fill:"white"})]})})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("span",{style:{fontFamily:"var(--cometchat-font-family)",fontWeight:"500",fontSize:n==="sm"||n==="md"?"14px":n==="lg"?"16px":"18px",lineHeight:n==="lg"?"19.2px":"16.8px",color:"var(--cometchat-text-color-primary)"},children:a.jsx(x,{children:i})}),a.jsx("span",{style:{fontFamily:"var(--cometchat-font-family)",fontWeight:"400",fontSize:n==="sm"?"12px":"14px",lineHeight:"16.8px",color:"var(--cometchat-text-color-secondary)"},children:a.jsx(x,{children:s})})]})]})}var I,U,C,M,G;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Online Indicator",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="Online (all sizes)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--cometchat-spacing-1-5)"
        }}>
              <OnlineDot size={sz} online={true} />
              <span style={{
            fontSize: "10px",
            color: "var(--cometchat-neutral-color-600)",
            fontFamily: "var(--cometchat-font-family)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(C=(U=h.parameters)==null?void 0:U.docs)==null?void 0:C.source},description:{story:"Avatar online indicator — all sizes.",...(G=(M=h.parameters)==null?void 0:M.docs)==null?void 0:G.description}}};var O,N,V,P,R;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Group Icons",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="Private (all sizes)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--cometchat-spacing-1-5)"
        }}>
              <CompanyBadge size={sz} type="private" />
              <span style={{
            fontSize: "10px",
            color: "var(--cometchat-neutral-color-600)",
            fontFamily: "var(--cometchat-font-family)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
      <Section title="Protected (all sizes)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--cometchat-spacing-1-5)"
        }}>
              <CompanyBadge size={sz} type="protected" />
              <span style={{
            fontSize: "10px",
            color: "var(--cometchat-neutral-color-600)",
            fontFamily: "var(--cometchat-font-family)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(V=(N=f.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"Avatar group icons — Private, Protected types at all sizes.",...(R=(P=f.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var D,B,E,q,F;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Avatar Variants",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="With Image">
        <Avatar src={maleAvatars[0].imageUrl} size="lg" />
      </Section>
      <Section title="Initials — Multi-Word Name (JD)">
        <Avatar size="lg" fallback="JD" name="John Doe" />
      </Section>
      <Section title="Initials — Single-Word Name (AL)">
        <Avatar size="lg" fallback="AL" name="Alice" />
      </Section>
      <Section title="Broken Image URL (Fallback to EU)">
        <Avatar src="https://broken-url.invalid/avatar.png" size="lg" fallback="EU" name="Example User" />
      </Section>
      <Section title="Empty Name (No Initials)">
        <Avatar size="lg" />
      </Section>
    </div>
}`,...(E=(B=y.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"Avatar variants — different content types and fallback behaviors.",...(F=(q=y.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var W,X,H,$,J;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-8)"
  }}>
      <Section title="With image — no status icon">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} />)}
        </div>
      </Section>
      <Section title="With image — online indicator">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} statusIcon="online" />)}
        </div>
      </Section>
      <Section title="Text (initials) — no status">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} fallback="OR" />)}
        </div>
      </Section>
      <Section title="Text (initials) — online indicator">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} fallback="OR" statusIcon="online" />)}
        </div>
      </Section>
      <Section title="Broken image URL (fallback to initials)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} src="https://broken-url.invalid/avatar.png" fallback="EU" name="Example User" />)}
        </div>
      </Section>
      <Section title="Empty name — no status">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} />)}
        </div>
      </Section>
      <Section title="Empty name — online indicator">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} statusIcon="online" />)}
        </div>
      </Section>
    </div>
}`,...(H=(X=b.parameters)==null?void 0:X.docs)==null?void 0:H.source},description:{story:"Avatar — all sizes with image, all status icon variants. Matches Figma node 17282-60230.",...(J=($=b.parameters)==null?void 0:$.docs)==null?void 0:J.description}}};var Z,K,Q,Y,aa;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Avatar Label Group",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="Small — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="sm" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Small — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="sm" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="Medium — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="md" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Medium — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="md" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="Large — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="lg" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Large — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="lg" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="XL — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="xl" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="XL — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="xl" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
    </div>
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Avatar label group — all sizes × all status icons. Matches Figma node 17282-60149.",...(aa=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:aa.description}}};var ea,ta,na,ia,ra;S.parameters={...S.parameters,docs:{...(ea=S.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: "Group Avatar Label Group",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const groupAvatars = avatarRegistry["Group Avatar"];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-6)"
    }}>
        <Section title="Small — Public">
          <GroupAvatarLabel src={groupAvatars[5].imageUrl} size="sm" name="Epic Game" supportingText="248 Members" groupType="public" />
        </Section>
        <Section title="Small — Private">
          <GroupAvatarLabel src={groupAvatars[1].imageUrl} size="sm" name="Bright Mind" supportingText="12 Members" groupType="private" />
        </Section>
        <Section title="Small — Protected">
          <GroupAvatarLabel src={groupAvatars[8].imageUrl} size="sm" name="Innovative Online Shopping" supportingText="56 Members" groupType="protected" />
        </Section>
        <Section title="Medium — Public">
          <GroupAvatarLabel src={groupAvatars[5].imageUrl} size="md" name="Epic Game" supportingText="248 Members" groupType="public" />
        </Section>
        <Section title="Medium — Private">
          <GroupAvatarLabel src={groupAvatars[1].imageUrl} size="md" name="Bright Mind" supportingText="12 Members" groupType="private" />
        </Section>
        <Section title="Medium — Protected">
          <GroupAvatarLabel src={groupAvatars[8].imageUrl} size="md" name="Innovative Online Shopping" supportingText="56 Members" groupType="protected" />
        </Section>
        <Section title="Large — Public">
          <GroupAvatarLabel src={groupAvatars[5].imageUrl} size="lg" name="Epic Game" supportingText="248 Members" groupType="public" />
        </Section>
        <Section title="Large — Private">
          <GroupAvatarLabel src={groupAvatars[1].imageUrl} size="lg" name="Bright Mind" supportingText="12 Members" groupType="private" />
        </Section>
        <Section title="Large — Protected">
          <GroupAvatarLabel src={groupAvatars[8].imageUrl} size="lg" name="Innovative Online Shopping" supportingText="56 Members" groupType="protected" />
        </Section>
        <Section title="XL — Public">
          <GroupAvatarLabel src={groupAvatars[5].imageUrl} size="xl" name="Epic Game" supportingText="248 Members" groupType="public" />
        </Section>
        <Section title="XL — Private">
          <GroupAvatarLabel src={groupAvatars[1].imageUrl} size="xl" name="Bright Mind" supportingText="12 Members" groupType="private" />
        </Section>
        <Section title="XL — Protected">
          <GroupAvatarLabel src={groupAvatars[8].imageUrl} size="xl" name="Innovative Online Shopping" supportingText="56 Members" groupType="protected" />
        </Section>
      </div>;
  }
}`,...(na=(ta=S.parameters)==null?void 0:ta.docs)==null?void 0:na.source},description:{story:"Group avatar label group — all sizes × group types (Public, Private, Protected).",...(ra=(ia=S.parameters)==null?void 0:ia.docs)==null?void 0:ra.description}}};var sa,la,oa,ca,da;_.parameters={..._.parameters,docs:{...(sa=_.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="HTML">
        <CodeCard language="HTML" code={\`<!-- Single Avatar with image -->
<div class="avatar avatar--lg">
  <div class="avatar__img-wrap">
    <img class="avatar__img" src="avatar.jpg" alt="User" />
  </div>
  <span class="avatar__status avatar__status--online"></span>
</div>

<!-- Avatar with initials fallback -->
<div class="avatar avatar--md">
  <div class="avatar__fallback-wrap">
    <span class="avatar__fallback">JD</span>
  </div>
</div>

<!-- Avatar Group (stacked) -->
<div class="avatar-group avatar-group--md">
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="a1.jpg" alt="" /></div>
  </div>
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="a2.jpg" alt="" /></div>
  </div>
  <div class="avatar-group__counter">+3</div>
  <button class="avatar-group__add" type="button">+</button>
</div>

<!-- Avatar Label Group -->
<div class="avatar-label-group avatar-label-group--md">
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="avatar.jpg" alt="" /></div>
  </div>
  <div class="avatar-label-group__text">
    <span class="avatar-label-group__name">Olivia Rhye</span>
    <span class="avatar-label-group__supporting">olivia@email.com</span>
  </div>
</div>\`} />
      </Section>
      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-max);
  overflow: visible;
}

.avatar--xs { width: 24px; height: 24px; }
.avatar--sm { width: 32px; height: 32px; }
.avatar--md { width: 40px; height: 40px; }
.avatar--lg { width: 48px; height: 48px; }
.avatar--xl { width: 56px; height: 56px; }
.avatar--2xl { width: 64px; height: 64px; }

.avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--cometchat-radius-max);
}

.avatar__fallback-wrap {
  width: 100%;
  height: 100%;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-300);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar__fallback {
  font-family: var(--cometchat-font-family);
  font-weight: 500;
  color: var(--cometchat-static-white);
  text-transform: uppercase;
}

.avatar__status {
  position: absolute;
  bottom: 0;
  inset-inline-end: 0;
  border-radius: var(--cometchat-radius-max);
  border: 1.5px solid var(--cometchat-static-white);
}

.avatar__status--online { background: var(--cometchat-success-color); }
.avatar__status--offline { background: var(--cometchat-neutral-color-400); }

.avatar-group {
  display: inline-flex;
  align-items: center;
}

.avatar-group .avatar {
  border: 2px solid var(--cometchat-static-white);
  margin-inline-start: -8px;
}

.avatar-label-group {
  display: inline-flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
}

.avatar-label-group__name {
  font-weight: 500;
  color: var(--cometchat-neutral-color-900);
}

.avatar-label-group__supporting {
  font-weight: 400;
  color: var(--cometchat-neutral-color-600);
}\`} />
      </Section>
    </div>
}`,...(oa=(la=_.parameters)==null?void 0:la.docs)==null?void 0:oa.source},description:{story:"HTML & CSS usage reference for the Avatar Group component.",...(da=(ca=_.parameters)==null?void 0:ca.docs)==null?void 0:da.description}}};var pa,ma,ua,va,ga;z.parameters={...z.parameters,docs:{...(pa=z.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ua=(ma=z.parameters)==null?void 0:ma.docs)==null?void 0:ua.source},description:{story:"Interactive playground — use the controls panel to configure the Avatar.",...(ga=(va=z.parameters)==null?void 0:va.docs)==null?void 0:ga.description}}};const Va=["OnlineIndicator","GroupIcons","AvatarVariants","Sizes","LabelGroup","GroupLabelGroup","Usage","Playground"];export{y as AvatarVariants,f as GroupIcons,S as GroupLabelGroup,j as LabelGroup,h as OnlineIndicator,z as Playground,b as Sizes,_ as Usage,Va as __namedExportsOrder,Na as default};
