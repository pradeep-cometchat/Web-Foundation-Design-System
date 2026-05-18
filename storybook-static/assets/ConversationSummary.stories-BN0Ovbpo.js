import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function se(){return e.jsx("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.1 11L0 9.9L4.4 5.5L0 1.1L1.1 0L5.5 4.4L9.9 0L11 1.1L6.6 5.5L11 9.9L9.9 11L5.5 6.6L1.1 11Z",fill:"currentColor"})})}function n({text:a,loading:r=!1,error:p,open:oe=!0,onClose:te}){return oe?e.jsxs("div",{className:`conversation-summary ${r?"conversation-summary--loading":""}`,role:"region","aria-label":"Conversation summary",children:[e.jsxs("div",{className:"conversation-summary__header",children:[e.jsx("div",{className:"conversation-summary__heading",children:e.jsx("span",{className:"conversation-summary__title",children:"Conversation summary"})}),e.jsx("button",{type:"button",className:"conversation-summary__close-btn",onClick:te,"aria-label":"Close summary",children:e.jsx(se,{})})]}),e.jsxs("div",{className:"conversation-summary__body",children:[r&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"conversation-summary__skeleton conversation-summary__skeleton--full"}),e.jsx("div",{className:"conversation-summary__skeleton conversation-summary__skeleton--full"}),e.jsx("div",{className:"conversation-summary__skeleton conversation-summary__skeleton--medium"})]}),p&&!r&&e.jsx("p",{className:"conversation-summary__error",children:p}),a&&!r&&!p&&e.jsx("p",{className:"conversation-summary__text",children:a})]})]}):null}try{n.displayName="ConversationSummary",n.__docgenInfo={description:"",displayName:"ConversationSummary",props:{text:{defaultValue:null,description:"The summary text content",name:"text",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:{value:"false"},description:"Whether the summary is in a loading state",name:"loading",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"Error message to display",name:"error",required:!1,type:{name:"string | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the component is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Callback when the close icon is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const me={title:"Base Components/Conversation Summary",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`An AI-generated conversation summary card that appears above the message composer.
Displays a condensed overview of the conversation with a close action.

**Structure (from Figma node 4043:347990):**
- Container: full-width, \`radius-md\` (8px), \`shadow-lg\`, border \`#f5f5f5\`
- Padding: 16px horizontal, 12px vertical, gap 8px
- Header: "Conversation summary" (14px medium, #181d27) + close icon (20×20)
- Body: Summary text (14px regular, line-height 20px, #181d27)`}}},argTypes:{text:{control:"text",description:"The summary text content."},loading:{control:"boolean",description:"Whether the summary is loading."},error:{control:"text",description:"Error message to display."},open:{control:"boolean",description:"Whether the component is visible."},onClose:{control:!1}}},v="The user expressed interest in a watch listed for sale and confirmed its availability with the seller. They negotiated the price down from $130 to $120. After agreeing on the new price, the user asked if they could pick up the watch the same day. The seller responded positively with emojis, and the user confirmed availability after 5 PM. They concluded the conversation with plans to meet soon.",ne="Quick discussion about meeting time. Both parties agreed to meet at 3 PM at the coffee shop.",ie="The conversation began with the buyer inquiring about a vintage camera listed for sale. The seller confirmed the item was still available and provided additional details about its condition, including minor cosmetic wear on the body but fully functional optics and mechanics. The buyer asked about the shutter count and whether the lens was included. The seller confirmed a low shutter count of approximately 12,000 and noted that the 50mm f/1.8 lens was included in the price. After some negotiation, they agreed on a price of $450, down from the original asking price of $500. The buyer requested shipping to their address and the seller agreed to ship via insured priority mail. They exchanged contact information for payment processing and the seller promised to ship within two business days of receiving payment.",o={args:{text:v,open:!0}},t={args:{text:ne,open:!0}},s={args:{text:ie,open:!0}},i={args:{loading:!0,open:!0}},d={args:{error:"Unable to generate summary. Please try again.",open:!0}},l={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",flexDirection:"column",gap:"var(--space-6)",maxWidth:1020,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"Default"}),e.jsx(n,{text:v,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"Short Summary"}),e.jsx(n,{text:ne,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"Loading"}),e.jsx(n,{loading:!0,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"Error"}),e.jsx(n,{error:"Unable to generate summary. Please try again.",open:!0})]})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(g,{title:"HTML",children:e.jsx(y,{language:"HTML",code:`<!-- Conversation Summary -->
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
</div>`})}),e.jsx(g,{title:"CSS (Foundation Variables)",children:e.jsx(y,{language:"CSS",code:`.conversation-summary {
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
}`})})]})},m={args:{text:v,open:!0,loading:!1},parameters:{docs:{disable:!0}}},u={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",marginBottom:"var(--space-2)"},y=({language:a,code:r})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]});function g({title:a,children:r}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:a}),r]})}var h,f,x,_,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: defaultSummaryText,
    open: true
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Default state — exact match to Figma node 4043:347990.",...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.description}}};var S,w,j,C,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: shortSummaryText,
    open: true
  }
}`,...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:"Short summary text.",...(k=(C=t.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var L,T,z,U,N;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: longSummaryText,
    open: true
  }
}`,...(z=(T=s.parameters)==null?void 0:T.docs)==null?void 0:z.source},description:{story:"Long summary text that wraps multiple lines.",...(N=(U=s.parameters)==null?void 0:U.docs)==null?void 0:N.description}}};var W,D,E,P,V;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    loading: true,
    open: true
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"Loading state — skeleton placeholders while AI generates the summary.",...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.description}}};var $,M,q,B,H;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    error: "Unable to generate summary. Please try again.",
    open: true
  }
}`,...(q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:q.source},description:{story:"Error state — when summary generation fails.",...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.description}}};var A,F,I,G,R;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(F=l.parameters)==null?void 0:F.docs)==null?void 0:I.source},description:{story:"All states side by side for comparison.",...(R=(G=l.parameters)==null?void 0:G.docs)==null?void 0:R.description}}};var O,Q,X,Z,J;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"HTML & CSS usage reference for the Conversation Summary component.",...(J=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:J.description}}};var K,Y,ee,re,ae;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(ee=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};const ue=["Default","ShortSummary","LongSummary","Loading","Error","States","Usage","Playground"];export{o as Default,d as Error,i as Loading,s as LongSummary,m as Playground,t as ShortSummary,l as States,c as Usage,ue as __namedExportsOrder,me as default};
