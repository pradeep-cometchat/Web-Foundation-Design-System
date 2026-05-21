import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function a({emoji:n,names:r,maxVisible:g=2,label:oe="reacted",showArrow:te=!0}){const u=r.slice(0,g),f=r.length-g,ie=f>0?`${u.join(", ")}, +${f}`:u.join(", ");return e.jsxs("div",{className:"reaction-info",role:"tooltip",children:[e.jsx("div",{className:"reaction-info__content",children:e.jsxs("div",{className:"reaction-info__inner",children:[e.jsx("span",{className:"reaction-info__emoji",children:n}),e.jsxs("div",{className:"reaction-info__text",children:[e.jsx("span",{className:"reaction-info__names",children:ie}),e.jsx("span",{className:"reaction-info__label",children:oe})]})]})}),te&&e.jsx("span",{className:"reaction-info__arrow"})]})}try{a.displayName="ReactionInfo",a.__docgenInfo={description:"",displayName:"ReactionInfo",props:{emoji:{defaultValue:null,description:"The emoji that was reacted with",name:"emoji",required:!0,type:{name:"string"}},names:{defaultValue:null,description:"List of names who reacted",name:"names",required:!0,type:{name:"string[]"}},maxVisible:{defaultValue:{value:"2"},description:'Maximum number of names to show before "+N"',name:"maxVisible",required:!1,type:{name:"number | undefined"}},label:{defaultValue:{value:"reacted"},description:'Label text below names. Default: "reacted"',name:"label",required:!1,type:{name:"string | undefined"}},showArrow:{defaultValue:{value:"true"},description:"Whether to show the bottom arrow",name:"showArrow",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const de={title:"Base Components/Reaction Info",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A tooltip-style popup that shows who reacted with a specific emoji.
Appears on hover over a reaction badge in a message.

**Structure (from Figma node 4043:476245):**
- Container: radius 8px, shadow-lg (drop-shadow)
- Content: bg \`#0a0d12\` (static-black), radius-xs (4px), padding 8px
- Emoji: 24px, line-height 32px, centered
- Names: 12px regular, white, line-height 18px
- Label ("reacted"): 12px regular, text-tertiary (#535862), line-height 18px
- Arrow: 6px triangle pointing down, same color as bg`}}},argTypes:{emoji:{control:"text",description:"The emoji that was reacted with."},names:{control:"object",description:"List of names who reacted."},maxVisible:{control:{type:"number",min:1,max:10},description:"Max names shown before +N."},label:{control:"text",description:"Label text below names."},showArrow:{control:"boolean",description:"Whether to show the bottom arrow."}}},o={args:{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"],maxVisible:2,label:"reacted",showArrow:!0}},t={args:{emoji:"👍",names:["George Alan"],maxVisible:2,label:"reacted",showArrow:!0}},i={args:{emoji:"❤️",names:["George Alan","Pourav Raj"],maxVisible:2,label:"reacted",showArrow:!0}},s={args:{emoji:"😂",names:["Alice","Bob","Charlie","Dave","Eve","Frank","Grace","Heidi","Ivan","Judy"],maxVisible:3,label:"reacted",showArrow:!0}},c={args:{emoji:"🔥",names:["George Alan","Pourav Raj","Alice"],maxVisible:2,label:"reacted",showArrow:!1}},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start",padding:"var(--cometchat-spacing-10)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:p,children:"Single"}),e.jsx(a,{emoji:"👍",names:["George Alan"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:p,children:"Two names"}),e.jsx(a,{emoji:"❤️",names:["George Alan","Pourav Raj"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:p,children:"Overflow (+5)"}),e.jsx(a,{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:p,children:"Different emoji"}),e.jsx(a,{emoji:"🔥",names:["Alice","Bob","Charlie"],maxVisible:3})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:p,children:"No arrow"}),e.jsx(a,{emoji:"😂",names:["George Alan","Pourav Raj"],showArrow:!1})]})]})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(x,{title:"HTML",children:e.jsx(h,{language:"HTML",code:`<!-- Reaction Info Tooltip -->
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
</div>`})}),e.jsx(x,{title:"CSS (CometChat Tokens)",children:e.jsx(h,{language:"CSS",code:`.reaction-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--cometchat-radius-2);
  filter: drop-shadow(0px 12px 16px rgba(10, 13, 18, 0.08));
}

.reaction-info__content {
  display: flex;
  flex-direction: column;
  padding: var(--cometchat-spacing-2);
  background: var(--cometchat-neutral-color-900);
  border-radius: var(--cometchat-radius-1);
}

.reaction-info__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  text-align: center;
}

.reaction-info__emoji {
  font-size: 24px;
  line-height: 28.8px;
}

.reaction-info__names {
  font-size: 12px;
  color: var(--cometchat-static-white);
}

.reaction-info__label {
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}

.reaction-info__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: var(--cometchat-neutral-color-900) transparent transparent transparent;
  align-self: center;
}`})})]})},m={args:{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"],maxVisible:2,label:"reacted",showArrow:!0},parameters:{docs:{disable:!0}}},p={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)"},h=({language:n,code:r})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]});function x({title:n,children:r}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:n}),r]})}var v,y,b,j,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Default state — exact match to Figma node 4043:476245.",...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var _,A,S,R,C;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    emoji: "👍",
    names: ["George Alan"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:"Single reactor.",...(C=(R=t.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var I,D,G,T,V;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    emoji: "❤️",
    names: ["George Alan", "Pourav Raj"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source},description:{story:"Two reactors — no overflow.",...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var P,L,N,B,W;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    emoji: "😂",
    names: ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"],
    maxVisible: 3,
    label: "reacted",
    showArrow: true
  }
}`,...(N=(L=s.parameters)==null?void 0:L.docs)==null?void 0:N.source},description:{story:"Many reactors with overflow.",...(W=(B=s.parameters)==null?void 0:B.docs)==null?void 0:W.description}}};var k,E,z,M,U;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    emoji: "🔥",
    names: ["George Alan", "Pourav Raj", "Alice"],
    maxVisible: 2,
    label: "reacted",
    showArrow: false
  }
}`,...(z=(E=c.parameters)==null?void 0:E.docs)==null?void 0:z.source},description:{story:"Without arrow.",...(U=(M=c.parameters)==null?void 0:M.docs)==null?void 0:U.description}}};var H,q,F,O,J;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--cometchat-spacing-6)",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "var(--cometchat-spacing-10)"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}>Single</div>
        <ReactionInfo emoji="👍" names={["George Alan"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}>Two names</div>
        <ReactionInfo emoji="❤️" names={["George Alan", "Pourav Raj"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}>Overflow (+5)</div>
        <ReactionInfo emoji="😍" names={["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}>Different emoji</div>
        <ReactionInfo emoji="🔥" names={["Alice", "Bob", "Charlie"]} maxVisible={3} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}>No arrow</div>
        <ReactionInfo emoji="😂" names={["George Alan", "Pourav Raj"]} showArrow={false} />
      </div>
    </div>
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"All variants side by side.",...(J=(O=l.parameters)==null?void 0:O.docs)==null?void 0:J.description}}};var $,X,K,Q,Y;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.reaction-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--cometchat-radius-2);
  filter: drop-shadow(0px 12px 16px rgba(10, 13, 18, 0.08));
}

.reaction-info__content {
  display: flex;
  flex-direction: column;
  padding: var(--cometchat-spacing-2);
  background: var(--cometchat-neutral-color-900);
  border-radius: var(--cometchat-radius-1);
}

.reaction-info__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  text-align: center;
}

.reaction-info__emoji {
  font-size: 24px;
  line-height: 28.8px;
}

.reaction-info__names {
  font-size: 12px;
  color: var(--cometchat-static-white);
}

.reaction-info__label {
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}

.reaction-info__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: var(--cometchat-neutral-color-900) transparent transparent transparent;
  align-self: center;
}\`} />
      </UsageSection>
    </div>
}`,...(K=(X=d.parameters)==null?void 0:X.docs)==null?void 0:K.source},description:{story:"HTML & CSS usage reference for the Reaction Info component.",...(Y=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var Z,ee,ae,ne,re;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Interactive playground — use the controls panel to configure.",...(re=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};const me=["Default","SingleReactor","TwoReactors","ManyReactors","WithoutArrow","States","Usage","Playground"];export{o as Default,s as ManyReactors,m as Playground,t as SingleReactor,l as States,i as TwoReactors,d as Usage,c as WithoutArrow,me as __namedExportsOrder,de as default};
