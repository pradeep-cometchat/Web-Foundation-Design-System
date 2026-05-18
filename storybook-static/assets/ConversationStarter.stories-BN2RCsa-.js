import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function d({suggestions:n,onSelect:r,open:Q=!0}){return Q?e.jsx("div",{className:"conversation-starter",children:e.jsx("div",{className:"conversation-starter__tags",children:n.map((p,Y)=>e.jsx("button",{type:"button",className:"conversation-starter__tag",onClick:()=>r==null?void 0:r(p),children:p},Y))})}):null}try{d.displayName="ConversationStarter",d.__docgenInfo={description:"",displayName:"ConversationStarter",props:{suggestions:{defaultValue:null,description:"Array of suggested conversation starter messages",name:"suggestions",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"Callback when a suggestion is clicked",name:"onSelect",required:!1,type:{name:"((suggestion: string) => void) | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the component is visible",name:"open",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const oe={title:"Base Components/Conversation Starter",component:d,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"AI-powered conversation starter suggestions displayed above the message composer.\nPresents a row of clickable pill-shaped tags with pre-written messages the user\ncan tap to quickly start a conversation.\n\n**Structure (from Figma node 4088:704041):**\n- Container: full width, `--radius-2xl` (16px), wrapping flex layout\n- Tags: pill-shaped (`--radius-full`), 33px height, `--color-neutral-50` bg, border `--color-neutral-200`\n- Tag padding: 8px vertical, 20px horizontal\n- Tag text: 14px, weight 400, line-height 20px, `--color-neutral-900`\n- Gap between tags: 8px\n- Hover: `--color-neutral-100` bg, `--color-neutral-300` border"}}},argTypes:{suggestions:{control:!1,description:"Array of suggested conversation starter messages."},open:{control:"boolean",description:"Whether the component is visible."},onSelect:{control:!1}}},u=["Hi there! How's it going?","Hey, how are you doing today?","Hello! How's your day been so far?","Hope all's well!"],Z=["I'd like to know more about your services","Can you help me with my order?","What are your business hours?","I have a question about pricing"],$=["What's up? 👋","Long time no see!","Got any plans this weekend?","Did you see that movie?","How's the family?"],ee=["Say hello 👋"],a={args:{suggestions:u,open:!0}},o={args:{suggestions:Z,open:!0}},s={args:{suggestions:$,open:!0}},t={args:{suggestions:ee,open:!0}},i={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{maxWidth:600,margin:"0 auto"},children:[e.jsx("div",{style:{marginBottom:"var(--space-2)"},children:e.jsx(d,{suggestions:u})}),e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",background:"var(--color-bg-01)",overflow:"hidden"},children:[e.jsx("div",{style:{padding:"var(--space-3)",fontSize:"var(--font-size-2)",color:"var(--color-text-tertiary)",fontFamily:"var(--font-family-body)",lineHeight:"var(--line-height-body)"},children:"Type your message..."}),e.jsx("div",{style:{borderTop:"1px solid var(--color-border-light)"}}),e.jsxs("div",{style:{padding:"var(--space-1-5) var(--space-3)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-2)",alignItems:"center"},children:[e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"add_circle"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"mic"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"mood"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"sticky_note_2"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"match_case"}),e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)",padding:"var(--space-1-5)"},children:"auto_awesome"})]}),e.jsx("div",{style:{width:36,height:36,borderRadius:"var(--radius-full)",background:"var(--color-bg-disabled)",border:"2px solid rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--shadow-xs)"},children:e.jsx("span",{className:"icon-outlined",style:{fontSize:20,color:"var(--color-icon-quaternary)"},children:"send"})})]})]})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(v,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Conversation Starter -->
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
</div>`})}),e.jsx(v,{title:"CSS (Foundation Variables)",children:e.jsx(g,{language:"CSS",code:`.conversation-starter {
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
}`})})]})},l={args:{suggestions:u,open:!0},parameters:{docs:{disable:!0}}},g=({language:n,code:r})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]});function v({title:n,children:r}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),r]})}var m,y,b,f,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    open: true
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Default — four greeting suggestions as shown in Figma.",...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};var x,S,_,w,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    suggestions: businessSuggestions,
    open: true
  }
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source},description:{story:"Business/support context with service-related starters.",...(j=(w=o.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};var C,z,k,H,q;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    suggestions: casualSuggestions,
    open: true
  }
}`,...(k=(z=s.parameters)==null?void 0:z.docs)==null?void 0:k.source},description:{story:"Casual conversation starters with more options (wraps to second line).",...(q=(H=s.parameters)==null?void 0:H.docs)==null?void 0:q.description}}};var N,I,T,U,W;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    suggestions: singleSuggestion,
    open: true
  }
}`,...(T=(I=t.parameters)==null?void 0:I.docs)==null?void 0:T.source},description:{story:"Single suggestion — minimal variant.",...(W=(U=t.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var B,D,F,L,M;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"In context — shown above a message composer mock.",...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var R,V,A,P,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(V=c.parameters)==null?void 0:V.docs)==null?void 0:A.source},description:{story:"HTML & CSS usage reference for the Conversation Starter component.",...(E=(P=c.parameters)==null?void 0:P.docs)==null?void 0:E.description}}};var G,O,X,J,K;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(X=(O=l.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"Interactive playground.",...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const se=["Default","Business","Casual","Single","InContext","Usage","Playground"];export{o as Business,s as Casual,a as Default,i as InContext,l as Playground,t as Single,c as Usage,se as __namedExportsOrder,oe as default};
