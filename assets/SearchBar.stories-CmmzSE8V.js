import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as a}from"./T-C6nayWAE.js";import{S as h}from"./SearchBar-DjvCsfWl.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const de={title:"Base Components/Search Bar",component:h,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A pill-shaped search input with a search icon and optional clear button.\nUsed for filtering conversations, contacts, or messages.\n\n**Structure (from Figma node 4094:1014224):**\n- Container: full-width, height 40px, radius 1000px (pill), bg `#f5f5f5`, border `#f5f5f5`\n- Padding: 12px horizontal, 8px vertical\n- Search icon: 24×24, color `#a1a1a1`\n- Placeholder: H4/Regular — 16px, weight 400, color `#a1a1a1`\n- Input text: 16px regular, color `#141414`"}}},argTypes:{placeholder:{control:"text",description:"Placeholder text."},value:{control:"text",description:"Controlled input value."},showClear:{control:"boolean",description:"Show clear button when input has value."},onChange:{control:!1},onClear:{control:!1},className:{control:!1}}},o={args:{placeholder:"Search"}},c={args:{placeholder:"Search",value:"John"}},n={args:{placeholder:"Search conversations..."}},s={args:{placeholder:"Search",value:"Hello",showClear:!1}},i={args:{placeholder:"Search"},decorators:[r=>e.jsx("div",{style:{width:328},children:e.jsx(r,{})})]},l={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)",maxWidth:400,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:m,children:e.jsx(a,{children:"Empty (placeholder)"})}),e.jsx(h,{placeholder:"Search"})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:e.jsx(a,{children:"With value"})}),e.jsx(h,{placeholder:"Search",value:"Design system"})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:e.jsx(a,{children:"Custom placeholder"})}),e.jsx(h,{placeholder:"Search messages..."})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:e.jsx(a,{children:"No clear button"})}),e.jsx(h,{placeholder:"Search",value:"Hello",showClear:!1})]})]})};function u({title:r,children:t}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(a,{children:r})}),t]})}const v=({language:r,code:t})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]}),b=({title:r,items:t})=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(a,{children:r})}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:t.map(g=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",g]},g))})]}),d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(u,{title:"HTML",children:e.jsx(v,{language:"HTML",code:`<!-- Search bar (empty) -->
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
</div>`})}),e.jsx(u,{title:"CSS (CometChat Tokens)",children:e.jsx(v,{language:"CSS",code:`.search-bar {
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
}`})}),e.jsx(u,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(b,{title:"Root",items:["search-bar"]}),e.jsx(b,{title:"Child Elements",items:["search-bar__input-wrapper","search-bar__icon","search-bar__input","search-bar__clear"]})]})})]})},p={args:{placeholder:"Search"},parameters:{docs:{disable:!0}}},m={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)"};var x,f,y,S,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"Default empty state — exact match to Figma node 4094:1014224.",...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.description}}};var C,j,w,k,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "John"
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"With a value typed in.",...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var W,B,D,L,H;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: "Search conversations..."
  }
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"Custom placeholder text.",...(H=(L=n.parameters)==null?void 0:L.docs)==null?void 0:H.description}}};var z,M,F,R,P;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "Hello",
    showClear: false
  }
}`,...(F=(M=s.parameters)==null?void 0:M.docs)==null?void 0:F.source},description:{story:"Without clear button.",...(P=(R=s.parameters)==null?void 0:R.docs)==null?void 0:P.description}}};var E,N,A,G,I;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  decorators: [Story => <div style={{
    width: 328
  }}>
        <Story />
      </div>]
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source},description:{story:"Fixed width (328px) matching Figma's original frame.",...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.description}}};var U,J,V,Z,O;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <div style={stateLabelStyle}><T>Empty (placeholder)</T></div>
        <SearchBar placeholder="Search" />
      </div>
      <div>
        <div style={stateLabelStyle}><T>With value</T></div>
        <SearchBar placeholder="Search" value="Design system" />
      </div>
      <div>
        <div style={stateLabelStyle}><T>Custom placeholder</T></div>
        <SearchBar placeholder="Search messages..." />
      </div>
      <div>
        <div style={stateLabelStyle}><T>No clear button</T></div>
        <SearchBar placeholder="Search" value="Hello" showClear={false} />
      </div>
    </div>
}`,...(V=(J=l.parameters)==null?void 0:J.docs)==null?void 0:V.source},description:{story:"All states side by side.",...(O=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:O.description}}};var X,q,K,Q,Y;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(q=d.parameters)==null?void 0:q.docs)==null?void 0:K.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Y=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var $,ee,re,ae,te;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Interactive playground — use the controls panel to configure.",...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};const pe=["Default","WithValue","CustomPlaceholder","NoClearButton","FixedWidth","States","Usage","Playground"];export{n as CustomPlaceholder,o as Default,i as FixedWidth,s as NoClearButton,p as Playground,l as States,d as Usage,c as WithValue,pe as __namedExportsOrder,de as default};
