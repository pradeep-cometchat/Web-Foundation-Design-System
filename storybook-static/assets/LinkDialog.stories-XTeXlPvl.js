import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as p}from"./index-ClcD9ViR.js";import{I as m}from"./Textarea-DdWrHRUy.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s({title:d="Add Link",initialText:j="",initialUrl:O="",textPlaceholder:N="Link",urlPlaceholder:U="https://",cancelLabel:S="Cancel",saveLabel:q="Save",open:V=!0,showOverlay:E=!0,onCancel:r,onSave:o}){const[c,I]=p.useState(j),[u,W]=p.useState(O);if(!V)return null;const A=()=>{o==null||o(c,u)};return e.jsxs(e.Fragment,{children:[E&&e.jsx("div",{className:"link-dialog__overlay",onClick:r,"aria-hidden":"true"}),e.jsxs("div",{className:"link-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"link-dialog-title",children:[e.jsxs("div",{className:"link-dialog__header",children:[e.jsx("div",{className:"link-dialog__header-text",children:e.jsx("div",{className:"link-dialog__title",id:"link-dialog-title",role:"heading","aria-level":2,children:d})}),e.jsx("button",{type:"button",className:"link-dialog__close-btn",onClick:r,"aria-label":"Close",children:e.jsx("span",{className:"icon-outlined",style:{fontSize:20},children:"close"})})]}),e.jsxs("div",{className:"link-dialog__body",children:[e.jsxs("div",{className:"link-dialog__form",children:[e.jsx(m,{label:"Text",placeholder:N,value:c,onChange:I}),e.jsx(m,{label:"Link",type:"url",placeholder:U,value:u,onChange:W})]}),e.jsxs("div",{className:"link-dialog__buttons",children:[e.jsx("button",{type:"button",className:"link-dialog__btn link-dialog__btn--cancel",onClick:r,children:S}),e.jsx("button",{type:"button",className:"link-dialog__btn link-dialog__btn--save",onClick:A,children:q})]})]})]})]})}try{s.displayName="LinkDialog",s.__docgenInfo={description:"",displayName:"LinkDialog",props:{title:{defaultValue:{value:"Add Link"},description:'Dialog title. Default: "Add Link"',name:"title",required:!1,type:{name:"string | undefined"}},initialText:{defaultValue:{value:""},description:"Initial value for the text field",name:"initialText",required:!1,type:{name:"string | undefined"}},initialUrl:{defaultValue:{value:""},description:"Initial value for the link/URL field",name:"initialUrl",required:!1,type:{name:"string | undefined"}},textPlaceholder:{defaultValue:{value:"Link"},description:"Placeholder for the text field",name:"textPlaceholder",required:!1,type:{name:"string | undefined"}},urlPlaceholder:{defaultValue:{value:"https://"},description:"Placeholder for the link field",name:"urlPlaceholder",required:!1,type:{name:"string | undefined"}},cancelLabel:{defaultValue:{value:"Cancel"},description:'Label for the cancel button. Default: "Cancel"',name:"cancelLabel",required:!1,type:{name:"string | undefined"}},saveLabel:{defaultValue:{value:"Save"},description:'Label for the save button. Default: "Save"',name:"saveLabel",required:!1,type:{name:"string | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},showOverlay:{defaultValue:{value:"true"},description:"Whether to show the overlay backdrop",name:"showOverlay",required:!1,type:{name:"boolean | undefined"}},onCancel:{defaultValue:null,description:"Callback when cancel is clicked or dialog is dismissed",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},onSave:{defaultValue:null,description:"Callback when save is clicked, receives text and url values",name:"onSave",required:!1,type:{name:"((text: string, url: string) => void) | undefined"}}}}}catch{}const B={title:"Base Components/Dialog/Form Dialogs/Link Dialog",component:s,parameters:{layout:"centered"}},a={args:{open:!0,showOverlay:!1}},l={name:"With Prefilled Text",args:{open:!0,showOverlay:!1,initialText:"Click here to visit",initialUrl:"https://www.example.com"}},t={name:"Edit Link",args:{open:!0,showOverlay:!1,title:"Edit Link",initialText:"CometChat Documentation",initialUrl:"https://www.cometchat.com/docs"}},n={name:"Custom Labels",args:{open:!0,showOverlay:!1,title:"Insert Hyperlink",textPlaceholder:"Display text",urlPlaceholder:"Paste URL here",cancelLabel:"Discard",saveLabel:"Insert"}},i={args:{open:!0,showOverlay:!1,title:"Add Link",initialText:"",initialUrl:"",textPlaceholder:"Link",urlPlaceholder:"https://",cancelLabel:"Cancel",saveLabel:"Save"},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"},showOverlay:{control:"boolean"},title:{control:"text"},initialText:{control:"text"},initialUrl:{control:"text"},textPlaceholder:{control:"text"},urlPlaceholder:{control:"text"},cancelLabel:{control:"text"},saveLabel:{control:"text"}}};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: true,
    showOverlay: false
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,g,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "With Prefilled Text",
  args: {
    open: true,
    showOverlay: false,
    initialText: "Click here to visit",
    initialUrl: "https://www.example.com"
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,y,L;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Edit Link",
  args: {
    open: true,
    showOverlay: false,
    title: "Edit Link",
    initialText: "CometChat Documentation",
    initialUrl: "https://www.cometchat.com/docs"
  }
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var _,w,P;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var C,D,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const G=["Default","WithPrefilledText","EditLink","CustomLabels","Playground"];export{n as CustomLabels,a as Default,t as EditLink,i as Playground,l as WithPrefilledText,G as __namedExportsOrder,B as default};
