import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as a,u as ee}from"./T-C6nayWAE.js";/* empty css                  */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const oe={title:"Core Components/Conversation List/Search",tags:["autodocs"],parameters:{layout:"centered"}},o={name:"Simple — Placeholder",parameters:{docs:{description:{story:"Search bar in idle state with placeholder text."}}},render:()=>e.jsx(l,{children:e.jsx(r,{state:"placeholder"})})},d={name:"Simple — Default",parameters:{docs:{description:{story:"Search bar in default state (unfocused, no text)."}}},render:()=>e.jsx(l,{children:e.jsx(r,{state:"default"})})},p={name:"Simple — Typing",parameters:{docs:{description:{story:"Search bar with partial text input and clear button."}}},render:()=>e.jsx(l,{children:e.jsx(r,{state:"typing",value:"S"})})},h={name:"Simple — Filled",parameters:{docs:{description:{story:"Search bar with complete text and clear button."}}},render:()=>e.jsx(l,{children:e.jsx(r,{state:"typing",value:"Smart"})})},m={name:"With Filters — Placeholder",parameters:{docs:{description:{story:"Search bar with filter chips in idle state."}}},render:()=>e.jsx(l,{children:e.jsx(r,{state:"placeholder",showFilters:!0})})},u={name:"With Filters — Default",parameters:{docs:{description:{story:"Search bar with filter chips in default state."}}},render:()=>e.jsx(l,{children:e.jsx(r,{state:"default",showFilters:!0})})},g={name:"With Filters — Typing",parameters:{docs:{description:{story:"Search bar with filter chips and partial text."}}},render:()=>e.jsx(l,{children:e.jsx(r,{state:"typing",value:"S",showFilters:!0})})},x={name:"With Filters — Filled",parameters:{docs:{description:{story:"Search bar with filter chips and complete text."}}},render:()=>e.jsx(l,{children:e.jsx(r,{state:"typing",value:"Smart",showFilters:!0})})},v={name:"All States",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-4)",maxWidth:900},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(c,{children:e.jsx(a,{children:"Simple — Placeholder"})}),e.jsx(r,{state:"placeholder"}),e.jsx(c,{children:e.jsx(a,{children:"Simple — Default"})}),e.jsx(r,{state:"default"}),e.jsx(c,{children:e.jsx(a,{children:"Simple — Typing"})}),e.jsx(r,{state:"typing",value:"S"}),e.jsx(c,{children:e.jsx(a,{children:"Simple — Filled"})}),e.jsx(r,{state:"typing",value:"Smart"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(c,{children:e.jsx(a,{children:"With Filters — Placeholder"})}),e.jsx(r,{state:"placeholder",showFilters:!0}),e.jsx(c,{children:e.jsx(a,{children:"With Filters — Default"})}),e.jsx(r,{state:"default",showFilters:!0}),e.jsx(c,{children:e.jsx(a,{children:"With Filters — Typing"})}),e.jsx(r,{state:"typing",value:"S",showFilters:!0}),e.jsx(c,{children:e.jsx(a,{children:"With Filters — Filled"})}),e.jsx(r,{state:"typing",value:"Smart",showFilters:!0})]})]})},b={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(n,{title:"HTML Structure",children:e.jsx(re,{language:"HTML",code:`<!-- Simple Search -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon"><svg>...</svg></span>
    <input class="search-bar__input" placeholder="Search" />
    <button class="search-bar__clear"><svg>...</svg></button>
  </div>
</div>

<!-- Search with Filter Chips -->
<div class="search-field">
  <div class="search-bar">
    <div class="search-bar__input-wrapper">
      <span class="search-bar__icon"><svg>...</svg></span>
      <input class="search-bar__input" placeholder="Search" />
      <button class="search-bar__clear"><svg>...</svg></button>
    </div>
  </div>
  <div class="search-field__filters">
    <button class="search-field__chip search-field__chip--active">All</button>
    <button class="search-field__chip">Unread</button>
    <button class="search-field__chip">Groups</button>
    <button class="search-field__chip">Photos</button>
    <button class="search-field__chip">Videos</button>
    <button class="search-field__chip">Audio</button>
    <button class="search-field__chip">Documents</button>
    <button class="search-field__chip">Gifs</button>
    <button class="search-field__chip">Links</button>
  </div>
</div>`})}),e.jsx(n,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Simple — Placeholder",description:"Idle state with 'Search' placeholder text and search icon."}),e.jsx(t,{title:"Simple — Default",description:"Unfocused state, visually same as placeholder."}),e.jsx(t,{title:"Simple — Typing",description:"User is typing, clear (×) button appears on the right."}),e.jsx(t,{title:"Simple — Filled",description:"Complete search term entered with clear button visible."}),e.jsx(t,{title:"With Filters — All States",description:"Same search states but with filter chips below. 'All' chip is active (purple) by default."})]})}),e.jsx(n,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Search Icon",description:"Leading search (magnifying glass) icon in secondary color."}),e.jsx(t,{title:"Input Field",description:"Text input with placeholder. 16px font, full width."}),e.jsx(t,{title:"Clear Button",description:"× icon that appears when text is entered. Clears the input on click."}),e.jsx(t,{title:"Filter Chips",description:"Horizontal row of selectable chips. Active chip has purple background with white text."})]})}),e.jsx(n,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Background",description:"var(--cometchat-background-color-04) — Light gray"}),e.jsx(t,{title:"Border",description:"var(--cometchat-border-color-default) — Default border"}),e.jsx(t,{title:"Border Radius",description:"var(--cometchat-radius-max) — Pill shape"}),e.jsx(t,{title:"Icon Color",description:"var(--cometchat-icon-color-secondary) — Medium gray"}),e.jsx(t,{title:"Placeholder",description:"var(--cometchat-text-color-placeholder) — Muted"}),e.jsx(t,{title:"Active Chip BG",description:"var(--cometchat-primary-color) — Purple"}),e.jsx(t,{title:"Chip Border",description:"var(--cometchat-border-color-dark) — Darker gray"})]})}),e.jsx(n,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Design System — Web Chat UI Kits → Search Field (node 17588:77085)"})})]})},te=["All","Unread","Groups","Photos","Videos","Audio","Documents","Gifs","Links"];function r({state:i,value:s="",showFilters:$}){const f=ee(),y=i==="typing"&&s.length>0;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)",width:"100%"},children:[e.jsx("div",{className:"search-bar",children:e.jsxs("div",{className:"search-bar__input-wrapper",children:[e.jsx("span",{className:"search-bar__icon",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"currentColor"})})}),e.jsx("input",{className:"search-bar__input",type:"text",placeholder:f("Search"),value:y?f(s):"",readOnly:!0}),y&&e.jsx("button",{type:"button",className:"search-bar__clear","aria-label":"Clear search",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M1 11L6 6M6 6L11 1M6 6L1 1M6 6L11 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),$&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-1-5)"},children:te.map((j,S)=>e.jsx("button",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:28,padding:"0 10px",borderRadius:"var(--cometchat-radius-1-5)",border:S===0?"1px solid var(--cometchat-primary-color)":"1px solid var(--cometchat-border-color-dark)",background:S===0?"var(--cometchat-primary-color)":"var(--cometchat-background-color-01)",color:S===0?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",fontSize:12,fontWeight:500,lineHeight:"16px",cursor:"pointer",whiteSpace:"nowrap"},children:e.jsx(a,{children:j})},j))})]})}function l({children:i,width:s=380}){return e.jsx("div",{style:{width:s,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:i})}function c({children:i}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:i})}function n({title:i,children:s}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(a,{children:i})}),s]})}function re({language:i,code:s}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]})}function t({title:i,description:s}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(a,{children:i})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"14.4px"},children:e.jsx(a,{children:s})})]})}var F,_,w;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Simple — Placeholder",
  parameters: {
    docs: {
      description: {
        story: "Search bar in idle state with placeholder text."
      }
    }
  },
  render: () => <Wrapper>
      <SearchField state="placeholder" />
    </Wrapper>
}`,...(w=(_=o.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var C,W,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Simple — Default",
  parameters: {
    docs: {
      description: {
        story: "Search bar in default state (unfocused, no text)."
      }
    }
  },
  render: () => <Wrapper>
      <SearchField state="default" />
    </Wrapper>
}`,...(T=(W=d.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var L,k,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Simple — Typing",
  parameters: {
    docs: {
      description: {
        story: "Search bar with partial text input and clear button."
      }
    }
  },
  render: () => <Wrapper>
      <SearchField state="typing" value="S" />
    </Wrapper>
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var P,U,A;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Simple — Filled",
  parameters: {
    docs: {
      description: {
        story: "Search bar with complete text and clear button."
      }
    }
  },
  render: () => <Wrapper>
      <SearchField state="typing" value="Smart" />
    </Wrapper>
}`,...(A=(U=h.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var B,I,M;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "With Filters — Placeholder",
  parameters: {
    docs: {
      description: {
        story: "Search bar with filter chips in idle state."
      }
    }
  },
  render: () => <Wrapper>
      <SearchField state="placeholder" showFilters />
    </Wrapper>
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var H,R,z;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With Filters — Default",
  parameters: {
    docs: {
      description: {
        story: "Search bar with filter chips in default state."
      }
    }
  },
  render: () => <Wrapper>
      <SearchField state="default" showFilters />
    </Wrapper>
}`,...(z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var G,V,N;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "With Filters — Typing",
  parameters: {
    docs: {
      description: {
        story: "Search bar with filter chips and partial text."
      }
    }
  },
  render: () => <Wrapper>
      <SearchField state="typing" value="S" showFilters />
    </Wrapper>
}`,...(N=(V=g.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var E,K,O;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "With Filters — Filled",
  parameters: {
    docs: {
      description: {
        story: "Search bar with filter chips and complete text."
      }
    }
  },
  render: () => <Wrapper>
      <SearchField state="typing" value="Smart" showFilters />
    </Wrapper>
}`,...(O=(K=x.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var Z,X,q;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "All States",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--cometchat-spacing-6)",
    padding: "var(--cometchat-spacing-4)",
    maxWidth: 900
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-4)"
    }}>
        <Label><T>Simple — Placeholder</T></Label>
        <SearchField state="placeholder" />
        <Label><T>Simple — Default</T></Label>
        <SearchField state="default" />
        <Label><T>Simple — Typing</T></Label>
        <SearchField state="typing" value="S" />
        <Label><T>Simple — Filled</T></Label>
        <SearchField state="typing" value="Smart" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-4)"
    }}>
        <Label><T>With Filters — Placeholder</T></Label>
        <SearchField state="placeholder" showFilters />
        <Label><T>With Filters — Default</T></Label>
        <SearchField state="default" showFilters />
        <Label><T>With Filters — Typing</T></Label>
        <SearchField state="typing" value="S" showFilters />
        <Label><T>With Filters — Filled</T></Label>
        <SearchField state="typing" value="Smart" showFilters />
      </div>
    </div>
}`,...(q=(X=v.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,Q,Y;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Simple Search -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon"><svg>...</svg></span>
    <input class="search-bar__input" placeholder="Search" />
    <button class="search-bar__clear"><svg>...</svg></button>
  </div>
</div>

<!-- Search with Filter Chips -->
<div class="search-field">
  <div class="search-bar">
    <div class="search-bar__input-wrapper">
      <span class="search-bar__icon"><svg>...</svg></span>
      <input class="search-bar__input" placeholder="Search" />
      <button class="search-bar__clear"><svg>...</svg></button>
    </div>
  </div>
  <div class="search-field__filters">
    <button class="search-field__chip search-field__chip--active">All</button>
    <button class="search-field__chip">Unread</button>
    <button class="search-field__chip">Groups</button>
    <button class="search-field__chip">Photos</button>
    <button class="search-field__chip">Videos</button>
    <button class="search-field__chip">Audio</button>
    <button class="search-field__chip">Documents</button>
    <button class="search-field__chip">Gifs</button>
    <button class="search-field__chip">Links</button>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Simple — Placeholder" description="Idle state with 'Search' placeholder text and search icon." />
          <StateCard title="Simple — Default" description="Unfocused state, visually same as placeholder." />
          <StateCard title="Simple — Typing" description="User is typing, clear (×) button appears on the right." />
          <StateCard title="Simple — Filled" description="Complete search term entered with clear button visible." />
          <StateCard title="With Filters — All States" description="Same search states but with filter chips below. 'All' chip is active (purple) by default." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Search Icon" description="Leading search (magnifying glass) icon in secondary color." />
          <StateCard title="Input Field" description="Text input with placeholder. 16px font, full width." />
          <StateCard title="Clear Button" description="× icon that appears when text is entered. Clears the input on click." />
          <StateCard title="Filter Chips" description="Horizontal row of selectable chips. Active chip has purple background with white text." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Background" description="var(--cometchat-background-color-04) — Light gray" />
          <StateCard title="Border" description="var(--cometchat-border-color-default) — Default border" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-max) — Pill shape" />
          <StateCard title="Icon Color" description="var(--cometchat-icon-color-secondary) — Medium gray" />
          <StateCard title="Placeholder" description="var(--cometchat-text-color-placeholder) — Muted" />
          <StateCard title="Active Chip BG" description="var(--cometchat-primary-color) — Purple" />
          <StateCard title="Chip Border" description="var(--cometchat-border-color-dark) — Darker gray" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Search Field (node 17588:77085)" />
      </UsageSection>
    </div>
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const de=["SimplePlaceholder","SimpleDefault","SimpleTyping","SimpleFilled","WithFiltersPlaceholder","WithFiltersDefault","WithFiltersTyping","WithFiltersFilled","AllStates","Usage"];export{v as AllStates,d as SimpleDefault,h as SimpleFilled,o as SimplePlaceholder,p as SimpleTyping,b as Usage,u as WithFiltersDefault,x as WithFiltersFilled,m as WithFiltersPlaceholder,g as WithFiltersTyping,de as __namedExportsOrder,oe as default};
