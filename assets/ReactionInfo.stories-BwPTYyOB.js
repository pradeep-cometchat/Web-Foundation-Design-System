import{j as e}from"./jsx-runtime-BYYWji4R.js";import{u as de,T as a}from"./T-B-X7QtOX.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n({emoji:r,names:o,maxVisible:u=2,label:te="reacted",showArrow:ie=!0}){const se=de(),h=o.slice(0,u).map(le=>se(le)),f=o.length-u,ce=f>0?`${h.join(", ")}, +${f}`:h.join(", ");return e.jsxs("div",{className:"reaction-info",role:"tooltip",children:[e.jsx("div",{className:"reaction-info__content",children:e.jsxs("div",{className:"reaction-info__inner",children:[e.jsx("span",{className:"reaction-info__emoji",children:r}),e.jsxs("div",{className:"reaction-info__text",children:[e.jsx("span",{className:"reaction-info__names",children:e.jsx(a,{children:ce})}),e.jsx("span",{className:"reaction-info__label",children:e.jsx(a,{children:te})})]})]})}),ie&&e.jsx("span",{className:"reaction-info__arrow"})]})}try{n.displayName="ReactionInfo",n.__docgenInfo={description:"",displayName:"ReactionInfo",props:{emoji:{defaultValue:null,description:"The emoji that was reacted with",name:"emoji",required:!0,type:{name:"string"}},names:{defaultValue:null,description:"List of names who reacted",name:"names",required:!0,type:{name:"string[]"}},maxVisible:{defaultValue:{value:"2"},description:'Maximum number of names to show before "+N"',name:"maxVisible",required:!1,type:{name:"number | undefined"}},label:{defaultValue:{value:"reacted"},description:'Label text below names. Default: "reacted"',name:"label",required:!1,type:{name:"string | undefined"}},showArrow:{defaultValue:{value:"true"},description:"Whether to show the bottom arrow",name:"showArrow",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const he={title:"Base Components/Reaction Info",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A tooltip-style popup that shows who reacted with a specific emoji.
Appears on hover over a reaction badge in a message.

**Structure (from Figma node 4043:476245):**
- Container: radius 8px, shadow-lg (drop-shadow)
- Content: bg \`#0a0d12\` (static-black), radius-xs (4px), padding 8px
- Emoji: 24px, line-height 32px, centered
- Names: 12px regular, white, line-height 18px
- Label ("reacted"): 12px regular, text-tertiary (#535862), line-height 18px
- Arrow: 6px triangle pointing down, same color as bg`}}},argTypes:{emoji:{control:"text",description:"The emoji that was reacted with."},names:{control:"object",description:"List of names who reacted."},maxVisible:{control:{type:"number",min:1,max:10},description:"Max names shown before +N."},label:{control:"text",description:"Label text below names."},showArrow:{control:"boolean",description:"Whether to show the bottom arrow."}}},t={args:{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"],maxVisible:2,label:"reacted",showArrow:!0}},i={args:{emoji:"👍",names:["George Alan"],maxVisible:2,label:"reacted",showArrow:!0}},s={args:{emoji:"❤️",names:["George Alan","Pourav Raj"],maxVisible:2,label:"reacted",showArrow:!0}},c={args:{emoji:"😂",names:["Alice","Bob","Charlie","Dave","Eve","Frank","Grace","Heidi","Ivan","Judy"],maxVisible:3,label:"reacted",showArrow:!0}},l={args:{emoji:"🔥",names:["George Alan","Pourav Raj","Alice"],maxVisible:2,label:"reacted",showArrow:!1}},d={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start",padding:"var(--cometchat-spacing-10)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:g,children:e.jsx(a,{children:"Single"})}),e.jsx(n,{emoji:"👍",names:["George Alan"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:g,children:e.jsx(a,{children:"Two names"})}),e.jsx(n,{emoji:"❤️",names:["George Alan","Pourav Raj"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:g,children:e.jsx(a,{children:"Overflow (+5)"})}),e.jsx(n,{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:g,children:e.jsx(a,{children:"Different emoji"})}),e.jsx(n,{emoji:"🔥",names:["Alice","Bob","Charlie"],maxVisible:3})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:g,children:e.jsx(a,{children:"No arrow"})}),e.jsx(n,{emoji:"😂",names:["George Alan","Pourav Raj"],showArrow:!1})]})]})},m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(v,{title:"HTML",children:e.jsx(x,{language:"HTML",code:`<!-- Reaction Info Tooltip -->
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
</div>`})}),e.jsx(v,{title:"CSS (CometChat Tokens)",children:e.jsx(x,{language:"CSS",code:`.reaction-info {
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
}`})})]})},p={args:{emoji:"😍",names:["George Alan","Pourav Raj","Alice","Bob","Charlie","Dave","Eve"],maxVisible:2,label:"reacted",showArrow:!0},parameters:{docs:{disable:!0}}},g={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)"},x=({language:r,code:o})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:o})})]});function v({title:r,children:o}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(a,{children:r})}),o]})}var j,y,b,w,_;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Default state — exact match to Figma node 4043:476245.",...(_=(w=t.parameters)==null?void 0:w.docs)==null?void 0:_.description}}};var A,S,R,T,C;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    emoji: "👍",
    names: ["George Alan"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.source},description:{story:"Single reactor.",...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.description}}};var I,D,G,V,P;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    emoji: "❤️",
    names: ["George Alan", "Pourav Raj"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true
  }
}`,...(G=(D=s.parameters)==null?void 0:D.docs)==null?void 0:G.source},description:{story:"Two reactors — no overflow.",...(P=(V=s.parameters)==null?void 0:V.docs)==null?void 0:P.description}}};var L,N,B,W,k;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    emoji: "😂",
    names: ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"],
    maxVisible: 3,
    label: "reacted",
    showArrow: true
  }
}`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:"Many reactors with overflow.",...(k=(W=c.parameters)==null?void 0:W.docs)==null?void 0:k.description}}};var E,z,M,U,H;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    emoji: "🔥",
    names: ["George Alan", "Pourav Raj", "Alice"],
    maxVisible: 2,
    label: "reacted",
    showArrow: false
  }
}`,...(M=(z=l.parameters)==null?void 0:z.docs)==null?void 0:M.source},description:{story:"Without arrow.",...(H=(U=l.parameters)==null?void 0:U.docs)==null?void 0:H.description}}};var q,F,O,J,$;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        <div style={stateLabelStyle}><T>Single</T></div>
        <ReactionInfo emoji="👍" names={["George Alan"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}><T>Two names</T></div>
        <ReactionInfo emoji="❤️" names={["George Alan", "Pourav Raj"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}><T>Overflow (+5)</T></div>
        <ReactionInfo emoji="😍" names={["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"]} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}><T>Different emoji</T></div>
        <ReactionInfo emoji="🔥" names={["Alice", "Bob", "Charlie"]} maxVisible={3} />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}><T>No arrow</T></div>
        <ReactionInfo emoji="😂" names={["George Alan", "Pourav Raj"]} showArrow={false} />
      </div>
    </div>
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"All variants side by side.",...($=(J=d.parameters)==null?void 0:J.docs)==null?void 0:$.description}}};var X,K,Q,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"HTML & CSS usage reference for the Reaction Info component.",...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,ne,re,oe;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"Interactive playground — use the controls panel to configure.",...(oe=(re=p.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};const fe=["Default","SingleReactor","TwoReactors","ManyReactors","WithoutArrow","States","Usage","Playground"];export{t as Default,c as ManyReactors,p as Playground,i as SingleReactor,d as States,s as TwoReactors,m as Usage,l as WithoutArrow,fe as __namedExportsOrder,he as default};
