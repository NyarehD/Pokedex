import{_ as p,o as n,c as l,t as o,K as h,r as m,$ as y,ax as v,a as e,F as g,aG as k,H as f,p as x,b as w,bv as b,bw as I,a0 as $}from"./index.eea43bab.js";const D={name:"TypeIcon",props:{type:Object}};function P(a,c,t,r,_,i){return n(),l("button",{class:h(["type-icon border rounded text-white text-capitalize",[`type-${t.type.name}`]])},o(t.type.name),3)}var T=p(D,[["render",P]]);const s=a=>(x("data-v-e735ac12"),a=a(),w(),a),z={class:"row"},B={class:"text-center my-3 text-capitalize"},S={class:"col-md-6"},j=["src","alt"],F={class:"col-md-6"},H=s(()=>e("h2",null,"PokeDex Data",-1)),N={class:"table w-100"},A=s(()=>e("th",null,"No.",-1)),C={style:{"font-weight":"normal"}},E=s(()=>e("th",null,"Type",-1)),G={style:{"font-weight":"normal"}},K=s(()=>e("th",null,"Height",-1)),L=s(()=>e("th",null,"Weight",-1)),M={setup(a){let c=b();const t=m([]);async function r(){return(await I.get(`https://pokeapi.co/api/v2/pokemon/${c.params.pokemon}`)).data}const _=y(()=>t.value.types);return v(async()=>{t.value=await r()}),(i,O)=>(n(),l("div",z,[e("h1",B,o(t.value.name),1),e("div",S,[e("img",{src:`https://img.pokemondb.net/artwork/large/${t.value.name}.jpg`,class:"card-img-top w-100",alt:`Image of ${t.value.name}`,loading:"lazy"},null,8,j)]),e("div",F,[H,e("table",N,[e("tbody",null,[e("tr",null,[A,e("th",C,o(t.value.order),1)]),e("tr",null,[E,e("th",G,[(n(!0),l(g,null,k(f(_),(u,d)=>(n(),$(T,{key:d,type:u.type},null,8,["type"]))),128))])]),e("tr",null,[K,e("th",null,o(t.value.height)+" m",1)]),e("tr",null,[L,e("th",null,o(t.value.weight)+" kg",1)])])])])]))}};var V=p(M,[["__scopeId","data-v-e735ac12"]]);export{V as default};