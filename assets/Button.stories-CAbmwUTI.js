import{j as n}from"./jsx-runtime-BYYWji4R.js";import{B as t}from"./Button.impl-CJfI-0eY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const vn={title:"Base Components/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The primary interactive element. Triggers actions, submits forms, or
navigates within the product.

**Hierarchies:** Primary, Secondary, Tertiary, Link color, Link gray,
plus destructive variants for each.

**Sizes:** sm (36px), md (40px), lg (44px), xl (48px).

**States:** Default, Hover, Focused, Disabled, Loading.

All colors, spacing, radius, shadows, and typography use foundation
design tokens (\`var(--color-*)\`, \`var(--radius-*)\`, \`var(--shadow-*)\`, etc.)
so the button stays in sync with the design system automatically.`}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","link-color","link-gray","destructive-primary","destructive-secondary","destructive-tertiary","destructive-link"],description:"Visual hierarchy.",table:{category:"Appearance"}},size:{control:"select",options:["sm","md","lg","xl"],description:"Size preset (height: sm=36, md=40, lg=44, xl=48).",table:{category:"Appearance"}},children:{control:"text",description:"Button label.",table:{category:"Content"}},loading:{control:"boolean",description:"Show spinner and disable interaction.",table:{category:"State"}},disabled:{control:"boolean",description:"Disable the button.",table:{category:"State"}},iconOnly:{control:"boolean",description:"Render as icon-only (square).",table:{category:"Layout"}},fullWidth:{control:"boolean",description:"Render as full-width.",table:{category:"Layout"}}}},s=()=>n.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"var(--font-size-5)",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"star"}),b=()=>n.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"var(--font-size-5)",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"add"}),g=()=>n.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"var(--font-size-5)",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"delete"}),o={parameters:{controls:{disable:!0},layout:"padded"},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[n.jsx(e,{title:"Standard",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",flexWrap:"wrap",alignItems:"center"},children:[n.jsx(t,{variant:"primary",children:"Primary"}),n.jsx(t,{variant:"secondary",children:"Secondary"}),n.jsx(t,{variant:"tertiary",children:"Tertiary"}),n.jsx(t,{variant:"link-color",children:"Link color"}),n.jsx(t,{variant:"link-gray",children:"Link gray"})]})}),n.jsx(e,{title:"Destructive",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",flexWrap:"wrap",alignItems:"center"},children:[n.jsx(t,{variant:"destructive-primary",children:"Primary"}),n.jsx(t,{variant:"destructive-secondary",children:"Secondary"}),n.jsx(t,{variant:"destructive-tertiary",children:"Tertiary"}),n.jsx(t,{variant:"destructive-link",children:"Link"})]})})]})},l={parameters:{controls:{disable:!0},layout:"padded"},render:()=>n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[n.jsx(t,{size:"sm",children:"Small"}),n.jsx(t,{size:"md",children:"Medium"}),n.jsx(t,{size:"lg",children:"Large"}),n.jsx(t,{size:"xl",children:"Extra large"})]})},d={parameters:{controls:{disable:!0},layout:"padded"},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[n.jsx(e,{title:"Primary states",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[n.jsx(t,{variant:"primary",children:"Default"}),n.jsx(t,{variant:"primary",disabled:!0,children:"Disabled"}),n.jsx(t,{variant:"primary",loading:!0,children:"Loading"})]})}),n.jsx(e,{title:"Secondary states",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[n.jsx(t,{variant:"secondary",children:"Default"}),n.jsx(t,{variant:"secondary",disabled:!0,children:"Disabled"}),n.jsx(t,{variant:"secondary",loading:!0,children:"Loading"})]})}),n.jsx(e,{title:"Destructive states",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[n.jsx(t,{variant:"destructive-primary",children:"Default"}),n.jsx(t,{variant:"destructive-primary",disabled:!0,children:"Disabled"}),n.jsx(t,{variant:"destructive-primary",loading:!0,children:"Loading"})]})})]})},c={parameters:{controls:{disable:!0},layout:"padded"},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[n.jsx(e,{title:"Icon left",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[n.jsx(t,{variant:"primary",iconLeft:n.jsx(s,{}),children:"Favorite"}),n.jsx(t,{variant:"secondary",iconLeft:n.jsx(b,{}),children:"Add item"}),n.jsx(t,{variant:"destructive-primary",iconLeft:n.jsx(g,{}),children:"Delete"})]})}),n.jsx(e,{title:"Icon right",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[n.jsx(t,{variant:"primary",iconRight:n.jsx(s,{}),children:"Favorite"}),n.jsx(t,{variant:"secondary",iconRight:n.jsx(b,{}),children:"Add item"})]})}),n.jsx(e,{title:"Icon only",children:n.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[n.jsx(t,{variant:"primary",size:"sm",iconOnly:!0,children:n.jsx(s,{})}),n.jsx(t,{variant:"primary",size:"md",iconOnly:!0,children:n.jsx(s,{})}),n.jsx(t,{variant:"primary",size:"lg",iconOnly:!0,children:n.jsx(s,{})}),n.jsx(t,{variant:"primary",size:"xl",iconOnly:!0,children:n.jsx(s,{})}),n.jsx(t,{variant:"secondary",size:"md",iconOnly:!0,children:n.jsx(b,{})}),n.jsx(t,{variant:"destructive-primary",size:"md",iconOnly:!0,children:n.jsx(g,{})})]})})]})},p={parameters:{controls:{disable:!0},layout:"padded"},render:()=>n.jsxs("div",{style:{width:360,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[n.jsx(t,{variant:"primary",fullWidth:!0,children:"Sign in"}),n.jsx(t,{variant:"secondary",fullWidth:!0,children:"Create account"}),n.jsx(t,{variant:"tertiary",fullWidth:!0,children:"Skip for now"})]})},u={parameters:{controls:{disable:!0},layout:"padded"},render:()=>{const i=["primary","secondary","tertiary","destructive-primary","destructive-secondary"],a=["sm","md","lg","xl"];return n.jsx("div",{style:{overflow:"auto"},children:n.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"12px 16px"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:x}),a.map(r=>n.jsx("th",{style:x,children:r},r))]})}),n.jsx("tbody",{children:i.map(r=>n.jsxs("tr",{children:[n.jsx("td",{style:f,children:n.jsx("code",{style:{fontSize:"var(--font-size-0)"},children:r})}),a.map(h=>n.jsx("td",{style:f,children:n.jsx(t,{variant:r,size:h,children:"Button"})},h))]},r))})]})})}};function e({title:i,children:a}){return n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:i}),a]})}const x={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",textAlign:"left",padding:"4px 8px"},f={padding:"4px 8px",verticalAlign:"middle"},S=({language:i,code:a})=>n.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-neutral-25)"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-neutral-200)",background:"var(--color-neutral-50)"},children:n.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-600)"},children:i})}),n.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-neutral-800)",overflowX:"auto"},children:n.jsx("code",{children:a})})]}),m=({title:i,items:a})=>n.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-xl)",background:"var(--color-white)"},children:[n.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:i}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:a.map(r=>n.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-neutral-800)",background:"var(--color-neutral-50)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-neutral-200)",display:"inline-block",width:"fit-content"},children:[".",r]},r))})]}),v={args:{variant:"primary",size:"md",children:"Button",loading:!1,disabled:!1,iconOnly:!1,fullWidth:!1},parameters:{docs:{disable:!0}}},y={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>n.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[n.jsx(e,{title:"HTML",children:n.jsx(S,{language:"HTML",code:`<!-- Primary button -->
<button class="btn btn--primary btn--md">
  Save changes
</button>

<!-- Secondary button with leading icon -->
<button class="btn btn--secondary btn--md">
  <span class="btn__icon btn__icon--left" aria-hidden="true">
    <span class="icon-outlined">add</span>
  </span>
  <span class="btn__label">Add item</span>
</button>

<!-- Destructive button -->
<button class="btn btn--destructive-primary btn--md">
  <span class="btn__icon btn__icon--left" aria-hidden="true">
    <span class="icon-outlined">delete</span>
  </span>
  <span class="btn__label">Delete</span>
</button>

<!-- Icon-only button -->
<button class="btn btn--primary btn--md btn--icon-only" aria-label="Favorite">
  <span class="icon-outlined">star</span>
</button>

<!-- Full-width button -->
<button class="btn btn--primary btn--lg btn--full">
  Sign in
</button>

<!-- Disabled button -->
<button class="btn btn--primary btn--md" disabled>
  Disabled
</button>

<!-- Loading button -->
<button class="btn btn--primary btn--md" aria-busy="true" disabled>
  <span class="btn__spinner" aria-hidden="true"></span>
</button>`})}),n.jsx(e,{title:"CSS (Foundation Variables)",children:n.jsx(S,{language:"CSS",code:`.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease,
    border-color 120ms ease, box-shadow 120ms ease;
  white-space: nowrap;
  user-select: none;
  outline: none;
}

.btn:focus-visible {
  box-shadow: var(--focus-ring-xs);
}

/* Sizes */
.btn--sm { height: 36px; padding: var(--space-2) var(--space-3); font-size: var(--font-size-2); line-height: var(--line-height-body); }
.btn--md { height: 40px; padding: 10px var(--space-3-5); font-size: var(--font-size-2); line-height: var(--line-height-body); }
.btn--lg { height: 44px; padding: 10px var(--space-4); font-size: var(--font-size-3); line-height: var(--line-height-h4); }
.btn--xl { height: 48px; padding: var(--space-3) 18px; font-size: var(--font-size-3); line-height: var(--line-height-h4); }

/* Primary */
.btn--primary { background: var(--color-primary); color: var(--color-white); box-shadow: var(--shadow-xs); }
.btn--primary:hover { background: var(--color-ep-700); }
.btn--primary:disabled { background: var(--color-neutral-lm-100); color: var(--color-neutral-lm-400); border: 1px solid var(--color-neutral-lm-200); cursor: not-allowed; }

/* Secondary */
.btn--secondary { background: var(--color-white); color: var(--color-neutral-lm-700); border: 1px solid var(--color-neutral-lm-300); box-shadow: var(--shadow-xs); }
.btn--secondary:hover { background: var(--color-neutral-lm-50); color: var(--color-neutral-lm-800); }

/* Tertiary */
.btn--tertiary { background: transparent; color: var(--color-neutral-lm-600); }
.btn--tertiary:hover { background: var(--color-neutral-lm-50); color: var(--color-neutral-lm-700); }

/* Destructive Primary */
.btn--destructive-primary { background: var(--color-error); color: var(--color-white); box-shadow: var(--shadow-xs); }
.btn--destructive-primary:hover { background: var(--color-error-700); }
.btn--destructive-primary:focus-visible { box-shadow: var(--focus-ring-error-xs); }

/* Full width & Icon only */
.btn--full { width: 100%; }
.btn--icon-only { width: 40px; padding: 0; } /* adjust width per size */

/* Loading spinner */
.btn__spinner { width: 16px; height: 16px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: btn-spin 600ms linear infinite; }
@keyframes btn-spin { to { transform: rotate(360deg); } }`})}),n.jsx(e,{title:"Available Classes",children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[n.jsx(m,{title:"Variants",items:["btn--primary","btn--secondary","btn--tertiary","btn--link-color","btn--link-gray","btn--destructive-primary","btn--destructive-secondary","btn--destructive-tertiary","btn--destructive-link"]}),n.jsx(m,{title:"Sizes",items:["btn--sm","btn--md","btn--lg","btn--xl"]}),n.jsx(m,{title:"Modifiers",items:["btn--full","btn--icon-only"]}),n.jsx(m,{title:"Child Elements",items:["btn__label","btn__icon","btn__icon--left","btn__icon--right","btn__spinner"]})]})})]})};var j,B,z,w,k;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(z=(B=o.parameters)==null?void 0:B.docs)==null?void 0:z.source},description:{story:"All hierarchy variants at default state.",...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var _,I,D,L,C;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"All four sizes.",...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var F,A,W,T,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(A=d.parameters)==null?void 0:A.docs)==null?void 0:W.source},description:{story:"Interactive states for Primary.",...(O=(T=d.parameters)==null?void 0:T.docs)==null?void 0:O.description}}};var P,M,R,H,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Buttons with leading and trailing icons.",...(V=(H=c.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var G,E,N,U,q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source},description:{story:"Full-width buttons.",...(q=(U=p.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var X,J,K,Q,Y;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"All sizes × all hierarchies matrix.",...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var Z,$,nn,tn,en;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(nn=($=v.parameters)==null?void 0:$.docs)==null?void 0:nn.source},description:{story:"Interactive playground — use the controls panel to configure the Button.",...(en=(tn=v.parameters)==null?void 0:tn.docs)==null?void 0:en.description}}};var rn,an,sn,on,ln;y.parameters={...y.parameters,docs:{...(rn=y.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <Section title="HTML">
        <CodeCard language="HTML" code={\`<!-- Primary button -->
<button class="btn btn--primary btn--md">
  Save changes
</button>

<!-- Secondary button with leading icon -->
<button class="btn btn--secondary btn--md">
  <span class="btn__icon btn__icon--left" aria-hidden="true">
    <span class="icon-outlined">add</span>
  </span>
  <span class="btn__label">Add item</span>
</button>

<!-- Destructive button -->
<button class="btn btn--destructive-primary btn--md">
  <span class="btn__icon btn__icon--left" aria-hidden="true">
    <span class="icon-outlined">delete</span>
  </span>
  <span class="btn__label">Delete</span>
</button>

<!-- Icon-only button -->
<button class="btn btn--primary btn--md btn--icon-only" aria-label="Favorite">
  <span class="icon-outlined">star</span>
</button>

<!-- Full-width button -->
<button class="btn btn--primary btn--lg btn--full">
  Sign in
</button>

<!-- Disabled button -->
<button class="btn btn--primary btn--md" disabled>
  Disabled
</button>

<!-- Loading button -->
<button class="btn btn--primary btn--md" aria-busy="true" disabled>
  <span class="btn__spinner" aria-hidden="true"></span>
</button>\`} />
      </Section>

      <Section title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease,
    border-color 120ms ease, box-shadow 120ms ease;
  white-space: nowrap;
  user-select: none;
  outline: none;
}

.btn:focus-visible {
  box-shadow: var(--focus-ring-xs);
}

/* Sizes */
.btn--sm { height: 36px; padding: var(--space-2) var(--space-3); font-size: var(--font-size-2); line-height: var(--line-height-body); }
.btn--md { height: 40px; padding: 10px var(--space-3-5); font-size: var(--font-size-2); line-height: var(--line-height-body); }
.btn--lg { height: 44px; padding: 10px var(--space-4); font-size: var(--font-size-3); line-height: var(--line-height-h4); }
.btn--xl { height: 48px; padding: var(--space-3) 18px; font-size: var(--font-size-3); line-height: var(--line-height-h4); }

/* Primary */
.btn--primary { background: var(--color-primary); color: var(--color-white); box-shadow: var(--shadow-xs); }
.btn--primary:hover { background: var(--color-ep-700); }
.btn--primary:disabled { background: var(--color-neutral-lm-100); color: var(--color-neutral-lm-400); border: 1px solid var(--color-neutral-lm-200); cursor: not-allowed; }

/* Secondary */
.btn--secondary { background: var(--color-white); color: var(--color-neutral-lm-700); border: 1px solid var(--color-neutral-lm-300); box-shadow: var(--shadow-xs); }
.btn--secondary:hover { background: var(--color-neutral-lm-50); color: var(--color-neutral-lm-800); }

/* Tertiary */
.btn--tertiary { background: transparent; color: var(--color-neutral-lm-600); }
.btn--tertiary:hover { background: var(--color-neutral-lm-50); color: var(--color-neutral-lm-700); }

/* Destructive Primary */
.btn--destructive-primary { background: var(--color-error); color: var(--color-white); box-shadow: var(--shadow-xs); }
.btn--destructive-primary:hover { background: var(--color-error-700); }
.btn--destructive-primary:focus-visible { box-shadow: var(--focus-ring-error-xs); }

/* Full width & Icon only */
.btn--full { width: 100%; }
.btn--icon-only { width: 40px; padding: 0; } /* adjust width per size */

/* Loading spinner */
.btn__spinner { width: 16px; height: 16px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: btn-spin 600ms linear infinite; }
@keyframes btn-spin { to { transform: rotate(360deg); } }\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <ClassGroup title="Variants" items={["btn--primary", "btn--secondary", "btn--tertiary", "btn--link-color", "btn--link-gray", "btn--destructive-primary", "btn--destructive-secondary", "btn--destructive-tertiary", "btn--destructive-link"]} />
          <ClassGroup title="Sizes" items={["btn--sm", "btn--md", "btn--lg", "btn--xl"]} />
          <ClassGroup title="Modifiers" items={["btn--full", "btn--icon-only"]} />
          <ClassGroup title="Child Elements" items={["btn__label", "btn__icon", "btn__icon--left", "btn__icon--right", "btn__spinner"]} />
        </div>
      </Section>
    </div>
}`,...(sn=(an=y.parameters)==null?void 0:an.docs)==null?void 0:sn.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(ln=(on=y.parameters)==null?void 0:on.docs)==null?void 0:ln.description}}};const yn=["Hierarchies","Sizes","States","WithIcons","FullWidth","Matrix","Playground","Usage"];export{p as FullWidth,o as Hierarchies,u as Matrix,v as Playground,l as Sizes,d as States,y as Usage,c as WithIcons,yn as __namedExportsOrder,vn as default};
