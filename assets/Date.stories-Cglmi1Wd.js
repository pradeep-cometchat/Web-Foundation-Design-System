import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t({timestamp:a,pattern:s="time",variant:be="sent",showReadReceipt:we=!1,readStatus:x="sent"}){return e.jsxs("span",{className:`date-timestamp date-timestamp--${be} date-timestamp--${s}`,children:[we&&e.jsx("span",{className:`date-timestamp__receipt date-timestamp__receipt--${x}`,children:e.jsx(Se,{status:x})}),e.jsx("span",{className:"date-timestamp__text",children:a})]})}function Se({status:a}){return a==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}try{t.displayName="DateTimestamp",t.__docgenInfo={description:"",displayName:"DateTimestamp",props:{timestamp:{defaultValue:null,description:'The timestamp text to display (e.g. "4:56 pm", "Yesterday", "12 Jan 2024")',name:"timestamp",required:!0,type:{name:"string"}},pattern:{defaultValue:{value:"time"},description:'Display pattern. Default: "time"',name:"pattern",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"date"'},{value:'"time"'},{value:'"relative"'},{value:'"datetime"'}]}},variant:{defaultValue:{value:"sent"},description:'Visual variant based on context. Default: "sent"',name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"separator"'},{value:'"sent"'},{value:'"received"'}]}},showReadReceipt:{defaultValue:{value:"false"},description:"Whether to show read receipts (double tick)",name:"showReadReceipt",required:!1,type:{name:"boolean | undefined"}},readStatus:{defaultValue:{value:"sent"},description:"Read receipt status",name:"readStatus",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sent"'},{value:'"delivered"'},{value:'"read"'}]}}}}}catch{}const _e={title:"Base Components/Date",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'The timestamp shown inside message bubbles, indicating when a message was sent.\nCompact inline element that sits below or beside the message text.\n\n**Structure (from Figma):**\n- Size: Hug content × 24px height\n- Font: 12px (`--font-size-1`), weight 400, line-height 16px (`--line-height-caption-2`)\n- Color: `--color-neutral-500` (#717680)\n- Optional read receipt icon (16×16) with 2px gap\n\n**Variants:**\n- `sent` — timestamp on sent messages (gray, may include read receipts)\n- `received` — timestamp on received messages (gray)\n- `separator` — date separator chip between message groups ("Today", "Yesterday")\n\n**Patterns:**\n- `time` — "4:56 pm", "10:30 am"\n- `date` — "12 Jan", "5 Mar 2024"\n- `datetime` — "12 Jan, 4:56 pm"\n- `relative` — "Just now", "2 min ago"'}}},argTypes:{timestamp:{control:"text",description:"The timestamp text to display."},pattern:{control:"select",options:["time","date","datetime","relative"],description:"Display pattern."},variant:{control:"select",options:["sent","received","separator"],description:"Visual variant based on context."},showReadReceipt:{control:"boolean",description:"Whether to show read receipt icon."},readStatus:{control:"select",options:["sent","delivered","read"],description:"Read receipt status."}}},n={args:{timestamp:"4:56 pm",pattern:"time",variant:"sent"}},i={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"sent"}},o={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"delivered"}},d={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"read"}},p={args:{timestamp:"4:56 pm",variant:"received"}},l={args:{timestamp:"Today",variant:"separator"}},c={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(r,{label:"Time",children:e.jsx(t,{timestamp:"4:56 pm",pattern:"time",variant:"sent"})}),e.jsx(r,{label:"Date",children:e.jsx(t,{timestamp:"12 Jan",pattern:"date",variant:"sent"})}),e.jsx(r,{label:"DateTime",children:e.jsx(t,{timestamp:"12 Jan, 4:56 pm",pattern:"datetime",variant:"sent"})}),e.jsx(r,{label:"Relative",children:e.jsx(t,{timestamp:"Just now",pattern:"relative",variant:"sent"})})]})},m={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(r,{label:"Sent (single tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"sent"})}),e.jsx(r,{label:"Delivered (double tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"delivered"})}),e.jsx(r,{label:"Read (blue double tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"read"})}),e.jsx(r,{label:"No receipt",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent"})})]})},v={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",maxWidth:"var(--space-90, 360px)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(t,{timestamp:"Today",variant:"separator"})}),e.jsxs("div",{style:{alignSelf:"flex-start",background:"var(--color-received-bubble-bg)",borderRadius:"var(--radius-xl)",padding:"var(--space-2) var(--space-3)",maxWidth:"var(--space-70, 280px)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-2)",color:"var(--color-received-bubble-text)",marginBottom:"var(--space-1)"},children:"Yes, it's available."}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(t,{timestamp:"4:56 pm",variant:"received"})})]}),e.jsxs("div",{style:{alignSelf:"flex-end",background:"var(--color-send-bubble-bg)",borderRadius:"var(--radius-xl)",padding:"var(--space-2) var(--space-3)",maxWidth:"var(--space-70, 280px)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-2)",color:"var(--color-send-bubble-text)",marginBottom:"var(--space-1)"},children:"I'll take it. Can you ship it?"}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("span",{className:"date-timestamp date-timestamp--sent",style:{color:"rgba(255,255,255,0.7)"},children:[e.jsx("span",{className:"date-timestamp__receipt date-timestamp__receipt--read",style:{color:"var(--color-message-seen)"},children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("span",{className:"date-timestamp__text",children:"4:56 pm"})]})})]}),e.jsxs("div",{style:{alignSelf:"flex-start",background:"var(--color-received-bubble-bg)",borderRadius:"var(--radius-xl)",padding:"var(--space-2) var(--space-3)",maxWidth:"var(--space-70, 280px)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-2)",color:"var(--color-received-bubble-text)",marginBottom:"var(--space-1)"},children:"Sure! Sending them over now."}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(t,{timestamp:"4:58 pm",variant:"received"})})]})]})},u={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(f,{title:"HTML",children:e.jsx(h,{language:"HTML",code:`<!-- Sent message timestamp with read receipt -->
<span class="date-timestamp date-timestamp--sent">
  <span class="date-timestamp__receipt date-timestamp__receipt--read">
    <!-- double-tick SVG -->
  </span>
  <span class="date-timestamp__text">4:56 pm</span>
</span>

<!-- Received message timestamp -->
<span class="date-timestamp date-timestamp--received">
  <span class="date-timestamp__text">4:56 pm</span>
</span>

<!-- Date separator chip -->
<span class="date-timestamp date-timestamp--separator">Today</span>`})}),e.jsx(f,{title:"CSS (Foundation Variables)",children:e.jsx(h,{language:"CSS",code:`.date-timestamp {
  display: inline-flex;
  align-items: center;
  gap: var(--space-0-5);
  height: 24px;
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-2);
}

.date-timestamp--sent {
  color: var(--color-text-tertiary);
}

.date-timestamp--received {
  color: var(--color-text-tertiary);
}

.date-timestamp--separator {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  background: var(--color-bg-03);
  border-radius: var(--radius-full);
  padding: var(--space-0-5) var(--space-2);
  height: auto;
}

.date-timestamp__receipt {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
}

.date-timestamp__receipt--read {
  color: var(--color-message-seen);
}`})})]})},g={args:{timestamp:"4:56 pm",pattern:"time",variant:"sent",showReadReceipt:!0,readStatus:"read"},parameters:{docs:{disable:!0}}};function r({label:a,children:s}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-4)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",width:160,flexShrink:0},children:a}),s]})}const h=({language:a,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]});function f({title:a,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:a}),s]})}var y,b,w,S,R;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    pattern: "time",
    variant: "sent"
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:'Default time format as shown in Figma — "4:56 pm" inside a sent message bubble.',...(R=(S=n.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};var j,k,_,D,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "sent"
  }
}`,...(_=(k=i.parameters)==null?void 0:k.docs)==null?void 0:_.source},description:{story:"Sent message with read receipt — single tick (sent).",...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var C,L,z,W,B;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "delivered"
  }
}`,...(z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:z.source},description:{story:"Sent message with double tick — delivered.",...(B=(W=o.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var M,N,V,I,J;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "read"
  }
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"Sent message with blue double tick — read.",...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.description}}};var H,F,q,P,U;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "received"
  }
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:"Received message timestamp.",...(U=(P=p.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var Y,A,$,E,G;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    timestamp: "Today",
    variant: "separator"
  }
}`,...($=(A=l.parameters)==null?void 0:A.docs)==null?void 0:$.source},description:{story:"Date separator chip — shown between message groups.",...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.description}}};var O,X,K,Q,Z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
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
}`,...(K=(X=c.parameters)==null?void 0:X.docs)==null?void 0:K.source},description:{story:"All patterns side by side.",...(Z=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var ee,te,ae,re,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
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
}`,...(ae=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"All read receipt states.",...(se=(re=m.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var ne,ie,oe,de,pe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)",
    maxWidth: "var(--space-90, 360px)"
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
      background: "var(--color-received-bubble-bg)",
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-2) var(--space-3)",
      maxWidth: "var(--space-70, 280px)"
    }}>
        <div style={{
        fontSize: "var(--font-size-2)",
        color: "var(--color-received-bubble-text)",
        marginBottom: "var(--space-1)"
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
      background: "var(--color-send-bubble-bg)",
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-2) var(--space-3)",
      maxWidth: "var(--space-70, 280px)"
    }}>
        <div style={{
        fontSize: "var(--font-size-2)",
        color: "var(--color-send-bubble-text)",
        marginBottom: "var(--space-1)"
      }}>I'll take it. Can you ship it?</div>
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <span className="date-timestamp date-timestamp--sent" style={{
          color: "rgba(255,255,255,0.7)"
        }}>
            <span className="date-timestamp__receipt date-timestamp__receipt--read" style={{
            color: "var(--color-message-seen)"
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
      background: "var(--color-received-bubble-bg)",
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-2) var(--space-3)",
      maxWidth: "var(--space-70, 280px)"
    }}>
        <div style={{
        fontSize: "var(--font-size-2)",
        color: "var(--color-received-bubble-text)",
        marginBottom: "var(--space-1)"
      }}>Sure! Sending them over now.</div>
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <DateTimestamp timestamp="4:58 pm" variant="received" />
        </div>
      </div>
    </div>
}`,...(oe=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:"In-context preview showing timestamps inside message bubbles.",...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var le,ce,me,ve,ue;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
      <Section title="HTML">
        <UsageCodeCard language="HTML" code={\`<!-- Sent message timestamp with read receipt -->
<span class="date-timestamp date-timestamp--sent">
  <span class="date-timestamp__receipt date-timestamp__receipt--read">
    <!-- double-tick SVG -->
  </span>
  <span class="date-timestamp__text">4:56 pm</span>
</span>

<!-- Received message timestamp -->
<span class="date-timestamp date-timestamp--received">
  <span class="date-timestamp__text">4:56 pm</span>
</span>

<!-- Date separator chip -->
<span class="date-timestamp date-timestamp--separator">Today</span>\`} />
      </Section>
      <Section title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.date-timestamp {
  display: inline-flex;
  align-items: center;
  gap: var(--space-0-5);
  height: 24px;
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-2);
}

.date-timestamp--sent {
  color: var(--color-text-tertiary);
}

.date-timestamp--received {
  color: var(--color-text-tertiary);
}

.date-timestamp--separator {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  background: var(--color-bg-03);
  border-radius: var(--radius-full);
  padding: var(--space-0-5) var(--space-2);
  height: auto;
}

.date-timestamp__receipt {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
}

.date-timestamp__receipt--read {
  color: var(--color-message-seen);
}\`} />
      </Section>
    </div>
}`,...(me=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:me.source},description:{story:"HTML & CSS usage reference for the Date Timestamp component.",...(ue=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:ue.description}}};var ge,xe,he,fe,ye;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:he.source},description:{story:"Interactive playground.",...(ye=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:ye.description}}};const De=["Default","SentWithReceipt","Delivered","Read","Received","Separator","Patterns","ReadReceipts","InContext","Usage","Playground"];export{n as Default,o as Delivered,v as InContext,c as Patterns,g as Playground,d as Read,m as ReadReceipts,p as Received,i as SentWithReceipt,l as Separator,u as Usage,De as __namedExportsOrder,_e as default};
