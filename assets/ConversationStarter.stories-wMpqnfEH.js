import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as K}from"./ConversationStarter-BdOXyfuF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const oe={title:"Base Components/Conversation Starter",component:K,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"AI-powered conversation starter suggestions displayed above the message composer.\nPresents a row of clickable pill-shaped tags with pre-written messages the user\ncan tap to quickly start a conversation.\n\n**Structure (from Figma node 4088:704041):**\n- Container: full width, `--radius-2xl` (16px), wrapping flex layout\n- Tags: pill-shaped (`--radius-full`), 33px height, `--color-neutral-50` bg, border `--color-neutral-200`\n- Tag padding: 8px vertical, 20px horizontal\n- Tag text: 14px, weight 400, line-height 20px, `--color-neutral-900`\n- Gap between tags: 8px\n- Hover: `--color-neutral-100` bg, `--color-neutral-300` border"}}},argTypes:{suggestions:{control:!1,description:"Array of suggested conversation starter messages."},open:{control:"boolean",description:"Whether the component is visible."},onSelect:{control:!1}}},l=["Hi there! How's it going?","Hey, how are you doing today?","Hello! How's your day been so far?","Hope all's well!"],Q=["I'd like to know more about your services","Can you help me with my order?","What are your business hours?","I have a question about pricing"],V=["What's up? 👋","Long time no see!","Got any plans this weekend?","Did you see that movie?","How's the family?"],Y=["Say hello 👋"],t={args:{suggestions:l,open:!0}},o={args:{suggestions:Q,open:!0}},a={args:{suggestions:V,open:!0}},n={args:{suggestions:Y,open:!0}},r={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{maxWidth:600,margin:"0 auto"},children:[e.jsx("div",{style:{marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(K,{suggestions:l})}),e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-2)",background:"var(--cometchat-background-color-01)",overflow:"hidden"},children:[e.jsx("div",{style:{padding:"var(--cometchat-spacing-3)",fontSize:"14px",color:"var(--cometchat-text-color-tertiary)",fontFamily:"var(--cometchat-font-family)",lineHeight:"16.8px"},children:"Type your message..."}),e.jsx("div",{style:{borderTop:"1px solid var(--cometchat-border-color-light)"}}),e.jsxs("div",{style:{padding:"var(--cometchat-spacing-1-5) var(--cometchat-spacing-3)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-2)",alignItems:"center"},children:[e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--cometchat-icon-color-tertiary)",padding:"var(--cometchat-spacing-1-5)"},children:"add_circle"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--cometchat-icon-color-tertiary)",padding:"var(--cometchat-spacing-1-5)"},children:"mic"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--cometchat-icon-color-tertiary)",padding:"var(--cometchat-spacing-1-5)"},children:"mood"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--cometchat-icon-color-tertiary)",padding:"var(--cometchat-spacing-1-5)"},children:"sticky_note_2"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--cometchat-icon-color-tertiary)",padding:"var(--cometchat-spacing-1-5)"},children:"match_case"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--cometchat-icon-color-tertiary)",padding:"var(--cometchat-spacing-1-5)"},children:"auto_awesome"})]}),e.jsx("div",{style:{width:36,height:36,borderRadius:"var(--cometchat-radius-max)",background:"var(--cometchat-background-color-disabled)",border:"2px solid rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--cometchat-shadow-xs)"},children:e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--cometchat-icon-color-tertiary)"},children:"send"})})]})]})]})},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(p,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Conversation Starter -->
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
</div>`})}),e.jsx(p,{title:"CSS (CometChat Tokens)",children:e.jsx(g,{language:"CSS",code:`.conversation-starter {
  width: 100%;
  overflow: hidden;
  border-radius: var(--cometchat-radius-4);
}

.conversation-starter__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cometchat-spacing-2);
  align-items: center;
}

.conversation-starter__tag {
  display: inline-flex;
  align-items: center;
  padding: 6px var(--cometchat-spacing-5);
  background: var(--cometchat-background-color-02);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-max);
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.conversation-starter__tag:hover {
  background: var(--cometchat-background-color-03);
  border-color: var(--cometchat-border-color-dark);
}

.conversation-starter__tag:active {
  background: var(--cometchat-background-color-04);
}

.conversation-starter__tag:focus-visible {
  outline: none;
  box-shadow: var(--cometchat-focus-ring);
}`})})]})},c={args:{suggestions:l,open:!0},parameters:{docs:{disable:!0}}},g=({language:i,code:d})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:d})})]});function p({title:i,children:d}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:i}),d]})}var m,u,h,v,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    open: true
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Default — four greeting suggestions as shown in Figma.",...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var b,x,f,S,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    suggestions: businessSuggestions,
    open: true
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Business/support context with service-related starters.",...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var _,k,C,j,H;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    suggestions: casualSuggestions,
    open: true
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:"Casual conversation starters with more options (wraps to second line).",...(H=(j=a.parameters)==null?void 0:j.docs)==null?void 0:H.description}}};var z,T,I,N,U;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    suggestions: singleSuggestion,
    open: true
  }
}`,...(I=(T=n.parameters)==null?void 0:T.docs)==null?void 0:I.source},description:{story:"Single suggestion — minimal variant.",...(U=(N=n.parameters)==null?void 0:N.docs)==null?void 0:U.description}}};var W,B,D,L,M;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    maxWidth: 600,
    margin: "0 auto"
  }}>
      <div style={{
      marginBottom: "var(--cometchat-spacing-2)"
    }}>
        <ConversationStarter suggestions={defaultSuggestions} />
      </div>
      {/* Message Composer */}
      <div style={{
      border: "1px solid var(--cometchat-border-color-default)",
      borderRadius: "var(--cometchat-radius-2)",
      background: "var(--cometchat-background-color-01)",
      overflow: "hidden"
    }}>
        {/* Input area */}
        <div style={{
        padding: "var(--cometchat-spacing-3)",
        fontSize: "14px",
        color: "var(--cometchat-text-color-tertiary)",
        fontFamily: "var(--cometchat-font-family)",
        lineHeight: "16.8px"
      }}>
          Type your message...
        </div>
        {/* Divider */}
        <div style={{
        borderTop: "1px solid var(--cometchat-border-color-light)"
      }} />
        {/* Actions bar */}
        <div style={{
        padding: "var(--cometchat-spacing-1-5) var(--cometchat-spacing-3)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
          <div style={{
          display: "flex",
          gap: "var(--cometchat-spacing-2)",
          alignItems: "center"
        }}>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--cometchat-icon-color-tertiary)",
            padding: "var(--cometchat-spacing-1-5)"
          }}>add_circle</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--cometchat-icon-color-tertiary)",
            padding: "var(--cometchat-spacing-1-5)"
          }}>mic</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--cometchat-icon-color-tertiary)",
            padding: "var(--cometchat-spacing-1-5)"
          }}>mood</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--cometchat-icon-color-tertiary)",
            padding: "var(--cometchat-spacing-1-5)"
          }}>sticky_note_2</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--cometchat-icon-color-tertiary)",
            padding: "var(--cometchat-spacing-1-5)"
          }}>match_case</span>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--cometchat-icon-color-tertiary)",
            padding: "var(--cometchat-spacing-1-5)"
          }}>auto_awesome</span>
          </div>
          <div style={{
          width: 36,
          height: 36,
          borderRadius: "var(--cometchat-radius-max)",
          background: "var(--cometchat-background-color-disabled)",
          border: "2px solid rgba(255,255,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--cometchat-shadow-xs)"
        }}>
            <span className="icon-outlined" style={{
            fontSize: 20,
            color: "var(--cometchat-icon-color-tertiary)"
          }}>send</span>
          </div>
        </div>
      </div>
    </div>
}`,...(D=(B=r.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"In context — shown above a message composer mock.",...(M=(L=r.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var R,F,A,P,q;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.conversation-starter {
  width: 100%;
  overflow: hidden;
  border-radius: var(--cometchat-radius-4);
}

.conversation-starter__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cometchat-spacing-2);
  align-items: center;
}

.conversation-starter__tag {
  display: inline-flex;
  align-items: center;
  padding: 6px var(--cometchat-spacing-5);
  background: var(--cometchat-background-color-02);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-max);
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.conversation-starter__tag:hover {
  background: var(--cometchat-background-color-03);
  border-color: var(--cometchat-border-color-dark);
}

.conversation-starter__tag:active {
  background: var(--cometchat-background-color-04);
}

.conversation-starter__tag:focus-visible {
  outline: none;
  box-shadow: var(--cometchat-focus-ring);
}\`} />
      </UsageSection>
    </div>
}`,...(A=(F=s.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:"HTML & CSS usage reference for the Conversation Starter component.",...(q=(P=s.parameters)==null?void 0:P.docs)==null?void 0:q.description}}};var E,G,O,X,J;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(O=(G=c.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:"Interactive playground.",...(J=(X=c.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};const ae=["Default","Business","Casual","Single","InContext","Usage","Playground"];export{o as Business,a as Casual,t as Default,r as InContext,c as Playground,n as Single,s as Usage,ae as __namedExportsOrder,oe as default};
