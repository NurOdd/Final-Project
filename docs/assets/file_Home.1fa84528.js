import{u as pe,a as fe,c as me,n as ge,d as U,b as he,e as ye}from"./file_auth.3373502a.js";import{_ as Q,u as ke,o as h,c as y,f as u,p as be,j as _e,d as ee,e as te,w as x,v as S,F as A,n as ve,t as M,k as V,N as Nt,l as It,m as b,q as xe,s as Se,a as w,x as Ee,y as Te}from"./file_index.10a63595.js";const we="/Final-Project/assets/file_gato-02.58f4f2b0.png";const se=e=>(be("data-v-441d1504"),e=e(),_e(),e),Ce={class:"navbarWhite shadow-xl bg-opacity-100"},Ne=se(()=>u("div",null,[u("img",{class:"catLogo",src:we,alt:"gato"})],-1)),Ie=se(()=>u("div",{class:"hidden sm:flex sm:items-center"},[u("h1",{class:"text-4xl font-bold text-green-900 md:underline"},"To-Do Task")],-1)),Re={__name:"Navbar",setup(e){const t=ke(),s=pe(),n=async()=>{await fe(),s.logout(),console.log("has hecho el logout con exito"),t.push({name:"logIn"})};return(o,r)=>(h(),y("div",Ce,[u("div",{class:"container mx-auto px-4"},[u("div",{class:"flex items-center justify-between py-4"},[Ne,Ie,u("div",{class:"hidden sm:flex sm:items-center"},[u("button",{onClick:n,class:"text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-green-600 hover:border-green-600"},"Log Out")])]),u("div",{class:"block sm:hidden bg-white border-t-2 py-2"},[u("div",{class:"flex flex-col"},[u("div",{class:"flex justify-between items-center border-t-2 pt-2"},[u("button",{onClick:n,class:"text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-green-600 hover:border-green-600"},"Log Out")])])])])]))}},Oe=Q(Re,[["__scopeId","data-v-441d1504"]]),Ae=me("https://lojksmzvwrhhdpyllwzd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvamtzbXp2d3JoaGRweWxsd3pkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3NzA3MSwiZXhwIjoxOTgxNjUzMDcxfQ.2-ltDdUx-Vj8daRZWb75r4G2VPayqpREnPeua02nFbs"),Pe=async()=>{const e=await Ae.from("task").select("*").order("id",{ascending:!1});return e.error&&console.log(e.error),e.data},$=ee("task",{state:()=>({tasks:[]}),actions:{async setTask(){return this.tasks=await Pe(),console.log("3",this.tasks),this.tasks},updateTask(e,t){},deleteTask(e){},addTask(e){}}}),Me=ee("auth",{state:()=>({isAuth:!1,id:void 0}),actions:{login(e){this.isAuth=!0,this.id=e},logout(){this.id=void 0,this.isAuth=!1}},persist:{enabled:!0,strategies:[{key:"auth",storage:localStorage}]}}),Ve=u("h1",null,"New task",-1),Fe={class:"max-w-sm rounded overflow-hidden shadow-lg"},Be={class:"px-6 py-4"},Le={__name:"NewTask",setup(e){const t=$(),s=Me(),n=te({user_id:s.id,title:"",description:""}),o=async()=>{console.log(n.value),await ge(n.value),t.setTask(),console.log(n.value)};return(r,l)=>(h(),y(A,null,[Ve,u("div",Fe,[u("div",Be,[x(u("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=a=>n.value.title=a),placeholder:"Title",class:"font-bold text-xl mb-2"},null,512),[[S,n.value.title]]),x(u("input",{type:"textarea","onUpdate:modelValue":l[1]||(l[1]=a=>n.value.description=a),placeholder:"Description",class:"text-gray-700 text-base"},null,512),[[S,n.value.description]]),x(u("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=a=>n.value.tag=a),placeholder:"Tags",class:"text-gray-700 text-base"},null,512),[[S,n.value.tag]])]),u("div",{class:"px-6 pt-4 pb-2"},[u("button",{onClick:o,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," Create New Task ")])])],64))}};const $e={class:"max-w-sm rounded overflow-hidden shadow-lg postIt"},De={class:"font-bold text-xl mb-2"},je={class:"text-gray-600 text-base"},We={class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},Ue={key:1,class:"px-6 pt-4 pb-2"},ze={key:0,class:"max-w-sm rounded overflow-hidden shadow-lg"},He={class:"px-6 py-4"},Ge={__name:"Task",props:{task:Object},setup(e){const t=e,s=$(),n=te(!1),o=async()=>{t.task.isCompleted=!t.task.isCompleted;const a=await U(t.task.id,t.task.isCompleted);console.log("Terminado?",a),console.log("estado en supabase:",U),alert("Well done!")},r=async()=>{await he(t.task.title,t.task.description,t.task.tag),n.value=!1},l=async()=>{await ye(t.task.id),s.setTask()};return(a,i)=>(h(),y(A,null,[u("div",$e,[n.value==!1?(h(),y("div",{key:0,class:ve(["px-6 py-4",{classIsCompleted:t.task.isCompleted}])},[u("div",De,M(t.task.title),1),u("p",je,M(t.task.description),1),u("span",We,M(t.task.tag),1)],2)):V("",!0),n.value==!1?(h(),y("div",Ue,[u("button",{onClick:o,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," Done "),u("button",{onClick:i[0]||(i[0]=c=>n.value=!0),class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," Edit "),u("button",{onClick:l,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," Delete ")])):V("",!0)]),n.value==!0?(h(),y("div",ze,[u("div",He,[x(u("input",{type:"text","onUpdate:modelValue":i[1]||(i[1]=c=>e.task.title=c),placeholder:"Title",class:"font-bold text-xl mb-2"},null,512),[[S,e.task.title]]),x(u("input",{type:"textarea","onUpdate:modelValue":i[2]||(i[2]=c=>e.task.description=c),placeholder:"Description",class:"text-gray-700 text-base"},null,512),[[S,e.task.description]]),x(u("input",{type:"text","onUpdate:modelValue":i[3]||(i[3]=c=>e.task.tag=c),placeholder:"Tags",class:"text-gray-700 text-base"},null,512),[[S,e.task.tag]]),u("button",{onClick:r,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," Guardar Cambios")])])):V("",!0)],64))}},Ze=Q(Ge,[["__scopeId","data-v-da8f900a"]]);function E(e,t,s,n){const o=e,r=new SyntaxError(String(o));return r.code=e,r.loc=t,r}const B=Symbol(""),C=Symbol(""),Je=Symbol(""),Ke=Symbol(""),qe=Symbol(""),Xe=Symbol(""),ne=Symbol(""),Ye=Symbol(""),Qe=Symbol(""),et=Symbol(""),z=Symbol(""),tt=Symbol(""),oe=Symbol(""),st=Symbol(""),nt=Symbol(""),ot=Symbol(""),k={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function L(e,t,s,n,o,r,l,a=!1,i=!1,c=!1,f=k){return e&&(a?(e.helper(C),e.helper(R(e.inSSR,c))):e.helper(I(e.inSSR,c)),l&&e.helper(Ye)),{type:13,tag:t,props:s,children:n,patchFlag:o,dynamicProps:r,directives:l,isBlock:a,disableTracking:i,isComponent:c,loc:f}}function v(e,t=k){return{type:15,loc:t,properties:e}}function re(e,t){return{type:16,loc:k,key:b(e)?g(e,!0):e,value:t}}function g(e,t=!1,s=k,n=0){return{type:4,loc:s,content:e,isStatic:t,constType:t?3:n}}function F(e,t=k){return{type:8,loc:t,children:e}}function N(e,t=[],s=k){return{type:14,loc:s,callee:e,arguments:t}}function H(e,t=void 0,s=!1,n=!1,o=k){return{type:18,params:e,returns:t,newline:s,isSlot:n,loc:o}}function rt(e,t,s,n=!0){return{type:19,test:e,consequent:t,alternate:s,newline:n,loc:k}}function lt(e){return{type:21,body:e,loc:k}}const at=e=>e.type===4&&e.isStatic;function it(e,t,s){const o={source:e.source.slice(t,t+s),start:G(e.start,e.source,t),end:e.end};return s!=null&&(o.end=G(e.start,e.source,t+s)),o}function G(e,t,s=t.length){return ct(xe({},e),t,s)}function ct(e,t,s=t.length){let n=0,o=-1;for(let r=0;r<s;r++)t.charCodeAt(r)===10&&(n++,o=r);return e.offset+=s,e.line+=n,e.column=o===-1?e.column+s:s-o,e}function le(e,t,s=!1){for(let n=0;n<e.props.length;n++){const o=e.props[n];if(o.type===7&&(s||o.exp)&&(b(t)?o.name===t:t.test(o.name)))return o}}function ae(e,t,s=!1,n=!1){for(let o=0;o<e.props.length;o++){const r=e.props[o];if(r.type===6){if(s)continue;if(r.name===t&&(r.value||n))return r}else if(r.name==="bind"&&(r.exp||n)&&ut(r.arg,t))return r}}function ut(e,t){return!!(e&&at(e)&&e.content===t)}function dt(e){return e.type===7&&e.name==="slot"}function ie(e){return e.type===1&&e.tagType===3}function Z(e){return e.type===1&&e.tagType===2}function I(e,t){return e||t?qe:Xe}function R(e,t){return e||t?Je:Ke}const pt=new Set([tt,oe]);function ce(e,t=[]){if(e&&!b(e)&&e.type===14){const s=e.callee;if(!b(s)&&pt.has(s))return ce(e.arguments[0],t.concat(e))}return[e,t]}function O(e,t,s){let n,o=e.type===13?e.props:e.arguments[2],r=[],l;if(o&&!b(o)&&o.type===14){const a=ce(o);o=a[0],r=a[1],l=r[r.length-1]}if(o==null||b(o))n=v([t]);else if(o.type===14){const a=o.arguments[0];!b(a)&&a.type===15?a.properties.unshift(t):o.callee===st?n=N(s.helper(z),[v([t]),o]):o.arguments.unshift(v([t])),!n&&(n=o)}else if(o.type===15){let a=!1;if(t.key.type===4){const i=t.key.content;a=o.properties.some(c=>c.key.type===4&&c.key.content===i)}a||o.properties.unshift(t),n=o}else n=N(s.helper(z),[v([t]),o]),l&&l.callee===oe&&(l=r[r.length-2]);e.type===13?l?l.arguments[0]=n:e.props=n:l?l.arguments[0]=n:e.arguments[2]=n}function ft(e){return e.type===14&&e.callee===nt?e.arguments[1].returns:e}function mt(e,{helper:t,removeHelper:s,inSSR:n}){e.isBlock||(e.isBlock=!0,s(I(n,e.isComponent)),t(C),t(R(n,e.isComponent)))}function gt(e,t){let s=0;const n=()=>{s--};for(;s<e.children.length;s++){const o=e.children[s];b(o)||(t.parent=e,t.childIndex=s,t.onNodeRemoved=n,D(o,t))}}function D(e,t){t.currentNode=e;const{nodeTransforms:s}=t,n=[];for(let r=0;r<s.length;r++){const l=s[r](e,t);if(l&&(Se(l)?n.push(...l):n.push(l)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(ne);break;case 5:t.ssr||t.helper(et);break;case 9:for(let r=0;r<e.branches.length;r++)D(e.branches[r],t);break;case 10:case 11:case 1:case 0:gt(e,t);break}t.currentNode=e;let o=n.length;for(;o--;)n[o]()}function ue(e,t){const s=b(e)?n=>n===e:n=>e.test(n);return(n,o)=>{if(n.type===1){const{props:r}=n;if(n.tagType===3&&r.some(dt))return;const l=[];for(let a=0;a<r.length;a++){const i=r[a];if(i.type===7&&s(i.name)){r.splice(a,1),a--;const c=t(n,i,o);c&&l.push(c)}}return l}}}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");ue(/^(if|else|else-if)$/,(e,t,s)=>ht(e,t,s,(n,o,r)=>{const l=s.parent.children;let a=l.indexOf(n),i=0;for(;a-->=0;){const c=l[a];c&&c.type===9&&(i+=c.branches.length)}return()=>{if(r)n.codegenNode=K(o,i,s);else{const c=yt(n.codegenNode);c.alternate=K(o,i+n.branches.length-1,s)}}}));function ht(e,t,s,n){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const o=t.exp?t.exp.loc:e.loc;s.onError(E(28,t.loc)),t.exp=g("true",!1,o)}if(t.name==="if"){const o=J(e,t),r={type:9,loc:e.loc,branches:[o]};if(s.replaceNode(r),n)return n(r,o,!0)}else{const o=s.parent.children;let r=o.indexOf(e);for(;r-->=-1;){const l=o[r];if(l&&l.type===2&&!l.content.trim().length){s.removeNode(l);continue}if(l&&l.type===9){t.name==="else-if"&&l.branches[l.branches.length-1].condition===void 0&&s.onError(E(30,e.loc)),s.removeNode();const a=J(e,t);l.branches.push(a);const i=n&&n(l,a,!1);D(a,s),i&&i(),s.currentNode=null}else s.onError(E(30,e.loc));break}}}function J(e,t){const s=e.tagType===3;return{type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:s&&!le(e,"for")?e.children:[e],userKey:ae(e,"key"),isTemplateIf:s}}function K(e,t,s){return e.condition?rt(e.condition,q(e,t,s),N(s.helper(ne),['""',"true"])):q(e,t,s)}function q(e,t,s){const{helper:n}=s,o=re("key",g(`${t}`,!1,k,2)),{children:r}=e,l=r[0];if(r.length!==1||l.type!==1)if(r.length===1&&l.type===11){const i=l.codegenNode;return O(i,o,s),i}else{let i=64;return L(s,n(B),v([o]),r,i+"",void 0,void 0,!0,!1,!1,e.loc)}else{const i=l.codegenNode,c=ft(i);return c.type===13&&mt(c,s),O(c,o,s),i}}function yt(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}ue("for",(e,t,s)=>{const{helper:n,removeHelper:o}=s;return kt(e,t,s,r=>{const l=N(n(Qe),[r.source]),a=ie(e),i=le(e,"memo"),c=ae(e,"key"),f=c&&(c.type===6?g(c.value.content,!0):c.exp),p=c?re("key",f):null,m=r.source.type===4&&r.source.constType>0,_=m?64:c?128:256;return r.codegenNode=L(s,n(B),void 0,l,_+"",void 0,void 0,!0,!m,!1,e.loc),()=>{let d;const{children:P}=r,de=P.length!==1||P[0].type!==1,j=Z(e)?e:a&&e.children.length===1&&Z(e.children[0])?e.children[0]:null;if(j?(d=j.codegenNode,a&&p&&O(d,p,s)):de?d=L(s,n(B),p?v([p]):void 0,e.children,64+"",void 0,void 0,!0,void 0,!1):(d=P[0].codegenNode,a&&p&&O(d,p,s),d.isBlock!==!m&&(d.isBlock?(o(C),o(R(s.inSSR,d.isComponent))):o(I(s.inSSR,d.isComponent))),d.isBlock=!m,d.isBlock?(n(C),n(R(s.inSSR,d.isComponent))):n(I(s.inSSR,d.isComponent))),i){const W=H(Y(r.parseResult,[g("_cached")]));W.body=lt([F(["const _memo = (",i.exp,")"]),F(["if (_cached",...f?[" && _cached.key === ",f]:[],` && ${s.helperString(ot)}(_cached, _memo)) return _cached`]),F(["const _item = ",d]),g("_item.memo = _memo"),g("return _item")]),l.arguments.push(W,g("_cache"),g(String(s.cached++)))}else l.arguments.push(H(Y(r.parseResult),d,!0))}})});function kt(e,t,s,n){if(!t.exp){s.onError(E(31,t.loc));return}const o=vt(t.exp);if(!o){s.onError(E(32,t.loc));return}const{addIdentifiers:r,removeIdentifiers:l,scopes:a}=s,{source:i,value:c,key:f,index:p}=o,m={type:11,loc:t.loc,source:i,valueAlias:c,keyAlias:f,objectIndexAlias:p,parseResult:o,children:ie(e)?e.children:[e]};s.replaceNode(m),a.vFor++;const _=n&&n(m);return()=>{a.vFor--,_&&_()}}const bt=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,X=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,_t=/^\(|\)$/g;function vt(e,t){const s=e.loc,n=e.content,o=n.match(bt);if(!o)return;const[,r,l]=o,a={source:T(s,l.trim(),n.indexOf(l,r.length)),value:void 0,key:void 0,index:void 0};let i=r.trim().replace(_t,"").trim();const c=r.indexOf(i),f=i.match(X);if(f){i=i.replace(X,"").trim();const p=f[1].trim();let m;if(p&&(m=n.indexOf(p,c+i.length),a.key=T(s,p,m)),f[2]){const _=f[2].trim();_&&(a.index=T(s,_,n.indexOf(_,a.key?m+p.length:c+i.length)))}}return i&&(a.value=T(s,i,c)),a}function T(e,t,s){return g(t,!1,it(e,s,t.length))}function Y({value:e,key:t,index:s},n=[]){return xt([e,t,s,...n])}function xt(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((s,n)=>s||g("_".repeat(n+1),!1))}const St={class:"bg-fixed",style:{"background-image":"url(https://i.pinimg.com/564x/36/3f/d9/363fd9159ff7a0fa9466726a071a4ca9.jpg)"}},Et={__name:"Board",setup(e){const t=$();return t.setTask(),(s,n)=>(h(),y("div",St,[u("div",null,[w(Le)]),(h(!0),y(A,null,Ee(Te(t).tasks,o=>(h(),y("div",{key:o.id},[w(Ze,{task:o},null,8,["task"])]))),128))]))}},Tt={class:"bg-green-100"},Rt={__name:"Home",setup(e){return(t,s)=>(h(),y(A,null,[w(Oe),u("div",Tt,[w(Et)])],64))}};export{Rt as default};
