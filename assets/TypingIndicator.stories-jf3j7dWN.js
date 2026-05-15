import{j as n}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function dn(e,i,v,m){const a=e==="typing"?"typing":e==="recording"?"recording":"uploading";return i==="single"?a.charAt(0).toUpperCase()+a.slice(1):i==="group"?`${v} is ${a}`:`${m} people are ${a}`}function t({activity:e="typing",context:i="single",userName:v="John",count:m=2}){const a=dn(e,i,v,m);return n.jsxs("div",{className:"typing-indicator",role:"status","aria-live":"polite","aria-label":a,children:[n.jsxs("div",{className:"typing-indicator__dots",children:[n.jsx("span",{className:"typing-indicator__dot"}),n.jsx("span",{className:"typing-indicator__dot"}),n.jsx("span",{className:"typing-indicator__dot"})]}),n.jsx("span",{className:"typing-indicator__text",children:a})]})}try{t.displayName="TypingIndicator",t.__docgenInfo={description:"",displayName:"TypingIndicator",props:{activity:{defaultValue:{value:"typing"},description:'Activity type. Default: "typing"',name:"activity",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"typing"'},{value:'"recording"'},{value:'"uploading"'}]}},context:{defaultValue:{value:"single"},description:'Context type. Default: "single"',name:"context",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"multiple"'},{value:'"single"'},{value:'"group"'}]}},userName:{defaultValue:{value:"John"},description:'User name (used when context is "group").',name:"userName",required:!1,type:{name:"string | undefined"}},count:{defaultValue:{value:"2"},description:'Number of people (used when context is "multiple"). Default: 2',name:"count",required:!1,type:{name:"number | undefined"}}}}}catch{}const vn={title:"Base Components/Typing Indicator",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`An animated indicator showing when users are performing an activity
(typing, recording, or uploading). Supports single, group, and multiple contexts.

**Structure (from Figma node 17442:55645):**
- Container: flex row, gap 4px (spacing-xs), items-center
- Dots: 3 animated circles (4px), gap 2px, color \`#6852d6\` (text-highlight)
- Text: Caption 1/Regular — 12px, weight 400, line-height 18px, color \`#6852d6\`

**Variants:**
- Activity: Typing, Recording, Uploading
- Context: Single ("Typing"), Group ("John is typing"), Multiple ("2 people are typing")`}}},argTypes:{activity:{control:"select",options:["typing","recording","uploading"],description:"Activity type.",table:{category:"Content"}},context:{control:"select",options:["single","group","multiple"],description:"Context type.",table:{category:"Content"}},userName:{control:"text",description:"User name (for group context).",table:{category:"Content"}},count:{control:{type:"number",min:2,max:99},description:"Number of people (for multiple context).",table:{category:"Content"}}}},r={args:{activity:"typing",context:"single"}},o={args:{activity:"typing",context:"group",userName:"John"}},s={args:{activity:"typing",context:"multiple",count:2}},c={args:{activity:"recording",context:"single"}},p={args:{activity:"uploading",context:"single"}},l={parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[n.jsx(u,{title:"Single",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[n.jsx(t,{activity:"typing",context:"single"}),n.jsx(t,{activity:"recording",context:"single"}),n.jsx(t,{activity:"uploading",context:"single"})]})}),n.jsx(u,{title:"Group (with name)",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[n.jsx(t,{activity:"typing",context:"group",userName:"John"}),n.jsx(t,{activity:"recording",context:"group",userName:"John"}),n.jsx(t,{activity:"uploading",context:"group",userName:"John"})]})}),n.jsx(u,{title:"Multiple",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[n.jsx(t,{activity:"typing",context:"multiple",count:2}),n.jsx(t,{activity:"recording",context:"multiple",count:2}),n.jsx(t,{activity:"uploading",context:"multiple",count:2})]})})]})},d={parameters:{layout:"padded"},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[n.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[n.jsx("div",{style:x,children:"Typing"}),n.jsx(t,{activity:"typing",context:"single"}),n.jsx(t,{activity:"typing",context:"group",userName:"John"}),n.jsx(t,{activity:"typing",context:"multiple",count:2})]}),n.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[n.jsx("div",{style:x,children:"Recording"}),n.jsx(t,{activity:"recording",context:"single"}),n.jsx(t,{activity:"recording",context:"group",userName:"John"}),n.jsx(t,{activity:"recording",context:"multiple",count:2})]}),n.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[n.jsx("div",{style:x,children:"Uploading"}),n.jsx(t,{activity:"uploading",context:"single"}),n.jsx(t,{activity:"uploading",context:"group",userName:"John"}),n.jsx(t,{activity:"uploading",context:"multiple",count:2})]})]})},g={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>n.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[n.jsx(u,{title:"HTML",children:n.jsx(f,{language:"HTML",code:`<!-- Single user typing -->
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
</div>`})}),n.jsx(u,{title:"CSS (Foundation Variables)",children:n.jsx(f,{language:"CSS",code:`.typing-indicator {
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
}`})})]})},y={args:{activity:"typing",context:"group",userName:"John",count:2},parameters:{docs:{disable:!0}}};function u({title:e,children:i}){return n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:e}),i]})}const x={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",width:80},f=({language:e,code:i})=>n.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:n.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:e})}),n.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:n.jsx("code",{children:i})})]});var h,_,j,S,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "single"
  }
}`,...(j=(_=r.parameters)==null?void 0:_.docs)==null?void 0:j.source},description:{story:"Default — single user typing.",...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var T,I,N,w,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "group",
    userName: "John"
  }
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:"Group context — shows a user name.",...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var J,U,D,M,z;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "multiple",
    count: 2
  }
}`,...(D=(U=s.parameters)==null?void 0:U.docs)==null?void 0:D.source},description:{story:"Multiple people typing.",...(z=(M=s.parameters)==null?void 0:M.docs)==null?void 0:z.description}}};var W,A,V,L,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    activity: "recording",
    context: "single"
  }
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source},description:{story:"Recording activity.",...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.description}}};var G,k,H,F,q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    activity: "uploading",
    context: "single"
  }
}`,...(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source},description:{story:"Uploading activity.",...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.description}}};var $,B,E,P,O;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"All variants — matching Figma component set layout.",...(O=(P=l.parameters)==null?void 0:P.docs)==null?void 0:O.description}}};var X,K,Q,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"All states side by side for comparison.",...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var nn,tn,en,an,rn;g.parameters={...g.parameters,docs:{...(nn=g.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(en=(tn=g.parameters)==null?void 0:tn.docs)==null?void 0:en.source},description:{story:"HTML & CSS usage reference for the Typing Indicator component.",...(rn=(an=g.parameters)==null?void 0:an.docs)==null?void 0:rn.description}}};var on,sn,cn,pn,ln;y.parameters={...y.parameters,docs:{...(on=y.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(cn=(sn=y.parameters)==null?void 0:sn.docs)==null?void 0:cn.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ln=(pn=y.parameters)==null?void 0:pn.docs)==null?void 0:ln.description}}};const mn=["Default","GroupTyping","MultipleTyping","Recording","Uploading","AllVariants","States","Usage","Playground"];export{l as AllVariants,r as Default,o as GroupTyping,s as MultipleTyping,y as Playground,c as Recording,d as States,p as Uploading,g as Usage,mn as __namedExportsOrder,vn as default};
