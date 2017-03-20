// https://d3js.org/d3-hierarchy/ Version 1.1.2. Copyright 2017 Mike Bostock.
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(n.d3=n.d3||{})}(this,function(n){"use strict";function r(n,r){return n.parent===r.parent?1:2}function e(n){return n.reduce(t,0)/n.length}function t(n,r){return n+r.x}function i(n){return 1+n.reduce(u,0)}function u(n,r){return Math.max(n,r.y)}function o(n){for(var r;r=n.children;)n=r[0];return n}function a(n){for(var r;r=n.children;)n=r[r.length-1];return n}function f(n){var r=0,e=n.children,t=e&&e.length;if(t)for(;--t>=0;)r+=e[t].value;else r=1;n.value=r}function c(n,r){if(n===r)return n;var e=n.ancestors(),t=r.ancestors(),i=null;for(n=e.pop(),r=t.pop();n===r;)i=n,n=e.pop(),r=t.pop();return i}function h(n,r){var e,t,i,u,o,a=new v(n),f=+n.value&&(a.value=n.value),c=[a];for(null==r&&(r=p);e=c.pop();)if(f&&(e.value=+e.data.value),(i=r(e.data))&&(o=i.length))for(e.children=new Array(o),u=o-1;u>=0;--u)c.push(t=e.children[u]=new v(i[u])),t.parent=e,t.depth=e.depth+1;return a.eachBefore(s)}function l(){return h(this).eachBefore(d)}function p(n){return n.children}function d(n){n.data=n.data.data}function s(n){var r=0;do n.height=r;while((n=n.parent)&&n.height<++r)}function v(n){this.data=n,this.depth=this.height=0,this.parent=null}function x(n){this._=n,this.next=null}function y(n,r){var e=r.x-n.x,t=r.y-n.y,i=n.r-r.r;return i*i+1e-6>e*e+t*t}function g(n,r){var e,t,i,u=null,o=n.head;switch(r.length){case 1:e=m(r[0]);break;case 2:e=_(r[0],r[1]);break;case 3:e=w(r[0],r[1],r[2])}for(;o;)i=o._,t=o.next,e&&y(e,i)?u=o:(u?(n.tail=u,u.next=null):n.head=n.tail=null,r.push(i),e=g(n,r),r.pop(),n.head?(o.next=n.head,n.head=o):(o.next=null,n.head=n.tail=o),u=n.tail,u.next=t),o=t;return n.tail=u,e}function m(n){return{x:n.x,y:n.y,r:n.r}}function _(n,r){var e=n.x,t=n.y,i=n.r,u=r.x,o=r.y,a=r.r,f=u-e,c=o-t,h=a-i,l=Math.sqrt(f*f+c*c);return{x:(e+u+f/l*h)/2,y:(t+o+c/l*h)/2,r:(l+i+a)/2}}function w(n,r,e){var t=n.x,i=n.y,u=n.r,o=r.x,a=r.y,f=r.r,c=e.x,h=e.y,l=e.r,p=2*(t-o),d=2*(i-a),s=2*(f-u),v=t*t+i*i-u*u-o*o-a*a+f*f,x=2*(t-c),y=2*(i-h),g=2*(l-u),m=t*t+i*i-u*u-c*c-h*h+l*l,_=x*d-p*y,w=(d*m-y*v)/_-t,z=(y*s-d*g)/_,B=(x*v-p*m)/_-i,M=(p*g-x*s)/_,A=z*z+M*M-1,q=2*(w*z+B*M+u),b=w*w+B*B-u*u,k=(-q-Math.sqrt(q*q-4*A*b))/(2*A);return{x:w+z*k+t,y:B+M*k+i,r:k}}function z(n,r,e){var t=n.x,i=n.y,u=r.r+e.r,o=n.r+e.r,a=r.x-t,f=r.y-i,c=a*a+f*f;if(c){var h=.5+((o*=o)-(u*=u))/(2*c),l=Math.sqrt(Math.max(0,2*u*(o+c)-(o-=c)*o-u*u))/(2*c);e.x=t+h*a+l*f,e.y=i+h*f-l*a}else e.x=t+o,e.y=i}function B(n,r){var e=r.x-n.x,t=r.y-n.y,i=n.r+r.r;return i*i-1e-6>e*e+t*t}function M(n,r){for(var e=n._.r;n!==r;)e+=2*(n=n.next)._.r;return e-r._.r}function A(n,r,e){var t=n._,i=n.next._,u=t.r+i.r,o=(t.x*i.r+i.x*t.r)/u-r,a=(t.y*i.r+i.y*t.r)/u-e;return o*o+a*a}function q(n){this._=n,this.next=null,this.previous=null}function b(n){if(!(i=n.length))return 0;var r,e,t,i;if(r=n[0],r.x=0,r.y=0,!(i>1))return r.r;if(e=n[1],r.x=-e.r,e.x=r.r,e.y=0,!(i>2))return r.r+e.r;z(e,r,t=n[2]);var u,o,a,f,c,h,l,p=r.r*r.r,d=e.r*e.r,s=t.r*t.r,v=p+d+s,x=p*r.x+d*e.x+s*t.x,y=p*r.y+d*e.y+s*t.y;r=new q(r),e=new q(e),t=new q(t),r.next=t.previous=e,e.next=r.previous=t,t.next=e.previous=r;n:for(a=3;a<i;++a){z(r._,e._,t=n[a]),t=new q(t),f=e.next,c=r.previous,h=e._.r,l=r._.r;do if(h<=l){if(B(f._,t._)){h+r._.r+e._.r>M(f,e)?r=f:e=f,r.next=e,e.previous=r,--a;continue n}h+=f._.r,f=f.next}else{if(B(c._,t._)){M(r,c)>l+r._.r+e._.r?r=c:e=c,r.next=e,e.previous=r,--a;continue n}l+=c._.r,c=c.previous}while(f!==c.next);for(t.previous=r,t.next=e,r.next=e.previous=e=t,v+=s=t._.r*t._.r,x+=s*t._.x,y+=s*t._.y,p=A(r,u=x/v,o=y/v);(t=t.next)!==e;)(s=A(t,u,o))<p&&(r=t,p=s);e=r.next}for(r=[e._],t=e;(t=t.next)!==e;)r.push(t._);for(t=on(r),a=0;a<i;++a)r=n[a],r.x-=t.x,r.y-=t.y;return t.r}function k(n){return null==n?null:E(n)}function E(n){if("function"!=typeof n)throw new Error;return n}function S(){return 0}function I(n){return Math.sqrt(n.value)}function O(n){return function(r){r.children||(r.r=Math.max(0,+n(r)||0))}}function j(n,r){return function(e){if(t=e.children){var t,i,u,o=t.length,a=n(e)*r||0;if(a)for(i=0;i<o;++i)t[i].r+=a;if(u=b(t),a)for(i=0;i<o;++i)t[i].r-=a;e.r=u+a}}}function R(n){return function(r){var e=r.parent;r.r*=n,e&&(r.x=e.x+n*r.x,r.y=e.y+n*r.y)}}function T(n){return n.id}function D(n){return n.parentId}function L(n,r){return n.parent===r.parent?1:2}function P(n){var r=n.children;return r?r[0]:n.t}function $(n){var r=n.children;return r?r[r.length-1]:n.t}function C(n,r,e){var t=e/(r.i-n.i);r.c-=t,r.s+=e,n.c+=t,r.z+=e,r.m+=e}function F(n){for(var r,e=0,t=0,i=n.children,u=i.length;--u>=0;)r=i[u],r.z+=e,r.m+=e,e+=r.s+(t+=r.c)}function G(n,r,e){return n.a.parent===r.parent?n.a:e}function H(n,r){this._=n,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=r}function J(n){for(var r,e,t,i,u,o=new H(n,0),a=[o];r=a.pop();)if(t=r._.children)for(r.children=new Array(u=t.length),i=u-1;i>=0;--i)a.push(e=r.children[i]=new H(t[i],i)),e.parent=r;return(o.parent=new H(null,0)).children=[o],o}function K(n,r,e,t,i,u){for(var o,a,f,c,h,l,p,d,s,v,x,y=[],g=r.children,m=0,_=0,w=g.length,z=r.value;m<w;){f=i-e,c=u-t;do h=g[_++].value;while(!h&&_<w);for(l=p=h,v=Math.max(c/f,f/c)/(z*n),x=h*h*v,s=Math.max(p/x,x/l);_<w;++_){if(h+=a=g[_].value,a<l&&(l=a),a>p&&(p=a),x=h*h*v,d=Math.max(p/x,x/l),d>s){h-=a;break}s=d}y.push(o={value:h,dice:f<c,children:g.slice(m,_)}),o.dice?ln(o,e,t,i,z?t+=c*h/z:u):gn(o,e,t,z?e+=f*h/z:i,u),z-=h,m=_}return y}var N=function(){function n(n){var r,h=0;n.eachAfter(function(n){var u=n.children;u?(n.x=e(u),n.y=i(u)):(n.x=r?h+=t(n,r):0,n.y=0,r=n)});var l=o(n),p=a(n),d=l.x-t(l,p)/2,s=p.x+t(p,l)/2;return n.eachAfter(c?function(r){r.x=(r.x-n.x)*u,r.y=(n.y-r.y)*f}:function(r){r.x=(r.x-d)/(s-d)*u,r.y=(1-(n.y?r.y/n.y:1))*f})}var t=r,u=1,f=1,c=!1;return n.separation=function(r){return arguments.length?(t=r,n):t},n.size=function(r){return arguments.length?(c=!1,u=+r[0],f=+r[1],n):c?null:[u,f]},n.nodeSize=function(r){return arguments.length?(c=!0,u=+r[0],f=+r[1],n):c?[u,f]:null},n},Q=function(){return this.eachAfter(f)},U=function(n){var r,e,t,i,u=this,o=[u];do for(r=o.reverse(),o=[];u=r.pop();)if(n(u),e=u.children)for(t=0,i=e.length;t<i;++t)o.push(e[t]);while(o.length);return this},V=function(n){for(var r,e,t=this,i=[t];t=i.pop();)if(n(t),r=t.children)for(e=r.length-1;e>=0;--e)i.push(r[e]);return this},W=function(n){for(var r,e,t,i=this,u=[i],o=[];i=u.pop();)if(o.push(i),r=i.children)for(e=0,t=r.length;e<t;++e)u.push(r[e]);for(;i=o.pop();)n(i);return this},X=function(n){return this.eachAfter(function(r){for(var e=+n(r.data)||0,t=r.children,i=t&&t.length;--i>=0;)e+=t[i].value;r.value=e})},Y=function(n){return this.eachBefore(function(r){r.children&&r.children.sort(n)})},Z=function(n){for(var r=this,e=c(r,n),t=[r];r!==e;)r=r.parent,t.push(r);for(var i=t.length;n!==e;)t.splice(i,0,n),n=n.parent;return t},nn=function(){for(var n=this,r=[n];n=n.parent;)r.push(n);return r},rn=function(){var n=[];return this.each(function(r){n.push(r)}),n},en=function(){var n=[];return this.eachBefore(function(r){r.children||n.push(r)}),n},tn=function(){var n=this,r=[];return n.each(function(e){e!==n&&r.push({source:e.parent,target:e})}),r};v.prototype=h.prototype={constructor:v,count:Q,each:U,eachAfter:W,eachBefore:V,sum:X,sort:Y,path:Z,ancestors:nn,descendants:rn,leaves:en,links:tn,copy:l};var un=function(n){for(var r,e=(n=n.slice()).length,t=null,i=t;e;){var u=new x(n[e-1]);i=i?i.next=u:t=u,n[r]=n[--e]}return{head:t,tail:i}},on=function(n){return g(un(n),[])},an=function(n){return b(n),n},fn=function(n){return function(){return n}},cn=function(){function n(n){return n.x=e/2,n.y=t/2,r?n.eachBefore(O(r)).eachAfter(j(i,.5)).eachBefore(R(1)):n.eachBefore(O(I)).eachAfter(j(S,1)).eachAfter(j(i,n.r/Math.min(e,t))).eachBefore(R(Math.min(e,t)/(2*n.r))),n}var r=null,e=1,t=1,i=S;return n.radius=function(e){return arguments.length?(r=k(e),n):r},n.size=function(r){return arguments.length?(e=+r[0],t=+r[1],n):[e,t]},n.padding=function(r){return arguments.length?(i="function"==typeof r?r:fn(+r),n):i},n},hn=function(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)},ln=function(n,r,e,t,i){for(var u,o=n.children,a=-1,f=o.length,c=n.value&&(t-r)/n.value;++a<f;)u=o[a],u.y0=e,u.y1=i,u.x0=r,u.x1=r+=u.value*c},pn=function(){function n(n){var o=n.height+1;return n.x0=n.y0=i,n.x1=e,n.y1=t/o,n.eachBefore(r(t,o)),u&&n.eachBefore(hn),n}function r(n,r){return function(e){e.children&&ln(e,e.x0,n*(e.depth+1)/r,e.x1,n*(e.depth+2)/r);var t=e.x0,u=e.y0,o=e.x1-i,a=e.y1-i;o<t&&(t=o=(t+o)/2),a<u&&(u=a=(u+a)/2),e.x0=t,e.y0=u,e.x1=o,e.y1=a}}var e=1,t=1,i=0,u=!1;return n.round=function(r){return arguments.length?(u=!!r,n):u},n.size=function(r){return arguments.length?(e=+r[0],t=+r[1],n):[e,t]},n.padding=function(r){return arguments.length?(i=+r,n):i},n},dn="$",sn={depth:-1},vn={},xn=function(){function n(n){var t,i,u,o,a,f,c,h=n.length,l=new Array(h),p={};for(i=0;i<h;++i)t=n[i],a=l[i]=new v(t),null!=(f=r(t,i,n))&&(f+="")&&(c=dn+(a.id=f),p[c]=c in p?vn:a);for(i=0;i<h;++i)if(a=l[i],f=e(n[i],i,n),null!=f&&(f+="")){if(o=p[dn+f],!o)throw new Error("missing: "+f);if(o===vn)throw new Error("ambiguous: "+f);o.children?o.children.push(a):o.children=[a],a.parent=o}else{if(u)throw new Error("multiple roots");u=a}if(!u)throw new Error("no root");if(u.parent=sn,u.eachBefore(function(n){n.depth=n.parent.depth+1,--h}).eachBefore(s),u.parent=null,h>0)throw new Error("cycle");return u}var r=T,e=D;return n.id=function(e){return arguments.length?(r=E(e),n):r},n.parentId=function(r){return arguments.length?(e=E(r),n):e},n};H.prototype=Object.create(v.prototype);var yn=function(){function n(n){var t=J(n);if(t.eachAfter(r),t.parent.m=-t.z,t.eachBefore(e),f)n.eachBefore(i);else{var c=n,h=n,l=n;n.eachBefore(function(n){n.x<c.x&&(c=n),n.x>h.x&&(h=n),n.depth>l.depth&&(l=n)});var p=c===h?1:u(c,h)/2,d=p-c.x,s=o/(h.x+p+d),v=a/(l.depth||1);n.eachBefore(function(n){n.x=(n.x+d)*s,n.y=n.depth*v})}return n}function r(n){var r=n.children,e=n.parent.children,i=n.i?e[n.i-1]:null;if(r){F(n);var o=(r[0].z+r[r.length-1].z)/2;i?(n.z=i.z+u(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+u(n._,i._));n.parent.A=t(n,i,n.parent.A||e[0])}function e(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function t(n,r,e){if(r){for(var t,i=n,o=n,a=r,f=i.parent.children[0],c=i.m,h=o.m,l=a.m,p=f.m;a=$(a),i=P(i),a&&i;)f=P(f),o=$(o),o.a=n,t=a.z+l-i.z-c+u(a._,i._),t>0&&(C(G(a,n,e),n,t),c+=t,h+=t),l+=a.m,c+=i.m,p+=f.m,h+=o.m;a&&!$(o)&&(o.t=a,o.m+=l-h),i&&!P(f)&&(f.t=i,f.m+=c-p,e=n)}return e}function i(n){n.x*=o,n.y=n.depth*a}var u=L,o=1,a=1,f=null;return n.separation=function(r){return arguments.length?(u=r,n):u},n.size=function(r){return arguments.length?(f=!1,o=+r[0],a=+r[1],n):f?null:[o,a]},n.nodeSize=function(r){return arguments.length?(f=!0,o=+r[0],a=+r[1],n):f?[o,a]:null},n},gn=function(n,r,e,t,i){for(var u,o=n.children,a=-1,f=o.length,c=n.value&&(i-e)/n.value;++a<f;)u=o[a],u.x0=r,u.x1=t,u.y0=e,u.y1=e+=u.value*c},mn=(1+Math.sqrt(5))/2,_n=function n(r){function e(n,e,t,i,u){K(r,n,e,t,i,u)}return e.ratio=function(r){return n((r=+r)>1?r:1)},e}(mn),wn=function(){function n(n){return n.x0=n.y0=0,n.x1=i,n.y1=u,n.eachBefore(r),o=[0],t&&n.eachBefore(hn),n}function r(n){var r=o[n.depth],t=n.x0+r,i=n.y0+r,u=n.x1-r,p=n.y1-r;u<t&&(t=u=(t+u)/2),p<i&&(i=p=(i+p)/2),n.x0=t,n.y0=i,n.x1=u,n.y1=p,n.children&&(r=o[n.depth+1]=a(n)/2,t+=l(n)-r,i+=f(n)-r,u-=c(n)-r,p-=h(n)-r,u<t&&(t=u=(t+u)/2),p<i&&(i=p=(i+p)/2),e(n,t,i,u,p))}var e=_n,t=!1,i=1,u=1,o=[0],a=S,f=S,c=S,h=S,l=S;return n.round=function(r){return arguments.length?(t=!!r,n):t},n.size=function(r){return arguments.length?(i=+r[0],u=+r[1],n):[i,u]},n.tile=function(r){return arguments.length?(e=E(r),n):e},n.padding=function(r){return arguments.length?n.paddingInner(r).paddingOuter(r):n.paddingInner()},n.paddingInner=function(r){return arguments.length?(a="function"==typeof r?r:fn(+r),n):a},n.paddingOuter=function(r){return arguments.length?n.paddingTop(r).paddingRight(r).paddingBottom(r).paddingLeft(r):n.paddingTop()},n.paddingTop=function(r){return arguments.length?(f="function"==typeof r?r:fn(+r),n):f},n.paddingRight=function(r){return arguments.length?(c="function"==typeof r?r:fn(+r),n):c},n.paddingBottom=function(r){return arguments.length?(h="function"==typeof r?r:fn(+r),n):h},n.paddingLeft=function(r){return arguments.length?(l="function"==typeof r?r:fn(+r),n):l},n},zn=function(n,r,e,t,i){function u(n,r,e,t,i,o,a){if(n>=r-1){var c=f[n];return c.x0=t,c.y0=i,c.x1=o,c.y1=a,void 0}for(var l=h[n],p=e/2+l,d=n+1,s=r-1;d<s;){var v=d+s>>>1;h[v]<p?d=v+1:s=v}var x=h[d]-l,y=e-x;if(a-i>o-t){var g=(i*y+a*x)/e;u(n,d,x,t,i,o,g),u(d,r,y,t,g,o,a)}else{var m=(t*y+o*x)/e;u(n,d,x,t,i,m,a),u(d,r,y,m,i,o,a)}}var o,a,f=n.children,c=f.length,h=new Array(c+1);for(h[0]=a=o=0;o<c;++o)h[o+1]=a+=f[o].value;u(0,c,n.value,r,e,t,i)},Bn=function(n,r,e,t,i){(1&n.depth?gn:ln)(n,r,e,t,i)},Mn=function n(r){function e(n,e,t,i,u){if((o=n._squarify)&&o.ratio===r)for(var o,a,f,c,h,l=-1,p=o.length,d=n.value;++l<p;){for(a=o[l],f=a.children,c=a.value=0,h=f.length;c<h;++c)a.value+=f[c].value;a.dice?ln(a,e,t,i,t+=(u-t)*a.value/d):gn(a,e,t,e+=(i-e)*a.value/d,u),d-=a.value}else n._squarify=o=K(r,n,e,t,i,u),o.ratio=r}return e.ratio=function(r){return n((r=+r)>1?r:1)},e}(mn);n.cluster=N,n.hierarchy=h,n.pack=cn,n.packSiblings=an,n.packEnclose=on,n.partition=pn,n.stratify=xn,n.tree=yn,n.treemap=wn,n.treemapBinary=zn,n.treemapDice=ln,n.treemapSlice=gn,n.treemapSliceDice=Bn,n.treemapSquarify=_n,n.treemapResquarify=Mn,Object.defineProperty(n,"__esModule",{value:!0})});