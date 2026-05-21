import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as m}from"./SmartReplies-PPSBkGmI.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ee={title:"Base Components/Smart Replies",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'AI-suggested quick reply popup that appears above the message composer.\nShows a list of contextual reply suggestions the user can tap to send.\n\n**Structure (from Figma node 4088:736840):**\n- Container: 360px, `--radius-2xl` (16px), `--shadow-lg`, border `--color-neutral-100`, padding 12px\n- Header: "Suggest a reply" (16px, medium, `--color-neutral-900`) + close icon (20px)\n- Gap between header and content: 16px\n- Content gap: 8px between items\n\n**States:**\n- Loading: 3 skeleton bars (67px height, radius 12px, gradient shimmer animation)\n- Loaded: Reply buttons (border `--color-neutral-200`, radius 12px, 14px text, padding 12px 16px)\n\n**Interactions:**\n- Hover on reply: `--color-neutral-50` bg, `--color-neutral-300` border\n- Click reply: fires `onSelect` with the reply text\n- Close button dismisses the popup'}}},argTypes:{open:{control:"boolean",description:"Whether the component is visible."},loading:{control:"boolean",description:"Whether replies are loading."},replies:{control:!1,description:"Array of suggested reply texts."},onSelect:{control:!1},onClose:{control:!1}}},a={args:{open:!0,loading:!0}},o={args:{open:!0,loading:!1,replies:["Yes, it's still available! Would you like to see more photos?","Sure, I can ship it. Where are you located?","Thanks for your interest! Let me check the shipping options."]}},s={args:{open:!0,loading:!1,replies:["Sounds good, let's do it!","I'll think about it and get back to you."]}},n={args:{open:!0,loading:!1,replies:["Thanks! I appreciate it."]}},i={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",gap:"var(--cometchat-spacing-6)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",textAlign:"center"},children:"Loading"}),e.jsx(m,{open:!0,loading:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",textAlign:"center"},children:"Loaded"}),e.jsx(m,{open:!0,replies:["Yes, it's still available!","Sure, I can ship it.","Thanks for your interest!"]})]})]})};function p({title:t,children:r}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t}),r]})}const u=({language:t,code:r})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]}),d=({title:t,items:r})=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:r.map(g=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",g]},g))})]}),l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(p,{title:"HTML",children:e.jsx(u,{language:"HTML",code:`<!-- Smart Replies — loaded state -->
<div class="smart-replies">
  <div class="smart-replies__header">
    <span class="smart-replies__title">Suggest a reply</span>
    <button class="smart-replies__close" aria-label="Close">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  <div class="smart-replies__content">
    <button class="smart-replies__reply">Yes, it's still available!</button>
    <button class="smart-replies__reply">Sure, I can ship it. Where are you located?</button>
    <button class="smart-replies__reply">Thanks for your interest!</button>
  </div>
</div>

<!-- Smart Replies — loading state -->
<div class="smart-replies">
  <div class="smart-replies__header">
    <span class="smart-replies__title">Suggest a reply</span>
    <button class="smart-replies__close" aria-label="Close">
      <svg><!-- close icon --></svg>
    </button>
  </div>
  <div class="smart-replies__content">
    <div class="smart-replies__skeleton"></div>
    <div class="smart-replies__skeleton"></div>
    <div class="smart-replies__skeleton"></div>
  </div>
</div>`})}),e.jsx(p,{title:"CSS (CometChat Tokens)",children:e.jsx(u,{language:"CSS",code:`.smart-replies {
  width: 360px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  padding: var(--cometchat-spacing-3);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-4);
}

.smart-replies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.smart-replies__title {
  font-family: var(--cometchat-font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  color: var(--cometchat-text-color-primary);
}

.smart-replies__close {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--cometchat-text-color-primary);
  border-radius: var(--cometchat-radius-1);
}

.smart-replies__close:hover {
  background: var(--cometchat-background-color-02);
}

.smart-replies__content {
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-2);
}

.smart-replies__reply {
  width: 100%;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: 10px;
  background: var(--cometchat-background-color-01);
  font-family: var(--cometchat-font-family);
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
  text-align: left;
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.smart-replies__reply:hover {
  background: var(--cometchat-background-color-02);
  border-color: var(--cometchat-border-color-dark);
}

.smart-replies__skeleton {
  height: 67px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--cometchat-background-color-04) 0%, var(--cometchat-background-color-03) 100%);
  animation: smart-replies-shimmer 1.5s ease-in-out infinite;
}`})}),e.jsx(p,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(d,{title:"Root",items:["smart-replies"]}),e.jsx(d,{title:"Header",items:["smart-replies__header","smart-replies__title","smart-replies__close"]}),e.jsx(d,{title:"Content",items:["smart-replies__content","smart-replies__reply","smart-replies__skeleton"]})]})})]})},c={args:{open:!0,loading:!1,replies:["Yes, it's still available! Would you like to see more photos?","Sure, I can ship it. Where are you located?","Thanks for your interest! Let me check the shipping options."]},parameters:{docs:{disable:!0}}};var h,v,x,f,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: true
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:"Loading state — skeleton shimmer bars. Matches Figma node 4088:736840.",...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var y,_,k,S,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Yes, it's still available! Would you like to see more photos?", "Sure, I can ship it. Where are you located?", "Thanks for your interest! Let me check the shipping options."]
  }
}`,...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.source},description:{story:"Loaded state — reply suggestions displayed.",...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var j,w,T,L,W;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Sounds good, let's do it!", "I'll think about it and get back to you."]
  }
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"Two replies — shorter list.",...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};var R,I,z,A,B;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Thanks! I appreciate it."]
  }
}`,...(z=(I=n.parameters)==null?void 0:I.docs)==null?void 0:z.source},description:{story:"Single reply suggestion.",...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var H,M,Y,G,F;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-10)",
    display: "flex",
    gap: "var(--cometchat-spacing-6)",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  }}>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)",
        textAlign: "center"
      }}>Loading</div>
        <SmartReplies open loading />
      </div>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)",
        textAlign: "center"
      }}>Loaded</div>
        <SmartReplies open replies={["Yes, it's still available!", "Sure, I can ship it.", "Thanks for your interest!"]} />
      </div>
    </div>
}`,...(Y=(M=i.parameters)==null?void 0:M.docs)==null?void 0:Y.source},description:{story:"All states side by side.",...(F=(G=i.parameters)==null?void 0:G.docs)==null?void 0:F.description}}};var D,E,P,U,q;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Smart Replies — loaded state -->
<div class="smart-replies">
  <div class="smart-replies__header">
    <span class="smart-replies__title">Suggest a reply</span>
    <button class="smart-replies__close" aria-label="Close">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  <div class="smart-replies__content">
    <button class="smart-replies__reply">Yes, it's still available!</button>
    <button class="smart-replies__reply">Sure, I can ship it. Where are you located?</button>
    <button class="smart-replies__reply">Thanks for your interest!</button>
  </div>
</div>

<!-- Smart Replies — loading state -->
<div class="smart-replies">
  <div class="smart-replies__header">
    <span class="smart-replies__title">Suggest a reply</span>
    <button class="smart-replies__close" aria-label="Close">
      <svg><!-- close icon --></svg>
    </button>
  </div>
  <div class="smart-replies__content">
    <div class="smart-replies__skeleton"></div>
    <div class="smart-replies__skeleton"></div>
    <div class="smart-replies__skeleton"></div>
  </div>
</div>\`} />
      </Section>

      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.smart-replies {
  width: 360px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  padding: var(--cometchat-spacing-3);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-4);
}

.smart-replies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.smart-replies__title {
  font-family: var(--cometchat-font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  color: var(--cometchat-text-color-primary);
}

.smart-replies__close {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--cometchat-text-color-primary);
  border-radius: var(--cometchat-radius-1);
}

.smart-replies__close:hover {
  background: var(--cometchat-background-color-02);
}

.smart-replies__content {
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-2);
}

.smart-replies__reply {
  width: 100%;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: 10px;
  background: var(--cometchat-background-color-01);
  font-family: var(--cometchat-font-family);
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
  text-align: left;
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.smart-replies__reply:hover {
  background: var(--cometchat-background-color-02);
  border-color: var(--cometchat-border-color-dark);
}

.smart-replies__skeleton {
  height: 67px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--cometchat-background-color-04) 0%, var(--cometchat-background-color-03) 100%);
  animation: smart-replies-shimmer 1.5s ease-in-out infinite;
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <ClassGroup title="Root" items={["smart-replies"]} />
          <ClassGroup title="Header" items={["smart-replies__header", "smart-replies__title", "smart-replies__close"]} />
          <ClassGroup title="Content" items={["smart-replies__content", "smart-replies__reply", "smart-replies__skeleton"]} />
        </div>
      </Section>
    </div>
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(q=(U=l.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var O,X,J,K,N;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(J=(X=c.parameters)==null?void 0:X.docs)==null?void 0:J.source},description:{story:"Interactive playground.",...(N=(K=c.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};const te=["Loading","Loaded","TwoReplies","SingleReply","AllStates","Usage","Playground"];export{i as AllStates,o as Loaded,a as Loading,c as Playground,n as SingleReply,s as TwoReplies,l as Usage,te as __namedExportsOrder,ee as default};
