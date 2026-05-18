import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function x({items:t,open:s=!0,onClose:b,width:Ce=244,title:_}){return s?e.jsxs(e.Fragment,{children:[b&&e.jsx("div",{className:"action-sheet__backdrop",onClick:b,"aria-hidden":"true"}),e.jsxs("div",{className:"action-sheet",role:"menu","aria-label":_||"Action sheet",style:{width:Ce},children:[_&&e.jsx("div",{className:"action-sheet__title",children:_}),t.map((ve,_e)=>e.jsx(xe,{item:ve},_e))]})]}):null}function xe({item:t}){return e.jsxs("button",{className:`action-sheet__item ${t.destructive?"action-sheet__item--destructive":""}`,role:"menuitem",onClick:t.onClick,type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:t.icon}),e.jsx("span",{className:"action-sheet__item-label",children:t.label})]})}try{x.displayName="ActionSheet",x.__docgenInfo={description:"",displayName:"ActionSheet",props:{items:{defaultValue:null,description:"List of action items to display",name:"items",required:!0,type:{name:"ActionSheetItem[]"}},open:{defaultValue:{value:"true"},description:"Whether the action sheet is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Callback when the sheet is dismissed",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},width:{defaultValue:{value:"244"},description:"Width of the action sheet",name:"width",required:!1,type:{name:"number | undefined"}},title:{defaultValue:null,description:"Optional title displayed at the top",name:"title",required:!1,type:{name:"string | undefined"}}}}}catch{}function n(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 15.615C13.148 15.615 14.12 15.216 14.918 14.418C15.716 13.62 16.115 12.648 16.115 11.5C16.115 10.352 15.716 9.38 14.918 8.582C14.12 7.784 13.148 7.385 12 7.385C10.852 7.385 9.88 7.784 9.082 8.582C8.284 9.38 7.885 10.352 7.885 11.5C7.885 12.648 8.284 13.62 9.082 14.418C9.88 15.216 10.852 15.615 12 15.615ZM12 14.116C11.262 14.116 10.641 13.864 10.138 13.362C9.636 12.859 9.385 12.238 9.385 11.5C9.385 10.762 9.636 10.141 10.138 9.638C10.641 9.136 11.262 8.885 12 8.885C12.738 8.885 13.359 9.136 13.862 9.638C14.364 10.141 14.616 10.762 14.616 11.5C14.616 12.238 14.364 12.859 13.862 13.362C13.359 13.864 12.738 14.116 12 14.116ZM4.308 19C3.803 19 3.375 18.825 3.025 18.475C2.675 18.125 2.5 17.697 2.5 17.192V5.808C2.5 5.303 2.675 4.875 3.025 4.525C3.375 4.175 3.803 4 4.308 4H7.362L8.669 2.583C8.834 2.402 9.032 2.26 9.265 2.156C9.497 2.052 9.742 2 10 2H14C14.258 2 14.503 2.052 14.736 2.156C14.968 2.26 15.167 2.402 15.331 2.583L16.638 4H19.692C20.197 4 20.625 4.175 20.975 4.525C21.325 4.875 21.5 5.303 21.5 5.808V17.192C21.5 17.697 21.325 18.125 20.975 18.475C20.625 18.825 20.197 19 19.692 19H4.308Z",fill:"currentColor"})})}function C(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.308 20.5C4.803 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.197 3.5 18.692V5.308C3.5 4.803 3.675 4.375 4.025 4.025C4.375 3.675 4.803 3.5 5.308 3.5H18.692C19.197 3.5 19.625 3.675 19.975 4.025C20.325 4.375 20.5 4.803 20.5 5.308V18.692C20.5 19.197 20.325 19.625 19.975 19.975C19.625 20.325 19.197 20.5 18.692 20.5H5.308ZM7.654 16.75H16.423C16.604 16.75 16.738 16.668 16.825 16.504C16.912 16.34 16.899 16.181 16.785 16.027L14.4 12.833C14.306 12.712 14.186 12.652 14.038 12.652C13.891 12.652 13.771 12.712 13.677 12.833L11.231 16.019L9.592 13.919C9.499 13.805 9.38 13.748 9.236 13.748C9.091 13.748 8.972 13.808 8.879 13.929L7.302 16.027C7.182 16.181 7.165 16.34 7.252 16.504C7.339 16.668 7.473 16.75 7.654 16.75Z",fill:"currentColor"})})}function ge(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.308 19.5C3.803 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.197 2.5 17.692V6.308C2.5 5.803 2.675 5.375 3.025 5.025C3.375 4.675 3.803 4.5 4.308 4.5H15.692C16.197 4.5 16.625 4.675 16.975 5.025C17.325 5.375 17.5 5.803 17.5 6.308V10.885L20.246 8.138C20.394 7.991 20.559 7.954 20.743 8.028C20.927 8.102 21.019 8.242 21.019 8.45V15.55C21.019 15.758 20.927 15.898 20.743 15.972C20.559 16.046 20.394 16.009 20.246 15.862L17.5 13.115V17.692C17.5 18.197 17.325 18.625 16.975 18.975C16.625 19.325 16.197 19.5 15.692 19.5H4.308Z",fill:"currentColor"})})}function be(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.794 15.365L15.15 12.567C15.364 12.431 15.471 12.243 15.471 12.001C15.471 11.759 15.364 11.57 15.15 11.433L10.794 8.635C10.57 8.481 10.34 8.469 10.104 8.598C9.868 8.727 9.75 8.928 9.75 9.202V14.798C9.75 15.072 9.868 15.273 10.104 15.402C10.34 15.531 10.57 15.519 10.794 15.365ZM12.002 21.5C10.688 21.5 9.453 21.251 8.297 20.752C7.14 20.253 6.135 19.577 5.28 18.722C4.424 17.867 3.747 16.862 3.248 15.706C2.749 14.55 2.5 13.316 2.5 12.002C2.5 10.688 2.749 9.453 3.248 8.297C3.747 7.14 4.423 6.135 5.278 5.28C6.133 4.424 7.138 3.747 8.294 3.248C9.45 2.749 10.684 2.5 11.998 2.5C13.312 2.5 14.547 2.749 15.704 3.248C16.86 3.747 17.865 4.423 18.72 5.278C19.576 6.133 20.253 7.138 20.752 8.294C21.251 9.45 21.5 10.684 21.5 11.998C21.5 13.312 21.251 14.547 20.752 15.704C20.253 16.86 19.577 17.865 18.722 18.72C17.867 19.576 16.862 20.253 15.706 20.752C14.55 21.251 13.316 21.5 12.002 21.5Z",fill:"currentColor"})})}function we(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9 17.75H15C15.213 17.75 15.391 17.678 15.534 17.534C15.678 17.39 15.75 17.212 15.75 17C15.75 16.787 15.678 16.609 15.534 16.466C15.391 16.322 15.213 16.25 15 16.25H9C8.788 16.25 8.609 16.322 8.466 16.466C8.322 16.61 8.25 16.788 8.25 17C8.25 17.213 8.322 17.391 8.466 17.535C8.609 17.678 8.788 17.75 9 17.75ZM9 13.75H15C15.213 13.75 15.391 13.678 15.534 13.534C15.678 13.39 15.75 13.212 15.75 13C15.75 12.787 15.678 12.609 15.534 12.466C15.391 12.322 15.213 12.25 15 12.25H9C8.788 12.25 8.609 12.322 8.466 12.466C8.322 12.61 8.25 12.788 8.25 13C8.25 13.213 8.322 13.391 8.466 13.535C8.609 13.678 8.788 13.75 9 13.75ZM6.308 21.5C5.803 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.197 4.5 19.692V4.308C4.5 3.803 4.675 3.375 5.025 3.025C5.375 2.675 5.803 2.5 6.308 2.5H13.502C13.746 2.5 13.978 2.547 14.199 2.641C14.42 2.734 14.613 2.863 14.777 3.027L18.973 7.223C19.137 7.387 19.266 7.58 19.36 7.801C19.453 8.022 19.5 8.254 19.5 8.498V19.692C19.5 20.197 19.325 20.625 18.975 20.975C18.625 21.325 18.197 21.5 17.692 21.5H6.308ZM13.5 7.6C13.5 7.855 13.586 8.069 13.759 8.241C13.931 8.414 14.145 8.5 14.4 8.5H18L13.5 4V7.6Z",fill:"currentColor"})})}function fe(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 5C2 4.448 2.448 4 3 4H21C21.552 4 22 4.448 22 5C22 5.552 21.552 6 21 6H3C2.448 6 2 5.552 2 5Z",fill:"currentColor"}),e.jsx("path",{d:"M2 12C2 11.448 2.448 11 3 11H21C21.552 11 22 11.448 22 12C22 12.552 21.552 13 21 13H3C2.448 13 2 12.552 2 12Z",fill:"currentColor"}),e.jsx("path",{d:"M2 19C2 18.448 2.448 18 3 18H21C21.552 18 22 18.448 22 19C22 19.552 21.552 20 21 20H3C2.448 20 2 19.552 2 19Z",fill:"currentColor"})]})}function ye(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20.16 15.84",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M17.4679 0H18.24C19.135 0 19.887 0.612421 20.0998 1.44108L14.6916 6.84924C14.6549 6.88596 14.6073 6.90978 14.5559 6.91712L12.576 7.19996C12.4176 7.22259 12.2818 7.08683 12.3044 6.92843L12.5873 4.94854C12.5946 4.89713 12.6184 4.84949 12.6552 4.81277L17.4679 0Z",fill:"currentColor"}),e.jsx("path",{d:"M15.3466 0L11.5945 3.75211C11.3283 4.01833 11.1556 4.3637 11.1024 4.7364L10.8195 6.7163C10.6555 7.86464 11.6397 8.84894 12.7881 8.68489L14.768 8.40205C15.1407 8.3488 15.4861 8.17611 15.7523 7.9099L20.16 3.50218V13.92C20.16 14.9804 19.3004 15.84 18.24 15.84H1.92C0.859616 15.84 0 14.9804 0 13.92V10.03C0.138008 10.0301 0.277687 9.99222 0.402751 9.91263L0.586065 9.79595C1.58623 9.15927 3.7211 7.80027 4.3322 7.45107C4.43421 7.39278 4.63006 7.32443 4.87351 7.29801C5.11445 7.27186 5.33773 7.29385 5.5019 7.35405C5.65327 7.40955 5.73091 7.48567 5.77426 7.58151C5.82369 7.69078 5.8772 7.93568 5.75398 8.4121C5.51412 9.33959 5.26658 10.4095 5.33946 11.3038C5.37704 11.765 5.50392 12.2502 5.82249 12.6542C6.15314 13.0735 6.62627 13.3246 7.19678 13.4197C8.33384 13.6092 9.37679 12.938 10.107 12.3036C10.8753 11.6361 11.5146 10.8173 11.8801 10.3299C12.1286 9.99852 12.0615 9.52842 11.7301 9.27989C11.3987 9.03136 10.9286 9.09852 10.6801 9.42989C10.3256 9.90251 9.76491 10.6137 9.12321 11.1712C8.4434 11.7619 7.86635 12.0106 7.4434 11.9401C7.17392 11.8952 7.06101 11.8023 7.00036 11.7254C6.92763 11.6332 6.85796 11.4699 6.8345 11.182C6.78531 10.5784 6.95777 9.74828 7.2062 8.78768C7.38299 8.1041 7.37649 7.48399 7.14093 6.96326C6.89928 6.42911 6.46692 6.11023 6.01829 5.94573C5.58246 5.78593 5.11574 5.76292 4.71167 5.80677C4.31013 5.85035 3.90598 5.967 3.58799 6.14871C2.98422 6.49372 1.05774 7.71764 0 8.39088V1.92C0 0.859613 0.859613 0 1.92 0H15.3466Z",fill:"currentColor"})]})}function je(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20.3865 21.4032",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 3.14748C0 1.40917 1.40918 0 3.14749 0H13.8489C15.5873 0 16.9964 1.40918 16.9964 3.14749V8.5388C16.9964 8.70329 16.932 8.86125 16.8171 8.97886L12.75 13.1389L6.93259 18.7101C6.81541 18.8223 6.65943 18.8849 6.49719 18.8849H3.14749C1.40918 18.8849 0 17.4757 0 15.7374V3.14748ZM7.2393 2.95166C6.783 2.95166 6.41309 3.32157 6.41309 3.77788C6.41309 4.23418 6.783 4.60409 7.2393 4.60409H13.2195C13.6758 4.60409 14.0457 4.23418 14.0457 3.77788C14.0457 3.32157 13.6758 2.95166 13.2195 2.95166H7.2393ZM3.77641 6.41455C3.3201 6.41455 2.9502 6.78446 2.9502 7.24077C2.9502 7.69707 3.3201 8.06698 3.77641 8.06698H13.2189C13.6752 8.06698 14.0451 7.69707 14.0451 7.24077C14.0451 6.78446 13.6752 6.41455 13.2189 6.41455H3.77641ZM3.77641 9.87598C3.3201 9.87598 2.9502 10.2459 2.9502 10.7022C2.9502 11.1585 3.3201 11.5284 3.77641 11.5284H11.3304C11.7867 11.5284 12.1566 11.1585 12.1566 10.7022C12.1566 10.2459 11.7867 9.87598 11.3304 9.87598H3.77641Z",fill:"currentColor"}),e.jsx("path",{d:"M19.1275 10.3341C18.6359 9.84242 17.8387 9.84242 17.3471 10.3341L9.41276 18.2684C9.3622 18.319 9.3294 18.3846 9.31929 18.4553L8.95206 21.0259C8.9209 21.244 9.10785 21.431 9.32596 21.3998L11.8965 21.0326C11.9673 21.0225 12.0329 20.9897 12.0835 20.9391L20.0178 13.0048C20.5095 12.5132 20.5095 11.716 20.0178 11.2243L19.1275 10.3341Z",fill:"currentColor"})]})}try{n.displayName="CameraIcon",n.__docgenInfo={description:`Action Sheet icons — extracted from Figma as SVGs.
All icons use currentColor for fill, inheriting from the parent element.`,displayName:"CameraIcon",props:{}}}catch{}const ke={title:"Base Components/Action Sheet",component:x,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A popup overlay presenting a list of contextual actions. Used for attachment menus,\nmessage actions, and any context where the user needs to pick from a set of options.\nAppears anchored to a trigger element with elevation and rounded corners.\n\n**Anatomy:** Container (radius-2xl, shadow-lg) → Action Items (icon + label, 44px height)\n\n**Icons:** Filled SVG style in extended-primary-600 color. Destructive items use error-500.\n\n**Foundation tokens used:**\n- Background: `--color-white`\n- Border: `--color-neutral-100`\n- Border radius: `--radius-2xl` (16px)\n- Shadow: `--shadow-lg`\n- Item padding: `--space-3` / `--space-4` (12px / 16px)\n- Icon-label gap: `--space-2` (8px)\n- Text: `--font-size-2` (14px), `--line-height-body` (20px), `--font-weight-regular`\n- Icon color: `--color-ep-600` (#6852d6)\n- Hover: `--color-neutral-50`\n- Active: `--color-neutral-100`\n- Destructive: `--color-error-500`\n- Focus ring: `--focus-ring-xs`"}}},argTypes:{items:{control:!1,description:"Array of action items with icon (ReactNode), label, and optional onClick/destructive."},open:{control:"boolean",description:"Whether the action sheet is visible."},width:{control:{type:"number",min:180,max:400,step:10},description:"Width of the action sheet in pixels."},title:{control:"text",description:"Optional title displayed at the top."},onClose:{control:!1,description:"Callback when the sheet is dismissed."}}},g=[{icon:e.jsx(n,{}),label:"Camera"},{icon:e.jsx(C,{}),label:"Attach Image"},{icon:e.jsx(ge,{}),label:"Attach Video"},{icon:e.jsx(be,{}),label:"Attach Audio"},{icon:e.jsx(we,{}),label:"Attach Document"},{icon:e.jsx(fe,{}),label:"Poll"},{icon:e.jsx(ye,{}),label:"Collaborative Whiteboard"},{icon:e.jsx(je,{}),label:"Collaborative Document"}],Ne=[{icon:e.jsx(He,{}),label:"Reply"},{icon:e.jsx(Ve,{}),label:"Copy Message"},{icon:e.jsx(Se,{}),label:"Forward"},{icon:e.jsx(v,{}),label:"Edit Message"},{icon:e.jsx(Le,{}),label:"Pin Message"},{icon:e.jsx(u,{}),label:"Delete Message",destructive:!0}],ue=[{icon:e.jsx(v,{}),label:"Edit"},{icon:e.jsx(u,{}),label:"Delete",destructive:!0}],a={args:{items:g,open:!0,width:244}},i={args:{items:Ne,open:!0,width:244}},o={args:{items:ue,open:!0,width:244,title:"Actions"}},r={args:{items:ue,open:!0,width:244}},c={args:{items:g,open:!0,width:320}},l={args:{items:[{icon:e.jsx(u,{}),label:"Delete Message",destructive:!0},{icon:e.jsx(Ie,{}),label:"Block User",destructive:!0},{icon:e.jsx(Me,{}),label:"Report",destructive:!0}],open:!0,width:244,title:"Danger Zone"}},d={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-8)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Default"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(n,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Camera"})]}),e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(C,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Attach Image"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Hover"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(n,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Camera"})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--hover-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(C,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Attach Image"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Active"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(n,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Camera"})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--active-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(C,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Attach Image"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Destructive"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(v,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Edit"})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--destructive",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(u,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Delete"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:m,children:"Destructive Hover"}),e.jsxs("div",{className:"action-sheet",style:{width:244},children:[e.jsxs("button",{className:"action-sheet__item",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(v,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Edit"})]}),e.jsxs("button",{className:"action-sheet__item action-sheet__item--destructive action-sheet__item--hover-preview",type:"button",children:[e.jsx("span",{className:"action-sheet__item-icon",children:e.jsx(u,{})}),e.jsx("span",{className:"action-sheet__item-label",children:"Delete"})]})]})]})]})},h={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(f,{title:"HTML",children:e.jsx(w,{language:"HTML",code:`<!-- Action Sheet -->
<div class="action-sheet" style="width: 244px">
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Camera</span>
  </button>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Attach Image</span>
  </button>
  <button class="action-sheet__item action-sheet__item--destructive" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Delete</span>
  </button>
</div>

<!-- With title -->
<div class="action-sheet" style="width: 244px">
  <div class="action-sheet__title">Actions</div>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Edit</span>
  </button>
</div>`})}),e.jsx(f,{title:"CSS (Foundation Variables)",children:e.jsx(w,{language:"CSS",code:`.action-sheet {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.action-sheet__title {
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-border-light);
}

.action-sheet__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  height: 44px;
  background: var(--color-bg-01);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.action-sheet__item:hover {
  background: var(--color-bg-02);
}

.action-sheet__item:active {
  background: var(--color-bg-03);
}

.action-sheet__item--destructive {
  color: var(--color-error-500);
}

.action-sheet__item--destructive:hover {
  background: var(--color-error-25);
}

.action-sheet__item-icon {
  width: 24px;
  height: 24px;
  color: var(--color-ep-600);
}

.action-sheet__item--destructive .action-sheet__item-icon {
  color: var(--color-error-500);
}`})})]})},p={args:{items:g,open:!0,width:244,title:""},parameters:{docs:{disable:!0}}},m={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)",marginBottom:"var(--space-2)",textAlign:"center"};function He(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z",fill:"currentColor"})})}function Ve(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9 18C8.45 18 7.979 17.804 7.587 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.587 2.587C7.979 2.196 8.45 2 9 2H18C18.55 2 19.021 2.196 19.413 2.587C19.804 2.979 20 3.45 20 4V16C20 16.55 19.804 17.021 19.413 17.413C19.021 17.804 18.55 18 18 18H9ZM5 22C4.45 22 3.979 21.804 3.587 21.413C3.196 21.021 3 20.55 3 20V6H5V20H16V22H5Z",fill:"currentColor"})})}function Se(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14 9V5L21 12L14 19V14.9C9 14.9 5.5 16.5 3 20C4 15 7 10 14 9Z",fill:"currentColor"})})}function v(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3 21V16.75L16.2 3.575C16.4 3.392 16.621 3.25 16.863 3.15C17.104 3.05 17.358 3 17.625 3C17.892 3 18.15 3.05 18.4 3.15C18.65 3.25 18.867 3.4 19.05 3.6L20.425 5C20.625 5.183 20.771 5.4 20.863 5.65C20.954 5.9 21 6.15 21 6.4C21 6.667 20.954 6.921 20.863 7.163C20.771 7.404 20.625 7.625 20.425 7.825L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5L16.2 6.4L17.6 7.8Z",fill:"currentColor"})})}function Le(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16 12V4H17C17.283 4 17.521 3.904 17.713 3.713C17.904 3.521 18 3.283 18 3C18 2.717 17.904 2.479 17.713 2.287C17.521 2.096 17.283 2 17 2H7C6.717 2 6.479 2.096 6.287 2.287C6.096 2.479 6 2.717 6 3C6 3.283 6.096 3.521 6.287 3.713C6.479 3.904 6.717 4 7 4H8V12L6 14V16H11V22L12 23L13 22V16H18V14L16 12Z",fill:"currentColor"})})}function u(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7 21C6.45 21 5.979 20.804 5.587 20.413C5.196 20.021 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.413 20.413C18.021 20.804 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z",fill:"currentColor"})})}function Ie(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z",fill:"currentColor"})})}function Me(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z",fill:"currentColor"})})}const w=({language:t,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]});function f({title:t,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:t}),s]})}var y,j,N,H,V;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: attachmentItems,
    open: true,
    width: 244
  }
}`,...(N=(j=a.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:"The standard attachment action sheet as seen in the message composer. Eight options with filled icons in the primary color.",...(V=(H=a.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var S,L,I,M,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: messageActions,
    open: true,
    width: 244
  }
}`,...(I=(L=i.parameters)==null?void 0:L.docs)==null?void 0:I.source},description:{story:'Contextual actions for a message. Includes a destructive "Delete" action rendered in error color.',...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};var D,Z,k,B,W;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: minimalItems,
    open: true,
    width: 244,
    title: "Actions"
  }
}`,...(k=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:k.source},description:{story:"An optional title can be displayed at the top to provide context about the available actions.",...(W=(B=o.parameters)==null?void 0:B.docs)==null?void 0:W.description}}};var z,E,T,R,P;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: minimalItems,
    open: true,
    width: 244
  }
}`,...(T=(E=r.parameters)==null?void 0:E.docs)==null?void 0:T.source},description:{story:"Action sheets can contain as few as two items. Useful for simple edit/delete patterns.",...(P=(R=r.parameters)==null?void 0:R.docs)==null?void 0:P.description}}};var U,F,G,q,O;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: attachmentItems,
    open: true,
    width: 320
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source},description:{story:"The width can be adjusted. Default is 244px. Here shown at 320px for longer labels.",...(O=(q=c.parameters)==null?void 0:q.docs)==null?void 0:O.description}}};var X,$,J,K,Q;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: <DeleteIcon />,
      label: "Delete Message",
      destructive: true
    }, {
      icon: <BlockIcon />,
      label: "Block User",
      destructive: true
    }, {
      icon: <ReportIcon />,
      label: "Report",
      destructive: true
    }],
    open: true,
    width: 244,
    title: "Danger Zone"
  }
}`,...(J=($=l.parameters)==null?void 0:$.docs)==null?void 0:J.source},description:{story:"Destructive-only variant showing how error styling applies to all items.",...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Y,ee,te,ne,se;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-10)",
    display: "flex",
    gap: "var(--space-8)",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
      {/* Default */}
      <div>
        <div style={stateLabelStyle}>Default</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Hover */}
      <div>
        <div style={stateLabelStyle}>Hover</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item action-sheet__item--hover-preview" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Active */}
      <div>
        <div style={stateLabelStyle}>Active</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item action-sheet__item--active-preview" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Destructive */}
      <div>
        <div style={stateLabelStyle}>Destructive</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><EditIcon /></span>
            <span className="action-sheet__item-label">Edit</span>
          </button>
          <button className="action-sheet__item action-sheet__item--destructive" type="button">
            <span className="action-sheet__item-icon"><DeleteIcon /></span>
            <span className="action-sheet__item-label">Delete</span>
          </button>
        </div>
      </div>

      {/* Destructive Hover */}
      <div>
        <div style={stateLabelStyle}>Destructive Hover</div>
        <div className="action-sheet" style={{
        width: 244
      }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><EditIcon /></span>
            <span className="action-sheet__item-label">Edit</span>
          </button>
          <button className="action-sheet__item action-sheet__item--destructive action-sheet__item--hover-preview" type="button">
            <span className="action-sheet__item-icon"><DeleteIcon /></span>
            <span className="action-sheet__item-label">Delete</span>
          </button>
        </div>
      </div>
    </div>
}`,...(te=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Visual demonstration of all interactive states: default, hover, active, focus, and destructive.",...(se=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ae,ie,oe,re,ce;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Action Sheet -->
<div class="action-sheet" style="width: 244px">
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Camera</span>
  </button>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Attach Image</span>
  </button>
  <button class="action-sheet__item action-sheet__item--destructive" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Delete</span>
  </button>
</div>

<!-- With title -->
<div class="action-sheet" style="width: 244px">
  <div class="action-sheet__title">Actions</div>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Edit</span>
  </button>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.action-sheet {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.action-sheet__title {
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-border-light);
}

.action-sheet__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  height: 44px;
  background: var(--color-bg-01);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.action-sheet__item:hover {
  background: var(--color-bg-02);
}

.action-sheet__item:active {
  background: var(--color-bg-03);
}

.action-sheet__item--destructive {
  color: var(--color-error-500);
}

.action-sheet__item--destructive:hover {
  background: var(--color-error-25);
}

.action-sheet__item-icon {
  width: 24px;
  height: 24px;
  color: var(--color-ep-600);
}

.action-sheet__item--destructive .action-sheet__item-icon {
  color: var(--color-error-500);
}\`} />
      </UsageSection>
    </div>
}`,...(oe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:"HTML & CSS usage reference for the Action Sheet component.",...(ce=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ce.description}}};var le,de,he,pe,me;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    items: attachmentItems,
    open: true,
    width: 244,
    title: ""
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(he=(de=p.parameters)==null?void 0:de.docs)==null?void 0:he.source},description:{story:"Interactive playground — use the controls panel to configure the Action Sheet.",...(me=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};const Be=["Default","MessageActions","WithTitle","Minimal","CustomWidth","DestructiveActions","States","Usage","Playground"];export{c as CustomWidth,a as Default,l as DestructiveActions,i as MessageActions,r as Minimal,p as Playground,d as States,h as Usage,o as WithTitle,Be as __namedExportsOrder,ke as default};
