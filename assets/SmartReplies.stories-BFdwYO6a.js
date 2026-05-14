import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n({open:p=!0,loading:E=!1,replies:H=[],onSelect:l,onClose:P}){return p?e.jsxs("div",{className:"smart-replies",children:[e.jsxs("div",{className:"smart-replies__header",children:[e.jsx("span",{className:"smart-replies__title",children:"Suggest a reply"}),e.jsx("button",{type:"button",className:"smart-replies__close",onClick:P,"aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M5.5 14.5L10 10L14.5 5.5M14.5 14.5L10 10L5.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx("div",{className:"smart-replies__content",children:E?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"smart-replies__skeleton"}),e.jsx("div",{className:"smart-replies__skeleton"}),e.jsx("div",{className:"smart-replies__skeleton"})]}):H.map((d,G)=>e.jsx("button",{type:"button",className:"smart-replies__reply",onClick:()=>l==null?void 0:l(d),children:d},G))})]}):null}try{n.displayName="SmartReplies",n.__docgenInfo={description:"",displayName:"SmartReplies",props:{open:{defaultValue:{value:"true"},description:"Whether the component is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:{value:"false"},description:"Whether replies are loading",name:"loading",required:!1,type:{name:"boolean | undefined"}},replies:{defaultValue:{value:"[]"},description:"Array of suggested reply texts",name:"replies",required:!1,type:{name:"string[] | undefined"}},onSelect:{defaultValue:null,description:"Callback when a reply is selected",name:"onSelect",required:!1,type:{name:"((reply: string) => void) | undefined"}},onClose:{defaultValue:null,description:"Callback when close is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const K={title:"Base Components/Smart Replies",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'AI-suggested quick reply popup that appears above the message composer.\nShows a list of contextual reply suggestions the user can tap to send.\n\n**Structure (from Figma node 4088:736840):**\n- Container: 360px, `--radius-2xl` (16px), `--shadow-lg`, border `--color-neutral-100`, padding 12px\n- Header: "Suggest a reply" (16px, medium, `--color-neutral-900`) + close icon (20px)\n- Gap between header and content: 16px\n- Content gap: 8px between items\n\n**States:**\n- Loading: 3 skeleton bars (67px height, radius 12px, gradient shimmer animation)\n- Loaded: Reply buttons (border `--color-neutral-200`, radius 12px, 14px text, padding 12px 16px)\n\n**Interactions:**\n- Hover on reply: `--color-neutral-50` bg, `--color-neutral-300` border\n- Click reply: fires `onSelect` with the reply text\n- Close button dismisses the popup'}}},argTypes:{open:{control:"boolean",description:"Whether the component is visible."},loading:{control:"boolean",description:"Whether replies are loading."},replies:{control:!1,description:"Array of suggested reply texts."},onSelect:{control:!1},onClose:{control:!1}}},r={args:{open:!0,loading:!0}},s={args:{open:!0,loading:!1,replies:["Yes, it's still available! Would you like to see more photos?","Sure, I can ship it. Where are you located?","Thanks for your interest! Let me check the shipping options."]}},t={args:{open:!0,loading:!1,replies:["Sounds good, let's do it!","I'll think about it and get back to you."]}},a={args:{open:!0,loading:!1,replies:["Thanks! I appreciate it."]}},o={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-6)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",textAlign:"center"},children:"Loading"}),e.jsx(n,{open:!0,loading:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",textAlign:"center"},children:"Loaded"}),e.jsx(n,{open:!0,replies:["Yes, it's still available!","Sure, I can ship it.","Thanks for your interest!"]})]})]})},i={args:{open:!0,loading:!1,replies:["Yes, it's still available! Would you like to see more photos?","Sure, I can ship it. Where are you located?","Thanks for your interest! Let me check the shipping options."]},parameters:{docs:{disable:!0}}};var c,u,m,g,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: true
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Loading state — skeleton shimmer bars. Matches Figma node 4088:736840.",...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var f,y,v,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Yes, it's still available! Would you like to see more photos?", "Sure, I can ship it. Where are you located?", "Thanks for your interest! Let me check the shipping options."]
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"Loaded state — reply suggestions displayed.",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};var S,k,_,j,L;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Sounds good, let's do it!", "I'll think about it and get back to you."]
  }
}`,...(_=(k=t.parameters)==null?void 0:k.docs)==null?void 0:_.source},description:{story:"Two replies — shorter list.",...(L=(j=t.parameters)==null?void 0:j.docs)==null?void 0:L.description}}};var W,w,C,I,T;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Thanks! I appreciate it."]
  }
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Single reply suggestion.",...(T=(I=a.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var R,N,A,z,q;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-10)",
    display: "flex",
    gap: "var(--space-6)",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  }}>
      <div>
        <div style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)",
        textAlign: "center"
      }}>Loading</div>
        <SmartReplies open loading />
      </div>
      <div>
        <div style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)",
        textAlign: "center"
      }}>Loaded</div>
        <SmartReplies open replies={["Yes, it's still available!", "Sure, I can ship it.", "Thanks for your interest!"]} />
      </div>
    </div>
}`,...(A=(N=o.parameters)==null?void 0:N.docs)==null?void 0:A.source},description:{story:"All states side by side.",...(q=(z=o.parameters)==null?void 0:z.docs)==null?void 0:q.description}}};var B,Y,V,F,M;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Yes, it's still available! Would you like to see more photos?", "Sure, I can ship it. Where are you located?", "Thanks for your interest! Let me check the shipping options."]
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(V=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:V.source},description:{story:"Interactive playground.",...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};const Q=["Loading","Loaded","TwoReplies","SingleReply","AllStates","Playground"];export{o as AllStates,s as Loaded,r as Loading,i as Playground,a as SingleReply,t as TwoReplies,Q as __namedExportsOrder,K as default};
