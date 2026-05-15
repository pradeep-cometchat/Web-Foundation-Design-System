import{j as t}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=({title:i,supportingText:e,arrow:a="top-center",children:f,open:s=!1,className:r})=>{const x=["tooltip",a==="left"?"tooltip--left-pos":a==="right"?"tooltip--right-pos":`tooltip--${a}`,e&&"tooltip--has-supporting",s&&"tooltip--open",r].filter(Boolean).join(" ");return t.jsxs("div",{className:"tooltip-wrap",children:[f,t.jsxs("div",{className:x,role:"tooltip",children:[t.jsxs("div",{className:"tooltip__content",children:[t.jsx("div",{className:"tooltip__title",children:i}),e&&t.jsx("div",{className:"tooltip__supporting",children:e})]}),a!=="none"&&t.jsx("span",{className:"tooltip__arrow"})]})]})};try{n.displayName="Tooltip",n.__docgenInfo={description:"Tooltip — a small popup that shows contextual information on hover.",displayName:"Tooltip",props:{title:{defaultValue:null,description:"Primary tooltip text.",name:"title",required:!0,type:{name:"string"}},supportingText:{defaultValue:null,description:"Optional supporting/description text.",name:"supportingText",required:!1,type:{name:"string | undefined"}},arrow:{defaultValue:{value:"top-center"},description:'Arrow position. Default: "top-center".',name:"arrow",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"left"'},{value:'"right"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},children:{defaultValue:null,description:"The trigger element the tooltip wraps.",name:"children",required:!0,type:{name:"ReactNode"}},open:{defaultValue:{value:"false"},description:"Force tooltip to be visible (for demos).",name:"open",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const E={title:"Foundation/Tooltip",component:n,tags:["autodocs"],parameters:{layout:"padded",themes:{themeOverride:"Light"},docs:{description:{component:"A small popup that shows contextual information on hover or focus.\n\n**Background:** #0a0d12, **text:** white 12px/600, **supporting:** white 12px/400.\n\n**Arrow positions:** Top (center/left/right), Bottom (center/left/right), Left, Right, None.\n\n**Padding:** 8px 12px (title only), 12px (with supporting text).\n\nUses foundation tokens: `--color-neutral-lm-950`, `--color-white`, `--radius-md`,\n`--font-size-1`, `--font-weight-semibold`, `--font-weight-regular`."}}},argTypes:{title:{control:"text",table:{category:"Content"}},supportingText:{control:"text",table:{category:"Content"}},arrow:{control:"select",options:["top-center","top-left","top-right","bottom-center","bottom-left","bottom-right","left","right","none"],table:{category:"Appearance"}},open:{control:"boolean",table:{category:"State"}}}},p={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[t.jsx(l,{title:"Arrow at bottom (tooltip appears above trigger)",children:t.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[t.jsx(o,{title:"This is a tooltip",arrow:"bottom-left",label:"Bottom left"}),t.jsx(o,{title:"This is a tooltip",arrow:"bottom-center",label:"Bottom center"}),t.jsx(o,{title:"This is a tooltip",arrow:"bottom-right",label:"Bottom right"})]})}),t.jsx(l,{title:"Arrow at top (tooltip appears below trigger)",children:t.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[t.jsx(o,{title:"This is a tooltip",arrow:"top-left",label:"Top left",arrowOnTop:!0}),t.jsx(o,{title:"This is a tooltip",arrow:"top-center",label:"Top center",arrowOnTop:!0}),t.jsx(o,{title:"This is a tooltip",arrow:"top-right",label:"Top right",arrowOnTop:!0})]})}),t.jsx(l,{title:"Arrow on sides",children:t.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[t.jsx(o,{title:"This is a tooltip",arrow:"right",label:"Arrow right",side:"right"}),t.jsx(o,{title:"This is a tooltip",arrow:"left",label:"Arrow left",side:"left"}),t.jsx(o,{title:"This is a tooltip",arrow:"none",label:"No arrow"})]})})]})},c={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[t.jsx(l,{title:"Bottom arrow (tooltip above)",children:t.jsx(o,{title:"This is a tooltip",supportingText:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning.",arrow:"bottom-center",label:"Bottom center"})}),t.jsx(l,{title:"Top arrow (tooltip below)",children:t.jsx(o,{title:"This is a tooltip",supportingText:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning.",arrow:"top-center",label:"Top center",arrowOnTop:!0})}),t.jsx(l,{title:"Side arrows",children:t.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[t.jsx(o,{title:"This is a tooltip",supportingText:"Tooltips are used to describe or identify an element.",arrow:"right",label:"Arrow right",side:"right"}),t.jsx(o,{title:"This is a tooltip",supportingText:"Tooltips are used to describe or identify an element.",arrow:"left",label:"Arrow left",side:"left"})]})})]})},d={parameters:{controls:{disable:!0},layout:"centered"},render:()=>t.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",padding:"var(--space-24)"},children:[t.jsx(n,{title:"Add to favorites",arrow:"bottom-center",children:t.jsx(u,{label:"Favorite",icon:"favorite"})}),t.jsx(n,{title:"Share this item",supportingText:"Copy a link or share via email.",arrow:"bottom-center",children:t.jsx(u,{label:"Share",icon:"share"})}),t.jsx(n,{title:"Delete permanently",supportingText:"This action cannot be undone.",arrow:"bottom-center",children:t.jsx(u,{label:"Delete",icon:"delete"})})]})},m={args:{title:"This is a tooltip",supportingText:"",arrow:"bottom-center",open:!0},parameters:{docs:{disable:!0},layout:"centered"},render:i=>t.jsx("div",{style:{padding:"var(--space-24)"},children:t.jsx(n,{...i,children:t.jsx(u,{})})})};function u({label:i="Hover me",icon:e}){return t.jsxs("button",{type:"button",style:{padding:"8px 16px",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-lm-300)",background:"var(--color-white)",fontFamily:"inherit",fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"var(--space-1-5)"},children:[e&&t.jsx("span",{className:"icon-outlined","data-icon":"outlined",style:{fontFamily:"Material Symbols Outlined",fontSize:"var(--font-size-4)",fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20"},children:e}),i]})}function o({title:i,supportingText:e,arrow:a,label:f,arrowOnTop:s,side:r}){const h=a.includes("left")?"flex-start":a.includes("right")?"flex-end":"center",x=h==="flex-start"?{marginLeft:12}:h==="flex-end"?{marginRight:12}:{},g=a!=="none"&&t.jsx("span",{style:{width:0,height:0,borderStyle:"solid",display:"block",alignSelf:r?"center":h,...r?{}:x,...r==="right"?{borderWidth:"6px 6px 6px 0",borderColor:"transparent var(--color-neutral-lm-950) transparent transparent",marginLeft:-1}:r==="left"?{borderWidth:"6px 0 6px 6px",borderColor:"transparent transparent transparent var(--color-neutral-lm-950)",marginRight:-1}:s?{borderWidth:"0 6px 6px 6px",borderColor:"transparent transparent var(--color-neutral-lm-950) transparent"}:{borderWidth:"6px 6px 0 6px",borderColor:"var(--color-neutral-lm-950) transparent transparent transparent"}}}),v=t.jsxs("div",{style:{background:"var(--color-neutral-lm-950)",borderRadius:"var(--radius-md)",padding:e?12:"8px 12px",width:e?320:"max-content",maxWidth:320},children:[t.jsx("div",{style:{fontFamily:"var(--font-family-heading)",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-white)",lineHeight:"18px"},children:i}),e&&t.jsx("div",{style:{fontFamily:"var(--font-family-heading)",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-regular)",color:"var(--color-white)",lineHeight:"18px",marginTop:"var(--space-1)",opacity:.9},children:e})]});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"var(--space-1)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-1)"},children:f}),r?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0},children:[r==="left"&&v,r==="left"&&g,r==="right"&&g,r==="right"&&v]}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"stretch",gap:0},children:[s&&g,v,!s&&g]})]})}function l({title:i,children:e}){return t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-3)"},children:i}),e]})}var b,T,w,y,j;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-8)"
  }}>
      <Section title="Arrow at bottom (tooltip appears above trigger)">
        <div style={{
        display: "flex",
        gap: "var(--space-6)",
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
        gap: "var(--space-6)",
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
        gap: "var(--space-6)",
        flexWrap: "wrap"
      }}>
          <StaticTooltip title="This is a tooltip" arrow="right" label="Arrow right" side="right" />
          <StaticTooltip title="This is a tooltip" arrow="left" label="Arrow left" side="left" />
          <StaticTooltip title="This is a tooltip" arrow="none" label="No arrow" />
        </div>
      </Section>
    </div>
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:"All arrow positions — rendered as static tooltip previews (no clipping).",...(j=(y=p.parameters)==null?void 0:y.docs)==null?void 0:j.description}}};var S,A,W,B,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-8)"
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
        gap: "var(--space-6)",
        flexWrap: "wrap"
      }}>
          <StaticTooltip title="This is a tooltip" supportingText="Tooltips are used to describe or identify an element." arrow="right" label="Arrow right" side="right" />
          <StaticTooltip title="This is a tooltip" supportingText="Tooltips are used to describe or identify an element." arrow="left" label="Arrow left" side="left" />
        </div>
      </Section>
    </div>
}`,...(W=(A=c.parameters)==null?void 0:A.docs)==null?void 0:W.source},description:{story:"With supporting text — all positions.",...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.description}}};var N,z,I,D,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "centered"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-8)",
    padding: "var(--space-24)"
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
}`,...(I=(z=d.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"Interactive — hover to see tooltip appear.",...(C=(D=d.parameters)==null?void 0:D.docs)==null?void 0:C.description}}};var O,F,R,k,V;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    padding: "var(--space-24)"
  }}>
      <Tooltip {...args}>
        <TriggerBtn />
      </Tooltip>
    </div>
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:"Interactive playground — use the controls panel to configure the Tooltip.",...(V=(k=m.parameters)==null?void 0:k.docs)==null?void 0:V.description}}};const H=["ArrowPositions","WithSupportingText","Interactive","Playground"];export{p as ArrowPositions,d as Interactive,m as Playground,c as WithSupportingText,H as __namedExportsOrder,E as default};
