import{o as n,c as o,a as e,w as j,t as d,F as x,r as $,b as g,d as E,_ as P,e as z,p as I,f as D,n as L,g as S,h as w,i as y,u as p,j as C,k as A,l as N,m as B,q as F}from"./index.058e4ab5.js";const M={class:"mt-3"},V=e("h2",{class:"text-3xl font-semibold dark:text-neutral-200 text-center mb-6"}," Evolution Chain ",-1),H={class:"md:grid grid-cols-3 gap-4"},O=["src","alt","aria-label"],q={class:"text-center font-semibold text-xl my-2 capitalize text-dark"},R={key:0,class:"md:col-span-2 grid md:grid-cols-1 gap-2"},W=["onClick"],Z=["src","alt"],G={class:"text-center font-semibold text-xl my-2 capitalize text-dark"},J={key:0,class:"flex-1"},K=["onClick"],Q=["src","alt"],U={class:"text-center font-semibold text-xl my-2 capitalize text-dark"},X={__name:"EvolutionChart",props:{evolutionChain:Object},setup(t){function a(c){E.push({name:"pokemonDetail",params:{pokemon:c}})}return(c,h)=>{var l,m,i,u,s,r;return n(),o("div",M,[V,e("div",H,[e("div",{class:"mb-2 md:mb-0 flex flex-col justify-center bg-white rounded-md hoverScale",onClick:h[0]||(h[0]=j(_=>{var f;return a((f=t.evolutionChain.chain)==null?void 0:f.species.name)},["stop"]))},[e("img",{src:`https://img.pokemondb.net/artwork/large/${(l=t.evolutionChain.chain)==null?void 0:l.species.name}.jpg`,alt:(m=t.evolutionChain.chain)==null?void 0:m.species.name,class:"evolution-img","aria-label":(i=t.evolutionChain.chain)==null?void 0:i.species.name},null,8,O),e("h1",q,d((u=t.evolutionChain.chain)==null?void 0:u.species.name),1)]),((s=t.evolutionChain.chain)==null?void 0:s.evolves_to.length)>=1?(n(),o("div",R,[(n(!0),o(x,null,$((r=t.evolutionChain.chain)==null?void 0:r.evolves_to,(_,f)=>(n(),o("div",{class:"flex flex-col md:grid md:grid-cols-2 md:gap-3",key:`secondEvo${f}`},[e("div",{class:"mb-2 md:mb-0 flex-1 bg-white rounded-md hoverScale",onClick:j(v=>a(_.species.name),["stop"])},[e("img",{src:`https://img.pokemondb.net/artwork/large/${_.species.name}.jpg`,alt:_.species.name,class:"evolution-img"},null,8,Z),e("h1",G,d(_.species.name),1)],8,W),_.evolves_to.length>=1?(n(),o("div",J,[(n(!0),o(x,null,$(_.evolves_to,(v,T)=>(n(),o("div",{key:`thirdEvo${T}`,class:"bg-white rounded-md hoverScale h-full",onClick:Be=>a(v.species.name)},[e("img",{src:`https://img.pokemondb.net/artwork/large/${v.species.name}.jpg`,alt:v.species.name,class:"evolution-img"},null,8,Q),e("h1",U,d(v.species.name),1)],8,K))),128))])):g("",!0)]))),128))])):g("",!0)])])}}},Y={},ee={class:"mt-3"},te=z('<h2 class="text-3xl font-semibold dark:text-neutral-200 text-center mb-6"> Evolution Chain </h2><div class="grid md:grid-cols-3 gap-4"><div class="w-full h-72 object-contain drop-shadow-none animate-pulse bg-neutral-400/50 dark:bg-neutral-100/50 rounded-t-md"></div><div class="w-full h-72 object-contain drop-shadow-none animate-pulse bg-neutral-400/50 dark:bg-neutral-100/50 rounded-t-md"></div><div class="w-full h-72 object-contain drop-shadow-none animate-pulse bg-neutral-400/50 dark:bg-neutral-100/50 rounded-t-md"></div></div>',2),ne=[te];function oe(t,a){return n(),o("div",ee,ne)}const ae=P(Y,[["render",oe]]);const se={},k=t=>(I("data-v-313a023d"),t=t(),D(),t),le={class:"divide-y divide-neutral-400"},ie=k(()=>e("tr",null,[e("th",null,"No"),e("th",null,[e("div",{class:"w-90 h-4 bg-neutral-500/50 dark:bg-neutral-300/50 rounded-md animate-pulse"})])],-1)),ce=k(()=>e("tr",null,[e("th",null,"Type"),e("th",null,[e("div",{class:"w-90 h-4 bg-neutral-500/50 dark:bg-neutral-300/50 rounded-md animate-pulse"})])],-1)),re=k(()=>e("tr",null,[e("th",null,"Height"),e("th",null,[e("div",{class:"w-90 h-4 bg-neutral-500/50 dark:bg-neutral-300/50 rounded-md animate-pulse"})])],-1)),de=k(()=>e("tr",null,[e("th",null,"Weight"),e("th",null,[e("div",{class:"w-90 h-4 bg-neutral-500/50 dark:bg-neutral-300/50 rounded-md animate-pulse"})])],-1)),ue=k(()=>e("tr",null,[e("th",null,"Abilities"),e("th",null,[e("div",{class:"w-90 h-12 my-3 bg-neutral-500/50 dark:bg-neutral-300/50 rounded-md animate-pulse"})])],-1)),he=[ie,ce,re,de,ue];function me(t,a,c,h,l,m){return n(),o("tbody",le,he)}const _e=P(se,[["render",me],["__scopeId","data-v-313a023d"]]);const pe={__name:"TypeIcon",props:{type:Object},setup(t){return(a,c)=>(n(),o("button",{class:L(["mx-1 capitalize py-1.5 px-3 text-white font-medium rounded-md",[`type-${t.type.name}`]])},d(t.type.name),3))}},b=t=>(I("data-v-6164ad40"),t=t(),D(),t),ve={class:"table-auto min-w-full dark:text-neutral-200"},ge={key:1,class:"divide-y divide-neutral-400"},ke=b(()=>e("th",null,"No",-1)),be=b(()=>e("th",null,"Type",-1)),fe=b(()=>e("th",null,"Height",-1)),xe={class:""},$e=b(()=>e("th",null,"Weight",-1)),ye={class:"fw-normal"},we=b(()=>e("th",null,"Abilities",-1)),Ce=["href"],Pe={key:0,class:"mx-2 text-secondary"},je=S({__name:"PokemonDetailTable",props:{currentPokemon:{type:Object,required:!0},isLoading:Boolean},setup(t){const a=t;function c(i){return i<10?`0${i}`:i}const h=w(()=>a.currentPokemon.types),l=w(()=>{let i=a.currentPokemon.height*3.937,u=Math.floor(i/12),s=Math.floor(i%12);return u===0?`${c(s)}''`:`${u}'${c(s)}''`}),m=w(()=>(a.currentPokemon.weight*.22046).toFixed(2));return(i,u)=>(n(),o("table",ve,[t.isLoading?(n(),y(_e,{key:0})):g("",!0),t.isLoading?g("",!0):(n(),o("tbody",ge,[e("tr",null,[ke,e("th",null,d(t.currentPokemon.order),1)]),e("tr",null,[be,e("th",null,[(n(!0),o(x,null,$(p(h),(s,r)=>(n(),y(pe,{key:r,type:s.type},null,8,["type"]))),128))])]),e("tr",null,[fe,e("th",xe,d(t.currentPokemon.height/10)+" m ("+d(p(l))+") ",1)]),e("tr",null,[$e,e("th",ye,d(t.currentPokemon.weight)+" kg ("+d(p(m))+"lb) ",1)]),e("tr",null,[we,e("th",null,[(n(!0),o(x,null,$(t.currentPokemon.abilities,(s,r)=>(n(),o("p",{key:`abilityId${r}`},[e("a",{href:s.ability.url,class:"capitalize text-blue-500 hover:underline"},d(s.ability.name),9,Ce),s.is_hidden?(n(),o("span",Pe," (Hidden Ability) ")):g("",!0)]))),128))])])]))]))}});const Ie=P(je,[["__scopeId","data-v-6164ad40"]]),De={class:"customContainer px-12"},Se={class:"text-4xl capitalize dark:text-neutral-200 text-center mb-8 font-semibold"},Te={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Ee={key:0,class:"h-64 md:h-auto animate-pulse bg-neutral-500/50 dark:bg-neutral-300/50 rounded-md"},ze={key:1,class:"dark:bg-white flex-1 rounded-md dark:shadow-2xl shadow-blue-400 flex flex-col justify-center"},Le=["src","alt"],Ae={class:""},Ne=e("h2",{class:"text-2xl font-semibold dark:text-neutral-200 text-center"}," PokeDex Data ",-1),Me=S({__name:"PokemonDetail",setup(t){const a=F(),c=C({}),h=C([]),l=C(!0);async function m(){return await fetch(`https://pokeapi.co/api/v2/pokemon/${a.params.pokemon}`).then(s=>s.json())}async function i(){let s=await fetch(c.value.species.url).then(r=>r.json());return await fetch(s.evolution_chain.url).then(r=>r.json())}async function u(){c.value=await m(),h.value=await i()}return A(async()=>{await u(),l.value=!1}),N(a,async()=>{l.value=!0,await u(),l.value=!1}),(s,r)=>(n(),o("div",De,[e("h1",Se,d(p(a).params.pokemon),1),e("div",Te,[l.value?(n(),o("div",Ee)):(n(),o("div",ze,[e("img",{src:`https://img.pokemondb.net/artwork/large/${p(a).params.pokemon}.jpg`,class:"w-full h-72 object-contain",alt:`${p(a).params.pokemon}`,loading:"lazy"},null,8,Le)])),e("div",Ae,[Ne,B(Ie,{"current-pokemon":c.value,"is-loading":l.value},null,8,["current-pokemon","is-loading"])])]),l.value?(n(),y(ae,{key:0})):(n(),y(X,{key:1,"evolution-chain":h.value},null,8,["evolution-chain"]))]))}});export{Me as default};
