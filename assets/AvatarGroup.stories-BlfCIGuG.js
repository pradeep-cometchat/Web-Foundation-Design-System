import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as ie}from"./index-ClcD9ViR.js";import{a as b}from"./avatars-9G6xvYo0.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l=({src:a,alt:n="",size:t="md",fallback:s,showIcon:d=!1,statusIcon:c="none",online:v=!0,className:p,name:u})=>{const[m,j]=ie.useState(!1),ae=["avatar",`avatar--${t}`,p].filter(Boolean).join(" "),ne=a&&!m;return e.jsxs("div",{className:ae,children:[ne?e.jsx("div",{className:"avatar__img-wrap",children:e.jsx("img",{src:a,alt:n,className:"avatar__img",onError:()=>j(!0)})}):d?e.jsx("div",{className:"avatar__fallback-wrap",children:e.jsx("span",{className:"avatar__icon",children:e.jsx("svg",{width:"50%",height:"50%",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z",fill:"currentColor"})})})}):s||u?e.jsx("div",{className:"avatar__fallback-wrap",children:e.jsx("span",{className:"avatar__fallback",children:s||ce(u)})}):e.jsx("div",{className:"avatar__fallback-wrap"}),(c==="online"||c==="offline")&&e.jsx("span",{className:`avatar__status avatar__status--${v?"online":"offline"}`}),c==="verified"&&e.jsx("span",{className:"avatar__verified",children:e.jsx(le,{size:t})}),c==="company"&&e.jsx("span",{className:"avatar__company",children:e.jsx(oe,{size:t})})]})},S=({avatars:a,size:n="md",max:t=5,showAdd:s=!1,onAdd:d,className:c})=>{const v=a.slice(0,t),p=a.length-t,u={xs:"xs",sm:"sm",md:"md"};return e.jsxs("div",{className:`avatar-group avatar-group--${n} ${c??""}`,children:[v.map((m,j)=>e.jsx(l,{src:m.src,alt:m.alt,fallback:m.fallback,size:u[n]},j)),p>0&&e.jsxs("span",{className:"avatar-group__counter",children:["+",p]}),s&&e.jsx("button",{type:"button",className:"avatar-group__add",onClick:d,"aria-label":"Add user",children:e.jsx("svg",{width:"40%",height:"40%",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})},o=({src:a,alt:n,fallback:t,size:s="md",name:d,supportingText:c,statusIcon:v="none",online:p=!0,className:u})=>{const m={sm:"sm",md:"md",lg:"lg",xl:"xl"};return e.jsxs("div",{className:`avatar-label-group avatar-label-group--${s} ${u??""}`,children:[e.jsx(l,{src:a,alt:n,fallback:t,size:m[s],statusIcon:v,online:p}),e.jsxs("div",{className:"avatar-label-group__text",children:[e.jsx("span",{className:"avatar-label-group__name",children:d}),c&&e.jsx("span",{className:"avatar-label-group__supporting",children:c})]})]})},te={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},le=({size:a})=>{const n=te[a];return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[e.jsx("path",{d:"M12.3553 2.83363C12.5073 3.20115 12.7989 3.49327 13.1662 3.64579L14.4541 4.17925C14.8217 4.33149 15.1137 4.6235 15.2659 4.99104C15.4182 5.35858 15.4182 5.77155 15.2659 6.13909L14.7328 7.42606C14.5805 7.79376 14.5803 8.20715 14.7333 8.57467L15.2655 9.86125C15.3409 10.0433 15.3798 10.2384 15.3798 10.4355C15.3799 10.6325 15.3411 10.8277 15.2657 11.0097C15.1902 11.1918 15.0797 11.3572 14.9403 11.4966C14.801 11.6359 14.6355 11.7464 14.4534 11.8217L13.1665 12.3548C12.7989 12.5068 12.5068 12.7985 12.3543 13.1657L11.8208 14.4536C11.6686 14.8212 11.3766 15.1132 11.009 15.2654C10.6415 15.4177 10.2285 15.4177 9.86099 15.2654L8.57403 14.7323C8.20648 14.5805 7.79366 14.5808 7.42634 14.7332L6.13845 15.2659C5.77111 15.4178 5.3585 15.4177 4.99126 15.2655C4.62402 15.1134 4.33217 14.8218 4.17982 14.4546L3.6462 13.1663C3.49424 12.7988 3.20256 12.5067 2.83527 12.3542L1.54739 11.8207C1.18 11.6686 0.88808 11.3767 0.735782 11.0094C0.583485 10.6421 0.583278 10.2293 0.735208 9.86181L1.26829 8.57484C1.42015 8.20729 1.41984 7.79447 1.26742 7.42715L0.735111 6.13834C0.659639 5.9563 0.620778 5.76117 0.620746 5.56411C0.620714 5.36704 0.659514 5.1719 0.734926 4.98984C0.81034 4.80778 0.920888 4.64236 1.06026 4.50304C1.19962 4.36371 1.36508 4.25322 1.54716 4.17786L2.83413 3.64479C3.20132 3.49296 3.49327 3.20164 3.6459 2.83478L4.17936 1.54689C4.3316 1.17935 4.62361 0.887337 4.99115 0.735096C5.3587 0.582855 5.77166 0.582855 6.1392 0.735096L7.42617 1.26817C7.79372 1.42004 8.20654 1.41973 8.57386 1.26731L9.86229 0.735923C10.2298 0.583767 10.6427 0.583799 11.0101 0.736009C11.3776 0.88822 11.6696 1.18015 11.8218 1.54759L12.3555 2.83587L12.3553 2.83363Z",fill:"#528BFF"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1333 5.90291C11.2401 5.73503 11.276 5.53157 11.2328 5.33728C11.1897 5.14299 11.0711 4.9738 10.9033 4.86691C10.7354 4.76003 10.5319 4.72422 10.3376 4.76735C10.1433 4.81048 9.97414 4.92903 9.86726 5.09691L6.93026 9.71191L5.58626 8.03191C5.46201 7.8765 5.2811 7.7768 5.08335 7.75477C4.88559 7.73273 4.68718 7.79016 4.53176 7.91441C4.37634 8.03867 4.27665 8.21957 4.25462 8.41733C4.23258 8.61508 4.29001 8.8135 4.41426 8.96891L6.41426 11.4689C6.4888 11.5622 6.58453 11.6363 6.6935 11.6852C6.80246 11.734 6.92152 11.7561 7.04075 11.7497C7.15998 11.7432 7.27595 11.7084 7.37901 11.6481C7.48207 11.5877 7.56923 11.5037 7.63326 11.4029L11.1333 5.90291Z",fill:"white"})]})},se={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},re=b["Avatar company logo"],oe=({size:a})=>{var s;const n=se[a],t=(s=re[0])==null?void 0:s.imageUrl;return e.jsx("div",{style:{width:n,height:n,borderRadius:"50%",overflow:"hidden",border:"1.5px solid white",boxSizing:"content-box",flexShrink:0},"aria-hidden":!0,children:e.jsx("img",{src:t,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})};function ce(a){if(!a)return"";const n=a.trim().split(/\s+/);return n.length>=2?(n[0][0]+n[n.length-1][0]).toUpperCase():a.slice(0,2).toUpperCase()}try{l.displayName="Avatar",l.__docgenInfo={description:"Avatar — a circular user image with optional status indicator.",displayName:"Avatar",props:{src:{defaultValue:null,description:"Image source URL.",name:"src",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:{value:""},description:"Alt text.",name:"alt",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"2xl"'}]}},fallback:{defaultValue:null,description:"Fallback text (initials) when no image.",name:"fallback",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"User name — used to generate initials when fallback is not provided.",name:"name",required:!1,type:{name:"string | undefined"}},showIcon:{defaultValue:{value:"false"},description:"Show icon placeholder instead of image.",name:"showIcon",required:!1,type:{name:"boolean | undefined"}},statusIcon:{defaultValue:{value:"none"},description:"Status icon overlay.",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"online"'},{value:'"offline"'},{value:'"company"'},{value:'"verified"'}]}},online:{defaultValue:{value:"true"},description:"Online status (for online indicator).",name:"online",required:!1,type:{name:"boolean | undefined"}},companyType:{defaultValue:null,description:"Company icon type.",name:"companyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"company"'},{value:'"private"'},{value:'"protected"'}]}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}try{S.displayName="AvatarGroup",S.__docgenInfo={description:"AvatarGroup — a stack of overlapping avatars with optional counter and add button.",displayName:"AvatarGroup",props:{avatars:{defaultValue:null,description:"Avatar items.",name:"avatars",required:!0,type:{name:"{ src?: string | undefined; alt?: string | undefined; fallback?: string | undefined; }[]"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"xs"'}]}},max:{defaultValue:{value:"5"},description:'Max avatars to show before "+N" counter. Default: 5.',name:"max",required:!1,type:{name:"number | undefined"}},showAdd:{defaultValue:{value:"false"},description:"Show add button at the end.",name:"showAdd",required:!1,type:{name:"boolean | undefined"}},onAdd:{defaultValue:null,description:"Add button click handler.",name:"onAdd",required:!1,type:{name:"(() => void) | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}try{o.displayName="AvatarLabelGroup",o.__docgenInfo={description:"AvatarLabelGroup — avatar with name and supporting text beside it.",displayName:"AvatarLabelGroup",props:{src:{defaultValue:null,description:"Avatar image source.",name:"src",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:{value:""},description:"Avatar alt text.",name:"alt",required:!1,type:{name:"string | undefined"}},fallback:{defaultValue:null,description:"Avatar fallback initials.",name:"fallback",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},name:{defaultValue:null,description:"Primary name/title.",name:"name",required:!0,type:{name:"string"}},supportingText:{defaultValue:null,description:"Supporting text (email, role, etc).",name:"supportingText",required:!1,type:{name:"string | undefined"}},statusIcon:{defaultValue:{value:"none"},description:"Status icon.",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"online"'},{value:'"offline"'},{value:'"company"'},{value:'"verified"'}]}},online:{defaultValue:{value:"true"},description:"Online status.",name:"online",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const r=b["Male Avatar"],ye={title:"Base Components/Avatar Group",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Avatar system — individual avatars, grouped stacks, and labeled profiles.

**Components:** Avatar, Avatar Group, Avatar Label Group.

**Sizes:** xs (24), sm (32), md (40), lg (48), xl (56), 2xl (64).

**Status icons:** Online indicator, Offline, Verified tick, Company icon.

**Features:** Fallback initials, icon placeholder, add button, overflow counter.

Uses foundation tokens and Avatars from the foundation tab.`}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],table:{category:"Appearance"}},statusIcon:{control:"select",options:["none","online","offline","verified"],table:{category:"Appearance"}}}},x={name:"Online Indicator",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:e.jsx(i,{title:"Online (all sizes)",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-1-5)"},children:[e.jsx(me,{size:a,online:!0}),e.jsx("span",{style:{fontSize:"var(--font-size-0)",color:"var(--color-neutral-600)",fontFamily:"var(--font-family-body)"},children:a})]},a))})})})},g={name:"Group Icons",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(i,{title:"Private (all sizes)",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-1-5)"},children:[e.jsx(A,{size:a,type:"private"}),e.jsx("span",{style:{fontSize:"var(--font-size-0)",color:"var(--color-neutral-600)",fontFamily:"var(--font-family-body)"},children:a})]},a))})}),e.jsx(i,{title:"Protected (all sizes)",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-1-5)"},children:[e.jsx(A,{size:a,type:"protected"}),e.jsx("span",{style:{fontSize:"var(--font-size-0)",color:"var(--color-neutral-600)",fontFamily:"var(--font-family-body)"},children:a})]},a))})})]})},f={name:"Avatar Variants",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(i,{title:"With Image",children:e.jsx(l,{src:r[0].imageUrl,size:"lg"})}),e.jsx(i,{title:"Initials — Multi-Word Name (JD)",children:e.jsx(l,{size:"lg",fallback:"JD",name:"John Doe"})}),e.jsx(i,{title:"Initials — Single-Word Name (AL)",children:e.jsx(l,{size:"lg",fallback:"AL",name:"Alice"})}),e.jsx(i,{title:"Broken Image URL (Fallback to EU)",children:e.jsx(l,{src:"https://broken-url.invalid/avatar.png",size:"lg",fallback:"EU",name:"Example User"})}),e.jsx(i,{title:"Empty Name (No Initials)",children:e.jsx(l,{size:"lg"})})]})},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[e.jsx(i,{title:"With image — no status icon",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsx(l,{src:r[0].imageUrl,size:a},a))})}),e.jsx(i,{title:"With image — online indicator",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsx(l,{src:r[0].imageUrl,size:a,statusIcon:"online"},a))})}),e.jsx(i,{title:"Text (initials) — no status",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsx(l,{size:a,fallback:"OR"},a))})}),e.jsx(i,{title:"Text (initials) — online indicator",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsx(l,{size:a,fallback:"OR",statusIcon:"online"},a))})}),e.jsx(i,{title:"Broken image URL (fallback to initials)",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsx(l,{size:a,src:"https://broken-url.invalid/avatar.png",fallback:"EU",name:"Example User"},a))})}),e.jsx(i,{title:"Empty name — no status",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsx(l,{size:a},a))})}),e.jsx(i,{title:"Empty name — online indicator",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(a=>e.jsx(l,{size:a,statusIcon:"online"},a))})})]})},h={name:"Avatar Label Group",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"var(--space-6)"},children:[e.jsx(i,{title:"Small — no status",children:e.jsx(o,{src:r[0].imageUrl,size:"sm",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),e.jsx(i,{title:"Small — online",children:e.jsx(o,{src:r[0].imageUrl,size:"sm",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),e.jsx(i,{title:"Medium — no status",children:e.jsx(o,{src:r[0].imageUrl,size:"md",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),e.jsx(i,{title:"Medium — online",children:e.jsx(o,{src:r[0].imageUrl,size:"md",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),e.jsx(i,{title:"Large — no status",children:e.jsx(o,{src:r[0].imageUrl,size:"lg",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),e.jsx(i,{title:"Large — online",children:e.jsx(o,{src:r[0].imageUrl,size:"lg",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})}),e.jsx(i,{title:"XL — no status",children:e.jsx(o,{src:r[0].imageUrl,size:"xl",name:"Olivia Rhye",supportingText:"olivia@untitledui.com"})}),e.jsx(i,{title:"XL — online",children:e.jsx(o,{src:r[0].imageUrl,size:"xl",name:"Olivia Rhye",supportingText:"olivia@untitledui.com",statusIcon:"online"})})]})};function i({title:a,children:n}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:a}),n]})}const de={xs:6,sm:8,md:10,lg:12,xl:14,"2xl":16};function me({size:a,online:n}){const t=de[a]??10;return e.jsx("div",{style:{width:t,height:t,borderRadius:"50%",background:n?"var(--color-success-500)":"var(--color-neutral-lm-300)",border:"1.5px solid var(--color-white)",boxSizing:"content-box"}})}const pe={xs:10,sm:12,md:14,lg:16,xl:18,"2xl":20},ue=b["Avatar company logo"];function A({size:a,type:n}){var d;const t=pe[a]??14;if(n==="private")return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8.5",cy:"8.5",r:"7.9",fill:"#079455",stroke:"white",strokeWidth:"1.17"}),e.jsx("path",{d:"M6.03 12.62c-.22 0-.4-.08-.55-.23a.75.75 0 0 1-.23-.55V7.77c0-.22.08-.4.23-.55a.75.75 0 0 1 .55-.24h.52V6.11c0-.54.19-1 .57-1.38.38-.38.84-.57 1.38-.57.54 0 1 .19 1.38.57.38.38.57.84.57 1.38v.87h.52c.22 0 .4.08.55.23.15.15.23.34.23.55v4.07c0 .22-.08.4-.23.55a.75.75 0 0 1-.55.23H6.03zM8.5 10.56c.21 0 .39-.07.54-.22.15-.15.22-.33.22-.54 0-.21-.07-.39-.22-.54a.73.73 0 0 0-.54-.22.73.73 0 0 0-.54.22.73.73 0 0 0-.22.54c0 .21.07.39.22.54.15.15.33.22.54.22zM7.2 6.98h2.6V6.11c0-.36-.13-.67-.38-.92a1.25 1.25 0 0 0-.92-.38c-.36 0-.67.13-.92.38-.25.25-.38.56-.38.92v.87z",fill:"white"})]});if(n==="protected")return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8.5",cy:"8.5",r:"7.9",fill:"#DC6803",stroke:"white",strokeWidth:"1.17"}),e.jsx("path",{d:"M8.5 12.56c-.05 0-.09 0-.13-.01a.6.6 0 0 1-.13-.03c-.91-.33-1.64-.9-2.18-1.73-.54-.83-.81-1.72-.81-2.68V6.16c0-.16.05-.31.14-.44a.7.7 0 0 1 .37-.29l2.47-.92a.8.8 0 0 1 .27-.05c.09 0 .18.02.27.05l2.47.92c.15.06.27.16.37.29.1.13.14.28.14.44v1.95c0 .96-.27 1.85-.81 2.68-.54.83-1.27 1.4-2.18 1.73a.6.6 0 0 1-.13.03c-.04.01-.09.01-.13.01z",fill:"white"})]});const s=(d=ue[0])==null?void 0:d.imageUrl;return e.jsx("div",{style:{width:t,height:t,borderRadius:"50%",overflow:"hidden",border:"1.5px solid white",boxSizing:"content-box",flexShrink:0},children:e.jsx("img",{src:s,alt:"Company",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})}const z={args:{size:"lg",statusIcon:"online"},parameters:{docs:{disable:!0}},render:a=>e.jsx(l,{src:r[0].imageUrl,alt:"Ben Scott",...a})};var I,k,L,_,w;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Online Indicator",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <Section title="Online (all sizes)">
        <div style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-1-5)"
        }}>
              <OnlineDot size={sz} online={true} />
              <span style={{
            fontSize: "var(--font-size-0)",
            color: "var(--color-neutral-600)",
            fontFamily: "var(--font-family-body)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(L=(k=x.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:"Avatar online indicator — all sizes.",...(w=(_=x.parameters)==null?void 0:_.docs)==null?void 0:w.description}}};var C,U,N,V,O;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Group Icons",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <Section title="Private (all sizes)">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-1-5)"
        }}>
              <CompanyBadge size={sz} type="private" />
              <span style={{
            fontSize: "var(--font-size-0)",
            color: "var(--color-neutral-600)",
            fontFamily: "var(--font-family-body)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
      <Section title="Protected (all sizes)">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <div key={sz} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-1-5)"
        }}>
              <CompanyBadge size={sz} type="protected" />
              <span style={{
            fontSize: "var(--font-size-0)",
            color: "var(--color-neutral-600)",
            fontFamily: "var(--font-family-body)"
          }}>{sz}</span>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(N=(U=g.parameters)==null?void 0:U.docs)==null?void 0:N.source},description:{story:"Avatar group icons — Private, Protected types at all sizes.",...(O=(V=g.parameters)==null?void 0:V.docs)==null?void 0:O.description}}};var R,D,G,T,q;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Avatar Variants",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
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
}`,...(G=(D=f.parameters)==null?void 0:D.docs)==null?void 0:G.source},description:{story:"Avatar variants — different content types and fallback behaviors.",...(q=(T=f.parameters)==null?void 0:T.docs)==null?void 0:q.description}}};var M,E,B,F,W;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-8)"
  }}>
      <Section title="With image — no status icon">
        <div style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} />)}
        </div>
      </Section>
      <Section title="With image — online indicator">
        <div style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} statusIcon="online" />)}
        </div>
      </Section>
      <Section title="Text (initials) — no status">
        <div style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} fallback="OR" />)}
        </div>
      </Section>
      <Section title="Text (initials) — online indicator">
        <div style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} fallback="OR" statusIcon="online" />)}
        </div>
      </Section>
      <Section title="Broken image URL (fallback to initials)">
        <div style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} src="https://broken-url.invalid/avatar.png" fallback="EU" name="Example User" />)}
        </div>
      </Section>
      <Section title="Empty name — no status">
        <div style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} />)}
        </div>
      </Section>
      <Section title="Empty name — online indicator">
        <div style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map(sz => <Avatar key={sz} size={sz} statusIcon="online" />)}
        </div>
      </Section>
    </div>
}`,...(B=(E=y.parameters)==null?void 0:E.docs)==null?void 0:B.source},description:{story:"Avatar — all sizes with image, all status icon variants. Matches Figma node 17282-60230.",...(W=(F=y.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var P,$,J,X,Z;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Avatar Label Group",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "var(--space-6)"
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
}`,...(J=($=h.parameters)==null?void 0:$.docs)==null?void 0:J.source},description:{story:"Avatar label group — all sizes × all status icons. Matches Figma node 17282-60149.",...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var H,K,Q,Y,ee;z.parameters={...z.parameters,docs:{...(H=z.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(K=z.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Interactive playground — use the controls panel to configure the Avatar.",...(ee=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:ee.description}}};const he=["OnlineIndicator","GroupIcons","AvatarVariants","Sizes","LabelGroup","Playground"];export{f as AvatarVariants,g as GroupIcons,h as LabelGroup,x as OnlineIndicator,z as Playground,y as Sizes,he as __namedExportsOrder,ye as default};
