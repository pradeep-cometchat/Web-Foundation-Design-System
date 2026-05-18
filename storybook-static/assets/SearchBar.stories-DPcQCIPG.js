import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as ue}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function ve(){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"currentColor"})})}function me(){return e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 11L6 6M6 6L11 1M6 6L1 1M6 6L11 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function o({placeholder:r="Search",value:a,onChange:n,onClear:v,showClear:le=!0,className:ie}){const[ce,g]=ue.useState(""),b=a!==void 0?a:ce,de=he=>{const f=he.target.value;a===void 0&&g(f),n==null||n(f)},pe=()=>{a===void 0&&g(""),n==null||n(""),v==null||v()};return e.jsx("div",{className:`search-bar ${ie||""}`,children:e.jsxs("div",{className:"search-bar__input-wrapper",children:[e.jsx("span",{className:"search-bar__icon",children:e.jsx(ve,{})}),e.jsx("input",{className:"search-bar__input",type:"text",placeholder:r,value:b,onChange:de,"aria-label":r}),le&&b&&e.jsx("button",{type:"button",className:"search-bar__clear",onClick:pe,"aria-label":"Clear search",children:e.jsx(me,{})})]})})}try{o.displayName="SearchBar",o.__docgenInfo={description:"",displayName:"SearchBar",props:{placeholder:{defaultValue:{value:"Search"},description:'Placeholder text. Default: "Search"',name:"placeholder",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"Controlled value",name:"value",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"Callback when value changes",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},onClear:{defaultValue:null,description:"Callback when the input is cleared",name:"onClear",required:!1,type:{name:"(() => void) | undefined"}},showClear:{defaultValue:{value:"true"},description:"Whether to show the clear button when input has value. Default: true",name:"showClear",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const xe={title:"Base Components/Search Bar",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A pill-shaped search input with a search icon and optional clear button.\nUsed for filtering conversations, contacts, or messages.\n\n**Structure (from Figma node 4094:1014224):**\n- Container: full-width, height 40px, radius 1000px (pill), bg `#f5f5f5`, border `#f5f5f5`\n- Padding: 12px horizontal, 8px vertical\n- Search icon: 24×24, color `#a1a1a1`\n- Placeholder: H4/Regular — 16px, weight 400, color `#a1a1a1`\n- Input text: 16px regular, color `#141414`"}}},argTypes:{placeholder:{control:"text",description:"Placeholder text."},value:{control:"text",description:"Controlled input value."},showClear:{control:"boolean",description:"Show clear button when input has value."},onChange:{control:!1},onClear:{control:!1},className:{control:!1}}},s={args:{placeholder:"Search"}},t={args:{placeholder:"Search",value:"John"}},l={args:{placeholder:"Search conversations..."}},i={args:{placeholder:"Search",value:"Hello",showClear:!1}},c={args:{placeholder:"Search"},decorators:[r=>e.jsx("div",{style:{width:328},children:e.jsx(r,{})})]},d={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",flexDirection:"column",gap:"var(--space-6)",maxWidth:400,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"Empty (placeholder)"}),e.jsx(o,{placeholder:"Search"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"With value"}),e.jsx(o,{placeholder:"Search",value:"Design system"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"Custom placeholder"}),e.jsx(o,{placeholder:"Search messages..."})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"No clear button"}),e.jsx(o,{placeholder:"Search",value:"Hello",showClear:!1})]})]})};function m({title:r,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:r}),a]})}const x=({language:r,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]}),y=({title:r,items:a})=>e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:r}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:a.map(n=>e.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-primary)",background:"var(--color-bg-02)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-border-default)",display:"inline-block",width:"fit-content"},children:[".",n]},n))})]}),p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(m,{title:"HTML",children:e.jsx(x,{language:"HTML",code:`<!-- Search bar (empty) -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <input class="search-bar__input" placeholder="Search" />
  </div>
</div>

<!-- Search bar with value and clear button -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon">
      <svg><!-- search icon --></svg>
    </span>
    <input class="search-bar__input" value="Design system" />
    <button class="search-bar__clear" aria-label="Clear search">
      <svg><!-- close icon --></svg>
    </button>
  </div>
</div>`})}),e.jsx(m,{title:"CSS (Foundation Variables)",children:e.jsx(x,{language:"CSS",code:`.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-bar__input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  flex: 1;
  height: 40px;
  padding: var(--space-2) var(--space-3);
  background: var(--color-bg-03);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
  transition: border-color 120ms ease, background 120ms ease;
}

.search-bar__input-wrapper:focus-within {
  border-color: var(--color-border-default);
  background: var(--color-bg-01);
}

.search-bar__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-icon-tertiary);
}

.search-bar__input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--font-family-body);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
}

.search-bar__input::placeholder {
  color: var(--color-icon-tertiary);
}

.search-bar__clear {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-icon-tertiary);
  border-radius: 50%;
}

.search-bar__clear:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-04);
}`})}),e.jsx(m,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(y,{title:"Root",items:["search-bar"]}),e.jsx(y,{title:"Child Elements",items:["search-bar__input-wrapper","search-bar__icon","search-bar__input","search-bar__clear"]})]})})]})},h={args:{placeholder:"Search"},parameters:{docs:{disable:!0}}},u={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",marginBottom:"var(--space-2)"};var _,S,w,C,j;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Default empty state — exact match to Figma node 4094:1014224.",...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var k,L,B,W,z;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "John"
  }
}`,...(B=(L=t.parameters)==null?void 0:L.docs)==null?void 0:B.source},description:{story:"With a value typed in.",...(z=(W=t.parameters)==null?void 0:W.docs)==null?void 0:z.description}}};var M,N,V,D,H;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: "Search conversations..."
  }
}`,...(V=(N=l.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"Custom placeholder text.",...(H=(D=l.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var T,F,P,R,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "Hello",
    showClear: false
  }
}`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:"Without clear button.",...(E=(R=i.parameters)==null?void 0:R.docs)==null?void 0:E.description}}};var I,q,A,Z,G;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  decorators: [Story => <div style={{
    width: 328
  }}>
        <Story />
      </div>]
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source},description:{story:"Fixed width (328px) matching Figma's original frame.",...(G=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:G.description}}};var U,J,O,X,$;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-10)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)",
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
}`,...(O=(J=d.parameters)==null?void 0:J.docs)==null?void 0:O.source},description:{story:"All states side by side.",...($=(X=d.parameters)==null?void 0:X.docs)==null?void 0:$.description}}};var K,Q,Y,ee,re;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      <Section title="HTML">
        <CodeCard language="HTML" code={\`<!-- Search bar (empty) -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <input class="search-bar__input" placeholder="Search" />
  </div>
</div>

<!-- Search bar with value and clear button -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon">
      <svg><!-- search icon --></svg>
    </span>
    <input class="search-bar__input" value="Design system" />
    <button class="search-bar__clear" aria-label="Clear search">
      <svg><!-- close icon --></svg>
    </button>
  </div>
</div>\`} />
      </Section>

      <Section title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-bar__input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  flex: 1;
  height: 40px;
  padding: var(--space-2) var(--space-3);
  background: var(--color-bg-03);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
  transition: border-color 120ms ease, background 120ms ease;
}

.search-bar__input-wrapper:focus-within {
  border-color: var(--color-border-default);
  background: var(--color-bg-01);
}

.search-bar__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-icon-tertiary);
}

.search-bar__input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--font-family-body);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
}

.search-bar__input::placeholder {
  color: var(--color-icon-tertiary);
}

.search-bar__clear {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-icon-tertiary);
  border-radius: 50%;
}

.search-bar__clear:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-04);
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <ClassGroup title="Root" items={["search-bar"]} />
          <ClassGroup title="Child Elements" items={["search-bar__input-wrapper", "search-bar__icon", "search-bar__input", "search-bar__clear"]} />
        </div>
      </Section>
    </div>
}`,...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var ae,ne,oe,se,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"Interactive playground — use the controls panel to configure.",...(te=(se=h.parameters)==null?void 0:se.docs)==null?void 0:te.description}}};const ye=["Default","WithValue","CustomPlaceholder","NoClearButton","FixedWidth","States","Usage","Playground"];export{l as CustomPlaceholder,s as Default,c as FixedWidth,i as NoClearButton,h as Playground,d as States,p as Usage,t as WithValue,ye as __namedExportsOrder,xe as default};
