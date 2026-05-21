import{j as e}from"./jsx-runtime-BYYWji4R.js";import{H as r}from"./Header-DPJM8LY9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ie={title:"Base Components/Header",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"Title text."},showBack:{control:"boolean",description:"Show back arrow button."},showMore:{control:"boolean",description:"Show the kebab menu button."},actions:{control:!1}}},a=n=>e.jsx("div",{style:{width:400,border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:e.jsx(n,{})}),c={decorators:[a],args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},s={name:"Two Actions",decorators:[a],args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"}],showMore:!0}},i={name:"One Action",decorators:[a],args:{title:"Chats",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0}},l={name:"No Actions",decorators:[a],args:{title:"Chats",actions:[],showMore:!1}},d={name:"More Button Only",decorators:[a],args:{title:"Chats",actions:[],showMore:!0}},h={name:"Long Title (Truncated)",decorators:[a],args:{title:"Very Long Chat Group Name That Should Truncate",actions:[{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},p={name:"Custom Title",decorators:[a],args:{title:"Contacts",actions:[{icon:"person_add",ariaLabel:"Add contact"},{icon:"search",ariaLabel:"Search"}],showMore:!0}},u={name:"With Back Button",decorators:[a],args:{title:"George Alan",showBack:!0,actions:[{icon:"videocam",ariaLabel:"Video call"},{icon:"call",ariaLabel:"Voice call"}],showMore:!0}},m={name:"Back Button — No Actions",decorators:[a],args:{title:"Settings",showBack:!0,actions:[],showMore:!1}},b={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--cometchat-spacing-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{label:"3 Actions + More",children:e.jsx(r,{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0})}),e.jsx(t,{label:"2 Actions + More",children:e.jsx(r,{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"}],showMore:!0})}),e.jsx(t,{label:"1 Action + More",children:e.jsx(r,{title:"Chats",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0})}),e.jsx(t,{label:"More Only",children:e.jsx(r,{title:"Chats",actions:[],showMore:!0})}),e.jsx(t,{label:"No Actions",children:e.jsx(r,{title:"Chats",actions:[],showMore:!1})}),e.jsx(t,{label:"Long Title",children:e.jsx(r,{title:"Very Long Chat Group Name That Truncates",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0})}),e.jsx(t,{label:"With Back Button",children:e.jsx(r,{title:"George Alan",showBack:!0,actions:[{icon:"videocam",ariaLabel:"Video call"},{icon:"call",ariaLabel:"Voice call"}],showMore:!0})}),e.jsx(t,{label:"Back Button — No Actions",children:e.jsx(r,{title:"Settings",showBack:!0,actions:[],showMore:!1})})]})})},g={decorators:[a],parameters:{docs:{disable:!0}},args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},_={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(v,{title:"HTML",children:e.jsx(w,{language:"HTML",code:`<!-- Screen Header with 3 actions + more -->
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
</div>`})}),e.jsx(v,{title:"CSS (CometChat Tokens)",children:e.jsx(w,{language:"CSS",code:`.screen-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-bottom: 1px solid var(--cometchat-border-color-default);
  box-sizing: border-box;
}

.screen-header__title {
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--cometchat-font-family);
  font-size: 24px; /* 24px */
  font-weight: 700;
  line-height: 32px; /* 28.8px */
  color: var(--cometchat-text-color-primary);
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
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  color: var(--cometchat-icon-color-primary);
  padding: 0;
  flex-shrink: 0;
}

.screen-header__back-btn:hover {
  background: var(--cometchat-background-color-02);
}

.screen-header__actions {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
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
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  color: var(--cometchat-icon-color-tertiary);
  padding: 0;
}

.screen-header__action-btn:hover {
  background: var(--cometchat-background-color-02);
  color: var(--cometchat-icon-color-tertiary);
}

.screen-header__action-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}`})}),e.jsx(v,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(f,{title:"Container",items:["screen-header"]}),e.jsx(f,{title:"Elements",items:["screen-header__title","screen-header__back-btn","screen-header__actions","screen-header__action-btn","screen-header__action-icon"]})]})})]})};function t({label:n,children:o}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"500",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:n}),e.jsx("div",{style:{border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:o})]})}function v({title:n,children:o}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:n}),o]})}function w({language:n,code:o}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:o})})]})}function f({title:n,items:o}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:n}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:o.map(x=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-03)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",x]},x))})]})}var y,S,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,L,M;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(L=s.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var j,B,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var V,H,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "More Button Only",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [],
    showMore: true
  }
}`,...(G=(H=d.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var q,O,z;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var D,E,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var F,P,U;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var I,X,J;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Back Button — No Actions",
  decorators: [wrapper],
  args: {
    title: "Settings",
    showBack: true,
    actions: [],
    showMore: false
  }
}`,...(J=(X=m.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "var(--cometchat-spacing-8)"
  }}>
      <div style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-3)"
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
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,re;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
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

      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.screen-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-bottom: 1px solid var(--cometchat-border-color-default);
  box-sizing: border-box;
}

.screen-header__title {
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--cometchat-font-family);
  font-size: 24px; /* 24px */
  font-weight: 700;
  line-height: 32px; /* 28.8px */
  color: var(--cometchat-text-color-primary);
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
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  color: var(--cometchat-icon-color-primary);
  padding: 0;
  flex-shrink: 0;
}

.screen-header__back-btn:hover {
  background: var(--cometchat-background-color-02);
}

.screen-header__actions {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
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
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  color: var(--cometchat-icon-color-tertiary);
  padding: 0;
}

.screen-header__action-btn:hover {
  background: var(--cometchat-background-color-02);
  color: var(--cometchat-icon-color-tertiary);
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
        gap: "var(--cometchat-spacing-3)"
      }}>
          <ClassGroup title="Container" items={["screen-header"]} />
          <ClassGroup title="Elements" items={["screen-header__title", "screen-header__back-btn", "screen-header__actions", "screen-header__action-btn", "screen-header__action-icon"]} />
        </div>
      </Section>
    </div>
}`,...(re=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const le=["Default","WithTwoActions","WithOneAction","NoActions","MoreOnly","LongTitle","CustomTitle","WithBackButton","BackButtonNoActions","AllStates","Playground","Usage"];export{b as AllStates,m as BackButtonNoActions,p as CustomTitle,c as Default,h as LongTitle,d as MoreOnly,l as NoActions,g as Playground,_ as Usage,u as WithBackButton,i as WithOneAction,s as WithTwoActions,le as __namedExportsOrder,ie as default};
