var o=function(s){var m=this;m.length=0;m.splice=function(){};m.t=document.querySelectorAll(s);for(i=0;i<m.t.length;i++)m.push(m.t[i]);return m;}
r=o.prototype,p= Array.prototype,r.length=0,r.push=p.push,r.splice=p.splice;r.click=function(fn){for(i=0,m=this;i<m.t.length;i++){var z=m.t[i],b=z.cloneNode(true);z.parentNode.replaceChild(b,z);b.addEventListener('click',fn);}return m}
var $=function(s){return new o(s)}
