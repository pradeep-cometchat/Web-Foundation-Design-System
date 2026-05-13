import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n({emoji:t,count:o,active:p=!1,onClick:m}){return e.jsxs("button",{type:"button",className:`reaction ${p?"reaction--active":""}`,onClick:m,children:[e.jsx("span",{className:"reaction__emoji",children:t}),o&&o>1&&e.jsx("span",{className:"reaction__count",children:o})]})}function u({reactions:t,showAddButton:o=!1,onAddReaction:p}){return e.jsxs("div",{className:"reaction-group",children:[t.map((m,K)=>e.jsx(n,{...m},K)),o&&e.jsx("button",{type:"button",className:"reaction reaction--add",onClick:p,"aria-label":"Add reaction",children:e.jsx("span",{className:"reaction__emoji",children:"+"})})]})}try{n.displayName="Reaction",n.__docgenInfo={description:"",displayName:"Reaction",props:{emoji:{defaultValue:null,description:"The emoji character",name:"emoji",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"Reaction count (if > 1)",name:"count",required:!1,type:{name:"number | undefined"}},active:{defaultValue:{value:"false"},description:"Whether this reaction is selected/active by the current user",name:"active",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}try{u.displayName="ReactionGroup",u.__docgenInfo={description:"",displayName:"ReactionGroup",props:{reactions:{defaultValue:null,description:"Array of reactions",name:"reactions",required:!0,type:{name:"ReactionProps[]"}},showAddButton:{defaultValue:{value:"false"},description:"Whether to show the add reaction button",name:"showAddButton",required:!1,type:{name:"boolean | undefined"}},onAddReaction:{defaultValue:null,description:"Callback when add reaction is clicked",name:"onAddReaction",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const Z={title:"Base Components/Reaction",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Emoji reaction tags shown below message bubbles. Users can tap to add/remove\ntheir reaction. Displays the emoji and an optional count.\n\n**Structure (from Figma — Base_Reaction Tag):**\n- Container: 24px height, rounded 20px, white bg, border `--color-neutral-100`\n- Padding: 2px vertical, 8px horizontal\n- Emoji: 14px, line-height 20px\n- Count: 12px, regular, `--color-neutral-900`\n- Gap: 4px between emoji and count\n- Active state: `--color-ep-50` bg, `--color-ep-200` border, count in `--color-ep-700`\n- Group: flex-wrap, 4px gap"}}},argTypes:{emoji:{control:"text",description:"The emoji character."},count:{control:"number",description:"Reaction count."},active:{control:"boolean",description:"Whether selected by current user."},onClick:{control:!1}}},r={args:{emoji:"😍",count:1}},a={args:{emoji:"❤️",count:3,active:!0}},i={args:{emoji:"👍",count:5}},c={render:()=>e.jsx(u,{reactions:[{emoji:"❤️",count:3,active:!0},{emoji:"😂",count:2},{emoji:"👍",count:1},{emoji:"🔥",count:4}]})},s={render:()=>e.jsx(u,{reactions:[{emoji:"😍",count:2},{emoji:"👏",count:1}],showAddButton:!0})},d={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},children:"Default"}),e.jsxs("div",{style:{display:"flex",gap:4},children:[e.jsx(n,{emoji:"😍"}),e.jsx(n,{emoji:"👍",count:2}),e.jsx(n,{emoji:"❤️",count:5})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},children:"Active (user reacted)"}),e.jsxs("div",{style:{display:"flex",gap:4},children:[e.jsx(n,{emoji:"😍",active:!0}),e.jsx(n,{emoji:"👍",count:3,active:!0}),e.jsx(n,{emoji:"❤️",count:5,active:!0})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},children:"In context (below a message)"}),e.jsxs("div",{style:{maxWidth:300},children:[e.jsx("div",{style:{background:"var(--color-neutral-200)",borderRadius:"var(--radius-xl)",padding:"12px",fontSize:14,color:"var(--color-neutral-900)",marginBottom:4},children:"Sure! Sending them over now."}),e.jsx("div",{style:{paddingLeft:4},children:e.jsx(u,{reactions:[{emoji:"😍",count:1},{emoji:"👍",count:2,active:!0}],showAddButton:!0})})]})]})]})},l={args:{emoji:"😍",count:3,active:!1},parameters:{docs:{disable:!0}}};var v,j,g,f,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    emoji: "😍",
    count: 1
  }
}`,...(g=(j=r.parameters)==null?void 0:j.docs)==null?void 0:g.source},description:{story:"Single reaction — default state.",...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};var x,y,b,S,R;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    emoji: "❤️",
    count: 3,
    active: true
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Active/selected reaction.",...(R=(S=a.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};var _,A,w,B,W;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    emoji: "👍",
    count: 5
  }
}`,...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source},description:{story:"Reaction with count.",...(W=(B=i.parameters)==null?void 0:B.docs)==null?void 0:W.description}}};var G,C,N,T,k;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:"Multiple reactions in a group.",...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var z,q,D,V,I;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ReactionGroup reactions={[{
    emoji: "😍",
    count: 2
  }, {
    emoji: "👏",
    count: 1
  }]} showAddButton />
}`,...(D=(q=s.parameters)==null?void 0:q.docs)==null?void 0:D.source},description:{story:"Group with add button.",...(I=(V=s.parameters)==null?void 0:V.docs)==null?void 0:I.description}}};var E,P,L,F,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div>
        <div style={{
        fontSize: 12,
        fontWeight: 600,
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: 8
      }}>Default</div>
        <div style={{
        display: "flex",
        gap: 4
      }}>
          <Reaction emoji="😍" />
          <Reaction emoji="👍" count={2} />
          <Reaction emoji="❤️" count={5} />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: 12,
        fontWeight: 600,
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: 8
      }}>Active (user reacted)</div>
        <div style={{
        display: "flex",
        gap: 4
      }}>
          <Reaction emoji="😍" active />
          <Reaction emoji="👍" count={3} active />
          <Reaction emoji="❤️" count={5} active />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: 12,
        fontWeight: 600,
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: 8
      }}>In context (below a message)</div>
        <div style={{
        maxWidth: 300
      }}>
          <div style={{
          background: "var(--color-neutral-200)",
          borderRadius: "var(--radius-xl)",
          padding: "12px",
          fontSize: 14,
          color: "var(--color-neutral-900)",
          marginBottom: 4
        }}>
            Sure! Sending them over now.
          </div>
          <div style={{
          paddingLeft: 4
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
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source},description:{story:"All states side by side.",...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};var O,U,$,H,J;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(U=l.parameters)==null?void 0:U.docs)==null?void 0:$.source},description:{story:"Interactive playground.",...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};const ee=["Default","Active","WithCount","Group","GroupWithAdd","AllStates","Playground"];export{a as Active,d as AllStates,r as Default,c as Group,s as GroupWithAdd,l as Playground,i as WithCount,ee as __namedExportsOrder,Z as default};
