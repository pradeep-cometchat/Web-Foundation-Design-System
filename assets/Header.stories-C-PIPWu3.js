import{j as e}from"./jsx-runtime-BYYWji4R.js";import{H as r}from"./Header-BGJsWnrB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ie={title:"Base Components/Header",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"Title text."},showBack:{control:"boolean",description:"Show back arrow button."},showMore:{control:"boolean",description:"Show the kebab menu button."},actions:{control:!1}}},a=n=>e.jsx("div",{style:{width:400,border:"1px solid var(--color-border-default)",overflow:"hidden"},children:e.jsx(n,{})}),s={decorators:[a],args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},c={name:"Two Actions",decorators:[a],args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"}],showMore:!0}},i={name:"One Action",decorators:[a],args:{title:"Chats",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0}},l={name:"No Actions",decorators:[a],args:{title:"Chats",actions:[],showMore:!1}},d={name:"More Button Only",decorators:[a],args:{title:"Chats",actions:[],showMore:!0}},h={name:"Long Title (Truncated)",decorators:[a],args:{title:"Very Long Chat Group Name That Should Truncate",actions:[{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},p={name:"Custom Title",decorators:[a],args:{title:"Contacts",actions:[{icon:"person_add",ariaLabel:"Add contact"},{icon:"search",ariaLabel:"Search"}],showMore:!0}},u={name:"With Back Button",decorators:[a],args:{title:"George Alan",showBack:!0,actions:[{icon:"videocam",ariaLabel:"Video call"},{icon:"call",ariaLabel:"Voice call"}],showMore:!0}},b={name:"Back Button — No Actions",decorators:[a],args:{title:"Settings",showBack:!0,actions:[],showMore:!1}},m={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(o,{label:"3 Actions + More",children:e.jsx(r,{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0})}),e.jsx(o,{label:"2 Actions + More",children:e.jsx(r,{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"}],showMore:!0})}),e.jsx(o,{label:"1 Action + More",children:e.jsx(r,{title:"Chats",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0})}),e.jsx(o,{label:"More Only",children:e.jsx(r,{title:"Chats",actions:[],showMore:!0})}),e.jsx(o,{label:"No Actions",children:e.jsx(r,{title:"Chats",actions:[],showMore:!1})}),e.jsx(o,{label:"Long Title",children:e.jsx(r,{title:"Very Long Chat Group Name That Truncates",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0})}),e.jsx(o,{label:"With Back Button",children:e.jsx(r,{title:"George Alan",showBack:!0,actions:[{icon:"videocam",ariaLabel:"Video call"},{icon:"call",ariaLabel:"Voice call"}],showMore:!0})}),e.jsx(o,{label:"Back Button — No Actions",children:e.jsx(r,{title:"Settings",showBack:!0,actions:[],showMore:!1})})]})})},g={decorators:[a],parameters:{docs:{disable:!0}},args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},v={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(_,{title:"HTML",children:e.jsx(f,{language:"HTML",code:`<!-- Screen Header with 3 actions + more -->
<div class="screen-header">
  <h1 class="screen-header__title">Chats</h1>
  <div class="screen-header__actions">
    <button class="screen-header__action-btn" aria-label="New chat">
      <span class="screen-header__action-icon icon-outlined">edit_square</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Search">
      <span class="screen-header__action-icon icon-outlined">search</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Video call">
      <span class="screen-header__action-icon icon-outlined">videocam</span>
    </button>
    <button class="screen-header__action-btn" aria-label="More actions">
      <span class="screen-header__action-icon icon-outlined">more_vert</span>
    </button>
  </div>
</div>

<!-- Header with back button -->
<div class="screen-header">
  <button class="screen-header__back-btn" aria-label="Go back">
    <span class="icon-outlined">arrow_back</span>
  </button>
  <h1 class="screen-header__title">George Alan</h1>
  <div class="screen-header__actions">
    <button class="screen-header__action-btn" aria-label="Video call">
      <span class="screen-header__action-icon icon-outlined">videocam</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Voice call">
      <span class="screen-header__action-icon icon-outlined">call</span>
    </button>
    <button class="screen-header__action-btn" aria-label="More actions">
      <span class="screen-header__action-icon icon-outlined">more_vert</span>
    </button>
  </div>
</div>

<!-- Header without actions -->
<div class="screen-header">
  <h1 class="screen-header__title">Contacts</h1>
  <div class="screen-header__actions"></div>
</div>`})}),e.jsx(_,{title:"CSS (Foundation Variables)",children:e.jsx(f,{language:"CSS",code:`.screen-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-01);
  border-bottom: 1px solid var(--color-border-default);
  box-sizing: border-box;
}

.screen-header__title {
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--font-family-heading);
  font-size: 24px; /* var(--font-size-6) */
  font-weight: var(--font-weight-bold);
  line-height: 32px; /* var(--line-height-h1) */
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}

.screen-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-icon-primary);
  padding: 0;
  flex-shrink: 0;
}

.screen-header__back-btn:hover {
  background: var(--color-bg-02);
}

.screen-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

.screen-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-icon-quaternary);
  padding: 0;
}

.screen-header__action-btn:hover {
  background: var(--color-bg-02);
  color: var(--color-icon-tertiary);
}

.screen-header__action-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}`})}),e.jsx(_,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(w,{title:"Container",items:["screen-header"]}),e.jsx(w,{title:"Elements",items:["screen-header__title","screen-header__back-btn","screen-header__actions","screen-header__action-btn","screen-header__action-icon"]})]})})]})};function o({label:n,children:t}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:n}),e.jsx("div",{style:{border:"1px solid var(--color-border-default)",overflow:"hidden"},children:t})]})}function _({title:n,children:t}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:n}),t]})}function f({language:n,code:t}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]})}function w({title:n,items:t}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:t.map(x=>e.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-primary)",background:"var(--color-bg-03)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-border-default)",display:"inline-block",width:"fit-content"},children:[".",x]},x))})]})}var y,S,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [{
      icon: "edit_square",
      ariaLabel: "New chat"
    }, {
      icon: "search",
      ariaLabel: "Search"
    }, {
      icon: "videocam",
      ariaLabel: "Video call"
    }],
    showMore: true
  }
}`,...(L=(S=s.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var C,M,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Two Actions",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [{
      icon: "edit_square",
      ariaLabel: "New chat"
    }, {
      icon: "search",
      ariaLabel: "Search"
    }],
    showMore: true
  }
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var j,B,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "One Action",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [{
      icon: "search",
      ariaLabel: "Search"
    }],
    showMore: true
  }
}`,...(A=(B=i.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var T,W,N;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "No Actions",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [],
    showMore: false
  }
}`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var V,H,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "More Button Only",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [],
    showMore: true
  }
}`,...(z=(H=d.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var G,q,O;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Long Title (Truncated)",
  decorators: [wrapper],
  args: {
    title: "Very Long Chat Group Name That Should Truncate",
    actions: [{
      icon: "search",
      ariaLabel: "Search"
    }, {
      icon: "videocam",
      ariaLabel: "Video call"
    }],
    showMore: true
  }
}`,...(O=(q=h.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var D,E,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Custom Title",
  decorators: [wrapper],
  args: {
    title: "Contacts",
    actions: [{
      icon: "person_add",
      ariaLabel: "Add contact"
    }, {
      icon: "search",
      ariaLabel: "Search"
    }],
    showMore: true
  }
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var R,P,U;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "With Back Button",
  decorators: [wrapper],
  args: {
    title: "George Alan",
    showBack: true,
    actions: [{
      icon: "videocam",
      ariaLabel: "Video call"
    }, {
      icon: "call",
      ariaLabel: "Voice call"
    }],
    showMore: true
  }
}`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var I,X,J;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Back Button — No Actions",
  decorators: [wrapper],
  args: {
    title: "Settings",
    showBack: true,
    actions: [],
    showMore: false
  }
}`,...(J=(X=b.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,Y;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "var(--space-8)"
  }}>
      <div style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }}>
        <Wrap label="3 Actions + More">
          <Header title="Chats" actions={[{
          icon: "edit_square",
          ariaLabel: "New chat"
        }, {
          icon: "search",
          ariaLabel: "Search"
        }, {
          icon: "videocam",
          ariaLabel: "Video call"
        }]} showMore />
        </Wrap>
        <Wrap label="2 Actions + More">
          <Header title="Chats" actions={[{
          icon: "edit_square",
          ariaLabel: "New chat"
        }, {
          icon: "search",
          ariaLabel: "Search"
        }]} showMore />
        </Wrap>
        <Wrap label="1 Action + More">
          <Header title="Chats" actions={[{
          icon: "search",
          ariaLabel: "Search"
        }]} showMore />
        </Wrap>
        <Wrap label="More Only">
          <Header title="Chats" actions={[]} showMore />
        </Wrap>
        <Wrap label="No Actions">
          <Header title="Chats" actions={[]} showMore={false} />
        </Wrap>
        <Wrap label="Long Title">
          <Header title="Very Long Chat Group Name That Truncates" actions={[{
          icon: "search",
          ariaLabel: "Search"
        }]} showMore />
        </Wrap>
        <Wrap label="With Back Button">
          <Header title="George Alan" showBack actions={[{
          icon: "videocam",
          ariaLabel: "Video call"
        }, {
          icon: "call",
          ariaLabel: "Voice call"
        }]} showMore />
        </Wrap>
        <Wrap label="Back Button — No Actions">
          <Header title="Settings" showBack actions={[]} showMore={false} />
        </Wrap>
      </div>
    </div>
}`,...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  decorators: [wrapper],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    title: "Chats",
    actions: [{
      icon: "edit_square",
      ariaLabel: "New chat"
    }, {
      icon: "search",
      ariaLabel: "Search"
    }, {
      icon: "videocam",
      ariaLabel: "Video call"
    }],
    showMore: true
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,re;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <Section title="HTML">
        <CodeCard language="HTML" code={\`<!-- Screen Header with 3 actions + more -->
<div class="screen-header">
  <h1 class="screen-header__title">Chats</h1>
  <div class="screen-header__actions">
    <button class="screen-header__action-btn" aria-label="New chat">
      <span class="screen-header__action-icon icon-outlined">edit_square</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Search">
      <span class="screen-header__action-icon icon-outlined">search</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Video call">
      <span class="screen-header__action-icon icon-outlined">videocam</span>
    </button>
    <button class="screen-header__action-btn" aria-label="More actions">
      <span class="screen-header__action-icon icon-outlined">more_vert</span>
    </button>
  </div>
</div>

<!-- Header with back button -->
<div class="screen-header">
  <button class="screen-header__back-btn" aria-label="Go back">
    <span class="icon-outlined">arrow_back</span>
  </button>
  <h1 class="screen-header__title">George Alan</h1>
  <div class="screen-header__actions">
    <button class="screen-header__action-btn" aria-label="Video call">
      <span class="screen-header__action-icon icon-outlined">videocam</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Voice call">
      <span class="screen-header__action-icon icon-outlined">call</span>
    </button>
    <button class="screen-header__action-btn" aria-label="More actions">
      <span class="screen-header__action-icon icon-outlined">more_vert</span>
    </button>
  </div>
</div>

<!-- Header without actions -->
<div class="screen-header">
  <h1 class="screen-header__title">Contacts</h1>
  <div class="screen-header__actions"></div>
</div>\`} />
      </Section>

      <Section title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.screen-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-01);
  border-bottom: 1px solid var(--color-border-default);
  box-sizing: border-box;
}

.screen-header__title {
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--font-family-heading);
  font-size: 24px; /* var(--font-size-6) */
  font-weight: var(--font-weight-bold);
  line-height: 32px; /* var(--line-height-h1) */
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}

.screen-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-icon-primary);
  padding: 0;
  flex-shrink: 0;
}

.screen-header__back-btn:hover {
  background: var(--color-bg-02);
}

.screen-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

.screen-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-icon-quaternary);
  padding: 0;
}

.screen-header__action-btn:hover {
  background: var(--color-bg-02);
  color: var(--color-icon-tertiary);
}

.screen-header__action-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <ClassGroup title="Container" items={["screen-header"]} />
          <ClassGroup title="Elements" items={["screen-header__title", "screen-header__back-btn", "screen-header__actions", "screen-header__action-btn", "screen-header__action-icon"]} />
        </div>
      </Section>
    </div>
}`,...(re=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const le=["Default","WithTwoActions","WithOneAction","NoActions","MoreOnly","LongTitle","CustomTitle","WithBackButton","BackButtonNoActions","AllStates","Playground","Usage"];export{m as AllStates,b as BackButtonNoActions,p as CustomTitle,s as Default,h as LongTitle,d as MoreOnly,l as NoActions,g as Playground,v as Usage,u as WithBackButton,i as WithOneAction,c as WithTwoActions,le as __namedExportsOrder,ie as default};
