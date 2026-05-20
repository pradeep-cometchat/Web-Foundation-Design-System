import{j as e}from"./jsx-runtime-BYYWji4R.js";import{A as pe,C as p,P as m,V as me,a as ue,D as ve,b as _e,c as be,d as ge}from"./icons-DVPvxVxk.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const De={title:"Base Components/Action Sheet",component:pe,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A popup overlay presenting a list of contextual actions. Used for attachment menus,\nmessage actions, and any context where the user needs to pick from a set of options.\nAppears anchored to a trigger element with elevation and rounded corners.\n\n**Anatomy:** Container (radius-2xl, shadow-lg) → Action Items (icon + label, 44px height)\n\n**Icons:** Filled SVG style in extended-primary-600 color. Destructive items use error-500.\n\n**Foundation tokens used:**\n- Background: `--color-white`\n- Border: `--color-neutral-100`\n- Border radius: `--radius-2xl` (16px)\n- Shadow: `--shadow-lg`\n- Item padding: `--space-3` / `--space-4` (12px / 16px)\n- Icon-label gap: `--space-2` (8px)\n- Text: `--font-size-2` (14px), `--line-height-body` (20px), `--font-weight-regular`\n- Icon color: `--color-ep-600` (#6852d6)\n- Hover: `--color-neutral-50`\n- Active: `--color-neutral-100`\n- Destructive: `--color-error-500`\n- Focus ring: `--focus-ring-xs`"}}},argTypes:{items:{control:!1,description:"Array of action items with icon (ReactNode), label, and optional onClick/destructive."},open:{control:"boolean",description:"Whether the action sheet is visible."},width:{control:{type:"number",min:180,max:400,step:10},description:"Width of the action sheet in pixels."},title:{control:"text",description:"Optional title displayed at the top."},onClose:{control:!1,description:"Callback when the sheet is dismissed."}}},b=[{icon:e.jsx(p,{}),label:"Camera"},{icon:e.jsx(m,{}),label:"Attach Image"},{icon:e.jsx(me,{}),label:"Attach Video"},{icon:e.jsx(ue,{}),label:"Attach Audio"},{icon:e.jsx(ve,{}),label:"Attach Document"},{icon:e.jsx(_e,{}),label:"Poll"},{icon:e.jsx(be,{}),label:"Collaborative Whiteboard"},{icon:e.jsx(ge,{}),label:"Collaborative Document"}],xe=[{icon:e.jsx(we,{}),label:"Reply"},{icon:e.jsx(ye,{}),label:"Copy Message"},{icon:e.jsx(fe,{}),label:"Forward"},{icon:e.jsx(u,{}),label:"Edit Message"},{icon:e.jsx(je,{}),label:"Pin Message"},{icon:e.jsx(h,{}),label:"Delete Message",destructive:!0}],he=[{icon:e.jsx(u,{}),label:"Edit"},{icon:e.jsx(h,{}),label:"Delete",destructive:!0}],t={args:{items:b,open:!0,width:244}},n={args:{items:xe,open:!0,width:244}},s={args:{items:he,open:!0,width:244,title:"Actions"}},a={args:{items:he,open:!0,width:244}},o={args:{items:b,open:!0,width:320}},i={args:{items:[{icon:e.jsx(h,{}),label:"Delete Message",destructive:!0},{icon:e.jsx(Ce,{}),label:"Block User",destructive:!0},{icon:e.jsx(Ne,{}),label:"Report",destructive:!0}],open:!0,width:244,title:"Danger Zone"}},r={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-8)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Default"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(p,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Camera"})]}),e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(m,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Attach Image"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Hover"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(p,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Camera"})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--hover-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(m,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Attach Image"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Active"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(p,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Camera"})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--active-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(m,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Attach Image"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Destructive"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(u,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Edit"})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--destructive",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(h,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Delete"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:"Destructive Hover"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(u,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Edit"})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--destructive action-sheet__item--hover-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(h,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Delete"})]})]})]})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(x,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Action Sheet -->
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
</div>`})}),e.jsx(x,{title:"CSS (Foundation Variables)",children:e.jsx(g,{language:"CSS",code:`.action-sheet {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.action-sheet__title {
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-border-light);
}

.action-sheet__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  height: 44px;
  background: var(--color-bg-01);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.action-sheet__item:hover {
  background: var(--color-bg-02);
}

.action-sheet__item:active {
  background: var(--color-bg-03);
}

.action-sheet__item--destructive {
  color: var(--color-error-500);
}

.action-sheet__item--destructive:hover {
  background: var(--color-error-25);
}

.action-sheet__item-icon {
  width: 24px;
  height: 24px;
  color: var(--color-ep-600);
}

.action-sheet__item--destructive .action-sheet__item-icon {
  color: var(--color-error-500);
}`})})]})},l={args:{items:b,open:!0,width:244,title:""},parameters:{docs:{disable:!0}}},d={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)",marginBottom:"var(--space-2)",textAlign:"center"};function we(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z",fill:"currentColor"})})}function ye(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9 18C8.45 18 7.979 17.804 7.587 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.587 2.587C7.979 2.196 8.45 2 9 2H18C18.55 2 19.021 2.196 19.413 2.587C19.804 2.979 20 3.45 20 4V16C20 16.55 19.804 17.021 19.413 17.413C19.021 17.804 18.55 18 18 18H9ZM5 22C4.45 22 3.979 21.804 3.587 21.413C3.196 21.021 3 20.55 3 20V6H5V20H16V22H5Z",fill:"currentColor"})})}function fe(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14 9V5L21 12L14 19V14.9C9 14.9 5.5 16.5 3 20C4 15 7 10 14 9Z",fill:"currentColor"})})}function u(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3 21V16.75L16.2 3.575C16.4 3.392 16.621 3.25 16.863 3.15C17.104 3.05 17.358 3 17.625 3C17.892 3 18.15 3.05 18.4 3.15C18.65 3.25 18.867 3.4 19.05 3.6L20.425 5C20.625 5.183 20.771 5.4 20.863 5.65C20.954 5.9 21 6.15 21 6.4C21 6.667 20.954 6.921 20.863 7.163C20.771 7.404 20.625 7.625 20.425 7.825L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5L16.2 6.4L17.6 7.8Z",fill:"currentColor"})})}function je(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16 12V4H17C17.283 4 17.521 3.904 17.713 3.713C17.904 3.521 18 3.283 18 3C18 2.717 17.904 2.479 17.713 2.287C17.521 2.096 17.283 2 17 2H7C6.717 2 6.479 2.096 6.287 2.287C6.096 2.479 6 2.717 6 3C6 3.283 6.096 3.521 6.287 3.713C6.479 3.904 6.717 4 7 4H8V12L6 14V16H11V22L12 23L13 22V16H18V14L16 12Z",fill:"currentColor"})})}function h(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7 21C6.45 21 5.979 20.804 5.587 20.413C5.196 20.021 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.413 20.413C18.021 20.804 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z",fill:"currentColor"})})}function Ce(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z",fill:"currentColor"})})}function Ne(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z",fill:"currentColor"})})}const g=({language:v,code:_})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:v})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:_})})]});function x({title:v,children:_}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:v}),_]})}var w,y,f,j,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: attachmentItems,
    open: true,
    width: 244
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"The standard attachment action sheet as seen in the message composer. Eight options with filled icons in the primary color.",...(C=(j=t.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var N,S,I,V,A;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: messageActions,
    open: true,
    width: 244
  }
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source},description:{story:'Contextual actions for a message. Includes a destructive "Delete" action rendered in error color.',...(A=(V=n.parameters)==null?void 0:V.docs)==null?void 0:A.description}}};var D,H,L,M,k;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: minimalItems,
    open: true,
    width: 244,
    title: "Actions"
  }
}`,...(L=(H=s.parameters)==null?void 0:H.docs)==null?void 0:L.source},description:{story:"An optional title can be displayed at the top to provide context about the available actions.",...(k=(M=s.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};var B,z,W,Z,E;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: minimalItems,
    open: true,
    width: 244
  }
}`,...(W=(z=a.parameters)==null?void 0:z.docs)==null?void 0:W.source},description:{story:"Action sheets can contain as few as two items. Useful for simple edit/delete patterns.",...(E=(Z=a.parameters)==null?void 0:Z.docs)==null?void 0:E.description}}};var T,P,U,G,R;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: attachmentItems,
    open: true,
    width: 320
  }
}`,...(U=(P=o.parameters)==null?void 0:P.docs)==null?void 0:U.source},description:{story:"The width can be adjusted. Default is 244px. Here shown at 320px for longer labels.",...(R=(G=o.parameters)==null?void 0:G.docs)==null?void 0:R.description}}};var F,O,X,q,J;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(X=(O=i.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"Destructive-only variant showing how error styling applies to all items.",...(J=(q=i.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var K,Q,Y,$,ee;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-10)",
    display: "flex",
    gap: "var(--space-8)",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
      {/* Default */}
      <div>
        <div style={stateLabelStyle}>Default</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Hover */}
      <div>
        <div style={stateLabelStyle}>Hover</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item action-sheet__item--hover-preview" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Active */}
      <div>
        <div style={stateLabelStyle}>Active</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item action-sheet__item--active-preview" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Destructive */}
      <div>
        <div style={stateLabelStyle}>Destructive</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><EditIcon /></span>
            <span className="action-sheet__item-label">Edit</span>
          </button>
          <button className="action-sheet__item action-sheet__item--destructive" type="button">
            <span className="action-sheet__item-icon"><DeleteIcon /></span>
            <span className="action-sheet__item-label">Delete</span>
          </button>
        </div>
      </div>

      {/* Destructive Hover */}
      <div>
        <div style={stateLabelStyle}>Destructive Hover</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><EditIcon /></span>
            <span className="action-sheet__item-label">Edit</span>
          </button>
          <button className="action-sheet__item action-sheet__item--destructive action-sheet__item--hover-preview" type="button">
            <span className="action-sheet__item-icon"><DeleteIcon /></span>
            <span className="action-sheet__item-label">Delete</span>
          </button>
        </div>
      </div>
    </div>
}`,...(Y=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:"Visual demonstration of all interactive states: default, hover, active, focus, and destructive.",...(ee=($=r.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,ne,se,ae,oe;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.action-sheet {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.action-sheet__title {
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-border-light);
}

.action-sheet__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  height: 44px;
  background: var(--color-bg-01);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.action-sheet__item:hover {
  background: var(--color-bg-02);
}

.action-sheet__item:active {
  background: var(--color-bg-03);
}

.action-sheet__item--destructive {
  color: var(--color-error-500);
}

.action-sheet__item--destructive:hover {
  background: var(--color-error-25);
}

.action-sheet__item-icon {
  width: 24px;
  height: 24px;
  color: var(--color-ep-600);
}

.action-sheet__item--destructive .action-sheet__item-icon {
  color: var(--color-error-500);
}\`} />
      </UsageSection>
    </div>
}`,...(se=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:se.source},description:{story:"HTML & CSS usage reference for the Action Sheet component.",...(oe=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var ie,re,ce,le,de;l.parameters={...l.parameters,docs:{...(ie=l.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: attachmentItems,
    open: true,
    width: 244,
    title: ""
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ce=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ce.source},description:{story:"Interactive playground — use the controls panel to configure the Action Sheet.",...(de=(le=l.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};const He=["Default","MessageActions","WithTitle","Minimal","CustomWidth","DestructiveActions","States","Usage","Playground"];export{o as CustomWidth,t as Default,i as DestructiveActions,n as MessageActions,a as Minimal,l as Playground,r as States,c as Usage,s as WithTitle,He as __namedExportsOrder,De as default};
