/*
 MIT-promiscuous-�Ruben Verborgh*/
"u"!=(typeof Promise)[0]||function(l,r){function e(c,b){return(typeof b)[0]==c}function d(c,b){b=function a(f,h,k,n,g,m){n=a.q;if(f!=e)return d(function(a,b){n.push({p:this,r:a,j:b,1:f,0:h})});if(k&&e(l,k)|e(r,k))try{g=k.then}catch(p){h=0,k=p}if(e(l,g)){m=function(b){return function(c){g&&(g=0,a(e,b,c))}};try{g.call(k,m(1),h=m(0))}catch(p){h(p)}}else for(b=function(a,b){return e(l,a=h?a:b)?d(function(b,c){t(this,b,c,k,a)}):c},m=0;m<n.length;)g=n[m++],e(l,f=g[h])?t(g.p,g.r,g.j,k,f):(h?g.r:g.j)(k)};
b.q=[];c.call(c={then:function(a,c){return b(a,c)},"catch":function(a){return b(0,a)}},function(a){b(e,1,a)},function(a){b(e,0,a)});return c}function t(c,b,d,a,f){setTimeout(function(){try{f=(a=f(a))&&e(r,a)|e(l,a)&&a.then,e(l,f)?a==c?d(TypeError()):f.call(a,b,d):b(a)}catch(h){d(h)}})}function q(c){return d(function(b){b(c)})}window.Promise=d;d.resolve=q;d.reject=function(c){return d(function(b,d){d(c)})};d.all=function(c){return d(function(b,d,a,f){f=[];a=c.length||b(f);c.map(function(c,e){q(c).then(function(c){f[e]=
c;--a||b(f)},d)})})};d.race=function(c){return d(function(b,d){c.map(function(a){q(a).then(b,d)})})}}("f","o");