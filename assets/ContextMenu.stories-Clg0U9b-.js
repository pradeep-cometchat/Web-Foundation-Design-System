import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function x({onClick:t,ariaLabel:o="More options"}){return e.jsx("button",{type:"button",className:"context-menu-trigger",onClick:t,"aria-label":o,"aria-haspopup":"menu",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:20,fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"more_vert"})})}function v({items:t,open:o=!0,onClose:_,width:pe=160}){return o?e.jsxs(e.Fragment,{children:[_&&e.jsx("div",{className:"context-menu__backdrop",onClick:_,"aria-hidden":"true"}),e.jsx("div",{className:"context-menu",role:"menu",style:{width:pe},children:t.map((p,y)=>e.jsxs("button",{className:`context-menu__item ${y===0?"context-menu__item--first":""} ${p.destructive?"context-menu__item--destructive":""}`,role:"menuitem",onClick:p.onClick,type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:p.icon}),e.jsx("span",{className:"context-menu__item-label",children:p.label})]},y))})]}):null}try{x.displayName="ContextMenuTrigger",x.__docgenInfo={description:`The three-dot (kebab) trigger button that opens the context menu.
Circular white button with shadow, shown on message hover.`,displayName:"ContextMenuTrigger",props:{onClick:{defaultValue:null,description:"Click handler to open the menu",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},ariaLabel:{defaultValue:{value:"More options"},description:'Accessible label. Default: "More options"',name:"ariaLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}try{v.displayName="ContextMenu",v.__docgenInfo={description:"",displayName:"ContextMenu",props:{items:{defaultValue:null,description:"List of menu items",name:"items",required:!0,type:{name:"ContextMenuItem[]"}},open:{defaultValue:{value:"true"},description:"Whether the menu is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Callback when the menu is dismissed",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},width:{defaultValue:{value:"160"},description:"Width of the menu. Default: 160",name:"width",required:!1,type:{name:"number | undefined"}}}}}catch{}const fe={title:"Base Components/Context Menu",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A right-click or long-press context menu with grouped actions and icons.\nAppears anchored to a message or element with a compact list of actions.\n\n**Structure (from Figma node 4090:878265):**\n- Container: 160px wide, `--radius-md` (8px), shadow-lg, border `--color-neutral-100`\n- First item: 44px height, rest: 40px height\n- Item padding: 16px horizontal, 8px gap between icon and label\n- Icons: 24×24, color `#A1A1A1` (neutral-400)\n- Text: 14px, weight 400, line-height 1.2, color `--color-neutral-900`\n- Hover: `--color-neutral-50` (#fafafa) background\n- Destructive items: `--color-error` text and icon"}}},argTypes:{items:{control:!1,description:"Array of menu items with icon, label, and optional destructive flag."},open:{control:"boolean",description:"Whether the menu is visible."},width:{control:{type:"number",min:120,max:300,step:10},description:"Width of the menu in pixels."},onClose:{control:!1}}},n={fontSize:20,fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"};function a(){return e.jsx("span",{className:"icon-rounded",style:n,children:"content_copy"})}function h(){return e.jsx("span",{className:"icon-rounded",style:n,children:"reply"})}function le(){return e.jsx("span",{className:"icon-rounded",style:n,children:"forum"})}function me(){return e.jsx("span",{className:"icon-rounded",style:n,children:"translate"})}function g(){return e.jsx("span",{className:"icon-rounded",style:n,children:"delete"})}function xe(){return e.jsx("span",{className:"icon-rounded",style:n,children:"edit"})}function he(){return e.jsx("span",{className:"icon-rounded",style:n,children:"forward"})}function ge(){return e.jsx("span",{className:"icon-rounded",style:n,children:"info"})}const de=[{icon:e.jsx(a,{}),label:"Copy"},{icon:e.jsx(h,{}),label:"Reply"},{icon:e.jsx(le,{}),label:"Reply in thread"},{icon:e.jsx(me,{}),label:"Translate"},{icon:e.jsx(g,{}),label:"Delete"}],ue=[{icon:e.jsx(ge,{}),label:"Info"},{icon:e.jsx(a,{}),label:"Copy"},{icon:e.jsx(h,{}),label:"Reply"},{icon:e.jsx(xe,{}),label:"Edit"},{icon:e.jsx(le,{}),label:"Reply in thread"},{icon:e.jsx(me,{}),label:"Translate"},{icon:e.jsx(g,{}),label:"Delete"}],be=[{icon:e.jsx(a,{}),label:"Copy"},{icon:e.jsx(he,{}),label:"Forward"},{icon:e.jsx(g,{}),label:"Delete",destructive:!0}],s={args:{items:de,open:!0,width:160}},r={args:{items:ue,open:!0,width:180}},c={args:{items:be,open:!0,width:160}},i={args:{items:ue,open:!0,width:200}},l={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",gap:"var(--cometchat-spacing-8)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:b,children:"Default"}),e.jsxs("div",{className:"context-menu",style:{width:160},children:[e.jsxs("button",{className:"context-menu__item context-menu__item--first",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(a,{})}),e.jsx("span",{className:"context-menu__item-label",children:"Copy"})]}),e.jsxs("button",{className:"context-menu__item",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(h,{})}),e.jsx("span",{className:"context-menu__item-label",children:"Reply"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:b,children:"Hover"}),e.jsxs("div",{className:"context-menu",style:{width:160},children:[e.jsxs("button",{className:"context-menu__item context-menu__item--first",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(a,{})}),e.jsx("span",{className:"context-menu__item-label",children:"Copy"})]}),e.jsxs("button",{className:"context-menu__item context-menu__item--hover-preview",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(h,{})}),e.jsx("span",{className:"context-menu__item-label",children:"Reply"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:b,children:"Destructive"}),e.jsxs("div",{className:"context-menu",style:{width:160},children:[e.jsxs("button",{className:"context-menu__item context-menu__item--first",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(a,{})}),e.jsx("span",{className:"context-menu__item-label",children:"Copy"})]}),e.jsxs("button",{className:"context-menu__item context-menu__item--destructive",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(g,{})}),e.jsx("span",{className:"context-menu__item-label",children:"Delete"})]})]})]})]})},m={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Trigger button (kebab icon)"}),e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:[e.jsx(x,{}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-neutral-color-500)"},children:"Default"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"In context — appears on message hover"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:{background:"var(--cometchat-neutral-color-100)",borderRadius:"var(--cometchat-radius-3)",padding:"8px 12px",fontSize:"14px",color:"var(--cometchat-neutral-color-900)"},children:"Yes, it's available."}),e.jsx(x,{})]})]})]})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(j,{title:"HTML",children:e.jsx(f,{language:"HTML",code:`<!-- Context Menu -->
<div class="context-menu" style="width: 160px">
  <button class="context-menu__item context-menu__item--first" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Copy</span>
  </button>
  <button class="context-menu__item" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Reply</span>
  </button>
  <button class="context-menu__item context-menu__item--destructive" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Delete</span>
  </button>
</div>

<!-- Trigger button (kebab icon) -->
<button class="context-menu-trigger" type="button">
  <!-- three-dot SVG -->
</button>`})}),e.jsx(j,{title:"CSS (CometChat Tokens)",children:e.jsx(f,{language:"CSS",code:`.context-menu {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-2);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.context-menu__item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  height: 40px;
  background: var(--cometchat-background-color-01);
  font-size: 14px;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.context-menu__item--first {
  height: 44px;
}

.context-menu__item:hover {
  background: var(--cometchat-background-color-02);
}

.context-menu__item--destructive {
  color: var(--cometchat-error-color);
}

.context-menu__item--destructive:hover {
  background: var(--cometchat-background-color-error);
}

.context-menu__item-icon {
  width: 24px;
  height: 24px;
  color: var(--cometchat-icon-color-tertiary);
}

.context-menu-trigger {
  width: 32px;
  height: 32px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
  color: var(--cometchat-text-color-secondary);
  cursor: pointer;
}

.context-menu-trigger:hover {
  background: var(--cometchat-background-color-02);
  box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1);
}`})})]})},u={args:{items:de,open:!0,width:160},parameters:{docs:{disable:!0}}},b={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)",textAlign:"center"},f=({language:t,code:o})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:o})})]});function j({title:t,children:o}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t}),o]})}var S,C,w,N,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: receivedMessageItems,
    open: true,
    width: 160
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:"Received message context menu — exact match to Figma node 4090:878265.",...(k=(N=s.parameters)==null?void 0:N.docs)==null?void 0:k.description}}};var I,M,T,D,R;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: sentMessageItems,
    open: true,
    width: 180
  }
}`,...(T=(M=r.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"Sent message context menu — exact match to Figma node 4090:878304. Includes Info, Edit, and all actions.",...(R=(D=r.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};var z,V,W,L,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: minimalItems,
    open: true,
    width: 160
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"Minimal context menu with fewer options.",...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.description}}};var F,G,U,H,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: sentMessageItems,
    open: true,
    width: 200
  }
}`,...(U=(G=i.parameters)==null?void 0:G.docs)==null?void 0:U.source},description:{story:"Custom width (200px) for longer labels.",...(B=(H=i.parameters)==null?void 0:H.docs)==null?void 0:B.description}}};var q,E,P,Y,$;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-10)",
    display: "flex",
    gap: "var(--cometchat-spacing-8)",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
      <div>
        <div style={stateLabelStyle}>Default</div>
        <div className="context-menu" style={{
        width: 160
      }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label">Copy</span>
          </button>
          <button className="context-menu__item" type="button">
            <span className="context-menu__item-icon"><ReplyIcon /></span>
            <span className="context-menu__item-label">Reply</span>
          </button>
        </div>
      </div>

      <div>
        <div style={stateLabelStyle}>Hover</div>
        <div className="context-menu" style={{
        width: 160
      }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label">Copy</span>
          </button>
          <button className="context-menu__item context-menu__item--hover-preview" type="button">
            <span className="context-menu__item-icon"><ReplyIcon /></span>
            <span className="context-menu__item-label">Reply</span>
          </button>
        </div>
      </div>

      <div>
        <div style={stateLabelStyle}>Destructive</div>
        <div className="context-menu" style={{
        width: 160
      }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label">Copy</span>
          </button>
          <button className="context-menu__item context-menu__item--destructive" type="button">
            <span className="context-menu__item-icon"><DeleteIcon /></span>
            <span className="context-menu__item-label">Delete</span>
          </button>
        </div>
      </div>
    </div>
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:"Visual demonstration of item states.",...($=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};var O,X,J,K,Q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)"
      }}>
          Trigger button (kebab icon)
        </div>
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-4)",
        alignItems: "center"
      }}>
          <ContextMenuTrigger />
          <span style={{
          fontSize: "12px",
          color: "var(--cometchat-neutral-color-500)"
        }}>Default</span>
        </div>
      </div>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)"
      }}>
          In context — appears on message hover
        </div>
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--cometchat-spacing-2)"
      }}>
          <div style={{
          background: "var(--cometchat-neutral-color-100)",
          borderRadius: "var(--cometchat-radius-3)",
          padding: "8px 12px",
          fontSize: "14px",
          color: "var(--cometchat-neutral-color-900)"
        }}>
            Yes, it's available.
          </div>
          <ContextMenuTrigger />
        </div>
      </div>
    </div>
}`,...(J=(X=m.parameters)==null?void 0:X.docs)==null?void 0:J.source},description:{story:"The three-dot trigger button that opens the context menu. Shown on message hover.",...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Z,ee,te,ne,oe;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Context Menu -->
<div class="context-menu" style="width: 160px">
  <button class="context-menu__item context-menu__item--first" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Copy</span>
  </button>
  <button class="context-menu__item" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Reply</span>
  </button>
  <button class="context-menu__item context-menu__item--destructive" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Delete</span>
  </button>
</div>

<!-- Trigger button (kebab icon) -->
<button class="context-menu-trigger" type="button">
  <!-- three-dot SVG -->
</button>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.context-menu {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-2);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.context-menu__item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  height: 40px;
  background: var(--cometchat-background-color-01);
  font-size: 14px;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.context-menu__item--first {
  height: 44px;
}

.context-menu__item:hover {
  background: var(--cometchat-background-color-02);
}

.context-menu__item--destructive {
  color: var(--cometchat-error-color);
}

.context-menu__item--destructive:hover {
  background: var(--cometchat-background-color-error);
}

.context-menu__item-icon {
  width: 24px;
  height: 24px;
  color: var(--cometchat-icon-color-tertiary);
}

.context-menu-trigger {
  width: 32px;
  height: 32px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
  color: var(--cometchat-text-color-secondary);
  cursor: pointer;
}

.context-menu-trigger:hover {
  background: var(--cometchat-background-color-02);
  box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1);
}\`} />
      </UsageSection>
    </div>
}`,...(te=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"HTML & CSS usage reference for the Context Menu component.",...(oe=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var ae,se,re,ce,ie;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    items: receivedMessageItems,
    open: true,
    width: 160
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(re=(se=u.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"Interactive playground — use the controls panel to configure the Context Menu.",...(ie=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:ie.description}}};const je=["ReceivedMessage","SentMessage","Minimal","CustomWidth","States","Trigger","Usage","Playground"];export{i as CustomWidth,c as Minimal,u as Playground,s as ReceivedMessage,r as SentMessage,l as States,m as Trigger,d as Usage,je as __namedExportsOrder,fe as default};
