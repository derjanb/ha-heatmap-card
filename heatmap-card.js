(()=>{var ys=Object.create;var _t=Object.defineProperty;var _s=Object.getOwnPropertyDescriptor;var ws=Object.getOwnPropertyNames;var ks=Object.getPrototypeOf,$s=Object.prototype.hasOwnProperty;var xs=(O,s,f)=>s in O?_t(O,s,{enumerable:!0,configurable:!0,writable:!0,value:f}):O[s]=f;var Ms=(O,s)=>()=>(s||O((s={exports:{}}).exports,s),s.exports);var Fs=(O,s,f,m)=>{if(s&&typeof s=="object"||typeof s=="function")for(let b of ws(s))!$s.call(O,b)&&b!==f&&_t(O,b,{get:()=>s[b],enumerable:!(m=_s(s,b))||m.enumerable});return O};var Cs=(O,s,f)=>(f=O!=null?ys(ks(O)):{},Fs(s||!O||!O.__esModule?_t(f,"default",{value:O,enumerable:!0}):f,O));var Le=(O,s,f)=>(xs(O,typeof s!="symbol"?s+"":s,f),f);var rn=Ms((kt,$t)=>{(function(O,s){typeof kt=="object"&&typeof $t<"u"?$t.exports=s():typeof define=="function"&&define.amd?define(s):(O=typeof globalThis<"u"?globalThis:O||self).chroma=s()})(kt,function(){"use strict";for(var O=function(e,t,a){return t===void 0&&(t=0),a===void 0&&(a=1),e<t?t:e>a?a:e},s=O,f={},m=0,b=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];m<b.length;m+=1){var k=b[m];f["[object "+k+"]"]=k.toLowerCase()}var F=function(e){return f[Object.prototype.toString.call(e)]||"object"},j=F,S=F,M=Math.PI,d={clip_rgb:function(e){e._clipped=!1,e._unclipped=e.slice(0);for(var t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=s(e[t],0,255)):t===3&&(e[t]=s(e[t],0,1));return e},limit:O,type:F,unpack:function(e,t){return t===void 0&&(t=null),e.length>=3?Array.prototype.slice.call(e):j(e[0])=="object"&&t?t.split("").filter(function(a){return e[0][a]!==void 0}).map(function(a){return e[0][a]}):e[0]},last:function(e){if(e.length<2)return null;var t=e.length-1;return S(e[t])=="string"?e[t].toLowerCase():null},PI:M,TWOPI:2*M,PITHIRD:M/3,DEG2RAD:M/180,RAD2DEG:180/M},B={format:{},autodetect:[]},ne=d.last,se=d.clip_rgb,te=d.type,oe=B,Ct=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(te(e[0])==="object"&&e[0].constructor&&e[0].constructor===this.constructor)return e[0];var n=ne(e),i=!1;if(!n){i=!0,oe.sorted||(oe.autodetect=oe.autodetect.sort(function(u,h){return h.p-u.p}),oe.sorted=!0);for(var o=0,r=oe.autodetect;o<r.length;o+=1){var l=r[o];if(n=l.test.apply(l,e))break}}if(!oe.format[n])throw new Error("unknown format: "+e);var c=oe.format[n].apply(null,i?e:e.slice(0,-1));a._rgb=se(c),a._rgb.length===3&&a._rgb.push(1)};Ct.prototype.toString=function(){return te(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var C=Ct,Ee=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ee.Color,[null].concat(e)))};Ee.Color=C,Ee.version="2.4.2";var Y=Ee,on=d.unpack,Nt=Math.max,ln=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=on(e,"rgb"),n=a[0],i=a[1],o=a[2],r=1-Nt(n/=255,Nt(i/=255,o/=255)),l=r<1?1/(1-r):0,c=(1-n-r)*l,u=(1-i-r)*l,h=(1-o-r)*l;return[c,u,h,r]},cn=d.unpack,un=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=cn(e,"cmyk"))[0],n=e[1],i=e[2],o=e[3],r=e.length>4?e[4]:1;return o===1?[0,0,0,r]:[a>=1?0:255*(1-a)*(1-o),n>=1?0:255*(1-n)*(1-o),i>=1?0:255*(1-i)*(1-o),r]},fn=Y,Et=C,At=B,hn=d.unpack,dn=d.type,pn=ln;Et.prototype.cmyk=function(){return pn(this._rgb)},fn.cmyk=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Et,[null].concat(e,["cmyk"])))},At.format.cmyk=un,At.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=hn(e,"cmyk"),dn(e)==="array"&&e.length===4)return"cmyk"}});var gn=d.unpack,mn=d.last,qe=function(e){return Math.round(100*e)/100},bn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=gn(e,"hsla"),n=mn(e)||"lsa";return a[0]=qe(a[0]||0),a[1]=qe(100*a[1])+"%",a[2]=qe(100*a[2])+"%",n==="hsla"||a.length>3&&a[3]<1?(a[3]=a.length>3?a[3]:1,n="hsla"):a.length=3,n+"("+a.join(",")+")"},vn=d.unpack,St=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=vn(e,"rgba"))[0],n=e[1],i=e[2];a/=255,n/=255,i/=255;var o,r,l=Math.min(a,n,i),c=Math.max(a,n,i),u=(c+l)/2;return c===l?(o=0,r=Number.NaN):o=u<.5?(c-l)/(c+l):(c-l)/(2-c-l),a==c?r=(n-i)/(c-l):n==c?r=2+(i-a)/(c-l):i==c&&(r=4+(a-n)/(c-l)),(r*=60)<0&&(r+=360),e.length>3&&e[3]!==void 0?[r,o,u,e[3]]:[r,o,u]},yn=d.unpack,_n=d.last,wn=bn,kn=St,Ye=Math.round,$n=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=yn(e,"rgba"),n=_n(e)||"rgb";return n.substr(0,3)=="hsl"?wn(kn(a),n):(a[0]=Ye(a[0]),a[1]=Ye(a[1]),a[2]=Ye(a[2]),(n==="rgba"||a.length>3&&a[3]<1)&&(a[3]=a.length>3?a[3]:1,n="rgba"),n+"("+a.slice(0,n==="rgb"?3:4).join(",")+")")},xn=d.unpack,Ge=Math.round,Dt=function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var n,i,o,r=(t=xn(t,"hsl"))[0],l=t[1],c=t[2];if(l===0)n=i=o=255*c;else{var u=[0,0,0],h=[0,0,0],v=c<.5?c*(1+l):c+l-c*l,_=2*c-v,y=r/360;u[0]=y+1/3,u[1]=y,u[2]=y-1/3;for(var g=0;g<3;g++)u[g]<0&&(u[g]+=1),u[g]>1&&(u[g]-=1),6*u[g]<1?h[g]=_+6*(v-_)*u[g]:2*u[g]<1?h[g]=v:3*u[g]<2?h[g]=_+(v-_)*(2/3-u[g])*6:h[g]=_;n=(e=[Ge(255*h[0]),Ge(255*h[1]),Ge(255*h[2])])[0],i=e[1],o=e[2]}return t.length>3?[n,i,o,t[3]]:[n,i,o,1]},Ot=Dt,Pt=B,It=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Rt=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Tt=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Bt=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Lt=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,jt=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Vt=Math.round,qt=function(e){var t;if(e=e.toLowerCase().trim(),Pt.format.named)try{return Pt.format.named(e)}catch{}if(t=e.match(It)){for(var a=t.slice(1,4),n=0;n<3;n++)a[n]=+a[n];return a[3]=1,a}if(t=e.match(Rt)){for(var i=t.slice(1,5),o=0;o<4;o++)i[o]=+i[o];return i}if(t=e.match(Tt)){for(var r=t.slice(1,4),l=0;l<3;l++)r[l]=Vt(2.55*r[l]);return r[3]=1,r}if(t=e.match(Bt)){for(var c=t.slice(1,5),u=0;u<3;u++)c[u]=Vt(2.55*c[u]);return c[3]=+c[3],c}if(t=e.match(Lt)){var h=t.slice(1,4);h[1]*=.01,h[2]*=.01;var v=Ot(h);return v[3]=1,v}if(t=e.match(jt)){var _=t.slice(1,4);_[1]*=.01,_[2]*=.01;var y=Ot(_);return y[3]=+t[4],y}};qt.test=function(e){return It.test(e)||Rt.test(e)||Tt.test(e)||Bt.test(e)||Lt.test(e)||jt.test(e)};var Mn=Y,Yt=C,Gt=B,Fn=d.type,Cn=$n,Wt=qt;Yt.prototype.css=function(e){return Cn(this._rgb,e)},Mn.css=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Yt,[null].concat(e,["css"])))},Gt.format.css=Wt,Gt.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Fn(e)==="string"&&Wt.test(e))return"css"}});var Ht=C,Nn=Y,En=d.unpack;B.format.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=En(e,"rgba");return a[0]*=255,a[1]*=255,a[2]*=255,a},Nn.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ht,[null].concat(e,["gl"])))},Ht.prototype.gl=function(){var e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};var An=d.unpack,Sn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=An(e,"rgb"),i=n[0],o=n[1],r=n[2],l=Math.min(i,o,r),c=Math.max(i,o,r),u=c-l,h=100*u/255,v=l/(255-u)*100;return u===0?a=Number.NaN:(i===c&&(a=(o-r)/u),o===c&&(a=2+(r-i)/u),r===c&&(a=4+(i-o)/u),(a*=60)<0&&(a+=360)),[a,h,v]},Dn=d.unpack,On=Math.floor,Pn=function(){for(var e,t,a,n,i,o,r=[],l=arguments.length;l--;)r[l]=arguments[l];var c,u,h,v=(r=Dn(r,"hcg"))[0],_=r[1],y=r[2];y*=255;var g=255*_;if(_===0)c=u=h=y;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360);var $=On(v/=60),w=v-$,I=y*(1-_),D=I+g*(1-w),q=I+g*w,W=I+g;switch($){case 0:c=(e=[W,q,I])[0],u=e[1],h=e[2];break;case 1:c=(t=[D,W,I])[0],u=t[1],h=t[2];break;case 2:c=(a=[I,W,q])[0],u=a[1],h=a[2];break;case 3:c=(n=[I,D,W])[0],u=n[1],h=n[2];break;case 4:c=(i=[q,I,W])[0],u=i[1],h=i[2];break;case 5:c=(o=[W,I,D])[0],u=o[1],h=o[2]}}return[c,u,h,r.length>3?r[3]:1]},In=d.unpack,Rn=d.type,Tn=Y,zt=C,Ut=B,Bn=Sn;zt.prototype.hcg=function(){return Bn(this._rgb)},Tn.hcg=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(zt,[null].concat(e,["hcg"])))},Ut.format.hcg=Pn,Ut.autodetect.push({p:1,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=In(e,"hcg"),Rn(e)==="array"&&e.length===3)return"hcg"}});var Ln=d.unpack,jn=d.last,Ae=Math.round,Jt=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Ln(e,"rgba"),n=a[0],i=a[1],o=a[2],r=a[3],l=jn(e)||"auto";r===void 0&&(r=1),l==="auto"&&(l=r<1?"rgba":"rgb");var c=(n=Ae(n))<<16|(i=Ae(i))<<8|(o=Ae(o)),u="000000"+c.toString(16);u=u.substr(u.length-6);var h="0"+Ae(255*r).toString(16);switch(h=h.substr(h.length-2),l.toLowerCase()){case"rgba":return"#"+u+h;case"argb":return"#"+h+u;default:return"#"+u}},Vn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,qn=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Qt=function(e){if(e.match(Vn)){e.length!==4&&e.length!==7||(e=e.substr(1)),e.length===3&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,1]}if(e.match(qn)){e.length!==5&&e.length!==9||(e=e.substr(1)),e.length===4&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);var a=parseInt(e,16);return[a>>24&255,a>>16&255,a>>8&255,Math.round((255&a)/255*100)/100]}throw new Error("unknown hex color: "+e)},Yn=Y,Kt=C,Gn=d.type,Zt=B,Wn=Jt;Kt.prototype.hex=function(e){return Wn(this._rgb,e)},Yn.hex=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Kt,[null].concat(e,["hex"])))},Zt.format.hex=Qt,Zt.autodetect.push({p:4,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Gn(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});var Hn=d.unpack,Xt=d.TWOPI,zn=Math.min,Un=Math.sqrt,Jn=Math.acos,Qn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=Hn(e,"rgb"),i=n[0],o=n[1],r=n[2],l=zn(i/=255,o/=255,r/=255),c=(i+o+r)/3,u=c>0?1-l/c:0;return u===0?a=NaN:(a=(i-o+(i-r))/2,a/=Un((i-o)*(i-o)+(i-r)*(o-r)),a=Jn(a),r>o&&(a=Xt-a),a/=Xt),[360*a,u,c]},Kn=d.unpack,We=d.limit,de=d.TWOPI,He=d.PITHIRD,pe=Math.cos,Zn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,i,o=(e=Kn(e,"hsi"))[0],r=e[1],l=e[2];return isNaN(o)&&(o=0),isNaN(r)&&(r=0),o>360&&(o-=360),o<0&&(o+=360),(o/=360)<1/3?n=1-((i=(1-r)/3)+(a=(1+r*pe(de*o)/pe(He-de*o))/3)):o<2/3?i=1-((a=(1-r)/3)+(n=(1+r*pe(de*(o-=1/3))/pe(He-de*o))/3)):a=1-((n=(1-r)/3)+(i=(1+r*pe(de*(o-=2/3))/pe(He-de*o))/3)),[255*(a=We(l*a*3)),255*(n=We(l*n*3)),255*(i=We(l*i*3)),e.length>3?e[3]:1]},Xn=d.unpack,er=d.type,tr=Y,ea=C,ta=B,ar=Qn;ea.prototype.hsi=function(){return ar(this._rgb)},tr.hsi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ea,[null].concat(e,["hsi"])))},ta.format.hsi=Zn,ta.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Xn(e,"hsi"),er(e)==="array"&&e.length===3)return"hsi"}});var nr=d.unpack,rr=d.type,ir=Y,aa=C,na=B,sr=St;aa.prototype.hsl=function(){return sr(this._rgb)},ir.hsl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(aa,[null].concat(e,["hsl"])))},na.format.hsl=Dt,na.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=nr(e,"hsl"),rr(e)==="array"&&e.length===3)return"hsl"}});var or=d.unpack,lr=Math.min,cr=Math.max,ur=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,i,o=(e=or(e,"rgb"))[0],r=e[1],l=e[2],c=lr(o,r,l),u=cr(o,r,l),h=u-c;return i=u/255,u===0?(a=Number.NaN,n=0):(n=h/u,o===u&&(a=(r-l)/h),r===u&&(a=2+(l-o)/h),l===u&&(a=4+(o-r)/h),(a*=60)<0&&(a+=360)),[a,n,i]},fr=d.unpack,hr=Math.floor,dr=function(){for(var e,t,a,n,i,o,r=[],l=arguments.length;l--;)r[l]=arguments[l];var c,u,h,v=(r=fr(r,"hsv"))[0],_=r[1],y=r[2];if(y*=255,_===0)c=u=h=y;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360);var g=hr(v/=60),$=v-g,w=y*(1-_),I=y*(1-_*$),D=y*(1-_*(1-$));switch(g){case 0:c=(e=[y,D,w])[0],u=e[1],h=e[2];break;case 1:c=(t=[I,y,w])[0],u=t[1],h=t[2];break;case 2:c=(a=[w,y,D])[0],u=a[1],h=a[2];break;case 3:c=(n=[w,I,y])[0],u=n[1],h=n[2];break;case 4:c=(i=[D,w,y])[0],u=i[1],h=i[2];break;case 5:c=(o=[y,w,I])[0],u=o[1],h=o[2]}}return[c,u,h,r.length>3?r[3]:1]},pr=d.unpack,gr=d.type,mr=Y,ra=C,ia=B,br=ur;ra.prototype.hsv=function(){return br(this._rgb)},mr.hsv=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ra,[null].concat(e,["hsv"])))},ia.format.hsv=dr,ia.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=pr(e,"hsv"),gr(e)==="array"&&e.length===3)return"hsv"}});var Se={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ge=Se,vr=d.unpack,sa=Math.pow,ze=function(e){return(e/=255)<=.04045?e/12.92:sa((e+.055)/1.055,2.4)},Ue=function(e){return e>ge.t3?sa(e,1/3):e/ge.t2+ge.t0},yr=function(e,t,a){return e=ze(e),t=ze(t),a=ze(a),[Ue((.4124564*e+.3575761*t+.1804375*a)/ge.Xn),Ue((.2126729*e+.7151522*t+.072175*a)/ge.Yn),Ue((.0193339*e+.119192*t+.9503041*a)/ge.Zn)]},oa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=vr(e,"rgb"),n=a[0],i=a[1],o=a[2],r=yr(n,i,o),l=r[0],c=r[1],u=r[2],h=116*c-16;return[h<0?0:h,500*(l-c),200*(c-u)]},me=Se,_r=d.unpack,wr=Math.pow,Je=function(e){return 255*(e<=.00304?12.92*e:1.055*wr(e,1/2.4)-.055)},Qe=function(e){return e>me.t1?e*e*e:me.t2*(e-me.t0)},la=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,i,o=(e=_r(e,"lab"))[0],r=e[1],l=e[2];return n=(o+16)/116,a=isNaN(r)?n:n+r/500,i=isNaN(l)?n:n-l/200,n=me.Yn*Qe(n),a=me.Xn*Qe(a),i=me.Zn*Qe(i),[Je(3.2404542*a-1.5371385*n-.4985314*i),Je(-.969266*a+1.8760108*n+.041556*i),Je(.0556434*a-.2040259*n+1.0572252*i),e.length>3?e[3]:1]},kr=d.unpack,$r=d.type,xr=Y,ca=C,ua=B,Mr=oa;ca.prototype.lab=function(){return Mr(this._rgb)},xr.lab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ca,[null].concat(e,["lab"])))},ua.format.lab=la,ua.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=kr(e,"lab"),$r(e)==="array"&&e.length===3)return"lab"}});var Fr=d.unpack,Cr=d.RAD2DEG,Nr=Math.sqrt,Er=Math.atan2,Ar=Math.round,fa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Fr(e,"lab"),n=a[0],i=a[1],o=a[2],r=Nr(i*i+o*o),l=(Er(o,i)*Cr+360)%360;return Ar(1e4*r)===0&&(l=Number.NaN),[n,r,l]},Sr=d.unpack,Dr=oa,Or=fa,Pr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Sr(e,"rgb"),n=a[0],i=a[1],o=a[2],r=Dr(n,i,o),l=r[0],c=r[1],u=r[2];return Or(l,c,u)},Ir=d.unpack,Rr=d.DEG2RAD,Tr=Math.sin,Br=Math.cos,ha=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Ir(e,"lch"),n=a[0],i=a[1],o=a[2];return isNaN(o)&&(o=0),[n,Br(o*=Rr)*i,Tr(o)*i]},Lr=d.unpack,jr=ha,Vr=la,da=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=Lr(e,"lch"))[0],n=e[1],i=e[2],o=jr(a,n,i),r=o[0],l=o[1],c=o[2],u=Vr(r,l,c),h=u[0],v=u[1],_=u[2];return[h,v,_,e.length>3?e[3]:1]},qr=d.unpack,Yr=da,Gr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=qr(e,"hcl").reverse();return Yr.apply(void 0,a)},Wr=d.unpack,Hr=d.type,pa=Y,De=C,Ke=B,ga=Pr;De.prototype.lch=function(){return ga(this._rgb)},De.prototype.hcl=function(){return ga(this._rgb).reverse()},pa.lch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(De,[null].concat(e,["lch"])))},pa.hcl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(De,[null].concat(e,["hcl"])))},Ke.format.lch=da,Ke.format.hcl=Gr,["lch","hcl"].forEach(function(e){return Ke.autodetect.push({p:2,test:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];if(t=Wr(t,e),Hr(t)==="array"&&t.length===3)return e}})});var ma={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},ba=B,zr=d.type,$e=ma,Ur=Qt,Jr=Jt;C.prototype.name=function(){for(var e=Jr(this._rgb,"rgb"),t=0,a=Object.keys($e);t<a.length;t+=1){var n=a[t];if($e[n]===e)return n.toLowerCase()}return e},ba.format.named=function(e){if(e=e.toLowerCase(),$e[e])return Ur($e[e]);throw new Error("unknown color name: "+e)},ba.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&zr(e)==="string"&&$e[e.toLowerCase()])return"named"}});var Qr=d.unpack,Kr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Qr(e,"rgb"),n=a[0],i=a[1],o=a[2];return(n<<16)+(i<<8)+o},Zr=d.type,Xr=function(e){if(Zr(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,255&e,1];throw new Error("unknown num color: "+e)},ei=Y,va=C,ya=B,ti=d.type,ai=Kr;va.prototype.num=function(){return ai(this._rgb)},ei.num=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(va,[null].concat(e,["num"])))},ya.format.num=Xr,ya.autodetect.push({p:5,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e.length===1&&ti(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});var ni=Y,Ze=C,_a=B,wa=d.unpack,ka=d.type,$a=Math.round;Ze.prototype.rgb=function(e){return e===void 0&&(e=!0),e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map($a)},Ze.prototype.rgba=function(e){return e===void 0&&(e=!0),this._rgb.slice(0,4).map(function(t,a){return a<3?e===!1?t:$a(t):t})},ni.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ze,[null].concat(e,["rgb"])))},_a.format.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=wa(e,"rgba");return a[3]===void 0&&(a[3]=1),a},_a.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=wa(e,"rgba"),ka(e)==="array"&&(e.length===3||e.length===4&&ka(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});var Oe=Math.log,xa=function(e){var t,a,n,i=e/100;return i<66?(t=255,a=i<6?0:-155.25485562709179-.44596950469579133*(a=i-2)+104.49216199393888*Oe(a),n=i<20?0:.8274096064007395*(n=i-10)-254.76935184120902+115.67994401066147*Oe(n)):(t=351.97690566805693+.114206453784165*(t=i-55)-40.25366309332127*Oe(t),a=325.4494125711974+.07943456536662342*(a=i-50)-28.0852963507957*Oe(a),n=255),[t,a,n,1]},ri=xa,ii=d.unpack,si=Math.round,oi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a,n=ii(e,"rgb"),i=n[0],o=n[2],r=1e3,l=4e4,c=.4;l-r>c;){var u=ri(a=.5*(l+r));u[2]/u[0]>=o/i?l=a:r=a}return si(a)},Xe=Y,Pe=C,et=B,li=oi;Pe.prototype.temp=Pe.prototype.kelvin=Pe.prototype.temperature=function(){return li(this._rgb)},Xe.temp=Xe.kelvin=Xe.temperature=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Pe,[null].concat(e,["temp"])))},et.format.temp=et.format.kelvin=et.format.temperature=xa;var ci=d.unpack,tt=Math.cbrt,ui=Math.pow,fi=Math.sign,Ma=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=ci(e,"rgb"),n=a[0],i=a[1],o=a[2],r=[at(n/255),at(i/255),at(o/255)],l=r[0],c=r[1],u=r[2],h=tt(.4122214708*l+.5363325363*c+.0514459929*u),v=tt(.2119034982*l+.6806995451*c+.1073969566*u),_=tt(.0883024619*l+.2817188376*c+.6299787005*u);return[.2104542553*h+.793617785*v-.0040720468*_,1.9779984951*h-2.428592205*v+.4505937099*_,.0259040371*h+.7827717662*v-.808675766*_]};function at(e){var t=Math.abs(e);return t<.04045?e/12.92:(fi(e)||1)*ui((t+.055)/1.055,2.4)}var hi=d.unpack,Ie=Math.pow,di=Math.sign,Fa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=hi(e,"lab"))[0],n=e[1],i=e[2],o=Ie(a+.3963377774*n+.2158037573*i,3),r=Ie(a-.1055613458*n-.0638541728*i,3),l=Ie(a-.0894841775*n-1.291485548*i,3);return[255*nt(4.0767416621*o-3.3077115913*r+.2309699292*l),255*nt(-1.2684380046*o+2.6097574011*r-.3413193965*l),255*nt(-.0041960863*o-.7034186147*r+1.707614701*l),e.length>3?e[3]:1]};function nt(e){var t=Math.abs(e);return t>.0031308?(di(e)||1)*(1.055*Ie(t,1/2.4)-.055):12.92*e}var pi=d.unpack,gi=d.type,mi=Y,Ca=C,Na=B,bi=Ma;Ca.prototype.oklab=function(){return bi(this._rgb)},mi.oklab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ca,[null].concat(e,["oklab"])))},Na.format.oklab=Fa,Na.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=pi(e,"oklab"),gi(e)==="array"&&e.length===3)return"oklab"}});var vi=d.unpack,yi=Ma,_i=fa,wi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=vi(e,"rgb"),n=a[0],i=a[1],o=a[2],r=yi(n,i,o),l=r[0],c=r[1],u=r[2];return _i(l,c,u)},ki=d.unpack,$i=ha,xi=Fa,Mi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=ki(e,"lch"))[0],n=e[1],i=e[2],o=$i(a,n,i),r=o[0],l=o[1],c=o[2],u=xi(r,l,c),h=u[0],v=u[1],_=u[2];return[h,v,_,e.length>3?e[3]:1]},Fi=d.unpack,Ci=d.type,Ni=Y,Ea=C,Aa=B,Ei=wi;Ea.prototype.oklch=function(){return Ei(this._rgb)},Ni.oklch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ea,[null].concat(e,["oklch"])))},Aa.format.oklch=Mi,Aa.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Fi(e,"oklch"),Ci(e)==="array"&&e.length===3)return"oklch"}});var Sa=C,Ai=d.type;Sa.prototype.alpha=function(e,t){return t===void 0&&(t=!1),e!==void 0&&Ai(e)==="number"?t?(this._rgb[3]=e,this):new Sa([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},C.prototype.clipped=function(){return this._rgb._clipped||!1};var le=C,Si=Se;le.prototype.darken=function(e){e===void 0&&(e=1);var t=this.lab();return t[0]-=Si.Kn*e,new le(t,"lab").alpha(this.alpha(),!0)},le.prototype.brighten=function(e){return e===void 0&&(e=1),this.darken(-e)},le.prototype.darker=le.prototype.darken,le.prototype.brighter=le.prototype.brighten,C.prototype.get=function(e){var t=e.split("."),a=t[0],n=t[1],i=this[a]();if(n){var o=a.indexOf(n)-(a.substr(0,2)==="ok"?2:0);if(o>-1)return i[o];throw new Error("unknown channel "+n+" in mode "+a)}return i};var be=C,Di=d.type,Oi=Math.pow;be.prototype.luminance=function(e){if(e!==void 0&&Di(e)==="number"){if(e===0)return new be([0,0,0,this._rgb[3]],"rgb");if(e===1)return new be([255,255,255,this._rgb[3]],"rgb");var t=this.luminance(),a=20,n=function(o,r){var l=o.interpolate(r,.5,"rgb"),c=l.luminance();return Math.abs(e-c)<1e-7||!a--?l:c>e?n(o,l):n(l,r)},i=(t>e?n(new be([0,0,0]),this):n(this,new be([255,255,255]))).rgb();return new be(i.concat([this._rgb[3]]))}return Pi.apply(void 0,this._rgb.slice(0,3))};var Pi=function(e,t,a){return .2126*(e=rt(e))+.7152*(t=rt(t))+.0722*(a=rt(a))},rt=function(e){return(e/=255)<=.03928?e/12.92:Oi((e+.055)/1.055,2.4)},Q={},Da=C,Oa=d.type,Re=Q,Pa=function(e,t,a){a===void 0&&(a=.5);for(var n=[],i=arguments.length-3;i-- >0;)n[i]=arguments[i+3];var o=n[0]||"lrgb";if(Re[o]||n.length||(o=Object.keys(Re)[0]),!Re[o])throw new Error("interpolation mode "+o+" is not defined");return Oa(e)!=="object"&&(e=new Da(e)),Oa(t)!=="object"&&(t=new Da(t)),Re[o](e,t,a).alpha(e.alpha()+a*(t.alpha()-e.alpha()))},Ia=C,Ii=Pa;Ia.prototype.mix=Ia.prototype.interpolate=function(e,t){t===void 0&&(t=.5);for(var a=[],n=arguments.length-2;n-- >0;)a[n]=arguments[n+2];return Ii.apply(void 0,[this,e,t].concat(a))};var Ra=C;Ra.prototype.premultiply=function(e){e===void 0&&(e=!1);var t=this._rgb,a=t[3];return e?(this._rgb=[t[0]*a,t[1]*a,t[2]*a,a],this):new Ra([t[0]*a,t[1]*a,t[2]*a,a],"rgb")};var it=C,Ri=Se;it.prototype.saturate=function(e){e===void 0&&(e=1);var t=this.lch();return t[1]+=Ri.Kn*e,t[1]<0&&(t[1]=0),new it(t,"lch").alpha(this.alpha(),!0)},it.prototype.desaturate=function(e){return e===void 0&&(e=1),this.saturate(-e)};var Ta=C,Ba=d.type;Ta.prototype.set=function(e,t,a){a===void 0&&(a=!1);var n=e.split("."),i=n[0],o=n[1],r=this[i]();if(o){var l=i.indexOf(o)-(i.substr(0,2)==="ok"?2:0);if(l>-1){if(Ba(t)=="string")switch(t.charAt(0)){case"+":case"-":r[l]+=+t;break;case"*":r[l]*=+t.substr(1);break;case"/":r[l]/=+t.substr(1);break;default:r[l]=+t}else{if(Ba(t)!=="number")throw new Error("unsupported value for Color.set");r[l]=t}var c=new Ta(r,i);return a?(this._rgb=c._rgb,this):c}throw new Error("unknown channel "+o+" in mode "+i)}return r};var Ti=C;Q.rgb=function(e,t,a){var n=e._rgb,i=t._rgb;return new Ti(n[0]+a*(i[0]-n[0]),n[1]+a*(i[1]-n[1]),n[2]+a*(i[2]-n[2]),"rgb")};var Bi=C,st=Math.sqrt,ve=Math.pow;Q.lrgb=function(e,t,a){var n=e._rgb,i=n[0],o=n[1],r=n[2],l=t._rgb,c=l[0],u=l[1],h=l[2];return new Bi(st(ve(i,2)*(1-a)+ve(c,2)*a),st(ve(o,2)*(1-a)+ve(u,2)*a),st(ve(r,2)*(1-a)+ve(h,2)*a),"rgb")};var Li=C;Q.lab=function(e,t,a){var n=e.lab(),i=t.lab();return new Li(n[0]+a*(i[0]-n[0]),n[1]+a*(i[1]-n[1]),n[2]+a*(i[2]-n[2]),"lab")};var ji=C,ye=function(e,t,a,n){var i,o,r,l,c,u,h,v,_,y,g,$,w;return n==="hsl"?(r=e.hsl(),l=t.hsl()):n==="hsv"?(r=e.hsv(),l=t.hsv()):n==="hcg"?(r=e.hcg(),l=t.hcg()):n==="hsi"?(r=e.hsi(),l=t.hsi()):n==="lch"||n==="hcl"?(n="hcl",r=e.hcl(),l=t.hcl()):n==="oklch"&&(r=e.oklch().reverse(),l=t.oklch().reverse()),n.substr(0,1)!=="h"&&n!=="oklch"||(c=(i=r)[0],h=i[1],_=i[2],u=(o=l)[0],v=o[1],y=o[2]),isNaN(c)||isNaN(u)?isNaN(c)?isNaN(u)?$=Number.NaN:($=u,_!=1&&_!=0||n=="hsv"||(g=v)):($=c,y!=1&&y!=0||n=="hsv"||(g=h)):$=c+a*(u>c&&u-c>180?u-(c+360):u<c&&c-u>180?u+360-c:u-c),g===void 0&&(g=h+a*(v-h)),w=_+a*(y-_),new ji(n==="oklch"?[w,g,$]:[$,g,w],n)},Vi=ye,La=function(e,t,a){return Vi(e,t,a,"lch")};Q.lch=La,Q.hcl=La;var qi=C;Q.num=function(e,t,a){var n=e.num(),i=t.num();return new qi(n+a*(i-n),"num")};var Yi=ye;Q.hcg=function(e,t,a){return Yi(e,t,a,"hcg")};var Gi=ye;Q.hsi=function(e,t,a){return Gi(e,t,a,"hsi")};var Wi=ye;Q.hsl=function(e,t,a){return Wi(e,t,a,"hsl")};var Hi=ye;Q.hsv=function(e,t,a){return Hi(e,t,a,"hsv")};var zi=C;Q.oklab=function(e,t,a){var n=e.oklab(),i=t.oklab();return new zi(n[0]+a*(i[0]-n[0]),n[1]+a*(i[1]-n[1]),n[2]+a*(i[2]-n[2]),"oklab")};var Ui=ye;Q.oklch=function(e,t,a){return Ui(e,t,a,"oklch")};var ot=C,Ji=d.clip_rgb,lt=Math.pow,ct=Math.sqrt,ut=Math.PI,ja=Math.cos,Va=Math.sin,Qi=Math.atan2,Ki=function(e,t){for(var a=e.length,n=[0,0,0,0],i=0;i<e.length;i++){var o=e[i],r=t[i]/a,l=o._rgb;n[0]+=lt(l[0],2)*r,n[1]+=lt(l[1],2)*r,n[2]+=lt(l[2],2)*r,n[3]+=l[3]*r}return n[0]=ct(n[0]),n[1]=ct(n[1]),n[2]=ct(n[2]),n[3]>.9999999&&(n[3]=1),new ot(Ji(n))},K=Y,_e=d.type,Zi=Math.pow,ft=function(e){var t="rgb",a=K("#ccc"),n=0,i=[0,1],o=[],r=[0,0],l=!1,c=[],u=!1,h=0,v=1,_=!1,y={},g=!0,$=1,w=function(p){if((p=p||["#fff","#000"])&&_e(p)==="string"&&K.brewer&&K.brewer[p.toLowerCase()]&&(p=K.brewer[p.toLowerCase()]),_e(p)==="array"){p.length===1&&(p=[p[0],p[0]]),p=p.slice(0);for(var x=0;x<p.length;x++)p[x]=K(p[x]);o.length=0;for(var A=0;A<p.length;A++)o.push(A/(p.length-1))}return W(),c=p},I=function(p){return p},D=function(p){return p},q=function(p,x){var A,N;if(x==null&&(x=!1),isNaN(p)||p===null)return a;if(x)N=p;else if(l&&l.length>2){var z=function(L){if(l!=null){for(var T=l.length-1,U=0;U<T&&L>=l[U];)U++;return U-1}return 0}(p);N=z/(l.length-2)}else N=v!==h?(p-h)/(v-h):1;N=D(N),x||(N=I(N)),$!==1&&(N=Zi(N,$)),N=r[0]+N*(1-r[0]-r[1]),N=Math.min(1,Math.max(0,N));var V=Math.floor(1e4*N);if(g&&y[V])A=y[V];else{if(_e(c)==="array")for(var R=0;R<o.length;R++){var P=o[R];if(N<=P){A=c[R];break}if(N>=P&&R===o.length-1){A=c[R];break}if(N>P&&N<o[R+1]){N=(N-P)/(o[R+1]-P),A=K.interpolate(c[R],c[R+1],N,t);break}}else _e(c)==="function"&&(A=c(N));g&&(y[V]=A)}return A},W=function(){return y={}};w(e);var E=function(p){var x=K(q(p));return u&&x[u]?x[u]():x};return E.classes=function(p){if(p!=null){if(_e(p)==="array")l=p,i=[p[0],p[p.length-1]];else{var x=K.analyze(i);l=p===0?[x.min,x.max]:K.limits(x,"e",p)}return E}return l},E.domain=function(p){if(!arguments.length)return i;h=p[0],v=p[p.length-1],o=[];var x=c.length;if(p.length===x&&h!==v)for(var A=0,N=Array.from(p);A<N.length;A+=1){var z=N[A];o.push((z-h)/(v-h))}else{for(var V=0;V<x;V++)o.push(V/(x-1));if(p.length>2){var R=p.map(function(L,T){return T/(p.length-1)}),P=p.map(function(L){return(L-h)/(v-h)});P.every(function(L,T){return R[T]===L})||(D=function(L){if(L<=0||L>=1)return L;for(var T=0;L>=P[T+1];)T++;var U=(L-P[T])/(P[T+1]-P[T]);return R[T]+U*(R[T+1]-R[T])})}}return i=[h,v],E},E.mode=function(p){return arguments.length?(t=p,W(),E):t},E.range=function(p,x){return w(p),E},E.out=function(p){return u=p,E},E.spread=function(p){return arguments.length?(n=p,E):n},E.correctLightness=function(p){return p==null&&(p=!0),_=p,W(),I=_?function(x){for(var A=q(0,!0).lab()[0],N=q(1,!0).lab()[0],z=A>N,V=q(x,!0).lab()[0],R=A+(N-A)*x,P=V-R,L=0,T=1,U=20;Math.abs(P)>.01&&U-- >0;)z&&(P*=-1),P<0?(L=x,x+=.5*(T-x)):(T=x,x+=.5*(L-x)),V=q(x,!0).lab()[0],P=V-R;return x}:function(x){return x},E},E.padding=function(p){return p!=null?(_e(p)==="number"&&(p=[p,p]),r=p,E):r},E.colors=function(p,x){arguments.length<2&&(x="hex");var A=[];if(arguments.length===0)A=c.slice(0);else if(p===1)A=[E(.5)];else if(p>1){var N=i[0],z=i[1]-N;A=Xi(0,p,!1).map(function(T){return E(N+T/(p-1)*z)})}else{e=[];var V=[];if(l&&l.length>2)for(var R=1,P=l.length,L=1<=P;L?R<P:R>P;L?R++:R--)V.push(.5*(l[R-1]+l[R]));else V=i;A=V.map(function(T){return E(T)})}return K[x]&&(A=A.map(function(T){return T[x]()})),A},E.cache=function(p){return p!=null?(g=p,E):g},E.gamma=function(p){return p!=null?($=p,E):$},E.nodata=function(p){return p!=null?(a=K(p),E):a},E};function Xi(e,t,a){for(var n=[],i=e<t,o=a?i?t+1:t-1:t,r=e;i?r<o:r>o;i?r++:r--)n.push(r);return n}var xe=C,es=ft,ht=Y,Z=function(e,t,a){if(!Z[a])throw new Error("unknown blend mode "+a);return Z[a](e,t)},re=function(e){return function(t,a){var n=ht(a).rgb(),i=ht(t).rgb();return ht.rgb(e(n,i))}},ie=function(e){return function(t,a){var n=[];return n[0]=e(t[0],a[0]),n[1]=e(t[1],a[1]),n[2]=e(t[2],a[2]),n}};Z.normal=re(ie(function(e){return e})),Z.multiply=re(ie(function(e,t){return e*t/255})),Z.screen=re(ie(function(e,t){return 255*(1-(1-e/255)*(1-t/255))})),Z.overlay=re(ie(function(e,t){return t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255))})),Z.darken=re(ie(function(e,t){return e>t?t:e})),Z.lighten=re(ie(function(e,t){return e>t?e:t})),Z.dodge=re(ie(function(e,t){return e===255||(e=t/255*255/(1-e/255))>255?255:e})),Z.burn=re(ie(function(e,t){return 255*(1-(1-t/255)/(e/255))}));for(var ts=Z,dt=d.type,as=d.clip_rgb,ns=d.TWOPI,rs=Math.pow,is=Math.sin,ss=Math.cos,qa=Y,os=C,ls=Math.floor,cs=Math.random,pt=F,Ya=Math.log,us=Math.pow,fs=Math.floor,hs=Math.abs,Ga=function(e,t){t===void 0&&(t=null);var a={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0};return pt(e)==="object"&&(e=Object.values(e)),e.forEach(function(n){t&&pt(n)==="object"&&(n=n[t]),n==null||isNaN(n)||(a.values.push(n),a.sum+=n,n<a.min&&(a.min=n),n>a.max&&(a.max=n),a.count+=1)}),a.domain=[a.min,a.max],a.limits=function(n,i){return Wa(a,n,i)},a},Wa=function(e,t,a){t===void 0&&(t="equal"),a===void 0&&(a=7),pt(e)=="array"&&(e=Ga(e));var n=e.min,i=e.max,o=e.values.sort(function(vt,yt){return vt-yt});if(a===1)return[n,i];var r=[];if(t.substr(0,1)==="c"&&(r.push(n),r.push(i)),t.substr(0,1)==="e"){r.push(n);for(var l=1;l<a;l++)r.push(n+l/a*(i-n));r.push(i)}else if(t.substr(0,1)==="l"){if(n<=0)throw new Error("Logarithmic scales are only possible for values > 0");var c=Math.LOG10E*Ya(n),u=Math.LOG10E*Ya(i);r.push(n);for(var h=1;h<a;h++)r.push(us(10,c+h/a*(u-c)));r.push(i)}else if(t.substr(0,1)==="q"){r.push(n);for(var v=1;v<a;v++){var _=(o.length-1)*v/a,y=fs(_);if(y===_)r.push(o[y]);else{var g=_-y;r.push(o[y]*(1-g)+o[y+1]*g)}}r.push(i)}else if(t.substr(0,1)==="k"){var $,w=o.length,I=new Array(w),D=new Array(a),q=!0,W=0,E=null;(E=[]).push(n);for(var p=1;p<a;p++)E.push(n+p/a*(i-n));for(E.push(i);q;){for(var x=0;x<a;x++)D[x]=0;for(var A=0;A<w;A++)for(var N=o[A],z=Number.MAX_VALUE,V=void 0,R=0;R<a;R++){var P=hs(E[R]-N);P<z&&(z=P,V=R),D[V]++,I[A]=V}for(var L=new Array(a),T=0;T<a;T++)L[T]=null;for(var U=0;U<w;U++)L[$=I[U]]===null?L[$]=o[U]:L[$]+=o[U];for(var ce=0;ce<a;ce++)L[ce]*=1/D[ce];q=!1;for(var ue=0;ue<a;ue++)if(L[ue]!==E[ue]){q=!0;break}E=L,++W>200&&(q=!1)}for(var fe={},Me=0;Me<a;Me++)fe[Me]=[];for(var we=0;we<w;we++)fe[$=I[we]].push(o[we]);for(var X=[],Fe=0;Fe<a;Fe++)X.push(fe[Fe][0]),X.push(fe[Fe][fe[Fe].length-1]);X=X.sort(function(vt,yt){return vt-yt}),r.push(X[0]);for(var mt=1;mt<X.length;mt+=2){var bt=X[mt];isNaN(bt)||r.indexOf(bt)!==-1||r.push(bt)}}return r},Ha={analyze:Ga,limits:Wa},za=C,Ua=C,ae=Math.sqrt,G=Math.pow,ds=Math.min,ps=Math.max,Ja=Math.atan2,Qa=Math.abs,Te=Math.cos,Ka=Math.sin,gs=Math.exp,Za=Math.PI,Xa=C,ms=C,en=Y,tn=ft,bs={cool:function(){return tn([en.hsl(180,1,.9),en.hsl(250,.7,.4)])},hot:function(){return tn(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Be={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},gt=0,an=Object.keys(Be);gt<an.length;gt+=1){var nn=an[gt];Be[nn.toLowerCase()]=Be[nn]}var vs=Be,H=Y;return H.average=function(e,t,a){t===void 0&&(t="lrgb"),a===void 0&&(a=null);var n=e.length;a||(a=Array.from(new Array(n)).map(function(){return 1}));var i=n/a.reduce(function($,w){return $+w});if(a.forEach(function($,w){a[w]*=i}),e=e.map(function($){return new ot($)}),t==="lrgb")return Ki(e,a);for(var o=e.shift(),r=o.get(t),l=[],c=0,u=0,h=0;h<r.length;h++)if(r[h]=(r[h]||0)*a[0],l.push(isNaN(r[h])?0:a[0]),t.charAt(h)==="h"&&!isNaN(r[h])){var v=r[h]/180*ut;c+=ja(v)*a[0],u+=Va(v)*a[0]}var _=o.alpha()*a[0];e.forEach(function($,w){var I=$.get(t);_+=$.alpha()*a[w+1];for(var D=0;D<r.length;D++)if(!isNaN(I[D]))if(l[D]+=a[w+1],t.charAt(D)==="h"){var q=I[D]/180*ut;c+=ja(q)*a[w+1],u+=Va(q)*a[w+1]}else r[D]+=I[D]*a[w+1]});for(var y=0;y<r.length;y++)if(t.charAt(y)==="h"){for(var g=Qi(u/l[y],c/l[y])/ut*180;g<0;)g+=360;for(;g>=360;)g-=360;r[y]=g}else r[y]=r[y]/l[y];return _/=n,new ot(r,t).alpha(_>.99999?1:_,!0)},H.bezier=function(e){var t=function(a){var n,i,o,r,l,c,u;if((a=a.map(function(g){return new xe(g)})).length===2)n=a.map(function(g){return g.lab()}),l=n[0],c=n[1],r=function(g){var $=[0,1,2].map(function(w){return l[w]+g*(c[w]-l[w])});return new xe($,"lab")};else if(a.length===3)i=a.map(function(g){return g.lab()}),l=i[0],c=i[1],u=i[2],r=function(g){var $=[0,1,2].map(function(w){return(1-g)*(1-g)*l[w]+2*(1-g)*g*c[w]+g*g*u[w]});return new xe($,"lab")};else if(a.length===4){var h;o=a.map(function(g){return g.lab()}),l=o[0],c=o[1],u=o[2],h=o[3],r=function(g){var $=[0,1,2].map(function(w){return(1-g)*(1-g)*(1-g)*l[w]+3*(1-g)*(1-g)*g*c[w]+3*(1-g)*g*g*u[w]+g*g*g*h[w]});return new xe($,"lab")}}else{if(!(a.length>=5))throw new RangeError("No point in running bezier with only one color.");var v,_,y;v=a.map(function(g){return g.lab()}),y=a.length-1,_=function(g){for(var $=[1,1],w=1;w<g;w++){for(var I=[1],D=1;D<=$.length;D++)I[D]=($[D]||0)+$[D-1];$=I}return $}(y),r=function(g){var $=1-g,w=[0,1,2].map(function(I){return v.reduce(function(D,q,W){return D+_[W]*Math.pow($,y-W)*Math.pow(g,W)*q[I]},0)});return new xe(w,"lab")}}return r}(e);return t.scale=function(){return es(t)},t},H.blend=ts,H.cubehelix=function(e,t,a,n,i){e===void 0&&(e=300),t===void 0&&(t=-1.5),a===void 0&&(a=1),n===void 0&&(n=1),i===void 0&&(i=[0,1]);var o,r=0;dt(i)==="array"?o=i[1]-i[0]:(o=0,i=[i,i]);var l=function(c){var u=ns*((e+120)/360+t*c),h=rs(i[0]+o*c,n),v=(r!==0?a[0]+c*r:a)*h*(1-h)/2,_=ss(u),y=is(u);return qa(as([255*(h+v*(-.14861*_+1.78277*y)),255*(h+v*(-.29227*_-.90649*y)),255*(h+v*(1.97294*_)),1]))};return l.start=function(c){return c==null?e:(e=c,l)},l.rotations=function(c){return c==null?t:(t=c,l)},l.gamma=function(c){return c==null?n:(n=c,l)},l.hue=function(c){return c==null?a:(dt(a=c)==="array"?(r=a[1]-a[0])===0&&(a=a[1]):r=0,l)},l.lightness=function(c){return c==null?i:(dt(c)==="array"?(i=c,o=c[1]-c[0]):(i=[c,c],o=0),l)},l.scale=function(){return qa.scale(l)},l.hue(a),l},H.mix=H.interpolate=Pa,H.random=function(){for(var e="#",t=0;t<6;t++)e+="0123456789abcdef".charAt(ls(16*cs()));return new os(e,"hex")},H.scale=ft,H.analyze=Ha.analyze,H.contrast=function(e,t){e=new za(e),t=new za(t);var a=e.luminance(),n=t.luminance();return a>n?(a+.05)/(n+.05):(n+.05)/(a+.05)},H.deltaE=function(e,t,a,n,i){a===void 0&&(a=1),n===void 0&&(n=1),i===void 0&&(i=1);var o=function(X){return 360*X/(2*Za)},r=function(X){return 2*Za*X/360};e=new Ua(e),t=new Ua(t);var l=Array.from(e.lab()),c=l[0],u=l[1],h=l[2],v=Array.from(t.lab()),_=v[0],y=v[1],g=v[2],$=(c+_)/2,w=(ae(G(u,2)+G(h,2))+ae(G(y,2)+G(g,2)))/2,I=.5*(1-ae(G(w,7)/(G(w,7)+G(25,7)))),D=u*(1+I),q=y*(1+I),W=ae(G(D,2)+G(h,2)),E=ae(G(q,2)+G(g,2)),p=(W+E)/2,x=o(Ja(h,D)),A=o(Ja(g,q)),N=x>=0?x:x+360,z=A>=0?A:A+360,V=Qa(N-z)>180?(N+z+360)/2:(N+z)/2,R=1-.17*Te(r(V-30))+.24*Te(r(2*V))+.32*Te(r(3*V+6))-.2*Te(r(4*V-63)),P=z-N;P=Qa(P)<=180?P:z<=N?P+360:P-360,P=2*ae(W*E)*Ka(r(P)/2);var L=_-c,T=E-W,U=1+.015*G($-50,2)/ae(20+G($-50,2)),ce=1+.045*p,ue=1+.015*p*R,fe=30*gs(-G((V-275)/25,2)),Me=-(2*ae(G(p,7)/(G(p,7)+G(25,7))))*Ka(2*r(fe)),we=ae(G(L/(a*U),2)+G(T/(n*ce),2)+G(P/(i*ue),2)+Me*(T/(n*ce))*(P/(i*ue)));return ps(0,ds(100,we))},H.distance=function(e,t,a){a===void 0&&(a="lab"),e=new Xa(e),t=new Xa(t);var n=e.get(a),i=t.get(a),o=0;for(var r in n){var l=(n[r]||0)-(i[r]||0);o+=l*l}return Math.sqrt(o)},H.limits=Ha.limits,H.valid=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];try{return new(Function.prototype.bind.apply(ms,[null].concat(e))),!0}catch{return!1}},H.scales=bs,H.colors=ma,H.brewer=vs,H})});var wt=[{key:"black hot",name:"Black hot",steps:[{color:"#F5F5F5",value:0},{color:"#242124",value:1}],type:"relative"},{device_class:"carbon_dioxide",documentation:{text:`<p>CO\u2082 levels reflect the amount of fresh air in a space. High levels
indicate insufficient ventilation. The specific effects of higher
concentrations of CO\u2082 are highly individual, but studies have shown
that levels over 1000 ppm cause cognitive impairment in many
individuals.</p>
<p>Levels over 2000 ppm have been linked to health effects in some
studies. There is no conclusive sum of evidence.</p>
<p>This scale caps at 3000 ppm, as a maximum level that'd signify
fairly bad air. Levels above 5000 ppm are considered dangerous
in workplace standards (f.x OSHA in the US) and are indicative
of greatly insufficient ventilation overall.</p>`},key:"carbon dioxide",name:"CO\u2082, indoor exposure",steps:[{color:"#6d9b17",value:520},{color:"#FFBF00",value:1e3},{color:"#cf0000",value:1400},{color:"#5b0f8c",value:3e3}],type:"absolute"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl bugn",name:"ColorBrewer 5-class BuGn",steps:[{color:"#edf8fb",value:0},{color:"#b2e2e2",value:.25},{color:"#66c2a4",value:.5},{color:"#2ca25f",value:.75},{color:"#006d2c",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl bupu",name:"ColorBrewer 5-class BuPu",steps:[{color:"#edf8fb",value:0},{color:"#b3cde3",value:.25},{color:"#8c96c6",value:.5},{color:"#8856a7",value:.75},{color:"#810f7c",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl rdpu",name:"ColorBrewer 5-class BuPu",steps:[{color:"#feebe2",value:0},{color:"#fbb4b9",value:.25},{color:"#f768a1",value:.5},{color:"#c51b8a",value:.75},{color:"#7a0177",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl ylorbr",name:"ColorBrewer 5-class YlOrBr",steps:[{color:"#ffffd4",value:0},{color:"#fed98e",value:.25},{color:"#fe9929",value:.5},{color:"#d95f0e",value:.75},{color:"#993404",value:1}],type:"relative"},{device_class:"humidity",documentation:{text:`<p>This heatmap color map reflects indoor humidity levels. Ideal comfort
conditions are typically found between 40% to 60% humidity. Remember,
comfort can vary based on location, season, and personal preferences.</p>`},key:"humidity",name:"Humidity",steps:[{color:"#cf0000",value:10},{color:"#f3e2de",value:40},{color:"#ffffff",value:50},{color:"#cfd6e7",value:60},{color:"#0f3489",value:90}],type:"absolute",unit:"%"},{device_class:"temperature",documentation:{text:`<p>Indoor temperatures related to human comfort levels. Amalgation
of multiple sources. As always with temperature, individual
factors such as generics, clothing and activity level have a big
impact.</p>`},key:"indoor temperature",name:"Indoor temperature",steps:[{color:"#0f3489",value:12},{color:"#595ea3",value:16},{color:"#7374b0",value:18},{color:"#F5F5F5",value:20},{color:"#F5F5F5",value:22},{color:"#ea755a",value:24},{color:"#cf0000",value:28}],type:"absolute",unit:"\xB0C"},{key:"iron red",name:"Iron red",steps:[{color:"#230382",value:0},{color:"#921C96",value:.1},{color:"#C93F55",value:.25},{color:"#DF6D2D",value:.4},{color:"#EFB03D",value:.6},{color:"#F9DE52",value:.75},{color:"#F5F5D4",value:1}],type:"relative"},{device_class:"temperature",documentation:{text:`<p>Outdoor temperatures related to human comfort and risk levels.</p>
<p>Note that this works best when using apparent (or <a href="https://en.wikipedia.org/wiki/Wet-bulb_temperature" rel="noopener" target="_blank">wet bulb</a>)
temperature and taking wind chill into account, not just <a href="https://en.wikipedia.org/wiki/Dry-bulb_temperature" rel="noopener" target="_blank">dry bulb</a>
temperature, such as a like a thermometer reading.</p>
<p>Individual factors such as clothing, activity level, wind speed and
exposure to sun all play a part in how we perceive temperature.
See this is a rough guideline.</p>`},key:"outdoor temperature",name:"Outdoor temperature",steps:[{color:"#0f3489",legend:"Severe risk of frostbite",value:-30},{color:"#595ea3",legend:"Risk of frostbite",value:0},{color:"#7374b0",legend:"Risk of hypothermia",value:10},{color:"#7374b0",legend:"Chilling temperatures",value:15},{color:"#F5F5F5",value:22},{color:"#F5F5F5",value:27},{color:"#ea755a",legend:"Risk of heat cramps or exhaustion",value:32},{color:"#cf0000",legend:"Heat exhaustion more likely",value:40},{color:"#5b0f8c",legend:"Heat stroke risk",value:54}],type:"absolute",unit:"\xB0C"},{device_class:"pm25",documentation:{text:`<p>This scale is based on an aggregate of the World Health Organization
<a href="https://www.who.int/publications/i/item/9789240034228" rel="noopener" target="_blank">global air quality guidelines</a>
and <a href="https://www.who.int/publications/i/item/9789240000278" rel="noopener" target="_blank">Personal interventions and risk communication on Air Pollution</a>
reports.</p>
<p>The lowest part of the range map to the AQG (Air Quality Goal)
target, a PM<sub>2.5</sub> level of &lt;5 \u03BCg/m<sup>3</sup> which is considered relatively safe.
The upper part, &gt;100 \u03BCg/m<sup>3</sup>, is considered the level where the
health benefits of regular physical activity is greatly offset by the
PM<sub>2.5</sub> exposure.</p>
<p>Note that the level of &lt;5 \u03BCg/m<sup>3</sup> is the AQG exposure
level on an annaul basis. The WHO also has a 24-hour AQG level of
&lt;15 \u03BCg/m<sup>3</sup> which is not included in this scale. As we're
trending patterns over time, the annual target made more sense for
the heatmap.</p>`},key:"pm25",name:"PM2.5 (WHO aggregate)",steps:[{color:"#6d9b17",legend:"AQG level",value:5},{color:"#FFBF00",legend:"Interim target 2",value:25},{color:"#cf0000",value:50},{color:"#5b0f8c",legend:"Risk level",value:100}],type:"absolute",unit:"\xB5g/m\xB3"},{key:"stoplight",name:"Stoplight",steps:[{color:"#6d9b17",value:0},{color:"#fde74c",value:.5},{color:"#cf0000",value:1}],type:"relative"},{key:"stoplight inverted",name:"Stoplight Inverted",steps:[{color:"#cf0000",value:0},{color:"#fde74c",value:.5},{color:"#6d9b17",value:1}],type:"relative"},{device_class:"volatile_organic_compounds",documentation:{text:`<p>VOC (Volatile Organic Compounds) levels represent the concentration of
certain chemicals in the air. High VOC levels suggest poor indoor air
quality and can be caused by many sources, such as cleaning supplies,
paint, and furnishings.</p>
<p>The specific effects of VOC exposure can vary greatly from person to
person, but high levels can cause symptoms like headaches, dizziness,
and even long-term health effects. Many studies suggest that keeping
VOC levels under 200 \u03BCg/m\xB3 can mitigate these effects, although this
is not a strict limit.</p>
<p>Levels over 500 \u03BCg/m\xB3 are often associated with more severe health
effects in various studies. However, there is no universally agreed
upon threshold for dangerous VOC levels.</p>
<p>This scale caps at 1000 \u03BCg/m\xB3, as this level would suggest very poor
indoor air quality. Extreme VOC levels, such as those over 5000 \u03BCg/m\xB3,
are indicative of a severe lack of ventilation and are associated with
major health risks, although such high levels are not typically
encountered in residential settings.</p>`},key:"volatile organic compounds",name:"VOC, indoor exposure",steps:[{color:"#6d9b17",value:50},{color:"#FFBF00",value:300},{color:"#cf0000",value:500},{color:"#5b0f8c",value:1e3}],type:"absolute"},{key:"white hot",name:"White hot",steps:[{color:"#242124",value:0},{color:"#F5F5F5",value:1}],type:"relative"},{device_class:"temperature",documentation:{license:{name:"Creative Commons Attribution-ShareAlike License 3.0",url:"https://creativecommons.org/licenses/by-sa/3.0/"},text:`<p>Wikipedia's <a href="https://en.wikipedia.org/wiki/Module:Weather" rel="noopener" target="_blank">Weather</a> template temperature graph color scheme, cool2 version.
Slightly modified by setting the minimum to -60\xB0C, instead of -90\xB0C.</p>`},key:"wikipedia climate cool2",name:"Wikipedia climate, cool2",steps:[{color:"#0000A2",value:-60},{color:"#0000D7",value:-43},{color:"#6565FF",value:-24},{color:"#FCFCFF",value:4},{color:"#FF7F00",value:23},{color:"#FF2C00",value:35},{color:"#F60000",value:42},{color:"#000000",value:56}],type:"absolute",unit:"\xB0C"}];var he={apparent_power:{},atmospheric_pressure:{},aqi:{},battery:{},carbon_dioxide:{default:"carbon dioxide"},carbon_monoxide:{},current:{},date:{},duration:{},energy:{},frequency:{},gas:{},humidity:{},illuminance:{},monetary:{},nitrogen_dioxide:{},nitrogen_monoxide:{},nitrous_oxide:{},ozone:{},pm1:{},pm10:{},pm25:{default:"pm25"},power_factor:{},power:{},pressure:{},reactive_power:{},signal_strength:{},sulphur_dioxide:{},temperature:{default:"outdoor temperature",unit_system:"temperature"},timestamp:{},volatile_organic_compounds:{},voltage:{}};var xt=Cs(rn()),je={temperature:{"\xB0C":{"\xB0F":O=>parseInt(O*1.8+32)},"\xB0F":{"\xB0C":O=>parseInt((O-32)/1.8)}}},ke=class{constructor(){this.default_scale="iron red",this.scale_by_key={};for(let s of wt)this.scale_by_key[s.key]=s}get_scale(s,f="",m={}){if(s===void 0&&(s=this.default_scale),typeof s=="string")return this.generate_scale(this.scale_by_key[s],f,m);var b=this.generate_scale(s,f,m);return delete b.docs,b}generate_scale(s,f=void 0,m={}){var b=[],k=[],F=s.unit,j=M=>M;if(s.unit&&f&&m){let M=he[f].unit_system,d=m[M];M&&d&&s.unit!==d&&je[M]&&je[M][s.unit]&&je[M][s.unit][d]&&(F=d,j=je[M][s.unit][d])}for(let M of s.steps)b.push(M.color),"value"in M&&(M.value=j(M.value),k.push(M.value));var S;return k.length>0&&k.length==b.length?S=xt.default.scale(b).domain(k):S=xt.default.scale(b),{gradient:S,type:s.type??"relative",name:s.name,key:s.key,steps:s.steps,unit:F,docs:s.documentation,css:this.legend_css_by_gradient(S)}}legend_css_by_gradient(s){var f=[];for(let[m,b]of s.colors(21).entries())f.push(`${b} ${m*5}%`);return f.join(", ")}defaults_for(s){return s in he&&"default"in he[s]?he[s].default:this.default_scale}get_by(s,f){var m=wt.filter(b=>b[s]===f);return m.map(b=>this.get_scale(b))}};var Mt=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),ee=Mt.prototype.html,Ve=Mt.prototype.css,sn=[{recorder:"5minute",steps:12},{recorder:"hour",steps:1}],Ce=class extends Mt{hass_inited=!1;scales=new ke;static get properties(){return{hass:{},config:{},grid:[],grid_status:void 0,meta:{},tooltipOpen:!1,selected_element_data:""}}period=sn[1];headers=[];max_title_chars=6;render(){return this.grid===void 0&&(this.grid=[]),ee`
            <ha-card header="${this.meta.title}" id="card" @click=${s=>s.target&&s.target.id=="card"&&this.handlePopup(s,this.config.entity)}>
                <div class="card-content">
                    <table>
                        <thead>
                            <tr class="hr${this.myhass.locale.time_format}">
                                <th class="hm-row-title">${this.myhass.localize("ui.dialogs.helper_settings.input_datetime.date")}</th>
                                ${this.date_table_headers()}
                            </tr>
                        </thead>
                        <tbody>
                    ${this.grid.map((s,f)=>(s.date.length>this.max_title_chars&&(this.max_title_chars=s.date.length),ee`<tr>
                            <td class="hm-row-title">${s.date}</td>
                            ${s.vals.map((m,b)=>{var k="hm-box",F=m;if(F===null){var j=" "+(this.meta.null_as_0?"null-as-0":"null");k+=j}if(this.meta.scale.type==="relative"){let M=this.meta.data.max-this.meta.data.min;F=(m-this.meta.data.min)/M,F<0&&(F=0),F>1&&(F=1)}let S=this.meta.scale.gradient(F);return ee`<td @click="${this.toggle_tooltip}" class="${k}" data-val="${m}" data-row="${f}" data-col="${b}" style="color: ${S}"></td>`})}
                        </tr>`))}
                        </tbody>
                    </table>
                    ${this.render_status()}
                    ${this.render_legend()}
                    ${this.render_tooltip()}
                    <style>${this.render_dynamic_styles()}</style>
                </div>
            </ha-card>
        `}date_table_headers(){return this.myhass.locale.time_format==="12"?ee`
                <th colspan="${this.period.steps}">12<br/>AM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">4<br/>AM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">8<br/>AM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">12<br/>PM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">4<br/>PM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">8<br/>PM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">11<br/>PM</th>
            `:ee`
                <th colspan="${this.period.steps}">00</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">04</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">08</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">12</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">16</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">20</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">23</th>
            `}render_dynamic_styles(){let s=Math.min(1,6/this.max_title_chars*1.3),f=Math.floor(this.max_title_chars*s*2)/2,m=Ve([f]),b=Ve([(f/this.max_title_chars).toFixed(2)]);return Ve`
            .hm-row-title {
                width: ${m}ch;
            }
            td.hm-row-title {
                transform: scale(${b}, 1);
                transform-origin: left;
            }
        `}render_status(){if(this.grid_status)return ee`<h3>${this.grid_status}</h3>`}render_legend(){if(this.config.display.legend===!1)return;let s=this.legend_scale(this.meta.scale);return ee`
            <div class="legend-container">
                <div id="legend" style="background: linear-gradient(90deg, ${this.meta.scale.css})"></div>
                <div class="tick-container">
                    ${s.map(f=>ee`
                        <div class="legend-tick" style="left: ${f[0]}%;"">
                            <div class="caption">${f[1]} ${this.meta.scale.unit}</div>
                        </div>
                        <span class="legend-shadow">${f[1]} ${this.meta.scale.unit}</span>`)}
                </div>
            </div>
        `}render_tooltip(){var s="";if(this.selected_element_data){let F=this.grid[this.selected_element_data.row]?.date,S=parseInt(this.selected_element_data.col)*Math.round(60/this.period.steps);var f=new Date("2022-03-20 00:00:00").setMinutes(S),m=new Date("2022-03-20 00:00:00").setMinutes(S+Math.round(60/this.period.steps)),b;this.selected_element_data.val===""?b=this.myhass.localize("ui.components.data-table.no-data"):b=`${+parseFloat(this.selected_element_data.val).toFixed(2)} ${this.meta.scale.unit||this.meta.unit_of_measurement}`;var k=new Intl.DateTimeFormat("sv-SE",{hour:"numeric",minute:"numeric"});this.myhass.locale.time_format=="12"&&(k=new Intl.DateTimeFormat("en-US",{hour:"numeric"})),s=ee`<div class="meta">${F} ${k.format(f)} - ${k.format(m)}</div><div class="value">${b}</div>`}return ee`
            <div id="tooltip" class="${this.tooltipOpen?"active":"hidden"}">${s}</div>
        `}legend_scale(s){let f=this.meta.data.max>100?0:2;var m=[];if(s.type==="relative")for(var b=this.meta.data.max-this.meta.data.min,k=0;k<=5;k++)m.push([k*20,+Number(this.meta.data.min+b/5*k).toFixed(f)]);else{var F=s.steps[0].value,j=s.steps[s.steps.length-1].value,S=j-F;for(let M of s.steps)m.push([(M.value-F)/S*100,M.value])}return m}toggle_tooltip(s){let f=this.renderRoot.querySelector("#selected"),m=this.renderRoot.querySelector("#card"),b=this.renderRoot.querySelector("#tooltip"),k=s.target;if(f&&(f.removeAttribute("id"),f===s.target)){this.tooltipOpen=!1;return}this.tooltipOpen=!0,k.id="selected";var F=k.getBoundingClientRect(),j=m.getBoundingClientRect(),S=F.top-j.top,M=F.left-j.left;b.style.top=(S-50-F.height).toString()+"px",b.style.left=(M-F.width/2-70).toString()+"px",this.selected_element_data=k.dataset}set hass(s){if(this.hass_inited!==!0){this.myhass=s,this.meta=this.populate_meta(s),this.meta.high_res=="true"&&(this.period=sn[0]);var f=[this.config.entity];this.get_recorder(f,this.config.days),this.hass_inited=!0}}get_recorder(s,f){let m=new Date;this.grid_status=void 0;var b=new Date(m-f*864e5);b.setHours(23,0,0),this.myhass.callWS({type:"recorder/statistics_during_period",statistic_ids:s,period:this.period.recorder,units:{energy:"kWh",temperature:this.myhass.config.unit_system.temperature},start_time:b.toISOString(),types:["sum","mean"]}).then(k=>{for(let F of s){let j=k[F];if(j===void 0){this.grid=[],this.grid_status=this.myhass.localize("ui.components.data-table.no-data");continue}switch(this.meta.state_class){case"measurement":this.grid=this.calculate_measurement_values(j);break;case"total":case"total_increasing":this.grid=this.calculate_increasing_values(j);break;default:throw new Error(`Unknown state_class defined (${this.meta.state_class} for ${F}.`)}}(this.config.data.max===void 0||this.config.data.max==="auto")&&(this.meta.data.max=this.max_from(this.grid)),(this.config.data.min===void 0||this.config.data.min==="auto")&&(this.meta.data.min=this.min_from(this.grid))})}max_from(s){var f=[];for(let m of s)f=f.concat(m.vals);return Math.max(...f)}min_from(s){var f=[];for(let m of s)f=f.concat(m.vals);return Math.min(...f)}format_date(s){let f=this.config.date_format_string||"",m={YYYY:()=>s.getFullYear(),YY:()=>String(s.getFullYear()).slice(-2),MMMM:()=>new Intl.DateTimeFormat(this.meta.language,{month:"long"}).format(s),MMM:()=>new Intl.DateTimeFormat(this.meta.language,{month:"short"}).format(s),MM:()=>String(s.getMonth()+1).padStart(2,"0"),M:()=>s.getMonth()+1,DD:()=>String(s.getDate()).padStart(2,"0"),D:()=>s.getDate(),dddd:()=>new Intl.DateTimeFormat(this.meta.language,{weekday:"long"}).format(s),ddd:()=>new Intl.DateTimeFormat(this.meta.language,{weekday:"short"}).format(s),dd:()=>new Intl.DateTimeFormat(this.meta.language,{weekday:"short"}).format(s).substring(0,1)};if(f){let b=new RegExp(Object.keys(m).join("|"),"g");return f.replace(b,k=>m[k]())}else return s.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"})}calculate_measurement_values(s){var f=[],m=[],b=null,k,F=Math.round(60/this.period.steps),j=24*this.period.steps;let S=s.length<j;for(let M of s){let d=new Date(M.start);k=d.getHours()*this.period.steps+Math.round(d.getMinutes()/F);let B=this.format_date(d);B!==b&&(b!==null||S)&&(m=Array(j).fill(null),f.push({date:B,nativeDate:d,vals:m})),m[k]=M.mean,b=B}return m.splice(k+1),f.reverse()}calculate_increasing_values(s){var f=[],m=null,b=[],k=null,F,j=Math.round(60/this.period.steps),S=24*this.period.steps;this.meta.smoothing&&(s=this.smooth_consumer_data(s));let M=s.length<S;for(let B of s){let ne=new Date(B.start);F=ne.getHours()*this.period.steps+Math.round(ne.getMinutes()/j);let se=this.format_date(ne);if(se!==k&&(m!==null||M)&&(b=Array(S).fill(0),f.push({date:se,nativeDate:ne,vals:b})),m!==null){var d=(B.sum-m).toFixed(2);b[F]=d}m=B.sum,k=se}return b.splice(F+1),f.reverse()}smooth_consumer_data(s){let f=JSON.parse(JSON.stringify(s)),m=s[s.length-1].sum-s[0].sum,b=[],k=0;for(let S=1;S<s.length;S++)s[S].sum!==s[k].sum&&(b.push({start:k,end:S-1}),k=S);b.push({start:k,end:s.length-1});let F=s[0].sum;for(let S=0;S<b.length-1;S++){let M=b[S],d=s[b[S+1].start].sum,B=d-F,ne=M.end-M.start+1,se=B/ne;for(let te=M.start;te<=M.end;te++)f[te].sum=F+se*(te-M.start),f[te].sum=Math.round(f[te].sum*100)/100;F=d}let j=f[f.length-1].sum-f[0].sum;if(Math.abs(m-j)>.01)throw new Error("Total change over time is not maintained.");return f}populate_meta(s){let f=s.states[this.config.entity].attributes,m=f.device_class??this.config.device_class;var b={unit_of_measurement:f.unit_of_measurement,state_class:f.state_class,device_class:m,language:s.selectedLanguage??s.language??"en",scale:this.scales.get_scale(this.config.scale??this.scales.defaults_for(m),m,this.myhass.config.unit_system),title:this.config.title??(this.config.title===null?void 0:f.friendly_name),data:{max:this.config.data.max,min:this.config.data.min},smoothing:this.config.smoothing,high_res:this.config.high_res,null_as_0:this.config.null_as_0,date_format_string:this.config.date_format_string};return b}setConfig(s){if(!s.entity)throw new Error("You need to define an entity");if(s.days&&s.days<=0)throw new Error("`days` need to be 1 or higher");if(this.config={title:s.title,days:s.days??21,entity:s.entity,scale:s.scale,data:s.data??{},display:s.display??{},smoothing:s.smoothing??!1,high_res:s.high_res??!1,null_as_0:s.null_as_0??!1,date_format_string:s.date_format_string??""},this.config.data.max!==void 0&&this.config.data.max!=="auto"&&typeof this.config.data.max!="number")throw new Error("`data.max` need to be either `auto` or a number");if(this.config.data.min!==void 0&&this.config.data.min!=="auto"&&typeof this.config.data.min!="number")throw new Error("`data.min` need to be either `auto` or a number");this.hass_inited=!1}getCardSize(){return this.config.days?1+Math.ceil(this.config.days/6):1}static getConfigElement(){return document.createElement("heatmap-card-editor")}handlePopup(s,f){s.stopPropagation();let m=new Event("hass-more-info",{composed:!0});m.detail={entityId:f},this.dispatchEvent(m)}};Le(Ce,"styles",Ve`
            #card {
                cursor: pointer;
            }
            #card > * {
                cursor: default;
            }

            /* Heatmap table */
            table {
                border: none;
                border-spacing: 0px;
                table-layout:fixed;
                width: 100%;
                pointer-events: none;
                user-drag: none;
                user-select: none;
                color: var(--secondary-text-color);
            }
            th {
                position:relative;
                font-weight: normal;
                vertical-align: bottom;
            }
            th:not(.hm-row-title) {
                text-align: center;
                white-space: nowrap;
            }
            /* Used for 12hr displays; we need space for two lines */
            tr.hr12 th:not(.hm-row-title) {
                font-size: 70%;
            }
            tr {
                line-height: 1.1;
                overflow: hidden;
                font-size: 90%;
            }
            .hm-row-title {
                text-align: left;
                max-height: 20px;
                min-width: 50px;
                white-space: nowrap;
            }
            .hm-box {
                background-color: currentcolor;
                pointer-events: auto;
            }
            #selected {
                outline: 6px currentcolor solid;
                z-index: 2;
                margin: 3px;
                position: relative;
                box-shadow: 0px 0px 0px 7px rgba(0,0,0,1), 0px 0px 0px 8px rgba(255,255,255,1);
            }
            .null {
                color: transparent !important;
            }

            /* Legend */
            .legend-container {
                margin-top: 20px;
                width: 80%;
                margin-left: auto;
                margin-right: 5%;
                position: relative;

            }
            .tick-container {
                position: relative:
                left: -10px;
            }
            #legend {
                height: 10px;
                outline-style: solid;
                outline-width: 1px;
                /*
                    Background is set via the style attribute in the object while rendering,
                    as lit-element and CSS templating is a bit of a PITA.
                */
            }

            .legend-tick {
                position: absolute;
                top: 10px;
                height: 10px;
                vertical-align: bottom;
                border-left-style: solid;
                border-left-width: 1px;
                white-space: nowrap;
                text-align: right;
                opacity: 0.7;
            }

            .legend-container .caption {
                position: relative;
                top: -15px;
                transform: translateY(100%) rotate(90deg);
                transform-origin: center left;
                font-size: 80%;
                text-align: left;
            }

            /*
                We use a non-visible shadow copy of the tick captions
                to get a height for the element. As the ticks themselves
                are position: absolute'd, we can't use their height for
                this purpose without some JS kludging.
            */
            span.legend-shadow {
                margin-top: 15px;
                position: relative;
                border-color: red;
                border-style: solid;
                writing-mode: vertical-rl;
                transform-origin: bottom left;
                font-size: 80%;
                line-height: 0.2;
                visibility: hidden;
            }

            /* Detail view */
            #tooltip {
                display: none;
                z-index: 1;
                position: absolute;
                padding: 6px;
                border-radius: 4px;
                background: var(--ha-card-background, var(--card-background-color, white) );
                border-color: currentcolor;
                border-width: 1px;
                border-style: solid;
                white-space: nowrap;
            }
            #tooltip.active {
                display: block;
            }
            #tooltip div.meta {
                font-size: 90%;
            }
            #tooltip div.value {
                font-size: 120%;
            }
        `);var Ft=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),J=Ft.prototype.html,As=Ft.prototype.css;function Ss(O){var s=[O];return s.raw=!0,J(s)}var Ne=class extends Ft{scales=new ke;static get properties(){return{_config:{},active_tab:void 0,entity:void 0,device_class:void 0,scale:void 0}}set hass(s){this.myhass=s}async setConfig(s){this._config=s;var f=await loadCardHelpers();customElements.get("ha-entity-picker")||await(await f.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),this.entity=this.myhass.states[this._config.entity],this.device_class=(this.entity&&this.entity.attributes.device_class)??this._config.device_class,this.scale=this.scales.get_scale(this._config.scale),this.smoothing=this._config.smoothing??"false",this.high_res=this._config.high_res??"false",this.null_as_0=this._config.null_as_0??"false",this.date_format_string=this._config.date_format_string??"",this.active_tab===void 0&&this._config.scale&&(this.active_tab=this.tab_from_scale(this._config.scale))}tab_from_scale(s){return typeof s=="object"?2:this.scales.get_scale(s).type==="relative"?1:0}render_device_class_picker(){let s=Object.keys(he).map(function(f){return{label:f,value:f}});if(this.entity&&!this.entity.attributes.device_class)return J`
                <ha-combo-box
                    .label=${"Device class"}
                    .hass=${this.myhass}
                    .configValue=${"device_class"}
                    .items=${s}
                    .value=${this._config.device_class??""}
                    .allowCustomValue=${!1}
                    .helper=${"What device_class best represents this entity?"}
                ></ha-combo-box>
            `}render_scale_docs(s){if(this.scale!==void 0){var f;if(!(this.scale.docs===void 0||this.scale.type!==s))return this.scale.docs?.license&&(f=J`
                <h4>Scale license</h4>
                <p>
                    This scale is licensed separately from the heatmap card
                    under <a href="${this.scale.docs.license.url}" target="_blank">${this.scale.docs.license.name}</a>.
                </p>
            `),J`
            <div class="scale-docs">
                <h3>About this scale</h3>
                ${Ss(this.scale.docs?.text)}
                ${f}
            </div>
        `}}render_tab_bar(){return this.device_class?J`
            <mwc-tab-bar
                @MDCTabBar:activated=${f=>{for(let m of this.renderRoot.querySelectorAll(".scale-picker-content"))m.style.display="none";this.renderRoot.querySelector(`#tab-idx-${f.detail.index}`).style.display="block"}}
                .activeIndex=${this.active_tab??0}
            >
                <mwc-tab label="Absolute"></mwc-tab>
                <mwc-tab label="Relative"></mwc-tab>
                <mwc-tab label="Custom"></mwc-tab>
            </mwc-tab-bar>
            <div class="scale-picker-content" id="tab-idx-0">
                ${this.render_absolute_scale_picker()}
                ${this.render_scale_docs("absolute")}
            </div>
            <div class="scale-picker-content" id="tab-idx-1">
                ${this.render_relative_scale_picker()}
                ${this.render_scale_docs("relative")}
            </div>
            <div class="scale-picker-content" id="tab-idx-2">
                <h3>Custom scale</h3>
                <p>There's no GUI support for setting a custom scale; use the code editor.</p>
                <p>See <a href="https://github.com/kandsten/ha-heatmap-card#custom-color-scales">
                the card README</a> for the config reference.</p>
            </div>
        `:void 0}render_absolute_scale_picker(){var s;let f=this.scales.get_by("device_class",this.device_class);return typeof this._config.scale=="object"?s=J`Using a custom scale, picker disabled`:f.length===0?s=J`There are no predefined scales for this device class`:s=J`
                ${f.map(m=>J`
                    <ha-formfield .label=${m.name} @change=${this.update_field}>
                        <ha-radio
                            .checked=${m.key===this._config.scale}
                            .value=${m.key}
                            .configValue=${"scale"}
                        ></ha-radio>
                    </ha-formfield><br>
                `)}
            `,J`
            <div>
                <h3>Scales for this device class</h3>
                ${s}
            </div>
        `}render_relative_scale_picker(){var s,f=this.scales.get_by("type","relative").map(function(b){return{label:b.name,value:b.key,css:b.css}});if(typeof this._config.scale=="object")s=J`Using a custom scale, picker disabled`;else{var m=b=>J`
            <ha-list-item>
                <div style="display: inline-block; margin-right: 15px; width: 120px; height: 12px; background: linear-gradient(90deg, ${b.css});"></div> ${b.label}
            </ha-list-item>`;s=J`
                <ha-combo-box
                    .label=${"Scale"}
                    .hass=${this.myhass}
                    .configValue=${"scale"}
                    .items=${f}
                    .value=${this._config.scale}
                    .renderer=${m}
                    .allowCustomValue=${!0}
                > </ha-combo-box>
            `}if(this.entity&&this.device_class)return J`
                <h3>Color scales</h3>
                    ${s}
                <h3>Range</h3>
                <div>
                    <ha-textfield
                        .label=${"Minimum value"}
                        .value=${this._config.data?.min??"auto"}
                        .placeholder=0
                        .disabled=${this._config.data?.min==="auto"||this._config.data?.min===void 0}
                        .configValue=${"data.min"}
                        @input=${this.update_field}
                        ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.min==="auto"||this._config.data?.min===void 0}
                            .value=${"auto"}
                            .configValue=${"data.min"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                <div>
                    <ha-textfield
                        .label=${"Maximum value"}
                        .value=${this._config.data?.max??"auto"}
                        .disabled=${this._config.data?.max==="auto"||this._config.data?.max===void 0}
                        .configValue=${"data.max"}
                        @input=${this.update_field}
                    ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.max==="auto"||this._config.data?.max===void 0}
                            .value=${"auto"}
                            .configValue=${"data.max"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                `}render_entity_warning(){if(this.entity!==void 0&&(this.entity.attributes?.state_class===void 0||["measurement","total","total_increasing"].includes(this.entity.attributes?.state_class)===!1))return J`
                    <ha-alert
                        .title=${"Warning"}
                        .type=${"warning"}
                        own-margin
                    >
                        <div>
                            <p>This entity has a <code>state_class</code> attribute set to
                            <i>${this.entity.attributes?.state_class??"undefined"}</i>.</p>
                            <p>This means that data won't be saved to Long Term Statistics, which
                            we use to drive the heatmap; no results will be shown.</p>
                        </div>
                    </ha-alert>
                `}render(){if(!(this.myhass===void 0||this._config===void 0))return J`
        <div class="root card-config">
            <ha-entity-picker
                .required=${!0}
                .hass=${this.myhass}
                .value=${this._config.entity}
                .configValue=${"entity"}
                .includeDomains=${"sensor"}
            ></ha-entity-picker>
            ${this.render_entity_warning()}
            ${this.render_device_class_picker()}
            <ha-textfield
                .label=${"Days"}
                .placeholder=${21}
                .type=${"number"}
                .value=${this._config.days}
                .configValue=${"days"}
                @input=${this.update_field}
                .helper=${"Days of data to include in the heatmap. Defaults to 21"}
                .helperPersistent=${!0}
            ></ha-textfield>
            ${this.render_tab_bar()}
            <h3>Card elements</h3>
            <ha-textfield
                .label=${"Card title"}
                .placeholder=${this.entity&&this.entity.attributes.friendly_name||""}
                .value=${this._config.title||""}
                .configValue=${"title"}
                @input=${this.update_field}
                ></ha-textfield>
            <ha-textfield
                .label=${"Date format string"}
                .placeholder=${""}
                .type=${"string"}
                .value=${this._config.date_format_string??""}
                .configValue=${"date_format_string"}
                @input=${this.update_field}
                .helper=${`Supported format codes: 'YYYY', 'YY', 'MMMM', 'MMM', 'MM', 'M', 'DD', 'D', 'dddd' and 'ddd'.
Defaults to an empty string`}
                .helperPersistent=${!0}
            ></ha-textfield>
            <ha-formfield .label=${"High resolution (usually only 10 days kept)"} @change=${this.update_field}>
                <ha-checkbox
                    .label=${"High resolution"}
                    .checked=${this._config.high_res==="true"}
                    .value=${"true"}
                    .configValue=${"high_res"}
                ></ha-checkbox>
            </ha-formfield>
            <ha-formfield .label=${"Smooth low-precision data"} @change=${this.update_field}>
                <ha-checkbox
                    .label=${"Smoothing"}
                    .checked=${this._config.smoothing==="true"}
                    .disabled=${["total","total_increasing"].includes(this.entity?.attributes?.state_class)?"":"disabled"}
                    .value=${"true"}
                    .configValue=${"smoothing"}
                ></ha-checkbox>
            </ha-formfield>
            <ha-formfield .label=${"Treat no data as zero"} @change=${this.update_field}>
                <ha-checkbox
                    .label=${"Treat no data as zero"}
                    .checked=${this._config.null_as_0==="true"}
                    .value=${"true"}
                    .configValue=${"null_as_0"}
                ></ha-checkbox>
            </ha-formfield>
        </div>`}update_field(s){s.stopPropagation();let f=s.target.value;if(this.disabled||f===void 0||f===this.value)return;let m=new Event("value-changed",{bubbles:!0});"checked"in s.target?m.detail={value:s.target.checked===!0?f:0}:isNaN(parseFloat(f))?m.detail={value:f}:m.detail={value:parseFloat(f)},s.target.dispatchEvent(m)}createRenderRoot(){let s=super.createRenderRoot();return s.addEventListener("value-changed",f=>{f.stopPropagation();let m=f.target.configValue,b=f.detail.value;var k=JSON.parse(JSON.stringify(this._config));if(m==="device_class"&&(k.scale=this.scales.defaults_for(b),this.active_tab=this.tab_from_scale(k.scale)),m==="entity"){let M=this.myhass.states[b],d=M&&M.attributes.device_class;d&&(k.scale=this.scales.defaults_for(d),this.active_tab=this.tab_from_scale(k.scale),delete k.device_class)}var F=k,j=m;if(m.indexOf(".")){for(let M of m.split(".").slice(0,-1))F[M]===void 0&&(F[M]={}),F=F[M];j=m.split(".").slice(-1)}F[j]=b;let S=new Event("config-changed");S.detail={config:k},this.dispatchEvent(S)}),s}};Le(Ne,"styles",As`
        .root > * {
            display: block;
        }
        .root > *:not([own-margin]):not(:last-child) {
            margin-bottom: 24px;
        }
        ha-alert[own-margin] {
            margin-bottom: 4px;
        }


        a:link, a:visited {
            color: var(--primary-color);
        }

        .scale-docs {
            margin-left: 2em;
            margin-right: 2em;
            word-wrap: break-word;
        }

        /* Don't mess with the line spacing */
        sup, sub {
            line-height: 0;
        }
    `);customElements.define("heatmap-card",Ce);customElements.define("heatmap-card-editor",Ne);window.customCards=window.customCards||[];window.customCards.push({type:"heatmap-card",name:"Heatmap card",preview:!0,description:"Heat maps of entities or energy data"});})();
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
