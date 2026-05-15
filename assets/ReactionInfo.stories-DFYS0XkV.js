import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function a({emoji:n,names:r,maxVisible:f=2,label:oe="reacted",showArrow:ie=!0}){const u=r.slice(0,f),v=r.length-f,te=v>0?`${u.join(", ")}, +${v}`:u.join(", ");return e.jsxs("div",{className:"reaction-info",role:"tooltip",children:[e.jsx("div",{className:"reaction-info__content",children:e.jsxs("div",{className:"reaction-info__inner",children:[e.jsx("span",{className:"reaction-info__emoji",children:n}),e.jsxs("div",{className:"reaction-info__text",children:[e.jsx("span",{className:"reaction-info__names",children:te}),e.jsx("span",{className:"reaction-info__label",children:oe})]})]})}),ie&&e.jsx("span",{className:"reaction-info__arrow"})]})}try{a.displayName="ReactionInfo",a.__docgenInfo={description:"",displayName:"ReactionInfo",props:{emoji:{defaultValue:null,description:"The emoji that was reacted with",name:"emoji",required:!0,type:{name:"string"}},names:{defaultValue:null,description:"List of names who reacted",name:"names",required:!0,type:{name:"string[]"}},maxVisible:{defaultValue:{value:"2"},description:'Maximum number of names to show before "+N"',name:"maxVisible",required:!1,type:{name:"number | undefined"}},label:{defaultValue:{value:"reacted"},description:'Label text below names. Default: "reacted"',name:"label",required:!1,type:{name:"string | undefined"}},showArrow:{defaultValue:{value:"true"},description:"Whether to show the bottom arrow",name:"showArrow",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const de={title:"Base Components/Reaction Info",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A tooltip-style popup that shows who reacted with a specific emoji.
Appears on hover over a reaction badge in a message.

**Structure (from Figma node 4043:476245):**
- Container: radius 8px, shadow-lg (drop-shadow)
- Content: bg \`#0a0d12\` (static-black), radius-xs (4px), padding 8px
- Emoji: 24px, line-height 32px, centered
- Names: 12px regular, white, line-height 18px
- Label ("reacted"): 12px regular, text-tertiary (#535862), line-height 18px
- Arrow: 6px triangle pointing down, same color as bg`}}},argTypes:{emoji:{control:"text",description:"The emoji that was reacted with."},names:{control:"object",description:"List of names who reacted."},maxVisible:{control:{type:"number",min:1,max:10},description:"Max names shown before +N."},label:{control:"text",description:"Label text below names."},showArrow:{control:"boolean",description:"Whether to show the bottom arrow."}}},o={args:{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"],maxVisible:2,label:"reacted",showArrow:!0}},i={args:{emoji:"👍",names:["George Alan"],maxVisible:2,label:"reacted",showArrow:!0}},t={args:{emoji:"❤️",names:["George Alan","Pourav Raj"],maxVisible:2,label:"reacted",showArrow:!0}},s={args:{emoji:"😂",names:["Alice","Bob","Charlie","Dave","Eve","Frank","Grace","Heidi","Ivan","Judy"],maxVisible:3,label:"reacted",showArrow:!0}},l={args:{emoji:"🔥",names:["George Alan","Pourav Raj","Alice"],maxVisible:2,label:"reacted",showArrow:!1}},c={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start",padding:"var(--space-10)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:m,children:"Single"}),e.jsx(a,{emoji:"👍",names:["George Alan"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:m,children:"Two names"}),e.jsx(a,{emoji:"❤️",names:["George Alan","Pourav Raj"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:m,children:"Overflow (+5)"}),e.jsx(a,{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:m,children:"Different emoji"}),e.jsx(a,{emoji:"🔥",names:["Alice","Bob","Charlie"],maxVisible:3})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:m,children:"No arrow"}),e.jsx(a,{emoji:"😂",names:["George Alan","Pourav Raj"],showArrow:!1})]})]})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(x,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Reaction Info Tooltip -->
<div class="reaction-info">
  <div class="reaction-info__content">
    <div class="reaction-info__inner">
      <span class="reaction-info__emoji">😍</span>
      <div class="reaction-info__text">
        <span class="reaction-info__names">George Alan, Pourav Raj +5</span>
        <span class="reaction-info__label">reacted</span>
      </div>
    </div>
  </div>
  <div class="reaction-info__arrow"></div>
</div>`})}),e.jsx(x,{title:"CSS (Foundation Variables)",children:e.jsx(g,{language:"CSS",code:`.reaction-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--radius-md);
  filter: drop-shadow(0px 12px 16px rgba(10, 13, 18, 0.08));
}

.reaction-info__content {
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
  background: var(--color-neutral-lm-950);
  border-radius: var(--radius-xs);
}

.reaction-info__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  text-align: center;
}

.reaction-info__emoji {
  font-size: var(--font-size-6);
  line-height: var(--line-height-h1);
}

.reaction-info__names {
  font-size: var(--font-size-1);
  color: var(--color-white);
}

.reaction-info__label {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}

.reaction-info__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: var(--color-neutral-lm-950) transparent transparent transparent;
  align-self: center;
}`})})]})},p={args:{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"],maxVisible:2,label:"reacted",showArrow:!0},parameters:{docs:{disable:!0}}},m={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)"},g=({language:n,code:r})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]});function x({title:n,children:r}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),r]})}var h,b,y,j,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Default state — exact match to Figma node 4043:476245.",...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var _,A,S,R,I;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    emoji: "👍",
    names: ["George Alan"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:"Single reactor.",...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var C,D,V,G,z;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    emoji: "❤️",
    names: ["George Alan", "Pourav Raj"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(V=(D=t.parameters)==null?void 0:D.docs)==null?void 0:V.source},description:{story:"Two reactors — no overflow.",...(z=(G=t.parameters)==null?void 0:G.docs)==null?void 0:z.description}}};var T,P,L,N,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    emoji: "😂",
    names: ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"],
    maxVisible: 3,
    label: "reacted",
    showArrow: true
  }
}`,...(L=(P=s.parameters)==null?void 0:P.docs)==null?void 0:L.source},description:{story:"Many reactors with overflow.",...(B=(N=s.parameters)==null?void 0:N.docs)==null?void 0:B.description}}};var W,E,M,U,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    emoji: "🔥",
    names: ["George Alan", "Pourav Raj", "Alice"],
    maxVisible: 2,
    label: "reacted",
    showArrow: false
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Without arrow.",...(H=(U=l.parameters)==null?void 0:U.docs)==null?void 0:H.description}}};var k,F,q,O,J;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "var(--space-10)"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Single</div>
        <ReactionInfo emoji="👍" names={["George Alan"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Two names</div>
        <ReactionInfo emoji="❤️" names={["George Alan", "Pourav Raj"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Overflow (+5)</div>
        <ReactionInfo emoji="😍" names={["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Different emoji</div>
        <ReactionInfo emoji="🔥" names={["Alice", "Bob", "Charlie"]} maxVisible={3} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>No arrow</div>
        <ReactionInfo emoji="😂" names={["George Alan", "Pourav Raj"]} showArrow={false} />
      </div>
    </div>
}`,...(q=(F=c.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:"All variants side by side.",...(J=(O=c.parameters)==null?void 0:O.docs)==null?void 0:J.description}}};var $,X,K,Q,Y;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={\`<!-- Reaction Info Tooltip -->
<div class="reaction-info">
  <div class="reaction-info__content">
    <div class="reaction-info__inner">
      <span class="reaction-info__emoji">😍</span>
      <div class="reaction-info__text">
        <span class="reaction-info__names">George Alan, Pourav Raj +5</span>
        <span class="reaction-info__label">reacted</span>
      </div>
    </div>
  </div>
  <div class="reaction-info__arrow"></div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.reaction-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--radius-md);
  filter: drop-shadow(0px 12px 16px rgba(10, 13, 18, 0.08));
}

.reaction-info__content {
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
  background: var(--color-neutral-lm-950);
  border-radius: var(--radius-xs);
}

.reaction-info__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  text-align: center;
}

.reaction-info__emoji {
  font-size: var(--font-size-6);
  line-height: var(--line-height-h1);
}

.reaction-info__names {
  font-size: var(--font-size-1);
  color: var(--color-white);
}

.reaction-info__label {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}

.reaction-info__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: var(--color-neutral-lm-950) transparent transparent transparent;
  align-self: center;
}\`} />
      </UsageSection>
    </div>
}`,...(K=(X=d.parameters)==null?void 0:X.docs)==null?void 0:K.source},description:{story:"HTML & CSS usage reference for the Reaction Info component.",...(Y=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var Z,ee,ae,ne,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Interactive playground — use the controls panel to configure.",...(re=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};const pe=["Default","SingleReactor","TwoReactors","ManyReactors","WithoutArrow","States","Usage","Playground"];export{o as Default,s as ManyReactors,p as Playground,i as SingleReactor,c as States,t as TwoReactors,d as Usage,l as WithoutArrow,pe as __namedExportsOrder,de as default};
