"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[370],{56420:(me,L,e)=>{e.d(L,{Y:()=>he});var l=e(95208),K=e(18139),G=e(54195),j=e(77125),N=e(64947),k=e(93453),le=e(29365),ue=e(46423),Ee=e(5951),z=e(26343),i=e(28233),pe=e(55197),c=e(58837),q=e(72501),fe=e(5893),o=e(14041),ge=e(45250),t=e.n(ge),ne=e(70209),ee=e(92483),re=e(75202),se=e(89475),w=e(10265);const ie=(0,c.A)({popoverList:{minWidth:260,maxWidth:400},menuItem:{whiteSpace:"normal"}},{name:"BackstageSupportButton"}),ce=({icon:b})=>{const te=(0,l.n)(),H=b?te.getSystemIcon(b)??ee.NT:ee.NT;return o.createElement(H,null)},de=({link:b})=>o.createElement(re.N_,{to:b.url},b.title??b.url),X=({item:b})=>o.createElement(z.A,{button:!1},o.createElement(ue.A,null,o.createElement(ce,{icon:b.icon})),o.createElement(Ee.A,{primary:b.title,secondary:b.links?.reduce((te,H,s)=>[...te,s>0&&o.createElement("br",{key:s}),o.createElement(de,{link:H,key:H.url})],[])}));function he(b){const{t:te}=(0,w.i)(se.O),{title:H,items:s,children:u}=b,{items:E}=(0,ne.l)(),[R,p]=(0,o.useState)(!1),[h,W]=(0,o.useState)(null),F=ie(),D=(0,K.gf)(G.U).getOptionalConfig("app.support"),$=(0,fe.A)(m=>m.breakpoints.down("sm")),v=m=>{W(m.currentTarget),p(!0)},d=()=>{p(!1)};return D?o.createElement(o.Fragment,null,o.createElement(j.A,{display:"flex",ml:1},$?o.createElement(le.A,{color:"primary",size:"small",onClick:v,"data-testid":"support-button","aria-label":"Support"},o.createElement(ee.NT,null)):o.createElement(N.A,{"data-testid":"support-button","aria-label":"Support",color:"primary",onClick:v,startIcon:o.createElement(ee.NT,null)},te("supportButton.title"))),o.createElement(pe.Ay,{"data-testid":"support-button-popover",open:R,anchorEl:h,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:d},o.createElement(i.A,{className:F.popoverList,autoFocusItem:!!h},H&&o.createElement(z.A,{button:!1,alignItems:"flex-start",className:F.menuItem},o.createElement(q.A,{variant:"subtitle1"},H)),o.Children.map(u,(m,f)=>o.createElement(z.A,{button:!1,alignItems:"flex-start",key:`child-${f}`,className:F.menuItem},m)),(s??E).map((m,f)=>o.createElement(X,{item:m,key:`item-${f}`}))),o.createElement(k.A,null,o.createElement(N.A,{color:"primary",onClick:d,"aria-label":"Close"},te("supportButton.close"))))):null}},60370:(me,L,e)=>{e.r(L),e.d(L,{CatalogGraphPage:()=>Ke});var l=e(78560),K=e(82326),G=e(79182),j=e(16454),N=e(17138),k=e(56420),le=e(72814),ue=e(52262),Ee=e(20987),z=e(53318),i=e(42899),pe=e(4321),c=e(72501),q=e(58837),fe=e(65859),o=e(98984),ge=e(15485),t=e(14041),ne=e(18690),ee=e(60332),re=e(54361),se=e(81252),w=e(77125);const ie={curveMonotoneX:"Monotone X",curveStepBefore:"Step Before"},ce=["curveMonotoneX","curveStepBefore"],de=({value:n,onChange:g})=>{const O=(0,t.useCallback)(a=>g(a),[g]);return t.createElement(w.A,{pb:1,pt:1},t.createElement(se.w,{label:"Curve",selected:n,items:ce.map(a=>({label:ie[a],value:a})),onChange:O}))};var X=e(60241);const he={[X.O.LEFT_RIGHT]:"Left to right",[X.O.RIGHT_LEFT]:"Right to left",[X.O.TOP_BOTTOM]:"Top to bottom",[X.O.BOTTOM_TOP]:"Bottom to top"},b=({value:n,onChange:g})=>{const O=(0,t.useCallback)(a=>g(a),[g]);return t.createElement(w.A,{pb:1,pt:1},t.createElement(se.w,{label:"Direction",selected:n,items:Object.values(X.O).map(a=>({label:he[a],value:a})),onChange:O}))};var te=e(95061),H=e(29365),s=e(34839),u=e(35963),E=e(64704);const R=(0,q.A)({formControl:{width:"100%",maxWidth:300}},{name:"PluginCatalogGraphMaxDepthFilter"}),p=({value:n,onChange:g})=>{const O=R(),a=(0,t.useRef)(g),[S,P]=(0,t.useState)(n);(0,t.useEffect)(()=>{a.current=g},[g]),(0,t.useEffect)(()=>{P(n)},[n]);const B=(0,t.useCallback)(Q=>{const Z=Number(Q.target.value),M=Number.isFinite(Z)&&Z>0?Z:Number.POSITIVE_INFINITY;P(M),a.current(M)},[]),x=(0,t.useCallback)(()=>{P(Number.POSITIVE_INFINITY),a.current(Number.POSITIVE_INFINITY)},[a]);return t.createElement(w.A,{pb:1,pt:1},t.createElement(te.A,{variant:"outlined",className:O.formControl},t.createElement(c.A,{variant:"button"},"Max Depth"),t.createElement(u.A,{type:"number",placeholder:"\u221E Infinite",value:Number.isFinite(S)?String(S):"",onChange:B,endAdornment:t.createElement(s.A,{position:"end"},t.createElement(H.A,{"aria-label":"clear max depth",onClick:x,edge:"end"},t.createElement(E.A,null))),inputProps:{"aria-label":"maxp"},labelWidth:0})))};var h=e(18139),W=e(34477),F=e(30043),D=e(69076),$=e(86901),v=e(16249),d=e(44148),m=e(41260),f=e(6924),I=e(61783),T=e(73466);const V=(0,q.A)({formControl:{maxWidth:300}},{name:"PluginCatalogGraphSelectedKindsFilter"}),U=({value:n,onChange:g})=>{const O=V(),a=(0,h.gf)(W.k),S=(0,h.gf)(F.v),{error:P,value:B}=(0,T.A)(async()=>await S.getEntityFacets({facets:["kind"]}).then(M=>M.facets.kind?.map(_=>_.value).sort()||[]));(0,t.useEffect)(()=>{P&&a.post({message:"Failed to load entity kinds",severity:"error"})},[P,a]);const x=(0,t.useMemo)(()=>B&&B.map(M=>M.toLocaleLowerCase("en-US")),[B]),Q=(0,t.useCallback)((M,_)=>{g(x&&x.every(ye=>_.includes(ye))?void 0:_)},[x,g]),Z=(0,t.useCallback)(()=>{g(n?.length?n:void 0)},[n,g]);return!B?.length||!x?.length||P?t.createElement(t.Fragment,null):t.createElement(w.A,{pb:1,pt:1},t.createElement(c.A,{variant:"button"},"Kinds"),t.createElement(I.Ay,{className:O.formControl,multiple:!0,limitTags:4,disableCloseOnSelect:!0,"aria-label":"Kinds",options:x,value:n??x,getOptionLabel:M=>B[x.indexOf(M)]??M,onChange:Q,onBlur:Z,renderOption:(M,{selected:_})=>t.createElement($.A,{control:t.createElement(D.A,{icon:t.createElement(m.A,{fontSize:"small"}),checkedIcon:t.createElement(d.A,{fontSize:"small"}),checked:_}),label:B[x.indexOf(M)]??M}),size:"small",popupIcon:t.createElement(f.A,{"data-testid":"selected-kinds-expand"}),renderInput:M=>t.createElement(v.A,{...M,variant:"outlined"})}))},ae=(0,q.A)({formControl:{maxWidth:300}},{name:"PluginCatalogGraphSelectedRelationsFilter"}),y=({relationPairs:n,value:g,onChange:O})=>{const a=ae(),S=(0,t.useMemo)(()=>n.flat(),[n]),P=(0,t.useCallback)((x,Q)=>{O(S.every(Z=>Q.includes(Z))?void 0:Q)},[S,O]),B=(0,t.useCallback)(()=>{O(g?.length?g:void 0)},[g,O]);return t.createElement(w.A,{pb:1,pt:1},t.createElement(c.A,{variant:"button"},"Relations"),t.createElement(I.Ay,{className:a.formControl,multiple:!0,limitTags:4,disableCloseOnSelect:!0,"aria-label":"Relations",options:S,value:g??S,onChange:P,onBlur:B,renderOption:(x,{selected:Q})=>t.createElement($.A,{control:t.createElement(D.A,{icon:t.createElement(m.A,{fontSize:"small"}),checkedIcon:t.createElement(d.A,{fontSize:"small"}),checked:Q}),label:x}),size:"small",popupIcon:t.createElement(f.A,{"data-testid":"selected-relations-expand"}),renderInput:x=>t.createElement(v.A,{...x,variant:"outlined"})}))};var A=e(73643);const r=(0,q.A)({root:{width:"100%",maxWidth:300}},{name:"PluginCatalogGraphSwitchFilter"}),C=({label:n,value:g,onChange:O})=>{const a=r(),S=(0,t.useCallback)(P=>{O(P.target.checked)},[O]);return t.createElement(w.A,{pb:1,pt:1},t.createElement($.A,{control:t.createElement(A.A,{checked:g,onChange:S,name:n,color:"primary"}),label:n,className:a.root}))};var Y=e(45810),oe=e.n(Y);function ve({initialState:n={}}){const g=(0,ne.zy)(),O=(0,ne.Zp)(),a=(0,t.useMemo)(()=>oe().parse(g.search,{arrayLimit:0,ignoreQueryPrefix:!0})||{},[g.search]),S=(0,t.useMemo)(()=>(Array.isArray(a.rootEntityRefs)?a.rootEntityRefs:n?.rootEntityRefs??[]).map(J=>(0,l.KU)(J)),[n?.rootEntityRefs,a.rootEntityRefs]),P=(0,t.useCallback)(J=>{if(S.length===J.length&&S.every((De,Ae)=>(0,l.U2)(De)===(0,l.U2)(J[Ae])))return;const Me=oe().stringify({...a,rootEntityRefs:J.map(De=>(0,l.U2)(De))},{arrayFormat:"brackets",addQueryPrefix:!0});O(Me)},[S,O,a]),[B,x]=(0,t.useState)(()=>typeof a.maxDepth=="string"?We(a.maxDepth):n?.maxDepth??Number.POSITIVE_INFINITY),[Q,Z]=(0,t.useState)(()=>Array.isArray(a.selectedRelations)?a.selectedRelations:n?.selectedRelations),[M,_]=(0,t.useState)(()=>(Array.isArray(a.selectedKinds)?a.selectedKinds:n?.selectedKinds)?.map(J=>J.toLocaleLowerCase("en-US"))),[ye,Te]=(0,t.useState)(()=>typeof a.unidirectional=="string"?a.unidirectional==="true":n?.unidirectional??!0),[Re,xe]=(0,t.useState)(()=>typeof a.mergeRelations=="string"?a.mergeRelations==="true":n?.mergeRelations??!0),[Ie,Le]=(0,t.useState)(()=>typeof a.direction=="string"?a.direction:n?.direction??X.O.LEFT_RIGHT),[Oe,Ne]=(0,t.useState)(()=>typeof a.curve=="string"?a.curve:n?.curve??"curveMonotoneX"),[Se,Pe]=(0,t.useState)(()=>typeof a.showFilters=="string"?a.showFilters==="true":n?.showFilters??!0),Be=(0,t.useCallback)(()=>Pe(J=>!J),[Pe]);return(0,t.useEffect)(()=>{const J=oe().stringify({rootEntityRefs:S.map(l.U2),maxDepth:isFinite(B)?B:"\u221E",selectedKinds:M,selectedRelations:Q,unidirectional:ye,mergeRelations:Re,direction:Ie,showFilters:Se,curve:Oe},{arrayFormat:"brackets",addQueryPrefix:!0});O(J,{replace:!0})},[B,Oe,M,Q,ye,Re,Ie,Se,S,O]),{rootEntityNames:S,setRootEntityNames:P,maxDepth:B,setMaxDepth:x,selectedRelations:Q,setSelectedRelations:Z,selectedKinds:M,setSelectedKinds:_,unidirectional:ye,setUnidirectional:Te,mergeRelations:Re,setMergeRelations:xe,direction:Ie,setDirection:Le,curve:Oe,setCurve:Ne,showFilters:Se,toggleShowFilters:Be}}function We(n){return n==="\u221E"?Number.POSITIVE_INFINITY:Number(n)}const Fe=(0,q.A)(n=>({content:{minHeight:0},container:{height:"100%",maxHeight:"100%",minHeight:0},fullHeight:{maxHeight:"100%",display:"flex",minHeight:0},graphWrapper:{position:"relative",flex:1,minHeight:0,display:"flex"},graph:{flex:1,minHeight:0},legend:{position:"absolute",bottom:0,right:0,padding:n.spacing(1),"& .icon":{verticalAlign:"bottom"}},filters:{display:"grid",gridGap:n.spacing(1),gridAutoRows:"auto",[n.breakpoints.up("lg")]:{display:"block"},[n.breakpoints.only("md")]:{gridTemplateColumns:"repeat(3, 1fr)"},[n.breakpoints.only("sm")]:{gridTemplateColumns:"repeat(2, 1fr)"},[n.breakpoints.down("xs")]:{gridTemplateColumns:"repeat(1, 1fr)"}}}),{name:"PluginCatalogGraphCatalogGraphPage"}),Ke=n=>{const{relationPairs:g=re.b,initialState:O,entityFilter:a}=n,S=(0,ne.Zp)(),P=Fe(),B=(0,le.S)(Ee.s),{maxDepth:x,setMaxDepth:Q,selectedKinds:Z,setSelectedKinds:M,selectedRelations:_,setSelectedRelations:ye,unidirectional:Te,setUnidirectional:Re,mergeRelations:xe,setMergeRelations:Ie,direction:Le,setDirection:Oe,curve:Ne,setCurve:Se,rootEntityNames:Pe,setRootEntityNames:Be,showFilters:J,toggleShowFilters:be}=ve({initialState:O}),Me=(0,ue.s)(),De=(0,t.useCallback)((Ae,ze)=>{const Ce=(0,l.KU)(Ae.id);if(ze.shiftKey){const Ue=B({kind:Ce.kind.toLocaleLowerCase("en-US"),namespace:Ce.namespace.toLocaleLowerCase("en-US"),name:Ce.name});Me.captureEvent("click",Ae.entity.metadata.title??(0,z.S)(Ce),{attributes:{to:Ue}}),S(Ue)}else Me.captureEvent("click",Ae.entity.metadata.title??(0,z.S)(Ce)),Be([Ce])},[B,S,Be,Me]);return t.createElement(K.Y,{themeId:"home"},t.createElement(G.Y,{title:"Catalog Graph",subtitle:Pe.map(Ae=>(0,z.S)(Ae)).join(", ")}),t.createElement(j.U,{stretch:!0,className:P.content},t.createElement(N.d,{titleComponent:t.createElement(ge.A,{value:"show filters",selected:J,onChange:()=>be()},t.createElement(fe.A,null)," Filters")},t.createElement(k.Y,null,"Start tracking your component in by adding it to the software catalog.")),t.createElement(i.A,{container:!0,alignItems:"stretch",className:P.container},J&&t.createElement(i.A,{item:!0,xs:12,lg:2,className:P.filters},t.createElement(p,{value:x,onChange:Q}),t.createElement(U,{value:Z,onChange:M}),t.createElement(y,{value:_,onChange:ye,relationPairs:g}),t.createElement(b,{value:Le,onChange:Oe}),t.createElement(de,{value:Ne,onChange:Se}),t.createElement(C,{value:Te,onChange:Re,label:"Simplified"}),t.createElement(C,{value:xe,onChange:Ie,label:"Merge Relations"})),t.createElement(i.A,{item:!0,xs:!0,className:P.fullHeight},t.createElement(pe.A,{className:P.graphWrapper},t.createElement(c.A,{variant:"caption",color:"textSecondary",display:"block",className:P.legend},t.createElement(o.A,{className:"icon"})," Use pinch & zoom to move around the diagram. Click to change active node, shift click to navigate to entity."),t.createElement(ee.L,{...n,rootEntityNames:Pe,maxDepth:x,kinds:Z&&Z.length>0?Z:void 0,relations:_&&_.length>0?_:void 0,mergeRelations:xe,unidirectional:Te,onNodeClick:De,direction:Le,relationPairs:g,entityFilter:a,className:P.graph,zoom:"enabled",curve:Ne}))))))}},60332:(me,L,e)=>{e.d(L,{L:()=>H});var l=e(78560),K=e(80609),G=e(47090),j=e(18139),N=e(24453),k=e(78467),le=e(58837),ue=e(54917),Ee=e(53373),z=e.n(Ee),i=e(14041),pe=e(22249);const c=(0,pe.A)(s=>({text:{fill:s.palette.textContrast},secondary:{fill:s.palette.textSubtle}}),{name:"PluginCatalogGraphCustomLabel"});function q({edge:{relations:s}}){const u=c();return i.createElement("text",{className:u.text,textAnchor:"middle"},s.map((E,R)=>i.createElement("tspan",{key:E,className:z()(R%2!==0&&u.secondary)},R>0&&i.createElement("tspan",null," / "),E)))}var fe=e(46509),o=e(10437);function ge({icon:s,...u}){const E=s??o.A;return i.createElement(E,{...u})}var t=e(55488);const ne=(0,le.A)(s=>({node:{fill:s.palette.grey[300],stroke:s.palette.grey[300],"&.primary":{fill:s.palette.primary.light,stroke:s.palette.primary.light},"&.secondary":{fill:s.palette.secondary.light,stroke:s.palette.secondary.light}},text:{fill:s.palette.getContrastText(s.palette.grey[300]),"&.primary":{fill:s.palette.primary.contrastText},"&.secondary":{fill:s.palette.secondary.contrastText},"&.focused":{fontWeight:"bold"}},clickable:{cursor:"pointer"}}),{name:"PluginCatalogGraphCustomNode"});function ee({node:{id:s,entity:u,color:E="default",focused:R,onClick:p}}){const h=ne(),[W,F]=(0,i.useState)(0),[D,$]=(0,i.useState)(0),v=(0,i.useRef)(null),d=(0,fe.f)(u,{defaultNamespace:t.oQ});(0,i.useLayoutEffect)(()=>{if(v.current){let{height:y,width:A}=v.current.getBBox();y=Math.round(y),A=Math.round(A),(y!==D||A!==W)&&(F(A),$(y))}},[W,D]);const m=!!d.Icon,f=10,I=D,T=m?I+f:0,V=T+W+f*2,U=D+f*2,ae=d.primaryTitle??s;return i.createElement("g",{onClick:p,className:z()(p&&h.clickable)},i.createElement("rect",{className:z()(h.node,E==="primary"&&"primary",E==="secondary"&&"secondary"),width:V,height:U,rx:10}),m&&i.createElement(ge,{icon:d.Icon,y:f,x:f,width:I,height:I,className:z()(h.text,R&&"focused",E==="primary"&&"primary",E==="secondary"&&"secondary")}),i.createElement("text",{ref:v,className:z()(h.text,R&&"focused",E==="primary"&&"primary",E==="secondary"&&"secondary"),y:U/2,x:T+(W+f*2)/2,textAnchor:"middle",alignmentBaseline:"middle"},ae),i.createElement("title",null,d.entityRef))}var re=e(54361),se=e(60241),w=e(22771),ie=e(30043),ce=e(87290);function de(){const s=(0,j.gf)(ie.v),u=(0,i.useRef)({requestedEntities:new Set,outstandingEntities:new Map,cachedEntities:new Map}),[E,R]=(0,i.useState)({}),p=(0,i.useCallback)(()=>{const{cachedEntities:v,requestedEntities:d}=u.current,m={};d.forEach(f=>{const I=v.get(f);I&&(m[f]=I)}),R(m)},[u,R]),[h,W]=(0,ce.A)(async()=>{const{requestedEntities:v,cachedEntities:d}=u.current,m=Array.from(v).filter(I=>!d.has(I));if(m.length===0){p();return}const{items:f}=await s.getEntitiesByRefs({entityRefs:m});f.forEach(I=>{if(I){const T=(0,l.U2)(I);d.set(T,I)}}),p()},[u,p]),{loading:F,error:D}=h,$=(0,i.useCallback)(v=>{const d=new Set(v),{requestedEntities:m}=u.current;(d.size!==m.size||Array.from(d).some(f=>!m.has(f)))&&(u.current.requestedEntities=d,W(),p())},[u,W,p]);return{entities:E,loading:F,error:D,requestEntities:$}}var X=e(45250);function he({rootEntityRefs:s,filter:{maxDepth:u=Number.POSITIVE_INFINITY,relations:E,kinds:R,entityFilter:p}={}}){const{entities:h,loading:W,error:F,requestEntities:D}=de();return(0,i.useEffect)(()=>{const v=new Set([...s]),d=new Set;let m=[...s],f=0;for(;m.length>0&&(!isFinite(u)||f<u);){const I=m;for(m=[];I.length>0;){const T=I.shift(),V=h[T];if(d.add(T),V&&V.relations){if(p&&!p(V))continue;for(const U of V.relations)(!E||E.includes(U.type))&&(!R||R.some(ae=>U.targetRef.startsWith(`${ae.toLocaleLowerCase("en-US")}:`)))&&(d.has(U.targetRef)||(m.push(U.targetRef),v.add(U.targetRef)))}}++f}D([...v])},[h,s,u,E,R,p,D]),{entities:(0,i.useMemo)(()=>p?(0,X.pickBy)(h,(v,d)=>p(v)):h,[h,p]),loading:W,error:F}}function b({rootEntityRefs:s,maxDepth:u=Number.POSITIVE_INFINITY,unidirectional:E=!0,mergeRelations:R=!0,kinds:p,relations:h,entityFilter:W,onNodeClick:F,relationPairs:D=re.b}){const[$,v]=(0,i.useState)({}),{entities:d,loading:m,error:f}=he({rootEntityRefs:s,filter:{maxDepth:u,kinds:p,relations:h,entityFilter:W}});return(0,w.A)(()=>{if(!d||Object.keys(d).length===0){v({});return}const I=Object.entries(d).map(([y,A])=>{const r=s.includes(y),C={id:y,entity:A,focused:r,color:r?"secondary":"primary",kind:A.kind,name:A.metadata.name,namespace:A.metadata.namespace||t.oQ,title:A.metadata.title,spec:A.spec};return F&&(C.onClick=Y=>F(C,Y)),C}),T=[],V=new Set,U=[...s];for(;U.length>0;){const y=U.pop(),A=d[y];V.add(y),A&&A?.relations?.forEach(r=>{if(d[r.targetRef]&&!(h&&!h.includes(r.type))&&!(p&&!p.some(C=>r.targetRef.startsWith(`${C.toLocaleLowerCase("en-US")}:`)))){if(!E||!V.has(r.targetRef))if(R){const C=D.find(([oe,ve])=>oe===r.type||ve===r.type)??[r.type],[Y]=C;T.push({from:Y===r.type?y:r.targetRef,to:Y===r.type?r.targetRef:y,relations:C,label:"visible"})}else T.push({from:y,to:r.targetRef,relations:[r.type],label:"visible"});if(V.has(r.targetRef)||(U.push(r.targetRef),V.add(r.targetRef)),E){const C=T.findIndex(Y=>y===Y.from&&r.targetRef===Y.to&&!Y.relations.includes(r.type));if(C>=0)if(R){const Y=D.find(([oe,ve])=>oe===r.type||ve===r.type)??[r.type];T[C].relations=[...T[C].relations,...Y]}else T[C].relations=[...T[C].relations,r.type]}}})}const ae=T.reduce((y,A)=>{const r=y.findIndex(C=>C.from===A.from&&C.to===A.to);return r>=0?(y[r]={...y[r],relations:Array.from(new Set([...y[r].relations,...A.relations]))},y):[...y,A]},[]);v({nodes:I,edges:ae})},100,[d,s,p,h,E,R,F,D]),{loading:m,error:f,...$}}const te=(0,le.A)(s=>({progress:{position:"absolute",left:"50%",top:"50%",marginLeft:"-20px",marginTop:"-20px"},container:{position:"relative",width:"100%",display:"flex",flexDirection:"column"},graph:{width:"100%",flex:1,"& path[marker-end]":{transition:"filter 0.1s ease-in-out"},"& path[marker-end]:hover":{filter:`drop-shadow(2px 2px 4px ${s.palette.primary.dark});`},"& g[data-testid=label]":{transition:"transform 0s"}}}),{name:"PluginCatalogGraphEntityRelationsGraph"}),H=s=>{const{rootEntityNames:u,maxDepth:E=2,unidirectional:R=!0,mergeRelations:p=!0,kinds:h,relations:W,entityFilter:F,direction:D=se.O.LEFT_RIGHT,onNodeClick:$,relationPairs:v=re.b,className:d,zoom:m="enabled",renderNode:f,renderLabel:I,curve:T,showArrowHeads:V}=s,U=(0,ue.A)(),ae=te(),y=(0,i.useMemo)(()=>(Array.isArray(u)?u:[u]).map(ve=>(0,l.U2)(ve)),[u]),A=(0,j.gf)(N.m),{loading:r,error:C,nodes:Y,edges:oe}=b({rootEntityRefs:y,maxDepth:E,unidirectional:R,mergeRelations:p,kinds:h,relations:W,entityFilter:F,onNodeClick:$,relationPairs:v});return(0,i.useEffect)(()=>{C&&A.post(C)},[A,C]),i.createElement("div",{className:z()(ae.container,d)},r&&i.createElement(k.A,{className:ae.progress}),Y&&oe&&i.createElement(K.w,{nodes:Y,edges:oe,renderNode:f||ee,renderLabel:I||q,direction:D,className:ae.graph,paddingX:U.spacing(4),paddingY:U.spacing(4),labelPosition:G.D.LabelPosition.RIGHT,labelOffset:U.spacing(1),zoom:m,curve:T,showArrowHeads:V}))}},54361:(me,L,e)=>{e.d(L,{b:()=>K});var l=e(97214);const K=[[l.L8,l.vv],[l.Ey,l.fO],[l.IB,l.ZD],[l.sA,l.jn],[l.Kx,l.Qz],[l.zj,l.u0],[l.nC,l.fT]]},44148:(me,L,e)=>{var l,K=e(4293),G=e(78920);l={value:!0},L.A=void 0;var j=G(e(14041)),N=K(e(74044)),k=(0,N.default)(j.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");L.A=k},41260:(me,L,e)=>{var l,K=e(4293),G=e(78920);l={value:!0},L.A=void 0;var j=G(e(14041)),N=K(e(74044)),k=(0,N.default)(j.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");L.A=k},98984:(me,L,e)=>{var l,K=e(4293),G=e(78920);l={value:!0},L.A=void 0;var j=G(e(14041)),N=K(e(74044)),k=(0,N.default)(j.createElement("path",{d:"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"}),"ZoomOutMap");L.A=k},15485:(me,L,e)=>{e.d(L,{A:()=>i});var l=e(39850),K=e(89575),G=e(14041),j=e(9546),N=e(268),k=e(7031),le=e(97740),ue=e(11192),Ee=function(c){return{root:(0,K.A)({},c.typography.button,{boxSizing:"border-box",borderRadius:c.shape.borderRadius,padding:11,border:"1px solid ".concat((0,N.X4)(c.palette.action.active,.12)),color:(0,N.X4)(c.palette.action.active,.38),"&$selected":{color:c.palette.action.active,backgroundColor:(0,N.X4)(c.palette.action.active,.12),"&:hover":{backgroundColor:(0,N.X4)(c.palette.action.active,.15)},"& + &":{borderLeft:0,marginLeft:0}},"&$disabled":{color:(0,N.X4)(c.palette.action.disabled,.12)},"&:hover":{textDecoration:"none",backgroundColor:(0,N.X4)(c.palette.text.primary,.05),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}}}),disabled:{},selected:{},label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},sizeSmall:{padding:7,fontSize:c.typography.pxToRem(13)},sizeLarge:{padding:15,fontSize:c.typography.pxToRem(15)}}},z=G.forwardRef(function(c,q){var fe=c.children,o=c.classes,ge=c.className,t=c.disabled,ne=t===void 0?!1:t,ee=c.disableFocusRipple,re=ee===void 0?!1:ee,se=c.onChange,w=c.onClick,ie=c.selected,ce=c.size,de=ce===void 0?"medium":ce,X=c.value,he=(0,l.A)(c,["children","classes","className","disabled","disableFocusRipple","onChange","onClick","selected","size","value"]),b=function(H){w&&(w(H,X),H.isDefaultPrevented())||se&&se(H,X)};return G.createElement(le.A,(0,K.A)({className:(0,j.default)(o.root,ge,ne&&o.disabled,ie&&o.selected,de!=="medium"&&o["size".concat((0,ue.A)(de))]),disabled:ne,focusRipple:!re,ref:q,onClick:b,onChange:se,value:X,"aria-pressed":ie},he),G.createElement("span",{className:o.label},fe))});const i=(0,k.A)(Ee,{name:"MuiToggleButton"})(z)}}]);})();

//# sourceMappingURL=370.5a344784.chunk.js.map