import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as J}from"./ConversationStarter-BxRpmYzi.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ne={title:"Base Components/Conversation Starter",component:J,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"AI-powered conversation starter suggestions displayed above the message composer.\nPresents a row of clickable pill-shaped tags with pre-written messages the user\ncan tap to quickly start a conversation.\n\n**Structure (from Figma node 4088:704041):**\n- Container: full width, `--radius-2xl` (16px), wrapping flex layout\n- Tags: pill-shaped (`--radius-full`), 33px height, `--color-neutral-50` bg, border `--color-neutral-200`\n- Tag padding: 8px vertical, 20px horizontal\n- Tag text: 14px, weight 400, line-height 20px, `--color-neutral-900`\n- Gap between tags: 8px\n- Hover: `--color-neutral-100` bg, `--color-neutral-300` border"}}},argTypes:{suggestions:{control:!1,description:"Array of suggested conversation starter messages."},open:{control:"boolean",description:"Whether the component is visible."},onSelect:{control:!1}}},d=["Hi there! How's it going?","Hey, how are you doing today?","Hello! How's your day been so far?","Hope all's well!"],K=["I'd like to know more about your services","Can you help me with my order?","What are your business hours?","I have a question about pricing"],Q=["What's up? 👋","Long time no see!","Got any plans this weekend?","Did you see that movie?","How's the family?"],Y=["Say hello 👋"],r={args:{suggestions:d,open:!0}},n={args:{suggestions:K,open:!0}},o={args:{suggestions:Q,open:!0}},a={args:{suggestions:Y,open:!0}},s={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{maxWidth:600,margin:"0 auto"},children:[e.jsx("div",{style:{marginBottom:"var(--space-2)"},children:e.jsx(J,{suggestions:d})}),e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",background:"var(--color-bg-01)",overflow:"hidden"},children:[e.jsx("div",{style:{padding:"var(--space-3)",fontSize:"var(--font-size-2)",color:"var(--color-text-tertiary)",fontFamily:"var(--font-family-body)",lineHeight:"var(--line-height-body)"},children:"Type your message..."}),e.jsx("div",{style:{borderTop:"1px solid var(--color-border-light)"}}),e.jsxs("div",{style:{padding:"var(--space-1-5) var(--space-3)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-2)",alignItems:"center"},children:[e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"add_circle"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"mic"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"mood"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"sticky_note_2"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"match_case"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"auto_awesome"})]}),e.jsx("div",{style:{width:36,height:36,borderRadius:"var(--radius-full)",background:"var(--color-bg-disabled)",border:"2px solid rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--shadow-xs)"},children:e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)"},children:"send"})})]})]})]})},t={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(u,{title:"HTML",children:e.jsx(p,{language:"HTML",code:`<!-- Conversation Starter -->
<div class="conversation-starter">
  <div class="conversation-starter__tags">
    <button class="conversation-starter__tag" type="button">
      Hi there! How's it going?
    </button>
    <button class="conversation-starter__tag" type="button">
      Hey, how are you doing today?
    </button>
    <button class="conversation-starter__tag" type="button">
      Hello! How's your day been so far?
    </button>
  </div>
</div>`})}),e.jsx(u,{title:"CSS (Foundation Variables)",children:e.jsx(p,{language:"CSS",code:`.conversation-starter {
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-2xl);
}

.conversation-starter__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
}

.conversation-starter__tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1-5) var(--space-5);
  background: var(--color-bg-02);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.conversation-starter__tag:hover {
  background: var(--color-bg-03);
  border-color: var(--color-border-dark);
}

.conversation-starter__tag:active {
  background: var(--color-bg-04);
}

.conversation-starter__tag:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring-xs);
}`})})]})},i={args:{suggestions:d,open:!0},parameters:{docs:{disable:!0}}},p=({language:c,code:l})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:c})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:l})})]});function u({title:c,children:l}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:c}),l]})}var g,v,m,y,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    open: true
  }
}`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source},description:{story:"Default — four greeting suggestions as shown in Figma.",...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var f,h,x,S,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    suggestions: businessSuggestions,
    open: true
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Business/support context with service-related starters.",...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var _,j,C,z,H;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    suggestions: casualSuggestions,
    open: true
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source},description:{story:"Casual conversation starters with more options (wraps to second line).",...(H=(z=o.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var k,q,I,T,N;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    suggestions: singleSuggestion,
    open: true
  }
}`,...(I=(q=a.parameters)==null?void 0:q.docs)==null?void 0:I.source},description:{story:"Single suggestion — minimal variant.",...(N=(T=a.parameters)==null?void 0:T.docs)==null?void 0:N.description}}};var U,W,B,D,F;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    maxWidth: 600,
    margin: "0 auto"
  }}>
      <div style={{
      marginBottom: "var(--space-2)"
    }}>
        <ConversationStarter suggestions={defaultSuggestions} />
      </div>
      {/* Message Composer */}
      <div style={{
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-md)",
      background: "var(--color-bg-01)",
      overflow: "hidden"
    }}>
        {/* Input area */}
        <div style={{
        padding: "var(--space-3)",
        fontSize: "var(--font-size-2)",
        color: "var(--color-text-tertiary)",
        fontFamily: "var(--font-family-body)",
        lineHeight: "var(--line-height-body)"
      }}>
          Type your message...
        </div>
        {/* Divider */}
        <div style={{
        borderTop: "1px solid var(--color-border-light)"
      }} />
        {/* Actions bar */}
        <div style={{
        padding: "var(--space-1-5) var(--space-3)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
          <div style={{
          display: "flex",
          gap: "var(--space-2)",
          alignItems: "center"
        }}>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--color-icon-quaternary)",
            padding: "var(--space-1-5)"
          }}>add_circle</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--color-icon-quaternary)",
            padding: "var(--space-1-5)"
          }}>mic</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--color-icon-quaternary)",
            padding: "var(--space-1-5)"
          }}>mood</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--color-icon-quaternary)",
            padding: "var(--space-1-5)"
          }}>sticky_note_2</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--color-icon-quaternary)",
            padding: "var(--space-1-5)"
          }}>match_case</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--color-icon-quaternary)",
            padding: "var(--space-1-5)"
          }}>auto_awesome</span>
          </div>
          <div style={{
          width: 36,
          height: 36,
          borderRadius: "var(--radius-full)",
          background: "var(--color-bg-disabled)",
          border: "2px solid rgba(255,255,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--shadow-xs)"
        }}>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--color-icon-quaternary)"
          }}>send</span>
          </div>
        </div>
      </div>
    </div>
}`,...(B=(W=s.parameters)==null?void 0:W.docs)==null?void 0:B.source},description:{story:"In context — shown above a message composer mock.",...(F=(D=s.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var L,M,R,A,P;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Conversation Starter -->
<div class="conversation-starter">
  <div class="conversation-starter__tags">
    <button class="conversation-starter__tag" type="button">
      Hi there! How's it going?
    </button>
    <button class="conversation-starter__tag" type="button">
      Hey, how are you doing today?
    </button>
    <button class="conversation-starter__tag" type="button">
      Hello! How's your day been so far?
    </button>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.conversation-starter {
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-2xl);
}

.conversation-starter__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
}

.conversation-starter__tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1-5) var(--space-5);
  background: var(--color-bg-02);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.conversation-starter__tag:hover {
  background: var(--color-bg-03);
  border-color: var(--color-border-dark);
}

.conversation-starter__tag:active {
  background: var(--color-bg-04);
}

.conversation-starter__tag:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring-xs);
}\`} />
      </UsageSection>
    </div>
}`,...(R=(M=t.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"HTML & CSS usage reference for the Conversation Starter component.",...(P=(A=t.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};var E,G,V,O,X;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(V=(G=i.parameters)==null?void 0:G.docs)==null?void 0:V.source},description:{story:"Interactive playground.",...(X=(O=i.parameters)==null?void 0:O.docs)==null?void 0:X.description}}};const oe=["Default","Business","Casual","Single","InContext","Usage","Playground"];export{n as Business,o as Casual,r as Default,s as InContext,i as Playground,a as Single,t as Usage,oe as __namedExportsOrder,ne as default};
