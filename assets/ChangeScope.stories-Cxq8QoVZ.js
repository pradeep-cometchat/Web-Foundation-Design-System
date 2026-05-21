import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as V}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W={owner:"Owner",admin:"Admin",moderator:"Moderator",participant:"Participant"};function g({selectedRole:n="moderator",roles:a=["owner","admin","moderator","participant"],open:q=!0,onCancel:z,onSave:p}){const[t,H]=V.useState(n);return q?e.jsx("div",{className:"change-scope",children:e.jsxs("div",{className:"change-scope__content",children:[e.jsx("div",{className:"change-scope__icon",children:e.jsx("span",{className:"change-scope__icon-inner",children:e.jsx(O,{})})}),e.jsxs("div",{className:"change-scope__text",children:[e.jsx("div",{className:"change-scope__title",children:"Change Scope"}),e.jsx("div",{className:"change-scope__description",children:"You can change roles to manage group permissions and responsibilities."})]}),e.jsx("div",{className:"change-scope__list",children:a.map(o=>e.jsxs("label",{className:`change-scope__item ${t===o?"change-scope__item--selected":""}`,children:[e.jsx("span",{className:`change-scope__radio ${t===o?"change-scope__radio--checked":""}`,children:t===o&&e.jsx("span",{className:"change-scope__radio-dot"})}),e.jsx("span",{className:"change-scope__item-label",children:W[o]}),e.jsx("input",{type:"radio",name:"scope-role",value:o,checked:t===o,onChange:()=>H(o),className:"change-scope__input"})]},o))}),e.jsxs("div",{className:"change-scope__buttons",children:[e.jsx("button",{type:"button",className:"change-scope__btn change-scope__btn--cancel",onClick:z,children:"Cancel"}),e.jsx("button",{type:"button",className:"change-scope__btn change-scope__btn--save",onClick:()=>p==null?void 0:p(t),children:"Save"})]})]})}):null}function O(){return e.jsx("svg",{viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19.9 26.258C18.767 26.278 17.669 26.13 16.606 25.812C15.543 25.494 14.621 24.944 13.839 24.162C13.146 23.469 12.615 22.684 12.246 21.806C11.877 20.928 11.693 20.003 11.693 19.031C11.693 18.646 11.716 18.276 11.762 17.921C11.808 17.566 11.893 17.213 12.019 16.862C12.127 16.539 12.118 16.219 11.994 15.902C11.87 15.585 11.663 15.363 11.373 15.235C11.063 15.107 10.754 15.11 10.448 15.244C10.142 15.379 9.935 15.608 9.827 15.931C9.66 16.431 9.532 16.934 9.443 17.441C9.353 17.947 9.308 18.467 9.308 19C9.308 20.295 9.556 21.532 10.054 22.71C10.551 23.888 11.254 24.931 12.162 25.839C13.126 26.836 14.27 27.553 15.596 27.989C16.922 28.425 18.28 28.653 19.67 28.673L18.281 30.062C18.045 30.298 17.924 30.574 17.918 30.891C17.911 31.207 18.032 31.49 18.281 31.739C18.53 31.987 18.809 32.112 19.119 32.112C19.429 32.112 19.709 31.987 19.958 31.739L23.081 28.616C23.442 28.254 23.623 27.832 23.623 27.35C23.623 26.868 23.442 26.446 23.081 26.085L19.958 22.962C19.722 22.726 19.446 22.604 19.129 22.598C18.812 22.592 18.53 22.713 18.281 22.962C18.032 23.21 17.908 23.49 17.908 23.8C17.908 24.11 18.032 24.39 18.281 24.639L19.9 26.258ZM18.089 11.712C19.222 11.712 20.325 11.871 21.398 12.189C22.471 12.507 23.399 13.057 24.181 13.839C24.873 14.531 25.404 15.316 25.773 16.194C26.142 17.072 26.327 17.997 26.327 18.969C26.327 19.354 26.304 19.724 26.258 20.079C26.212 20.434 26.126 20.787 26 21.139C25.892 21.462 25.901 21.787 26.025 22.114C26.149 22.441 26.356 22.668 26.646 22.796C26.956 22.924 27.265 22.924 27.571 22.796C27.877 22.668 28.085 22.442 28.193 22.119C28.359 21.619 28.487 21.108 28.577 20.585C28.667 20.062 28.712 19.533 28.712 19C28.712 17.705 28.473 16.469 27.996 15.291C27.519 14.112 26.817 13.059 25.889 12.131C24.904 11.133 23.749 10.422 22.423 9.996C21.097 9.57 19.74 9.358 18.35 9.358L19.769 7.939C19.985 7.703 20.096 7.426 20.102 7.11C20.108 6.793 19.987 6.51 19.739 6.262C19.49 6.013 19.21 5.889 18.9 5.889C18.59 5.889 18.31 6.013 18.062 6.262L14.939 9.385C14.577 9.746 14.396 10.168 14.396 10.65C14.396 11.132 14.577 11.554 14.939 11.916L18.062 15.039C18.298 15.275 18.574 15.396 18.891 15.402C19.207 15.408 19.49 15.287 19.739 15.039C19.987 14.79 20.112 14.51 20.112 14.2C20.112 13.89 19.987 13.61 19.739 13.362L18.089 11.712ZM19 38C16.374 38 13.906 37.501 11.595 36.502C9.283 35.503 7.272 34.149 5.562 32.439C3.851 30.728 2.497 28.717 1.498 26.406C0.499 24.094 0 21.626 0 19C0 16.374 0.499 13.906 1.498 11.595C2.497 9.283 3.851 7.272 5.562 5.562C7.272 3.851 9.283 2.497 11.595 1.498C13.906 0.499 16.374 0 19 0C21.626 0 24.094 0.499 26.406 1.498C28.717 2.497 30.728 3.851 32.439 5.562C34.149 7.272 35.503 9.283 36.502 11.595C37.501 13.906 38 16.374 38 19C38 21.626 37.501 24.094 36.502 26.406C35.503 28.717 34.149 30.728 32.439 32.439C30.728 34.149 28.717 35.503 26.406 36.502C24.094 37.501 21.626 38 19 38ZM19 35C23.467 35 27.25 33.45 30.35 30.35C33.45 27.25 35 23.467 35 19C35 14.533 33.45 10.75 30.35 7.65C27.25 4.55 23.467 3 19 3C14.533 3 10.75 4.55 7.65 7.65C4.55 10.75 3 14.533 3 19C3 23.467 4.55 27.25 7.65 30.35C10.75 33.45 14.533 35 19 35Z",fill:"currentColor"})})}try{g.displayName="ChangeScope",g.__docgenInfo={description:"",displayName:"ChangeScope",props:{selectedRole:{defaultValue:{value:"moderator"},description:"Currently selected role",name:"selectedRole",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"owner"'},{value:'"admin"'},{value:'"moderator"'},{value:'"participant"'}]}},roles:{defaultValue:{value:'["owner", "admin", "moderator", "participant"]'},description:"Available roles to choose from",name:"roles",required:!1,type:{name:"ScopeRole[] | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onCancel:{defaultValue:null,description:"Callback when cancel is clicked",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},onSave:{defaultValue:null,description:"Callback when save is clicked with the selected role",name:"onSave",required:!1,type:{name:"((role: ScopeRole) => void) | undefined"}}}}}catch{}const $={title:"Base Components/Dialog/Info Selection Dialogs/Change Scope",component:g,parameters:{layout:"centered"},argTypes:{selectedRole:{control:"select",options:["owner","admin","moderator","participant"]},open:{control:"boolean"}}},r={args:{selectedRole:"moderator",open:!0}},c={args:{selectedRole:"owner",open:!0}},i={args:{selectedRole:"admin",open:!0}},s={args:{selectedRole:"participant",open:!0}},l={name:"Limited Roles (Admin & Participant only)",args:{selectedRole:"admin",roles:["admin","participant"],open:!0}},d={args:{selectedRole:"moderator",open:!0},parameters:{docs:{disable:!0}}},m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(u,{title:"HTML",children:e.jsx(h,{language:"HTML",code:`<div class="info-selection-dialog__overlay">
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
</div>`})}),e.jsx(u,{title:"CSS (CometChat Tokens)",children:e.jsx(h,{language:"CSS",code:`.info-selection-dialog__overlay {
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
}`})})]})};function u({title:n,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8,paddingBottom:8,borderBottom:"1px solid var(--cometchat-border-color-default)"},children:n}),a]})}function h({language:n,code:a}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:12,overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:14,fontFamily:"var(--cometchat-font-family)",fontSize:12,lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]})}var f,v,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    selectedRole: "moderator",
    open: true
  }
}`,...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,_,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    selectedRole: "owner",
    open: true
  }
}`,...(x=(_=c.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var y,S,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    selectedRole: "admin",
    open: true
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,k,R;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    selectedRole: "participant",
    open: true
  }
}`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var N,L,T;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Limited Roles (Admin & Participant only)",
  args: {
    selectedRole: "admin",
    roles: ["admin", "participant"],
    open: true
  }
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var U,M,D;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    selectedRole: "moderator",
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(D=(M=d.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var P,A,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const F=["Default","OwnerSelected","AdminSelected","ParticipantSelected","LimitedRoles","Playground","Usage"];export{i as AdminSelected,r as Default,l as LimitedRoles,c as OwnerSelected,s as ParticipantSelected,d as Playground,m as Usage,F as __namedExportsOrder,$ as default};
