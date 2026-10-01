import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as d}from"./T-B-X7QtOX.js";import{C as m}from"./ConversationSummary-CV0W2n41.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const me={title:"Base Components/Conversation Summary",component:m,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`An AI-generated conversation summary card that appears above the message composer.
Displays a condensed overview of the conversation with a close action.

**Structure (from Figma node 4043:347990):**
- Container: full-width, \`radius-md\` (8px), \`shadow-lg\`, border \`#f5f5f5\`
- Padding: 16px horizontal, 12px vertical, gap 8px
- Header: "Conversation summary" (14px medium, #181d27) + close icon (20×20)
- Body: Summary text (14px regular, line-height 20px, #181d27)`}}},argTypes:{text:{control:"text",description:"The summary text content."},loading:{control:"boolean",description:"Whether the summary is loading."},error:{control:"text",description:"Error message to display."},open:{control:"boolean",description:"Whether the component is visible."},onClose:{control:!1}}},v="The user expressed interest in a watch listed for sale and confirmed its availability with the seller. They negotiated the price down from $130 to $120. After agreeing on the new price, the user asked if they could pick up the watch the same day. The seller responded positively with emojis, and the user confirmed availability after 5 PM. They concluded the conversation with plans to meet soon.",ae="Quick discussion about meeting time. Both parties agreed to meet at 3 PM at the coffee shop.",oe="The conversation began with the buyer inquiring about a vintage camera listed for sale. The seller confirmed the item was still available and provided additional details about its condition, including minor cosmetic wear on the body but fully functional optics and mechanics. The buyer asked about the shutter count and whether the lens was included. The seller confirmed a low shutter count of approximately 12,000 and noted that the 50mm f/1.8 lens was included in the price. After some negotiation, they agreed on a price of $450, down from the original asking price of $500. The buyer requested shipping to their address and the seller agreed to ship via insured priority mail. They exchanged contact information for payment processing and the seller promised to ship within two business days of receiving payment.",r={args:{text:v,open:!0}},t={args:{text:ae,open:!0}},a={args:{text:oe,open:!0}},o={args:{loading:!0,open:!0}},n={args:{error:"Unable to generate summary. Please try again.",open:!0}},s={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)",maxWidth:1020,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:l,children:e.jsx(d,{children:"Default"})}),e.jsx(m,{text:v,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:e.jsx(d,{children:"Short Summary"})}),e.jsx(m,{text:ae,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:e.jsx(d,{children:"Loading"})}),e.jsx(m,{loading:!0,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:e.jsx(d,{children:"Error"})}),e.jsx(m,{error:"Unable to generate summary. Please try again.",open:!0})]})]})},i={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{title:"HTML",children:e.jsx(h,{language:"HTML",code:`<!-- Conversation Summary -->
<div class="conversation-summary">
  <div class="conversation-summary__header">
    <div class="conversation-summary__heading">
      <span class="conversation-summary__title">Conversation summary</span>
    </div>
    <button class="conversation-summary__close-btn" type="button">
      <!-- close SVG -->
    </button>
  </div>
  <div class="conversation-summary__body">
    <p class="conversation-summary__text">
      The user negotiated the price down from $130 to $120...
    </p>
  </div>
</div>

<!-- Loading state -->
<div class="conversation-summary conversation-summary--loading">
  <div class="conversation-summary__header">...</div>
  <div class="conversation-summary__body">
    <div class="conversation-summary__skeleton conversation-summary__skeleton--full"></div>
    <div class="conversation-summary__skeleton conversation-summary__skeleton--medium"></div>
    <div class="conversation-summary__skeleton conversation-summary__skeleton--short"></div>
  </div>
</div>`})}),e.jsx(g,{title:"CSS (CometChat Tokens)",children:e.jsx(h,{language:"CSS",code:`.conversation-summary {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-2);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
}

.conversation-summary__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.conversation-summary__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.conversation-summary__close-btn {
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--cometchat-text-color-primary);
}

.conversation-summary__text {
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  color: var(--cometchat-text-color-primary);
}

.conversation-summary__skeleton {
  height: 14px;
  border-radius: var(--cometchat-radius-1);
  background: var(--cometchat-background-color-03);
  animation: conversation-summary-pulse 1.5s ease-in-out infinite;
}

.conversation-summary__error {
  font-size: 14px;
  color: var(--cometchat-error-color);
}`})})]})},c={args:{text:v,open:!0,loading:!1},parameters:{docs:{disable:!0}}},l={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)"},h=({language:u,code:p})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:u})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:p})})]});function g({title:u,children:p}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(d,{children:u})}),p]})}var y,x,f,b,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: defaultSummaryText,
    open: true
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Default state — exact match to Figma node 4043:347990.",...(_=(b=r.parameters)==null?void 0:b.docs)==null?void 0:_.description}}};var S,T,w,j,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: shortSummaryText,
    open: true
  }
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:"Short summary text.",...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};var C,L,U,z,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: longSummaryText,
    open: true
  }
}`,...(U=(L=a.parameters)==null?void 0:L.docs)==null?void 0:U.source},description:{story:"Long summary text that wraps multiple lines.",...(D=(z=a.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var P,W,E,$,H;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    loading: true,
    open: true
  }
}`,...(E=(W=o.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"Loading state — skeleton placeholders while AI generates the summary.",...(H=($=o.parameters)==null?void 0:$.docs)==null?void 0:H.description}}};var M,A,B,I,F;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    error: "Unable to generate summary. Please try again.",
    open: true
  }
}`,...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:"Error state — when summary generation fails.",...(F=(I=n.parameters)==null?void 0:I.docs)==null?void 0:F.description}}};var q,G,R,V,O;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-10)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)",
    maxWidth: 1020,
    margin: "0 auto"
  }}>
      <div>
        <div style={stateLabelStyle}><T>Default</T></div>
        <ConversationSummary text={defaultSummaryText} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}><T>Short Summary</T></div>
        <ConversationSummary text={shortSummaryText} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}><T>Loading</T></div>
        <ConversationSummary loading={true} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}><T>Error</T></div>
        <ConversationSummary error="Unable to generate summary. Please try again." open={true} />
      </div>
    </div>
}`,...(R=(G=s.parameters)==null?void 0:G.docs)==null?void 0:R.source},description:{story:"All states side by side for comparison.",...(O=(V=s.parameters)==null?void 0:V.docs)==null?void 0:O.description}}};var Q,X,J,K,N;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={\`<!-- Conversation Summary -->
<div class="conversation-summary">
  <div class="conversation-summary__header">
    <div class="conversation-summary__heading">
      <span class="conversation-summary__title">Conversation summary</span>
    </div>
    <button class="conversation-summary__close-btn" type="button">
      <!-- close SVG -->
    </button>
  </div>
  <div class="conversation-summary__body">
    <p class="conversation-summary__text">
      The user negotiated the price down from $130 to $120...
    </p>
  </div>
</div>

<!-- Loading state -->
<div class="conversation-summary conversation-summary--loading">
  <div class="conversation-summary__header">...</div>
  <div class="conversation-summary__body">
    <div class="conversation-summary__skeleton conversation-summary__skeleton--full"></div>
    <div class="conversation-summary__skeleton conversation-summary__skeleton--medium"></div>
    <div class="conversation-summary__skeleton conversation-summary__skeleton--short"></div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.conversation-summary {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-2);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
}

.conversation-summary__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.conversation-summary__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.conversation-summary__close-btn {
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--cometchat-text-color-primary);
}

.conversation-summary__text {
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  color: var(--cometchat-text-color-primary);
}

.conversation-summary__skeleton {
  height: 14px;
  border-radius: var(--cometchat-radius-1);
  background: var(--cometchat-background-color-03);
  animation: conversation-summary-pulse 1.5s ease-in-out infinite;
}

.conversation-summary__error {
  font-size: 14px;
  color: var(--cometchat-error-color);
}\`} />
      </UsageSection>
    </div>
}`,...(J=(X=i.parameters)==null?void 0:X.docs)==null?void 0:J.source},description:{story:"HTML & CSS usage reference for the Conversation Summary component.",...(N=(K=i.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var Y,Z,ee,re,te;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    text: defaultSummaryText,
    open: true,
    loading: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure.",...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};const le=["Default","ShortSummary","LongSummary","Loading","Error","States","Usage","Playground"];export{r as Default,n as Error,o as Loading,a as LongSummary,c as Playground,t as ShortSummary,s as States,i as Usage,le as __namedExportsOrder,me as default};
