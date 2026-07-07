import{j as t}from"./jsx-runtime-BYYWji4R.js";import{T as n}from"./TypingIndicator-BY5xC3BT.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const lt={title:"Base Components/Typing Indicator",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`An animated indicator showing when users are performing an activity
(typing, recording, or uploading). Supports single, group, and multiple contexts.

**Structure (from Figma node 17442:55645):**
- Container: flex row, gap 4px (spacing-xs), items-center
- Dots: 3 animated circles (4px), gap 2px, color \`#6852d6\` (text-highlight)
- Text: Caption 1/Regular — 12px, weight 400, line-height 18px, color \`#6852d6\`

**Variants:**
- Activity: Typing, Recording, Uploading
- Context: Single ("Typing"), Group ("John is typing"), Multiple ("2 people are typing")`}}},argTypes:{activity:{control:"select",options:["typing","recording","uploading"],description:"Activity type.",table:{category:"Content"}},context:{control:"select",options:["single","group","multiple"],description:"Context type.",table:{category:"Content"}},userName:{control:"text",description:"User name (for group context).",table:{category:"Content"}},count:{control:{type:"number",min:2,max:99},description:"Number of people (for multiple context).",table:{category:"Content"}}}},i={args:{activity:"typing",context:"single"}},e={args:{activity:"typing",context:"group",userName:"John"}},a={args:{activity:"typing",context:"multiple",count:2}},o={args:{activity:"recording",context:"single"}},c={args:{activity:"uploading",context:"single"}},r={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[t.jsx(l,{title:"Single",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-10)",flexWrap:"wrap"},children:[t.jsx(n,{activity:"typing",context:"single"}),t.jsx(n,{activity:"recording",context:"single"}),t.jsx(n,{activity:"uploading",context:"single"})]})}),t.jsx(l,{title:"Group (with name)",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-10)",flexWrap:"wrap"},children:[t.jsx(n,{activity:"typing",context:"group",userName:"John"}),t.jsx(n,{activity:"recording",context:"group",userName:"John"}),t.jsx(n,{activity:"uploading",context:"group",userName:"John"})]})}),t.jsx(l,{title:"Multiple",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-10)",flexWrap:"wrap"},children:[t.jsx(n,{activity:"typing",context:"multiple",count:2}),t.jsx(n,{activity:"recording",context:"multiple",count:2}),t.jsx(n,{activity:"uploading",context:"multiple",count:2})]})})]})},s={parameters:{layout:"padded"},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-8)",alignItems:"center"},children:[t.jsx("div",{style:m,children:"Typing"}),t.jsx(n,{activity:"typing",context:"single"}),t.jsx(n,{activity:"typing",context:"group",userName:"John"}),t.jsx(n,{activity:"typing",context:"multiple",count:2})]}),t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-8)",alignItems:"center"},children:[t.jsx("div",{style:m,children:"Recording"}),t.jsx(n,{activity:"recording",context:"single"}),t.jsx(n,{activity:"recording",context:"group",userName:"John"}),t.jsx(n,{activity:"recording",context:"multiple",count:2})]}),t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-8)",alignItems:"center"},children:[t.jsx("div",{style:m,children:"Uploading"}),t.jsx(n,{activity:"uploading",context:"single"}),t.jsx(n,{activity:"uploading",context:"group",userName:"John"}),t.jsx(n,{activity:"uploading",context:"multiple",count:2})]})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>t.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[t.jsx(l,{title:"HTML",children:t.jsx(u,{language:"HTML",code:`<!-- Single user typing -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">Typing</span>
</div>

<!-- Group context -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">John is typing</span>
</div>

<!-- Multiple users -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">2 people are typing</span>
</div>`})}),t.jsx(l,{title:"CSS (CometChat Tokens)",children:t.jsx(u,{language:"CSS",code:`.typing-indicator {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
}

.typing-indicator__dots {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing);
}

.typing-indicator__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--cometchat-extended-primary-color-500);
  animation: typing-dot-bounce 1.4s infinite ease-in-out both;
}

.typing-indicator__dot:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator__dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-dot-bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.typing-indicator__text {
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: var(--cometchat-extended-primary-color-500);
}`})})]})},d={args:{activity:"typing",context:"group",userName:"John",count:2},parameters:{docs:{disable:!0}}};function l({title:g,children:y}){return t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:g}),y]})}const m={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",width:80},u=({language:g,code:y})=>t.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:t.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:g})}),t.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:t.jsx("code",{children:y})})]});var x,v,h,f,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "single"
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:"Default — single user typing.",...(_=(f=i.parameters)==null?void 0:f.docs)==null?void 0:_.description}}};var S,j,T,b,I;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "group",
    userName: "John"
  }
}`,...(T=(j=e.parameters)==null?void 0:j.docs)==null?void 0:T.source},description:{story:"Group context — shows a user name.",...(I=(b=e.parameters)==null?void 0:b.docs)==null?void 0:I.description}}};var C,w,J,N,M;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "multiple",
    count: 2
  }
}`,...(J=(w=a.parameters)==null?void 0:w.docs)==null?void 0:J.source},description:{story:"Multiple people typing.",...(M=(N=a.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};var U,W,k,D,L;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    activity: "recording",
    context: "single"
  }
}`,...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.source},description:{story:"Recording activity.",...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var R,G,A,z,H;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    activity: "uploading",
    context: "single"
  }
}`,...(A=(G=c.parameters)==null?void 0:G.docs)==null?void 0:A.source},description:{story:"Uploading activity.",...(H=(z=c.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var B,F,V,E,P;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      <Section title="Single">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-10)",
        flexWrap: "wrap"
      }}>
          <TypingIndicator activity="typing" context="single" />
          <TypingIndicator activity="recording" context="single" />
          <TypingIndicator activity="uploading" context="single" />
        </div>
      </Section>
      <Section title="Group (with name)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-10)",
        flexWrap: "wrap"
      }}>
          <TypingIndicator activity="typing" context="group" userName="John" />
          <TypingIndicator activity="recording" context="group" userName="John" />
          <TypingIndicator activity="uploading" context="group" userName="John" />
        </div>
      </Section>
      <Section title="Multiple">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-10)",
        flexWrap: "wrap"
      }}>
          <TypingIndicator activity="typing" context="multiple" count={2} />
          <TypingIndicator activity="recording" context="multiple" count={2} />
          <TypingIndicator activity="uploading" context="multiple" count={2} />
        </div>
      </Section>
    </div>
}`,...(V=(F=r.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:"All variants — matching Figma component set layout.",...(P=(E=r.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};var O,X,q,K,Q;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)"
  }}>
      <div style={{
      display: "flex",
      gap: "var(--cometchat-spacing-8)",
      alignItems: "center"
    }}>
        <div style={stateLabelStyle}>Typing</div>
        <TypingIndicator activity="typing" context="single" />
        <TypingIndicator activity="typing" context="group" userName="John" />
        <TypingIndicator activity="typing" context="multiple" count={2} />
      </div>
      <div style={{
      display: "flex",
      gap: "var(--cometchat-spacing-8)",
      alignItems: "center"
    }}>
        <div style={stateLabelStyle}>Recording</div>
        <TypingIndicator activity="recording" context="single" />
        <TypingIndicator activity="recording" context="group" userName="John" />
        <TypingIndicator activity="recording" context="multiple" count={2} />
      </div>
      <div style={{
      display: "flex",
      gap: "var(--cometchat-spacing-8)",
      alignItems: "center"
    }}>
        <div style={stateLabelStyle}>Uploading</div>
        <TypingIndicator activity="uploading" context="single" />
        <TypingIndicator activity="uploading" context="group" userName="John" />
        <TypingIndicator activity="uploading" context="multiple" count={2} />
      </div>
    </div>
}`,...(q=(X=s.parameters)==null?void 0:X.docs)==null?void 0:q.source},description:{story:"All states side by side for comparison.",...(Q=(K=s.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Y,Z,$,tt,nt;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Single user typing -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">Typing</span>
</div>

<!-- Group context -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">John is typing</span>
</div>

<!-- Multiple users -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">2 people are typing</span>
</div>\`} />
      </Section>
      <Section title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.typing-indicator {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
}

.typing-indicator__dots {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing);
}

.typing-indicator__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--cometchat-extended-primary-color-500);
  animation: typing-dot-bounce 1.4s infinite ease-in-out both;
}

.typing-indicator__dot:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator__dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-dot-bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.typing-indicator__text {
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: var(--cometchat-extended-primary-color-500);
}\`} />
      </Section>
    </div>
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"HTML & CSS usage reference for the Typing Indicator component.",...(nt=(tt=p.parameters)==null?void 0:tt.docs)==null?void 0:nt.description}}};var it,et,at,ot,ct;d.parameters={...d.parameters,docs:{...(it=d.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "group",
    userName: "John",
    count: 2
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(at=(et=d.parameters)==null?void 0:et.docs)==null?void 0:at.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ct=(ot=d.parameters)==null?void 0:ot.docs)==null?void 0:ct.description}}};const gt=["Default","GroupTyping","MultipleTyping","Recording","Uploading","AllVariants","States","Usage","Playground"];export{r as AllVariants,i as Default,e as GroupTyping,a as MultipleTyping,d as Playground,o as Recording,s as States,c as Uploading,p as Usage,gt as __namedExportsOrder,lt as default};
