import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ue={title:"Core Components/Chat Area/Action Bubble/Action Badge",tags:["autodocs"],parameters:{layout:"centered"}},r={name:"Incoming Voice Call",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"phone_callback",label:"Incoming Voice Call"})})},s={name:"Outgoing Voice Call",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"phone_outgoing",label:"Outgoing Voice Call"})})},t={name:"Voice Call Answered",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"call",label:"Voice Call Answered"})})},d={name:"Voice Call Rejected",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"call_end",label:"Voice Call Rejected"})})},C={name:"Missed Voice Call",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"phone_missed",label:"Missed Voice Call",missed:!0})})},m={name:"Incoming Video Call",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"videocam",label:"Incoming Video Call",videoDirection:"incoming"})})},p={name:"Outgoing Video Call",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"videocam",label:"Outgoing Video Call",videoDirection:"outgoing"})})},g={name:"Video Call Answered",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"videocam",label:"Video Call Answered"})})},b={name:"Video Call Rejected",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"videocam_off",label:"Video Call Rejected"})})},u={name:"Missed Video Call",render:()=>e.jsx(n,{children:e.jsx(o,{icon:"missed_video_call",label:"Missed Video Call",missed:!0})})},v={name:"All Call Actions",render:()=>e.jsxs(n,{width:400,children:[e.jsx(o,{icon:"phone_callback",label:"Incoming Voice Call"}),e.jsx(o,{icon:"phone_outgoing",label:"Outgoing Voice Call"}),e.jsx(o,{icon:"call",label:"Voice Call Answered"}),e.jsx(o,{icon:"call_end",label:"Voice Call Rejected"}),e.jsx(o,{icon:"phone_missed",label:"Missed Voice Call",missed:!0}),e.jsx(o,{icon:"videocam",label:"Incoming Video Call",videoDirection:"incoming"}),e.jsx(o,{icon:"videocam",label:"Outgoing Video Call",videoDirection:"outgoing"}),e.jsx(o,{icon:"videocam",label:"Video Call Answered"}),e.jsx(o,{icon:"videocam_off",label:"Video Call Rejected"}),e.jsx(o,{icon:"missed_video_call",label:"Missed Video Call",missed:!0})]})},V={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(j,{title:"HTML Structure",children:e.jsx(Ce,{language:"HTML",code:`<!-- Call Action Badge (centered, no lines) -->
<div class="action-bubble-divider">
  <div class="action-bubble-call-badge">
    <span class="icon-rounded action-bubble-call-badge__icon">phone_callback</span>
    <span class="action-bubble-call-badge__label">Incoming Voice Call</span>
  </div>
</div>

<!-- Missed Call (red variant) -->
<div class="action-bubble-divider">
  <div class="action-bubble-call-badge action-bubble-call-badge--missed">
    <span class="icon-rounded action-bubble-call-badge__icon">phone_missed</span>
    <span class="action-bubble-call-badge__label">Missed Voice Call</span>
  </div>
</div>`})}),e.jsx(j,{title:"Icon Reference",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(l,{title:"Voice — Incoming",description:"Icon: phone_callback"}),e.jsx(l,{title:"Voice — Outgoing",description:"Custom SVG (phone + outgoing arrow)"}),e.jsx(l,{title:"Voice — Answered",description:"Icon: call"}),e.jsx(l,{title:"Voice — Rejected",description:"Icon: call_end"}),e.jsx(l,{title:"Voice — Missed",description:"Icon: phone_missed (error color)"}),e.jsx(l,{title:"Video — Incoming",description:"Custom SVG (videocam + incoming arrow)"}),e.jsx(l,{title:"Video — Outgoing",description:"Custom SVG (videocam + outgoing arrow)"}),e.jsx(l,{title:"Video — Answered",description:"Icon: videocam"}),e.jsx(l,{title:"Video — Rejected",description:"Icon: videocam_off"}),e.jsx(l,{title:"Video — Missed",description:"Icon: missed_video_call (error color)"})]})})]})};function o({icon:a,label:i,missed:h,videoDirection:x}){return e.jsx("div",{className:"action-bubble-divider",children:e.jsxs("div",{className:`action-bubble-call-badge ${h?"action-bubble-call-badge--missed":""}`,children:[x?e.jsx(de,{direction:x,missed:h}):a==="phone_outgoing"?e.jsx(te,{}):e.jsx("span",{className:"icon-rounded action-bubble-call-badge__icon",children:a}),e.jsx("span",{className:"action-bubble-call-badge__label",children:i})]})})}function te(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14.1667 14.1667",fill:"none",className:"action-bubble-call-badge__svg-icon",children:[e.jsx("path",{d:"M13.2835 14.1667C11.7131 14.1667 10.1354 13.8015 8.55042 13.0713C6.96556 12.341 5.50938 11.3108 4.18188 9.98083C2.85451 8.6507 1.82569 7.19444 1.09542 5.61208C0.365139 4.02986 0 2.45354 0 0.883125C0 0.630764 0.0833333 0.420486 0.25 0.252291C0.416667 0.0840969 0.625 0 0.875 0H3.59292C3.80333 0 3.98896 0.0686809 4.14979 0.206042C4.31063 0.343264 4.41292 0.512847 4.45667 0.714792L4.93438 3.16667C4.96743 3.39417 4.96049 3.58965 4.91354 3.75313C4.86646 3.9166 4.78201 4.05389 4.66021 4.165L2.73563 6.03854C3.04535 6.60576 3.39924 7.14236 3.79729 7.64833C4.19521 8.15417 4.62604 8.63729 5.08979 9.09771C5.54701 9.55507 6.03313 9.97979 6.54813 10.3719C7.06313 10.764 7.61924 11.1288 8.21646 11.4665L10.0865 9.58021C10.2169 9.44451 10.3748 9.34938 10.5602 9.29479C10.7455 9.24035 10.9381 9.22701 11.1379 9.25479L13.4519 9.72604C13.6623 9.7816 13.834 9.88896 13.9671 10.0481C14.1001 10.2073 14.1667 10.3878 14.1667 10.5898V13.2917C14.1667 13.5417 14.0826 13.75 13.9144 13.9167C13.7462 14.0833 13.5359 14.1667 13.2835 14.1667ZM2.14417 4.85583L3.63146 3.43271C3.65813 3.41132 3.67549 3.38194 3.68354 3.34458C3.6916 3.30722 3.69028 3.2725 3.67958 3.24042L3.31729 1.37813C3.3066 1.33549 3.28792 1.30347 3.26125 1.28208C3.23458 1.26069 3.19986 1.25 3.15708 1.25H1.375C1.34292 1.25 1.31618 1.26069 1.29479 1.28208C1.27354 1.30347 1.26292 1.33021 1.26292 1.36229C1.30556 1.93174 1.39875 2.51021 1.5425 3.09771C1.68611 3.68535 1.88667 4.27139 2.14417 4.85583ZM9.39417 12.0577C9.94653 12.3152 10.5226 12.5121 11.1225 12.6483C11.7225 12.7844 12.2831 12.8653 12.8044 12.891C12.8365 12.891 12.8632 12.8803 12.8846 12.859C12.906 12.8376 12.9167 12.8108 12.9167 12.7788V11.0256C12.9167 10.9828 12.906 10.9481 12.8846 10.9215C12.8632 10.8948 12.8312 10.8761 12.7885 10.8654L11.0385 10.5096C11.0065 10.4989 10.9784 10.4976 10.9544 10.5056C10.9303 10.5137 10.9049 10.531 10.8781 10.5577L9.39417 12.0577Z",fill:"currentColor"}),e.jsx("path",{d:"M11.9856 1.30675H10.1554C9.97835 1.30675 9.82988 1.24682 9.71002 1.12696C9.5903 1.0071 9.53044 0.858625 9.53044 0.681542C9.53044 0.50432 9.5903 0.355917 9.71002 0.236334C9.82988 0.116612 9.97835 0.0567506 10.1554 0.0567506H13.3606C13.574 0.0567506 13.7528 0.128972 13.8971 0.273416C14.0415 0.417722 14.1138 0.596541 14.1138 0.809875V4.01508C14.1138 4.19217 14.0538 4.34064 13.934 4.4605C13.8141 4.58022 13.6656 4.64008 13.4886 4.64008C13.3113 4.64008 13.1629 4.58022 13.0434 4.4605C12.9236 4.34064 12.8638 4.19217 12.8638 4.01508V2.18487L8.94398 6.10488C8.82856 6.22029 8.68349 6.27932 8.50877 6.28196C8.33405 6.2846 8.18634 6.22557 8.06564 6.10488C7.94495 5.98418 7.8846 5.83779 7.8846 5.66571C7.8846 5.49376 7.94495 5.34737 8.06564 5.22654L11.9856 1.30675Z",fill:"currentColor"})]})}function de({direction:a,missed:i}){return a==="incoming"?e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16.3473 13.0833",fill:"none",className:`action-bubble-call-badge__svg-icon ${i?"action-bubble-call-badge__svg-icon--missed":""}`,children:[e.jsx("path",{d:"M1.31958 13.0833C0.963611 13.0833 0.654722 12.9524 0.392917 12.6906C0.130972 12.4287 0 12.1198 0 11.764V1.31938C0 0.963542 0.130972 0.654652 0.392917 0.392708C0.654722 0.130902 0.963611 0 1.31958 0H11.7669C12.1159 0 12.4226 0.130902 12.6869 0.392708C12.9512 0.654652 13.0833 0.963542 13.0833 1.31938V5.56938L15.7779 2.875C15.8797 2.7732 16.0001 2.74833 16.139 2.80042C16.2778 2.8525 16.3473 2.95146 16.3473 3.09729V9.98896C16.3473 10.1322 16.2778 10.23 16.139 10.2825C16.0001 10.3349 15.8797 10.3101 15.7779 10.2083L13.0833 7.51396V11.764C13.0833 12.1198 12.9512 12.4287 12.6869 12.6906C12.4226 12.9524 12.1159 13.0833 11.7669 13.0833H1.31958ZM1.31958 11.764H11.764V1.31938H1.31958V11.764Z",fill:"currentColor"}),e.jsx("path",{d:"M5.29773 8.18371H7.12794C7.30502 8.18371 7.4535 8.24364 7.57336 8.3635C7.69308 8.48336 7.75294 8.63183 7.75294 8.80892C7.75294 8.98614 7.69308 9.13454 7.57336 9.25413C7.4535 9.37385 7.30502 9.43371 7.12794 9.43371H3.92273C3.7094 9.43371 3.53058 9.36149 3.38627 9.21704C3.24183 9.07274 3.16961 8.89392 3.16961 8.68058V5.47537C3.16961 5.29829 3.22954 5.14982 3.3494 5.02996C3.46926 4.91024 3.61773 4.85037 3.79481 4.85037C3.97204 4.85037 4.12044 4.91024 4.24002 5.02996C4.35975 5.14982 4.41961 5.29829 4.41961 5.47537V7.30558L8.3394 3.38558C8.45481 3.27017 8.59988 3.21114 8.77461 3.2085C8.94933 3.20586 9.09704 3.26489 9.21773 3.38558C9.33843 3.50628 9.39877 3.65267 9.39877 3.82475C9.39877 3.99669 9.33843 4.14308 9.21773 4.26392L5.29773 8.18371Z",fill:"currentColor"})]}):e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16.3473 13.0833",fill:"none",className:`action-bubble-call-badge__svg-icon ${i?"action-bubble-call-badge__svg-icon--missed":""}`,children:[e.jsx("path",{d:"M1.31958 13.0833C0.963611 13.0833 0.654722 12.9524 0.392917 12.6906C0.130972 12.4287 0 12.1198 0 11.764V1.31938C0 0.963542 0.130972 0.654652 0.392917 0.392708C0.654722 0.130902 0.963611 0 1.31958 0H11.7669C12.1159 0 12.4226 0.130902 12.6869 0.392708C12.9512 0.654652 13.0833 0.963542 13.0833 1.31938V5.56938L15.7779 2.875C15.8797 2.7732 16.0001 2.74833 16.139 2.80042C16.2778 2.8525 16.3473 2.95146 16.3473 3.09729V9.98896C16.3473 10.1322 16.2778 10.23 16.139 10.2825C16.0001 10.3349 15.8797 10.3101 15.7779 10.2083L13.0833 7.51396V11.764C13.0833 12.1198 12.9512 12.4287 12.6869 12.6906C12.4226 12.9524 12.1159 13.0833 11.7669 13.0833H1.31958ZM1.31958 11.764H11.764V1.31938H1.31958V11.764Z",fill:"currentColor"}),e.jsx("path",{d:"M7.27065 4.45842H5.44044C5.26336 4.45842 5.11488 4.39848 4.99502 4.27862C4.8753 4.15876 4.81544 4.01029 4.81544 3.83321C4.81544 3.65598 4.8753 3.50758 4.99502 3.388C5.11488 3.26828 5.26336 3.20842 5.44044 3.20842H8.64565C8.85898 3.20842 9.0378 3.28064 9.18211 3.42508C9.32655 3.56939 9.39877 3.74821 9.39877 3.96154V7.16675C9.39877 7.34383 9.33884 7.4923 9.21898 7.61217C9.09912 7.73189 8.95065 7.79175 8.77357 7.79175C8.59634 7.79175 8.44794 7.73189 8.32836 7.61217C8.20863 7.4923 8.14877 7.34383 8.14877 7.16675V5.33654L4.22898 9.25654C4.11357 9.37196 3.9685 9.43099 3.79377 9.43362C3.61905 9.43626 3.47134 9.37724 3.35065 9.25654C3.22995 9.13585 3.16961 8.98946 3.16961 8.81737C3.16961 8.64543 3.22995 8.49904 3.35065 8.37821L7.27065 4.45842Z",fill:"currentColor"})]})}function n({children:a,width:i=360}){return e.jsx("div",{style:{width:i,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:a})}function j({title:a,children:i}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:a}),i]})}function Ce({language:a,code:i}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:i})})]})}function l({title:a,description:i}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:a}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:i})]})}const c={parameters:{docs:{disable:!0}}};var _,f,A;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Incoming Voice Call",
  render: () => <Wrapper>
      <CallActionDivider icon="phone_callback" label="Incoming Voice Call" />
    </Wrapper>
}`,...(A=(f=r.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,I,M;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Outgoing Voice Call",
  render: () => <Wrapper>
      <CallActionDivider icon="phone_outgoing" label="Outgoing Voice Call" />
    </Wrapper>
}`,...(M=(I=s.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var w,y,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Voice Call Answered",
  render: () => <Wrapper>
      <CallActionDivider icon="call" label="Voice Call Answered" />
    </Wrapper>
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var W,R,H;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Voice Call Rejected",
  render: () => <Wrapper>
      <CallActionDivider icon="call_end" label="Voice Call Rejected" />
    </Wrapper>
}`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var L,O,k;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Missed Voice Call",
  render: () => <Wrapper>
      <CallActionDivider icon="phone_missed" label="Missed Voice Call" missed />
    </Wrapper>
}`,...(k=(O=C.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var B,Z,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Incoming Video Call",
  render: () => <Wrapper>
      <CallActionDivider icon="videocam" label="Incoming Video Call" videoDirection="incoming" />
    </Wrapper>
}`,...(T=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:T.source}}};var N,U,G;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Outgoing Video Call",
  render: () => <Wrapper>
      <CallActionDivider icon="videocam" label="Outgoing Video Call" videoDirection="outgoing" />
    </Wrapper>
}`,...(G=(U=p.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var z,P,$;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Video Call Answered",
  render: () => <Wrapper>
      <CallActionDivider icon="videocam" label="Video Call Answered" />
    </Wrapper>
}`,...($=(P=g.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var E,F,X;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Video Call Rejected",
  render: () => <Wrapper>
      <CallActionDivider icon="videocam_off" label="Video Call Rejected" />
    </Wrapper>
}`,...(X=(F=b.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var q,J,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Missed Video Call",
  render: () => <Wrapper>
      <CallActionDivider icon="missed_video_call" label="Missed Video Call" missed />
    </Wrapper>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "All Call Actions",
  render: () => <Wrapper width={400}>
      <CallActionDivider icon="phone_callback" label="Incoming Voice Call" />
      <CallActionDivider icon="phone_outgoing" label="Outgoing Voice Call" />
      <CallActionDivider icon="call" label="Voice Call Answered" />
      <CallActionDivider icon="call_end" label="Voice Call Rejected" />
      <CallActionDivider icon="phone_missed" label="Missed Voice Call" missed />
      <CallActionDivider icon="videocam" label="Incoming Video Call" videoDirection="incoming" />
      <CallActionDivider icon="videocam" label="Outgoing Video Call" videoDirection="outgoing" />
      <CallActionDivider icon="videocam" label="Video Call Answered" />
      <CallActionDivider icon="videocam_off" label="Video Call Rejected" />
      <CallActionDivider icon="missed_video_call" label="Missed Video Call" missed />
    </Wrapper>
}`,...(ee=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var oe,ae,ie;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Call Action Badge (centered, no lines) -->
<div class="action-bubble-divider">
  <div class="action-bubble-call-badge">
    <span class="icon-rounded action-bubble-call-badge__icon">phone_callback</span>
    <span class="action-bubble-call-badge__label">Incoming Voice Call</span>
  </div>
</div>

<!-- Missed Call (red variant) -->
<div class="action-bubble-divider">
  <div class="action-bubble-call-badge action-bubble-call-badge--missed">
    <span class="icon-rounded action-bubble-call-badge__icon">phone_missed</span>
    <span class="action-bubble-call-badge__label">Missed Voice Call</span>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="Icon Reference">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Voice — Incoming" description="Icon: phone_callback" />
          <StateCard title="Voice — Outgoing" description="Custom SVG (phone + outgoing arrow)" />
          <StateCard title="Voice — Answered" description="Icon: call" />
          <StateCard title="Voice — Rejected" description="Icon: call_end" />
          <StateCard title="Voice — Missed" description="Icon: phone_missed (error color)" />
          <StateCard title="Video — Incoming" description="Custom SVG (videocam + incoming arrow)" />
          <StateCard title="Video — Outgoing" description="Custom SVG (videocam + outgoing arrow)" />
          <StateCard title="Video — Answered" description="Icon: videocam" />
          <StateCard title="Video — Rejected" description="Icon: videocam_off" />
          <StateCard title="Video — Missed" description="Icon: missed_video_call (error color)" />
        </div>
      </UsageSection>
    </div>
}`,...(ie=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ne,le,ce,re,se;c.parameters={...c.parameters,docs:{...(ne=c.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ce=(le=c.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"Interactive playground.",...(se=(re=c.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};const ve=["IncomingVoiceCall","OutgoingVoiceCall","VoiceCallAnswered","VoiceCallRejected","MissedVoiceCall","IncomingVideoCall","OutgoingVideoCall","VideoCallAnswered","VideoCallRejected","MissedVideoCall","AllCallActions","Usage","Playground"];export{v as AllCallActions,m as IncomingVideoCall,r as IncomingVoiceCall,u as MissedVideoCall,C as MissedVoiceCall,p as OutgoingVideoCall,s as OutgoingVoiceCall,c as Playground,V as Usage,g as VideoCallAnswered,b as VideoCallRejected,t as VoiceCallAnswered,d as VoiceCallRejected,ve as __namedExportsOrder,ue as default};
