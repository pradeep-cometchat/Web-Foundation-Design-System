import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n({emoji:t,count:a,active:o=!1,onClick:h}){return e.jsxs("button",{type:"button",className:`reaction ${o?"reaction--active":""}`,onClick:h,children:[e.jsx("span",{className:"reaction__emoji",children:t}),a&&a>1&&e.jsx("span",{className:"reaction__count",children:a})]})}function u({reactions:t,showAddButton:a=!1,onAddReaction:o}){return e.jsxs("div",{className:"reaction-group",children:[t.map((h,oe)=>e.jsx(n,{...h},oe)),a&&e.jsx("button",{type:"button",className:"reaction reaction--add",onClick:o,"aria-label":"Add reaction",children:e.jsx("span",{className:"reaction__emoji",children:"+"})})]})}try{n.displayName="Reaction",n.__docgenInfo={description:"",displayName:"Reaction",props:{emoji:{defaultValue:null,description:"The emoji character",name:"emoji",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"Reaction count (if > 1)",name:"count",required:!1,type:{name:"number | undefined"}},active:{defaultValue:{value:"false"},description:"Whether this reaction is selected/active by the current user",name:"active",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}try{u.displayName="ReactionGroup",u.__docgenInfo={description:"",displayName:"ReactionGroup",props:{reactions:{defaultValue:null,description:"Array of reactions",name:"reactions",required:!0,type:{name:"ReactionProps[]"}},showAddButton:{defaultValue:{value:"false"},description:"Whether to show the add reaction button",name:"showAddButton",required:!1,type:{name:"boolean | undefined"}},onAddReaction:{defaultValue:null,description:"Callback when add reaction is clicked",name:"onAddReaction",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const se={title:"Base Components/Reaction",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Emoji reaction tags shown below message bubbles. Users can tap to add/remove\ntheir reaction. Displays the emoji and an optional count.\n\n**Structure (from Figma — Base_Reaction Tag):**\n- Container: 24px height, rounded 20px, white bg, border `--color-neutral-100`\n- Padding: 2px vertical, 8px horizontal\n- Emoji: 14px, line-height 20px\n- Count: 12px, regular, `--color-neutral-900`\n- Gap: 4px between emoji and count\n- Active state: `--color-ep-50` bg, `--color-ep-200` border, count in `--color-ep-700`\n- Group: flex-wrap, 4px gap"}}},argTypes:{emoji:{control:"text",description:"The emoji character."},count:{control:"number",description:"Reaction count."},active:{control:"boolean",description:"Whether selected by current user."},onClick:{control:!1}}},r={args:{emoji:"😍",count:1}},c={args:{emoji:"❤️",count:3,active:!0}},i={args:{emoji:"👍",count:5}},s={render:()=>e.jsx(u,{reactions:[{emoji:"❤️",count:3,active:!0},{emoji:"😂",count:2},{emoji:"👍",count:1},{emoji:"🔥",count:4}]})},d={render:()=>e.jsx(u,{reactions:[{emoji:"😍",count:2},{emoji:"👏",count:1}],showAddButton:!0})},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Default"}),e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-1)"},children:[e.jsx(n,{emoji:"😍"}),e.jsx(n,{emoji:"👍",count:2}),e.jsx(n,{emoji:"❤️",count:5})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Active (user reacted)"}),e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-1)"},children:[e.jsx(n,{emoji:"😍",active:!0}),e.jsx(n,{emoji:"👍",count:3,active:!0}),e.jsx(n,{emoji:"❤️",count:5,active:!0})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"In context (below a message)"}),e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx("div",{style:{background:"var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",padding:"var(--cometchat-spacing-3)",fontSize:"14px",color:"var(--cometchat-neutral-color-900)"},children:"Sure! Sending them over now."}),e.jsx("div",{style:{paddingLeft:4,marginTop:-8},children:e.jsx(u,{reactions:[{emoji:"😍",count:1},{emoji:"👍",count:2,active:!0}],showAddButton:!0})})]})]})]})};function g({title:t,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t}),a]})}const x=({language:t,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]}),v=({title:t,items:a})=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:a.map(o=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",o]},o))})]}),p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{title:"HTML",children:e.jsx(x,{language:"HTML",code:`<!-- Default reaction -->
<button class="reaction">
  <span class="reaction__emoji">😍</span>
  <span class="reaction__count">1</span>
</button>

<!-- Active reaction (user reacted) -->
<button class="reaction reaction--active">
  <span class="reaction__emoji">❤️</span>
  <span class="reaction__count">3</span>
</button>

<!-- Add reaction button -->
<button class="reaction reaction--add">
  <span class="reaction__emoji">+</span>
</button>

<!-- Reaction group -->
<div class="reaction-group">
  <button class="reaction reaction--active">
    <span class="reaction__emoji">❤️</span>
    <span class="reaction__count">3</span>
  </button>
  <button class="reaction">
    <span class="reaction__emoji">😂</span>
    <span class="reaction__count">2</span>
  </button>
  <button class="reaction reaction--add">
    <span class="reaction__emoji">+</span>
  </button>
</div>`})}),e.jsx(g,{title:"CSS (CometChat Tokens)",children:e.jsx(x,{language:"CSS",code:`.reaction {
  display: inline-flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  height: 24px;
  padding: var(--cometchat-spacing) var(--cometchat-spacing-2);
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
  cursor: pointer;
  transition: background 100ms ease, border-color 100ms ease;
}

.reaction:hover {
  background: var(--cometchat-background-color-02);
  border-color: var(--cometchat-border-color-default);
}

.reaction--active {
  background: var(--cometchat-extended-primary-color-50);
  border-color: var(--cometchat-extended-primary-color-200);
}

.reaction--active .reaction__count {
  color: var(--cometchat-extended-primary-color-900);
}

.reaction--add {
  color: var(--cometchat-icon-color-tertiary);
  border-style: dashed;
}

.reaction__emoji {
  font-size: 14px;
  line-height: 16.8px;
}

.reaction__count {
  font-size: 12px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
}

.reaction-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cometchat-spacing-1);
}`})}),e.jsx(g,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(v,{title:"Modifiers",items:["reaction--active","reaction--add"]}),e.jsx(v,{title:"Child Elements",items:["reaction__emoji","reaction__count"]}),e.jsx(v,{title:"Group",items:["reaction-group"]})]})})]})},m={args:{emoji:"😍",count:3,active:!1},parameters:{docs:{disable:!0}}};var f,j,b,y,_;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    count: 1
  }
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source},description:{story:"Single reaction — default state.",...(_=(y=r.parameters)==null?void 0:y.docs)==null?void 0:_.description}}};var S,C,k,R,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    emoji: "❤️",
    count: 3,
    active: true
  }
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source},description:{story:"Active/selected reaction.",...(w=(R=c.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};var A,T,W,G,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    emoji: "👍",
    count: 5
  }
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source},description:{story:"Reaction with count.",...(z=(G=i.parameters)==null?void 0:G.docs)==null?void 0:z.description}}};var B,D,N,M,q;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ReactionGroup reactions={[{
    emoji: "❤️",
    count: 3,
    active: true
  }, {
    emoji: "😂",
    count: 2
  }, {
    emoji: "👍",
    count: 1
  }, {
    emoji: "🔥",
    count: 4
  }]} />
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"Multiple reactions in a group.",...(q=(M=s.parameters)==null?void 0:M.docs)==null?void 0:q.description}}};var L,V,E,H,I;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ReactionGroup reactions={[{
    emoji: "😍",
    count: 2
  }, {
    emoji: "👏",
    count: 1
  }]} showAddButton />
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source},description:{story:"Group with add button.",...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};var P,F,U,O,X;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)"
  }}>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)"
      }}>Default</div>
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-1)"
      }}>
          <Reaction emoji="😍" />
          <Reaction emoji="👍" count={2} />
          <Reaction emoji="❤️" count={5} />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)"
      }}>Active (user reacted)</div>
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-1)"
      }}>
          <Reaction emoji="😍" active />
          <Reaction emoji="👍" count={3} active />
          <Reaction emoji="❤️" count={5} active />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)"
      }}>In context (below a message)</div>
        <div style={{
        maxWidth: "300px"
      }}>
          <div style={{
          background: "var(--cometchat-neutral-color-200)",
          borderRadius: "var(--cometchat-radius-3)",
          padding: "var(--cometchat-spacing-3)",
          fontSize: "14px",
          color: "var(--cometchat-neutral-color-900)"
        }}>
            Sure! Sending them over now.
          </div>
          <div style={{
          paddingLeft: 4,
          marginTop: -8
        }}>
            <ReactionGroup reactions={[{
            emoji: "😍",
            count: 1
          }, {
            emoji: "👍",
            count: 2,
            active: true
          }]} showAddButton />
          </div>
        </div>
      </div>
    </div>
}`,...(U=(F=l.parameters)==null?void 0:F.docs)==null?void 0:U.source},description:{story:"All states side by side.",...(X=(O=l.parameters)==null?void 0:O.docs)==null?void 0:X.description}}};var $,J,K,Q,Y;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Default reaction -->
<button class="reaction">
  <span class="reaction__emoji">😍</span>
  <span class="reaction__count">1</span>
</button>

<!-- Active reaction (user reacted) -->
<button class="reaction reaction--active">
  <span class="reaction__emoji">❤️</span>
  <span class="reaction__count">3</span>
</button>

<!-- Add reaction button -->
<button class="reaction reaction--add">
  <span class="reaction__emoji">+</span>
</button>

<!-- Reaction group -->
<div class="reaction-group">
  <button class="reaction reaction--active">
    <span class="reaction__emoji">❤️</span>
    <span class="reaction__count">3</span>
  </button>
  <button class="reaction">
    <span class="reaction__emoji">😂</span>
    <span class="reaction__count">2</span>
  </button>
  <button class="reaction reaction--add">
    <span class="reaction__emoji">+</span>
  </button>
</div>\`} />
      </Section>

      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.reaction {
  display: inline-flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  height: 24px;
  padding: var(--cometchat-spacing) var(--cometchat-spacing-2);
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
  cursor: pointer;
  transition: background 100ms ease, border-color 100ms ease;
}

.reaction:hover {
  background: var(--cometchat-background-color-02);
  border-color: var(--cometchat-border-color-default);
}

.reaction--active {
  background: var(--cometchat-extended-primary-color-50);
  border-color: var(--cometchat-extended-primary-color-200);
}

.reaction--active .reaction__count {
  color: var(--cometchat-extended-primary-color-900);
}

.reaction--add {
  color: var(--cometchat-icon-color-tertiary);
  border-style: dashed;
}

.reaction__emoji {
  font-size: 14px;
  line-height: 16.8px;
}

.reaction__count {
  font-size: 12px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
}

.reaction-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cometchat-spacing-1);
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <ClassGroup title="Modifiers" items={["reaction--active", "reaction--add"]} />
          <ClassGroup title="Child Elements" items={["reaction__emoji", "reaction__count"]} />
          <ClassGroup title="Group" items={["reaction-group"]} />
        </div>
      </Section>
    </div>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var Z,ee,te,ae,ne;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    count: 3,
    active: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Interactive playground.",...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};const de=["Default","Active","WithCount","Group","GroupWithAdd","AllStates","Usage","Playground"];export{c as Active,l as AllStates,r as Default,s as Group,d as GroupWithAdd,m as Playground,p as Usage,i as WithCount,de as __namedExportsOrder,se as default};
