import{u as r,a as u}from"./file_auth.64421ac2.js";import{u as l,o as a,c as s,d as e,F as _,a as m}from"./file_index.e66c79d2.js";const h=e("h1",null,"Navbar",-1),i={__name:"Navbar",setup(c){const o=l(),t=r(),n=async()=>{await u(),t.logout(),console.log("has hecho el logout con exito"),o.push({name:"welcome"})};return(d,g)=>(a(),s(_,null,[h,e("button",{onClick:n},"Log Out")],64))}},p=e("h1",null,"Home",-1),N={__name:"Home",setup(c){return(o,t)=>(a(),s("div",null,[p,m(i)]))}};export{N as default};