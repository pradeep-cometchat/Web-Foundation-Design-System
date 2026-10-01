import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as o}from"./T-B-X7QtOX.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function a({emoji:t,count:n,active:r=!1,onClick:g}){return e.jsxs("button",{type:"button",className:`reaction ${r?"reaction--active":""}`,onClick:g,children:[e.jsx("span",{className:"reaction__emoji",children:t}),n&&n>1&&e.jsx("span",{className:"reaction__count",children:e.jsx(o,{children:String(n)})})]})}function h({reactions:t,showAddButton:n=!1,onAddReaction:r}){return e.jsxs("div",{className:"reaction-group",children:[t.map((g,re)=>e.jsx(a,{...g},re)),n&&e.jsx("button",{type:"button",className:"reaction reaction--add",onClick:r,"aria-label":"Add reaction",children:e.jsx("span",{className:"reaction__emoji",children:"+"})})]})}try{a.displayName="Reaction",a.__docgenInfo={description:"",displayName:"Reaction",props:{emoji:{defaultValue:null,description:"The emoji character",name:"emoji",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"Reaction count (if > 1)",name:"count",required:!1,type:{name:"number | undefined"}},active:{defaultValue:{value:"false"},description:"Whether this reaction is selected/active by the current user",name:"active",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}try{h.displayName="ReactionGroup",h.__docgenInfo={description:"",displayName:"ReactionGroup",props:{reactions:{defaultValue:null,description:"Array of reactions",name:"reactions",required:!0,type:{name:"ReactionProps[]"}},showAddButton:{defaultValue:{value:"false"},description:"Whether to show the add reaction button",name:"showAddButton",required:!1,type:{name:"boolean | undefined"}},onAddReaction:{defaultValue:null,description:"Callback when add reaction is clicked",name:"onAddReaction",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const le={title:"Base Components/Reaction",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Emoji reaction tags shown below message bubbles. Users can tap to add/remove\ntheir reaction. Displays the emoji and an optional count.\n\n**Structure (from Figma — Base_Reaction Tag):**\n- Container: 24px height, rounded 20px, white bg, border `--color-neutral-100`\n- Padding: 2px vertical, 8px horizontal\n- Emoji: 14px, line-height 20px\n- Count: 12px, regular, `--color-neutral-900`\n- Gap: 4px between emoji and count\n- Active state: `--color-ep-50` bg, `--color-ep-200` border, count in `--color-ep-700`\n- Group: flex-wrap, 4px gap"}}},argTypes:{emoji:{control:"text",description:"The emoji character."},count:{control:"number",description:"Reaction count."},active:{control:"boolean",description:"Whether selected by current user."},onClick:{control:!1}}},c={args:{emoji:"😍",count:1}},i={args:{emoji:"❤️",count:3,active:!0}},s={args:{emoji:"👍",count:5}},d={render:()=>e.jsx(h,{reactions:[{emoji:"❤️",count:3,active:!0},{emoji:"😂",count:2},{emoji:"👍",count:1},{emoji:"🔥",count:4}]})},l={render:()=>e.jsx(h,{reactions:[{emoji:"😍",count:2},{emoji:"👏",count:1}],showAddButton:!0})},p={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(o,{children:"Default"})}),e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-1)"},children:[e.jsx(a,{emoji:"😍"}),e.jsx(a,{emoji:"👍",count:2}),e.jsx(a,{emoji:"❤️",count:5})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(o,{children:"Active (user reacted)"})}),e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-1)"},children:[e.jsx(a,{emoji:"😍",active:!0}),e.jsx(a,{emoji:"👍",count:3,active:!0}),e.jsx(a,{emoji:"❤️",count:5,active:!0})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(o,{children:"In context (below a message)"})}),e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx("div",{style:{background:"var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",padding:"var(--cometchat-spacing-3)",fontSize:"14px",color:"var(--cometchat-neutral-color-900)"},children:e.jsx(o,{children:"Sure! Sending them over now."})}),e.jsx("div",{style:{paddingInlineStart:4,marginTop:-8},children:e.jsx(h,{reactions:[{emoji:"😍",count:1},{emoji:"👍",count:2,active:!0}],showAddButton:!0})})]})]})]})};function v({title:t,children:n}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(o,{children:t})}),n]})}const f=({language:t,code:n})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:n})})]}),x=({title:t,items:n})=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(o,{children:t})}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:n.map(r=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",r]},r))})]}),m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(v,{title:"HTML",children:e.jsx(f,{language:"HTML",code:`<!-- Default reaction -->
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
</div>`})}),e.jsx(v,{title:"CSS (CometChat Tokens)",children:e.jsx(f,{language:"CSS",code:`.reaction {
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
}`})}),e.jsx(v,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(x,{title:"Modifiers",items:["reaction--active","reaction--add"]}),e.jsx(x,{title:"Child Elements",items:["reaction__emoji","reaction__count"]}),e.jsx(x,{title:"Group",items:["reaction-group"]})]})})]})},u={args:{emoji:"😍",count:3,active:!1},parameters:{docs:{disable:!0}}};var j,b,y,_,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    count: 1
  }
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Single reaction — default state.",...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.description}}};var C,T,k,R,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    emoji: "❤️",
    count: 3,
    active: true
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source},description:{story:"Active/selected reaction.",...(w=(R=i.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};var A,W,G,z,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    emoji: "👍",
    count: 5
  }
}`,...(G=(W=s.parameters)==null?void 0:W.docs)==null?void 0:G.source},description:{story:"Reaction with count.",...(B=(z=s.parameters)==null?void 0:z.docs)==null?void 0:B.description}}};var D,N,I,M,q;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(N=d.parameters)==null?void 0:N.docs)==null?void 0:I.source},description:{story:"Multiple reactions in a group.",...(q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:q.description}}};var V,E,H,L,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ReactionGroup reactions={[{
    emoji: "😍",
    count: 2
  }, {
    emoji: "👏",
    count: 1
  }]} showAddButton />
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source},description:{story:"Group with add button.",...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};var F,U,O,X,$;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      }}><T>Default</T></div>
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
      }}><T>Active (user reacted)</T></div>
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
      }}><T>In context (below a message)</T></div>
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
            <T>Sure! Sending them over now.</T>
          </div>
          <div style={{
          paddingInlineStart: 4,
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
}`,...(O=(U=p.parameters)==null?void 0:U.docs)==null?void 0:O.source},description:{story:"All states side by side.",...($=(X=p.parameters)==null?void 0:X.docs)==null?void 0:$.description}}};var J,K,Q,Y,Z;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,te,ne,ae,oe;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"Interactive playground.",...(oe=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};const pe=["Default","Active","WithCount","Group","GroupWithAdd","AllStates","Usage","Playground"];export{i as Active,p as AllStates,c as Default,d as Group,l as GroupWithAdd,u as Playground,m as Usage,s as WithCount,pe as __namedExportsOrder,le as default};
