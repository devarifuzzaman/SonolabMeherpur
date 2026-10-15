const q=document.getElementById("q"),sp=document.getElementById("sp");
if(q&&sp){const f=()=>{const t=q.value.trim(),s=sp.value;let n=0;document.querySelectorAll("#docs .doc").forEach(c=>{const ok=(!s||c.dataset.sp===s)&&(!t||c.dataset.t.includes(t));c.hidden=!ok;if(ok)n++});document.getElementById("none").style.display=n?"none":"block"};q.oninput=f;sp.onchange=f}
const fm=document.getElementById("form");
if(fm)fm.onsubmit=e=>{e.preventDefault();document.getElementById("ok").style.display="block";fm.reset()};
