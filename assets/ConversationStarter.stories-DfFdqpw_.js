import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function i({suggestions:c,onSelect:l,open:G=!0}){return G?e.jsx("div",{className:"conversation-starter",children:e.jsx("div",{className:"conversation-starter__tags",children:c.map((u,L)=>e.jsx("button",{type:"button",className:"conversation-starter__tag",onClick:()=>l==null?void 0:l(u),children:u},L))})}):null}try{i.displayName="ConversationStarter",i.__docgenInfo={description:"",displayName:"ConversationStarter",props:{suggestions:{defaultValue:null,description:"Array of suggested conversation starter messages",name:"suggestions",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"Callback when a suggestion is clicked",name:"onSelect",required:!1,type:{name:"((suggestion: string) => void) | undefined"}},open:{defaultValue:{value:"true"},description:"Whether the component is visible",name:"open",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const X={title:"Base Components/Conversation Starter",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"AI-powered conversation starter suggestions displayed above the message composer.\nPresents a row of clickable pill-shaped tags with pre-written messages the user\ncan tap to quickly start a conversation.\n\n**Structure (from Figma node 4088:704041):**\n- Container: full width, `--radius-2xl` (16px), wrapping flex layout\n- Tags: pill-shaped (`--radius-full`), 33px height, `--color-neutral-50` bg, border `--color-neutral-200`\n- Tag padding: 8px vertical, 20px horizontal\n- Tag text: 14px, weight 400, line-height 20px, `--color-neutral-900`\n- Gap between tags: 8px\n- Hover: `--color-neutral-100` bg, `--color-neutral-300` border"}}},argTypes:{suggestions:{control:!1,description:"Array of suggested conversation starter messages."},open:{control:"boolean",description:"Whether the component is visible."},onSelect:{control:!1}}},d=["Hi there! How's it going?","Hey, how are you doing today?","Hello! How's your day been so far?","Hope all's well!"],O=["I'd like to know more about your services","Can you help me with my order?","What are your business hours?","I have a question about pricing"],J=["What's up? 👋","Long time no see!","Got any plans this weekend?","Did you see that movie?","How's the family?"],K=["Say hello 👋"],s={args:{suggestions:d,open:!0}},n={args:{suggestions:O,open:!0}},r={args:{suggestions:J,open:!0}},t={args:{suggestions:K,open:!0}},o={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{maxWidth:600,margin:"0 auto"},children:[e.jsx("div",{style:{marginBottom:"var(--space-2)"},children:e.jsx(i,{suggestions:d})}),e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",background:"var(--color-white)",overflow:"hidden"},children:[e.jsx("div",{style:{padding:"12px",fontSize:"var(--font-size-2)",color:"var(--color-neutral-600)"},children:"Type your message..."}),e.jsx("div",{style:{height:1,background:"var(--color-neutral-100)"}}),e.jsxs("div",{style:{padding:"8px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",color:"var(--color-neutral-500)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-5)"},children:"⊕"}),e.jsx("span",{style:{fontSize:"var(--font-size-5)"},children:"🎤"}),e.jsx("span",{style:{fontSize:"var(--font-size-5)"},children:"😊"}),e.jsx("span",{style:{fontSize:"var(--font-size-5)"},children:"💬"}),e.jsx("span",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-medium)"},children:"Aa"})]}),e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"var(--color-neutral-200)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-neutral-500)",fontSize:"var(--font-size-3)"},children:"▶"})]})]})]})},a={args:{suggestions:d,open:!0},parameters:{docs:{disable:!0}}};var p,g,m,v,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    open: true
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source},description:{story:"Default — four greeting suggestions as shown in Figma.",...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var f,h,x,S,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    suggestions: businessSuggestions,
    open: true
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Business/support context with service-related starters.",...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var w,z,j,C,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    suggestions: casualSuggestions,
    open: true
  }
}`,...(j=(z=r.parameters)==null?void 0:z.docs)==null?void 0:j.source},description:{story:"Casual conversation starters with more options (wraps to second line).",...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var _,I,H,W,B;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    suggestions: singleSuggestion,
    open: true
  }
}`,...(H=(I=t.parameters)==null?void 0:I.docs)==null?void 0:H.source},description:{story:"Single suggestion — minimal variant.",...(B=(W=t.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var T,q,A,N,R;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      <div style={{
      border: "1px solid var(--color-neutral-200)",
      borderRadius: "var(--radius-md)",
      background: "var(--color-white)",
      overflow: "hidden"
    }}>
        <div style={{
        padding: "12px",
        fontSize: "var(--font-size-2)",
        color: "var(--color-neutral-600)"
      }}>
          Type your message...
        </div>
        <div style={{
        height: 1,
        background: "var(--color-neutral-100)"
      }} />
        <div style={{
        padding: "8px 12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
          <div style={{
          display: "flex",
          gap: "var(--space-4)",
          color: "var(--color-neutral-500)"
        }}>
            <span style={{
            fontSize: "var(--font-size-5)"
          }}>⊕</span>
            <span style={{
            fontSize: "var(--font-size-5)"
          }}>🎤</span>
            <span style={{
            fontSize: "var(--font-size-5)"
          }}>😊</span>
            <span style={{
            fontSize: "var(--font-size-5)"
          }}>💬</span>
            <span style={{
            fontSize: "var(--font-size-2)",
            fontWeight: "var(--font-weight-medium)"
          }}>Aa</span>
          </div>
          <div style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "var(--color-neutral-200)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-neutral-500)",
          fontSize: "var(--font-size-3)"
        }}>▶</div>
        </div>
      </div>
    </div>
}`,...(A=(q=o.parameters)==null?void 0:q.docs)==null?void 0:A.source},description:{story:"In context — shown above a message composer mock.",...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};var D,P,V,E,F;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(V=(P=a.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"Interactive playground.",...(F=(E=a.parameters)==null?void 0:E.docs)==null?void 0:F.description}}};const Y=["Default","Business","Casual","Single","InContext","Playground"];export{n as Business,r as Casual,s as Default,o as InContext,a as Playground,t as Single,Y as __namedExportsOrder,X as default};
