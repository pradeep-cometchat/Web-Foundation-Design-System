import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function X(){return e.jsx("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.1 11L0 9.9L4.4 5.5L0 1.1L1.1 0L5.5 4.4L9.9 0L11 1.1L6.6 5.5L11 9.9L9.9 11L5.5 6.6L1.1 11Z",fill:"currentColor"})})}function r({text:c,loading:l=!1,error:u,open:J=!0,onClose:K}){return J?e.jsxs("div",{className:`conversation-summary ${l?"conversation-summary--loading":""}`,role:"region","aria-label":"Conversation summary",children:[e.jsxs("div",{className:"conversation-summary__header",children:[e.jsx("div",{className:"conversation-summary__heading",children:e.jsx("span",{className:"conversation-summary__title",children:"Conversation summary"})}),e.jsx("button",{type:"button",className:"conversation-summary__close-btn",onClick:K,"aria-label":"Close summary",children:e.jsx(X,{})})]}),e.jsxs("div",{className:"conversation-summary__body",children:[l&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"conversation-summary__skeleton conversation-summary__skeleton--full"}),e.jsx("div",{className:"conversation-summary__skeleton conversation-summary__skeleton--full"}),e.jsx("div",{className:"conversation-summary__skeleton conversation-summary__skeleton--medium"})]}),u&&!l&&e.jsx("p",{className:"conversation-summary__error",children:u}),c&&!l&&!u&&e.jsx("p",{className:"conversation-summary__text",children:c})]})]}):null}try{r.displayName="ConversationSummary",r.__docgenInfo={description:"",displayName:"ConversationSummary",props:{text:{defaultValue:null,description:"The summary text content",name:"text",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:{value:"false"},description:"Whether the summary is in a loading state",name:"loading",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"Error message to display",name:"error",required:!1,type:{name:"string | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the component is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Callback when the close icon is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const ae={title:"Base Components/Conversation Summary",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`An AI-generated conversation summary card that appears above the message composer.
Displays a condensed overview of the conversation with a close action.

**Structure (from Figma node 4043:347990):**
- Container: full-width, \`radius-md\` (8px), \`shadow-lg\`, border \`#f5f5f5\`
- Padding: 16px horizontal, 12px vertical, gap 8px
- Header: "Conversation summary" (14px medium, #181d27) + close icon (20×20)
- Body: Summary text (14px regular, line-height 20px, #181d27)`}}},argTypes:{text:{control:"text",description:"The summary text content."},loading:{control:"boolean",description:"Whether the summary is loading."},error:{control:"text",description:"Error message to display."},open:{control:"boolean",description:"Whether the component is visible."},onClose:{control:!1}}},p="The user expressed interest in a watch listed for sale and confirmed its availability with the seller. They negotiated the price down from $130 to $120. After agreeing on the new price, the user asked if they could pick up the watch the same day. The seller responded positively with emojis, and the user confirmed availability after 5 PM. They concluded the conversation with plans to meet soon.",G="Quick discussion about meeting time. Both parties agreed to meet at 3 PM at the coffee shop.",Y="The conversation began with the buyer inquiring about a vintage camera listed for sale. The seller confirmed the item was still available and provided additional details about its condition, including minor cosmetic wear on the body but fully functional optics and mechanics. The buyer asked about the shutter count and whether the lens was included. The seller confirmed a low shutter count of approximately 12,000 and noted that the 50mm f/1.8 lens was included in the price. After some negotiation, they agreed on a price of $450, down from the original asking price of $500. The buyer requested shipping to their address and the seller agreed to ship via insured priority mail. They exchanged contact information for payment processing and the seller promised to ship within two business days of receiving payment.",t={args:{text:p,open:!0}},a={args:{text:G,open:!0}},n={args:{text:Y,open:!0}},s={args:{loading:!0,open:!0}},o={args:{error:"Unable to generate summary. Please try again.",open:!0}},i={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:40,display:"flex",flexDirection:"column",gap:24,maxWidth:1020,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Default"}),e.jsx(r,{text:p,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Short Summary"}),e.jsx(r,{text:G,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Loading"}),e.jsx(r,{loading:!0,open:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Error"}),e.jsx(r,{error:"Unable to generate summary. Please try again.",open:!0})]})]})},d={args:{text:p,open:!0,loading:!1},parameters:{docs:{disable:!0}}},m={fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",marginBottom:8};var y,h,g,v,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: defaultSummaryText,
    open: true
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:"Default state — exact match to Figma node 4043:347990.",...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var f,S,b,_,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: shortSummaryText,
    open: true
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source},description:{story:"Short summary text.",...(j=(_=a.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};var w,L,T,C,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: longSummaryText,
    open: true
  }
}`,...(T=(L=n.parameters)==null?void 0:L.docs)==null?void 0:T.source},description:{story:"Long summary text that wraps multiple lines.",...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var N,E,P,D,q;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    loading: true,
    open: true
  }
}`,...(P=(E=s.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:"Loading state — skeleton placeholders while AI generates the summary.",...(q=(D=s.parameters)==null?void 0:D.docs)==null?void 0:q.description}}};var W,A,B,I,V;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    error: "Unable to generate summary. Please try again.",
    open: true
  }
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:"Error state — when summary generation fails.",...(V=(I=o.parameters)==null?void 0:I.docs)==null?void 0:V.description}}};var $,U,F,M,z;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: 40,
    display: "flex",
    flexDirection: "column",
    gap: 24,
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
}`,...(F=(U=i.parameters)==null?void 0:U.docs)==null?void 0:F.source},description:{story:"All states side by side for comparison.",...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.description}}};var H,O,Q,R,Z;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:Q.source},description:{story:"Interactive playground — use the controls panel to configure.",...(Z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:Z.description}}};const ne=["Default","ShortSummary","LongSummary","Loading","Error","States","Playground"];export{t as Default,o as Error,s as Loading,n as LongSummary,d as Playground,a as ShortSummary,i as States,ne as __namedExportsOrder,ae as default};
