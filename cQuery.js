o=function(s){m=this;m.length=0;m.splice=Function;m.t=document.querySelectorAll(s);for(i=0;i<m.t.length;i++)m.push(m.t[i]);return m}
r=o.prototype,p=Array.prototype,r.length=0,r.push=p.push,r.splice=p.splice;r.click=function(f){for(i=0,m=this;i<m.t.length;i++){z=m.t[i],z.addEventListener('click',f);}return m}
$=function(s){return new o(s)}
