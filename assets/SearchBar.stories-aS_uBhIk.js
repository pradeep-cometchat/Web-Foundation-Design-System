import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as p}from"./SearchBar-xmnnaU4l.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ie={title:"Base Components/Search Bar",component:p,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A pill-shaped search input with a search icon and optional clear button.\nUsed for filtering conversations, contacts, or messages.\n\n**Structure (from Figma node 4094:1014224):**\n- Container: full-width, height 40px, radius 1000px (pill), bg `#f5f5f5`, border `#f5f5f5`\n- Padding: 12px horizontal, 8px vertical\n- Search icon: 24×24, color `#a1a1a1`\n- Placeholder: H4/Regular — 16px, weight 400, color `#a1a1a1`\n- Input text: 16px regular, color `#141414`"}}},argTypes:{placeholder:{control:"text",description:"Placeholder text."},value:{control:"text",description:"Controlled input value."},showClear:{control:"boolean",description:"Show clear button when input has value."},onChange:{control:!1},onClear:{control:!1},className:{control:!1}}},o={args:{placeholder:"Search"}},n={args:{placeholder:"Search",value:"John"}},s={args:{placeholder:"Search conversations..."}},t={args:{placeholder:"Search",value:"Hello",showClear:!1}},i={args:{placeholder:"Search"},decorators:[r=>e.jsx("div",{style:{width:328},children:e.jsx(r,{})})]},c={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",flexDirection:"column",gap:"var(--space-6)",maxWidth:400,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:h,children:"Empty (placeholder)"}),e.jsx(p,{placeholder:"Search"})]}),e.jsxs("div",{children:[e.jsx("div",{style:h,children:"With value"}),e.jsx(p,{placeholder:"Search",value:"Design system"})]}),e.jsxs("div",{children:[e.jsx("div",{style:h,children:"Custom placeholder"}),e.jsx(p,{placeholder:"Search messages..."})]}),e.jsxs("div",{children:[e.jsx("div",{style:h,children:"No clear button"}),e.jsx(p,{placeholder:"Search",value:"Hello",showClear:!1})]})]})};function u({title:r,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:r}),a]})}const g=({language:r,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]}),m=({title:r,items:a})=>e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:r}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:a.map(v=>e.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-primary)",background:"var(--color-bg-02)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-border-default)",display:"inline-block",width:"fit-content"},children:[".",v]},v))})]}),l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(u,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Search bar (empty) -->
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
</div>`})}),e.jsx(u,{title:"CSS (Foundation Variables)",children:e.jsx(g,{language:"CSS",code:`.search-bar {
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
}`})}),e.jsx(u,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(m,{title:"Root",items:["search-bar"]}),e.jsx(m,{title:"Child Elements",items:["search-bar__input-wrapper","search-bar__icon","search-bar__input","search-bar__clear"]})]})})]})},d={args:{placeholder:"Search"},parameters:{docs:{disable:!0}}},h={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",marginBottom:"var(--space-2)"};var b,f,x,y,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Default empty state — exact match to Figma node 4094:1014224.",...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.description}}};var _,w,C,j,k;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "John"
  }
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"With a value typed in.",...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};var z,W,B,D,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: "Search conversations..."
  }
}`,...(B=(W=s.parameters)==null?void 0:W.docs)==null?void 0:B.source},description:{story:"Custom placeholder text.",...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var T,H,F,M,R;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "Hello",
    showClear: false
  }
}`,...(F=(H=t.parameters)==null?void 0:H.docs)==null?void 0:F.source},description:{story:"Without clear button.",...(R=(M=t.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var P,E,N,A,V;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  decorators: [Story => <div style={{
    width: 328
  }}>
        <Story />
      </div>]
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source},description:{story:"Fixed width (328px) matching Figma's original frame.",...(V=(A=i.parameters)==null?void 0:A.docs)==null?void 0:V.description}}};var G,I,U,J,Z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(I=c.parameters)==null?void 0:I.docs)==null?void 0:U.source},description:{story:"All states side by side.",...(Z=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Z.description}}};var O,X,q,K,Q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(X=l.parameters)==null?void 0:X.docs)==null?void 0:q.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Y,$,ee,re,ae;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ee=($=d.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ae=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};const ce=["Default","WithValue","CustomPlaceholder","NoClearButton","FixedWidth","States","Usage","Playground"];export{s as CustomPlaceholder,o as Default,i as FixedWidth,t as NoClearButton,d as Playground,c as States,l as Usage,n as WithValue,ce as __namedExportsOrder,ie as default};
