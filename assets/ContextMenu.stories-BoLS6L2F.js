import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as t}from"./T-C6nayWAE.js";import{C as me,a as v}from"./ContextMenu-DD7gLsvH.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ye={title:"Base Components/Context Menu",component:me,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A right-click or long-press context menu with grouped actions and icons.\nAppears anchored to a message or element with a compact list of actions.\n\n**Structure (from Figma node 4090:878265):**\n- Container: 160px wide, `--radius-md` (8px), shadow-lg, border `--color-neutral-100`\n- First item: 44px height, rest: 40px height\n- Item padding: 16px horizontal, 8px gap between icon and label\n- Icons: 24×24, color `#A1A1A1` (neutral-400)\n- Text: 14px, weight 400, line-height 1.2, color `--color-neutral-900`\n- Hover: `--color-neutral-50` (#fafafa) background\n- Destructive items: `--color-error` text and icon"}}},argTypes:{items:{control:!1,description:"Array of menu items with icon, label, and optional destructive flag."},open:{control:"boolean",description:"Whether the menu is visible."},width:{control:{type:"number",min:120,max:300,step:10},description:"Width of the menu in pixels."},onClose:{control:!1}}},n={fontSize:20,fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"};function o(){return e.jsx("span",{className:"icon-rounded",style:n,children:"content_copy"})}function p(){return e.jsx("span",{className:"icon-rounded",style:n,"data-icon-mirror":!0,children:"reply"})}function se(){return e.jsx("span",{className:"icon-rounded",style:n,children:"forum"})}function re(){return e.jsx("span",{className:"icon-rounded",style:n,children:"translate"})}function u(){return e.jsx("span",{className:"icon-rounded",style:n,children:"delete"})}function de(){return e.jsx("span",{className:"icon-rounded",style:n,children:"edit"})}function pe(){return e.jsx("span",{className:"icon-rounded",style:n,children:"forward"})}function ue(){return e.jsx("span",{className:"icon-rounded",style:n,children:"info"})}const ie=[{icon:e.jsx(o,{}),label:"Copy"},{icon:e.jsx(p,{}),label:"Reply"},{icon:e.jsx(se,{}),label:"Reply in thread"},{icon:e.jsx(re,{}),label:"Translate"},{icon:e.jsx(u,{}),label:"Delete"}],le=[{icon:e.jsx(ue,{}),label:"Info"},{icon:e.jsx(o,{}),label:"Copy"},{icon:e.jsx(p,{}),label:"Reply"},{icon:e.jsx(de,{}),label:"Edit"},{icon:e.jsx(se,{}),label:"Reply in thread"},{icon:e.jsx(re,{}),label:"Translate"},{icon:e.jsx(u,{}),label:"Delete"}],xe=[{icon:e.jsx(o,{}),label:"Copy"},{icon:e.jsx(pe,{}),label:"Forward"},{icon:e.jsx(u,{}),label:"Delete",destructive:!0}],a={args:{items:ie,open:!0,width:160}},c={args:{items:le,open:!0,width:180}},s={args:{items:xe,open:!0,width:160}},r={args:{items:le,open:!0,width:200}},i={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",gap:"var(--cometchat-spacing-8)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:g,children:e.jsx(t,{children:"Default"})}),e.jsxs("div",{className:"context-menu",style:{width:160},children:[e.jsxs("button",{className:"context-menu__item context-menu__item--first",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(o,{})}),e.jsx("span",{className:"context-menu__item-label",children:e.jsx(t,{children:"Copy"})})]}),e.jsxs("button",{className:"context-menu__item",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(p,{})}),e.jsx("span",{className:"context-menu__item-label",children:e.jsx(t,{children:"Reply"})})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:g,children:e.jsx(t,{children:"Hover"})}),e.jsxs("div",{className:"context-menu",style:{width:160},children:[e.jsxs("button",{className:"context-menu__item context-menu__item--first",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(o,{})}),e.jsx("span",{className:"context-menu__item-label",children:e.jsx(t,{children:"Copy"})})]}),e.jsxs("button",{className:"context-menu__item context-menu__item--hover-preview",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(p,{})}),e.jsx("span",{className:"context-menu__item-label",children:e.jsx(t,{children:"Reply"})})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:g,children:e.jsx(t,{children:"Destructive"})}),e.jsxs("div",{className:"context-menu",style:{width:160},children:[e.jsxs("button",{className:"context-menu__item context-menu__item--first",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(o,{})}),e.jsx("span",{className:"context-menu__item-label",children:e.jsx(t,{children:"Copy"})})]}),e.jsxs("button",{className:"context-menu__item context-menu__item--destructive",type:"button",children:[e.jsx("span",{className:"context-menu__item-icon",children:e.jsx(u,{})}),e.jsx("span",{className:"context-menu__item-label",children:e.jsx(t,{children:"Delete"})})]})]})]})]})},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(t,{children:"Trigger button (kebab icon)"})}),e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",alignItems:"center"},children:[e.jsx(v,{}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-neutral-color-500)"},children:e.jsx(t,{children:"Default"})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(t,{children:"In context — appears on message hover"})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:{background:"var(--cometchat-neutral-color-100)",borderRadius:"var(--cometchat-radius-3)",padding:"8px 12px",fontSize:"14px",color:"var(--cometchat-neutral-color-900)"},children:e.jsx(t,{children:"Yes, it's available."})}),e.jsx(v,{})]})]})]})},m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(_,{title:"HTML",children:e.jsx(b,{language:"HTML",code:`<!-- Context Menu -->
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
</button>`})}),e.jsx(_,{title:"CSS (CometChat Tokens)",children:e.jsx(b,{language:"CSS",code:`.context-menu {
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
}`})})]})},d={args:{items:ie,open:!0,width:160},parameters:{docs:{disable:!0}}},g={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)",textAlign:"center"},b=({language:x,code:h})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:x})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:h})})]});function _({title:x,children:h}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(t,{children:x})}),h]})}var y,f,j,S,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: receivedMessageItems,
    open: true,
    width: 160
  }
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source},description:{story:"Received message context menu — exact match to Figma node 4090:878265.",...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var w,N,C,k,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: sentMessageItems,
    open: true,
    width: 180
  }
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source},description:{story:"Sent message context menu — exact match to Figma node 4090:878304. Includes Info, Edit, and all actions.",...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.description}}};var M,R,D,z,W;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: minimalItems,
    open: true,
    width: 160
  }
}`,...(D=(R=s.parameters)==null?void 0:R.docs)==null?void 0:D.source},description:{story:"Minimal context menu with fewer options.",...(W=(z=s.parameters)==null?void 0:z.docs)==null?void 0:W.description}}};var L,U,V,G,H;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: sentMessageItems,
    open: true,
    width: 200
  }
}`,...(V=(U=r.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"Custom width (200px) for longer labels.",...(H=(G=r.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var A,B,F,E,P;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
        <div style={stateLabelStyle}><T>Default</T></div>
        <div className="context-menu" style={{
        width: 160
      }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label"><T>Copy</T></span>
          </button>
          <button className="context-menu__item" type="button">
            <span className="context-menu__item-icon"><ReplyIcon /></span>
            <span className="context-menu__item-label"><T>Reply</T></span>
          </button>
        </div>
      </div>

      <div>
        <div style={stateLabelStyle}><T>Hover</T></div>
        <div className="context-menu" style={{
        width: 160
      }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label"><T>Copy</T></span>
          </button>
          <button className="context-menu__item context-menu__item--hover-preview" type="button">
            <span className="context-menu__item-icon"><ReplyIcon /></span>
            <span className="context-menu__item-label"><T>Reply</T></span>
          </button>
        </div>
      </div>

      <div>
        <div style={stateLabelStyle}><T>Destructive</T></div>
        <div className="context-menu" style={{
        width: 160
      }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label"><T>Copy</T></span>
          </button>
          <button className="context-menu__item context-menu__item--destructive" type="button">
            <span className="context-menu__item-icon"><DeleteIcon /></span>
            <span className="context-menu__item-label"><T>Delete</T></span>
          </button>
        </div>
      </div>
    </div>
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source},description:{story:"Visual demonstration of item states.",...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};var Y,O,X,q,J;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
          <T>Trigger button (kebab icon)</T>
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
        }}><T>Default</T></span>
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
          <T>In context — appears on message hover</T>
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
            <T>Yes, it's available.</T>
          </div>
          <ContextMenuTrigger />
        </div>
      </div>
    </div>
}`,...(X=(O=l.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"The three-dot trigger button that opens the context menu. Shown on message hover.",...(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var K,Q,Z,$,ee;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"HTML & CSS usage reference for the Context Menu component.",...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,ne,oe,ae,ce;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"Interactive playground — use the controls panel to configure the Context Menu.",...(ce=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:ce.description}}};const fe=["ReceivedMessage","SentMessage","Minimal","CustomWidth","States","Trigger","Usage","Playground"];export{r as CustomWidth,s as Minimal,d as Playground,a as ReceivedMessage,c as SentMessage,i as States,l as Trigger,m as Usage,fe as __namedExportsOrder,ye as default};
