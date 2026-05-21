import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                  */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const se={title:"Core Components/Conversation List/Search",tags:["autodocs"],parameters:{layout:"centered"}},n={name:"Simple — Placeholder",parameters:{docs:{description:{story:"Search bar in idle state with placeholder text."}}},render:()=>e.jsx(c,{children:e.jsx(a,{state:"placeholder"})})},o={name:"Simple — Default",parameters:{docs:{description:{story:"Search bar in default state (unfocused, no text)."}}},render:()=>e.jsx(c,{children:e.jsx(a,{state:"default"})})},d={name:"Simple — Typing",parameters:{docs:{description:{story:"Search bar with partial text input and clear button."}}},render:()=>e.jsx(c,{children:e.jsx(a,{state:"typing",value:"S"})})},p={name:"Simple — Filled",parameters:{docs:{description:{story:"Search bar with complete text and clear button."}}},render:()=>e.jsx(c,{children:e.jsx(a,{state:"typing",value:"Smart"})})},h={name:"With Filters — Placeholder",parameters:{docs:{description:{story:"Search bar with filter chips in idle state."}}},render:()=>e.jsx(c,{children:e.jsx(a,{state:"placeholder",showFilters:!0})})},m={name:"With Filters — Default",parameters:{docs:{description:{story:"Search bar with filter chips in default state."}}},render:()=>e.jsx(c,{children:e.jsx(a,{state:"default",showFilters:!0})})},u={name:"With Filters — Typing",parameters:{docs:{description:{story:"Search bar with filter chips and partial text."}}},render:()=>e.jsx(c,{children:e.jsx(a,{state:"typing",value:"S",showFilters:!0})})},g={name:"With Filters — Filled",parameters:{docs:{description:{story:"Search bar with filter chips and complete text."}}},render:()=>e.jsx(c,{children:e.jsx(a,{state:"typing",value:"Smart",showFilters:!0})})},x={name:"All States",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-4)",maxWidth:900},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(s,{children:"Simple — Placeholder"}),e.jsx(a,{state:"placeholder"}),e.jsx(s,{children:"Simple — Default"}),e.jsx(a,{state:"default"}),e.jsx(s,{children:"Simple — Typing"}),e.jsx(a,{state:"typing",value:"S"}),e.jsx(s,{children:"Simple — Filled"}),e.jsx(a,{state:"typing",value:"Smart"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(s,{children:"With Filters — Placeholder"}),e.jsx(a,{state:"placeholder",showFilters:!0}),e.jsx(s,{children:"With Filters — Default"}),e.jsx(a,{state:"default",showFilters:!0}),e.jsx(s,{children:"With Filters — Typing"}),e.jsx(a,{state:"typing",value:"S",showFilters:!0}),e.jsx(s,{children:"With Filters — Filled"}),e.jsx(a,{state:"typing",value:"Smart",showFilters:!0})]})]})},v={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(l,{title:"HTML Structure",children:e.jsx($,{language:"HTML",code:`<!-- Simple Search -->
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
</div>`})}),e.jsx(l,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Simple — Placeholder",description:"Idle state with 'Search' placeholder text and search icon."}),e.jsx(t,{title:"Simple — Default",description:"Unfocused state, visually same as placeholder."}),e.jsx(t,{title:"Simple — Typing",description:"User is typing, clear (×) button appears on the right."}),e.jsx(t,{title:"Simple — Filled",description:"Complete search term entered with clear button visible."}),e.jsx(t,{title:"With Filters — All States",description:"Same search states but with filter chips below. 'All' chip is active (purple) by default."})]})}),e.jsx(l,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Search Icon",description:"Leading search (magnifying glass) icon in secondary color."}),e.jsx(t,{title:"Input Field",description:"Text input with placeholder. 16px font, full width."}),e.jsx(t,{title:"Clear Button",description:"× icon that appears when text is entered. Clears the input on click."}),e.jsx(t,{title:"Filter Chips",description:"Horizontal row of selectable chips. Active chip has purple background with white text."})]})}),e.jsx(l,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Background",description:"var(--cometchat-background-color-04) — Light gray"}),e.jsx(t,{title:"Border",description:"var(--cometchat-border-color-default) — Default border"}),e.jsx(t,{title:"Border Radius",description:"var(--cometchat-radius-max) — Pill shape"}),e.jsx(t,{title:"Icon Color",description:"var(--cometchat-icon-color-secondary) — Medium gray"}),e.jsx(t,{title:"Placeholder",description:"var(--cometchat-text-color-placeholder) — Muted"}),e.jsx(t,{title:"Active Chip BG",description:"var(--cometchat-primary-color) — Purple"}),e.jsx(t,{title:"Chip Border",description:"var(--cometchat-border-color-dark) — Darker gray"})]})}),e.jsx(l,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Design System — Web Chat UI Kits → Search Field (node 17588:77085)"})})]})},Y=["All","Unread","Groups","Photos","Videos","Audio","Documents","Gifs","Links"];function a({state:r,value:i="",showFilters:Q}){const S=r==="typing"&&i.length>0;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)",width:"100%"},children:[e.jsx("div",{className:"search-bar",children:e.jsxs("div",{className:"search-bar__input-wrapper",children:[e.jsx("span",{className:"search-bar__icon",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"currentColor"})})}),e.jsx("input",{className:"search-bar__input",type:"text",placeholder:"Search",value:S?i:"",readOnly:!0}),S&&e.jsx("button",{type:"button",className:"search-bar__clear","aria-label":"Clear search",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M1 11L6 6M6 6L11 1M6 6L1 1M6 6L11 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),Q&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-1-5)"},children:Y.map((f,b)=>e.jsx("button",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:28,padding:"0 10px",borderRadius:"var(--cometchat-radius-1-5)",border:b===0?"1px solid var(--cometchat-primary-color)":"1px solid var(--cometchat-border-color-dark)",background:b===0?"var(--cometchat-primary-color)":"var(--cometchat-background-color-01)",color:b===0?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",fontSize:12,fontWeight:500,lineHeight:"16px",cursor:"pointer",whiteSpace:"nowrap"},children:f},f))})]})}function c({children:r,width:i=380}){return e.jsx("div",{style:{width:i,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--color-bg-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:r})}function s({children:r}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:r})}function l({title:r,children:i}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:r}),i]})}function $({language:r,code:i}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:i})})]})}function t({title:r,description:i}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:r}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"14.4px"},children:i})]})}var y,j,F;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(F=(j=n.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var _,w,C;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var W,L,T;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var D,k,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(k=p.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var U,A,B;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var I,M,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(M=m.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var R,z,G;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var V,N,E;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(N=g.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var K,O,Z;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        <Label>Simple — Placeholder</Label>
        <SearchField state="placeholder" />
        <Label>Simple — Default</Label>
        <SearchField state="default" />
        <Label>Simple — Typing</Label>
        <SearchField state="typing" value="S" />
        <Label>Simple — Filled</Label>
        <SearchField state="typing" value="Smart" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-4)"
    }}>
        <Label>With Filters — Placeholder</Label>
        <SearchField state="placeholder" showFilters />
        <Label>With Filters — Default</Label>
        <SearchField state="default" showFilters />
        <Label>With Filters — Typing</Label>
        <SearchField state="typing" value="S" showFilters />
        <Label>With Filters — Filled</Label>
        <SearchField state="typing" value="Smart" showFilters />
      </div>
    </div>
}`,...(Z=(O=x.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var X,q,J;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(q=v.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const ce=["SimplePlaceholder","SimpleDefault","SimpleTyping","SimpleFilled","WithFiltersPlaceholder","WithFiltersDefault","WithFiltersTyping","WithFiltersFilled","AllStates","Usage"];export{x as AllStates,o as SimpleDefault,p as SimpleFilled,n as SimplePlaceholder,d as SimpleTyping,v as Usage,m as WithFiltersDefault,g as WithFiltersFilled,h as WithFiltersPlaceholder,u as WithFiltersTyping,ce as __namedExportsOrder,se as default};
