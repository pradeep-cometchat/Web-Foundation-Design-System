import{j as t}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i=({title:o,supportingText:e,arrow:n="top-center",children:v,open:s=!1,className:a})=>{const b=["tooltip",n==="left"?"tooltip--left-pos":n==="right"?"tooltip--right-pos":`tooltip--${n}`,e&&"tooltip--has-supporting",s&&"tooltip--open",a].filter(Boolean).join(" ");return t.jsxs("div",{className:"tooltip-wrap",children:[v,t.jsxs("div",{className:b,role:"tooltip",children:[t.jsxs("div",{className:"tooltip__content",children:[t.jsx("div",{className:"tooltip__title",children:o}),e&&t.jsx("div",{className:"tooltip__supporting",children:e})]}),n!=="none"&&t.jsx("span",{className:"tooltip__arrow"})]})]})};try{i.displayName="Tooltip",i.__docgenInfo={description:"Tooltip — a small popup that shows contextual information on hover.",displayName:"Tooltip",props:{title:{defaultValue:null,description:"Primary tooltip text.",name:"title",required:!0,type:{name:"string"}},supportingText:{defaultValue:null,description:"Optional supporting/description text.",name:"supportingText",required:!1,type:{name:"string | undefined"}},arrow:{defaultValue:{value:"top-center"},description:'Arrow position. Default: "top-center".',name:"arrow",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"left"'},{value:'"right"'},{value:'"none"'}]}},children:{defaultValue:null,description:"The trigger element the tooltip wraps.",name:"children",required:!0,type:{name:"ReactNode"}},open:{defaultValue:{value:"false"},description:"Force tooltip to be visible (for demos).",name:"open",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const $={title:"Base Components/Tooltip",component:i,tags:["autodocs"],parameters:{layout:"padded",themes:{themeOverride:"Light"},docs:{description:{component:"A small popup that shows contextual information on hover or focus.\n\n**Background:** #0a0d12, **text:** white 12px/600, **supporting:** white 12px/400.\n\n**Arrow positions:** Top (center/left/right), Bottom (center/left/right), Left, Right, None.\n\n**Padding:** 8px 12px (title only), 12px (with supporting text).\n\nUses foundation tokens: `--color-neutral-lm-950`, `--color-white`, `--radius-md`,\n`--font-size-1`, `--font-weight-semibold`, `--font-weight-regular`."}}},argTypes:{title:{control:"text",table:{category:"Content"}},supportingText:{control:"text",table:{category:"Content"}},arrow:{control:"select",options:["top-center","top-left","top-right","bottom-center","bottom-left","bottom-right","left","right","none"],table:{category:"Appearance"}},open:{control:"boolean",table:{category:"State"}}}},p={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-8)"},children:[t.jsx(l,{title:"Arrow at bottom (tooltip appears above trigger)",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",flexWrap:"wrap"},children:[t.jsx(r,{title:"This is a tooltip",arrow:"bottom-left",label:"Bottom left"}),t.jsx(r,{title:"This is a tooltip",arrow:"bottom-center",label:"Bottom center"}),t.jsx(r,{title:"This is a tooltip",arrow:"bottom-right",label:"Bottom right"})]})}),t.jsx(l,{title:"Arrow at top (tooltip appears below trigger)",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",flexWrap:"wrap"},children:[t.jsx(r,{title:"This is a tooltip",arrow:"top-left",label:"Top left",arrowOnTop:!0}),t.jsx(r,{title:"This is a tooltip",arrow:"top-center",label:"Top center",arrowOnTop:!0}),t.jsx(r,{title:"This is a tooltip",arrow:"top-right",label:"Top right",arrowOnTop:!0})]})}),t.jsx(l,{title:"Arrow on sides",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",flexWrap:"wrap"},children:[t.jsx(r,{title:"This is a tooltip",arrow:"right",label:"Arrow right",side:"right"}),t.jsx(r,{title:"This is a tooltip",arrow:"left",label:"Arrow left",side:"left"}),t.jsx(r,{title:"This is a tooltip",arrow:"none",label:"No arrow"})]})})]})},c={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-8)"},children:[t.jsx(l,{title:"Bottom arrow (tooltip above)",children:t.jsx(r,{title:"This is a tooltip",supportingText:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning.",arrow:"bottom-center",label:"Bottom center"})}),t.jsx(l,{title:"Top arrow (tooltip below)",children:t.jsx(r,{title:"This is a tooltip",supportingText:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning.",arrow:"top-center",label:"Top center",arrowOnTop:!0})}),t.jsx(l,{title:"Side arrows",children:t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",flexWrap:"wrap"},children:[t.jsx(r,{title:"This is a tooltip",supportingText:"Tooltips are used to describe or identify an element.",arrow:"right",label:"Arrow right",side:"right"}),t.jsx(r,{title:"This is a tooltip",supportingText:"Tooltips are used to describe or identify an element.",arrow:"left",label:"Arrow left",side:"left"})]})})]})},d={parameters:{controls:{disable:!0},layout:"centered"},render:()=>t.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-8)",padding:"var(--cometchat-spacing-24)"},children:[t.jsx(i,{title:"Add to favorites",arrow:"bottom-center",children:t.jsx(f,{label:"Favorite",icon:"favorite"})}),t.jsx(i,{title:"Share this item",supportingText:"Copy a link or share via email.",arrow:"bottom-center",children:t.jsx(f,{label:"Share",icon:"share"})}),t.jsx(i,{title:"Delete permanently",supportingText:"This action cannot be undone.",arrow:"bottom-center",children:t.jsx(f,{label:"Delete",icon:"delete"})})]})},h={args:{title:"This is a tooltip",supportingText:"",arrow:"bottom-center",open:!0},parameters:{docs:{disable:!0},layout:"centered"},render:o=>t.jsx("div",{style:{padding:"var(--cometchat-spacing-24)"},children:t.jsx(i,{...o,children:t.jsx(f,{})})})};function f({label:o="Hover me",icon:e}){return t.jsxs("button",{type:"button",style:{padding:"8px 16px",borderRadius:"var(--cometchat-radius-2)",border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-static-white)",fontFamily:"inherit",fontSize:"14px",fontWeight:"500",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"var(--cometchat-spacing-1-5)"},children:[e&&t.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"18px",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:e}),o]})}function r({title:o,supportingText:e,arrow:n,label:v,arrowOnTop:s,side:a}){const m=n.includes("left")?"flex-start":n.includes("right")?"flex-end":"center",b=m==="flex-start"?{marginLeft:12}:m==="flex-end"?{marginRight:12}:{},g=n!=="none"&&t.jsx("span",{style:{width:0,height:0,borderStyle:"solid",display:"block",alignSelf:a?"center":m,...a?{}:b,...a==="right"?{borderWidth:"6px 6px 6px 0",borderColor:"transparent var(--cometchat-neutral-color-900) transparent transparent",marginLeft:-1}:a==="left"?{borderWidth:"6px 0 6px 6px",borderColor:"transparent transparent transparent var(--cometchat-neutral-color-900)",marginRight:-1}:s?{borderWidth:"0 6px 6px 6px",borderColor:"transparent transparent var(--cometchat-neutral-color-900) transparent"}:{borderWidth:"6px 6px 0 6px",borderColor:"var(--cometchat-neutral-color-900) transparent transparent transparent"}}}),w=t.jsxs("div",{style:{background:"var(--cometchat-neutral-color-900)",borderRadius:"var(--cometchat-radius-2)",padding:e?12:"8px 12px",width:e?320:"max-content",maxWidth:320},children:[t.jsx("div",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",fontWeight:"600",color:"var(--cometchat-static-white)",lineHeight:"18px"},children:o}),e&&t.jsx("div",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",fontWeight:"400",color:"var(--cometchat-static-white)",lineHeight:"18px",marginTop:"var(--cometchat-spacing-1)",opacity:.9},children:e})]});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"var(--cometchat-spacing-1)"},children:[t.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-1)"},children:v}),a?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0},children:[a==="left"&&w,a==="left"&&g,a==="right"&&g,a==="right"&&w]}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"stretch",gap:0},children:[s&&g,w,!s&&g]})]})}function l({title:o,children:e}){return t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-3)"},children:o}),e]})}const u={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>t.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[t.jsx(y,{title:"HTML Structure",children:t.jsx(T,{language:"HTML",code:`<!-- Tooltip with arrow at bottom-center -->
<div class="tooltip-wrapper">
  <button class="tooltip-trigger">Hover me</button>
  <div class="tooltip tooltip--visible">
    <div class="tooltip__content">
      <span class="tooltip__title">This is a tooltip</span>
      <span class="tooltip__supporting">
        Tooltips help the user understand meaning.
      </span>
    </div>
    <span class="tooltip__arrow tooltip__arrow--bottom-center"></span>
  </div>
</div>`})}),t.jsx(y,{title:"CSS (CometChat Tokens)",children:t.jsx(T,{language:"CSS",code:`.tooltip {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 150ms ease;
}

.tooltip--visible {
  opacity: 1;
}

.tooltip__content {
  background: var(--cometchat-neutral-color-900);
  border-radius: var(--cometchat-radius-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  max-width: 320px;
}

/* With supporting text — more padding */
.tooltip__content--rich {
  padding: var(--cometchat-spacing-3);
}

.tooltip__title {
  font: var(--cometchat-font-caption1-semibold);
  color: var(--cometchat-static-white);
  display: block;
}

.tooltip__supporting {
  font: var(--cometchat-font-caption1-regular);
  color: var(--cometchat-static-white);
  opacity: 0.9;
  display: block;
  margin-top: var(--cometchat-spacing-1);
}

/* Arrow — CSS triangle */
.tooltip__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
}

.tooltip__arrow--bottom-center {
  border-width: 6px 6px 0 6px;
  border-color: var(--cometchat-neutral-color-900) transparent transparent transparent;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip__arrow--top-center {
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent var(--cometchat-neutral-color-900) transparent;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip__arrow--left {
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent var(--cometchat-neutral-color-900);
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
}

.tooltip__arrow--right {
  border-width: 6px 6px 6px 0;
  border-color: transparent var(--cometchat-neutral-color-900) transparent transparent;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
}`})}),t.jsx(y,{title:"Variants",children:t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[t.jsx(x,{title:"Title Only",description:"Simple tooltip with just a title. Padding: 8px 12px. Used for icon labels and short hints."}),t.jsx(x,{title:"With Supporting Text",description:"Title + description. Padding: 12px. Max-width 320px. Used for longer explanations."}),t.jsx(x,{title:"Arrow Positions",description:"9 positions: top (left/center/right), bottom (left/center/right), left, right, none."}),t.jsx(x,{title:"Interactive",description:"Appears on hover/focus with 150ms fade transition. Disappears on mouse leave/blur."})]})})]})};function y({title:o,children:e}){return t.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[t.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:o}),e]})}function T({language:o,code:e}){return t.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:t.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:o})}),t.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:t.jsx("code",{children:e})})]})}function x({title:o,description:e}){return t.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[t.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:o}),t.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e})]})}var S,j,_,C,A;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-8)"
  }}>
      <Section title="Arrow at bottom (tooltip appears above trigger)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)",
        flexWrap: "wrap"
      }}>
          <StaticTooltip title="This is a tooltip" arrow="bottom-left" label="Bottom left" />
          <StaticTooltip title="This is a tooltip" arrow="bottom-center" label="Bottom center" />
          <StaticTooltip title="This is a tooltip" arrow="bottom-right" label="Bottom right" />
        </div>
      </Section>
      <Section title="Arrow at top (tooltip appears below trigger)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)",
        flexWrap: "wrap"
      }}>
          <StaticTooltip title="This is a tooltip" arrow="top-left" label="Top left" arrowOnTop />
          <StaticTooltip title="This is a tooltip" arrow="top-center" label="Top center" arrowOnTop />
          <StaticTooltip title="This is a tooltip" arrow="top-right" label="Top right" arrowOnTop />
        </div>
      </Section>
      <Section title="Arrow on sides">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)",
        flexWrap: "wrap"
      }}>
          <StaticTooltip title="This is a tooltip" arrow="right" label="Arrow right" side="right" />
          <StaticTooltip title="This is a tooltip" arrow="left" label="Arrow left" side="left" />
          <StaticTooltip title="This is a tooltip" arrow="none" label="No arrow" />
        </div>
      </Section>
    </div>
}`,...(_=(j=p.parameters)==null?void 0:j.docs)==null?void 0:_.source},description:{story:"All arrow positions — rendered as static tooltip previews (no clipping).",...(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.description}}};var W,B,k,I,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-8)"
  }}>
      <Section title="Bottom arrow (tooltip above)">
        <StaticTooltip title="This is a tooltip" supportingText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning." arrow="bottom-center" label="Bottom center" />
      </Section>
      <Section title="Top arrow (tooltip below)">
        <StaticTooltip title="This is a tooltip" supportingText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning." arrow="top-center" label="Top center" arrowOnTop />
      </Section>
      <Section title="Side arrows">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)",
        flexWrap: "wrap"
      }}>
          <StaticTooltip title="This is a tooltip" supportingText="Tooltips are used to describe or identify an element." arrow="right" label="Arrow right" side="right" />
          <StaticTooltip title="This is a tooltip" supportingText="Tooltips are used to describe or identify an element." arrow="left" label="Arrow left" side="left" />
        </div>
      </Section>
    </div>
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:"With supporting text — all positions.",...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var z,D,U,O,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "centered"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--cometchat-spacing-8)",
    padding: "var(--cometchat-spacing-24)"
  }}>
      <Tooltip title="Add to favorites" arrow="bottom-center">
        <TriggerBtn label="Favorite" icon="favorite" />
      </Tooltip>
      <Tooltip title="Share this item" supportingText="Copy a link or share via email." arrow="bottom-center">
        <TriggerBtn label="Share" icon="share" />
      </Tooltip>
      <Tooltip title="Delete permanently" supportingText="This action cannot be undone." arrow="bottom-center">
        <TriggerBtn label="Delete" icon="delete" />
      </Tooltip>
    </div>
}`,...(U=(D=d.parameters)==null?void 0:D.docs)==null?void 0:U.source},description:{story:"Interactive — hover to see tooltip appear.",...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var H,L,R,F,V;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: "This is a tooltip",
    supportingText: "",
    arrow: "bottom-center",
    open: true
  },
  parameters: {
    docs: {
      disable: true
    },
    layout: "centered"
  },
  render: (args: any) => <div style={{
    padding: "var(--cometchat-spacing-24)"
  }}>
      <Tooltip {...args}>
        <TriggerBtn />
      </Tooltip>
    </div>
}`,...(R=(L=h.parameters)==null?void 0:L.docs)==null?void 0:R.source},description:{story:"Interactive playground — use the controls panel to configure the Tooltip.",...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.description}}};var M,q,X;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Tooltip with arrow at bottom-center -->
<div class="tooltip-wrapper">
  <button class="tooltip-trigger">Hover me</button>
  <div class="tooltip tooltip--visible">
    <div class="tooltip__content">
      <span class="tooltip__title">This is a tooltip</span>
      <span class="tooltip__supporting">
        Tooltips help the user understand meaning.
      </span>
    </div>
    <span class="tooltip__arrow tooltip__arrow--bottom-center"></span>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.tooltip {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 150ms ease;
}

.tooltip--visible {
  opacity: 1;
}

.tooltip__content {
  background: var(--cometchat-neutral-color-900);
  border-radius: var(--cometchat-radius-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  max-width: 320px;
}

/* With supporting text — more padding */
.tooltip__content--rich {
  padding: var(--cometchat-spacing-3);
}

.tooltip__title {
  font: var(--cometchat-font-caption1-semibold);
  color: var(--cometchat-static-white);
  display: block;
}

.tooltip__supporting {
  font: var(--cometchat-font-caption1-regular);
  color: var(--cometchat-static-white);
  opacity: 0.9;
  display: block;
  margin-top: var(--cometchat-spacing-1);
}

/* Arrow — CSS triangle */
.tooltip__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
}

.tooltip__arrow--bottom-center {
  border-width: 6px 6px 0 6px;
  border-color: var(--cometchat-neutral-color-900) transparent transparent transparent;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip__arrow--top-center {
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent var(--cometchat-neutral-color-900) transparent;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip__arrow--left {
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent var(--cometchat-neutral-color-900);
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
}

.tooltip__arrow--right {
  border-width: 6px 6px 6px 0;
  border-color: transparent var(--cometchat-neutral-color-900) transparent transparent;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
}\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Title Only" description="Simple tooltip with just a title. Padding: 8px 12px. Used for icon labels and short hints." />
          <StateCard title="With Supporting Text" description="Title + description. Padding: 12px. Max-width 320px. Used for longer explanations." />
          <StateCard title="Arrow Positions" description="9 positions: top (left/center/right), bottom (left/center/right), left, right, none." />
          <StateCard title="Interactive" description="Appears on hover/focus with 150ms fade transition. Disappears on mouse leave/blur." />
        </div>
      </UsageSection>
    </div>
}`,...(X=(q=u.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};const J=["ArrowPositions","WithSupportingText","Interactive","Playground","Usage"];export{p as ArrowPositions,d as Interactive,h as Playground,u as Usage,c as WithSupportingText,J as __namedExportsOrder,$ as default};
