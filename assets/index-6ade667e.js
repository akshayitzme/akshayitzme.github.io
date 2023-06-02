(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=new Date().getFullYear()-2002,o={personDetails:[{name:"Akshay",age:c,location:"Kerala, India"}],socialLinks:{instagram:"https://instagram.com/akshayitzme",linkedin:"https://linkedin.com/in/akshayitzme",github:"https://github.com/akshayitzme"},jobDetails:[{company:"Wahni IT Solutions",designation:"Software Developer"}],techStack:[{languages:["JavaScript","TypeScript","Python","PHP"],frameworks:["React","React Native","Vue","Django","Node","Express.js","Next.js","Flask","Laravel"],databases:["MongoDB","MySQL","Postgres","Firebase","Sqlite"],os:["btw","Manjaro","Windows"]}]};window.onload=()=>{const r=document.querySelector("#code");r.textContent=`
const personDetails= ${JSON.stringify(o.personDetails,0,2)}

  
const jobDetails= ${JSON.stringify(o.jobDetails,0,2)}


const socialLinks= ${JSON.stringify(o.socialLinks,0,2)}


const techStack= ${JSON.stringify(o.techStack,0,2)}
  `,hljs.highlightAll()};
