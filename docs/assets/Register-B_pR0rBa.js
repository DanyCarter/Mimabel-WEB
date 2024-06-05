import{_ as C,ab as B,D as i,q as M,r as _,o as h,a as b,e as f,b as a,U,i as u,v as m,w as q,t as A,x as D,F as I,ad as R,ae as w,af as N,A as x,ag as y,ah as S,ai as E,k as L,p as P,m as O}from"./index-EQXVgOZ1.js";const F={components:{MainNav:B},setup(){const o=i(""),s=i(""),l=i(""),e=i(""),v=i(""),r=i(""),n=M();return{firstName:o,lastName:s,email:l,password:e,location:v,goBack:()=>{n.push("/")},errorMessage:r,register:async()=>{if(e.value.length<6){r.value="Password should be at least 6 characters.";return}try{const p=(await R(w,l.value,e.value)).user,c=l.value==="admin@example.com"?"admin":"user";await N(x(y,"users",p.uid),{firstName:o.value,lastName:s.value,email:l.value,location:v.value,role:c,createdAt:new Date}),n.push("/")}catch(d){d.code==="auth/email-already-in-use"?r.value="Email is already in use.":r.value=d.message}},socialLogin:async()=>{const d=new S;try{const c=(await E(w,d)).user,V=c.email==="admin@example.com"?"admin":"user";await N(x(y,"users",c.uid),{firstName:"",lastName:"",email:c.email,role:V,createdAt:new Date}),n.push("/")}catch(p){r.value="Oops. "+p.message}}}}},k=o=>(P("data-v-d8fbbb9c"),o=o(),O(),o),G={class:"full-page"},T={class:"wrapper"},W=k(()=>a("h2",{class:"register-title"},"Register",-1)),H={class:"input-box"},j={class:"input-box"},z={class:"input-box"},J={class:"input-box"},K={class:"input-box"},Q=k(()=>a("div",{class:"input-box button"},[a("input",{type:"submit",value:"Register"})],-1)),X={class:"login-forget opacity"},Y={key:0,class:"error-message"};function Z(o,s,l,e,v,r){const n=_("MainNav"),g=_("router-link");return h(),b(I,null,[f(n,{showButtons:!1,hideHamburger:!0}),a("div",G,[a("div",T,[W,a("form",{onSubmit:s[6]||(s[6]=U((...t)=>e.register&&e.register(...t),["prevent"]))},[a("div",H,[u(a("input",{type:"text",placeholder:"Nombre","onUpdate:modelValue":s[0]||(s[0]=t=>e.firstName=t),required:""},null,512),[[m,e.firstName]])]),a("div",j,[u(a("input",{type:"text",placeholder:"Apellidos","onUpdate:modelValue":s[1]||(s[1]=t=>e.lastName=t),required:""},null,512),[[m,e.lastName]])]),a("div",z,[u(a("input",{type:"email",placeholder:"Correo electronico...","onUpdate:modelValue":s[2]||(s[2]=t=>e.email=t),required:""},null,512),[[m,e.email]])]),a("div",J,[u(a("input",{type:"password",placeholder:"Constraseña...","onUpdate:modelValue":s[3]||(s[3]=t=>e.password=t),required:""},null,512),[[m,e.password]])]),a("div",K,[u(a("input",{type:"text",placeholder:"Ubicacion","onUpdate:modelValue":s[4]||(s[4]=t=>e.location=t),required:""},null,512),[[m,e.location]])]),Q,a("div",X,[f(g,{to:"/login",class:"login"},{default:q(()=>[L("LOGIN")]),_:1}),a("button",{onClick:s[5]||(s[5]=(...t)=>e.goBack&&e.goBack(...t)),class:"back"},"VOLVER")]),e.errorMessage?(h(),b("p",Y,A(e.errorMessage),1)):D("",!0)],32)])])],64)}const ae=C(F,[["render",Z],["__scopeId","data-v-d8fbbb9c"]]);export{ae as default};
