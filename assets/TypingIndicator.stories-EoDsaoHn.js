import{j as n}from"./jsx-runtime-BYYWji4R.js";import{T as t}from"./TypingIndicator-CW2KLN2j.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const gn={title:"Base Components/Typing Indicator",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`An animated indicator showing when users are performing an activity
(typing, recording, or uploading). Supports single, group, and multiple contexts.

**Structure (from Figma node 17442:55645):**
- Container: flex row, gap 4px (spacing-xs), items-center
- Dots: 3 animated circles (4px), gap 2px, color \`#6852d6\` (text-highlight)
- Text: Caption 1/Regular — 12px, weight 400, line-height 18px, color \`#6852d6\`

**Variants:**
- Activity: Typing, Recording, Uploading
- Context: Single ("Typing"), Group ("John is typing"), Multiple ("2 people are typing")`}}},argTypes:{activity:{control:"select",options:["typing","recording","uploading"],description:"Activity type.",table:{category:"Content"}},context:{control:"select",options:["single","group","multiple"],description:"Context type.",table:{category:"Content"}},userName:{control:"text",description:"User name (for group context).",table:{category:"Content"}},count:{control:{type:"number",min:2,max:99},description:"Number of people (for multiple context).",table:{category:"Content"}}}},i={args:{activity:"typing",context:"single"}},e={args:{activity:"typing",context:"group",userName:"John"}},a={args:{activity:"typing",context:"multiple",count:2}},o={args:{activity:"recording",context:"single"}},r={args:{activity:"uploading",context:"single"}},s={parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[n.jsx(l,{title:"Single",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[n.jsx(t,{activity:"typing",context:"single"}),n.jsx(t,{activity:"recording",context:"single"}),n.jsx(t,{activity:"uploading",context:"single"})]})}),n.jsx(l,{title:"Group (with name)",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[n.jsx(t,{activity:"typing",context:"group",userName:"John"}),n.jsx(t,{activity:"recording",context:"group",userName:"John"}),n.jsx(t,{activity:"uploading",context:"group",userName:"John"})]})}),n.jsx(l,{title:"Multiple",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[n.jsx(t,{activity:"typing",context:"multiple",count:2}),n.jsx(t,{activity:"recording",context:"multiple",count:2}),n.jsx(t,{activity:"uploading",context:"multiple",count:2})]})})]})},c={parameters:{layout:"padded"},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[n.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[n.jsx("div",{style:u,children:"Typing"}),n.jsx(t,{activity:"typing",context:"single"}),n.jsx(t,{activity:"typing",context:"group",userName:"John"}),n.jsx(t,{activity:"typing",context:"multiple",count:2})]}),n.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[n.jsx("div",{style:u,children:"Recording"}),n.jsx(t,{activity:"recording",context:"single"}),n.jsx(t,{activity:"recording",context:"group",userName:"John"}),n.jsx(t,{activity:"recording",context:"multiple",count:2})]}),n.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[n.jsx("div",{style:u,children:"Uploading"}),n.jsx(t,{activity:"uploading",context:"single"}),n.jsx(t,{activity:"uploading",context:"group",userName:"John"}),n.jsx(t,{activity:"uploading",context:"multiple",count:2})]})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>n.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[n.jsx(l,{title:"HTML",children:n.jsx(v,{language:"HTML",code:`<!-- Single user typing -->
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
</div>`})}),n.jsx(l,{title:"CSS (Foundation Variables)",children:n.jsx(v,{language:"CSS",code:`.typing-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.typing-indicator__dots {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
}

.typing-indicator__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-ep-500);
  animation: typing-dot-bounce 1.4s infinite ease-in-out both;
}

.typing-indicator__dot:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator__dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-dot-bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.typing-indicator__text {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-ep-500);
}`})})]})},d={args:{activity:"typing",context:"group",userName:"John",count:2},parameters:{docs:{disable:!0}}};function l({title:g,children:y}){return n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:g}),y]})}const u={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",width:80},v=({language:g,code:y})=>n.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:n.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:g})}),n.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:n.jsx("code",{children:y})})]});var x,m,h,f,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "single"
  }
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:"Default — single user typing.",...(_=(f=i.parameters)==null?void 0:f.docs)==null?void 0:_.description}}};var S,j,b,T,I;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "group",
    userName: "John"
  }
}`,...(b=(j=e.parameters)==null?void 0:j.docs)==null?void 0:b.source},description:{story:"Group context — shows a user name.",...(I=(T=e.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};var w,C,J,N,M;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "multiple",
    count: 2
  }
}`,...(J=(C=a.parameters)==null?void 0:C.docs)==null?void 0:J.source},description:{story:"Multiple people typing.",...(M=(N=a.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};var z,U,W,D,L;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    activity: "recording",
    context: "single"
  }
}`,...(W=(U=o.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"Recording activity.",...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var R,G,A,k,H;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    activity: "uploading",
    context: "single"
  }
}`,...(A=(G=r.parameters)==null?void 0:G.docs)==null?void 0:A.source},description:{story:"Uploading activity.",...(H=(k=r.parameters)==null?void 0:k.docs)==null?void 0:H.description}}};var F,V,B,E,P;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      <Section title="Single">
        <div style={{
        display: "flex",
        gap: "var(--space-10)",
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
        gap: "var(--space-10)",
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
        gap: "var(--space-10)",
        flexWrap: "wrap"
      }}>
          <TypingIndicator activity="typing" context="multiple" count={2} />
          <TypingIndicator activity="recording" context="multiple" count={2} />
          <TypingIndicator activity="uploading" context="multiple" count={2} />
        </div>
      </Section>
    </div>
}`,...(B=(V=s.parameters)==null?void 0:V.docs)==null?void 0:B.source},description:{story:"All variants — matching Figma component set layout.",...(P=(E=s.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};var O,X,q,K,Q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      <div style={{
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "center"
    }}>
        <div style={stateLabelStyle}>Typing</div>
        <TypingIndicator activity="typing" context="single" />
        <TypingIndicator activity="typing" context="group" userName="John" />
        <TypingIndicator activity="typing" context="multiple" count={2} />
      </div>
      <div style={{
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "center"
    }}>
        <div style={stateLabelStyle}>Recording</div>
        <TypingIndicator activity="recording" context="single" />
        <TypingIndicator activity="recording" context="group" userName="John" />
        <TypingIndicator activity="recording" context="multiple" count={2} />
      </div>
      <div style={{
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "center"
    }}>
        <div style={stateLabelStyle}>Uploading</div>
        <TypingIndicator activity="uploading" context="single" />
        <TypingIndicator activity="uploading" context="group" userName="John" />
        <TypingIndicator activity="uploading" context="multiple" count={2} />
      </div>
    </div>
}`,...(q=(X=c.parameters)==null?void 0:X.docs)==null?void 0:q.source},description:{story:"All states side by side for comparison.",...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Y,Z,$,nn,tn;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
      <Section title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.typing-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.typing-indicator__dots {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
}

.typing-indicator__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-ep-500);
  animation: typing-dot-bounce 1.4s infinite ease-in-out both;
}

.typing-indicator__dot:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator__dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-dot-bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.typing-indicator__text {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-ep-500);
}\`} />
      </Section>
    </div>
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"HTML & CSS usage reference for the Typing Indicator component.",...(tn=(nn=p.parameters)==null?void 0:nn.docs)==null?void 0:tn.description}}};var en,an,on,rn,sn;d.parameters={...d.parameters,docs:{...(en=d.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(on=(an=d.parameters)==null?void 0:an.docs)==null?void 0:on.source},description:{story:"Interactive playground — use the controls panel to configure.",...(sn=(rn=d.parameters)==null?void 0:rn.docs)==null?void 0:sn.description}}};const yn=["Default","GroupTyping","MultipleTyping","Recording","Uploading","AllVariants","States","Usage","Playground"];export{s as AllVariants,i as Default,e as GroupTyping,a as MultipleTyping,d as Playground,o as Recording,c as States,r as Uploading,p as Usage,yn as __namedExportsOrder,gn as default};
