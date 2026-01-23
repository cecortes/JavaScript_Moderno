(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function C(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let b;const L=new Uint8Array(16);function P(){if(!b){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");b=crypto.getRandomValues.bind(crypto)}return b(L)}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),w={randomUUID:S};function E(e,t,c){e=e||{};const d=e.random??e.rng?.()??P();if(d.length<16)throw new Error("Random bytes length must be >= 16");return d[6]=d[6]&15|64,d[8]=d[8]&63|128,C(d)}function $(e,t,c){return w.randomUUID&&!e?w.randomUUID():E(e)}class m{constructor(t){this.id=$(),this.description=t,this.done=!1,this.createdAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new m("Piedra del alma"),new m("Piedra del infinito"),new m("Piedra PicaPiedra"),new m("Piedra Papel o Tijera"),new m("Piedra como la cabecera")],filtro:a.All},A=()=>{T()},U=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error("Option $[filter] is not valid!!!")}},T=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},g=()=>{localStorage.setItem("state",JSON.stringify(l))},k=e=>{if(!e)throw new Error("Description is requiered");l.todos.push(new m(e)),g()},x=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},I=e=>{l.todos=l.todos.filter(t=>t.id!==e),g()},q=()=>{l.todos=l.todos.filter(e=>!e.done),g()},F=(e=a.All)=>{l.filtro=e,g()},O=()=>l.filtro,i={addTodo:k,delCompleted:q,deleteTodo:I,getCurrentFilter:O,getTodos:U,initStore:A,loadStore:T,setFilter:F,toggleTodo:x},D=`<section class="todoapp">
  <header class="header">
    <h1>Tareas</h1>
    <input
      id="new-todo-input"
      class="new-todo"
      placeholder="¿Qué necesita ser hecho?"
      autofocus
    />
  </header>

  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
      <!-- <li class="completed" data-id="abc">
        <div class="view">
          <input class="toggle" type="checkbox" checked />
          <label>Probar JavaScript</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Comprar un unicornio</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li> -->
    </ul>
  </section>

  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be "0 items left" by default -->
    <span class="todo-count"
      ><strong id="pending-count">0</strong> pendiente(s)</span
    >
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected filtro" class="selected" href="#/">Todos</a>
      </li>
      <li>
        <a class="filtro" href="#/active">Pendientes</a>
      </li>
      <li>
        <a class="filtro" href="#/completed">Completados</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed">Borrar completados</button>
  </footer>
</section>

<footer class="info">
  <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
  <!-- Change this out with your name and url ↓ -->
  <p>Creado por <a href="http://todomvc.com">ti</a></p>
  <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
`;let f;const M=(e,t=[])=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`Element: ${e}, not founded`);f.innerHTML="",t.forEach(c=>{f.append(H(c))})},H=e=>{if(!e)throw new Error("Todo Object is requiered");const{done:t,description:c,id:d}=e,o=`
    <div class="view">
      <input class="toggle" type="checkbox" ${t?"checked":""}   />
      <label>${c}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />`,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),t&&n.classList.add("completed"),n};let y;const N=e=>{if(y||(y=document.querySelector(e)),!y)throw new Error(`Element ${e}, not found`);y.innerHTML=i.getTodos(a.Pending).length},p={$ClearCompleted:".clear-completed",$TodoList:".todo-list",$NewTodoInput:"#new-todo-input",$TodoFilters:".filtro",$PendingCount:"#pending-count"},R=e=>{const t=()=>{const s=i.getTodos(i.getCurrentFilter());M(p.$TodoList,s),c()},c=()=>{N(p.$PendingCount)};(()=>{const s=document.createElement("div");s.innerHTML=D,document.querySelector(e).append(s),t()})();const d=document.querySelector(p.$NewTodoInput),o=document.querySelector(p.$TodoList),n=document.querySelector(p.$ClearCompleted),u=document.querySelectorAll(p.$TodoFilters);d.addEventListener("keyup",s=>{s.keyCode!==13||s.target.value.trim()===0||(i.addTodo(s.target.value.trim()),t(),s.target.value="")}),o.addEventListener("click",s=>{const h=s.target.closest("[data-id]");i.toggleTodo(h.getAttribute("data-id")),s.target.classList.contains("destroy")&&i.deleteTodo(h.getAttribute("data-id")),t()}),n.addEventListener("click",s=>{i.delCompleted(),t()}),u.forEach(s=>{s.addEventListener("click",h=>{switch(u.forEach(v=>v.classList.remove("selected")),h.target.classList.add("selected"),h.target.text){case"Todos":i.setFilter(a.All);break;case"Pendientes":i.setFilter(a.Pending);break;case"Completados":i.setFilter(a.Completed);break}t()})})};i.initStore();R("#app");
