import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as Q}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s({message:m,open:c=!0,duration:u=3e3,onClose:p}){return Q.useEffect(()=>{if(!c||u===0)return;const K=setTimeout(()=>{p==null||p()},u);return()=>clearTimeout(K)},[c,u,p]),c?e.jsx("div",{className:"toast",role:"status","aria-live":"polite",children:e.jsx("div",{className:"toast__content",children:e.jsx("span",{className:"toast__message",children:m})})}):null}try{s.displayName="Toast",s.__docgenInfo={description:"",displayName:"Toast",props:{message:{defaultValue:null,description:"The message to display",name:"message",required:!0,type:{name:"string"}},open:{defaultValue:{value:"true"},description:"Whether the toast is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},duration:{defaultValue:{value:"3000"},description:"Auto-dismiss duration in ms. Set to 0 to disable. Default: 3000",name:"duration",required:!1,type:{name:"number | undefined"}},onClose:{defaultValue:null,description:"Callback when the toast is dismissed",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const $={title:"Base Components/Toast",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A transient notification pill that appears briefly to confirm an action.
Dark background with white text, auto-dismisses after a set duration.

**Structure (from Figma node 4090:837860):**
- Outer: radius 8px, drop-shadow (shadow-lg)
- Content: bg \`#0a0d12\` (static-black), radius-xs (4px), padding 8px
- Text: Caption 1/Regular — 12px, weight 400, line-height 18px, white, centered`}}},argTypes:{message:{control:"text",description:"The message to display."},open:{control:"boolean",description:"Whether the toast is visible."},duration:{control:{type:"number",min:0,step:500},description:"Auto-dismiss duration in ms. 0 to disable."},onClose:{control:!1}}},a={args:{message:"Message Copied",open:!0,duration:0}},t={args:{message:"Message Sent",open:!0,duration:0}},r={args:{message:"Message Deleted",open:!0,duration:0}},n={args:{message:"Link Copied",open:!0,duration:0}},o={args:{message:"Your message has been forwarded successfully",open:!0,duration:0}},i={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:40},children:[e.jsx(s,{message:"Message Copied",open:!0,duration:0}),e.jsx(s,{message:"Message Sent",open:!0,duration:0}),e.jsx(s,{message:"Message Deleted",open:!0,duration:0}),e.jsx(s,{message:"Link Copied",open:!0,duration:0}),e.jsx(s,{message:"Reaction Added",open:!0,duration:0})]})},d={args:{message:"Message Copied",open:!0,duration:0},parameters:{docs:{disable:!0}}};var g,l,f,y,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: "Message Copied",
    open: true,
    duration: 0
  }
}`,...(f=(l=a.parameters)==null?void 0:l.docs)==null?void 0:f.source},description:{story:"Default state — exact match to Figma node 4090:837860.",...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};var h,M,b,S,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    message: "Message Sent",
    open: true,
    duration: 0
  }
}`,...(b=(M=t.parameters)==null?void 0:M.docs)==null?void 0:b.source},description:{story:"Message sent confirmation.",...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var T,_,j,v,k;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "Message Deleted",
    open: true,
    duration: 0
  }
}`,...(j=(_=r.parameters)==null?void 0:_.docs)==null?void 0:j.source},description:{story:"Message deleted confirmation.",...(k=(v=r.parameters)==null?void 0:v.docs)==null?void 0:k.description}}};var w,D,L,A,N;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: "Link Copied",
    open: true,
    duration: 0
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:"Link copied confirmation.",...(N=(A=n.parameters)==null?void 0:A.docs)==null?void 0:N.description}}};var q,E,I,R,V;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    message: "Your message has been forwarded successfully",
    open: true,
    duration: 0
  }
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"Longer message text.",...(V=(R=o.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var W,F,O,P,Y;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  }}>
      <Toast message="Message Copied" open={true} duration={0} />
      <Toast message="Message Sent" open={true} duration={0} />
      <Toast message="Message Deleted" open={true} duration={0} />
      <Toast message="Link Copied" open={true} duration={0} />
      <Toast message="Reaction Added" open={true} duration={0} />
    </div>
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"All variants side by side.",...(Y=(P=i.parameters)==null?void 0:P.docs)==null?void 0:Y.description}}};var B,z,G,H,J;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    message: "Message Copied",
    open: true,
    duration: 0
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:"Interactive playground — use the controls panel to configure.",...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};const ee=["Default","MessageSent","MessageDeleted","LinkCopied","LongMessage","States","Playground"];export{a as Default,n as LinkCopied,o as LongMessage,r as MessageDeleted,t as MessageSent,d as Playground,i as States,ee as __namedExportsOrder,$ as default};
