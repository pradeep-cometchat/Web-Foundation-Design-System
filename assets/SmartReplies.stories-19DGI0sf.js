import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as m}from"./SmartReplies-Doh9WQW-.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ee={title:"Base Components/Smart Replies",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'AI-suggested quick reply popup that appears above the message composer.\nShows a list of contextual reply suggestions the user can tap to send.\n\n**Structure (from Figma node 4088:736840):**\n- Container: 360px, `--radius-2xl` (16px), `--shadow-lg`, border `--color-neutral-100`, padding 12px\n- Header: "Suggest a reply" (16px, medium, `--color-neutral-900`) + close icon (20px)\n- Gap between header and content: 16px\n- Content gap: 8px between items\n\n**States:**\n- Loading: 3 skeleton bars (67px height, radius 12px, gradient shimmer animation)\n- Loaded: Reply buttons (border `--color-neutral-200`, radius 12px, 14px text, padding 12px 16px)\n\n**Interactions:**\n- Hover on reply: `--color-neutral-50` bg, `--color-neutral-300` border\n- Click reply: fires `onSelect` with the reply text\n- Close button dismisses the popup'}}},argTypes:{open:{control:"boolean",description:"Whether the component is visible."},loading:{control:"boolean",description:"Whether replies are loading."},replies:{control:!1,description:"Array of suggested reply texts."},onSelect:{control:!1},onClose:{control:!1}}},a={args:{open:!0,loading:!0}},t={args:{open:!0,loading:!1,replies:["Yes, it's still available! Would you like to see more photos?","Sure, I can ship it. Where are you located?","Thanks for your interest! Let me check the shipping options."]}},o={args:{open:!0,loading:!1,replies:["Sounds good, let's do it!","I'll think about it and get back to you."]}},n={args:{open:!0,loading:!1,replies:["Thanks! I appreciate it."]}},i={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-6)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",textAlign:"center"},children:"Loading"}),e.jsx(m,{open:!0,loading:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",textAlign:"center"},children:"Loaded"}),e.jsx(m,{open:!0,replies:["Yes, it's still available!","Sure, I can ship it.","Thanks for your interest!"]})]})]})};function p({title:r,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:r}),s]})}const g=({language:r,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]}),c=({title:r,items:s})=>e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:r}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:s.map(u=>e.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-primary)",background:"var(--color-bg-02)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-border-default)",display:"inline-block",width:"fit-content"},children:[".",u]},u))})]}),l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(p,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Smart Replies — loaded state -->
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
</div>`})}),e.jsx(p,{title:"CSS (Foundation Variables)",children:e.jsx(g,{language:"CSS",code:`.smart-replies {
  width: 360px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.smart-replies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.smart-replies__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-h4);
  color: var(--color-text-primary);
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
  color: var(--color-text-primary);
  border-radius: var(--radius-xs);
}

.smart-replies__close:hover {
  background: var(--color-bg-02);
}

.smart-replies__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.smart-replies__reply {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  background: var(--color-bg-01);
  font-family: var(--font-family-body);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  text-align: left;
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.smart-replies__reply:hover {
  background: var(--color-bg-02);
  border-color: var(--color-border-dark);
}

.smart-replies__skeleton {
  height: 67px;
  border-radius: var(--radius-lg);
  background: linear-gradient(90deg, var(--color-bg-04) 0%, var(--color-bg-03) 100%);
  animation: smart-replies-shimmer 1.5s ease-in-out infinite;
}`})}),e.jsx(p,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(c,{title:"Root",items:["smart-replies"]}),e.jsx(c,{title:"Header",items:["smart-replies__header","smart-replies__title","smart-replies__close"]}),e.jsx(c,{title:"Content",items:["smart-replies__content","smart-replies__reply","smart-replies__skeleton"]})]})})]})},d={args:{open:!0,loading:!1,replies:["Yes, it's still available! Would you like to see more photos?","Sure, I can ship it. Where are you located?","Thanks for your interest! Let me check the shipping options."]},parameters:{docs:{disable:!0}}};var v,h,f,b,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: true
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"Loading state — skeleton shimmer bars. Matches Figma node 4088:736840.",...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var x,_,S,k,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Yes, it's still available! Would you like to see more photos?", "Sure, I can ship it. Where are you located?", "Thanks for your interest! Let me check the shipping options."]
  }
}`,...(S=(_=t.parameters)==null?void 0:_.docs)==null?void 0:S.source},description:{story:"Loaded state — reply suggestions displayed.",...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};var j,C,T,z,L;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Sounds good, let's do it!", "I'll think about it and get back to you."]
  }
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Two replies — shorter list.",...(L=(z=o.parameters)==null?void 0:z.docs)==null?void 0:L.description}}};var W,R,I,A,B;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: false,
    replies: ["Thanks! I appreciate it."]
  }
}`,...(I=(R=n.parameters)==null?void 0:R.docs)==null?void 0:I.source},description:{story:"Single reply suggestion.",...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var H,M,Y,F,G;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(M=i.parameters)==null?void 0:M.docs)==null?void 0:Y.source},description:{story:"All states side by side.",...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var D,E,P,U,V;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
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

      <Section title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.smart-replies {
  width: 360px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.smart-replies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.smart-replies__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-h4);
  color: var(--color-text-primary);
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
  color: var(--color-text-primary);
  border-radius: var(--radius-xs);
}

.smart-replies__close:hover {
  background: var(--color-bg-02);
}

.smart-replies__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.smart-replies__reply {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  background: var(--color-bg-01);
  font-family: var(--font-family-body);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  text-align: left;
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.smart-replies__reply:hover {
  background: var(--color-bg-02);
  border-color: var(--color-border-dark);
}

.smart-replies__skeleton {
  height: 67px;
  border-radius: var(--radius-lg);
  background: linear-gradient(90deg, var(--color-bg-04) 0%, var(--color-bg-03) 100%);
  animation: smart-replies-shimmer 1.5s ease-in-out infinite;
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <ClassGroup title="Root" items={["smart-replies"]} />
          <ClassGroup title="Header" items={["smart-replies__header", "smart-replies__title", "smart-replies__close"]} />
          <ClassGroup title="Content" items={["smart-replies__content", "smart-replies__reply", "smart-replies__skeleton"]} />
        </div>
      </Section>
    </div>
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var q,O,X,J,K;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(O=d.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"Interactive playground.",...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const re=["Loading","Loaded","TwoReplies","SingleReply","AllStates","Usage","Playground"];export{i as AllStates,t as Loaded,a as Loading,d as Playground,n as SingleReply,o as TwoReplies,l as Usage,re as __namedExportsOrder,ee as default};
