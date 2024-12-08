"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5061],{54748:(L,f,t)=>{t.d(f,{M:()=>y});var e=t(58837),c=t(71677),u=t(14041),d=t(72501);const a=(0,e.A)({container:{overflow:"visible !important"},typo:{fontSize:"inherit",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box","-webkit-line-clamp":({line:s})=>s||1,"-webkit-box-orient":"vertical"}},{name:"BackstageOverflowTooltip"});function y(s){const E=a(s);return u.createElement(c.Ay,{title:s.title??(s.text||""),placement:s.placement},u.createElement(d.A,{className:E.typo,variant:"inherit"},s.text))}},35301:(L,f,t)=>{t.d(f,{s:()=>v});var e=t(58837),c=t(14041),u=t(97214),d=t(54748),a=t(699),y=t(37281),s=t(14158),E=t(53318);const n=Object.freeze({createEntityRefColumn(m){const{defaultKind:l}=m;function g(i){return i.metadata?.title||(0,E.S)(i,{defaultKind:l})}return{title:"Name",highlight:!0,customFilterAndSearch(i,O){return g(O).includes(i)},customSort(i,O){return g(i).localeCompare(g(O))},render:i=>c.createElement(y.z,{entityRef:i,defaultKind:l,title:i.metadata?.title})}},createEntityRelationColumn(m){const{title:l,relation:g,defaultKind:i,filter:O}=m;function D(p){return(0,a.t)(p,g,O)}function R(p){return D(p).map(_=>(0,E.S)(_,{defaultKind:i})).join(", ")}return{title:l,customFilterAndSearch(p,_){return R(_).includes(p)},customSort(p,_){return R(p).localeCompare(R(_))},render:p=>c.createElement(s.i,{entityRefs:D(p),defaultKind:i})}},createOwnerColumn(){return this.createEntityRelationColumn({title:"Owner",relation:u.vv,defaultKind:"group"})},createDomainColumn(){return this.createEntityRelationColumn({title:"Domain",relation:u.jn,defaultKind:"domain",filter:{kind:"domain"}})},createSystemColumn(){return this.createEntityRelationColumn({title:"System",relation:u.jn,defaultKind:"system",filter:{kind:"system"}})},createMetadataDescriptionColumn(){return{title:"Description",field:"metadata.description",render:m=>c.createElement(d.M,{text:m.metadata.description,placement:"bottom-start",line:2})}},createSpecLifecycleColumn(){return{title:"Lifecycle",field:"spec.lifecycle"}},createSpecTypeColumn(){return{title:"Type",field:"spec.type"}}}),o=[n.createEntityRefColumn({defaultKind:"system"}),n.createDomainColumn(),n.createOwnerColumn(),n.createMetadataDescriptionColumn()],C=[n.createEntityRefColumn({defaultKind:"component"}),n.createSystemColumn(),n.createOwnerColumn(),n.createSpecTypeColumn(),n.createSpecLifecycleColumn(),n.createMetadataDescriptionColumn()];var M=t(29021);const r=(0,e.A)(m=>({empty:{padding:m.spacing(2),display:"flex",justifyContent:"center"}})),v=m=>{const{entities:l,title:g,emptyContent:i,variant:O="gridItem",columns:D,tableOptions:R={}}=m,p=r(),_={minWidth:"0",width:"100%"};return O==="gridItem"&&(_.height="calc(100% - 10px)"),c.createElement(M.X,{columns:D,title:g,style:_,emptyContent:i&&c.createElement("div",{className:p.empty},i),options:{search:!1,paging:!1,actionsColumnIndex:-1,padding:"dense",draggable:!1,...R},data:l})};v.columns=n,v.systemEntityColumns=o,v.componentEntityColumns=C},39557:(L,f,t)=>{t.d(f,{E:()=>a});var e=t(78560),c=t(18139),u=t(73466),d=t(30043);function a(y,s){const E=s?.type?.toLocaleLowerCase("en-US"),n=s?.kind?.toLocaleLowerCase("en-US"),o=(0,c.gf)(d.v),{loading:C,value:M,error:r}=(0,u.A)(async()=>{const v=y.relations?.filter(l=>(!E||l.type.toLocaleLowerCase("en-US")===E)&&(!n||(0,e.KU)(l.targetRef).kind===n));if(!v?.length)return[];const{items:m}=await o.getEntitiesByRefs({entityRefs:v.map(l=>l.targetRef)});return m.filter(l=>!!l)},[y,E,n]);return{entities:M,loading:C,error:r}}},85061:(L,f,t)=>{t.r(f),t.d(f,{HasResourcesCard:()=>s});var e=t(97214),c=t(14041),u=t(5519),d=t(15669),a=t(58045),y=t(10265);function s(E){const{t:n}=(0,y.i)(a.W),{variant:o="gridItem",title:C=n("hasResourcesCard.title"),columns:M=d.v9,tableOptions:r={}}=E;return c.createElement(u.p,{variant:o,title:C,entityKind:"Resource",relationType:e.sA,columns:M,asRenderableEntities:d.eB,emptyMessage:n("hasResourcesCard.emptyMessage"),emptyHelpLink:d.nz,tableOptions:r})}},5519:(L,f,t)=>{t.d(f,{p:()=>r});var e=t(72501),c=t(16400),u=t(39557),d=t(35301),a=t(14041),y=t(21332),s=t(96872),E=t(99424),n=t(75202),o=t(15669),C=t(58045),M=t(10265);const r=v=>{const{variant:m="gridItem",title:l,columns:g,entityKind:i,relationType:O,emptyMessage:D,emptyHelpLink:R,asRenderableEntities:p,tableOptions:_={}}=v,{t:T}=(0,M.i)(C.W),{entity:K}=(0,c.tN)(),{entities:A,loading:h,error:P}=(0,u.E)(K,{type:O,kind:i});return h?a.createElement(y.n,{variant:m,title:l},a.createElement(s.k,null)):P?a.createElement(y.n,{variant:m,title:l},a.createElement(E._,{error:P})):a.createElement(d.s,{title:l,variant:m,emptyContent:a.createElement("div",{style:{textAlign:"center"}},a.createElement(e.A,{variant:"body1"},D),a.createElement(e.A,{variant:"body2"},a.createElement(n.N_,{to:R,externalLinkIcon:!0},T("relatedEntitiesCard.emptyHelpLinkTitle")))),columns:g,entities:p(A||[]),tableOptions:_})};r.componentEntityColumns=o.mz,r.componentEntityHelpLink=o.e2,r.asComponentEntities=o.xJ,r.resourceEntityColumns=o.v9,r.resourceEntityHelpLink=o.nz,r.asResourceEntities=o.eB,r.systemEntityColumns=o.MW,r.systemEntityHelpLink=o.iU,r.asSystemEntities=o.vy},15669:(L,f,t)=>{t.d(f,{MW:()=>E,e2:()=>u,eB:()=>s,iU:()=>n,mz:()=>c,nz:()=>y,v9:()=>a,vy:()=>o,xJ:()=>d});var e=t(35301);const c=[e.s.columns.createEntityRefColumn({defaultKind:"component"}),e.s.columns.createOwnerColumn(),e.s.columns.createSpecTypeColumn(),e.s.columns.createSpecLifecycleColumn(),e.s.columns.createMetadataDescriptionColumn()],u="https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",d=C=>C,a=[e.s.columns.createEntityRefColumn({defaultKind:"resource"}),e.s.columns.createOwnerColumn(),e.s.columns.createSpecTypeColumn(),e.s.columns.createSpecLifecycleColumn(),e.s.columns.createMetadataDescriptionColumn()],y="https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",s=C=>C,E=[e.s.columns.createEntityRefColumn({defaultKind:"system"}),e.s.columns.createOwnerColumn(),e.s.columns.createMetadataDescriptionColumn()],n="https://backstage.io/docs/features/software-catalog/descriptor-format#kind-system",o=C=>C}}]);})();

//# sourceMappingURL=5061.5a1281e5.chunk.js.map