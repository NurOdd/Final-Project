import{e as a,u as c,r as m,o as p,c as f,f as e,w as i,v as l,g,h as d,a as h,i as _,F as x}from"./file_index.0aa2f401.js";import{u as b}from"./file_auth.f962f6c1.js";const v=e("h1",null,"Inicia sesi\xF3n",-1),w={class:"mx-auto flex min-h-screen w-full items-center justify-center bg-green-500 text-white"},U={class:"flex w-[30rem] flex-col space-y-10"},y=e("div",{class:"text-center text-4xl font-medium"},"Log in",-1),S={class:"w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"},k={class:"w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"},V=e("a",{href:"#",class:"transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"},"FORGOT PASSWORD?",-1),B={class:"text-center text-lg"},F={__name:"LogIn",setup(C){const n=a("nurietta@gmail.com"),s=a("12345678");return b(),c(),(r,t)=>{const u=m("router-link");return p(),f(x,null,[v,e("main",w,[e("section",U,[y,e("div",S,[i(e("input",{type:"mail",placeholder:"Email",class:"w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none","onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},null,512),[[l,n.value]])]),e("div",k,[i(e("input",{type:"password",placeholder:"Password",class:"w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none","onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o)},null,512),[[l,s.value]])]),e("button",{class:"transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400",onClick:t[2]||(t[2]=g((...o)=>r.SignUpUser&&r.SignUpUser(...o),["prevent"]))}," Enviar "),V,e("p",B,[d(" Don't have an account? "),h(u,{to:{name:"signUp"},class:"font-medium text-indigo-500 underline-offset-4 hover:underline"},{default:_(()=>[d("Sign Up")]),_:1},8,["to"])])])])],64)}}};export{F as default};
