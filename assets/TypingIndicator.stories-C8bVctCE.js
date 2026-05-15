import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function ie(n,a,u,y){const i=n==="typing"?"typing":n==="recording"?"recording":"uploading";return a==="single"?i.charAt(0).toUpperCase()+i.slice(1):a==="group"?`${u} is ${i}`:`${y} people are ${i}`}function t({activity:n="typing",context:a="single",userName:u="John",count:y=2}){const i=ie(n,a,u,y);return e.jsxs("div",{className:"typing-indicator",role:"status","aria-live":"polite","aria-label":i,children:[e.jsxs("div",{className:"typing-indicator__dots",children:[e.jsx("span",{className:"typing-indicator__dot"}),e.jsx("span",{className:"typing-indicator__dot"}),e.jsx("span",{className:"typing-indicator__dot"})]}),e.jsx("span",{className:"typing-indicator__text",children:i})]})}try{t.displayName="TypingIndicator",t.__docgenInfo={description:"",displayName:"TypingIndicator",props:{activity:{defaultValue:{value:"typing"},description:'Activity type. Default: "typing"',name:"activity",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"typing"'},{value:'"recording"'},{value:'"uploading"'}]}},context:{defaultValue:{value:"single"},description:'Context type. Default: "single"',name:"context",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"group"'},{value:'"multiple"'},{value:'"single"'}]}},userName:{defaultValue:{value:"John"},description:'User name (used when context is "group").',name:"userName",required:!1,type:{name:"string | undefined"}},count:{defaultValue:{value:"2"},description:'Number of people (used when context is "multiple"). Default: 2',name:"count",required:!1,type:{name:"number | undefined"}}}}}catch{}const se={title:"Base Components/Typing Indicator",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`An animated indicator showing when users are performing an activity
(typing, recording, or uploading). Supports single, group, and multiple contexts.

**Structure (from Figma node 17442:55645):**
- Container: flex row, gap 4px (spacing-xs), items-center
- Dots: 3 animated circles (4px), gap 2px, color \`#6852d6\` (text-highlight)
- Text: Caption 1/Regular — 12px, weight 400, line-height 18px, color \`#6852d6\`

**Variants:**
- Activity: Typing, Recording, Uploading
- Context: Single ("Typing"), Group ("John is typing"), Multiple ("2 people are typing")`}}},argTypes:{activity:{control:"select",options:["typing","recording","uploading"],description:"Activity type.",table:{category:"Content"}},context:{control:"select",options:["single","group","multiple"],description:"Context type.",table:{category:"Content"}},userName:{control:"text",description:"User name (for group context).",table:{category:"Content"}},count:{control:{type:"number",min:2,max:99},description:"Number of people (for multiple context).",table:{category:"Content"}}}},r={args:{activity:"typing",context:"single"}},o={args:{activity:"typing",context:"group",userName:"John"}},s={args:{activity:"typing",context:"multiple",count:2}},c={args:{activity:"recording",context:"single"}},p={args:{activity:"uploading",context:"single"}},l={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(m,{title:"Single",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsx(t,{activity:"typing",context:"single"}),e.jsx(t,{activity:"recording",context:"single"}),e.jsx(t,{activity:"uploading",context:"single"})]})}),e.jsx(m,{title:"Group (with name)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsx(t,{activity:"typing",context:"group",userName:"John"}),e.jsx(t,{activity:"recording",context:"group",userName:"John"}),e.jsx(t,{activity:"uploading",context:"group",userName:"John"})]})}),e.jsx(m,{title:"Multiple",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsx(t,{activity:"typing",context:"multiple",count:2}),e.jsx(t,{activity:"recording",context:"multiple",count:2}),e.jsx(t,{activity:"uploading",context:"multiple",count:2})]})})]})},d={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[e.jsx("div",{style:x,children:"Typing"}),e.jsx(t,{activity:"typing",context:"single"}),e.jsx(t,{activity:"typing",context:"group",userName:"John"}),e.jsx(t,{activity:"typing",context:"multiple",count:2})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[e.jsx("div",{style:x,children:"Recording"}),e.jsx(t,{activity:"recording",context:"single"}),e.jsx(t,{activity:"recording",context:"group",userName:"John"}),e.jsx(t,{activity:"recording",context:"multiple",count:2})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",alignItems:"center"},children:[e.jsx("div",{style:x,children:"Uploading"}),e.jsx(t,{activity:"uploading",context:"single"}),e.jsx(t,{activity:"uploading",context:"group",userName:"John"}),e.jsx(t,{activity:"uploading",context:"multiple",count:2})]})]})},g={args:{activity:"typing",context:"group",userName:"John",count:2},parameters:{docs:{disable:!0}}};function m({title:n,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),a]})}const x={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",width:80};var v,f,h,j,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "single"
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"Default — single user typing.",...(T=(j=r.parameters)==null?void 0:j.docs)==null?void 0:T.description}}};var I,S,N,b,_;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "group",
    userName: "John"
  }
}`,...(N=(S=o.parameters)==null?void 0:S.docs)==null?void 0:N.source},description:{story:"Group context — shows a user name.",...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.description}}};var J,w,C,D,A;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    activity: "typing",
    context: "multiple",
    count: 2
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Multiple people typing.",...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};var U,R,V,W,G;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    activity: "recording",
    context: "single"
  }
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:"Recording activity.",...(G=(W=c.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};var M,q,z,L,$;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    activity: "uploading",
    context: "single"
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"Uploading activity.",...($=(L=p.parameters)==null?void 0:L.docs)==null?void 0:$.description}}};var B,E,F,P,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"All variants — matching Figma component set layout.",...(O=(P=l.parameters)==null?void 0:P.docs)==null?void 0:O.description}}};var k,H,K,Q,X;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(K=(H=d.parameters)==null?void 0:H.docs)==null?void 0:K.source},description:{story:"All states side by side for comparison.",...(X=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,te,ne;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};const ce=["Default","GroupTyping","MultipleTyping","Recording","Uploading","AllVariants","States","Playground"];export{l as AllVariants,r as Default,o as GroupTyping,s as MultipleTyping,g as Playground,c as Recording,d as States,p as Uploading,ce as __namedExportsOrder,se as default};
