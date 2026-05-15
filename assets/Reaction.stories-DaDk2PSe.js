import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function o({emoji:n,count:a,active:r=!1,onClick:v}){return e.jsxs("button",{type:"button",className:`reaction ${r?"reaction--active":""}`,onClick:v,children:[e.jsx("span",{className:"reaction__emoji",children:n}),a&&a>1&&e.jsx("span",{className:"reaction__count",children:a})]})}function m({reactions:n,showAddButton:a=!1,onAddReaction:r}){return e.jsxs("div",{className:"reaction-group",children:[n.map((v,re)=>e.jsx(o,{...v},re)),a&&e.jsx("button",{type:"button",className:"reaction reaction--add",onClick:r,"aria-label":"Add reaction",children:e.jsx("span",{className:"reaction__emoji",children:"+"})})]})}try{o.displayName="Reaction",o.__docgenInfo={description:"",displayName:"Reaction",props:{emoji:{defaultValue:null,description:"The emoji character",name:"emoji",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"Reaction count (if > 1)",name:"count",required:!1,type:{name:"number | undefined"}},active:{defaultValue:{value:"false"},description:"Whether this reaction is selected/active by the current user",name:"active",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}try{m.displayName="ReactionGroup",m.__docgenInfo={description:"",displayName:"ReactionGroup",props:{reactions:{defaultValue:null,description:"Array of reactions",name:"reactions",required:!0,type:{name:"ReactionProps[]"}},showAddButton:{defaultValue:{value:"false"},description:"Whether to show the add reaction button",name:"showAddButton",required:!1,type:{name:"boolean | undefined"}},onAddReaction:{defaultValue:null,description:"Callback when add reaction is clicked",name:"onAddReaction",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const ce={title:"Base Components/Reaction",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Emoji reaction tags shown below message bubbles. Users can tap to add/remove\ntheir reaction. Displays the emoji and an optional count.\n\n**Structure (from Figma — Base_Reaction Tag):**\n- Container: 24px height, rounded 20px, white bg, border `--color-neutral-100`\n- Padding: 2px vertical, 8px horizontal\n- Emoji: 14px, line-height 20px\n- Count: 12px, regular, `--color-neutral-900`\n- Gap: 4px between emoji and count\n- Active state: `--color-ep-50` bg, `--color-ep-200` border, count in `--color-ep-700`\n- Group: flex-wrap, 4px gap"}}},argTypes:{emoji:{control:"text",description:"The emoji character."},count:{control:"number",description:"Reaction count."},active:{control:"boolean",description:"Whether selected by current user."},onClick:{control:!1}}},t={args:{emoji:"😍",count:1}},i={args:{emoji:"❤️",count:3,active:!0}},s={args:{emoji:"👍",count:5}},c={render:()=>e.jsx(m,{reactions:[{emoji:"❤️",count:3,active:!0},{emoji:"😂",count:2},{emoji:"👍",count:1},{emoji:"🔥",count:4}]})},l={render:()=>e.jsx(m,{reactions:[{emoji:"😍",count:2},{emoji:"👏",count:1}],showAddButton:!0})},d={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:"Default"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-1)"},children:[e.jsx(o,{emoji:"😍"}),e.jsx(o,{emoji:"👍",count:2}),e.jsx(o,{emoji:"❤️",count:5})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:"Active (user reacted)"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-1)"},children:[e.jsx(o,{emoji:"😍",active:!0}),e.jsx(o,{emoji:"👍",count:3,active:!0}),e.jsx(o,{emoji:"❤️",count:5,active:!0})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:"In context (below a message)"}),e.jsxs("div",{style:{maxWidth:"var(--space-80, 300px)"},children:[e.jsx("div",{style:{background:"var(--color-neutral-200)",borderRadius:"var(--radius-xl)",padding:"var(--space-3)",fontSize:"var(--font-size-2)",color:"var(--color-neutral-900)"},children:"Sure! Sending them over now."}),e.jsx("div",{style:{paddingLeft:4,marginTop:-8},children:e.jsx(m,{reactions:[{emoji:"😍",count:1},{emoji:"👍",count:2,active:!0}],showAddButton:!0})})]})]})]})};function g({title:n,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),a]})}const b=({language:n,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]}),f=({title:n,items:a})=>e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:a.map(r=>e.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-primary)",background:"var(--color-bg-02)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-border-default)",display:"inline-block",width:"fit-content"},children:[".",r]},r))})]}),p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(g,{title:"HTML",children:e.jsx(b,{language:"HTML",code:`<!-- Default reaction -->
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
</div>`})}),e.jsx(g,{title:"CSS (Foundation Variables)",children:e.jsx(b,{language:"CSS",code:`.reaction {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  height: 24px;
  padding: var(--space-0-5) var(--space-2);
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background 100ms ease, border-color 100ms ease;
}

.reaction:hover {
  background: var(--color-bg-02);
  border-color: var(--color-border-default);
}

.reaction--active {
  background: var(--color-ep-50);
  border-color: var(--color-ep-200);
}

.reaction--active .reaction__count {
  color: var(--color-ep-700);
}

.reaction--add {
  color: var(--color-icon-tertiary);
  border-style: dashed;
}

.reaction__emoji {
  font-size: var(--font-size-2);
  line-height: var(--line-height-body);
}

.reaction__count {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
}

.reaction-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}`})}),e.jsx(g,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(f,{title:"Modifiers",items:["reaction--active","reaction--add"]}),e.jsx(f,{title:"Child Elements",items:["reaction__emoji","reaction__count"]}),e.jsx(f,{title:"Group",items:["reaction-group"]})]})})]})},u={args:{emoji:"😍",count:3,active:!1},parameters:{docs:{disable:!0}}};var h,x,j,y,_;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    count: 1
  }
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source},description:{story:"Single reaction — default state.",...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.description}}};var S,w,z,C,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    emoji: "❤️",
    count: 3,
    active: true
  }
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"Active/selected reaction.",...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.description}}};var A,k,T,W,G;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    emoji: "👍",
    count: 5
  }
}`,...(T=(k=s.parameters)==null?void 0:k.docs)==null?void 0:T.source},description:{story:"Reaction with count.",...(G=(W=s.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};var B,D,N,V,M;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"Multiple reactions in a group.",...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};var q,L,E,H,I;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ReactionGroup reactions={[{
    emoji: "😍",
    count: 2
  }, {
    emoji: "👏",
    count: 1
  }]} showAddButton />
}`,...(E=(L=l.parameters)==null?void 0:L.docs)==null?void 0:E.source},description:{story:"Group with add button.",...(I=(H=l.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};var F,P,U,O,X;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      <div>
        <div style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)"
      }}>Default</div>
        <div style={{
        display: "flex",
        gap: "var(--space-1)"
      }}>
          <Reaction emoji="😍" />
          <Reaction emoji="👍" count={2} />
          <Reaction emoji="❤️" count={5} />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)"
      }}>Active (user reacted)</div>
        <div style={{
        display: "flex",
        gap: "var(--space-1)"
      }}>
          <Reaction emoji="😍" active />
          <Reaction emoji="👍" count={3} active />
          <Reaction emoji="❤️" count={5} active />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)"
      }}>In context (below a message)</div>
        <div style={{
        maxWidth: "var(--space-80, 300px)"
      }}>
          <div style={{
          background: "var(--color-neutral-200)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-3)",
          fontSize: "var(--font-size-2)",
          color: "var(--color-neutral-900)"
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
}`,...(U=(P=d.parameters)==null?void 0:P.docs)==null?void 0:U.source},description:{story:"All states side by side.",...(X=(O=d.parameters)==null?void 0:O.docs)==null?void 0:X.description}}};var $,J,K,Q,Y;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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

      <Section title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.reaction {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  height: 24px;
  padding: var(--space-0-5) var(--space-2);
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background 100ms ease, border-color 100ms ease;
}

.reaction:hover {
  background: var(--color-bg-02);
  border-color: var(--color-border-default);
}

.reaction--active {
  background: var(--color-ep-50);
  border-color: var(--color-ep-200);
}

.reaction--active .reaction__count {
  color: var(--color-ep-700);
}

.reaction--add {
  color: var(--color-icon-tertiary);
  border-style: dashed;
}

.reaction__emoji {
  font-size: var(--font-size-2);
  line-height: var(--line-height-body);
}

.reaction__count {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
}

.reaction-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <ClassGroup title="Modifiers" items={["reaction--active", "reaction--add"]} />
          <ClassGroup title="Child Elements" items={["reaction__emoji", "reaction__count"]} />
          <ClassGroup title="Group" items={["reaction-group"]} />
        </div>
      </Section>
    </div>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var Z,ee,ne,ae,oe;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ne.source},description:{story:"Interactive playground.",...(oe=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};const le=["Default","Active","WithCount","Group","GroupWithAdd","AllStates","Usage","Playground"];export{i as Active,d as AllStates,t as Default,c as Group,l as GroupWithAdd,u as Playground,p as Usage,s as WithCount,le as __namedExportsOrder,ce as default};
