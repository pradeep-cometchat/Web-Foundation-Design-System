import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as m}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function F(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z",fill:"currentColor"})})}function d({title:c="Add Link",initialText:D="",initialUrl:T="",textPlaceholder:O="Link",urlPlaceholder:U="https://",cancelLabel:q="Cancel",saveLabel:S="Save",open:V=!0,showOverlay:E=!0,onCancel:r,onSave:o}){const[u,I]=m.useState(D),[p,W]=m.useState(T);if(!V)return null;const A=()=>{o==null||o(u,p)};return e.jsxs(e.Fragment,{children:[E&&e.jsx("div",{className:"link-dialog__overlay",onClick:r,"aria-hidden":"true"}),e.jsxs("div",{className:"link-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"link-dialog-title",children:[e.jsxs("div",{className:"link-dialog__header",children:[e.jsx("div",{className:"link-dialog__header-text",children:e.jsx("div",{className:"link-dialog__title",id:"link-dialog-title",role:"heading","aria-level":2,children:c})}),e.jsx("button",{type:"button",className:"link-dialog__close-btn",onClick:r,"aria-label":"Close",children:e.jsx(F,{})})]}),e.jsxs("div",{className:"link-dialog__body",children:[e.jsxs("div",{className:"link-dialog__form",children:[e.jsxs("div",{className:"link-dialog__field",children:[e.jsx("label",{className:"link-dialog__label",htmlFor:"link-dialog-text",children:"Text"}),e.jsx("input",{id:"link-dialog-text",className:"link-dialog__input",type:"text",value:u,onChange:s=>I(s.target.value),placeholder:O})]}),e.jsxs("div",{className:"link-dialog__field",children:[e.jsx("label",{className:"link-dialog__label",htmlFor:"link-dialog-url",children:"Link"}),e.jsx("input",{id:"link-dialog-url",className:"link-dialog__input",type:"url",value:p,onChange:s=>W(s.target.value),placeholder:U})]})]}),e.jsxs("div",{className:"link-dialog__buttons",children:[e.jsx("button",{type:"button",className:"link-dialog__btn link-dialog__btn--cancel",onClick:r,children:q}),e.jsx("button",{type:"button",className:"link-dialog__btn link-dialog__btn--save",onClick:A,children:S})]})]})]})]})}try{d.displayName="LinkDialog",d.__docgenInfo={description:"",displayName:"LinkDialog",props:{title:{defaultValue:{value:"Add Link"},description:'Dialog title. Default: "Add Link"',name:"title",required:!1,type:{name:"string | undefined"}},initialText:{defaultValue:{value:""},description:"Initial value for the text field",name:"initialText",required:!1,type:{name:"string | undefined"}},initialUrl:{defaultValue:{value:""},description:"Initial value for the link/URL field",name:"initialUrl",required:!1,type:{name:"string | undefined"}},textPlaceholder:{defaultValue:{value:"Link"},description:"Placeholder for the text field",name:"textPlaceholder",required:!1,type:{name:"string | undefined"}},urlPlaceholder:{defaultValue:{value:"https://"},description:"Placeholder for the link field",name:"urlPlaceholder",required:!1,type:{name:"string | undefined"}},cancelLabel:{defaultValue:{value:"Cancel"},description:'Label for the cancel button. Default: "Cancel"',name:"cancelLabel",required:!1,type:{name:"string | undefined"}},saveLabel:{defaultValue:{value:"Save"},description:'Label for the save button. Default: "Save"',name:"saveLabel",required:!1,type:{name:"string | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},showOverlay:{defaultValue:{value:"true"},description:"Whether to show the overlay backdrop",name:"showOverlay",required:!1,type:{name:"boolean | undefined"}},onCancel:{defaultValue:null,description:"Callback when cancel is clicked or dialog is dismissed",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},onSave:{defaultValue:null,description:"Callback when save is clicked, receives text and url values",name:"onSave",required:!1,type:{name:"((text: string, url: string) => void) | undefined"}}}}}catch{}const M={title:"Base Components/Dialog/Form Dialogs/Link Dialog",component:d,parameters:{layout:"centered"}},l={args:{open:!0,showOverlay:!1}},a={name:"With Prefilled Text",args:{open:!0,showOverlay:!1,initialText:"Click here to visit",initialUrl:"https://www.example.com"}},t={name:"Edit Link",args:{open:!0,showOverlay:!1,title:"Edit Link",initialText:"CometChat Documentation",initialUrl:"https://www.cometchat.com/docs"}},n={name:"Custom Labels",args:{open:!0,showOverlay:!1,title:"Insert Hyperlink",textPlaceholder:"Display text",urlPlaceholder:"Paste URL here",cancelLabel:"Discard",saveLabel:"Insert"}},i={args:{open:!0,showOverlay:!1,title:"Add Link",initialText:"",initialUrl:"",textPlaceholder:"Link",urlPlaceholder:"https://",cancelLabel:"Cancel",saveLabel:"Save"},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"},showOverlay:{control:"boolean"},title:{control:"text"},initialText:{control:"text"},initialUrl:{control:"text"},textPlaceholder:{control:"text"},urlPlaceholder:{control:"text"},cancelLabel:{control:"text"},saveLabel:{control:"text"}}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: true,
    showOverlay: false
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,v,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "With Prefilled Text",
  args: {
    open: true,
    showOverlay: false,
    initialText: "Click here to visit",
    initialUrl: "https://www.example.com"
  }
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var L,b,y;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Edit Link",
  args: {
    open: true,
    showOverlay: false,
    title: "Edit Link",
    initialText: "CometChat Documentation",
    initialUrl: "https://www.cometchat.com/docs"
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var _,w,C;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var P,j,N;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Z=["Default","WithPrefilledText","EditLink","CustomLabels","Playground"];export{n as CustomLabels,l as Default,t as EditLink,i as Playground,a as WithPrefilledText,Z as __namedExportsOrder,M as default};
