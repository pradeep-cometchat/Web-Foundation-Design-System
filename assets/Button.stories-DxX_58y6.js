import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t=({variant:i="primary",size:s="md",children:n,loading:a=!1,iconLeft:h,iconRight:f,iconOnly:v=!1,fullWidth:ae=!1,disabled:re,className:ie,...se})=>{const le=["btn",`btn--${i}`,`btn--${s}`,ae&&"btn--full",v&&"btn--icon-only",ie].filter(Boolean).join(" ");return e.jsxs("button",{className:le,disabled:re||a,"aria-busy":a||void 0,"aria-label":v&&typeof n=="string"?n:void 0,...se,children:[a&&e.jsx("span",{className:"btn__spinner","aria-hidden":!0}),!a&&h&&e.jsx("span",{className:"btn__icon btn__icon--left","aria-hidden":!0,children:h}),!v&&!a&&e.jsx("span",{className:"btn__label",children:n}),v&&!a&&n,!a&&f&&e.jsx("span",{className:"btn__icon btn__icon--right","aria-hidden":!0,children:f})]})};try{t.displayName="Button",t.__docgenInfo={description:`Button — the primary interactive element.

Built from Figma specs (160 variants). Uses foundation design tokens
for colors, spacing, radius, shadows, focus rings, and typography.`,displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:'Visual hierarchy. Default: "primary".',name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"link-color"'},{value:'"link-gray"'},{value:'"destructive-primary"'},{value:'"destructive-secondary"'},{value:'"destructive-tertiary"'},{value:'"destructive-link"'}]}},size:{defaultValue:{value:"md"},description:'Size preset. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},children:{defaultValue:null,description:"Button label. Required unless `iconOnly` is true.",name:"children",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"Show a loading spinner and disable interaction.",name:"loading",required:!1,type:{name:"boolean | undefined"}},iconLeft:{defaultValue:null,description:"Icon placed before the label.",name:"iconLeft",required:!1,type:{name:"ReactNode"}},iconRight:{defaultValue:null,description:"Icon placed after the label.",name:"iconRight",required:!1,type:{name:"ReactNode"}},iconOnly:{defaultValue:{value:"false"},description:"Render as icon-only (no label, square aspect).",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},fullWidth:{defaultValue:{value:"false"},description:"Render as full-width.",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const ue={title:"Base Components/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The primary interactive element. Triggers actions, submits forms, or
navigates within the product.

**Hierarchies:** Primary, Secondary, Tertiary, Link color, Link gray,
plus destructive variants for each.

**Sizes:** sm (36px), md (40px), lg (44px), xl (48px).

**States:** Default, Hover, Focused, Disabled, Loading.

All colors, spacing, radius, shadows, and typography use foundation
design tokens (\`var(--color-*)\`, \`var(--radius-*)\`, \`var(--shadow-*)\`, etc.)
so the button stays in sync with the design system automatically.`}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","link-color","link-gray","destructive-primary","destructive-secondary","destructive-tertiary","destructive-link"],description:"Visual hierarchy.",table:{category:"Appearance"}},size:{control:"select",options:["sm","md","lg","xl"],description:"Size preset (height: sm=36, md=40, lg=44, xl=48).",table:{category:"Appearance"}},children:{control:"text",description:"Button label.",table:{category:"Content"}},loading:{control:"boolean",description:"Show spinner and disable interaction.",table:{category:"State"}},disabled:{control:"boolean",description:"Disable the button.",table:{category:"State"}},iconOnly:{control:"boolean",description:"Render as icon-only (square).",table:{category:"Layout"}},fullWidth:{control:"boolean",description:"Render as full-width.",table:{category:"Layout"}}}},l=()=>e.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"var(--font-size-5)",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"star"}),x=()=>e.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"var(--font-size-5)",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"add"}),g=()=>e.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"var(--font-size-5)",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"delete"}),o={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(r,{title:"Standard",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"link-color",children:"Link color"}),e.jsx(t,{variant:"link-gray",children:"Link gray"})]})}),e.jsx(r,{title:"Destructive",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{variant:"destructive-primary",children:"Primary"}),e.jsx(t,{variant:"destructive-secondary",children:"Secondary"}),e.jsx(t,{variant:"destructive-tertiary",children:"Tertiary"}),e.jsx(t,{variant:"destructive-link",children:"Link"})]})})]})},d={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"xl",children:"Extra large"})]})},c={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(r,{title:"Primary states",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Default"}),e.jsx(t,{variant:"primary",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"primary",loading:!0,children:"Loading"})]})}),e.jsx(r,{title:"Secondary states",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",children:"Default"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"secondary",loading:!0,children:"Loading"})]})}),e.jsx(r,{title:"Destructive states",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(t,{variant:"destructive-primary",children:"Default"}),e.jsx(t,{variant:"destructive-primary",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"destructive-primary",loading:!0,children:"Loading"})]})})]})},u={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(r,{title:"Icon left",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(t,{variant:"primary",iconLeft:e.jsx(l,{}),children:"Favorite"}),e.jsx(t,{variant:"secondary",iconLeft:e.jsx(x,{}),children:"Add item"}),e.jsx(t,{variant:"destructive-primary",iconLeft:e.jsx(g,{}),children:"Delete"})]})}),e.jsx(r,{title:"Icon right",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(t,{variant:"primary",iconRight:e.jsx(l,{}),children:"Favorite"}),e.jsx(t,{variant:"secondary",iconRight:e.jsx(x,{}),children:"Add item"})]})}),e.jsx(r,{title:"Icon only",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(t,{variant:"primary",size:"sm",iconOnly:!0,children:e.jsx(l,{})}),e.jsx(t,{variant:"primary",size:"md",iconOnly:!0,children:e.jsx(l,{})}),e.jsx(t,{variant:"primary",size:"lg",iconOnly:!0,children:e.jsx(l,{})}),e.jsx(t,{variant:"primary",size:"xl",iconOnly:!0,children:e.jsx(l,{})}),e.jsx(t,{variant:"secondary",size:"md",iconOnly:!0,children:e.jsx(x,{})}),e.jsx(t,{variant:"destructive-primary",size:"md",iconOnly:!0,children:e.jsx(g,{})})]})})]})},p={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsxs("div",{style:{width:360,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(t,{variant:"primary",fullWidth:!0,children:"Sign in"}),e.jsx(t,{variant:"secondary",fullWidth:!0,children:"Create account"}),e.jsx(t,{variant:"tertiary",fullWidth:!0,children:"Skip for now"})]})},y={parameters:{controls:{disable:!0},layout:"padded"},render:()=>{const i=["primary","secondary","tertiary","destructive-primary","destructive-secondary"],s=["sm","md","lg","xl"];return e.jsx("div",{style:{overflow:"auto"},children:e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"12px 16px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:j}),s.map(n=>e.jsx("th",{style:j,children:n},n))]})}),e.jsx("tbody",{children:i.map(n=>e.jsxs("tr",{children:[e.jsx("td",{style:B,children:e.jsx("code",{style:{fontSize:"var(--font-size-0)"},children:n})}),s.map(a=>e.jsx("td",{style:B,children:e.jsx(t,{variant:n,size:a,children:"Button"})},a))]},n))})]})})}};function r({title:i,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:i}),s]})}const j={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",textAlign:"left",padding:"4px 8px"},B={padding:"4px 8px",verticalAlign:"middle"},m={args:{variant:"primary",size:"md",children:"Button",loading:!1,disabled:!1,iconOnly:!1,fullWidth:!1},parameters:{docs:{disable:!0}}};var b,S,z,I,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <Section title="Standard">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        flexWrap: "wrap",
        alignItems: "center"
      }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="link-color">Link color</Button>
          <Button variant="link-gray">Link gray</Button>
        </div>
      </Section>
      <Section title="Destructive">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        flexWrap: "wrap",
        alignItems: "center"
      }}>
          <Button variant="destructive-primary">Primary</Button>
          <Button variant="destructive-secondary">Secondary</Button>
          <Button variant="destructive-tertiary">Tertiary</Button>
          <Button variant="destructive-link">Link</Button>
        </div>
      </Section>
    </div>
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:"All hierarchy variants at default state.",...(D=(I=o.parameters)==null?void 0:I.docs)==null?void 0:D.description}}};var L,k,w,_,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-3)",
    alignItems: "center"
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
    </div>
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"All four sizes.",...(W=(_=d.parameters)==null?void 0:_.docs)==null?void 0:W.description}}};var A,O,R,F,V;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <Section title="Primary states">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
        </div>
      </Section>
      <Section title="Secondary states">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" loading>Loading</Button>
        </div>
      </Section>
      <Section title="Destructive states">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
          <Button variant="destructive-primary">Default</Button>
          <Button variant="destructive-primary" disabled>Disabled</Button>
          <Button variant="destructive-primary" loading>Loading</Button>
        </div>
      </Section>
    </div>
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:"Interactive states for Primary.",...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.description}}};var N,q,P,T,M;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <Section title="Icon left">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
          <Button variant="primary" iconLeft={<StarIcon />}>Favorite</Button>
          <Button variant="secondary" iconLeft={<AddIcon />}>Add item</Button>
          <Button variant="destructive-primary" iconLeft={<DeleteIcon />}>Delete</Button>
        </div>
      </Section>
      <Section title="Icon right">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
          <Button variant="primary" iconRight={<StarIcon />}>Favorite</Button>
          <Button variant="secondary" iconRight={<AddIcon />}>Add item</Button>
        </div>
      </Section>
      <Section title="Icon only">
        <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
          <Button variant="primary" size="sm" iconOnly><StarIcon /></Button>
          <Button variant="primary" size="md" iconOnly><StarIcon /></Button>
          <Button variant="primary" size="lg" iconOnly><StarIcon /></Button>
          <Button variant="primary" size="xl" iconOnly><StarIcon /></Button>
          <Button variant="secondary" size="md" iconOnly><AddIcon /></Button>
          <Button variant="destructive-primary" size="md" iconOnly><DeleteIcon /></Button>
        </div>
      </Section>
    </div>
}`,...(P=(q=u.parameters)==null?void 0:q.docs)==null?void 0:P.source},description:{story:"Buttons with leading and trailing icons.",...(M=(T=u.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var C,E,H,G,$;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    width: 360,
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)"
  }}>
      <Button variant="primary" fullWidth>Sign in</Button>
      <Button variant="secondary" fullWidth>Create account</Button>
      <Button variant="tertiary" fullWidth>Skip for now</Button>
    </div>
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source},description:{story:"Full-width buttons.",...($=(G=p.parameters)==null?void 0:G.docs)==null?void 0:$.description}}};var U,J,K,Q,X;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => {
    const variants: ButtonVariant[] = ["primary", "secondary", "tertiary", "destructive-primary", "destructive-secondary"];
    const sizes: ButtonSize[] = ["sm", "md", "lg", "xl"];
    return <div style={{
      overflow: "auto"
    }}>
        <table style={{
        borderCollapse: "separate",
        borderSpacing: "12px 16px"
      }}>
          <thead>
            <tr>
              <th style={thStyle} />
              {sizes.map(s => <th key={s} style={thStyle}>{s}</th>)}
            </tr>
          </thead>
          <tbody>
            {variants.map(v => <tr key={v}>
                <td style={tdStyle}><code style={{
                fontSize: "var(--font-size-0)"
              }}>{v}</code></td>
                {sizes.map(s => <td key={s} style={tdStyle}>
                    <Button variant={v} size={s}>Button</Button>
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"All sizes × all hierarchies matrix.",...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,te,ne;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Button",
    loading: false,
    disabled: false,
    iconOnly: false,
    fullWidth: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure the Button.",...(ne=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};const pe=["Hierarchies","Sizes","States","WithIcons","FullWidth","Matrix","Playground"];export{p as FullWidth,o as Hierarchies,y as Matrix,m as Playground,d as Sizes,c as States,u as WithIcons,pe as __namedExportsOrder,ue as default};
