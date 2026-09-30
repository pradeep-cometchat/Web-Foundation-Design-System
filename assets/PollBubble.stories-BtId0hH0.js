import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as i}from"./T-C6nayWAE.js";/* empty css                    */import{a as g}from"./avatars-DeYFvwHw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Q={title:"Core Components/Chat Bubbles/Poll Bubble",tags:["autodocs"],parameters:{layout:"centered"}},l={name:"Sent — Default",parameters:{docs:{description:{story:"Outgoing poll bubble with vote results."}}},render:()=>e.jsx(A,{children:e.jsx(h,{variant:"sent"})})},c={name:"Received — Default",parameters:{docs:{description:{story:"Incoming poll bubble with vote results."}}},render:()=>e.jsx(A,{children:e.jsx(h,{variant:"received"})})},d={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-4)",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(m,{children:e.jsx(i,{children:"Sent"})}),e.jsx(h,{variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(m,{children:e.jsx(i,{children:"Received"})}),e.jsx(h,{variant:"received"})]})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(n,{title:"HTML Structure",children:e.jsx(z,{language:"HTML",code:`<!-- Sent Poll Bubble -->
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
</div>`})}),e.jsx(n,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(r,{title:"Sent",description:"Purple background. White text, white radio buttons, white progress bars. Voter avatars shown on the right."}),e.jsx(r,{title:"Received",description:"Gray background. Dark text, gray radio buttons, purple progress bars. Voter avatars shown on the right."})]})}),e.jsx(n,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(r,{title:"Title",description:"Bold question text at the top of the poll."}),e.jsx(r,{title:"Subtitle",description:"Secondary question/description text below the title."}),e.jsx(r,{title:"Radio Button",description:"Circular outline indicating selectable option. Muted white on sent, gray on received."}),e.jsx(r,{title:"Option Text",description:"Poll option label (e.g. 'Poll List')."}),e.jsx(r,{title:"Voter Avatars",description:"Stacked circular avatars of users who voted for this option. Shows +N for overflow."}),e.jsx(r,{title:"Progress Bar",description:"Horizontal bar showing vote percentage. White on sent, purple on received."})]})}),e.jsx(n,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(r,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(r,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(r,{title:"Progress Bar (Sent)",description:"var(--cometchat-static-white) — White"}),e.jsx(r,{title:"Progress Bar (Received)",description:"var(--cometchat-icon-color-highlight) — Purple"}),e.jsx(r,{title:"Progress Track (Sent)",description:"rgba(255, 255, 255, 0.2) — Muted white"}),e.jsx(r,{title:"Progress Track (Received)",description:"var(--cometchat-border-color-default) — Light gray"}),e.jsx(r,{title:"Radio (Sent)",description:"rgba(255, 255, 255, 0.4) — Muted white outline"}),e.jsx(r,{title:"Radio (Received)",description:"var(--cometchat-text-color-tertiary) — Gray outline"})]})}),e.jsx(n,{title:"Figma Reference",children:e.jsx(r,{title:"Source File",description:"Design System — Web Chat UI Kits → Poll Container (node 17219:542)"})})]})},b=[...g["Male Avatar"].slice(0,2),...g["Female Avatar"].slice(0,2)].map(a=>a.imageUrl),U=[{label:"Online",progress:.6,voters:3},{label:"In-store",progress:.75,voters:3,selected:!0,showExtra:4}];function h({variant:a}){const t=a==="sent";return e.jsxs("div",{style:{borderRadius:"var(--cometchat-radius-3)",background:t?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",minWidth:280,maxWidth:320,display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"var(--cometchat-spacing-4)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx("span",{style:{fontSize:"18px",fontWeight:"700",fontFamily:"var(--cometchat-font-family)",color:t?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",lineHeight:1.3},children:e.jsx(i,{children:"How do you prefer to shop?"})}),U.map((o,I)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3)"},children:[o.selected?e.jsx("div",{style:{width:24,height:24,borderRadius:"var(--cometchat-radius-max)",background:t?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M2.5 7L5.5 10L11.5 4",stroke:t?"var(--cometchat-send-bubble-background)":"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):e.jsx("div",{style:{width:24,height:24,borderRadius:"var(--cometchat-radius-max)",border:`2px solid ${t?"rgba(255,255,255,0.5)":"var(--cometchat-text-color-tertiary)"}`,flexShrink:0}}),e.jsx("span",{style:{fontSize:"16px",fontWeight:"500",fontFamily:"var(--cometchat-font-family)",color:t?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",flex:1},children:e.jsx(i,{children:o.label})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-1)"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center"},children:Array.from({length:Math.min(o.voters,3)}).map((V,u)=>e.jsx("img",{src:b[u%b.length],alt:"",style:{width:28,height:28,borderRadius:"var(--cometchat-radius-max)",border:"2px solid",borderColor:t?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",marginInlineStart:u>0?-10:0,objectFit:"cover"}},u))}),o.showExtra?e.jsx("span",{style:{fontSize:"14px",fontWeight:"500",color:t?"var(--cometchat-static-white)":"var(--cometchat-text-color-secondary)"},children:e.jsx(i,{children:`+${o.showExtra}`})}):e.jsx("span",{style:{fontSize:"14px",fontWeight:"500",color:t?"var(--cometchat-static-white)":"var(--cometchat-text-color-secondary)"},children:e.jsx(i,{children:String(o.voters)})})]})]}),e.jsx("div",{style:{marginInlineStart:36,height:8,borderRadius:4,background:t?"rgba(255,255,255,0.2)":"var(--cometchat-border-color-dark)",overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",width:`${o.progress*100}%`,borderRadius:4,background:t?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)"}})})]},I))]}),e.jsx("div",{style:{height:1,background:t?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)"}}),e.jsx("div",{style:{padding:"var(--cometchat-spacing-3)",textAlign:"center"},children:e.jsx("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"var(--cometchat-font-family)",color:t?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",cursor:"pointer"},children:e.jsx(i,{children:"View All"})})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",padding:"0 var(--cometchat-spacing-4) var(--cometchat-spacing-3)"},children:[e.jsx("span",{style:{fontSize:"12px",color:t?"rgba(255,255,255,0.7)":"var(--cometchat-text-color-tertiary)"},children:e.jsx(i,{children:"4:56 pm"})}),t&&e.jsx(M,{})]})]})}function M(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"#34D399",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"#34D399",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function A({children:a,width:t=360}){return e.jsx("div",{style:{width:t,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:a})}function m({children:a}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:a})}function n({title:a,children:t}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(i,{children:a})}),t]})}function z({language:a,code:t}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]})}function r({title:a,description:t}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(i,{children:a})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(i,{children:t})})]})}const s={parameters:{docs:{disable:!0}}};var v,x,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,j,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,k,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        <Label><T>Sent</T></Label>
        <PollBubble variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Received</T></Label>
        <PollBubble variant="received" />
      </div>
    </div>
}`,...(_=(k=d.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var C,R,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(R=p.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var B,L,W,T,D;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"Interactive playground.",...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};const N=["SentDefault","ReceivedDefault","AllVariants","Usage","Playground"];export{d as AllVariants,s as Playground,c as ReceivedDefault,l as SentDefault,p as Usage,N as __namedExportsOrder,Q as default};
