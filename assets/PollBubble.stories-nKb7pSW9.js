import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={title:"Core Components/Chat Bubbles/Poll Bubble",tags:["autodocs"],parameters:{layout:"centered"}},n={name:"Sent — Default",parameters:{docs:{description:{story:"Outgoing poll bubble with vote results."}}},render:()=>e.jsx(T,{children:e.jsx(p,{variant:"sent"})})},l={name:"Received — Default",parameters:{docs:{description:{story:"Incoming poll bubble with vote results."}}},render:()=>e.jsx(T,{children:e.jsx(p,{variant:"received"})})},c={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-4)",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(u,{children:"Sent"}),e.jsx(p,{variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(u,{children:"Received"}),e.jsx(p,{variant:"received"})]})]})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(i,{title:"HTML Structure",children:e.jsx(A,{language:"HTML",code:`<!-- Sent Poll Bubble -->
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
</div>`})}),e.jsx(i,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent",description:"Purple background. White text, white radio buttons, white progress bars. Voter avatars shown on the right."}),e.jsx(a,{title:"Received",description:"Gray background. Dark text, gray radio buttons, purple progress bars. Voter avatars shown on the right."})]})}),e.jsx(i,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Title",description:"Bold question text at the top of the poll."}),e.jsx(a,{title:"Subtitle",description:"Secondary question/description text below the title."}),e.jsx(a,{title:"Radio Button",description:"Circular outline indicating selectable option. Muted white on sent, gray on received."}),e.jsx(a,{title:"Option Text",description:"Poll option label (e.g. 'Poll List')."}),e.jsx(a,{title:"Voter Avatars",description:"Stacked circular avatars of users who voted for this option. Shows +N for overflow."}),e.jsx(a,{title:"Progress Bar",description:"Horizontal bar showing vote percentage. White on sent, purple on received."})]})}),e.jsx(i,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(a,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(a,{title:"Progress Bar (Sent)",description:"var(--cometchat-static-white) — White"}),e.jsx(a,{title:"Progress Bar (Received)",description:"var(--cometchat-icon-color-highlight) — Purple"}),e.jsx(a,{title:"Progress Track (Sent)",description:"rgba(255, 255, 255, 0.2) — Muted white"}),e.jsx(a,{title:"Progress Track (Received)",description:"var(--cometchat-border-color-default) — Light gray"}),e.jsx(a,{title:"Radio (Sent)",description:"rgba(255, 255, 255, 0.4) — Muted white outline"}),e.jsx(a,{title:"Radio (Received)",description:"var(--cometchat-text-color-tertiary) — Gray outline"})]})}),e.jsx(i,{title:"Figma Reference",children:e.jsx(a,{title:"Source File",description:"Design System — Web Chat UI Kits → Poll Container (node 17219:542)"})})]})},b=["https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fc4f92e-1273-4695-9212-9ecad5b0e4b7","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/219ae09e-7eac-4a0a-bcbb-10552c1ee531","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097eae8e-e136-4b3e-a162-1bf9a960bf46","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fc4a0de-e4dc-4cfd-ba7f-35d799b05451"],z=[{label:"Online",progress:.6,voters:3},{label:"In-store",progress:.75,voters:3,selected:!0,showExtra:4}];function p({variant:r}){const t=r==="sent";return e.jsxs("div",{style:{borderRadius:"var(--cometchat-radius-3)",background:t?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",minWidth:280,maxWidth:320,display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"var(--cometchat-spacing-4)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx("span",{style:{fontSize:"18px",fontWeight:"700",fontFamily:"var(--cometchat-font-family)",color:t?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",lineHeight:1.3},children:"How do you prefer to shop?"}),z.map((o,D)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3)"},children:[o.selected?e.jsx("div",{style:{width:24,height:24,borderRadius:"var(--cometchat-radius-max)",background:t?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M2.5 7L5.5 10L11.5 4",stroke:t?"var(--cometchat-send-bubble-background)":"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):e.jsx("div",{style:{width:24,height:24,borderRadius:"var(--cometchat-radius-max)",border:`2px solid ${t?"rgba(255,255,255,0.5)":"var(--cometchat-text-color-tertiary)"}`,flexShrink:0}}),e.jsx("span",{style:{fontSize:"16px",fontWeight:"500",fontFamily:"var(--cometchat-font-family)",color:t?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",flex:1},children:o.label}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-1)"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center"},children:Array.from({length:Math.min(o.voters,3)}).map((I,h)=>e.jsx("img",{src:b[h%b.length],alt:"",style:{width:28,height:28,borderRadius:"var(--cometchat-radius-max)",border:"2px solid",borderColor:t?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",marginLeft:h>0?-10:0,objectFit:"cover"}},h))}),o.showExtra?e.jsxs("span",{style:{fontSize:"14px",fontWeight:"500",color:t?"var(--cometchat-static-white)":"var(--cometchat-text-color-secondary)"},children:["+",o.showExtra]}):e.jsx("span",{style:{fontSize:"14px",fontWeight:"500",color:t?"var(--cometchat-static-white)":"var(--cometchat-text-color-secondary)"},children:o.voters})]})]}),e.jsx("div",{style:{marginLeft:36,height:8,borderRadius:4,background:t?"rgba(255,255,255,0.2)":"var(--cometchat-border-color-dark)",overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",width:`${o.progress*100}%`,borderRadius:4,background:t?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)"}})})]},D))]}),e.jsx("div",{style:{height:1,background:t?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)"}}),e.jsx("div",{style:{padding:"var(--cometchat-spacing-3)",textAlign:"center"},children:e.jsx("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"var(--cometchat-font-family)",color:t?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",cursor:"pointer"},children:"View All"})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",padding:"0 var(--cometchat-spacing-4) var(--cometchat-spacing-3)"},children:[e.jsx("span",{style:{fontSize:"12px",color:t?"rgba(255,255,255,0.7)":"var(--cometchat-text-color-tertiary)"},children:"4:56 pm"}),t&&e.jsx(U,{})]})]})}function U(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"#34D399",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"#34D399",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function T({children:r,width:t=360}){return e.jsx("div",{style:{width:t,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:r})}function u({children:r}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:r})}function i({title:r,children:t}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:r}),t]})}function A({language:r,code:t}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]})}function a({title:r,description:t}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:r}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:t})]})}const s={parameters:{docs:{disable:!0}}};var g,m,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,f,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,j,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--cometchat-spacing-6)",
    padding: "var(--cometchat-spacing-4)",
    flexWrap: "wrap"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Sent</Label>
        <PollBubble variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Received</Label>
        <PollBubble variant="received" />
      </div>
    </div>
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,_,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
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
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent" description="Purple background. White text, white radio buttons, white progress bars. Voter avatars shown on the right." />
          <StateCard title="Received" description="Gray background. Dark text, gray radio buttons, purple progress bars. Voter avatars shown on the right." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
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
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Progress Bar (Sent)" description="var(--cometchat-static-white) — White" />
          <StateCard title="Progress Bar (Received)" description="var(--cometchat-icon-color-highlight) — Purple" />
          <StateCard title="Progress Track (Sent)" description="rgba(255, 255, 255, 0.2) — Muted white" />
          <StateCard title="Progress Track (Received)" description="var(--cometchat-border-color-default) — Light gray" />
          <StateCard title="Radio (Sent)" description="rgba(255, 255, 255, 0.4) — Muted white outline" />
          <StateCard title="Radio (Received)" description="var(--cometchat-text-color-tertiary) — Gray outline" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Poll Container (node 17219:542)" />
      </UsageSection>
    </div>
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var P,R,B,L,W;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source},description:{story:"Interactive playground.",...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};const E=["SentDefault","ReceivedDefault","AllVariants","Usage","Playground"];export{c as AllVariants,s as Playground,l as ReceivedDefault,n as SentDefault,d as Usage,E as __namedExportsOrder,O as default};
