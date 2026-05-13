import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as f}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function ae(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z",fill:"currentColor"})})}function t({title:u="Add Link",initialText:Z="",initialUrl:G="",textPlaceholder:J="Link",urlPlaceholder:K="https://",cancelLabel:Q="Cancel",saveLabel:X="Save",open:Y=!0,showOverlay:$=!0,onCancel:s,onSave:d}){const[h,ee]=f.useState(Z),[m,te]=f.useState(G);if(!Y)return null;const ie=()=>{d==null||d(h,m)};return e.jsxs(e.Fragment,{children:[$&&e.jsx("div",{className:"link-dialog__overlay",onClick:s,"aria-hidden":"true"}),e.jsxs("div",{className:"link-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"link-dialog-title",children:[e.jsxs("div",{className:"link-dialog__header",children:[e.jsx("div",{className:"link-dialog__header-text",children:e.jsx("div",{className:"link-dialog__title",id:"link-dialog-title",role:"heading","aria-level":2,children:u})}),e.jsx("button",{type:"button",className:"link-dialog__close-btn",onClick:s,"aria-label":"Close",children:e.jsx(ae,{})})]}),e.jsxs("div",{className:"link-dialog__body",children:[e.jsxs("div",{className:"link-dialog__form",children:[e.jsxs("div",{className:"link-dialog__field",children:[e.jsx("label",{className:"link-dialog__label",htmlFor:"link-dialog-text",children:"Text"}),e.jsx("input",{id:"link-dialog-text",className:"link-dialog__input",type:"text",value:h,onChange:c=>ee(c.target.value),placeholder:J})]}),e.jsxs("div",{className:"link-dialog__field",children:[e.jsx("label",{className:"link-dialog__label",htmlFor:"link-dialog-url",children:"Link"}),e.jsx("input",{id:"link-dialog-url",className:"link-dialog__input",type:"url",value:m,onChange:c=>te(c.target.value),placeholder:K})]})]}),e.jsxs("div",{className:"link-dialog__buttons",children:[e.jsx("button",{type:"button",className:"link-dialog__btn link-dialog__btn--cancel",onClick:s,children:Q}),e.jsx("button",{type:"button",className:"link-dialog__btn link-dialog__btn--save",onClick:ie,children:X})]})]})]})]})}try{t.displayName="LinkDialog",t.__docgenInfo={description:"",displayName:"LinkDialog",props:{title:{defaultValue:{value:"Add Link"},description:'Dialog title. Default: "Add Link"',name:"title",required:!1,type:{name:"string | undefined"}},initialText:{defaultValue:{value:""},description:"Initial value for the text field",name:"initialText",required:!1,type:{name:"string | undefined"}},initialUrl:{defaultValue:{value:""},description:"Initial value for the link/URL field",name:"initialUrl",required:!1,type:{name:"string | undefined"}},textPlaceholder:{defaultValue:{value:"Link"},description:"Placeholder for the text field",name:"textPlaceholder",required:!1,type:{name:"string | undefined"}},urlPlaceholder:{defaultValue:{value:"https://"},description:"Placeholder for the link field",name:"urlPlaceholder",required:!1,type:{name:"string | undefined"}},cancelLabel:{defaultValue:{value:"Cancel"},description:'Label for the cancel button. Default: "Cancel"',name:"cancelLabel",required:!1,type:{name:"string | undefined"}},saveLabel:{defaultValue:{value:"Save"},description:'Label for the save button. Default: "Save"',name:"saveLabel",required:!1,type:{name:"string | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},showOverlay:{defaultValue:{value:"true"},description:"Whether to show the overlay backdrop",name:"showOverlay",required:!1,type:{name:"boolean | undefined"}},onCancel:{defaultValue:null,description:"Callback when cancel is clicked or dialog is dismissed",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},onSave:{defaultValue:null,description:"Callback when save is clicked, receives text and url values",name:"onSave",required:!1,type:{name:"((text: string, url: string) => void) | undefined"}}}}}catch{}const oe={title:"Base Components/Link Dialog",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A modal dialog for inserting or editing hyperlinks with text and URL fields.
Appears with a header (title + close icon), two form fields, and action buttons.

**Structure (from Figma node 4099:104917):**
- Container: 400px wide, radius 12px, shadow-lg, border \`--color-neutral-100\`
- Header: 64px height, bottom border, title 20px bold, close icon 24×24
- Body: pt-16 pb-20, gap 20px
- Fields: label 16px medium + input 40px height, radius 8px, border \`#e8e8e8\`
- Buttons: border-top, pt-12 px-16, gap 12px
- Cancel: white bg, border \`#dcdcdc\`, text-primary
- Save: \`--color-ep-500\` (#6852d6) bg, white text`}}},argTypes:{title:{control:"text",description:"Dialog title."},initialText:{control:"text",description:"Initial value for the text field."},initialUrl:{control:"text",description:"Initial value for the URL field."},textPlaceholder:{control:"text",description:"Placeholder for the text input."},urlPlaceholder:{control:"text",description:"Placeholder for the URL input."},cancelLabel:{control:"text",description:"Cancel button label."},saveLabel:{control:"text",description:"Save button label."},open:{control:"boolean",description:"Whether the dialog is visible."},showOverlay:{control:"boolean",description:"Whether to show the backdrop overlay."},onCancel:{control:!1},onSave:{control:!1}}},i={args:{title:"Add Link",initialText:"Link",initialUrl:"https://www.cometchat.com/",open:!0,showOverlay:!1}},a={args:{title:"Add Link",initialText:"",initialUrl:"",open:!0,showOverlay:!1}},l={args:{title:"Edit Link",initialText:"Visit our website",initialUrl:"https://www.cometchat.com/",saveLabel:"Update",open:!0,showOverlay:!1}},n={args:{title:"Add Link",initialText:"CometChat Docs",initialUrl:"https://www.cometchat.com/docs",open:!0,showOverlay:!0}},r={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:40,display:"flex",gap:32,flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Default (Add Link)"}),e.jsx(t,{title:"Add Link",initialText:"Link",initialUrl:"https://www.cometchat.com/",open:!0,showOverlay:!1})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Empty"}),e.jsx(t,{title:"Add Link",initialText:"",initialUrl:"",open:!0,showOverlay:!1})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Edit Link"}),e.jsx(t,{title:"Edit Link",initialText:"Visit our website",initialUrl:"https://www.cometchat.com/",saveLabel:"Update",open:!0,showOverlay:!1})]})]})},o={args:{title:"Add Link",initialText:"Link",initialUrl:"https://www.cometchat.com/",open:!0,showOverlay:!1},parameters:{docs:{disable:!0}}},p={fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)",marginBottom:8,textAlign:"center"};var g,v,x,y,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Add Link",
    initialText: "Link",
    initialUrl: "https://www.cometchat.com/",
    open: true,
    showOverlay: false
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:"Default state with pre-filled values — exact match to Figma node 4099:104917.",...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};var w,L,b,_,j;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "Add Link",
    initialText: "",
    initialUrl: "",
    open: true,
    showOverlay: false
  }
}`,...(b=(L=a.parameters)==null?void 0:L.docs)==null?void 0:b.source},description:{story:"Empty state — no pre-filled values, showing placeholders.",...(j=(_=a.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};var U,C,T,O,S;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: "Edit Link",
    initialText: "Visit our website",
    initialUrl: "https://www.cometchat.com/",
    saveLabel: "Update",
    open: true,
    showOverlay: false
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Edit link variant — used when modifying an existing link.",...(S=(O=l.parameters)==null?void 0:O.docs)==null?void 0:S.description}}};var A,D,N,E,V;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "Add Link",
    initialText: "CometChat Docs",
    initialUrl: "https://www.cometchat.com/docs",
    open: true,
    showOverlay: true
  }
}`,...(N=(D=n.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"With overlay backdrop — as it appears in production.",...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.description}}};var P,q,W,I,F;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: 40,
    display: "flex",
    gap: 32,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  }}>
      <div>
        <div style={stateLabelStyle}>Default (Add Link)</div>
        <LinkDialog title="Add Link" initialText="Link" initialUrl="https://www.cometchat.com/" open={true} showOverlay={false} />
      </div>
      <div>
        <div style={stateLabelStyle}>Empty</div>
        <LinkDialog title="Add Link" initialText="" initialUrl="" open={true} showOverlay={false} />
      </div>
      <div>
        <div style={stateLabelStyle}>Edit Link</div>
        <LinkDialog title="Edit Link" initialText="Visit our website" initialUrl="https://www.cometchat.com/" saveLabel="Update" open={true} showOverlay={false} />
      </div>
    </div>
}`,...(W=(q=r.parameters)==null?void 0:q.docs)==null?void 0:W.source},description:{story:"Visual demonstration of dialog states.",...(F=(I=r.parameters)==null?void 0:I.docs)==null?void 0:F.description}}};var B,R,z,H,M;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "Add Link",
    initialText: "Link",
    initialUrl: "https://www.cometchat.com/",
    open: true,
    showOverlay: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(z=(R=o.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:"Interactive playground — use the controls panel to configure the Link Dialog.",...(M=(H=o.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};const se=["Default","Empty","EditLink","WithOverlay","States","Playground"];export{i as Default,l as EditLink,a as Empty,o as Playground,r as States,n as WithOverlay,se as __namedExportsOrder,oe as default};
