import{u as p,c as m,r as v,o as r,a as c,b as e,t as i,d as u,f,e as h,w as _,n as x,_ as w,g,h as k,i as y,v as b,F as L,j as C,k as V,l as P,p as B,m as $}from"./index-EQXVgOZ1.js";const N=["src","alt"],j={class:"space-y-2 flex-auto"},S={class:"text-gray-900"},A={class:"font-extrabold"},I={class:"flex items-center gap-3"},M=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-gray-600"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})],-1),H=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",class:"w-6 h-6 text-red-500"},[e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})],-1),R=[H],D={__name:"Product",props:{product:{type:Object}},setup(t){const l=p(),s=t,n=m(()=>s.product.availability===0);return(d,o)=>{const a=v("RouterLink");return r(),c("li",{class:x([{"opacity-30":n.value},"flex items-center space-x-6 border border-gray-200 p-6 bg-white shadow"])},[e("img",{src:t.product.image,alt:t.product.name,class:"h-24 w-24"},null,8,N),e("div",j,[e("h3",S,i(t.product.name),1),e("p",A,i(u(f)(t.product.price)),1),e("p",null,i(t.product.availability)+" en Existencia",1)]),e("div",I,[h(a,{to:{name:"edit-product",params:{id:t.product.id}}},{default:_(()=>[M]),_:1},8,["to"]),e("button",{type:"button",onClick:o[0]||(o[0]=W=>u(l).deleteProduct(t.product.id)),class:"flex items-center justify-center h-full"},R)])],2)}}},E=t=>(B("data-v-3bd6f0da"),t=t(),$(),t),F=E(()=>e("h1",{class:"text-4xl font-black my-10"},"Productos",-1)),T={key:0},z={key:1},O={role:"list",class:"grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"},U={__name:"ProductsView",props:{modelValue:{default:""},modelModifiers:{}},emits:["update:modelValue"],setup(t){const l=p(),s=g(t,"modelValue"),n=m(()=>{let d=[];for(const o of l.productsCollection)(s.value==""||o.name.toLowerCase().includes(s.value.toLowerCase()))&&d.push(o);return d});return(d,o)=>(r(),c("div",null,[h(k,{to:"new-product"},{default:_(()=>[V(" Nuevo Producto ")]),_:1}),F,u(l).noResults?(r(),c("p",T,"No hay resultados")):(r(),c("div",z,[y(e("input",{class:"search-bar",type:"text",placeholder:"Buscar","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a)},null,512),[[b,s.value]]),e("ul",O,[(r(!0),c(L,null,C(n.value,a=>(r(),P(D,{key:a.id,product:a},null,8,["product"]))),128))])]))]))}},q=w(U,[["__scopeId","data-v-3bd6f0da"]]);export{q as default};
