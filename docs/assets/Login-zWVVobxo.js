import{_ as x,ab as C,D as g,aj as B,ak as D,q as I,r as p,o as f,a as w,e as m,b as s,U as L,i as k,v as b,t as M,x as S,w as V,F,al as E,am as y,A as N,ah as A,ai as P,k as R,p as G,m as O}from"./index-FssrZzL4.js";import{F as T}from"./Footer-DcXTPNnE.js";const U={components:{MainNav:C,Footer:T},setup(){const a=g(""),t=g(""),n=g(""),o=B(),d=D(),r=I();return{email:a,password:t,errorMessage:n,login:async()=>{try{const c=(await E(o,a.value,t.value)).user,l=await y(N(d,"users",c.uid));l.exists()?l.data().role==="admin"?r.push("/admin/productos"):r.push("/"):n.value="No se encontraron datos de usuario"}catch(e){n.value=e.message}},socialLogin:async()=>{const e=new A;try{const l=(await P(o,e)).user,u=await y(N(d,"users",l.uid));u.exists()?u.data().role==="admin"?r.push("/admin/productos"):r.push("/"):n.value="No se encontraron datos de usuario"}catch(c){n.value="Oops. "+c.message}},goBack:()=>{r.push("/")}}}},i=a=>(G("data-v-95916532"),a=a(),O(),a),W={class:"screen"},j={class:"container"},q={class:"login-container"},H=i(()=>s("div",{class:"circle circle-one"},null,-1)),z=i(()=>s("div",{class:"circle circle-two"},null,-1)),J={class:"form-container"},K=i(()=>s("img",{src:"https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png",alt:"illustration",class:"illustration"},null,-1)),Q=i(()=>s("h1",{class:"login-title"},"LOGIN",-1)),X={class:"google"},Y=i(()=>s("button",{type:"submit"},"Login",-1)),Z={key:0,class:"error-message"},$={class:"register-forget opacity"},ss=i(()=>s("div",{class:"theme-btn-container"},null,-1));function os(a,t,n,o,d,r){const _=p("MainNav"),h=p("router-link"),v=p("Footer");return f(),w(F,null,[m(_,{showButtons:!1,hideHamburger:!0}),s("div",W,[s("section",j,[s("div",q,[H,z,s("div",J,[K,Q,s("div",X,[s("div",{class:"google-button",onClick:t[0]||(t[0]=(...e)=>o.socialLogin&&o.socialLogin(...e))})]),s("form",{onSubmit:t[3]||(t[3]=L((...e)=>o.login&&o.login(...e),["prevent"]))},[k(s("input",{type:"email",placeholder:"Email address...","onUpdate:modelValue":t[1]||(t[1]=e=>o.email=e)},null,512),[[b,o.email]]),k(s("input",{type:"password",placeholder:"Password...","onUpdate:modelValue":t[2]||(t[2]=e=>o.password=e)},null,512),[[b,o.password]]),Y,o.errorMessage?(f(),w("p",Z,M(o.errorMessage),1)):S("",!0)],32),s("div",$,[m(h,{to:"/register",class:"register"},{default:V(()=>[R("REGISTER")]),_:1}),s("button",{onClick:t[4]||(t[4]=(...e)=>o.goBack&&o.goBack(...e)),class:"back"},"VOLVER")])])]),ss])]),m(v)],64)}const ns=x(U,[["render",os],["__scopeId","data-v-95916532"]]);export{ns as default};
