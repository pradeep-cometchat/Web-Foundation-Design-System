import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as F}from"./InfoSelectionDialog-CItJn-0W.js";import{a as B}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=B["Female Avatar"],c=B["Male Avatar"],Y={title:"Base Components/Dialog/Info Selection Dialogs/Message Info",component:F,parameters:{layout:"centered"},decorators:[a=>e.jsx(V,{children:e.jsx(a,{})})]};function V({children:a}){return e.jsxs("div",{className:"dialog-story-inline",children:[e.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),a]})}const r={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"24/8/2024, 5:02 pm"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}]}},o={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"---"},{label:"Delivered",timestamp:"---"}]}},s={name:"Delivered Only",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"---"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}]}},i={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoError:`Looks like something went wrong.
Please try again.`}},t={name:"Group Message Info",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:c[6].imageUrl,readTimestamp:"22 Apr, 01:36 pm",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:n[8].imageUrl,readTimestamp:"28 Apr, 01:51 pm",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:n[11].imageUrl,readTimestamp:"05 May, 08:35 pm",deliveredTimestamp:"05 May, 08:35 pm"}]}},l={name:"Group — Partially Read",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:c[6].imageUrl,readTimestamp:"22 Apr, 01:36 pm",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:n[8].imageUrl,readTimestamp:"---",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:n[11].imageUrl,readTimestamp:"---",deliveredTimestamp:"05 May, 08:35 pm"}]}},d={name:"Group — Unread",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:c[6].imageUrl,readTimestamp:"---",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:n[8].imageUrl,readTimestamp:"---",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:n[11].imageUrl,readTimestamp:"---",deliveredTimestamp:"---"}]}},m={args:{variant:"messageInfo",open:!0,messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"24/8/2024, 5:02 pm"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}],messageInfoError:""},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"},messagePreview:{control:"text"},messageInfoError:{control:"text"}}};function v({title:a,children:g}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:a}),g]})}function f({language:a,code:g}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:g})})]})}const p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(v,{title:"HTML",children:e.jsx(f,{language:"HTML",code:`<div class="info-dialog__overlay">
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
</div>`})}),e.jsx(v,{title:"CSS (Foundation Variables)",children:e.jsx(f,{language:"CSS",code:`.info-dialog__overlay {
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
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
}

.info-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border-light);
}

.info-dialog__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.info-dialog__close {
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  border-radius: var(--radius-md);
  color: var(--color-icon-secondary);
  cursor: pointer;
}

.info-dialog__body {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.info-dialog__message-bubble {
  background: var(--color-ep-600);
  color: var(--color-static-white);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-2);
  display: inline-block;
}

.info-dialog__info-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3) 0;
}`})})]})};var u,b,_;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(b=r.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var y,x,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var T,I,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,U,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(A=t.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var L,j,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var G,z,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(z=d.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var C,E,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var J,H,O;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (Foundation Variables)">
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
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
}

.info-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border-light);
}

.info-dialog__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.info-dialog__close {
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  border-radius: var(--radius-md);
  color: var(--color-icon-secondary);
  cursor: pointer;
}

.info-dialog__body {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.info-dialog__message-bubble {
  background: var(--color-ep-600);
  color: var(--color-static-white);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-2);
  display: inline-block;
}

.info-dialog__info-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3) 0;
}\`} />
      </UsageSection>
    </div>
}`,...(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const Z=["Default","Unread","DeliveredOnly","Error","GroupMessageInfo","GroupPartiallyRead","GroupUnread","Playground","Usage"];export{r as Default,s as DeliveredOnly,i as Error,t as GroupMessageInfo,l as GroupPartiallyRead,d as GroupUnread,m as Playground,o as Unread,p as Usage,Z as __namedExportsOrder,Y as default};
