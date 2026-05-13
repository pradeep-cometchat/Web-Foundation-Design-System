import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as se}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function oe(){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"currentColor"})})}function le(){return e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 11L6 6M6 6L11 1M6 6L1 1M6 6L11 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function a({placeholder:t="Search",value:p,onChange:r,onClear:h,showClear:X=!0,className:Y}){const[ee,m]=se.useState(""),v=p!==void 0?p:ee,ae=te=>{const f=te.target.value;p===void 0&&m(f),r==null||r(f)},re=()=>{p===void 0&&m(""),r==null||r(""),h==null||h()};return e.jsx("div",{className:`search-bar ${Y||""}`,children:e.jsxs("div",{className:"search-bar__input-wrapper",children:[e.jsx("span",{className:"search-bar__icon",children:e.jsx(oe,{})}),e.jsx("input",{className:"search-bar__input",type:"text",placeholder:t,value:v,onChange:ae,"aria-label":t}),X&&v&&e.jsx("button",{type:"button",className:"search-bar__clear",onClick:re,"aria-label":"Clear search",children:e.jsx(le,{})})]})})}try{a.displayName="SearchBar",a.__docgenInfo={description:"",displayName:"SearchBar",props:{placeholder:{defaultValue:{value:"Search"},description:'Placeholder text. Default: "Search"',name:"placeholder",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"Controlled value",name:"value",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"Callback when value changes",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},onClear:{defaultValue:null,description:"Callback when the input is cleared",name:"onClear",required:!1,type:{name:"(() => void) | undefined"}},showClear:{defaultValue:{value:"true"},description:"Whether to show the clear button when input has value. Default: true",name:"showClear",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const de={title:"Base Components/Search Bar",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A pill-shaped search input with a search icon and optional clear button.\nUsed for filtering conversations, contacts, or messages.\n\n**Structure (from Figma node 4094:1014224):**\n- Container: full-width, height 40px, radius 1000px (pill), bg `#f5f5f5`, border `#f5f5f5`\n- Padding: 12px horizontal, 8px vertical\n- Search icon: 24×24, color `#a1a1a1`\n- Placeholder: H4/Regular — 16px, weight 400, color `#a1a1a1`\n- Input text: 16px regular, color `#141414`"}}},argTypes:{placeholder:{control:"text",description:"Placeholder text."},value:{control:"text",description:"Controlled input value."},showClear:{control:"boolean",description:"Show clear button when input has value."},onChange:{control:!1},onClear:{control:!1},className:{control:!1}}},s={args:{placeholder:"Search"}},o={args:{placeholder:"Search",value:"John"}},l={args:{placeholder:"Search conversations..."}},n={args:{placeholder:"Search",value:"Hello",showClear:!1}},c={args:{placeholder:"Search"},decorators:[t=>e.jsx("div",{style:{width:328},children:e.jsx(t,{})})]},i={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:40,display:"flex",flexDirection:"column",gap:24,maxWidth:400,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"Empty (placeholder)"}),e.jsx(a,{placeholder:"Search"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"With value"}),e.jsx(a,{placeholder:"Search",value:"Design system"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"Custom placeholder"}),e.jsx(a,{placeholder:"Search messages..."})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"No clear button"}),e.jsx(a,{placeholder:"Search",value:"Hello",showClear:!1})]})]})},d={args:{placeholder:"Search"},parameters:{docs:{disable:!0}}},u={fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",marginBottom:8};var g,x,y,S,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:"Default empty state — exact match to Figma node 4094:1014224.",...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var C,b,j,_,L;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "John"
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:"With a value typed in.",...(L=(_=o.parameters)==null?void 0:_.docs)==null?void 0:L.description}}};var N,B,V,W,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: "Search conversations..."
  }
}`,...(V=(B=l.parameters)==null?void 0:B.docs)==null?void 0:V.source},description:{story:"Custom placeholder text.",...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.description}}};var P,k,q,F,H;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "Hello",
    showClear: false
  }
}`,...(q=(k=n.parameters)==null?void 0:k.docs)==null?void 0:q.source},description:{story:"Without clear button.",...(H=(F=n.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var I,M,E,A,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  decorators: [Story => <div style={{
    width: 328
  }}>
        <Story />
      </div>]
}`,...(E=(M=c.parameters)==null?void 0:M.docs)==null?void 0:E.source},description:{story:"Fixed width (328px) matching Figma's original frame.",...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};var J,R,T,Z,O;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: 40,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    maxWidth: 400,
    margin: "0 auto"
  }}>
      <div>
        <div style={stateLabelStyle}>Empty (placeholder)</div>
        <SearchBar placeholder="Search" />
      </div>
      <div>
        <div style={stateLabelStyle}>With value</div>
        <SearchBar placeholder="Search" value="Design system" />
      </div>
      <div>
        <div style={stateLabelStyle}>Custom placeholder</div>
        <SearchBar placeholder="Search messages..." />
      </div>
      <div>
        <div style={stateLabelStyle}>No clear button</div>
        <SearchBar placeholder="Search" value="Hello" showClear={false} />
      </div>
    </div>
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"All states side by side.",...(O=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:O.description}}};var U,$,G,K,Q;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(G=($=d.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:"Interactive playground — use the controls panel to configure.",...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};const pe=["Default","WithValue","CustomPlaceholder","NoClearButton","FixedWidth","States","Playground"];export{l as CustomPlaceholder,s as Default,c as FixedWidth,n as NoClearButton,d as Playground,i as States,o as WithValue,pe as __namedExportsOrder,de as default};
