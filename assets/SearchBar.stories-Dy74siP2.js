import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as p}from"./SearchBar-C2XVB5CY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const ie={title:"Base Components/Search Bar",component:p,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A pill-shaped search input with a search icon and optional clear button.\nUsed for filtering conversations, contacts, or messages.\n\n**Structure (from Figma node 4094:1014224):**\n- Container: full-width, height 40px, radius 1000px (pill), bg `#f5f5f5`, border `#f5f5f5`\n- Padding: 12px horizontal, 8px vertical\n- Search icon: 24×24, color `#a1a1a1`\n- Placeholder: H4/Regular — 16px, weight 400, color `#a1a1a1`\n- Input text: 16px regular, color `#141414`"}}},argTypes:{placeholder:{control:"text",description:"Placeholder text."},value:{control:"text",description:"Controlled input value."},showClear:{control:"boolean",description:"Show clear button when input has value."},onChange:{control:!1},onClear:{control:!1},className:{control:!1}}},t={args:{placeholder:"Search"}},o={args:{placeholder:"Search",value:"John"}},c={args:{placeholder:"Search conversations..."}},n={args:{placeholder:"Search",value:"Hello",showClear:!1}},s={args:{placeholder:"Search"},decorators:[a=>e.jsx("div",{style:{width:328},children:e.jsx(a,{})})]},i={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)",maxWidth:400,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:h,children:"Empty (placeholder)"}),e.jsx(p,{placeholder:"Search"})]}),e.jsxs("div",{children:[e.jsx("div",{style:h,children:"With value"}),e.jsx(p,{placeholder:"Search",value:"Design system"})]}),e.jsxs("div",{children:[e.jsx("div",{style:h,children:"Custom placeholder"}),e.jsx(p,{placeholder:"Search messages..."})]}),e.jsxs("div",{children:[e.jsx("div",{style:h,children:"No clear button"}),e.jsx(p,{placeholder:"Search",value:"Hello",showClear:!1})]})]})};function m({title:a,children:r}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:a}),r]})}const g=({language:a,code:r})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]}),v=({title:a,items:r})=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:a}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:r.map(u=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",u]},u))})]}),l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(m,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Search bar (empty) -->
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
</div>`})}),e.jsx(m,{title:"CSS (CometChat Tokens)",children:e.jsx(g,{language:"CSS",code:`.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-bar__input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  flex: 1;
  height: 40px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  background: var(--cometchat-background-color-03);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
  transition: border-color 120ms ease, background 120ms ease;
}

.search-bar__input-wrapper:focus-within {
  border-color: var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-01);
}

.search-bar__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cometchat-icon-color-tertiary);
}

.search-bar__input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--cometchat-font-family);
  font-size: 16px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
}

.search-bar__input::placeholder {
  color: var(--cometchat-icon-color-tertiary);
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
  color: var(--cometchat-icon-color-tertiary);
  border-radius: 50%;
}

.search-bar__clear:hover {
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-04);
}`})}),e.jsx(m,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(v,{title:"Root",items:["search-bar"]}),e.jsx(v,{title:"Child Elements",items:["search-bar__input-wrapper","search-bar__icon","search-bar__input","search-bar__clear"]})]})})]})},d={args:{placeholder:"Search"},parameters:{docs:{disable:!0}}},h={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)"};var b,x,f,y,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Default empty state — exact match to Figma node 4094:1014224.",...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.description}}};var _,C,w,j,k;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "John"
  }
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:"With a value typed in.",...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};var W,B,T,D,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: "Search conversations..."
  }
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source},description:{story:"Custom placeholder text.",...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var H,z,M,F,R;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "Hello",
    showClear: false
  }
}`,...(M=(z=n.parameters)==null?void 0:z.docs)==null?void 0:M.source},description:{story:"Without clear button.",...(R=(F=n.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};var P,E,N,A,G;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  decorators: [Story => <div style={{
    width: 328
  }}>
        <Story />
      </div>]
}`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.source},description:{story:"Fixed width (328px) matching Figma's original frame.",...(G=(A=s.parameters)==null?void 0:A.docs)==null?void 0:G.description}}};var I,U,J,V,Z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-10)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)",
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
}`,...(J=(U=i.parameters)==null?void 0:U.docs)==null?void 0:J.source},description:{story:"All states side by side.",...(Z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:Z.description}}};var O,X,q,K,Q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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

      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-bar__input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  flex: 1;
  height: 40px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  background: var(--cometchat-background-color-03);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
  transition: border-color 120ms ease, background 120ms ease;
}

.search-bar__input-wrapper:focus-within {
  border-color: var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-01);
}

.search-bar__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cometchat-icon-color-tertiary);
}

.search-bar__input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--cometchat-font-family);
  font-size: 16px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
}

.search-bar__input::placeholder {
  color: var(--cometchat-icon-color-tertiary);
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
  color: var(--cometchat-icon-color-tertiary);
  border-radius: 50%;
}

.search-bar__clear:hover {
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-04);
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <ClassGroup title="Root" items={["search-bar"]} />
          <ClassGroup title="Child Elements" items={["search-bar__input-wrapper", "search-bar__icon", "search-bar__input", "search-bar__clear"]} />
        </div>
      </Section>
    </div>
}`,...(q=(X=l.parameters)==null?void 0:X.docs)==null?void 0:q.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Y,$,ee,ae,re;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ee=($=d.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure.",...(re=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};const le=["Default","WithValue","CustomPlaceholder","NoClearButton","FixedWidth","States","Usage","Playground"];export{c as CustomPlaceholder,t as Default,s as FixedWidth,n as NoClearButton,d as Playground,i as States,l as Usage,o as WithValue,le as __namedExportsOrder,ie as default};
