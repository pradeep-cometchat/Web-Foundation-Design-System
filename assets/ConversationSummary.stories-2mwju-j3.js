import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as c}from"./ConversationSummary-CkE183Wx.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const de={title:"Base Components/Conversation Summary",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`An AI-generated conversation summary card that appears above the message composer.
Displays a condensed overview of the conversation with a close action.

**Structure (from Figma node 4043:347990):**
- Container: full-width, \`radius-md\` (8px), \`shadow-lg\`, border \`#f5f5f5\`
- Padding: 16px horizontal, 12px vertical, gap 8px
- Header: "Conversation summary" (14px medium, #181d27) + close icon (20×20)
- Body: Summary text (14px regular, line-height 20px, #181d27)`}}},argTypes:{text:{control:"text",description:"The summary text content."},loading:{control:"boolean",description:"Whether the summary is loading."},error:{control:"text",description:"Error message to display."},open:{control:"boolean",description:"Whether the component is visible."},onClose:{control:!1}}},p="The user expressed interest in a watch listed for sale and confirmed its availability with the seller. They negotiated the price down from $130 to $120. After agreeing on the new price, the user asked if they could pick up the watch the same day. The seller responded positively with emojis, and the user confirmed availability after 5 PM. They concluded the conversation with plans to meet soon.",ae="Quick discussion about meeting time. Both parties agreed to meet at 3 PM at the coffee shop.",ne="The conversation began with the buyer inquiring about a vintage camera listed for sale. The seller confirmed the item was still available and provided additional details about its condition, including minor cosmetic wear on the body but fully functional optics and mechanics. The buyer asked about the shutter count and whether the lens was included. The seller confirmed a low shutter count of approximately 12,000 and noted that the 50mm f/1.8 lens was included in the price. After some negotiation, they agreed on a price of $450, down from the original asking price of $500. The buyer requested shipping to their address and the seller agreed to ship via insured priority mail. They exchanged contact information for payment processing and the seller promised to ship within two business days of receiving payment.",r={args:{text:p,open:!0}},a={args:{text:ae,open:!0}},n={args:{text:ne,open:!0}},o={args:{loading:!0,open:!0}},t={args:{error:"Unable to generate summary. Please try again.",open:!0}},s={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",flexDirection:"column",gap:"var(--space-6)",maxWidth:1020,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:l,children:"Default"}),e.jsx(c,{text:p,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:"Short Summary"}),e.jsx(c,{text:ae,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:"Loading"}),e.jsx(c,{loading:!0,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:"Error"}),e.jsx(c,{error:"Unable to generate summary. Please try again.",open:!0})]})]})},i={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(y,{title:"HTML",children:e.jsx(v,{language:"HTML",code:`<!-- Conversation Summary -->
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
</div>`})}),e.jsx(y,{title:"CSS (Foundation Variables)",children:e.jsx(v,{language:"CSS",code:`.conversation-summary {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
}

.conversation-summary__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.conversation-summary__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.conversation-summary__close-btn {
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-primary);
}

.conversation-summary__text {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
  color: var(--color-text-primary);
}

.conversation-summary__skeleton {
  height: 14px;
  border-radius: var(--radius-xs);
  background: var(--color-bg-03);
  animation: conversation-summary-pulse 1.5s ease-in-out infinite;
}

.conversation-summary__error {
  font-size: var(--font-size-2);
  color: var(--color-error);
}`})})]})},d={args:{text:p,open:!0,loading:!1},parameters:{docs:{disable:!0}}},l={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",marginBottom:"var(--space-2)"},v=({language:m,code:u})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:m})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:u})})]});function y({title:m,children:u}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:m}),u]})}var g,h,f,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: defaultSummaryText,
    open: true
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"Default state — exact match to Figma node 4043:347990.",...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};var _,S,w,j,T;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: shortSummaryText,
    open: true
  }
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Short summary text.",...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.description}}};var k,C,z,L,U;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: longSummaryText,
    open: true
  }
}`,...(z=(C=n.parameters)==null?void 0:C.docs)==null?void 0:z.source},description:{story:"Long summary text that wraps multiple lines.",...(U=(L=n.parameters)==null?void 0:L.docs)==null?void 0:U.description}}};var D,P,W,E,$;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    loading: true,
    open: true
  }
}`,...(W=(P=o.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:"Loading state — skeleton placeholders while AI generates the summary.",...($=(E=o.parameters)==null?void 0:E.docs)==null?void 0:$.description}}};var H,M,A,B,F;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    error: "Unable to generate summary. Please try again.",
    open: true
  }
}`,...(A=(M=t.parameters)==null?void 0:M.docs)==null?void 0:A.source},description:{story:"Error state — when summary generation fails.",...(F=(B=t.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};var I,V,q,G,R;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-10)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)",
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
}`,...(q=(V=s.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"All states side by side for comparison.",...(R=(G=s.parameters)==null?void 0:G.docs)==null?void 0:R.description}}};var O,Q,X,J,K;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.conversation-summary {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
}

.conversation-summary__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.conversation-summary__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.conversation-summary__close-btn {
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-primary);
}

.conversation-summary__text {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
  color: var(--color-text-primary);
}

.conversation-summary__skeleton {
  height: 14px;
  border-radius: var(--radius-xs);
  background: var(--color-bg-03);
  animation: conversation-summary-pulse 1.5s ease-in-out infinite;
}

.conversation-summary__error {
  font-size: var(--font-size-2);
  color: var(--color-error);
}\`} />
      </UsageSection>
    </div>
}`,...(X=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"HTML & CSS usage reference for the Conversation Summary component.",...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var N,Y,Z,ee,re;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Interactive playground — use the controls panel to configure.",...(re=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};const ce=["Default","ShortSummary","LongSummary","Loading","Error","States","Usage","Playground"];export{r as Default,t as Error,o as Loading,n as LongSummary,d as Playground,a as ShortSummary,s as States,i as Usage,ce as __namedExportsOrder,de as default};
