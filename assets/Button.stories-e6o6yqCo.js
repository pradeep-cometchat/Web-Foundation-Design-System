import{j as t}from"./jsx-runtime-BYYWji4R.js";import{T as e}from"./T-C6nayWAE.js";import{B as n}from"./Button.impl-BOJXJy5u.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ht={title:"Base Components/Button",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The primary interactive element. Triggers actions, submits forms, or
navigates within the product.

**Hierarchies:** Primary, Secondary, Tertiary, Link color, Link gray,
plus destructive variants for each.

**Sizes:** sm (36px), md (40px), lg (44px), xl (48px).

**States:** Default, Hover, Focused, Disabled, Loading.

All colors, spacing, radius, shadows, and typography use foundation
design tokens (\`var(--color-*)\`, \`var(--radius-*)\`, \`var(--shadow-*)\`, etc.)
so the button stays in sync with the design system automatically.`}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","link-color","link-gray","destructive-primary","destructive-secondary","destructive-tertiary","destructive-link"],description:"Visual hierarchy.",table:{category:"Appearance"}},size:{control:"select",options:["sm","md","lg","xl"],description:"Size preset (height: sm=36, md=40, lg=44, xl=48).",table:{category:"Appearance"}},children:{control:"text",description:"Button label.",table:{category:"Content"}},loading:{control:"boolean",description:"Show spinner and disable interaction.",table:{category:"State"}},disabled:{control:"boolean",description:"Disable the button.",table:{category:"State"}},iconOnly:{control:"boolean",description:"Render as icon-only (square).",table:{category:"Layout"}},fullWidth:{control:"boolean",description:"Render as full-width.",table:{category:"Layout"}}}},s=()=>t.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"20px",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"star"}),v=()=>t.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"20px",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"add"}),g=()=>t.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"20px",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:"delete"}),c={parameters:{controls:{disable:!0},layout:"padded"},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[t.jsx(a,{title:"Standard",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",flexWrap:"wrap",alignItems:"center"},children:[t.jsx(n,{variant:"primary",children:t.jsx(e,{children:"Primary"})}),t.jsx(n,{variant:"secondary",children:t.jsx(e,{children:"Secondary"})}),t.jsx(n,{variant:"tertiary",children:t.jsx(e,{children:"Tertiary"})}),t.jsx(n,{variant:"link-color",children:t.jsx(e,{children:"Link color"})}),t.jsx(n,{variant:"link-gray",children:t.jsx(e,{children:"Link gray"})})]})}),t.jsx(a,{title:"Destructive",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",flexWrap:"wrap",alignItems:"center"},children:[t.jsx(n,{variant:"destructive-primary",children:t.jsx(e,{children:"Primary"})}),t.jsx(n,{variant:"destructive-secondary",children:t.jsx(e,{children:"Secondary"})}),t.jsx(n,{variant:"destructive-tertiary",children:t.jsx(e,{children:"Tertiary"})}),t.jsx(n,{variant:"destructive-link",children:t.jsx(e,{children:"Link"})})]})})]})},l={parameters:{controls:{disable:!0},layout:"padded"},render:()=>t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:[t.jsx(n,{size:"sm",children:t.jsx(e,{children:"Small"})}),t.jsx(n,{size:"md",children:t.jsx(e,{children:"Medium"})}),t.jsx(n,{size:"lg",children:t.jsx(e,{children:"Large"})}),t.jsx(n,{size:"xl",children:t.jsx(e,{children:"Extra large"})})]})},d={parameters:{controls:{disable:!0},layout:"padded"},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[t.jsx(a,{title:"Primary states",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:[t.jsx(n,{variant:"primary",children:t.jsx(e,{children:"Default"})}),t.jsx(n,{variant:"primary",disabled:!0,children:t.jsx(e,{children:"Disabled"})}),t.jsx(n,{variant:"primary",loading:!0,children:t.jsx(e,{children:"Loading"})})]})}),t.jsx(a,{title:"Secondary states",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:[t.jsx(n,{variant:"secondary",children:t.jsx(e,{children:"Default"})}),t.jsx(n,{variant:"secondary",disabled:!0,children:t.jsx(e,{children:"Disabled"})}),t.jsx(n,{variant:"secondary",loading:!0,children:t.jsx(e,{children:"Loading"})})]})}),t.jsx(a,{title:"Destructive states",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:[t.jsx(n,{variant:"destructive-primary",children:t.jsx(e,{children:"Default"})}),t.jsx(n,{variant:"destructive-primary",disabled:!0,children:t.jsx(e,{children:"Disabled"})}),t.jsx(n,{variant:"destructive-primary",loading:!0,children:t.jsx(e,{children:"Loading"})})]})})]})},p={parameters:{controls:{disable:!0},layout:"padded"},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[t.jsx(a,{title:"Icon left",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:[t.jsx(n,{variant:"primary",iconLeft:t.jsx(s,{}),children:t.jsx(e,{children:"Favorite"})}),t.jsx(n,{variant:"secondary",iconLeft:t.jsx(v,{}),children:t.jsx(e,{children:"Add item"})}),t.jsx(n,{variant:"destructive-primary",iconLeft:t.jsx(g,{}),children:t.jsx(e,{children:"Delete"})})]})}),t.jsx(a,{title:"Icon right",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:[t.jsx(n,{variant:"primary",iconRight:t.jsx(s,{}),children:t.jsx(e,{children:"Favorite"})}),t.jsx(n,{variant:"secondary",iconRight:t.jsx(v,{}),children:t.jsx(e,{children:"Add item"})})]})}),t.jsx(a,{title:"Icon only",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:[t.jsx(n,{variant:"primary",size:"sm",iconOnly:!0,children:t.jsx(s,{})}),t.jsx(n,{variant:"primary",size:"md",iconOnly:!0,children:t.jsx(s,{})}),t.jsx(n,{variant:"primary",size:"lg",iconOnly:!0,children:t.jsx(s,{})}),t.jsx(n,{variant:"primary",size:"xl",iconOnly:!0,children:t.jsx(s,{})}),t.jsx(n,{variant:"secondary",size:"md",iconOnly:!0,children:t.jsx(v,{})}),t.jsx(n,{variant:"destructive-primary",size:"md",iconOnly:!0,children:t.jsx(g,{})})]})})]})},u={parameters:{controls:{disable:!0},layout:"padded"},render:()=>t.jsxs("div",{style:{width:360,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)"},children:[t.jsx(n,{variant:"primary",fullWidth:!0,children:t.jsx(e,{children:"Sign in"})}),t.jsx(n,{variant:"secondary",fullWidth:!0,children:t.jsx(e,{children:"Create account"})}),t.jsx(n,{variant:"tertiary",fullWidth:!0,children:t.jsx(e,{children:"Skip for now"})})]})},m={parameters:{controls:{disable:!0},layout:"padded"},render:()=>{const o=["primary","secondary","tertiary","destructive-primary","destructive-secondary"],i=["sm","md","lg","xl"];return t.jsx("div",{style:{overflow:"auto"},children:t.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"12px 16px"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:f}),i.map(r=>t.jsx("th",{style:f,children:r},r))]})}),t.jsx("tbody",{children:o.map(r=>t.jsxs("tr",{children:[t.jsx("td",{style:j,children:t.jsx("code",{style:{fontSize:"10px"},children:r})}),i.map(x=>t.jsx("td",{style:j,children:t.jsx(n,{variant:r,size:x,children:t.jsx(e,{children:"Button"})})},x))]},r))})]})})}};function a({title:o,children:i}){return t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t.jsx(e,{children:o})}),i]})}const f={fontSize:"10px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",textAlign:"start",padding:"4px 8px"},j={padding:"4px 8px",verticalAlign:"middle"},S=({language:o,code:i})=>t.jsxs("div",{style:{border:"1px solid var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-neutral-color-50)"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-neutral-color-200)",background:"var(--cometchat-neutral-color-50)"},children:t.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-neutral-color-600)"},children:o})}),t.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-neutral-color-800)",overflowX:"auto"},children:t.jsx("code",{children:i})})]}),b=({title:o,items:i})=>t.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-static-white)"},children:[t.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t.jsx(e,{children:o})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:i.map(r=>t.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-neutral-color-800)",background:"var(--cometchat-neutral-color-50)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-neutral-color-200)",display:"inline-block",width:"fit-content"},children:[".",r]},r))})]}),h={args:{variant:"primary",size:"md",children:"Button",loading:!1,disabled:!1,iconOnly:!1,fullWidth:!1},parameters:{docs:{disable:!0}}},y={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>t.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[t.jsx(a,{title:"HTML",children:t.jsx(S,{language:"HTML",code:`<!-- Primary button -->
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
</button>`})}),t.jsx(a,{title:"CSS (CometChat Tokens)",children:t.jsx(S,{language:"CSS",code:`.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--cometchat-spacing-1);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font-family: var(--cometchat-font-family);
  font-weight: 500;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease,
    border-color 120ms ease, box-shadow 120ms ease;
  white-space: nowrap;
  user-select: none;
  outline: none;
}

.btn:focus-visible {
  box-shadow: var(--cometchat-focus-ring);
}

/* Sizes */
.btn--sm { height: 36px; padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3); font-size: 14px; line-height: 16.8px; }
.btn--md { height: 40px; padding: 10px 14px; font-size: 14px; line-height: 16.8px; }
.btn--lg { height: 44px; padding: 10px var(--cometchat-spacing-4); font-size: 16px; line-height: 19.2px; }
.btn--xl { height: 48px; padding: var(--cometchat-spacing-3) 18px; font-size: 16px; line-height: 19.2px; }

/* Primary */
.btn--primary { background: var(--cometchat-primary-color); color: var(--cometchat-static-white); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--primary:hover { background: var(--cometchat-extended-primary-color-900); }
.btn--primary:disabled { background: var(--cometchat-neutral-color-100); color: var(--cometchat-neutral-color-400); border: 1px solid var(--cometchat-neutral-color-200); cursor: not-allowed; }

/* Secondary */
.btn--secondary { background: var(--cometchat-static-white); color: var(--cometchat-neutral-color-700); border: 1px solid var(--cometchat-neutral-color-300); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--secondary:hover { background: var(--cometchat-neutral-color-50); color: var(--cometchat-neutral-color-800); }

/* Tertiary */
.btn--tertiary { background: transparent; color: var(--cometchat-neutral-color-600); }
.btn--tertiary:hover { background: var(--cometchat-neutral-color-50); color: var(--cometchat-neutral-color-700); }

/* Destructive Primary */
.btn--destructive-primary { background: var(--cometchat-error-color); color: var(--cometchat-static-white); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--destructive-primary:hover { background: var(--cometchat-error-color); }
.btn--destructive-primary:focus-visible { box-shadow: var(--cometchat-focus-ring-error); }

/* Full width & Icon only */
.btn--full { width: 100%; }
.btn--icon-only { width: 40px; padding: 0; } /* adjust width per size */

/* Loading spinner */
.btn__spinner { width: 16px; height: 16px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: btn-spin 600ms linear infinite; }
@keyframes btn-spin { to { transform: rotate(360deg); } }`})}),t.jsx(a,{title:"Available Classes",children:t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[t.jsx(b,{title:"Variants",items:["btn--primary","btn--secondary","btn--tertiary","btn--link-color","btn--link-gray","btn--destructive-primary","btn--destructive-secondary","btn--destructive-tertiary","btn--destructive-link"]}),t.jsx(b,{title:"Sizes",items:["btn--sm","btn--md","btn--lg","btn--xl"]}),t.jsx(b,{title:"Modifiers",items:["btn--full","btn--icon-only"]}),t.jsx(b,{title:"Child Elements",items:["btn__label","btn__icon","btn__icon--left","btn__icon--right","btn__spinner"]})]})})]})};var B,T,w,z,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="Standard">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        flexWrap: "wrap",
        alignItems: "center"
      }}>
          <Button variant="primary"><T>Primary</T></Button>
          <Button variant="secondary"><T>Secondary</T></Button>
          <Button variant="tertiary"><T>Tertiary</T></Button>
          <Button variant="link-color"><T>Link color</T></Button>
          <Button variant="link-gray"><T>Link gray</T></Button>
        </div>
      </Section>
      <Section title="Destructive">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        flexWrap: "wrap",
        alignItems: "center"
      }}>
          <Button variant="destructive-primary"><T>Primary</T></Button>
          <Button variant="destructive-secondary"><T>Secondary</T></Button>
          <Button variant="destructive-tertiary"><T>Tertiary</T></Button>
          <Button variant="destructive-link"><T>Link</T></Button>
        </div>
      </Section>
    </div>
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:"All hierarchy variants at default state.",...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.description}}};var _,I,D,L,C;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--cometchat-spacing-3)",
    alignItems: "center"
  }}>
      <Button size="sm"><T>Small</T></Button>
      <Button size="md"><T>Medium</T></Button>
      <Button size="lg"><T>Large</T></Button>
      <Button size="xl"><T>Extra large</T></Button>
    </div>
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"All four sizes.",...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var A,W,F,O,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="Primary states">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        alignItems: "center"
      }}>
          <Button variant="primary"><T>Default</T></Button>
          <Button variant="primary" disabled><T>Disabled</T></Button>
          <Button variant="primary" loading><T>Loading</T></Button>
        </div>
      </Section>
      <Section title="Secondary states">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        alignItems: "center"
      }}>
          <Button variant="secondary"><T>Default</T></Button>
          <Button variant="secondary" disabled><T>Disabled</T></Button>
          <Button variant="secondary" loading><T>Loading</T></Button>
        </div>
      </Section>
      <Section title="Destructive states">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        alignItems: "center"
      }}>
          <Button variant="destructive-primary"><T>Default</T></Button>
          <Button variant="destructive-primary" disabled><T>Disabled</T></Button>
          <Button variant="destructive-primary" loading><T>Loading</T></Button>
        </div>
      </Section>
    </div>
}`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source},description:{story:"Interactive states for Primary.",...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var M,R,H,G,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="Icon left">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        alignItems: "center"
      }}>
          <Button variant="primary" iconLeft={<StarIcon />}><T>Favorite</T></Button>
          <Button variant="secondary" iconLeft={<AddIcon />}><T>Add item</T></Button>
          <Button variant="destructive-primary" iconLeft={<DeleteIcon />}><T>Delete</T></Button>
        </div>
      </Section>
      <Section title="Icon right">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        alignItems: "center"
      }}>
          <Button variant="primary" iconRight={<StarIcon />}><T>Favorite</T></Button>
          <Button variant="secondary" iconRight={<AddIcon />}><T>Add item</T></Button>
        </div>
      </Section>
      <Section title="Icon only">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
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
}`,...(H=(R=p.parameters)==null?void 0:R.docs)==null?void 0:H.source},description:{story:"Buttons with leading and trailing icons.",...(V=(G=p.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};var E,N,U,q,X;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    gap: "var(--cometchat-spacing-3)"
  }}>
      <Button variant="primary" fullWidth><T>Sign in</T></Button>
      <Button variant="secondary" fullWidth><T>Create account</T></Button>
      <Button variant="tertiary" fullWidth><T>Skip for now</T></Button>
    </div>
}`,...(U=(N=u.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:"Full-width buttons.",...(X=(q=u.parameters)==null?void 0:q.docs)==null?void 0:X.description}}};var J,K,Q,Y,Z;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
                fontSize: "10px"
              }}>{v}</code></td>
                {sizes.map(s => <td key={s} style={tdStyle}>
                    <Button variant={v} size={s}><T>Button</T></Button>
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"All sizes × all hierarchies matrix.",...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,tt,nt,et,at;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(nt=(tt=h.parameters)==null?void 0:tt.docs)==null?void 0:nt.source},description:{story:"Interactive playground — use the controls panel to configure the Button.",...(at=(et=h.parameters)==null?void 0:et.docs)==null?void 0:at.description}}};var rt,it,ot,st,ct;y.parameters={...y.parameters,docs:{...(rt=y.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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

      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--cometchat-spacing-1);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font-family: var(--cometchat-font-family);
  font-weight: 500;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease,
    border-color 120ms ease, box-shadow 120ms ease;
  white-space: nowrap;
  user-select: none;
  outline: none;
}

.btn:focus-visible {
  box-shadow: var(--cometchat-focus-ring);
}

/* Sizes */
.btn--sm { height: 36px; padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3); font-size: 14px; line-height: 16.8px; }
.btn--md { height: 40px; padding: 10px 14px; font-size: 14px; line-height: 16.8px; }
.btn--lg { height: 44px; padding: 10px var(--cometchat-spacing-4); font-size: 16px; line-height: 19.2px; }
.btn--xl { height: 48px; padding: var(--cometchat-spacing-3) 18px; font-size: 16px; line-height: 19.2px; }

/* Primary */
.btn--primary { background: var(--cometchat-primary-color); color: var(--cometchat-static-white); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--primary:hover { background: var(--cometchat-extended-primary-color-900); }
.btn--primary:disabled { background: var(--cometchat-neutral-color-100); color: var(--cometchat-neutral-color-400); border: 1px solid var(--cometchat-neutral-color-200); cursor: not-allowed; }

/* Secondary */
.btn--secondary { background: var(--cometchat-static-white); color: var(--cometchat-neutral-color-700); border: 1px solid var(--cometchat-neutral-color-300); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--secondary:hover { background: var(--cometchat-neutral-color-50); color: var(--cometchat-neutral-color-800); }

/* Tertiary */
.btn--tertiary { background: transparent; color: var(--cometchat-neutral-color-600); }
.btn--tertiary:hover { background: var(--cometchat-neutral-color-50); color: var(--cometchat-neutral-color-700); }

/* Destructive Primary */
.btn--destructive-primary { background: var(--cometchat-error-color); color: var(--cometchat-static-white); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--destructive-primary:hover { background: var(--cometchat-error-color); }
.btn--destructive-primary:focus-visible { box-shadow: var(--cometchat-focus-ring-error); }

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
        gap: "var(--cometchat-spacing-3)"
      }}>
          <ClassGroup title="Variants" items={["btn--primary", "btn--secondary", "btn--tertiary", "btn--link-color", "btn--link-gray", "btn--destructive-primary", "btn--destructive-secondary", "btn--destructive-tertiary", "btn--destructive-link"]} />
          <ClassGroup title="Sizes" items={["btn--sm", "btn--md", "btn--lg", "btn--xl"]} />
          <ClassGroup title="Modifiers" items={["btn--full", "btn--icon-only"]} />
          <ClassGroup title="Child Elements" items={["btn__label", "btn__icon", "btn__icon--left", "btn__icon--right", "btn__spinner"]} />
        </div>
      </Section>
    </div>
}`,...(ot=(it=y.parameters)==null?void 0:it.docs)==null?void 0:ot.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(ct=(st=y.parameters)==null?void 0:st.docs)==null?void 0:ct.description}}};const yt=["Hierarchies","Sizes","States","WithIcons","FullWidth","Matrix","Playground","Usage"];export{u as FullWidth,c as Hierarchies,m as Matrix,h as Playground,l as Sizes,d as States,y as Usage,p as WithIcons,yt as __namedExportsOrder,ht as default};
