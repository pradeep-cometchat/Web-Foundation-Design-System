import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as t}from"./T-C6nayWAE.js";import{A as ue,C as v,P as b,V as xe,a as ge,D as ye,b as je,c as fe,d as Ne}from"./icons-BhpYzSaL.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Me={title:"Base Components/Action Sheet",component:ue,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A popup overlay presenting a list of contextual actions. Used for attachment menus,
message actions, and any context where the user needs to pick from a set of options.
Appears anchored to a trigger element with elevation and rounded corners.

**Anatomy:** Container (radius-4, shadow-lg) → Action Items (icon + label, 44px height)

**Icons:** Material Symbols Rounded in brand color. Destructive items use error color.`}}},argTypes:{items:{control:!1,description:"Array of action items with icon (ReactNode), label, and optional onClick/destructive."},open:{control:"boolean",description:"Whether the action sheet is visible."},width:{control:{type:"number",min:180,max:400,step:10},description:"Width of the action sheet in pixels."},title:{control:"text",description:"Optional title displayed at the top."},onClose:{control:!1,description:"Callback when the sheet is dismissed."}}},x=[{icon:e.jsx(v,{}),label:"Camera"},{icon:e.jsx(b,{}),label:"Attach Image"},{icon:e.jsx(xe,{}),label:"Attach Video"},{icon:e.jsx(ge,{}),label:"Attach Audio"},{icon:e.jsx(ye,{}),label:"Attach Document"},{icon:e.jsx(je,{}),label:"Poll"},{icon:e.jsx(fe,{}),label:"Collaborative Whiteboard"},{icon:e.jsx(Ne,{}),label:"Collaborative Document"}],_e=[{icon:e.jsx(we,{}),label:"Reply"},{icon:e.jsx(Se,{}),label:"Copy Message"},{icon:e.jsx(Ie,{}),label:"Forward"},{icon:e.jsx(g,{}),label:"Edit Message"},{icon:e.jsx(Ae,{}),label:"Pin Message"},{icon:e.jsx(a,{}),label:"Delete Message",destructive:!0}],y=[{icon:e.jsx(g,{}),label:"Edit"},{icon:e.jsx(a,{}),label:"Delete",destructive:!0}],i={args:{items:x,open:!0,width:244}},c={args:{items:_e,open:!0,width:244}},r={args:{items:y,open:!0,width:244,title:"Actions"}},l={args:{items:y,open:!0,width:244}},d={args:{items:x,open:!0,width:320}},m={args:{items:[{icon:e.jsx(a,{}),label:"Delete Message",destructive:!0},{icon:e.jsx(ve,{}),label:"Block User",destructive:!0},{icon:e.jsx(be,{}),label:"Report",destructive:!0}],open:!0,width:244,title:"Danger Zone"}},h={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",gap:"var(--cometchat-spacing-8)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:_,children:e.jsx(t,{children:"Default"})}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(v,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Camera"})})]}),e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(b,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Attach Image"})})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:_,children:e.jsx(t,{children:"Hover"})}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(v,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Camera"})})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--hover-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(b,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Attach Image"})})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:_,children:e.jsx(t,{children:"Active"})}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(v,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Camera"})})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--active-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(b,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Attach Image"})})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:_,children:e.jsx(t,{children:"Destructive"})}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(g,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Edit"})})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--destructive",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(a,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Delete"})})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:_,children:e.jsx(t,{children:"Destructive Hover"})}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(g,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Edit"})})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--destructive action-sheet__item--hover-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(a,{})}),e.jsx("span",{className:"action-sheet__item-label",children:e.jsx(t,{children:"Delete"})})]})]})]})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(f,{title:"HTML",children:e.jsx(j,{language:"HTML",code:`<!-- Action Sheet -->
<div class="action-sheet" style="width: 244px">
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Camera</span>
  </button>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Attach Image</span>
  </button>
  <button class="action-sheet__item action-sheet__item--destructive" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Delete</span>
  </button>
</div>

<!-- With title -->
<div class="action-sheet" style="width: 244px">
  <div class="action-sheet__title">Actions</div>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Edit</span>
  </button>
</div>`})}),e.jsx(f,{title:"CSS (CometChat Tokens)",children:e.jsx(j,{language:"CSS",code:`.action-sheet {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.action-sheet__title {
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  font-size: 12px;
  font-weight: 500;
  color: var(--cometchat-text-color-tertiary);
  text-transform: uppercase;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.action-sheet__item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  height: 44px;
  background: var(--cometchat-background-color-01);
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.action-sheet__item:hover {
  background: var(--cometchat-background-color-02);
}

.action-sheet__item:active {
  background: var(--cometchat-background-color-03);
}

.action-sheet__item--destructive {
  color: var(--cometchat-error-color);
}

.action-sheet__item--destructive:hover {
  background: var(--cometchat-background-color-error);
}

.action-sheet__item-icon {
  width: 24px;
  height: 24px;
  color: var(--cometchat-primary-color);
}

.action-sheet__item--destructive .action-sheet__item-icon {
  color: var(--cometchat-error-color);
}`})})]})},u={args:{open:!0,width:244,title:"",itemSet:"attachment"},argTypes:{open:{control:"boolean",description:"Whether the action sheet is visible."},width:{control:{type:"number",min:180,max:400,step:10},description:"Width in pixels."},title:{control:"text",description:"Optional title at the top."},itemSet:{control:"select",options:["attachment","messageActions","minimal","destructive"],description:"Predefined set of items to display."}},parameters:{docs:{disable:!0}},render:n=>{const o={attachment:x,messageActions:_e,minimal:y,destructive:[{icon:e.jsx(a,{}),label:"Delete Message",destructive:!0},{icon:e.jsx(ve,{}),label:"Block User",destructive:!0},{icon:e.jsx(be,{}),label:"Report",destructive:!0}]};return e.jsx(ue,{items:o[n.itemSet]||x,open:n.open,width:n.width,title:n.title||void 0})}},_={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)",textAlign:"center"},s={fontSize:24,fontVariationSettings:"'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"};function we(){return e.jsx("span",{className:"icon-rounded",style:s,"data-icon-mirror":!0,children:"reply"})}function Se(){return e.jsx("span",{className:"icon-rounded",style:s,children:"content_copy"})}function Ie(){return e.jsx("span",{className:"icon-rounded",style:s,children:"forward"})}function g(){return e.jsx("span",{className:"icon-rounded",style:s,children:"edit"})}function Ae(){return e.jsx("span",{className:"icon-rounded",style:s,children:"push_pin"})}function a(){return e.jsx("span",{className:"icon-rounded",style:s,children:"delete"})}function ve(){return e.jsx("span",{className:"icon-rounded",style:s,children:"block"})}function be(){return e.jsx("span",{className:"icon-rounded",style:s,children:"flag"})}const j=({language:n,code:o})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:o})})]});function f({title:n,children:o}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(t,{children:n})}),o]})}var N,w,S,I,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: attachmentItems,
    open: true,
    width: 244
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:"The standard attachment action sheet as seen in the message composer. Eight options with filled icons in the primary color.",...(A=(I=i.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var T,C,D,k,W;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: messageActions,
    open: true,
    width: 244
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:'Contextual actions for a message. Includes a destructive "Delete" action rendered in error color.',...(W=(k=c.parameters)==null?void 0:k.docs)==null?void 0:W.description}}};var M,R,E,P,H;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: minimalItems,
    open: true,
    width: 244,
    title: "Actions"
  }
}`,...(E=(R=r.parameters)==null?void 0:R.docs)==null?void 0:E.source},description:{story:"An optional title can be displayed at the top to provide context about the available actions.",...(H=(P=r.parameters)==null?void 0:P.docs)==null?void 0:H.description}}};var L,U,V,B,z;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: minimalItems,
    open: true,
    width: 244
  }
}`,...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"Action sheets can contain as few as two items. Useful for simple edit/delete patterns.",...(z=(B=l.parameters)==null?void 0:B.docs)==null?void 0:z.description}}};var G,F,O,Z,X;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: attachmentItems,
    open: true,
    width: 320
  }
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"The width can be adjusted. Default is 244px. Here shown at 320px for longer labels.",...(X=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:X.description}}};var q,J,K,Q,Y;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: <DeleteIcon />,
      label: "Delete Message",
      destructive: true
    }, {
      icon: <BlockIcon />,
      label: "Block User",
      destructive: true
    }, {
      icon: <ReportIcon />,
      label: "Report",
      destructive: true
    }],
    open: true,
    width: 244,
    title: "Danger Zone"
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Destructive-only variant showing how error styling applies to all items.",...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var $,ee,te,ne,se;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      {/* Default */}
      <div>
        <div style={stateLabelStyle}><T>Default</T></div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label"><T>Camera</T></span>
          </button>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label"><T>Attach Image</T></span>
          </button>
        </div>
      </div>

      {/* Hover */}
      <div>
        <div style={stateLabelStyle}><T>Hover</T></div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label"><T>Camera</T></span>
          </button>
          <button className="action-sheet__item action-sheet__item--hover-preview" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label"><T>Attach Image</T></span>
          </button>
        </div>
      </div>

      {/* Active */}
      <div>
        <div style={stateLabelStyle}><T>Active</T></div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label"><T>Camera</T></span>
          </button>
          <button className="action-sheet__item action-sheet__item--active-preview" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label"><T>Attach Image</T></span>
          </button>
        </div>
      </div>

      {/* Destructive */}
      <div>
        <div style={stateLabelStyle}><T>Destructive</T></div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><EditIcon /></span>
            <span className="action-sheet__item-label"><T>Edit</T></span>
          </button>
          <button className="action-sheet__item action-sheet__item--destructive" type="button">
            <span className="action-sheet__item-icon"><DeleteIcon /></span>
            <span className="action-sheet__item-label"><T>Delete</T></span>
          </button>
        </div>
      </div>

      {/* Destructive Hover */}
      <div>
        <div style={stateLabelStyle}><T>Destructive Hover</T></div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><EditIcon /></span>
            <span className="action-sheet__item-label"><T>Edit</T></span>
          </button>
          <button className="action-sheet__item action-sheet__item--destructive action-sheet__item--hover-preview" type="button">
            <span className="action-sheet__item-icon"><DeleteIcon /></span>
            <span className="action-sheet__item-label"><T>Delete</T></span>
          </button>
        </div>
      </div>
    </div>
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Visual demonstration of all interactive states: default, hover, active, focus, and destructive.",...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ae,oe,ie,ce,re;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Action Sheet -->
<div class="action-sheet" style="width: 244px">
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Camera</span>
  </button>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Attach Image</span>
  </button>
  <button class="action-sheet__item action-sheet__item--destructive" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Delete</span>
  </button>
</div>

<!-- With title -->
<div class="action-sheet" style="width: 244px">
  <div class="action-sheet__title">Actions</div>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Edit</span>
  </button>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.action-sheet {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.action-sheet__title {
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  font-size: 12px;
  font-weight: 500;
  color: var(--cometchat-text-color-tertiary);
  text-transform: uppercase;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.action-sheet__item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  height: 44px;
  background: var(--cometchat-background-color-01);
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.action-sheet__item:hover {
  background: var(--cometchat-background-color-02);
}

.action-sheet__item:active {
  background: var(--cometchat-background-color-03);
}

.action-sheet__item--destructive {
  color: var(--cometchat-error-color);
}

.action-sheet__item--destructive:hover {
  background: var(--cometchat-background-color-error);
}

.action-sheet__item-icon {
  width: 24px;
  height: 24px;
  color: var(--cometchat-primary-color);
}

.action-sheet__item--destructive .action-sheet__item-icon {
  color: var(--cometchat-error-color);
}\`} />
      </UsageSection>
    </div>
}`,...(ie=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:"HTML & CSS usage reference for the Action Sheet component.",...(re=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:re.description}}};var le,de,me,he,pe;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    open: true,
    width: 244,
    title: "",
    itemSet: "attachment"
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the action sheet is visible."
    },
    width: {
      control: {
        type: "number",
        min: 180,
        max: 400,
        step: 10
      },
      description: "Width in pixels."
    },
    title: {
      control: "text",
      description: "Optional title at the top."
    },
    itemSet: {
      control: "select",
      options: ["attachment", "messageActions", "minimal", "destructive"],
      description: "Predefined set of items to display."
    }
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  render: (args: any) => {
    const sets: Record<string, ActionSheetItem[]> = {
      attachment: attachmentItems,
      messageActions: messageActions,
      minimal: minimalItems,
      destructive: [{
        icon: <DeleteIcon />,
        label: "Delete Message",
        destructive: true
      }, {
        icon: <BlockIcon />,
        label: "Block User",
        destructive: true
      }, {
        icon: <ReportIcon />,
        label: "Report",
        destructive: true
      }]
    };
    return <ActionSheet items={sets[args.itemSet] || attachmentItems} open={args.open} width={args.width} title={args.title || undefined} />;
  }
}`,...(me=(de=u.parameters)==null?void 0:de.docs)==null?void 0:me.source},description:{story:"Interactive playground — use the controls panel to configure the Action Sheet.",...(pe=(he=u.parameters)==null?void 0:he.docs)==null?void 0:pe.description}}};const Re=["Default","MessageActions","WithTitle","Minimal","CustomWidth","DestructiveActions","States","Usage","Playground"];export{d as CustomWidth,i as Default,m as DestructiveActions,c as MessageActions,l as Minimal,u as Playground,h as States,p as Usage,r as WithTitle,Re as __namedExportsOrder,Me as default};
