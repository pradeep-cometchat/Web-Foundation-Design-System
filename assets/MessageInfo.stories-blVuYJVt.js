import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as W}from"./InfoSelectionDialog-BqUrZ32S.js";import{a as B}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=B["Female Avatar"],g=B["Male Avatar"],Y={title:"Base Components/Dialog/Info Selection Dialogs/Message Info",component:W,parameters:{layout:"centered"},decorators:[a=>e.jsx(F,{children:e.jsx(a,{})})]};function F({children:a}){return e.jsxs("div",{className:"dialog-story-inline",children:[e.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),a]})}const o={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"24/8/2024, 5:02 pm"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}]}},r={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"---"},{label:"Delivered",timestamp:"---"}]}},s={name:"Delivered Only",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"---"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}]}},i={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoError:`Looks like something went wrong.
Please try again.`}},t={name:"Group Message Info",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:g[6].imageUrl,readTimestamp:"22 Apr, 01:36 pm",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:n[8].imageUrl,readTimestamp:"28 Apr, 01:51 pm",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:n[11].imageUrl,readTimestamp:"05 May, 08:35 pm",deliveredTimestamp:"05 May, 08:35 pm"}]}},m={name:"Group — Partially Read",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:g[6].imageUrl,readTimestamp:"22 Apr, 01:36 pm",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:n[8].imageUrl,readTimestamp:"---",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:n[11].imageUrl,readTimestamp:"---",deliveredTimestamp:"05 May, 08:35 pm"}]}},l={name:"Group — Unread",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:g[6].imageUrl,readTimestamp:"---",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:n[8].imageUrl,readTimestamp:"---",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:n[11].imageUrl,readTimestamp:"---",deliveredTimestamp:"---"}]}},d={args:{variant:"messageInfo",open:!0,messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"24/8/2024, 5:02 pm"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}],messageInfoError:""},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"},messagePreview:{control:"text"},messageInfoError:{control:"text"}}};function v({title:a,children:p}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:a}),p]})}function f({language:a,code:p}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:p})})]})}const c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(v,{title:"HTML",children:e.jsx(f,{language:"HTML",code:`<div class="info-dialog__overlay">
  <div class="info-dialog">
    <div class="info-dialog__header">
      <h2 class="info-dialog__title">Message Info</h2>
      <button class="info-dialog__close">
        <!-- Close icon SVG -->
      </button>
    </div>
    <div class="info-dialog__body">
      <div class="info-dialog__message-preview">
        <span class="info-dialog__message-bubble">Thanks! Looks good.</span>
      </div>
      <div class="info-dialog__info-list">
        <div class="info-dialog__info-item">
          <span class="info-dialog__info-label">Read</span>
          <span class="info-dialog__info-value">24/8/2024, 5:02 pm</span>
        </div>
        <div class="info-dialog__info-item">
          <span class="info-dialog__info-label">Delivered</span>
          <span class="info-dialog__info-value">24/8/2024, 4:56 pm</span>
        </div>
      </div>
    </div>
  </div>
</div>`})}),e.jsx(v,{title:"CSS (CometChat Tokens)",children:e.jsx(f,{language:"CSS",code:`.info-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.info-dialog {
  width: 400px;
  max-height: 680px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
}

.info-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4) var(--cometchat-spacing-6);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.info-dialog__title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.info-dialog__close {
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-secondary);
  cursor: pointer;
}

.info-dialog__body {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.info-dialog__message-bubble {
  background: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
}

.info-dialog__info-item {
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-1);
  padding: var(--cometchat-spacing-3) 0;
}`})})]})};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [{
      label: "Read",
      timestamp: "24/8/2024, 5:02 pm"
    }, {
      label: "Delivered",
      timestamp: "24/8/2024, 4:56 pm"
    }]
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,_,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [{
      label: "Read",
      timestamp: "---"
    }, {
      label: "Delivered",
      timestamp: "---"
    }]
  }
}`,...(y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var T,k,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Delivered Only",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [{
      label: "Read",
      timestamp: "---"
    }, {
      label: "Delivered",
      timestamp: "24/8/2024, 4:56 pm"
    }]
  }
}`,...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var w,U,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoError: "Looks like something went wrong.\\nPlease try again."
  }
}`,...(S=(U=i.parameters)==null?void 0:U.docs)==null?void 0:S.source}}};var M,A,P;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Group Message Info",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [{
      name: "Andrew Joseph",
      avatar: male[6].imageUrl,
      readTimestamp: "22 Apr, 01:36 pm",
      deliveredTimestamp: "22 Apr, 12:15 pm"
    }, {
      name: "Nancy Grace",
      avatar: female[8].imageUrl,
      readTimestamp: "28 Apr, 01:51 pm",
      deliveredTimestamp: "28 Apr, 01:51 pm"
    }, {
      name: "Susan Marie",
      avatar: female[11].imageUrl,
      readTimestamp: "05 May, 08:35 pm",
      deliveredTimestamp: "05 May, 08:35 pm"
    }]
  }
}`,...(P=(A=t.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var L,j,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Group — Partially Read",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [{
      name: "Andrew Joseph",
      avatar: male[6].imageUrl,
      readTimestamp: "22 Apr, 01:36 pm",
      deliveredTimestamp: "22 Apr, 12:15 pm"
    }, {
      name: "Nancy Grace",
      avatar: female[8].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "28 Apr, 01:51 pm"
    }, {
      name: "Susan Marie",
      avatar: female[11].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "05 May, 08:35 pm"
    }]
  }
}`,...(D=(j=m.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var G,C,R;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Group — Unread",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [{
      name: "Andrew Joseph",
      avatar: male[6].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "22 Apr, 12:15 pm"
    }, {
      name: "Nancy Grace",
      avatar: female[8].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "28 Apr, 01:51 pm"
    }, {
      name: "Susan Marie",
      avatar: female[11].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "---"
    }]
  }
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var z,E,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    open: true,
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [{
      label: "Read",
      timestamp: "24/8/2024, 5:02 pm"
    }, {
      label: "Delivered",
      timestamp: "24/8/2024, 4:56 pm"
    }],
    messageInfoError: ""
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    open: {
      control: "boolean"
    },
    messagePreview: {
      control: "text"
    },
    messageInfoError: {
      control: "text"
    }
  }
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var J,H,O;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<div class="info-dialog__overlay">
  <div class="info-dialog">
    <div class="info-dialog__header">
      <h2 class="info-dialog__title">Message Info</h2>
      <button class="info-dialog__close">
        <!-- Close icon SVG -->
      </button>
    </div>
    <div class="info-dialog__body">
      <div class="info-dialog__message-preview">
        <span class="info-dialog__message-bubble">Thanks! Looks good.</span>
      </div>
      <div class="info-dialog__info-list">
        <div class="info-dialog__info-item">
          <span class="info-dialog__info-label">Read</span>
          <span class="info-dialog__info-value">24/8/2024, 5:02 pm</span>
        </div>
        <div class="info-dialog__info-item">
          <span class="info-dialog__info-label">Delivered</span>
          <span class="info-dialog__info-value">24/8/2024, 4:56 pm</span>
        </div>
      </div>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.info-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.info-dialog {
  width: 400px;
  max-height: 680px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
}

.info-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4) var(--cometchat-spacing-6);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.info-dialog__title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.info-dialog__close {
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-secondary);
  cursor: pointer;
}

.info-dialog__body {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.info-dialog__message-bubble {
  background: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
}

.info-dialog__info-item {
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-1);
  padding: var(--cometchat-spacing-3) 0;
}\`} />
      </UsageSection>
    </div>
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const Z=["Default","Unread","DeliveredOnly","Error","GroupMessageInfo","GroupPartiallyRead","GroupUnread","Playground","Usage"];export{o as Default,s as DeliveredOnly,i as Error,t as GroupMessageInfo,m as GroupPartiallyRead,l as GroupUnread,d as Playground,r as Unread,c as Usage,Z as __namedExportsOrder,Y as default};
