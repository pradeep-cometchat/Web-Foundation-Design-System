import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as B}from"./T-B-X7QtOX.js";import{I as E}from"./InfoSelectionDialog-CHBMqELZ.js";import{a as U}from"./avatars-DeYFvwHw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./runtime-BcbsTeSr.js";const I={title:"Base Components/Dialog/Info Selection Dialogs/Transfer Ownership",component:E,parameters:{layout:"centered"},decorators:[o=>e.jsx(D,{children:e.jsx(o,{})})]};function D({children:o}){return e.jsxs("div",{className:"dialog-story-inline",children:[e.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),o]})}const d=U["Male Avatar"],a=o=>{var n;return((n=d.find(T=>T.name===o))==null?void 0:n.imageUrl)??d[0].imageUrl},l=[{name:"Alex Mason",role:"Admin",selected:!0,avatar:a("Ben Scott")},{name:"Andrew Joseph",role:"Admin",avatar:a("Chris Nolan")},{name:"Avery Quinn",role:"Moderator",avatar:a("David Miller")},{name:"Brian Michael",avatar:a("Brian Michael")},{name:"Cameron Lee",avatar:a("Leo Martin")},{name:"Charles Dean",avatar:a("Michael Scott")}],t={args:{variant:"transferOwnership",members:l}},r={name:"No Selection",args:{variant:"transferOwnership",members:l.map(o=>({...o,selected:!1}))}},i={name:"Moderator Selected",args:{variant:"transferOwnership",members:l.map(o=>({...o,selected:o.name==="Avery Quinn"}))}},c={args:{variant:"transferOwnership",open:!0,members:l},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"}}},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(m,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<div class="info-selection-dialog__overlay">
  <div class="info-selection-dialog">
    <div class="info-selection-dialog__header">
      <h2 class="info-selection-dialog__title">Dialog Title</h2>
      <button class="info-selection-dialog__close">×</button>
    </div>
    <div class="info-selection-dialog__body">
      <!-- Content: member list, alerts, selections -->
    </div>
    <div class="info-selection-dialog__footer">
      <button class="info-selection-dialog__btn--cancel">Cancel</button>
      <button class="info-selection-dialog__btn--confirm">Confirm</button>
    </div>
  </div>
</div>`})}),e.jsx(m,{title:"CSS (CometChat Tokens)",children:e.jsx(g,{language:"CSS",code:`.info-selection-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.info-selection-dialog {
  width: 420px;
  max-height: 80vh;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.info-selection-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.info-selection-dialog__body {
  flex: 1;
  overflow-y: auto;
  padding: var(--cometchat-spacing-4);
}

.info-selection-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.info-selection-dialog__btn--confirm {
  flex: 1;
  height: 40px;
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-primary-button-text);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}`})})]})};function m({title:o,children:n}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8,paddingBottom:8,borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(B,{children:o})}),n]})}function g({language:o,code:n}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:12,overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:14,fontFamily:"var(--cometchat-font-family)",fontSize:12,lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:n})})]})}var p,f,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "transferOwnership",
    members: MEMBERS
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var u,v,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "No Selection",
  args: {
    variant: "transferOwnership",
    members: MEMBERS.map(m => ({
      ...m,
      selected: false
    }))
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,_,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Moderator Selected",
  args: {
    variant: "transferOwnership",
    members: MEMBERS.map(m => ({
      ...m,
      selected: m.name === "Avery Quinn"
    }))
  }
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,M,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "transferOwnership",
    open: true,
    members: MEMBERS
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    open: {
      control: "boolean"
    }
  }
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var w,C,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<div class="info-selection-dialog__overlay">
  <div class="info-selection-dialog">
    <div class="info-selection-dialog__header">
      <h2 class="info-selection-dialog__title">Dialog Title</h2>
      <button class="info-selection-dialog__close">×</button>
    </div>
    <div class="info-selection-dialog__body">
      <!-- Content: member list, alerts, selections -->
    </div>
    <div class="info-selection-dialog__footer">
      <button class="info-selection-dialog__btn--cancel">Cancel</button>
      <button class="info-selection-dialog__btn--confirm">Confirm</button>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.info-selection-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.info-selection-dialog {
  width: 420px;
  max-height: 80vh;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.info-selection-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.info-selection-dialog__body {
  flex: 1;
  overflow-y: auto;
  padding: var(--cometchat-spacing-4);
}

.info-selection-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.info-selection-dialog__btn--confirm {
  flex: 1;
  height: 40px;
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-primary-button-text);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}\`} />
      </UsageSection>
    </div>
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const W=["Default","NoSelection","ModeratorSelected","Playground","Usage"];export{t as Default,i as ModeratorSelected,r as NoSelection,c as Playground,s as Usage,W as __namedExportsOrder,I as default};
