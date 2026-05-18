import{j as e}from"./jsx-runtime-BYYWji4R.js";import{H as o}from"./Header-Mr20xdWM.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ee={title:"Base Components/Header",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"Title text."},showMore:{control:"boolean",description:"Show the kebab menu button."},actions:{control:!1}}},r=a=>e.jsx("div",{style:{width:400,border:"1px solid var(--color-border-default)",overflow:"hidden"},children:e.jsx(a,{})}),s={decorators:[r],args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},i={name:"Two Actions",decorators:[r],args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"}],showMore:!0}},c={name:"One Action",decorators:[r],args:{title:"Chats",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0}},l={name:"No Actions",decorators:[r],args:{title:"Chats",actions:[],showMore:!1}},d={name:"More Button Only",decorators:[r],args:{title:"Chats",actions:[],showMore:!0}},h={name:"Long Title (Truncated)",decorators:[r],args:{title:"Very Long Chat Group Name That Should Truncate",actions:[{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},p={name:"Custom Title",decorators:[r],args:{title:"Contacts",actions:[{icon:"person_add",ariaLabel:"Add contact"},{icon:"search",ariaLabel:"Search"}],showMore:!0}},u={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(t,{label:"3 Actions + More",children:e.jsx(o,{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0})}),e.jsx(t,{label:"2 Actions + More",children:e.jsx(o,{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"}],showMore:!0})}),e.jsx(t,{label:"1 Action + More",children:e.jsx(o,{title:"Chats",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0})}),e.jsx(t,{label:"More Only",children:e.jsx(o,{title:"Chats",actions:[],showMore:!0})}),e.jsx(t,{label:"No Actions",children:e.jsx(o,{title:"Chats",actions:[],showMore:!1})}),e.jsx(t,{label:"Long Title",children:e.jsx(o,{title:"Very Long Chat Group Name That Truncates",actions:[{icon:"search",ariaLabel:"Search"}],showMore:!0})})]})})},m={decorators:[r],parameters:{docs:{disable:!0}},args:{title:"Chats",actions:[{icon:"edit_square",ariaLabel:"New chat"},{icon:"search",ariaLabel:"Search"},{icon:"videocam",ariaLabel:"Video call"}],showMore:!0}},b={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(v,{title:"HTML",children:e.jsx(f,{language:"HTML",code:`<!-- Screen Header with 3 actions + more -->
<div class="screen-header">
  <p class="screen-header__title">Chats</p>
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

<!-- Header without actions -->
<div class="screen-header">
  <p class="screen-header__title">Contacts</p>
  <div class="screen-header__actions"></div>
</div>`})}),e.jsx(v,{title:"CSS (Foundation Variables)",children:e.jsx(f,{language:"CSS",code:`.screen-header {
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
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-h1);
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
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
}`})}),e.jsx(v,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(x,{title:"Container",items:["screen-header"]}),e.jsx(x,{title:"Elements",items:["screen-header__title","screen-header__actions","screen-header__action-btn","screen-header__action-icon"]})]})})]})};function t({label:a,children:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:a}),e.jsx("div",{style:{border:"1px solid var(--color-border-default)",overflow:"hidden"},children:n})]})}function v({title:a,children:n}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:a}),n]})}function f({language:a,code:n}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:n})})]})}function x({title:a,items:n}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:a}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:n.map(g=>e.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-primary)",background:"var(--color-bg-03)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-border-default)",display:"inline-block",width:"fit-content"},children:[".",g]},g))})]})}var _,w,y;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,C,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var j,M,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var A,W,N;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "No Actions",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [],
    showMore: false
  }
}`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var z,H,V;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "More Button Only",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [],
    showMore: true
  }
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var k,q,O;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(q=h.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var B,G,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(G=p.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var E,F,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      </div>
    </div>
}`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var P,U,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(U=m.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var X,J,K;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
  <p class="screen-header__title">Chats</p>
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

<!-- Header without actions -->
<div class="screen-header">
  <p class="screen-header__title">Contacts</p>
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
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-h1);
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
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
          <ClassGroup title="Elements" items={["screen-header__title", "screen-header__actions", "screen-header__action-btn", "screen-header__action-icon"]} />
        </div>
      </Section>
    </div>
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ae=["Default","WithTwoActions","WithOneAction","NoActions","MoreOnly","LongTitle","CustomTitle","AllStates","Playground","Usage"];export{u as AllStates,p as CustomTitle,s as Default,h as LongTitle,d as MoreOnly,l as NoActions,m as Playground,b as Usage,c as WithOneAction,i as WithTwoActions,ae as __namedExportsOrder,ee as default};
