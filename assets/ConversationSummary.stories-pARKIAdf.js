import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as m}from"./ConversationSummary-BK8UhEgx.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ce={title:"Base Components/Conversation Summary",component:m,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`An AI-generated conversation summary card that appears above the message composer.
Displays a condensed overview of the conversation with a close action.

**Structure (from Figma node 4043:347990):**
- Container: full-width, \`radius-md\` (8px), \`shadow-lg\`, border \`#f5f5f5\`
- Padding: 16px horizontal, 12px vertical, gap 8px
- Header: "Conversation summary" (14px medium, #181d27) + close icon (20×20)
- Body: Summary text (14px regular, line-height 20px, #181d27)`}}},argTypes:{text:{control:"text",description:"The summary text content."},loading:{control:"boolean",description:"Whether the summary is loading."},error:{control:"text",description:"Error message to display."},open:{control:"boolean",description:"Whether the component is visible."},onClose:{control:!1}}},p="The user expressed interest in a watch listed for sale and confirmed its availability with the seller. They negotiated the price down from $130 to $120. After agreeing on the new price, the user asked if they could pick up the watch the same day. The seller responded positively with emojis, and the user confirmed availability after 5 PM. They concluded the conversation with plans to meet soon.",te="Quick discussion about meeting time. Both parties agreed to meet at 3 PM at the coffee shop.",ae="The conversation began with the buyer inquiring about a vintage camera listed for sale. The seller confirmed the item was still available and provided additional details about its condition, including minor cosmetic wear on the body but fully functional optics and mechanics. The buyer asked about the shutter count and whether the lens was included. The seller confirmed a low shutter count of approximately 12,000 and noted that the 50mm f/1.8 lens was included in the price. After some negotiation, they agreed on a price of $450, down from the original asking price of $500. The buyer requested shipping to their address and the seller agreed to ship via insured priority mail. They exchanged contact information for payment processing and the seller promised to ship within two business days of receiving payment.",r={args:{text:p,open:!0}},t={args:{text:te,open:!0}},a={args:{text:ae,open:!0}},o={args:{loading:!0,open:!0}},n={args:{error:"Unable to generate summary. Please try again.",open:!0}},s={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)",maxWidth:1020,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Default"}),e.jsx(m,{text:p,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Short Summary"}),e.jsx(m,{text:te,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Loading"}),e.jsx(m,{loading:!0,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Error"}),e.jsx(m,{error:"Unable to generate summary. Please try again.",open:!0})]})]})},i={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(h,{title:"HTML",children:e.jsx(v,{language:"HTML",code:`<!-- Conversation Summary -->
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
</div>`})}),e.jsx(h,{title:"CSS (CometChat Tokens)",children:e.jsx(v,{language:"CSS",code:`.conversation-summary {
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
}`})})]})},c={args:{text:p,open:!0,loading:!1},parameters:{docs:{disable:!0}}},d={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)"},v=({language:l,code:u})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:l})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:u})})]});function h({title:l,children:u}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:l}),u]})}var g,y,x,f,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: defaultSummaryText,
    open: true
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"Default state — exact match to Figma node 4043:347990.",...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var _,S,w,k,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: shortSummaryText,
    open: true
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Short summary text.",...(T=(k=t.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var C,j,L,U,z;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: longSummaryText,
    open: true
  }
}`,...(L=(j=a.parameters)==null?void 0:j.docs)==null?void 0:L.source},description:{story:"Long summary text that wraps multiple lines.",...(z=(U=a.parameters)==null?void 0:U.docs)==null?void 0:z.description}}};var D,P,W,E,$;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    loading: true,
    open: true
  }
}`,...(W=(P=o.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:"Loading state — skeleton placeholders while AI generates the summary.",...($=(E=o.parameters)==null?void 0:E.docs)==null?void 0:$.description}}};var H,M,A,B,I;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    error: "Unable to generate summary. Please try again.",
    open: true
  }
}`,...(A=(M=n.parameters)==null?void 0:M.docs)==null?void 0:A.source},description:{story:"Error state — when summary generation fails.",...(I=(B=n.parameters)==null?void 0:B.docs)==null?void 0:I.description}}};var F,q,G,R,V;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        <div style={stateLabelStyle}>Default</div>
        <ConversationSummary text={defaultSummaryText} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}>Short Summary</div>
        <ConversationSummary text={shortSummaryText} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}>Loading</div>
        <ConversationSummary loading={true} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}>Error</div>
        <ConversationSummary error="Unable to generate summary. Please try again." open={true} />
      </div>
    </div>
}`,...(G=(q=s.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"All states side by side for comparison.",...(V=(R=s.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var O,Q,X,J,K;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(X=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"HTML & CSS usage reference for the Conversation Summary component.",...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var N,Y,Z,ee,re;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Interactive playground — use the controls panel to configure.",...(re=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};const me=["Default","ShortSummary","LongSummary","Loading","Error","States","Usage","Playground"];export{r as Default,n as Error,o as Loading,a as LongSummary,c as Playground,t as ShortSummary,s as States,i as Usage,me as __namedExportsOrder,ce as default};
