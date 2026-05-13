import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t({timestamp:s,pattern:v="time",variant:ce="sent",showReadReceipt:ue=!1,readStatus:x="sent"}){return e.jsxs("span",{className:`date-timestamp date-timestamp--${ce} date-timestamp--${v}`,children:[ue&&e.jsx("span",{className:`date-timestamp__receipt date-timestamp__receipt--${x}`,children:e.jsx(ve,{status:x})}),e.jsx("span",{className:"date-timestamp__text",children:s})]})}function ve({status:s}){return s==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}try{t.displayName="DateTimestamp",t.__docgenInfo={description:"",displayName:"DateTimestamp",props:{timestamp:{defaultValue:null,description:'The timestamp text to display (e.g. "4:56 pm", "Yesterday", "12 Jan 2024")',name:"timestamp",required:!0,type:{name:"string"}},pattern:{defaultValue:{value:"time"},description:'Display pattern. Default: "time"',name:"pattern",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"date"'},{value:'"time"'},{value:'"datetime"'},{value:'"relative"'}]}},variant:{defaultValue:{value:"sent"},description:'Visual variant based on context. Default: "sent"',name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"separator"'},{value:'"sent"'},{value:'"received"'}]}},showReadReceipt:{defaultValue:{value:"false"},description:"Whether to show read receipts (double tick)",name:"showReadReceipt",required:!1,type:{name:"boolean | undefined"}},readStatus:{defaultValue:{value:"sent"},description:"Read receipt status",name:"readStatus",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sent"'},{value:'"delivered"'},{value:'"read"'}]}}}}}catch{}const ye={title:"Base Components/Date",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'The timestamp shown inside message bubbles, indicating when a message was sent.\nCompact inline element that sits below or beside the message text.\n\n**Structure (from Figma):**\n- Size: Hug content × 24px height\n- Font: 12px (`--font-size-1`), weight 400, line-height 16px (`--line-height-caption-2`)\n- Color: `--color-neutral-500` (#717680)\n- Optional read receipt icon (16×16) with 2px gap\n\n**Variants:**\n- `sent` — timestamp on sent messages (gray, may include read receipts)\n- `received` — timestamp on received messages (gray)\n- `separator` — date separator chip between message groups ("Today", "Yesterday")\n\n**Patterns:**\n- `time` — "4:56 pm", "10:30 am"\n- `date` — "12 Jan", "5 Mar 2024"\n- `datetime` — "12 Jan, 4:56 pm"\n- `relative` — "Just now", "2 min ago"'}}},argTypes:{timestamp:{control:"text",description:"The timestamp text to display."},pattern:{control:"select",options:["time","date","datetime","relative"],description:"Display pattern."},variant:{control:"select",options:["sent","received","separator"],description:"Visual variant based on context."},showReadReceipt:{control:"boolean",description:"Whether to show read receipt icon."},readStatus:{control:"select",options:["sent","delivered","read"],description:"Read receipt status."}}},r={args:{timestamp:"4:56 pm",pattern:"time",variant:"sent"}},i={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"sent"}},n={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"delivered"}},o={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"read"}},d={args:{timestamp:"4:56 pm",variant:"received"}},p={args:{timestamp:"Today",variant:"separator"}},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{label:"Time",children:e.jsx(t,{timestamp:"4:56 pm",pattern:"time",variant:"sent"})}),e.jsx(a,{label:"Date",children:e.jsx(t,{timestamp:"12 Jan",pattern:"date",variant:"sent"})}),e.jsx(a,{label:"DateTime",children:e.jsx(t,{timestamp:"12 Jan, 4:56 pm",pattern:"datetime",variant:"sent"})}),e.jsx(a,{label:"Relative",children:e.jsx(t,{timestamp:"Just now",pattern:"relative",variant:"sent"})})]})},m={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{label:"Sent (single tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"sent"})}),e.jsx(a,{label:"Delivered (double tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"delivered"})}),e.jsx(a,{label:"Read (blue double tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"read"})}),e.jsx(a,{label:"No receipt",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent"})})]})},c={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:360},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(t,{timestamp:"Today",variant:"separator"})}),e.jsxs("div",{style:{alignSelf:"flex-start",background:"var(--color-neutral-100)",borderRadius:"var(--radius-xl)",padding:"8px 12px",maxWidth:280},children:[e.jsx("div",{style:{fontSize:14,color:"var(--color-neutral-900)",marginBottom:4},children:"Yes, it's available."}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(t,{timestamp:"4:56 pm",variant:"received"})})]}),e.jsxs("div",{style:{alignSelf:"flex-end",background:"var(--color-ep-600)",borderRadius:"var(--radius-xl)",padding:"8px 12px",maxWidth:280},children:[e.jsx("div",{style:{fontSize:14,color:"var(--color-white)",marginBottom:4},children:"I'll take it. Can you ship it?"}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("span",{className:"date-timestamp date-timestamp--sent",style:{color:"rgba(255,255,255,0.7)"},children:[e.jsx("span",{className:"date-timestamp__receipt date-timestamp__receipt--read",style:{color:"rgba(255,255,255,0.9)"},children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("span",{className:"date-timestamp__text",children:"4:56 pm"})]})})]}),e.jsxs("div",{style:{alignSelf:"flex-start",background:"var(--color-neutral-100)",borderRadius:"var(--radius-xl)",padding:"8px 12px",maxWidth:280},children:[e.jsx("div",{style:{fontSize:14,color:"var(--color-neutral-900)",marginBottom:4},children:"Sure! Sending them over now."}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(t,{timestamp:"4:58 pm",variant:"received"})})]})]})},u={args:{timestamp:"4:56 pm",pattern:"time",variant:"sent",showReadReceipt:!0,readStatus:"read"},parameters:{docs:{disable:!0}}};function a({label:s,children:v}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",width:160,flexShrink:0},children:s}),v]})}var h,g,y,f,R;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    pattern: "time",
    variant: "sent"
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:'Default time format as shown in Figma — "4:56 pm" inside a sent message bubble.',...(R=(f=r.parameters)==null?void 0:f.docs)==null?void 0:R.description}}};var w,b,j,S,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "sent"
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:"Sent message with read receipt — single tick (sent).",...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var D,L,T,_,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "delivered"
  }
}`,...(T=(L=n.parameters)==null?void 0:L.docs)==null?void 0:T.source},description:{story:"Sent message with double tick — delivered.",...(C=(_=n.parameters)==null?void 0:_.docs)==null?void 0:C.description}}};var W,N,B,J,z;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "read"
  }
}`,...(B=(N=o.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:"Sent message with blue double tick — read.",...(z=(J=o.parameters)==null?void 0:J.docs)==null?void 0:z.description}}};var I,M,V,q,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "received"
  }
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source},description:{story:"Received message timestamp.",...(P=(q=d.parameters)==null?void 0:q.docs)==null?void 0:P.description}}};var Y,A,F,$,E;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    timestamp: "Today",
    variant: "separator"
  }
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:"Date separator chip — shown between message groups.",...(E=($=p.parameters)==null?void 0:$.docs)==null?void 0:E.description}}};var O,H,G,K,Q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Row label="Time">
        <DateTimestamp timestamp="4:56 pm" pattern="time" variant="sent" />
      </Row>
      <Row label="Date">
        <DateTimestamp timestamp="12 Jan" pattern="date" variant="sent" />
      </Row>
      <Row label="DateTime">
        <DateTimestamp timestamp="12 Jan, 4:56 pm" pattern="datetime" variant="sent" />
      </Row>
      <Row label="Relative">
        <DateTimestamp timestamp="Just now" pattern="relative" variant="sent" />
      </Row>
    </div>
}`,...(G=(H=l.parameters)==null?void 0:H.docs)==null?void 0:G.source},description:{story:"All patterns side by side.",...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var U,X,Z,ee,te;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Row label="Sent (single tick)">
        <DateTimestamp timestamp="4:56 pm" variant="sent" showReadReceipt readStatus="sent" />
      </Row>
      <Row label="Delivered (double tick)">
        <DateTimestamp timestamp="4:56 pm" variant="sent" showReadReceipt readStatus="delivered" />
      </Row>
      <Row label="Read (blue double tick)">
        <DateTimestamp timestamp="4:56 pm" variant="sent" showReadReceipt readStatus="read" />
      </Row>
      <Row label="No receipt">
        <DateTimestamp timestamp="4:56 pm" variant="sent" />
      </Row>
    </div>
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"All read receipt states.",...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,se,re,ie,ne;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxWidth: 360
  }}>
      {/* Separator */}
      <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
        <DateTimestamp timestamp="Today" variant="separator" />
      </div>

      {/* Received bubble */}
      <div style={{
      alignSelf: "flex-start",
      background: "var(--color-neutral-100)",
      borderRadius: "var(--radius-xl)",
      padding: "8px 12px",
      maxWidth: 280
    }}>
        <div style={{
        fontSize: 14,
        color: "var(--color-neutral-900)",
        marginBottom: 4
      }}>Yes, it's available.</div>
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <DateTimestamp timestamp="4:56 pm" variant="received" />
        </div>
      </div>

      {/* Sent bubble */}
      <div style={{
      alignSelf: "flex-end",
      background: "var(--color-ep-600)",
      borderRadius: "var(--radius-xl)",
      padding: "8px 12px",
      maxWidth: 280
    }}>
        <div style={{
        fontSize: 14,
        color: "var(--color-white)",
        marginBottom: 4
      }}>I'll take it. Can you ship it?</div>
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <span className="date-timestamp date-timestamp--sent" style={{
          color: "rgba(255,255,255,0.7)"
        }}>
            <span className="date-timestamp__receipt date-timestamp__receipt--read" style={{
            color: "rgba(255,255,255,0.9)"
          }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8.5L5 11.5L11 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="date-timestamp__text">4:56 pm</span>
          </span>
        </div>
      </div>

      {/* Another received */}
      <div style={{
      alignSelf: "flex-start",
      background: "var(--color-neutral-100)",
      borderRadius: "var(--radius-xl)",
      padding: "8px 12px",
      maxWidth: 280
    }}>
        <div style={{
        fontSize: 14,
        color: "var(--color-neutral-900)",
        marginBottom: 4
      }}>Sure! Sending them over now.</div>
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <DateTimestamp timestamp="4:58 pm" variant="received" />
        </div>
      </div>
    </div>
}`,...(re=(se=c.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"In-context preview showing timestamps inside message bubbles.",...(ne=(ie=c.parameters)==null?void 0:ie.docs)==null?void 0:ne.description}}};var oe,de,pe,le,me;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    pattern: "time",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "read"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(pe=(de=u.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"Interactive playground.",...(me=(le=u.parameters)==null?void 0:le.docs)==null?void 0:me.description}}};const fe=["Default","SentWithReceipt","Delivered","Read","Received","Separator","Patterns","ReadReceipts","InContext","Playground"];export{r as Default,n as Delivered,c as InContext,l as Patterns,u as Playground,o as Read,m as ReadReceipts,d as Received,i as SentWithReceipt,p as Separator,fe as __namedExportsOrder,ye as default};
