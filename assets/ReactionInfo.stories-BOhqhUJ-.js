import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function a({emoji:d,names:m,maxVisible:p=2,label:U="reacted",showArrow:X=!0}){const u=m.slice(0,p),g=m.length-p,Y=g>0?`${u.join(", ")}, +${g}`:u.join(", ");return e.jsxs("div",{className:"reaction-info",role:"tooltip",children:[e.jsx("div",{className:"reaction-info__content",children:e.jsxs("div",{className:"reaction-info__inner",children:[e.jsx("span",{className:"reaction-info__emoji",children:d}),e.jsxs("div",{className:"reaction-info__text",children:[e.jsx("span",{className:"reaction-info__names",children:Y}),e.jsx("span",{className:"reaction-info__label",children:U})]})]})}),X&&e.jsx("span",{className:"reaction-info__arrow"})]})}try{a.displayName="ReactionInfo",a.__docgenInfo={description:"",displayName:"ReactionInfo",props:{emoji:{defaultValue:null,description:"The emoji that was reacted with",name:"emoji",required:!0,type:{name:"string"}},names:{defaultValue:null,description:"List of names who reacted",name:"names",required:!0,type:{name:"string[]"}},maxVisible:{defaultValue:{value:"2"},description:'Maximum number of names to show before "+N"',name:"maxVisible",required:!1,type:{name:"number | undefined"}},label:{defaultValue:{value:"reacted"},description:'Label text below names. Default: "reacted"',name:"label",required:!1,type:{name:"string | undefined"}},showArrow:{defaultValue:{value:"true"},description:"Whether to show the bottom arrow",name:"showArrow",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const re={title:"Base Components/Reaction Info",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A tooltip-style popup that shows who reacted with a specific emoji.
Appears on hover over a reaction badge in a message.

**Structure (from Figma node 4043:476245):**
- Container: radius 8px, shadow-lg (drop-shadow)
- Content: bg \`#0a0d12\` (static-black), radius-xs (4px), padding 8px
- Emoji: 24px, line-height 32px, centered
- Names: 12px regular, white, line-height 18px
- Label ("reacted"): 12px regular, text-tertiary (#535862), line-height 18px
- Arrow: 6px triangle pointing down, same color as bg`}}},argTypes:{emoji:{control:"text",description:"The emoji that was reacted with."},names:{control:"object",description:"List of names who reacted."},maxVisible:{control:{type:"number",min:1,max:10},description:"Max names shown before +N."},label:{control:"text",description:"Label text below names."},showArrow:{control:"boolean",description:"Whether to show the bottom arrow."}}},r={args:{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"],maxVisible:2,label:"reacted",showArrow:!0}},n={args:{emoji:"👍",names:["George Alan"],maxVisible:2,label:"reacted",showArrow:!0}},o={args:{emoji:"❤️",names:["George Alan","Pourav Raj"],maxVisible:2,label:"reacted",showArrow:!0}},s={args:{emoji:"😂",names:["Alice","Bob","Charlie","Dave","Eve","Frank","Grace","Heidi","Ivan","Judy"],maxVisible:3,label:"reacted",showArrow:!0}},t={args:{emoji:"🔥",names:["George Alan","Pourav Raj","Alice"],maxVisible:2,label:"reacted",showArrow:!1}},i={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start",padding:"var(--space-10)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:c,children:"Single"}),e.jsx(a,{emoji:"👍",names:["George Alan"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:c,children:"Two names"}),e.jsx(a,{emoji:"❤️",names:["George Alan","Pourav Raj"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:c,children:"Overflow (+5)"}),e.jsx(a,{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:c,children:"Different emoji"}),e.jsx(a,{emoji:"🔥",names:["Alice","Bob","Charlie"],maxVisible:3})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:c,children:"No arrow"}),e.jsx(a,{emoji:"😂",names:["George Alan","Pourav Raj"],showArrow:!1})]})]})},l={args:{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"],maxVisible:2,label:"reacted",showArrow:!0},parameters:{docs:{disable:!0}}},c={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)"};var v,x,f,h,j;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Default state — exact match to Figma node 4043:476245.",...(j=(h=r.parameters)==null?void 0:h.docs)==null?void 0:j.description}}};var w,y,b,A,R;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    emoji: "👍",
    names: ["George Alan"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Single reactor.",...(R=(A=n.parameters)==null?void 0:A.docs)==null?void 0:R.description}}};var I,D,_,S,V;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    emoji: "❤️",
    names: ["George Alan", "Pourav Raj"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source},description:{story:"Two reactors — no overflow.",...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.description}}};var G,N,P,C,B;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    emoji: "😂",
    names: ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"],
    maxVisible: 3,
    label: "reacted",
    showArrow: true
  }
}`,...(P=(N=s.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:"Many reactors with overflow.",...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};var E,L,T,W,q;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    emoji: "🔥",
    names: ["George Alan", "Pourav Raj", "Alice"],
    maxVisible: 2,
    label: "reacted",
    showArrow: false
  }
}`,...(T=(L=t.parameters)==null?void 0:L.docs)==null?void 0:T.source},description:{story:"Without arrow.",...(q=(W=t.parameters)==null?void 0:W.docs)==null?void 0:q.description}}};var M,F,k,O,z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source},description:{story:"All variants side by side.",...(z=(O=i.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};var H,J,$,K,Q;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...($=(J=l.parameters)==null?void 0:J.docs)==null?void 0:$.source},description:{story:"Interactive playground — use the controls panel to configure.",...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};const ne=["Default","SingleReactor","TwoReactors","ManyReactors","WithoutArrow","States","Playground"];export{r as Default,s as ManyReactors,l as Playground,n as SingleReactor,i as States,o as TwoReactors,t as WithoutArrow,ne as __namedExportsOrder,re as default};
