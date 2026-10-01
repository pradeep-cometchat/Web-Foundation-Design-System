import{j as e}from"./jsx-runtime-BYYWji4R.js";import{u as J,T as m}from"./T-B-X7QtOX.js";import{r as n}from"./index-ClcD9ViR.js";import{I as _}from"./Textarea-O1oaRDZP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icons-DYXhLi95.js";function g({title:t="Add Link",initialText:a="",initialUrl:u="",textPlaceholder:A="Link",urlPlaceholder:B="https://",cancelLabel:F="Cancel",saveLabel:R="Save",open:M=!0,showOverlay:X=!0,onCancel:h,onSave:p}){const o=J(),[f,b]=n.useState(()=>o(a)),[v,x]=n.useState(()=>o(u));if(n.useEffect(()=>b(o(a)),[o,a]),n.useEffect(()=>x(o(u)),[o,u]),!M)return null;const G=()=>{p==null||p(f,v)};return e.jsxs(e.Fragment,{children:[X&&e.jsx("div",{className:"link-dialog__overlay",onClick:h,"aria-hidden":"true"}),e.jsxs("div",{className:"link-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"link-dialog-title",children:[e.jsxs("div",{className:"link-dialog__header",children:[e.jsx("div",{className:"link-dialog__header-text",children:e.jsx("div",{className:"link-dialog__title",id:"link-dialog-title",role:"heading","aria-level":2,children:e.jsx(m,{children:t})})}),e.jsx("button",{type:"button",className:"link-dialog__close-btn",onClick:h,"aria-label":"Close",children:e.jsx("span",{className:"icon-outlined",style:{fontSize:20},children:"close"})})]}),e.jsxs("div",{className:"link-dialog__body",children:[e.jsxs("div",{className:"link-dialog__form",children:[e.jsx(_,{label:"Text",placeholder:A,value:f,onChange:b}),e.jsx(_,{label:"Link",type:"url",placeholder:B,value:v,onChange:x})]}),e.jsxs("div",{className:"link-dialog__buttons",children:[e.jsx("button",{type:"button",className:"link-dialog__btn link-dialog__btn--cancel",onClick:h,children:e.jsx(m,{children:F})}),e.jsx("button",{type:"button",className:"link-dialog__btn link-dialog__btn--save",onClick:G,children:e.jsx(m,{children:R})})]})]})]})]})}try{g.displayName="LinkDialog",g.__docgenInfo={description:"",displayName:"LinkDialog",props:{title:{defaultValue:{value:"Add Link"},description:'Dialog title. Default: "Add Link"',name:"title",required:!1,type:{name:"string | undefined"}},initialText:{defaultValue:{value:""},description:"Initial value for the text field",name:"initialText",required:!1,type:{name:"string | undefined"}},initialUrl:{defaultValue:{value:""},description:"Initial value for the link/URL field",name:"initialUrl",required:!1,type:{name:"string | undefined"}},textPlaceholder:{defaultValue:{value:"Link"},description:"Placeholder for the text field",name:"textPlaceholder",required:!1,type:{name:"string | undefined"}},urlPlaceholder:{defaultValue:{value:"https://"},description:"Placeholder for the link field",name:"urlPlaceholder",required:!1,type:{name:"string | undefined"}},cancelLabel:{defaultValue:{value:"Cancel"},description:'Label for the cancel button. Default: "Cancel"',name:"cancelLabel",required:!1,type:{name:"string | undefined"}},saveLabel:{defaultValue:{value:"Save"},description:'Label for the save button. Default: "Save"',name:"saveLabel",required:!1,type:{name:"string | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},showOverlay:{defaultValue:{value:"true"},description:"Whether to show the overlay backdrop",name:"showOverlay",required:!1,type:{name:"boolean | undefined"}},onCancel:{defaultValue:null,description:"Callback when cancel is clicked or dialog is dismissed",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},onSave:{defaultValue:null,description:"Callback when save is clicked, receives text and url values",name:"onSave",required:!1,type:{name:"((text: string, url: string) => void) | undefined"}}}}}catch{}const ae={title:"Base Components/Dialog/Form Dialogs/Link Dialog",component:g,parameters:{layout:"centered"}},r={args:{open:!0,showOverlay:!1}},l={name:"With Prefilled Text",args:{open:!0,showOverlay:!1,initialText:"Click here to visit",initialUrl:"https://www.example.com"}},i={name:"Edit Link",args:{open:!0,showOverlay:!1,title:"Edit Link",initialText:"CometChat Documentation",initialUrl:"https://www.cometchat.com/docs"}},c={name:"Custom Labels",args:{open:!0,showOverlay:!1,title:"Insert Hyperlink",textPlaceholder:"Display text",urlPlaceholder:"Paste URL here",cancelLabel:"Discard",saveLabel:"Insert"}},d={args:{open:!0,showOverlay:!1,title:"Add Link",initialText:"",initialUrl:"",textPlaceholder:"Link",urlPlaceholder:"https://",cancelLabel:"Cancel",saveLabel:"Save"},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"},showOverlay:{control:"boolean"},title:{control:"text"},initialText:{control:"text"},initialUrl:{control:"text"},textPlaceholder:{control:"text"},urlPlaceholder:{control:"text"},cancelLabel:{control:"text"},saveLabel:{control:"text"}}},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(y,{title:"HTML",children:e.jsx(k,{language:"HTML",code:`<div class="form-dialog__overlay">
  <div class="form-dialog">
    <div class="form-dialog__header">
      <h2 class="form-dialog__title">Dialog Title</h2>
      <button class="form-dialog__close">×</button>
    </div>
    <div class="form-dialog__body">
      <label class="form-dialog__label">Field Label</label>
      <input class="form-dialog__input" placeholder="Enter value" />
    </div>
    <div class="form-dialog__footer">
      <button class="form-dialog__btn--cancel">Cancel</button>
      <button class="form-dialog__btn--submit">Submit</button>
    </div>
  </div>
</div>`})}),e.jsx(y,{title:"CSS (CometChat Tokens)",children:e.jsx(k,{language:"CSS",code:`.form-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.form-dialog {
  width: 420px;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__body {
  padding: var(--cometchat-spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-3);
}

.form-dialog__label {
  font: var(--cometchat-font-body-medium);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__input {
  height: 40px;
  padding: 0 var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.form-dialog__btn--submit {
  flex: 1;
  height: 40px;
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-primary-button-text);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}`})})]})};function y({title:t,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8,paddingBottom:8,borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(m,{children:t})}),a]})}function k({language:t,code:a}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:12,overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:14,fontFamily:"var(--cometchat-font-family)",fontSize:12,lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]})}var L,w,C;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: true,
    showOverlay: false
  }
}`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,S,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "With Prefilled Text",
  args: {
    open: true,
    showOverlay: false,
    initialText: "Click here to visit",
    initialUrl: "https://www.example.com"
  }
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var P,D,U;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Edit Link",
  args: {
    open: true,
    showOverlay: false,
    title: "Edit Link",
    initialText: "CometChat Documentation",
    initialUrl: "https://www.cometchat.com/docs"
  }
}`,...(U=(D=i.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var O,N,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    open: true,
    showOverlay: false,
    title: "Insert Hyperlink",
    textPlaceholder: "Display text",
    urlPlaceholder: "Paste URL here",
    cancelLabel: "Discard",
    saveLabel: "Insert"
  }
}`,...(E=(N=c.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var q,V,W;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    open: true,
    showOverlay: false,
    title: "Add Link",
    initialText: "",
    initialUrl: "",
    textPlaceholder: "Link",
    urlPlaceholder: "https://",
    cancelLabel: "Cancel",
    saveLabel: "Save"
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
    showOverlay: {
      control: "boolean"
    },
    title: {
      control: "text"
    },
    initialText: {
      control: "text"
    },
    initialUrl: {
      control: "text"
    },
    textPlaceholder: {
      control: "text"
    },
    urlPlaceholder: {
      control: "text"
    },
    cancelLabel: {
      control: "text"
    },
    saveLabel: {
      control: "text"
    }
  }
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var I,H,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<div class="form-dialog__overlay">
  <div class="form-dialog">
    <div class="form-dialog__header">
      <h2 class="form-dialog__title">Dialog Title</h2>
      <button class="form-dialog__close">×</button>
    </div>
    <div class="form-dialog__body">
      <label class="form-dialog__label">Field Label</label>
      <input class="form-dialog__input" placeholder="Enter value" />
    </div>
    <div class="form-dialog__footer">
      <button class="form-dialog__btn--cancel">Cancel</button>
      <button class="form-dialog__btn--submit">Submit</button>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.form-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.form-dialog {
  width: 420px;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__body {
  padding: var(--cometchat-spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-3);
}

.form-dialog__label {
  font: var(--cometchat-font-body-medium);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__input {
  height: 40px;
  padding: 0 var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.form-dialog__btn--submit {
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
}`,...(z=(H=s.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};const te=["Default","WithPrefilledText","EditLink","CustomLabels","Playground","Usage"];export{c as CustomLabels,r as Default,i as EditLink,d as Playground,s as Usage,l as WithPrefilledText,te as __namedExportsOrder,ae as default};
