import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as n}from"./T-C6nayWAE.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t({timestamp:a,pattern:r="time",variant:je="sent",showReadReceipt:we=!1,readStatus:x="sent"}){return e.jsxs("span",{className:`date-timestamp date-timestamp--${je} date-timestamp--${r}`,children:[we&&e.jsx("span",{className:`date-timestamp__receipt date-timestamp__receipt--${x}`,children:e.jsx(Se,{status:x})}),e.jsx("span",{className:"date-timestamp__text",children:e.jsx(n,{children:a})})]})}function Se({status:a}){return a==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}try{t.displayName="DateTimestamp",t.__docgenInfo={description:"",displayName:"DateTimestamp",props:{timestamp:{defaultValue:null,description:'The timestamp text to display (e.g. "4:56 pm", "Yesterday", "12 Jan 2024")',name:"timestamp",required:!0,type:{name:"string"}},pattern:{defaultValue:{value:"time"},description:'Display pattern. Default: "time"',name:"pattern",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"date"'},{value:'"time"'},{value:'"datetime"'},{value:'"relative"'}]}},variant:{defaultValue:{value:"sent"},description:'Visual variant based on context. Default: "sent"',name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"separator"'},{value:'"sent"'},{value:'"received"'}]}},showReadReceipt:{defaultValue:{value:"false"},description:"Whether to show read receipts (double tick)",name:"showReadReceipt",required:!1,type:{name:"boolean | undefined"}},readStatus:{defaultValue:{value:"sent"},description:"Read receipt status",name:"readStatus",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sent"'},{value:'"delivered"'},{value:'"read"'}]}}}}}catch{}const De={title:"Base Components/Date",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'The timestamp shown inside message bubbles, indicating when a message was sent.\nCompact inline element that sits below or beside the message text.\n\n**Structure (from Figma):**\n- Size: Hug content × 24px height\n- Font: 12px (`--font-size-1`), weight 400, line-height 16px (`--line-height-caption-2`)\n- Color: `--color-neutral-500` (#717680)\n- Optional read receipt icon (16×16) with 2px gap\n\n**Variants:**\n- `sent` — timestamp on sent messages (gray, may include read receipts)\n- `received` — timestamp on received messages (gray)\n- `separator` — date separator chip between message groups ("Today", "Yesterday")\n\n**Patterns:**\n- `time` — "4:56 pm", "10:30 am"\n- `date` — "12 Jan", "5 Mar 2024"\n- `datetime` — "12 Jan, 4:56 pm"\n- `relative` — "Just now", "2 min ago"'}}},argTypes:{timestamp:{control:"text",description:"The timestamp text to display."},pattern:{control:"select",options:["time","date","datetime","relative"],description:"Display pattern."},variant:{control:"select",options:["sent","received","separator"],description:"Visual variant based on context."},showReadReceipt:{control:"boolean",description:"Whether to show read receipt icon."},readStatus:{control:"select",options:["sent","delivered","read"],description:"Read receipt status."}}},i={args:{timestamp:"4:56 pm",pattern:"time",variant:"sent"}},o={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"sent"}},c={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"delivered"}},d={args:{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"read"}},p={args:{timestamp:"4:56 pm",variant:"received"}},m={args:{timestamp:"Today",variant:"separator"}},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(s,{label:"Time",children:e.jsx(t,{timestamp:"4:56 pm",pattern:"time",variant:"sent"})}),e.jsx(s,{label:"Date",children:e.jsx(t,{timestamp:"12 Jan",pattern:"date",variant:"sent"})}),e.jsx(s,{label:"DateTime",children:e.jsx(t,{timestamp:"12 Jan, 4:56 pm",pattern:"datetime",variant:"sent"})}),e.jsx(s,{label:"Relative",children:e.jsx(t,{timestamp:"Just now",pattern:"relative",variant:"sent"})})]})},u={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(s,{label:"Sent (single tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"sent"})}),e.jsx(s,{label:"Delivered (double tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"delivered"})}),e.jsx(s,{label:"Read (blue double tick)",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent",showReadReceipt:!0,readStatus:"read"})}),e.jsx(s,{label:"No receipt",children:e.jsx(t,{timestamp:"4:56 pm",variant:"sent"})})]})},v={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)",maxWidth:"var(--space-90, 360px)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(t,{timestamp:"Today",variant:"separator"})}),e.jsxs("div",{style:{alignSelf:"flex-start",background:"var(--cometchat-received-bubble-background)",borderRadius:"var(--cometchat-radius-3)",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",maxWidth:"var(--space-70, 280px)"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--cometchat-received-bubble-text)",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(n,{children:"Yes, it's available."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(t,{timestamp:"4:56 pm",variant:"received"})})]}),e.jsxs("div",{style:{alignSelf:"flex-end",background:"var(--cometchat-send-bubble-background)",borderRadius:"var(--cometchat-radius-3)",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",maxWidth:"var(--space-70, 280px)"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--cometchat-send-bubble-text)",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(n,{children:"I'll take it. Can you ship it?"})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("span",{className:"date-timestamp date-timestamp--sent",style:{color:"rgba(255,255,255,0.7)"},children:[e.jsx("span",{className:"date-timestamp__receipt date-timestamp__receipt--read",style:{color:"var(--cometchat-message-seen-color)"},children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("span",{className:"date-timestamp__text",children:e.jsx(n,{children:"4:56 pm"})})]})})]}),e.jsxs("div",{style:{alignSelf:"flex-start",background:"var(--cometchat-received-bubble-background)",borderRadius:"var(--cometchat-radius-3)",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",maxWidth:"var(--space-70, 280px)"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--cometchat-received-bubble-text)",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(n,{children:"Sure! Sending them over now."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(t,{timestamp:"4:58 pm",variant:"received"})})]})]})},h={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(f,{title:"HTML",children:e.jsx(y,{language:"HTML",code:`<!-- Sent message timestamp with read receipt -->
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
<span class="date-timestamp date-timestamp--separator">Today</span>`})}),e.jsx(f,{title:"CSS (CometChat Tokens)",children:e.jsx(y,{language:"CSS",code:`.date-timestamp {
  display: inline-flex;
  align-items: center;
  gap: var(--cometchat-spacing);
  height: 24px;
  font-family: var(--cometchat-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

.date-timestamp--sent {
  color: var(--cometchat-text-color-tertiary);
}

.date-timestamp--received {
  color: var(--cometchat-text-color-tertiary);
}

.date-timestamp--separator {
  color: var(--cometchat-text-color-secondary);
  font-weight: 500;
  background: var(--cometchat-background-color-03);
  border-radius: var(--cometchat-radius-max);
  padding: var(--cometchat-spacing) var(--cometchat-spacing-2);
  height: auto;
}

.date-timestamp__receipt {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
}

.date-timestamp__receipt--read {
  color: var(--cometchat-message-seen-color);
}`})})]})},g={args:{timestamp:"4:56 pm",pattern:"time",variant:"sent",showReadReceipt:!0,readStatus:"read"},parameters:{docs:{disable:!0}}};function s({label:a,children:r}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-4)"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",width:160,flexShrink:0},children:e.jsx(n,{children:a})}),r]})}const y=({language:a,code:r})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]});function f({title:a,children:r}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(n,{children:a})}),r]})}var b,j,w,S,R;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    pattern: "time",
    variant: "sent"
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:'Default time format as shown in Figma — "4:56 pm" inside a sent message bubble.',...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};var k,_,T,D,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "sent"
  }
}`,...(T=(_=o.parameters)==null?void 0:_.docs)==null?void 0:T.source},description:{story:"Sent message with read receipt — single tick (sent).",...(C=(D=o.parameters)==null?void 0:D.docs)==null?void 0:C.description}}};var L,W,z,B,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "delivered"
  }
}`,...(z=(W=c.parameters)==null?void 0:W.docs)==null?void 0:z.source},description:{story:"Sent message with double tick — delivered.",...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.description}}};var N,I,J,V,H;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "read"
  }
}`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source},description:{story:"Sent message with blue double tick — read.",...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};var q,P,U,F,Y;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    timestamp: "4:56 pm",
    variant: "received"
  }
}`,...(U=(P=p.parameters)==null?void 0:P.docs)==null?void 0:U.source},description:{story:"Received message timestamp.",...(Y=(F=p.parameters)==null?void 0:F.docs)==null?void 0:Y.description}}};var A,$,E,G,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    timestamp: "Today",
    variant: "separator"
  }
}`,...(E=($=m.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:"Date separator chip — shown between message groups.",...(O=(G=m.parameters)==null?void 0:G.docs)==null?void 0:O.description}}};var X,K,Q,Z,ee;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)"
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
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"All patterns side by side.",...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ae,se,re,ne;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)"
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
}`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"All read receipt states.",...(ne=(re=u.parameters)==null?void 0:re.docs)==null?void 0:ne.description}}};var ie,oe,ce,de,pe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-3)",
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
      background: "var(--cometchat-received-bubble-background)",
      borderRadius: "var(--cometchat-radius-3)",
      padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
      maxWidth: "var(--space-70, 280px)"
    }}>
        <div style={{
        fontSize: "14px",
        color: "var(--cometchat-received-bubble-text)",
        marginBottom: "var(--cometchat-spacing-1)"
      }}><T>Yes, it's available.</T></div>
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
      background: "var(--cometchat-send-bubble-background)",
      borderRadius: "var(--cometchat-radius-3)",
      padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
      maxWidth: "var(--space-70, 280px)"
    }}>
        <div style={{
        fontSize: "14px",
        color: "var(--cometchat-send-bubble-text)",
        marginBottom: "var(--cometchat-spacing-1)"
      }}><T>I'll take it. Can you ship it?</T></div>
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <span className="date-timestamp date-timestamp--sent" style={{
          color: "rgba(255,255,255,0.7)"
        }}>
            <span className="date-timestamp__receipt date-timestamp__receipt--read" style={{
            color: "var(--cometchat-message-seen-color)"
          }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8.5L5 11.5L11 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="date-timestamp__text"><T>4:56 pm</T></span>
          </span>
        </div>
      </div>

      {/* Another received */}
      <div style={{
      alignSelf: "flex-start",
      background: "var(--cometchat-received-bubble-background)",
      borderRadius: "var(--cometchat-radius-3)",
      padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
      maxWidth: "var(--space-70, 280px)"
    }}>
        <div style={{
        fontSize: "14px",
        color: "var(--cometchat-received-bubble-text)",
        marginBottom: "var(--cometchat-spacing-1)"
      }}><T>Sure! Sending them over now.</T></div>
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <DateTimestamp timestamp="4:58 pm" variant="received" />
        </div>
      </div>
    </div>
}`,...(ce=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ce.source},description:{story:"In-context preview showing timestamps inside message bubbles.",...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var me,le,ue,ve,he;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
      <Section title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.date-timestamp {
  display: inline-flex;
  align-items: center;
  gap: var(--cometchat-spacing);
  height: 24px;
  font-family: var(--cometchat-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

.date-timestamp--sent {
  color: var(--cometchat-text-color-tertiary);
}

.date-timestamp--received {
  color: var(--cometchat-text-color-tertiary);
}

.date-timestamp--separator {
  color: var(--cometchat-text-color-secondary);
  font-weight: 500;
  background: var(--cometchat-background-color-03);
  border-radius: var(--cometchat-radius-max);
  padding: var(--cometchat-spacing) var(--cometchat-spacing-2);
  height: auto;
}

.date-timestamp__receipt {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
}

.date-timestamp__receipt--read {
  color: var(--cometchat-message-seen-color);
}\`} />
      </Section>
    </div>
}`,...(ue=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ue.source},description:{story:"HTML & CSS usage reference for the Date Timestamp component.",...(he=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:he.description}}};var ge,xe,ye,fe,be;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ye.source},description:{story:"Interactive playground.",...(be=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:be.description}}};const Ce=["Default","SentWithReceipt","Delivered","Read","Received","Separator","Patterns","ReadReceipts","InContext","Usage","Playground"];export{i as Default,c as Delivered,v as InContext,l as Patterns,g as Playground,d as Read,u as ReadReceipts,p as Received,o as SentWithReceipt,m as Separator,h as Usage,Ce as __namedExportsOrder,De as default};
