import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={title:"Core Components/Chat Bubbles/Poll Bubble",tags:["autodocs"],parameters:{layout:"centered"}},l={name:"Sent — Default",parameters:{docs:{description:{story:"Outgoing poll bubble with vote results."}}},render:()=>e.jsx(z,{children:e.jsx(p,{variant:"sent"})})},n={name:"Received — Default",parameters:{docs:{description:{story:"Incoming poll bubble with vote results."}}},render:()=>e.jsx(z,{children:e.jsx(p,{variant:"received"})})},d={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",padding:"var(--space-4)",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx(u,{children:"Sent"}),e.jsx(p,{variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx(u,{children:"Received"}),e.jsx(p,{variant:"received"})]})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(o,{title:"HTML Structure",children:e.jsx(A,{language:"HTML",code:`<!-- Sent Poll Bubble -->
<div class="poll-bubble poll-bubble--sent">
  <div class="poll-bubble__header">
    <h3 class="poll-bubble__title">Question</h3>
    <p class="poll-bubble__subtitle">Question</p>
  </div>
  <div class="poll-bubble__options">
    <div class="poll-bubble__option">
      <span class="poll-bubble__radio"></span>
      <span class="poll-bubble__option-text">Poll List</span>
      <div class="poll-bubble__voters">
        <img class="poll-bubble__avatar" src="..." />
        <img class="poll-bubble__avatar" src="..." />
        <img class="poll-bubble__avatar" src="..." />
      </div>
    </div>
    <div class="poll-bubble__progress">
      <div class="poll-bubble__progress-bar" style="width: 50%"></div>
    </div>
  </div>
</div>

<!-- Received Poll Bubble -->
<div class="poll-bubble poll-bubble--received">
  <!-- Same structure, different colors -->
</div>`})}),e.jsx(o,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(t,{title:"Sent",description:"Purple background. White text, white radio buttons, white progress bars. Voter avatars shown on the right."}),e.jsx(t,{title:"Received",description:"Gray background. Dark text, gray radio buttons, purple progress bars. Voter avatars shown on the right."})]})}),e.jsx(o,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(t,{title:"Title",description:"Bold question text at the top of the poll."}),e.jsx(t,{title:"Subtitle",description:"Secondary question/description text below the title."}),e.jsx(t,{title:"Radio Button",description:"Circular outline indicating selectable option. Muted white on sent, gray on received."}),e.jsx(t,{title:"Option Text",description:"Poll option label (e.g. 'Poll List')."}),e.jsx(t,{title:"Voter Avatars",description:"Stacked circular avatars of users who voted for this option. Shows +N for overflow."}),e.jsx(t,{title:"Progress Bar",description:"Horizontal bar showing vote percentage. White on sent, purple on received."})]})}),e.jsx(o,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(t,{title:"Sent Background",description:"var(--color-send-bubble-bg) — Primary purple"}),e.jsx(t,{title:"Received Background",description:"var(--color-received-bubble-bg) — Light gray"}),e.jsx(t,{title:"Progress Bar (Sent)",description:"var(--color-static-white) — White"}),e.jsx(t,{title:"Progress Bar (Received)",description:"var(--color-icon-highlight-primary) — Purple"}),e.jsx(t,{title:"Progress Track (Sent)",description:"rgba(255, 255, 255, 0.2) — Muted white"}),e.jsx(t,{title:"Progress Track (Received)",description:"var(--color-border-default) — Light gray"}),e.jsx(t,{title:"Radio (Sent)",description:"rgba(255, 255, 255, 0.4) — Muted white outline"}),e.jsx(t,{title:"Radio (Received)",description:"var(--color-text-tertiary) — Gray outline"})]})}),e.jsx(o,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Design System — Web Chat UI Kits → Poll Container (node 17219:542)"})})]})},v=["https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fc4f92e-1273-4695-9212-9ecad5b0e4b7","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/219ae09e-7eac-4a0a-bcbb-10552c1ee531","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097eae8e-e136-4b3e-a162-1bf9a960bf46","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fc4a0de-e4dc-4cfd-ba7f-35d799b05451"],D=[{label:"Online",progress:.6,voters:3},{label:"In-store",progress:.75,voters:3,selected:!0,showExtra:4}];function p({variant:a}){const r=a==="sent";return e.jsxs("div",{style:{borderRadius:"var(--radius-xl)",background:r?"var(--color-send-bubble-bg)":"var(--color-received-bubble-bg)",minWidth:280,maxWidth:320,display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"var(--space-4)",display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-4)",fontWeight:"var(--font-weight-bold)",fontFamily:"var(--font-family-body)",color:r?"var(--color-static-white)":"var(--color-text-primary)",lineHeight:1.3},children:"How do you prefer to shop?"}),D.map((i,T)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-3)"},children:[i.selected?e.jsx("div",{style:{width:24,height:24,borderRadius:"var(--radius-full)",background:r?"var(--color-static-white)":"var(--color-icon-highlight-primary)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M2.5 7L5.5 10L11.5 4",stroke:r?"var(--color-send-bubble-bg)":"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):e.jsx("div",{style:{width:24,height:24,borderRadius:"var(--radius-full)",border:`2px solid ${r?"rgba(255,255,255,0.5)":"var(--color-text-tertiary)"}`,flexShrink:0}}),e.jsx("span",{style:{fontSize:"var(--font-size-3)",fontWeight:"var(--font-weight-medium)",fontFamily:"var(--font-family-body)",color:r?"var(--color-static-white)":"var(--color-text-primary)",flex:1},children:i.label}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-1)"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center"},children:Array.from({length:Math.min(i.voters,3)}).map((I,b)=>e.jsx("img",{src:v[b%v.length],alt:"",style:{width:28,height:28,borderRadius:"var(--radius-full)",border:"2px solid",borderColor:r?"var(--color-send-bubble-bg)":"var(--color-received-bubble-bg)",marginLeft:b>0?-10:0,objectFit:"cover"}},b))}),i.showExtra?e.jsxs("span",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-medium)",color:r?"var(--color-static-white)":"var(--color-text-secondary)"},children:["+",i.showExtra]}):e.jsx("span",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-medium)",color:r?"var(--color-static-white)":"var(--color-text-secondary)"},children:i.voters})]})]}),e.jsx("div",{style:{marginLeft:36,height:8,borderRadius:4,background:r?"rgba(255,255,255,0.2)":"var(--color-border-dark)",overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",width:`${i.progress*100}%`,borderRadius:4,background:r?"var(--color-static-white)":"var(--color-icon-highlight-primary)"}})})]},T))]}),e.jsx("div",{style:{height:1,background:r?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)"}}),e.jsx("div",{style:{padding:"var(--space-3)",textAlign:"center"},children:e.jsx("span",{style:{fontSize:"var(--font-size-3)",fontWeight:"var(--font-weight-semibold)",fontFamily:"var(--font-family-body)",color:r?"var(--color-static-white)":"var(--color-icon-highlight-primary)",cursor:"pointer"},children:"View All"})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--space-1)",padding:"0 var(--space-4) var(--space-3)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:r?"rgba(255,255,255,0.7)":"var(--color-text-tertiary)"},children:"4:56 pm"}),r&&e.jsx(U,{})]})]})}function U(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"#34D399",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"#34D399",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function z({children:a,width:r=360}){return e.jsx("div",{style:{width:r,display:"flex",flexDirection:"column",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--color-bg-01)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)"},children:a})}function u({children:a}){return e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:a})}function o({title:a,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:a}),r]})}function A({language:a,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function t({title:a,description:r}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:a}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:r})]})}const s={parameters:{docs:{disable:!0}}};var g,h,m;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Sent — Default",
  parameters: {
    docs: {
      description: {
        story: "Outgoing poll bubble with vote results."
      }
    }
  },
  render: () => <Wrapper>
      <PollBubble variant="sent" />
    </Wrapper>
}`,...(m=(h=l.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,f,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Received — Default",
  parameters: {
    docs: {
      description: {
        story: "Incoming poll bubble with vote results."
      }
    }
  },
  render: () => <Wrapper>
      <PollBubble variant="received" />
    </Wrapper>
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,j,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    padding: "var(--space-4)",
    flexWrap: "wrap"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <Label>Sent</Label>
        <PollBubble variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <Label>Received</Label>
        <PollBubble variant="received" />
      </div>
    </div>
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var _,k,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Sent Poll Bubble -->
<div class="poll-bubble poll-bubble--sent">
  <div class="poll-bubble__header">
    <h3 class="poll-bubble__title">Question</h3>
    <p class="poll-bubble__subtitle">Question</p>
  </div>
  <div class="poll-bubble__options">
    <div class="poll-bubble__option">
      <span class="poll-bubble__radio"></span>
      <span class="poll-bubble__option-text">Poll List</span>
      <div class="poll-bubble__voters">
        <img class="poll-bubble__avatar" src="..." />
        <img class="poll-bubble__avatar" src="..." />
        <img class="poll-bubble__avatar" src="..." />
      </div>
    </div>
    <div class="poll-bubble__progress">
      <div class="poll-bubble__progress-bar" style="width: 50%"></div>
    </div>
  </div>
</div>

<!-- Received Poll Bubble -->
<div class="poll-bubble poll-bubble--received">
  <!-- Same structure, different colors -->
</div>\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Sent" description="Purple background. White text, white radio buttons, white progress bars. Voter avatars shown on the right." />
          <StateCard title="Received" description="Gray background. Dark text, gray radio buttons, purple progress bars. Voter avatars shown on the right." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Title" description="Bold question text at the top of the poll." />
          <StateCard title="Subtitle" description="Secondary question/description text below the title." />
          <StateCard title="Radio Button" description="Circular outline indicating selectable option. Muted white on sent, gray on received." />
          <StateCard title="Option Text" description="Poll option label (e.g. 'Poll List')." />
          <StateCard title="Voter Avatars" description="Stacked circular avatars of users who voted for this option. Shows +N for overflow." />
          <StateCard title="Progress Bar" description="Horizontal bar showing vote percentage. White on sent, purple on received." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Sent Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Progress Bar (Sent)" description="var(--color-static-white) — White" />
          <StateCard title="Progress Bar (Received)" description="var(--color-icon-highlight-primary) — Purple" />
          <StateCard title="Progress Track (Sent)" description="rgba(255, 255, 255, 0.2) — Muted white" />
          <StateCard title="Progress Track (Received)" description="var(--color-border-default) — Light gray" />
          <StateCard title="Radio (Sent)" description="rgba(255, 255, 255, 0.4) — Muted white outline" />
          <StateCard title="Radio (Received)" description="var(--color-text-tertiary) — Gray outline" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Poll Container (node 17219:542)" />
      </UsageSection>
    </div>
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var P,R,B,L,W;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source},description:{story:"Interactive playground.",...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};const E=["SentDefault","ReceivedDefault","AllVariants","Usage","Playground"];export{d as AllVariants,s as Playground,n as ReceivedDefault,l as SentDefault,c as Usage,E as __namedExportsOrder,O as default};
