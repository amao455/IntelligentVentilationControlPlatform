import{r as Oe,j as _t}from"./index-BSadVW3s.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="183",Wi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vh=0,el=1,kh=2,xs=1,Gh=2,ur=3,Qn=0,jt=1,nn=2,Fn=0,Xi=1,tl=2,nl=3,il=4,Hh=5,fi=100,Wh=101,Xh=102,Yh=103,qh=104,jh=200,Kh=201,Zh=202,$h=203,Da=204,La=205,Jh=206,Qh=207,eu=208,tu=209,nu=210,iu=211,ru=212,su=213,au=214,Ia=0,Ua=1,Na=2,qi=3,Fa=4,Oa=5,Ba=6,za=7,Ls=0,ou=1,lu=2,Tn=0,Ic=1,Uc=2,Nc=3,Fc=4,Oc=5,Bc=6,zc=7,rl="attached",cu="detached",Vc=300,_i=301,ji=302,vs=303,Vs=304,Is=306,xi=1e3,pn=1001,Va=1002,Nt=1003,hu=1004,zr=1005,kt=1006,ks=1007,pi=1008,Jt=1009,kc=1010,Gc=1011,Sr=1012,Po=1013,Rn=1014,mn=1015,Bn=1016,Do=1017,Lo=1018,Er=1020,Hc=35902,Wc=35899,Xc=1021,Yc=1022,sn=1023,zn=1026,mi=1027,qc=1028,Io=1029,Ki=1030,Uo=1031,No=1033,Ms=33776,ys=33777,Ss=33778,Es=33779,ka=35840,Ga=35841,Ha=35842,Wa=35843,Xa=36196,Ya=37492,qa=37496,ja=37488,Ka=37489,Za=37490,$a=37491,Ja=37808,Qa=37809,eo=37810,to=37811,no=37812,io=37813,ro=37814,so=37815,ao=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,fo=36492,po=36494,mo=36495,go=36283,_o=36284,xo=36285,vo=36286,As=2300,Mo=2301,Gs=2302,sl=2303,al=2400,ol=2401,ll=2402,uu=2500,fu=3200,Us=0,du=1,$n="",ht="srgb",Zi="srgb-linear",Rs="linear",it="srgb",Ti=7680,cl=519,pu=512,mu=513,gu=514,Fo=515,_u=516,xu=517,Oo=518,vu=519,hl=35044,ul="300 es",bn=2e3,br=2001;function Mu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Su(){const r=Tr("canvas");return r.style.display="block",r}const fl={};function dl(...r){const e="THREE."+r.shift();console.log(e,...r)}function jc(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Re(...r){r=jc(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ue(...r){r=jc(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Cs(...r){const e=r.join(" ");e in fl||(fl[e]=!0,Re(...r))}function Eu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const bu={[Ia]:Ua,[Na]:Ba,[Fa]:za,[qi]:Oa,[Ua]:Ia,[Ba]:Na,[za]:Fa,[Oa]:qi};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const gr=Math.PI/180,$i=180/Math.PI;function ti(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Xe(r,e,t){return Math.max(e,Math.min(t,r))}function Bo(r,e){return(r%e+e)%e}function Tu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function wu(r,e,t){return r!==e?(t-r)/(e-r):0}function _r(r,e,t){return(1-t)*r+t*e}function Au(r,e,t,n){return _r(r,e,1-Math.exp(-t*n))}function Ru(r,e=1){return e-Math.abs(Bo(r,e*2)-e)}function Cu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Pu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Du(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Lu(r,e){return r+Math.random()*(e-r)}function Iu(r){return r*(.5-Math.random())}function Uu(r){r!==void 0&&(pl=r);let e=pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nu(r){return r*gr}function Fu(r){return r*$i}function Ou(r){return(r&r-1)===0&&r!==0}function Bu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vu(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),f=a((e+n)/2),u=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*f,l*u,l*h,o*c);break;case"YZY":r.set(l*h,o*f,l*u,o*c);break;case"ZXZ":r.set(l*u,l*h,o*f,o*c);break;case"XZX":r.set(o*f,l*p,l*d,o*c);break;case"YXY":r.set(l*d,o*f,l*p,o*c);break;case"ZYZ":r.set(l*p,l*d,o*f,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:gr,RAD2DEG:$i,generateUUID:ti,clamp:Xe,euclideanModulo:Bo,mapLinear:Tu,inverseLerp:wu,lerp:_r,damp:Au,pingpong:Ru,smoothstep:Cu,smootherstep:Pu,randInt:Du,randFloat:Lu,randFloatSpread:Iu,seededRandom:Uu,degToRad:Nu,radToDeg:Fu,isPowerOfTwo:Ou,ceilPowerOfTwo:Bu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:Vu,normalize:Ht,denormalize:ki};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],f=n[i+2],u=n[i+3],h=s[a+0],d=s[a+1],p=s[a+2],x=s[a+3];if(u!==x||l!==h||c!==d||f!==p){let g=l*h+c*d+f*p+u*x;g<0&&(h=-h,d=-d,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const M=Math.acos(g),y=Math.sin(M);m=Math.sin(m*M)/y,o=Math.sin(o*M)/y,l=l*m+h*o,c=c*m+d*o,f=f*m+p*o,u=u*m+x*o}else{l=l*m+h*o,c=c*m+d*o,f=f*m+p*o,u=u*m+x*o;const M=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=M,c*=M,f*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],f=n[i+3],u=s[a],h=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+f*u+l*d-c*h,e[t+1]=l*p+f*h+c*u-o*d,e[t+2]=c*p+f*d+o*h-l*u,e[t+3]=f*p-o*u-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(i/2),u=o(s/2),h=l(n/2),d=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*f*u+c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u-h*d*p;break;case"YXZ":this._x=h*f*u+c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u+h*d*p;break;case"ZXY":this._x=h*f*u-c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u-h*d*p;break;case"ZYX":this._x=h*f*u-c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u+h*d*p;break;case"YZX":this._x=h*f*u+c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u-h*d*p;break;case"XZY":this._x=h*f*u-c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u+h*d*p;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+o+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(f-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+i*c-s*l,this._y=i*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-i*o,this._w=a*f-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),f=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*f,this.y=n+l*f+o*c-s*u,this.z=i+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new D,ml=new Ut;class ke{constructor(e,t,n,i,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],M=i[1],y=i[4],E=i[7],w=i[2],b=i[5],C=i[8];return s[0]=a*x+o*M+l*w,s[3]=a*g+o*y+l*b,s[6]=a*m+o*E+l*C,s[1]=c*x+f*M+u*w,s[4]=c*g+f*y+u*b,s[7]=c*m+f*E+u*C,s[2]=h*x+d*M+p*w,s[5]=h*g+d*y+p*b,s[8]=h*m+d*E+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,h=o*l-f*s,d=c*s-a*l,p=t*u+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=u*x,e[1]=(i*c-f*n)*x,e[2]=(o*n-i*a)*x,e[3]=h*x,e[4]=(f*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ws.makeScale(e,t)),this}rotate(e){return this.premultiply(Ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ws.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new ke,gl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){const r={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(i.r=On(i.r),i.g=On(i.g),i.b=On(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$n?Rs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zi]:{primaries:e,whitePoint:n,transfer:Rs,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:n,transfer:it,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),r}const Ge=ku();function On(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wi;class Gu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Tr("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=On(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hu=0;class zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Xs(i[a].image)):s.push(Xs(i[a]))}else s=Xs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Wu=0;const Ys=new D;class Lt extends Mi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=pn,i=pn,s=kt,a=pi,o=sn,l=Jt,c=Lt.DEFAULT_ANISOTROPY,f=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=ti(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ys).x}get height(){return this.source.getSize(Ys).y}get depth(){return this.source.getSize(Ys).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Vc;Lt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(d+1)/2,w=(m+1)/2,b=(f+h)/4,C=(u+x)/4,v=(p+g)/4;return y>E&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=C/n):E>w?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=b/i,s=v/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=v/s),this.set(n,i,s,t),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(h-f)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xu extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Lt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new zo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Xu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kc extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yu extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pe{constructor(e,t,n,i,s,a,o,l,c,f,u,h,d,p,x,g){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,f,u,h,d,p,x,g)}set(e,t,n,i,s,a,o,l,c,f,u,h,d,p,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=f,m[10]=u,m[14]=h,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*f,d=a*u,p=o*f,x=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,d=l*u,p=c*f,x=c*u;t[0]=h+x*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=d*o-p,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,d=l*u,p=c*f,x=c*u;t[0]=h-x*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*f,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,d=a*u,p=o*f,x=o*u;t[0]=l*f,t[4]=p*c-d,t[8]=h*c+x,t[1]=l*u,t[5]=x*c+h,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,p=o*l,x=o*c;t[0]=l*f,t[4]=x-h*u,t[8]=p*u+d,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=d*u+p,t[10]=h-x*u}else if(e.order==="XZY"){const h=a*l,d=a*c,p=o*l,x=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+x,t[5]=a*f,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*f,t[10]=x*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qu,e,ju)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Gn.crossVectors(n,Zt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Gn.crossVectors(n,Zt)),Gn.normalize(),Vr.crossVectors(Zt,Gn),i[0]=Gn.x,i[4]=Vr.x,i[8]=Zt.x,i[1]=Gn.y,i[5]=Vr.y,i[9]=Zt.y,i[2]=Gn.z,i[6]=Vr.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],y=n[7],E=n[11],w=n[15],b=i[0],C=i[4],v=i[8],T=i[12],Y=i[1],R=i[5],F=i[9],z=i[13],H=i[2],O=i[6],U=i[10],B=i[14],$=i[3],Z=i[7],ce=i[11],oe=i[15];return s[0]=a*b+o*Y+l*H+c*$,s[4]=a*C+o*R+l*O+c*Z,s[8]=a*v+o*F+l*U+c*ce,s[12]=a*T+o*z+l*B+c*oe,s[1]=f*b+u*Y+h*H+d*$,s[5]=f*C+u*R+h*O+d*Z,s[9]=f*v+u*F+h*U+d*ce,s[13]=f*T+u*z+h*B+d*oe,s[2]=p*b+x*Y+g*H+m*$,s[6]=p*C+x*R+g*O+m*Z,s[10]=p*v+x*F+g*U+m*ce,s[14]=p*T+x*z+g*B+m*oe,s[3]=M*b+y*Y+E*H+w*$,s[7]=M*C+y*R+E*O+w*Z,s[11]=M*v+y*F+E*U+w*ce,s[15]=M*T+y*z+E*B+w*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15],M=l*d-c*h,y=o*d-c*u,E=o*h-l*u,w=a*d-c*f,b=a*h-l*f,C=a*u-o*f;return t*(x*M-g*y+m*E)-n*(p*M-g*w+m*b)+i*(p*y-x*w+m*C)-s*(p*E-x*b+g*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],M=t*o-n*a,y=t*l-i*a,E=t*c-s*a,w=n*l-i*o,b=n*c-s*o,C=i*c-s*l,v=f*x-u*p,T=f*g-h*p,Y=f*m-d*p,R=u*g-h*x,F=u*m-d*x,z=h*m-d*g,H=M*z-y*F+E*R+w*Y-b*T+C*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=(o*z-l*F+c*R)*O,e[1]=(i*F-n*z-s*R)*O,e[2]=(x*C-g*b+m*w)*O,e[3]=(h*b-u*C-d*w)*O,e[4]=(l*Y-a*z-c*T)*O,e[5]=(t*z-i*Y+s*T)*O,e[6]=(g*E-p*C-m*y)*O,e[7]=(f*C-h*E+d*y)*O,e[8]=(a*F-o*Y+c*v)*O,e[9]=(n*Y-t*F-s*v)*O,e[10]=(p*b-x*E+m*M)*O,e[11]=(u*E-f*b-d*M)*O,e[12]=(o*T-a*R-l*v)*O,e[13]=(t*R-n*T+i*v)*O,e[14]=(x*y-p*w-g*M)*O,e[15]=(f*w-u*y+h*M)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,f*o+n,f*l-i*a,0,c*l-i*o,f*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,u=o+o,h=s*c,d=s*f,p=s*u,x=a*f,g=a*u,m=o*u,M=l*c,y=l*f,E=l*u,w=n.x,b=n.y,C=n.z;return i[0]=(1-(x+m))*w,i[1]=(d+E)*w,i[2]=(p-y)*w,i[3]=0,i[4]=(d-E)*b,i[5]=(1-(h+m))*b,i[6]=(g+M)*b,i[7]=0,i[8]=(p+y)*C,i[9]=(g-M)*C,i[10]=(1-(h+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ai.set(i[0],i[1],i[2]).length();const o=Ai.set(i[4],i[5],i[6]).length(),l=Ai.set(i[8],i[9],i[10]).length();s<0&&(a=-a),ln.copy(this);const c=1/a,f=1/o,u=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=f,ln.elements[5]*=f,ln.elements[6]*=f,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=bn,l=!1){const c=this.elements,f=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,x;if(l)p=s/(a-s),x=a*s/(a-s);else if(o===bn)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===br)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=bn,l=!1){const c=this.elements,f=2/(t-e),u=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,x;if(l)p=1/(a-s),x=a/(a-s);else if(o===bn)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===br)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new D,ln=new Pe,qu=new D(0,0,0),ju=new D(1,1,1),Gn=new D,Vr=new D,Zt=new D,xl=new Pe,vl=new Ut;class wt{constructor(e=0,t=0,n=0,i=wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],f=i[9],u=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wt.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ku=0;const Ml=new D,Ri=new Ut,Pn=new Pe,kr=new D,rr=new D,Zu=new D,$u=new Ut,yl=new D(1,0,0),Sl=new D(0,1,0),El=new D(0,0,1),bl={type:"added"},Ju={type:"removed"},Ci={type:"childadded",child:null},qs={type:"childremoved",child:null};class ft extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new D,t=new wt,n=new Ut,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ke}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(El,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(El,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(rr,kr,this.up):Pn.lookAt(kr,rr,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju),qs.child=e,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,$u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new D(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gi extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Ks(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=Bo(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ks(a,s,e+1/3),this.g=Ks(a,s,e),this.b=Ks(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,i),this}setStyle(e,t=ht){function n(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const n=$c[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Ge.workingToColorSpace(Vt.copy(this),e),Math.round(Xe(Vt.r*255,0,255))*65536+Math.round(Xe(Vt.g*255,0,255))*256+Math.round(Xe(Vt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=ht){Ge.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Gr);const n=_r(Hn.h,Gr.h,t),i=_r(Hn.s,Gr.s,t),s=_r(Hn.l,Gr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ie;Ie.NAMES=$c;class ef extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wt,this.environmentIntensity=1,this.environmentRotation=new wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new D,Dn=new D,Zs=new D,Ln=new D,Pi=new D,Di=new D,Tl=new D,$s=new D,Js=new D,Qs=new D,ea=new nt,ta=new nt,na=new nt;class dn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),Dn.subVectors(n,t),Zs.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Dn),l=cn.dot(Zs),c=Dn.dot(Dn),f=Dn.dot(Zs),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,d=(c*l-o*f)*h,p=(a*f-o*l)*h;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,n),na.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ea,s.x),a.addScaledVector(ta,s.y),a.addScaledVector(na,s.z),a}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Dn.subVectors(e,t),cn.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),cn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Pi.subVectors(i,n),Di.subVectors(s,n),$s.subVectors(e,n);const l=Pi.dot($s),c=Di.dot($s);if(l<=0&&c<=0)return t.copy(n);Js.subVectors(e,i);const f=Pi.dot(Js),u=Di.dot(Js);if(f>=0&&u<=f)return t.copy(i);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Pi,a);Qs.subVectors(e,s);const d=Pi.dot(Qs),p=Di.dot(Qs);if(p>=0&&d<=p)return t.copy(s);const x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Di,o);const g=f*p-d*u;if(g<=0&&u-f>=0&&d-p>=0)return Tl.subVectors(s,i),o=(u-f)/(u-f+(d-p)),t.copy(i).addScaledVector(Tl,o);const m=1/(g+x+h);return a=x*m,o=h*m,t.copy(n).addScaledVector(Pi,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ft{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Wr.subVectors(this.max,sr),Li.subVectors(e.a,sr),Ii.subVectors(e.b,sr),Ui.subVectors(e.c,sr),Wn.subVectors(Ii,Li),Xn.subVectors(Ui,Ii),ai.subVectors(Li,Ui);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ai.z,ai.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ai.z,0,-ai.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ai.y,ai.x,0];return!ia(t,Li,Ii,Ui,Wr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,Li,Ii,Ui,Wr))?!1:(Xr.crossVectors(Wn,Xn),t=[Xr.x,Xr.y,Xr.z],ia(t,Li,Ii,Ui,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,Hr=new Ft,Li=new D,Ii=new D,Ui=new D,Wn=new D,Xn=new D,ai=new D,sr=new D,Wr=new D,Xr=new D,oi=new D;function ia(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){oi.fromArray(r,s);const o=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),f=n.dot(oi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Et=new D,Yr=new Ne;let tf=0;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}}class Vo extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}const nf=new Ft,ar=new D,ra=new D;class ni{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(ra)),this.expandByPoint(ar.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rf=0;const en=new Pe,sa=new ft,Ni=new D,$t=new Ft,or=new Ft,Pt=new D;class Gt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Jc:Vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors($t.min,or.min),$t.expandByPoint(Pt),Pt.addVectors($t.max,or.max),$t.expandByPoint(Pt)):($t.expandByPoint(or.min),$t.expandByPoint(or.max))}$t.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Pt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),Pt.add(Ni)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new D,l[v]=new D;const c=new D,f=new D,u=new D,h=new Ne,d=new Ne,p=new Ne,x=new D,g=new D;function m(v,T,Y){c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,T),u.fromBufferAttribute(n,Y),h.fromBufferAttribute(s,v),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,Y),f.sub(c),u.sub(c),d.sub(h),p.sub(h);const R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(R),g.copy(u).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(R),o[v].add(x),o[T].add(x),o[Y].add(x),l[v].add(g),l[T].add(g),l[Y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,T=M.length;v<T;++v){const Y=M[v],R=Y.start,F=Y.count;for(let z=R,H=R+F;z<H;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new D,E=new D,w=new D,b=new D;function C(v){w.fromBufferAttribute(i,v),b.copy(w);const T=o[v];y.copy(T),y.sub(w.multiplyScalar(w.dot(T))).normalize(),E.crossVectors(b,T);const R=E.dot(l[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,R)}for(let v=0,T=M.length;v<T;++v){const Y=M[v],R=Y.start,F=Y.count;for(let z=R,H=R+F;z<H;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,f=new D,u=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),f.subVectors(a,s),u.subVectors(i,s),f.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(f),l.add(f),c.add(f),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),u.subVectors(i,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let d=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*f;for(let m=0;m<f;m++)h[p++]=c[d++]}return new An(h,f,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sf=0;class gn extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Xi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=La,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Un=new D,aa=new D,qr=new D,Yn=new D,oa=new D,jr=new D,la=new D;class Ir{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){aa.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Yn.dot(this.direction),l=-Yn.dot(qr),c=Yn.lengthSq(),f=Math.abs(1-a*a);let u,h,d,p;if(f>0)if(u=a*l-o,h=a*o-l,p=s*f,u>=0)if(h>=-p)if(h<=p){const x=1/f;u*=x,h*=x,d=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(aa).addScaledVector(qr,h),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,s){oa.subVectors(t,e),jr.subVectors(n,e),la.crossVectors(oa,jr);let a=this.direction.dot(la),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(Yn,jr));if(l<0)return null;const c=o*this.direction.dot(oa.cross(Yn));if(c<0||l+c>a)return null;const f=-o*Yn.dot(la);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qc extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.combine=Ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wl=new Pe,li=new Ir,Kr=new ni,Al=new D,Zr=new D,$r=new D,Jr=new D,ca=new D,Qr=new D,Rl=new D,es=new D;class bt extends ft{constructor(e=new Gt,t=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(ca.fromBufferAttribute(u,e),a?Qr.addScaledVector(ca,f):Qr.addScaledVector(ca.sub(t),f))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(Kr.containsPoint(li.origin)===!1&&(li.intersectSphere(Kr,Al)===null||li.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(wl.copy(s).invert(),li.copy(e.ray).applyMatrix4(wl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=h.length;p<x;p++){const g=h[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,w=y;E<w;E+=3){const b=o.getX(E),C=o.getX(E+1),v=o.getX(E+2);i=ts(this,m,e,n,c,f,u,b,C,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const M=o.getX(g),y=o.getX(g+1),E=o.getX(g+2);i=ts(this,a,e,n,c,f,u,M,y,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=h.length;p<x;p++){const g=h[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,w=y;E<w;E+=3){const b=E,C=E+1,v=E+2;i=ts(this,m,e,n,c,f,u,b,C,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const M=g,y=g+1,E=g+2;i=ts(this,a,e,n,c,f,u,M,y,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function af(r,e,t,n,i,s,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Qn,o),l===null)return null;es.copy(o),es.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:r}}function ts(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Zr),r.getVertexPosition(l,$r),r.getVertexPosition(c,Jr);const f=af(r,e,t,n,Zr,$r,Jr,Rl);if(f){const u=new D;dn.getBarycoord(Rl,Zr,$r,Jr,u),i&&(f.uv=dn.getInterpolatedAttribute(i,o,l,c,u,new Ne)),s&&(f.uv1=dn.getInterpolatedAttribute(s,o,l,c,u,new Ne)),a&&(f.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};dn.getNormal(Zr,$r,Jr,h.normal),f.face=h,f.barycoord=u}return f}const Cl=new D,Pl=new nt,Dl=new nt,of=new D,Ll=new Pe,ns=new D,ha=new ni,Il=new Pe,ua=new Ir;class lf extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rl,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ns),this.boundingBox.expandByPoint(ns)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ns),this.boundingSphere.expandByPoint(ns)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(i),e.ray.intersectsSphere(ha)!==!1&&(Il.copy(i).invert(),ua.copy(e.ray).applyMatrix4(Il),!(this.boundingBox!==null&&ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ua)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Pl.fromBufferAttribute(i.attributes.skinIndex,e),Dl.fromBufferAttribute(i.attributes.skinWeight,e),Cl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Dl.getComponent(s);if(a!==0){const o=Pl.getComponent(s);Ll.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(of.copy(Cl).applyMatrix4(Ll),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yo extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eh extends Lt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Nt,f=Nt,u,h){super(null,a,o,l,c,f,i,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ul=new Pe,cf=new Pe;class ko{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:cf;Ul.multiplyMatrices(o,t[s]),Ul.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ko(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new eh(t,e,e,sn,mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Re("Skeleton: No bone found with UUID:",s),a=new yo),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}const fa=new D,hf=new D,uf=new ke;class Zn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fa.subVectors(n,t).cross(hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uf.getNormalMatrix(e),i=this.coplanarPoint(fa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ni,ff=new Ne(.5,.5),is=new D;class Go{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],d=s[7],p=s[8],x=s[9],g=s[10],m=s[11],M=s[12],y=s[13],E=s[14],w=s[15];if(i[0].setComponents(c-a,d-f,m-p,w-M).normalize(),i[1].setComponents(c+a,d+f,m+p,w+M).normalize(),i[2].setComponents(c+o,d+u,m+x,w+y).normalize(),i[3].setComponents(c-o,d-u,m-x,w-y).normalize(),n)i[4].setComponents(l,h,g,E).normalize(),i[5].setComponents(c-l,d-h,m-g,w-E).normalize();else if(i[4].setComponents(c-l,d-h,m-g,w-E).normalize(),t===bn)i[5].setComponents(c+l,d+h,m+g,w+E).normalize();else if(t===br)i[5].setComponents(l,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=ff.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(is.x=i.normal.x>0?e.max.x:e.min.x,is.y=i.normal.y>0?e.max.y:e.min.y,is.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xr extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ps=new D,Ds=new D,Nl=new Pe,lr=new Ir,rs=new ni,da=new D,Fl=new D;class th extends ft{constructor(e=new Gt,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ps.fromBufferAttribute(t,i-1),Ds.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ps.distanceTo(Ds);e.setAttribute("lineDistance",new xt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(i),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;Nl.copy(i).invert(),lr.copy(e.ray).applyMatrix4(Nl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=c){const m=f.getX(x),M=f.getX(x+1),y=ss(this,e,lr,l,m,M,x);y&&t.push(y)}if(this.isLineLoop){const x=f.getX(p-1),g=f.getX(d),m=ss(this,e,lr,l,x,g,p-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=c){const m=ss(this,e,lr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=ss(this,e,lr,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ss(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ps.fromBufferAttribute(o,i),Ds.fromBufferAttribute(o,s),t.distanceSqToSegment(Ps,Ds,da,Fl)>n)return;da.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(da);if(!(c<e.near||c>e.far))return{distance:c,point:Fl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Ol=new D,Bl=new D;class zl extends th{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ol.fromBufferAttribute(t,i),Bl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ol.distanceTo(Bl);e.setAttribute("lineDistance",new xt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fr extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vl=new Pe,So=new Ir,as=new ni,os=new D;class pa extends ft{constructor(e=new Gt,t=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;Vl.copy(i).invert(),So.copy(e.ray).applyMatrix4(Vl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,x=d;p<x;p++){const g=c.getX(p);os.fromBufferAttribute(u,g),kl(os,g,l,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=h,x=d;p<x;p++)os.fromBufferAttribute(u,p),kl(os,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kl(r,e,t,n,i,s,a){const o=So.distanceSqToPoint(r);if(o<t){const l=new D;So.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class nh extends Lt{constructor(e=[],t=_i,n,i,s,a,o,l,c,f){super(e,t,n,i,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class df extends Lt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wr extends Lt{constructor(e,t,n=Rn,i,s,a,o=Nt,l=Nt,c,f=zn,u=1){if(f!==zn&&f!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,i,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pf extends wr{constructor(e,t=Rn,n=_i,i,s,a=Nt,o=Nt,l,c=zn){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ih extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ur extends Gt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(u,2));function p(x,g,m,M,y,E,w,b,C,v,T){const Y=E/C,R=w/v,F=E/2,z=w/2,H=b/2,O=C+1,U=v+1;let B=0,$=0;const Z=new D;for(let ce=0;ce<U;ce++){const oe=ce*R-z;for(let le=0;le<O;le++){const De=le*Y-F;Z[x]=De*M,Z[g]=oe*y,Z[m]=H,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[m]=b>0?1:-1,f.push(Z.x,Z.y,Z.z),u.push(le/C),u.push(1-ce/v),B+=1}}for(let ce=0;ce<v;ce++)for(let oe=0;oe<C;oe++){const le=h+oe+O*ce,De=h+oe+O*(ce+1),je=h+(oe+1)+O*(ce+1),Ke=h+(oe+1)+O*ce;l.push(le,De,Ke),l.push(De,je,Ke),$+=6}o.addGroup(d,$,T),d+=$,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const f=n[i],h=n[i+1]-f,d=(a-f)/h;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Ne:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,i=[],s=[],a=[],o=new D,l=new Pe;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const f=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);f<=c&&(c=f,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Xe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Xe(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function gf(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=rh(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=yf(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let f=o,u=l;for(let h=t;h<i;h+=t){const d=r[h],p=r[h+1];d<o&&(o=d),p<l&&(l=p),d>f&&(f=d),p>u&&(u=p)}c=Math.max(f-o,u-l),c=c!==0?32767/c:0}return Ar(s,a,t,o,l,c,0),a}function rh(r,e,t,n,i){let s;if(i===Lf(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Gl(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Gl(a/n|0,r[a],r[a+1],s);return s&&Ji(s,s.next)&&(Cr(s),s=s.next),s}function vi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||vt(t.prev,t,t.next)===0)){if(Cr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ar(r,e,t,n,i,s,a){if(!r)return;!a&&s&&wf(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?xf(r,n,i,s):_f(r)){e.push(l.i,r.i,c.i),Cr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=vf(vi(r),e),Ar(r,e,t,n,i,s,2)):a===2&&Mf(r,e,t,n,i,s):Ar(vi(r),e,t,n,i,s,1);break}}}function _f(r){const e=r.prev,t=r,n=r.next;if(vt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,f=Math.min(i,s,a),u=Math.min(o,l,c),h=Math.max(i,s,a),d=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=f&&p.x<=h&&p.y>=u&&p.y<=d&&dr(i,o,s,l,a,c,p.x,p.y)&&vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function xf(r,e,t,n){const i=r.prev,s=r,a=r.next;if(vt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,f=i.y,u=s.y,h=a.y,d=Math.min(o,l,c),p=Math.min(f,u,h),x=Math.max(o,l,c),g=Math.max(f,u,h),m=Eo(d,p,e,t,n),M=Eo(x,g,e,t,n);let y=r.prevZ,E=r.nextZ;for(;y&&y.z>=m&&E&&E.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&dr(o,f,l,u,c,h,y.x,y.y)&&vt(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=d&&E.x<=x&&E.y>=p&&E.y<=g&&E!==i&&E!==a&&dr(o,f,l,u,c,h,E.x,E.y)&&vt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&dr(o,f,l,u,c,h,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=M;){if(E.x>=d&&E.x<=x&&E.y>=p&&E.y<=g&&E!==i&&E!==a&&dr(o,f,l,u,c,h,E.x,E.y)&&vt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function vf(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ji(n,i)&&ah(n,t,t.next,i)&&Rr(n,i)&&Rr(i,n)&&(e.push(n.i,t.i,i.i),Cr(t),Cr(t.next),t=r=i),t=t.next}while(t!==r);return vi(t)}function Mf(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cf(a,o)){let l=oh(a,o);a=vi(a,a.next),l=vi(l,l.next),Ar(a,e,t,n,i,s,0),Ar(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function yf(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=rh(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Rf(c))}i.sort(Sf);for(let s=0;s<i.length;s++)t=Ef(i[s],t);return t}function Sf(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Ef(r,e){const t=bf(r,e);if(!t)return e;const n=oh(t,r);return vi(n,n.next),vi(t,t.next)}function bf(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Ji(r,t))return t;do{if(Ji(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let f=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sh(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Rr(t,r)&&(u<f||u===f&&(t.x>a.x||t.x===a.x&&Tf(a,t)))&&(a=t,f=u)}t=t.next}while(t!==o);return a}function Tf(r,e){return vt(r.prev,r,e.prev)<0&&vt(e.next,r,r.next)<0}function wf(r,e,t,n){let i=r;do i.z===0&&(i.z=Eo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Af(i)}function Af(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Eo(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Rf(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function sh(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function dr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&sh(r,e,t,n,i,s,a,o)}function Cf(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Pf(r,e)&&(Rr(r,e)&&Rr(e,r)&&Df(r,e)&&(vt(r.prev,r,e.prev)||vt(r,e.prev,e))||Ji(r,e)&&vt(r.prev,r,r.next)>0&&vt(e.prev,e,e.next)>0)}function vt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ji(r,e){return r.x===e.x&&r.y===e.y}function ah(r,e,t,n){const i=cs(vt(r,e,t)),s=cs(vt(r,e,n)),a=cs(vt(t,n,r)),o=cs(vt(t,n,e));return!!(i!==s&&a!==o||i===0&&ls(r,t,e)||s===0&&ls(r,n,e)||a===0&&ls(t,r,n)||o===0&&ls(t,e,n))}function ls(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function cs(r){return r>0?1:r<0?-1:0}function Pf(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ah(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Rr(r,e){return vt(r.prev,r,r.next)<0?vt(r,e,r.next)>=0&&vt(r,r.prev,e)>=0:vt(r,e,r.prev)<0||vt(r,r.next,e)<0}function Df(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function oh(r,e){const t=bo(r.i,r.x,r.y),n=bo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Gl(r,e,t,n){const i=bo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function bo(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lf(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class If{static triangulate(e,t,n=2){return gf(e,t,n)}}class Ho{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Ho.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Hl(e),Wl(n,e);let a=e.length;t.forEach(Hl);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Wl(n,t[l]);const o=If.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Hl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Wl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ns extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,f=l+1,u=e/o,h=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<f;m++){const M=m*h-a;for(let y=0;y<c;y++){const E=y*u-s;p.push(E,-M,0),x.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const y=M+c*m,E=M+c*(m+1),w=M+1+c*(m+1),b=M+1+c*m;d.push(y,E,b),d.push(E,w,b)}this.setIndex(d),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}function Qi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=Qi(r[t]);for(const i in n)e[i]=n[i]}return e}function Uf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Nf={clone:Qi,merge:Wt};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bf extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wo extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pr extends gn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.combine=Ls,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zf extends gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.combine=Ls,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vf extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kf extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function hs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Gf(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function ch(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Nr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Hf extends Nr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ol:s=e,o=2*t-n;break;case ll:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ol:a=e,l=2*n-t;break;case ll:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-h*g+2*h*x-h*p,M=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*p+1,y=(-1-d)*g+(1.5+d)*x+.5*p,E=d*g-d*x;for(let w=0;w!==o;++w)s[w]=m*a[f+w]+M*a[c+w]+y*a[l+w]+E*a[u+w];return s}}class Wf extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(n-t)/(i-t),u=1-f;for(let h=0;h!==o;++h)s[h]=a[c+h]*u+a[l+h]*f;return s}}class Xf extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yf extends Nr{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.settings||this.DefaultSettings_,u=f.inTangents,h=f.outTangents;if(!u||!h){const x=(n-t)/(i-t),g=1-x;for(let m=0;m!==o;++m)s[m]=a[c+m]*g+a[l+m]*x;return s}const d=o*2,p=e-1;for(let x=0;x!==o;++x){const g=a[c+x],m=a[l+x],M=p*d+x*2,y=h[M],E=h[M+1],w=e*d+x*2,b=u[w],C=u[w+1];let v=(n-t)/(i-t),T,Y,R,F,z;for(let H=0;H<8;H++){T=v*v,Y=T*v,R=1-v,F=R*R,z=F*R;const U=z*t+3*F*v*y+3*R*T*b+Y*i-n;if(Math.abs(U)<1e-10)break;const B=3*F*(y-t)+6*R*v*(b-y)+3*T*(i-b);if(Math.abs(B)<1e-10)break;v=v-U/B,v=Math.max(0,Math.min(1,v))}s[x]=z*g+3*F*v*E+3*R*T*C+Y*m}return s}}class _n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Yf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case Gs:t=this.InterpolantFactoryMethodSmooth;break;case sl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return Gs;case this.InterpolantFactoryMethodBezier:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&yu(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gs,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,h=u-n,d=u+n;for(let p=0;p!==n;++p){const x=t[u+p];if(x!==t[h+p]||x!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Mo;class tr extends _n{constructor(e,t,n){super(e,t,n)}}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=As;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class hh extends _n{constructor(e,t,n,i){super(e,t,n,i)}}hh.prototype.ValueTypeName="color";class Pr extends _n{constructor(e,t,n,i){super(e,t,n,i)}}Pr.prototype.ValueTypeName="number";class qf extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let f=c+o;c!==f;c+=4)Ut.slerpFlat(s,0,a,c-o,a,c,l);return s}}class er extends _n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new qf(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends _n{constructor(e,t,n){super(e,t,n)}}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=As;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends _n{constructor(e,t,n,i){super(e,t,n,i)}}Dr.prototype.ValueTypeName="vector";class jf{constructor(e="",t=-1,n=[],i=uu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Zf(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(_n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const f=Gf(l);l=Xl(l,1,f),c=Xl(c,1,f),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Pr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],f=c.name.match(s);if(f&&f.length>1){const u=f[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Re("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ue("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,d,p,x){if(d.length!==0){const g=[],m=[];ch(d,g,m,p),g.length!==0&&x.push(new u(h,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let x=0;x<h[p].morphTargets.length;x++)d[h[p].morphTargets[x]]=-1;for(const x in d){const g=[],m=[];for(let M=0;M!==h[p].morphTargets.length;++M){const y=h[p];g.push(y.time),m.push(y.morphTarget===x?1:0)}i.push(new Pr(".morphTargetInfluence["+x+"]",g,m))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(Dr,d+".position",h,"pos",i),n(er,d+".quaternion",h,"rot",i),n(Dr,d+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Kf(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return hh;case"quaternion":return er;case"bool":case"boolean":return tr;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Zf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Kf(r.type);if(r.times===void 0){const t=[],n=[];ch(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const vr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Yl(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Yl(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Yl(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $f{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Jf=new $f;class ei{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ei.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class Qf extends Error{constructor(e,t){super(e),this.response=t}}class uh extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:i});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=Nn[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0;let x=0;const g=new ReadableStream({start(m){M();function M(){u.read().then(({done:y,value:E})=>{if(y)m.close();else{x+=E.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let b=0,C=f.length;b<C;b++){const v=f[b];v.onProgress&&v.onProgress(w)}m.enqueue(E),M()}},y=>{m.error(y)})}}});return new Response(g)}else throw new Qf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{vr.add(`file:${e}`,c);const f=Nn[e];delete Nn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const f=Nn[e];if(f===void 0)throw this.manager.itemError(e),c;delete Nn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fi=new WeakMap;class ed extends ei{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=vr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Fi.get(a);u===void 0&&(u=[],Fi.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Tr("img");function l(){f(),t&&t(this);const u=Fi.get(this)||[];for(let h=0;h<u.length;h++){const d=u[h];d.onLoad&&d.onLoad(this)}Fi.delete(this),s.manager.itemEnd(e)}function c(u){f(),i&&i(u),vr.remove(`image:${e}`);const h=Fi.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(u)}Fi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vr.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class td extends ei{constructor(e){super(e)}load(e,t,n,i){const s=new Lt,a=new ed(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fs extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ma=new Pe,ql=new D,jl=new D;class Xo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(ql),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===br||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const us=new D,fs=new Ut,Mn=new D;class fh extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,fs,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,fs,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(us,fs,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,fs,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qn=new D,Kl=new Ne,Zl=new Ne;class Yt extends fh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,Zl),t.subVectors(Zl,Kl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nd extends Xo{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=$i*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class id extends Fs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new nd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class rd extends Xo{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class Mr extends Fs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yo extends fh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sd extends Xo{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bs extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new sd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class dh extends Fs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ad{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Oi=-90,Bi=1;class od extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(Oi,Bi,e,t);i.layers=this.layers,this.add(i);const s=new Yt(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const a=new Yt(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const l=new Yt(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ld extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qo="\\[\\]\\.:\\/",cd=new RegExp("["+qo+"]","g"),jo="[^"+qo+"]",hd="[^"+qo.replace("\\.","")+"]",ud=/((?:WC+[\/:])*)/.source.replace("WC",jo),fd=/(WCOD+)?/.source.replace("WCOD",hd),dd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jo),pd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jo),md=new RegExp("^"+ud+fd+dd+pd+"$"),gd=["material","materials","bones","map"];class _d{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cd,"")}static parseTrackName(e){const t=md.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);gd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=_d;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $l{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xd extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jl(r,e,t,n){const i=vd(n);switch(t){case Xc:return r*e;case qc:return r*e/i.components*i.byteLength;case Io:return r*e/i.components*i.byteLength;case Ki:return r*e*2/i.components*i.byteLength;case Uo:return r*e*2/i.components*i.byteLength;case Yc:return r*e*3/i.components*i.byteLength;case sn:return r*e*4/i.components*i.byteLength;case No:return r*e*4/i.components*i.byteLength;case Ms:case ys:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ss:case Es:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Wa:return Math.max(r,16)*Math.max(e,8)/4;case ka:case Ha:return Math.max(r,8)*Math.max(e,8)/2;case Xa:case Ya:case ja:case Ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qa:case Za:case $a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case eo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case to:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case no:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case io:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case so:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ao:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case oo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case co:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ho:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case uo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case fo:case po:case mo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case go:case _o:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xo:case vo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vd(r){switch(r){case Jt:case kc:return{byteLength:1,components:1};case Sr:case Gc:case Bn:return{byteLength:2,components:1};case Do:case Lo:return{byteLength:2,components:4};case Rn:case Po:case mn:return{byteLength:4,components:1};case Hc:case Wc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ph(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Md(r){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const f=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,f);else{u.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<u.length;d++){const p=u[h],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,u[h]=x)}u.length=h+1;for(let d=0,p=u.length;d<p;d++){const x=u[d];r.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:yd,alphahash_pars_fragment:Sd,alphamap_fragment:Ed,alphamap_pars_fragment:bd,alphatest_fragment:Td,alphatest_pars_fragment:wd,aomap_fragment:Ad,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Pd,begin_vertex:Dd,beginnormal_vertex:Ld,bsdfs:Id,iridescence_fragment:Ud,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:zd,color_fragment:Vd,color_pars_fragment:kd,color_pars_vertex:Gd,color_vertex:Hd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:qd,displacementmap_vertex:jd,emissivemap_fragment:Kd,emissivemap_pars_fragment:Zd,colorspace_fragment:$d,colorspace_pars_fragment:Jd,envmap_fragment:Qd,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:dp,envmap_vertex:ip,fog_vertex:rp,fog_pars_vertex:sp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:xp,lights_physical_pars_fragment:vp,lights_fragment_begin:Mp,lights_fragment_maps:yp,lights_fragment_end:Sp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:wp,map_fragment:Ap,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Ip,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:Op,normal_fragment_begin:Bp,normal_fragment_maps:zp,normal_pars_fragment:Vp,normal_pars_vertex:kp,normal_vertex:Gp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:qp,opaque_fragment:jp,packing:Kp,premultiplied_alpha_fragment:Zp,project_vertex:$p,dithering_fragment:Jp,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:sm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:fm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:xm,worldpos_vertex:vm,background_vert:Mm,background_frag:ym,backgroundCube_vert:Sm,backgroundCube_frag:Em,cube_vert:bm,cube_frag:Tm,depth_vert:wm,depth_frag:Am,distance_vert:Rm,distance_frag:Cm,equirect_vert:Pm,equirect_frag:Dm,linedashed_vert:Lm,linedashed_frag:Im,meshbasic_vert:Um,meshbasic_frag:Nm,meshlambert_vert:Fm,meshlambert_frag:Om,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:Vm,meshnormal_frag:km,meshphong_vert:Gm,meshphong_frag:Hm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:Ym,meshtoon_frag:qm,points_vert:jm,points_frag:Km,shadow_vert:Zm,shadow_frag:$m,sprite_vert:Jm,sprite_frag:Qm},he={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},En={basic:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Wt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Wt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ie(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Wt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Wt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Wt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Wt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Wt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Wt([he.lights,he.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};En.physical={uniforms:Wt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ds={r:0,b:0,g:0},hi=new wt,eg=new Pe;function tg(r,e,t,n,i,s){const a=new Ie(0);let o=i===!0?0:1,l,c,f=null,u=0,h=null;function d(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const E=M.backgroundBlurriness>0;y=e.get(y,E)}return y}function p(M){let y=!1;const E=d(M);E===null?g(a,o):E&&E.isColor&&(g(E,1),y=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(M,y){const E=d(y);E&&(E.isCubeTexture||E.mapping===Is)?(c===void 0&&(c=new bt(new Ur(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Qi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(hi)),c.material.toneMapped=Ge.getTransfer(E.colorSpace)!==it,(f!==E||u!==E.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=E,u=E.version,h=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new bt(new Ns(2,2),new Cn({name:"BackgroundMaterial",uniforms:Qi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||u!==E.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,f=E,u=E.version,h=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,y){M.getRGB(ds,lh(r)),t.buffers.color.setClear(ds.r,ds.g,ds.b,y,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:x,dispose:m}}function ng(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(R,F,z,H,O){let U=!1;const B=u(R,H,z,F);s!==B&&(s=B,c(s.object)),U=d(R,H,z,O),U&&p(R,H,z,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,E(R,F,z,H),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function f(R){return r.deleteVertexArray(R)}function u(R,F,z,H){const O=H.wireframe===!0;let U=n[F.id];U===void 0&&(U={},n[F.id]=U);const B=R.isInstancedMesh===!0?R.id:0;let $=U[B];$===void 0&&($={},U[B]=$);let Z=$[z.id];Z===void 0&&(Z={},$[z.id]=Z);let ce=Z[O];return ce===void 0&&(ce=h(l()),Z[O]=ce),ce}function h(R){const F=[],z=[],H=[];for(let O=0;O<t;O++)F[O]=0,z[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:H,object:R,attributes:{},index:null}}function d(R,F,z,H){const O=s.attributes,U=F.attributes;let B=0;const $=z.getAttributes();for(const Z in $)if($[Z].location>=0){const oe=O[Z];let le=U[Z];if(le===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),oe===void 0||oe.attribute!==le||le&&oe.data!==le.data)return!0;B++}return s.attributesNum!==B||s.index!==H}function p(R,F,z,H){const O={},U=F.attributes;let B=0;const $=z.getAttributes();for(const Z in $)if($[Z].location>=0){let oe=U[Z];oe===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const le={};le.attribute=oe,oe&&oe.data&&(le.data=oe.data),O[Z]=le,B++}s.attributes=O,s.attributesNum=B,s.index=H}function x(){const R=s.newAttributes;for(let F=0,z=R.length;F<z;F++)R[F]=0}function g(R){m(R,0)}function m(R,F){const z=s.newAttributes,H=s.enabledAttributes,O=s.attributeDivisors;z[R]=1,H[R]===0&&(r.enableVertexAttribArray(R),H[R]=1),O[R]!==F&&(r.vertexAttribDivisor(R,F),O[R]=F)}function M(){const R=s.newAttributes,F=s.enabledAttributes;for(let z=0,H=F.length;z<H;z++)F[z]!==R[z]&&(r.disableVertexAttribArray(z),F[z]=0)}function y(R,F,z,H,O,U,B){B===!0?r.vertexAttribIPointer(R,F,z,O,U):r.vertexAttribPointer(R,F,z,H,O,U)}function E(R,F,z,H){x();const O=H.attributes,U=z.getAttributes(),B=F.defaultAttributeValues;for(const $ in U){const Z=U[$];if(Z.location>=0){let ce=O[$];if(ce===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const oe=ce.normalized,le=ce.itemSize,De=e.get(ce);if(De===void 0)continue;const je=De.buffer,Ke=De.type,K=De.bytesPerElement,ne=Ke===r.INT||Ke===r.UNSIGNED_INT||ce.gpuType===Po;if(ce.isInterleavedBufferAttribute){const ie=ce.data,Le=ie.stride,be=ce.offset;if(ie.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Z.locationSize;Ce++)m(Z.location+Ce,ie.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)g(Z.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,je);for(let Ce=0;Ce<Z.locationSize;Ce++)y(Z.location+Ce,le/Z.locationSize,Ke,oe,Le*K,(be+le/Z.locationSize*Ce)*K,ne)}else{if(ce.isInstancedBufferAttribute){for(let ie=0;ie<Z.locationSize;ie++)m(Z.location+ie,ce.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ie=0;ie<Z.locationSize;ie++)g(Z.location+ie);r.bindBuffer(r.ARRAY_BUFFER,je);for(let ie=0;ie<Z.locationSize;ie++)y(Z.location+ie,le/Z.locationSize,Ke,oe,le*K,le/Z.locationSize*ie*K,ne)}}else if(B!==void 0){const oe=B[$];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(Z.location,oe);break;case 3:r.vertexAttrib3fv(Z.location,oe);break;case 4:r.vertexAttrib4fv(Z.location,oe);break;default:r.vertexAttrib1fv(Z.location,oe)}}}}M()}function w(){T();for(const R in n){const F=n[R];for(const z in F){const H=F[z];for(const O in H){const U=H[O];for(const B in U)f(U[B].object),delete U[B];delete H[O]}}delete n[R]}}function b(R){if(n[R.id]===void 0)return;const F=n[R.id];for(const z in F){const H=F[z];for(const O in H){const U=H[O];for(const B in U)f(U[B].object),delete U[B];delete H[O]}}delete n[R.id]}function C(R){for(const F in n){const z=n[F];for(const H in z){const O=z[H];if(O[R.id]===void 0)continue;const U=O[R.id];for(const B in U)f(U[B].object),delete U[B];delete O[R.id]}}}function v(R){for(const F in n){const z=n[F],H=R.isInstancedMesh===!0?R.id:0,O=z[H];if(O!==void 0){for(const U in O){const B=O[U];for(const $ in B)f(B[$].object),delete B[$];delete O[U]}delete z[H],Object.keys(z).length===0&&delete n[F]}}}function T(){Y(),a=!0,s!==i&&(s=i,c(s.object))}function Y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:Y,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function ig(r,e,t){let n;function i(c){n=c}function s(c,f){r.drawArrays(n,c,f),t.update(f,n,1)}function a(c,f,u){u!==0&&(r.drawArraysInstanced(n,c,f,u),t.update(f,n,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,u);let d=0;for(let p=0;p<u;p++)d+=f[p];t.update(d,n,1)}function l(c,f,u,h){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],f[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=f[x]*h[x];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==sn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jt&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mn&&!v)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Re("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:E,maxSamples:w,samples:b}}function sg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Zn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||n!==0||i;return i=h,n=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){const p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?f(null):c();else{const M=s?0:n,y=M*4;let E=m.clippingState||null;l.value=E,E=f(p,h,y,d);for(let w=0;w!==y;++w)E[w]=t[w];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,d,p){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=d+x*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,E=d;y!==x;++y,E+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const Jn=4,Ql=[.125,.215,.35,.446,.526,.582],di=20,ag=256,cr=new Yo,ec=new Ie;let ga=null,_a=0,xa=0,va=!1;const og=new D;class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=og}=s;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,xa),this._renderer.xr.enabled=va,e.scissorTest=!1,zi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Bn,format:sn,colorSpace:Zi,depthBuffer:!1},i=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lg(s)),this._blurMaterial=hg(s,e,t),this._ggxMaterial=cg(s,e,t)}return i}_compileMaterial(e){const t=new bt(new Gt,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,n,i,s){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ec),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Ur,new Qc({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(ec),m=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):E===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const w=this._cubeSize;zi(i,E*w,y>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(x,l),u.render(e,l)}u.toneMapping=d,u.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_i||e.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;zi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=0+c*1.25,d=u*h,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Jn?n-p+Jn:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,zi(s,g,m,3*x,2*x),i.setRenderTarget(s),i.render(o,cr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,zi(e,g,m,3*x,2*x),i.setRenderTarget(e),i.render(o,cr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*di-1),x=s/p,g=isFinite(s)?1+Math.floor(f*x):di;g>di&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${di}`);const m=[];let M=0;for(let C=0;C<di;++C){const v=C/x,T=Math.exp(-v*v/2);m.push(T),C===0?M+=T:C<g&&(M+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=p,h.mipInt.value=y-n;const E=this._sizeLods[i],w=3*E*(i>y-Jn?i-y+Jn:0),b=4*(this._cubeSize-E);zi(t,w,b,3*E,2*E),l.setRenderTarget(t),l.render(u,cr)}}function lg(r){const e=[],t=[],n=[];let i=r;const s=r-Jn+1+Ql.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Jn?l=Ql[a-r+Jn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,p=6,x=3,g=2,m=1,M=new Float32Array(x*p*d),y=new Float32Array(g*p*d),E=new Float32Array(m*p*d);for(let b=0;b<d;b++){const C=b%3*2/3-1,v=b>2?0:-1,T=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(T,x*p*b),y.set(h,g*p*b);const Y=[b,b,b,b,b,b];E.set(Y,m*p*b)}const w=new Gt;w.setAttribute("position",new An(M,x)),w.setAttribute("uv",new An(y,g)),w.setAttribute("faceIndex",new An(E,m)),n.push(new bt(w,null)),i>Jn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nc(r,e,t){const n=new wn(r,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cg(r,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Os(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function hg(r,e,t){const n=new Float32Array(di),i=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ic(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function rc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Os(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class mh extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ur(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Fn});s.uniforms.tEquirect.value=t;const a=new bt(i,s),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=kt),new od(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function ug(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===vs||d===Vs)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const x=new mh(p.height);return x.fromEquirectangularTexture(r,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===vs||d===Vs,x=d===_i||d===ji;if(p||x){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new tc(r)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new tc(r)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function o(h,d){return d===vs?h.mapping=_i:d===Vs&&(h.mapping=ji),h}function l(h){let d=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(h){const d=h.target;d.removeEventListener("dispose",f);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function fg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Cs("WebGLRenderer: "+n+" extension not supported."),i}}}function dg(r,e,t,n){const i={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(u){const h=[],d=u.index,p=u.attributes.position;let x=0;if(p===void 0)return;if(d!==null){const M=d.array;x=d.version;for(let y=0,E=M.length;y<E;y+=3){const w=M[y+0],b=M[y+1],C=M[y+2];h.push(w,b,b,C,C,w)}}else{const M=p.array;x=p.version;for(let y=0,E=M.length/3-1;y<E;y+=3){const w=y+0,b=y+1,C=y+2;h.push(w,b,b,C,C,w)}}const g=new(p.count>=65535?Jc:Vo)(h,1);g.version=x;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function f(u){const h=s.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function pg(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,h*a,p),t.update(d,n,p))}function f(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}function u(h,d,p,x){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/a,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,x,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M]*x[M];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function mg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gg(r,e,t){const n=new WeakMap,i=new nt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let E=o.attributes.position.count*y,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*w*4*u),C=new Kc(b,E,w,u);C.type=mn,C.needsUpdate=!0;const v=y*4;for(let Y=0;Y<u;Y++){const R=g[Y],F=m[Y],z=M[Y],H=E*w*4*Y;for(let O=0;O<R.count;O++){const U=O*v;d===!0&&(i.fromBufferAttribute(R,O),b[H+U+0]=i.x,b[H+U+1]=i.y,b[H+U+2]=i.z,b[H+U+3]=0),p===!0&&(i.fromBufferAttribute(F,O),b[H+U+4]=i.x,b[H+U+5]=i.y,b[H+U+6]=i.z,b[H+U+7]=0),x===!0&&(i.fromBufferAttribute(z,O),b[H+U+8]=i.x,b[H+U+9]=i.y,b[H+U+10]=i.z,b[H+U+11]=z.itemSize===4?i.w:1)}}h={count:u,texture:C,size:new Ne(E,w)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function _g(r,e,t,n,i){let s=new WeakMap;function a(c){const f=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return h}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const xg={[Ic]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Nc]:"CINEON_TONE_MAPPING",[Fc]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function vg(r,e,t,n,i){const s=new wn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new wn(e,t,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),o=new Gt;o.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xt([0,2,0,0,2,0],2));const l=new Bf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new bt(o,l),f=new Yo(-1,1,1,-1,0,1);let u=null,h=null,d=!1,p,x=null,g=[],m=!1;this.setSize=function(M,y){s.setSize(M,y),a.setSize(M,y);for(let E=0;E<g.length;E++){const w=g[E];w.setSize&&w.setSize(M,y)}},this.setEffects=function(M){g=M,m=g.length>0&&g[0].isRenderPass===!0;const y=s.width,E=s.height;for(let w=0;w<g.length;w++){const b=g[w];b.setSize&&b.setSize(y,E)}},this.begin=function(M,y){if(d||M.toneMapping===Tn&&g.length===0)return!1;if(x=y,y!==null){const E=y.width,w=y.height;(s.width!==E||s.height!==w)&&this.setSize(E,w)}return m===!1&&M.setRenderTarget(s),p=M.toneMapping,M.toneMapping=Tn,!0},this.hasRenderPass=function(){return m},this.end=function(M,y){M.toneMapping=p,d=!0;let E=s,w=a;for(let b=0;b<g.length;b++){const C=g[b];if(C.enabled!==!1&&(C.render(M,w,E,y),C.needsSwap!==!1)){const v=E;E=w,w=v}}if(u!==M.outputColorSpace||h!==M.toneMapping){u=M.outputColorSpace,h=M.toneMapping,l.defines={},Ge.getTransfer(u)===it&&(l.defines.SRGB_TRANSFER="");const b=xg[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(x),M.render(c,f),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const gh=new Lt,To=new wr(1,1),_h=new Kc,xh=new Yu,vh=new nh,sc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function ir(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=sc[i];if(s===void 0&&(s=new Float32Array(i),sc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bs(r,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Mg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),Rt(t,e)}}function Sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),Rt(t,e)}}function Eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),Rt(t,e)}}function bg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;cc.set(n),r.uniformMatrix2fv(this.addr,!1,cc),Rt(t,n)}}function Tg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;lc.set(n),r.uniformMatrix3fv(this.addr,!1,lc),Rt(t,n)}}function wg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;oc.set(n),r.uniformMatrix4fv(this.addr,!1,oc),Rt(t,n)}}function Ag(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),Rt(t,e)}}function Cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),Rt(t,e)}}function Pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),Rt(t,e)}}function Dg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),Rt(t,e)}}function Ig(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),Rt(t,e)}}function Ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),Rt(t,e)}}function Ng(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(To.compareFunction=t.isReversedDepthBuffer()?Oo:Fo,s=To):s=gh,t.setTexture2D(e||s,i)}function Fg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xh,i)}function Og(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vh,i)}function Bg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_h,i)}function zg(r){switch(r){case 5126:return Mg;case 35664:return yg;case 35665:return Sg;case 35666:return Eg;case 35674:return bg;case 35675:return Tg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Dg;case 36294:return Lg;case 36295:return Ig;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function Vg(r,e){r.uniform1fv(this.addr,e)}function kg(r,e){const t=ir(e,this.size,2);r.uniform2fv(this.addr,t)}function Gg(r,e){const t=ir(e,this.size,3);r.uniform3fv(this.addr,t)}function Hg(r,e){const t=ir(e,this.size,4);r.uniform4fv(this.addr,t)}function Wg(r,e){const t=ir(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xg(r,e){const t=ir(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yg(r,e){const t=ir(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qg(r,e){r.uniform1iv(this.addr,e)}function jg(r,e){r.uniform2iv(this.addr,e)}function Kg(r,e){r.uniform3iv(this.addr,e)}function Zg(r,e){r.uniform4iv(this.addr,e)}function $g(r,e){r.uniform1uiv(this.addr,e)}function Jg(r,e){r.uniform2uiv(this.addr,e)}function Qg(r,e){r.uniform3uiv(this.addr,e)}function e0(r,e){r.uniform4uiv(this.addr,e)}function t0(r,e,t){const n=this.cache,i=e.length,s=Bs(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=To:a=gh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function n0(r,e,t){const n=this.cache,i=e.length,s=Bs(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xh,s[a])}function i0(r,e,t){const n=this.cache,i=e.length,s=Bs(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vh,s[a])}function r0(r,e,t){const n=this.cache,i=e.length,s=Bs(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_h,s[a])}function s0(r){switch(r){case 5126:return Vg;case 35664:return kg;case 35665:return Gg;case 35666:return Hg;case 35674:return Wg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return qg;case 35667:case 35671:return jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return $g;case 36294:return Jg;case 36295:return Qg;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return r0}}class a0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}}class o0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}}class l0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function hc(r,e){r.seq.push(e),r.map[e.id]=e}function c0(r,e,t){const n=r.name,i=n.length;for(Ma.lastIndex=0;;){const s=Ma.exec(n),a=Ma.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){hc(t,c===void 0?new a0(o,r,e):new o0(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new l0(o),hc(t,u)),t=u}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);c0(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function uc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const h0=37297;let u0=0;function f0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fc=new ke;function d0(r){Ge._getMatrix(fc,Ge.workingColorSpace,r);const e=`mat3( ${fc.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case Rs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function dc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+f0(r.getShaderSource(e),o)}else return s}function p0(r,e){const t=d0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const m0={[Ic]:"Linear",[Uc]:"Reinhard",[Nc]:"Cineon",[Fc]:"ACESFilmic",[Bc]:"AgX",[zc]:"Neutral",[Oc]:"Custom"};function g0(r,e){const t=m0[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new D;function _0(){Ge.getLuminanceCoefficients(ps);const r=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function v0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function mr(r){return r!==""}function pc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(r){return r.replace(y0,E0)}const S0=new Map;function E0(r,e){let t=We[e];if(t===void 0){const n=S0.get(e);if(n!==void 0)t=We[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wo(t)}const b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(r){return r.replace(b0,T0)}function T0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _c(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const w0={[xs]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function A0(r){return w0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R0={[_i]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE_UV"};function C0(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":R0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const P0={[ji]:"ENVMAP_MODE_REFRACTION"};function D0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":P0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L0={[Ls]:"ENVMAP_BLENDING_MULTIPLY",[ou]:"ENVMAP_BLENDING_MIX",[lu]:"ENVMAP_BLENDING_ADD"};function I0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":L0[r.combine]||"ENVMAP_BLENDING_NONE"}function U0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function N0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=A0(t),c=C0(t),f=D0(t),u=I0(t),h=U0(t),d=x0(t),p=v0(s),x=i.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(g=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?We.tonemapping_pars_fragment:"",t.toneMapping!==Tn?g0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,p0("linearToOutputTexel",t.outputColorSpace),_0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=wo(a),a=pc(a,t),a=mc(a,t),o=wo(o),o=pc(o,t),o=mc(o,t),a=gc(a),o=gc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=M+g+a,E=M+m+o,w=uc(i,i.VERTEX_SHADER,y),b=uc(i,i.FRAGMENT_SHADER,E);i.attachShader(x,w),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(R){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",z=i.getShaderInfoLog(w)||"",H=i.getShaderInfoLog(b)||"",O=F.trim(),U=z.trim(),B=H.trim();let $=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,w,b);else{const ce=dc(i,w,"vertex"),oe=dc(i,b,"fragment");Ue("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+ce+`
`+oe)}else O!==""?Re("WebGLProgram: Program Info Log:",O):(U===""||B==="")&&(Z=!1);Z&&(R.diagnostics={runnable:$,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:B,prefix:m}})}i.deleteShader(w),i.deleteShader(b),v=new Ts(i,x),T=M0(i,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=i.getProgramParameter(x,h0)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}let F0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B0(e),t.set(e,n)),n}}class B0{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}}function z0(r,e,t,n,i,s){const a=new Zc,o=new O0,l=new Set,c=[],f=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,Y,R,F){const z=R.fog,H=F.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||O,U),$=B&&B.mapping===Is?B.image.height:null,Z=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Re("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=ce!==void 0?ce.length:0;let le=0;H.morphAttributes.position!==void 0&&(le=1),H.morphAttributes.normal!==void 0&&(le=2),H.morphAttributes.color!==void 0&&(le=3);let De,je,Ke,K;if(Z){const Ze=En[Z];De=Ze.vertexShader,je=Ze.fragmentShader}else De=v.vertexShader,je=v.fragmentShader,o.update(v),Ke=o.getVertexShaderID(v),K=o.getFragmentShaderID(v);const ne=r.getRenderTarget(),ie=r.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,Ce=!!v.map,rt=!!v.matcap,Fe=!!B,$e=!!v.aoMap,tt=!!v.lightMap,Be=!!v.bumpMap,dt=!!v.normalMap,P=!!v.displacementMap,pt=!!v.emissiveMap,He=!!v.metalnessMap,st=!!v.roughnessMap,Me=v.anisotropy>0,A=v.clearcoat>0,_=v.dispersion>0,L=v.iridescence>0,j=v.sheen>0,q=v.transmission>0,W=Me&&!!v.anisotropyMap,se=A&&!!v.clearcoatMap,J=A&&!!v.clearcoatNormalMap,ue=A&&!!v.clearcoatRoughnessMap,me=L&&!!v.iridescenceMap,Q=L&&!!v.iridescenceThicknessMap,ee=j&&!!v.sheenColorMap,xe=j&&!!v.sheenRoughnessMap,ye=!!v.specularMap,pe=!!v.specularColorMap,ze=!!v.specularIntensityMap,I=q&&!!v.transmissionMap,ae=q&&!!v.thicknessMap,re=!!v.gradientMap,_e=!!v.alphaMap,te=v.alphaTest>0,V=!!v.alphaHash,ge=!!v.extensions;let Te=Tn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Te=r.toneMapping);const Je={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:je,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Zi,alphaToCoverage:!!v.alphaToCoverage,map:Ce,matcap:rt,envMap:Fe,envMapMode:Fe&&B.mapping,envMapCubeUVHeight:$,aoMap:$e,lightMap:tt,bumpMap:Be,normalMap:dt,displacementMap:P,emissiveMap:pt,normalMapObjectSpace:dt&&v.normalMapType===du,normalMapTangentSpace:dt&&v.normalMapType===Us,metalnessMap:He,roughnessMap:st,anisotropy:Me,anisotropyMap:W,clearcoat:A,clearcoatMap:se,clearcoatNormalMap:J,clearcoatRoughnessMap:ue,dispersion:_,iridescence:L,iridescenceMap:me,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:ee,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:pe,specularIntensityMap:ze,transmission:q,transmissionMap:I,thicknessMap:ae,gradientMap:re,opaque:v.transparent===!1&&v.blending===Xi&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:V,combine:v.combine,mapUv:Ce&&p(v.map.channel),aoMapUv:$e&&p(v.aoMap.channel),lightMapUv:tt&&p(v.lightMap.channel),bumpMapUv:Be&&p(v.bumpMap.channel),normalMapUv:dt&&p(v.normalMap.channel),displacementMapUv:P&&p(v.displacementMap.channel),emissiveMapUv:pt&&p(v.emissiveMap.channel),metalnessMapUv:He&&p(v.metalnessMap.channel),roughnessMapUv:st&&p(v.roughnessMap.channel),anisotropyMapUv:W&&p(v.anisotropyMap.channel),clearcoatMapUv:se&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:J&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(v.sheenRoughnessMap.channel),specularMapUv:ye&&p(v.specularMap.channel),specularColorMapUv:pe&&p(v.specularColorMap.channel),specularIntensityMapUv:ze&&p(v.specularIntensityMap.channel),transmissionMapUv:I&&p(v.transmissionMap.channel),thicknessMapUv:ae&&p(v.thicknessMap.channel),alphaMapUv:_e&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(dt||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Ce||_e),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&dt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&Ge.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===nn,flipSided:v.side===jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function g(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const Y in v.defines)T.push(Y),T.push(v.defines[Y]);return v.isRawShaderMaterial===!1&&(m(T,v),M(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const T=d[v.type];let Y;if(T){const R=En[T];Y=Nf.clone(R.uniforms)}else Y=v.uniforms;return Y}function E(v,T){let Y=f.get(T);return Y!==void 0?++Y.usedTimes:(Y=new N0(r,T,v,i),c.push(Y),f.set(T,Y)),Y}function w(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:C}}function V0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function k0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function xc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,x,g,m){let M=r[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},r[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=p,M.materialVariant=a(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=g,M.group=m),e++,M}function l(h,d,p,x,g,m){const M=o(h,d,p,x,g,m);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function c(h,d,p,x,g,m){const M=o(h,d,p,x,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function f(h,d){t.length>1&&t.sort(h||k0),n.length>1&&n.sort(d||xc),i.length>1&&i.sort(d||xc)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:f}}function G0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new vc,r.set(n,[a])):i>=s.length?(a=new vc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function H0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function W0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let X0=0;function Y0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function q0(r){const e=new H0,t=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Pe,a=new Pe;function o(c){let f=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,M=0,y=0,E=0,w=0,b=0,C=0;c.sort(Y0);for(let T=0,Y=c.length;T<Y;T++){const R=c[T],F=R.color,z=R.intensity,H=R.distance;let O=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ki?O=R.shadow.map.texture:O=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=F.r*z,u+=F.g*z,h+=F.b*z;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],z);C++}else if(R.isDirectionalLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,$=t.get(R);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=U,d++}else if(R.isSpotLight){const U=e.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(F).multiplyScalar(z),U.distance=H,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[x]=U;const B=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,B.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[x]=B.matrix,R.castShadow){const $=t.get(R);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=O,E++}x++}else if(R.isRectAreaLight){const U=e.get(R);U.color.copy(F).multiplyScalar(z),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=U,g++}else if(R.isPointLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const B=R.shadow,$=t.get(R);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=R.shadow.matrix,y++}n.point[p]=U,p++}else if(R.isHemisphereLight){const U=e.get(R);U.skyColor.copy(R.color).multiplyScalar(z),U.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[m]=U,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==d||v.pointLength!==p||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==M||v.numPointShadows!==y||v.numSpotShadows!==E||v.numSpotMaps!==w||v.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,v.directionalLength=d,v.pointLength=p,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=M,v.numPointShadows=y,v.numSpotShadows=E,v.numSpotMaps=w,v.numLightProbes=C,n.version=X0++)}function l(c,f){let u=0,h=0,d=0,p=0,x=0;const g=f.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const y=c[m];if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),u++}else if(y.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const E=n.rectArea[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Mc(r){const e=new q0(r),t=[],n=[];function i(f){c.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function j0(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Mc(r),e.set(i,[o])):s>=a.length?(o=new Mc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],J0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],yc=new Pe,hr=new D,ya=new D;function Q0(r,e,t){let n=new Go;const i=new Ne,s=new Ne,a=new nt,o=new Vf,l=new kf,c={},f=t.maxTextureSize,u={[Qn]:jt,[jt]:Qn,[nn]:nn},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Gt;p.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let m=this.type;this.render=function(b,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Gh&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xs);const T=r.getRenderTarget(),Y=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=m!==this.type;z&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(O=>O.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,O=b.length;H<O;H++){const U=b[H],B=U.shadow;if(B===void 0){Re("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const $=B.getFrameExtents();i.multiply($),s.copy(B.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/$.x),i.x=s.x*$.x,B.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/$.y),i.y=s.y*$.y,B.mapSize.y=s.y));const Z=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Z,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ur){if(U.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new wn(i.x,i.y,{format:Ki,type:Bn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new wr(i.x,i.y,mn),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=zn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Nt,B.map.depthTexture.magFilter=Nt}else U.isPointLight?(B.map=new mh(i.x),B.map.depthTexture=new pf(i.x,Rn)):(B.map=new wn(i.x,i.y),B.map.depthTexture=new wr(i.x,i.y,Rn)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=zn,this.type===xs?(B.map.depthTexture.compareFunction=Z?Oo:Fo,B.map.depthTexture.minFilter=kt,B.map.depthTexture.magFilter=kt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Nt,B.map.depthTexture.magFilter=Nt);B.camera.updateProjectionMatrix()}const ce=B.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ce;oe++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,oe),r.clear();else{oe===0&&(r.setRenderTarget(B.map),r.clear());const le=B.getViewport(oe);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),F.viewport(a)}if(U.isPointLight){const le=B.camera,De=B.matrix,je=U.distance||le.far;je!==le.far&&(le.far=je,le.updateProjectionMatrix()),hr.setFromMatrixPosition(U.matrixWorld),le.position.copy(hr),ya.copy(le.position),ya.add($0[oe]),le.up.copy(J0[oe]),le.lookAt(ya),le.updateMatrixWorld(),De.makeTranslation(-hr.x,-hr.y,-hr.z),yc.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),B._frustum.setFromProjectionMatrix(yc,le.coordinateSystem,le.reversedDepth)}else B.updateMatrices(U);n=B.getFrustum(),E(C,v,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===ur&&M(B,v),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(T,Y,R)};function M(b,C){const v=e.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(i.x,i.y,{format:Ki,type:Bn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(C,null,v,h,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(C,null,v,d,x,null)}function y(b,C,v,T){let Y=null;const R=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)Y=R;else if(Y=v.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=Y.uuid,z=C.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let O=H[z];O===void 0&&(O=Y.clone(),H[z]=O,C.addEventListener("dispose",w)),Y=O}if(Y.visible=C.visible,Y.wireframe=C.wireframe,T===ur?Y.side=C.shadowSide!==null?C.shadowSide:C.side:Y.side=C.shadowSide!==null?C.shadowSide:u[C.side],Y.alphaMap=C.alphaMap,Y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,Y.map=C.map,Y.clipShadows=C.clipShadows,Y.clippingPlanes=C.clippingPlanes,Y.clipIntersection=C.clipIntersection,Y.displacementMap=C.displacementMap,Y.displacementScale=C.displacementScale,Y.displacementBias=C.displacementBias,Y.wireframeLinewidth=C.wireframeLinewidth,Y.linewidth=C.linewidth,v.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const F=r.properties.get(Y);F.light=v}return Y}function E(b,C,v,T,Y){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&Y===ur)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const z=e.update(b),H=b.material;if(Array.isArray(H)){const O=z.groups;for(let U=0,B=O.length;U<B;U++){const $=O[U],Z=H[$.materialIndex];if(Z&&Z.visible){const ce=y(b,Z,T,Y);b.onBeforeShadow(r,b,C,v,z,ce,$),r.renderBufferDirect(v,null,z,ce,b,$),b.onAfterShadow(r,b,C,v,z,ce,$)}}}else if(H.visible){const O=y(b,H,T,Y);b.onBeforeShadow(r,b,C,v,z,O,null),r.renderBufferDirect(v,null,z,O,b,null),b.onAfterShadow(r,b,C,v,z,O,null)}}const F=b.children;for(let z=0,H=F.length;z<H;z++)E(F[z],C,v,T,Y)}function w(b){b.target.removeEventListener("dispose",w);for(const v in c){const T=c[v],Y=b.target.uuid;Y in T&&(T[Y].dispose(),delete T[Y])}}}function e_(r,e){function t(){let I=!1;const ae=new nt;let re=null;const _e=new nt(0,0,0,0);return{setMask:function(te){re!==te&&!I&&(r.colorMask(te,te,te,te),re=te)},setLocked:function(te){I=te},setClear:function(te,V,ge,Te,Je){Je===!0&&(te*=Te,V*=Te,ge*=Te),ae.set(te,V,ge,Te),_e.equals(ae)===!1&&(r.clearColor(te,V,ge,Te),_e.copy(ae))},reset:function(){I=!1,re=null,_e.set(-1,0,0,0)}}}function n(){let I=!1,ae=!1,re=null,_e=null,te=null;return{setReversed:function(V){if(ae!==V){const ge=e.get("EXT_clip_control");V?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ae=V;const Te=te;te=null,this.setClear(Te)}},getReversed:function(){return ae},setTest:function(V){V?ne(r.DEPTH_TEST):ie(r.DEPTH_TEST)},setMask:function(V){re!==V&&!I&&(r.depthMask(V),re=V)},setFunc:function(V){if(ae&&(V=bu[V]),_e!==V){switch(V){case Ia:r.depthFunc(r.NEVER);break;case Ua:r.depthFunc(r.ALWAYS);break;case Na:r.depthFunc(r.LESS);break;case qi:r.depthFunc(r.LEQUAL);break;case Fa:r.depthFunc(r.EQUAL);break;case Oa:r.depthFunc(r.GEQUAL);break;case Ba:r.depthFunc(r.GREATER);break;case za:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_e=V}},setLocked:function(V){I=V},setClear:function(V){te!==V&&(te=V,ae&&(V=1-V),r.clearDepth(V))},reset:function(){I=!1,re=null,_e=null,te=null,ae=!1}}}function i(){let I=!1,ae=null,re=null,_e=null,te=null,V=null,ge=null,Te=null,Je=null;return{setTest:function(Ze){I||(Ze?ne(r.STENCIL_TEST):ie(r.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!I&&(r.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,Ot,mt){(re!==Ze||_e!==Ot||te!==mt)&&(r.stencilFunc(Ze,Ot,mt),re=Ze,_e=Ot,te=mt)},setOp:function(Ze,Ot,mt){(V!==Ze||ge!==Ot||Te!==mt)&&(r.stencilOp(Ze,Ot,mt),V=Ze,ge=Ot,Te=mt)},setLocked:function(Ze){I=Ze},setClear:function(Ze){Je!==Ze&&(r.clearStencil(Ze),Je=Ze)},reset:function(){I=!1,ae=null,re=null,_e=null,te=null,V=null,ge=null,Te=null,Je=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,d=[],p=null,x=!1,g=null,m=null,M=null,y=null,E=null,w=null,b=null,C=new Ie(0,0,0),v=0,T=!1,Y=null,R=null,F=null,z=null,H=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),U=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),U=B>=2);let Z=null,ce={};const oe=r.getParameter(r.SCISSOR_BOX),le=r.getParameter(r.VIEWPORT),De=new nt().fromArray(oe),je=new nt().fromArray(le);function Ke(I,ae,re,_e){const te=new Uint8Array(4),V=r.createTexture();r.bindTexture(I,V),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ge=0;ge<re;ge++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ae+ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return V}const K={};K[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(r.DEPTH_TEST),a.setFunc(qi),Be(!1),dt(el),ne(r.CULL_FACE),$e(Fn);function ne(I){f[I]!==!0&&(r.enable(I),f[I]=!0)}function ie(I){f[I]!==!1&&(r.disable(I),f[I]=!1)}function Le(I,ae){return u[I]!==ae?(r.bindFramebuffer(I,ae),u[I]=ae,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function be(I,ae){let re=d,_e=!1;if(I){re=h.get(ae),re===void 0&&(re=[],h.set(ae,re));const te=I.textures;if(re.length!==te.length||re[0]!==r.COLOR_ATTACHMENT0){for(let V=0,ge=te.length;V<ge;V++)re[V]=r.COLOR_ATTACHMENT0+V;re.length=te.length,_e=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,_e=!0);_e&&r.drawBuffers(re)}function Ce(I){return p!==I?(r.useProgram(I),p=I,!0):!1}const rt={[fi]:r.FUNC_ADD,[Wh]:r.FUNC_SUBTRACT,[Xh]:r.FUNC_REVERSE_SUBTRACT};rt[Yh]=r.MIN,rt[qh]=r.MAX;const Fe={[jh]:r.ZERO,[Kh]:r.ONE,[Zh]:r.SRC_COLOR,[Da]:r.SRC_ALPHA,[nu]:r.SRC_ALPHA_SATURATE,[eu]:r.DST_COLOR,[Jh]:r.DST_ALPHA,[$h]:r.ONE_MINUS_SRC_COLOR,[La]:r.ONE_MINUS_SRC_ALPHA,[tu]:r.ONE_MINUS_DST_COLOR,[Qh]:r.ONE_MINUS_DST_ALPHA,[iu]:r.CONSTANT_COLOR,[ru]:r.ONE_MINUS_CONSTANT_COLOR,[su]:r.CONSTANT_ALPHA,[au]:r.ONE_MINUS_CONSTANT_ALPHA};function $e(I,ae,re,_e,te,V,ge,Te,Je,Ze){if(I===Fn){x===!0&&(ie(r.BLEND),x=!1);return}if(x===!1&&(ne(r.BLEND),x=!0),I!==Hh){if(I!==g||Ze!==T){if((m!==fi||E!==fi)&&(r.blendEquation(r.FUNC_ADD),m=fi,E=fi),Ze)switch(I){case Xi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tl:r.blendFunc(r.ONE,r.ONE);break;case nl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case il:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",I);break}else switch(I){case Xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nl:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case il:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",I);break}M=null,y=null,w=null,b=null,C.set(0,0,0),v=0,g=I,T=Ze}return}te=te||ae,V=V||re,ge=ge||_e,(ae!==m||te!==E)&&(r.blendEquationSeparate(rt[ae],rt[te]),m=ae,E=te),(re!==M||_e!==y||V!==w||ge!==b)&&(r.blendFuncSeparate(Fe[re],Fe[_e],Fe[V],Fe[ge]),M=re,y=_e,w=V,b=ge),(Te.equals(C)===!1||Je!==v)&&(r.blendColor(Te.r,Te.g,Te.b,Je),C.copy(Te),v=Je),g=I,T=!1}function tt(I,ae){I.side===nn?ie(r.CULL_FACE):ne(r.CULL_FACE);let re=I.side===jt;ae&&(re=!re),Be(re),I.blending===Xi&&I.transparent===!1?$e(Fn):$e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const _e=I.stencilWrite;o.setTest(_e),_e&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){Y!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),Y=I)}function dt(I){I!==Vh?(ne(r.CULL_FACE),I!==R&&(I===el?r.cullFace(r.BACK):I===kh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ie(r.CULL_FACE),R=I}function P(I){I!==F&&(U&&r.lineWidth(I),F=I)}function pt(I,ae,re){I?(ne(r.POLYGON_OFFSET_FILL),(z!==ae||H!==re)&&(z=ae,H=re,a.getReversed()&&(ae=-ae),r.polygonOffset(ae,re))):ie(r.POLYGON_OFFSET_FILL)}function He(I){I?ne(r.SCISSOR_TEST):ie(r.SCISSOR_TEST)}function st(I){I===void 0&&(I=r.TEXTURE0+O-1),Z!==I&&(r.activeTexture(I),Z=I)}function Me(I,ae,re){re===void 0&&(Z===null?re=r.TEXTURE0+O-1:re=Z);let _e=ce[re];_e===void 0&&(_e={type:void 0,texture:void 0},ce[re]=_e),(_e.type!==I||_e.texture!==ae)&&(Z!==re&&(r.activeTexture(re),Z=re),r.bindTexture(I,ae||K[I]),_e.type=I,_e.texture=ae)}function A(){const I=ce[Z];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{r.compressedTexImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function j(){try{r.texSubImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function q(){try{r.texSubImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function se(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function J(){try{r.texStorage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function ue(){try{r.texStorage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function me(){try{r.texImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function Q(){try{r.texImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function ee(I){De.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function xe(I){je.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),je.copy(I))}function ye(I,ae){let re=c.get(ae);re===void 0&&(re=new WeakMap,c.set(ae,re));let _e=re.get(I);_e===void 0&&(_e=r.getUniformBlockIndex(ae,I.name),re.set(I,_e))}function pe(I,ae){const _e=c.get(ae).get(I);l.get(ae)!==_e&&(r.uniformBlockBinding(ae,_e,I.__bindingPointIndex),l.set(ae,_e))}function ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Z=null,ce={},u={},h=new WeakMap,d=[],p=null,x=!1,g=null,m=null,M=null,y=null,E=null,w=null,b=null,C=new Ie(0,0,0),v=0,T=!1,Y=null,R=null,F=null,z=null,H=null,De.set(0,0,r.canvas.width,r.canvas.height),je.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:ie,bindFramebuffer:Le,drawBuffers:be,useProgram:Ce,setBlending:$e,setMaterial:tt,setFlipSided:Be,setCullFace:dt,setLineWidth:P,setPolygonOffset:pt,setScissorTest:He,activeTexture:st,bindTexture:Me,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:me,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:J,texStorage3D:ue,texSubImage2D:j,texSubImage3D:q,compressedTexSubImage2D:W,compressedTexSubImage3D:se,scissor:ee,viewport:xe,reset:ze}}function t_(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,f=new WeakMap;let u;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,_){return d?new OffscreenCanvas(A,_):Tr("canvas")}function x(A,_,L){let j=1;const q=Me(A);if((q.width>L||q.height>L)&&(j=L/Math.max(q.width,q.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(j*q.width),se=Math.floor(j*q.height);u===void 0&&(u=p(W,se));const J=_?p(W,se):u;return J.width=W,J.height=se,J.getContext("2d").drawImage(A,0,0,W,se),Re("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+W+"x"+se+")."),J}else return"data"in A&&Re("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){r.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(A,_,L,j,q=!1){if(A!==null){if(r[A]!==void 0)return r[A];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=_;if(_===r.RED&&(L===r.FLOAT&&(W=r.R32F),L===r.HALF_FLOAT&&(W=r.R16F),L===r.UNSIGNED_BYTE&&(W=r.R8)),_===r.RED_INTEGER&&(L===r.UNSIGNED_BYTE&&(W=r.R8UI),L===r.UNSIGNED_SHORT&&(W=r.R16UI),L===r.UNSIGNED_INT&&(W=r.R32UI),L===r.BYTE&&(W=r.R8I),L===r.SHORT&&(W=r.R16I),L===r.INT&&(W=r.R32I)),_===r.RG&&(L===r.FLOAT&&(W=r.RG32F),L===r.HALF_FLOAT&&(W=r.RG16F),L===r.UNSIGNED_BYTE&&(W=r.RG8)),_===r.RG_INTEGER&&(L===r.UNSIGNED_BYTE&&(W=r.RG8UI),L===r.UNSIGNED_SHORT&&(W=r.RG16UI),L===r.UNSIGNED_INT&&(W=r.RG32UI),L===r.BYTE&&(W=r.RG8I),L===r.SHORT&&(W=r.RG16I),L===r.INT&&(W=r.RG32I)),_===r.RGB_INTEGER&&(L===r.UNSIGNED_BYTE&&(W=r.RGB8UI),L===r.UNSIGNED_SHORT&&(W=r.RGB16UI),L===r.UNSIGNED_INT&&(W=r.RGB32UI),L===r.BYTE&&(W=r.RGB8I),L===r.SHORT&&(W=r.RGB16I),L===r.INT&&(W=r.RGB32I)),_===r.RGBA_INTEGER&&(L===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),L===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),L===r.UNSIGNED_INT&&(W=r.RGBA32UI),L===r.BYTE&&(W=r.RGBA8I),L===r.SHORT&&(W=r.RGBA16I),L===r.INT&&(W=r.RGBA32I)),_===r.RGB&&(L===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),L===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),_===r.RGBA){const se=q?Rs:Ge.getTransfer(j);L===r.FLOAT&&(W=r.RGBA32F),L===r.HALF_FLOAT&&(W=r.RGBA16F),L===r.UNSIGNED_BYTE&&(W=se===it?r.SRGB8_ALPHA8:r.RGBA8),L===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),L===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(A,_){let L;return A?_===null||_===Rn||_===Er?L=r.DEPTH24_STENCIL8:_===mn?L=r.DEPTH32F_STENCIL8:_===Sr&&(L=r.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rn||_===Er?L=r.DEPTH_COMPONENT24:_===mn?L=r.DEPTH_COMPONENT32F:_===Sr&&(L=r.DEPTH_COMPONENT16),L}function w(A,_){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function b(A){const _=A.target;_.removeEventListener("dispose",b),v(_),_.isVideoTexture&&f.delete(_)}function C(A){const _=A.target;_.removeEventListener("dispose",C),Y(_)}function v(A){const _=n.get(A);if(_.__webglInit===void 0)return;const L=A.source,j=h.get(L);if(j){const q=j[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&T(A),Object.keys(j).length===0&&h.delete(L)}n.remove(A)}function T(A){const _=n.get(A);r.deleteTexture(_.__webglTexture);const L=A.source,j=h.get(L);delete j[_.__cacheKey],a.memory.textures--}function Y(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let q=0;q<_.__webglFramebuffer[j].length;q++)r.deleteFramebuffer(_.__webglFramebuffer[j][q]);else r.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)r.deleteFramebuffer(_.__webglFramebuffer[j]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=A.textures;for(let j=0,q=L.length;j<q;j++){const W=n.get(L[j]);W.__webglTexture&&(r.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(L[j])}n.remove(A)}let R=0;function F(){R=0}function z(){const A=R;return A>=i.maxTextures&&Re("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),R+=1,A}function H(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function O(A,_){const L=n.get(A);if(A.isVideoTexture&&He(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&L.__version!==A.version){const j=A.image;if(j===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{K(L,A,_);return}}else A.isExternalTexture&&(L.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,L.__webglTexture,r.TEXTURE0+_)}function U(A,_){const L=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){K(L,A,_);return}else A.isExternalTexture&&(L.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,L.__webglTexture,r.TEXTURE0+_)}function B(A,_){const L=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){K(L,A,_);return}t.bindTexture(r.TEXTURE_3D,L.__webglTexture,r.TEXTURE0+_)}function $(A,_){const L=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&L.__version!==A.version){ne(L,A,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+_)}const Z={[xi]:r.REPEAT,[pn]:r.CLAMP_TO_EDGE,[Va]:r.MIRRORED_REPEAT},ce={[Nt]:r.NEAREST,[hu]:r.NEAREST_MIPMAP_NEAREST,[zr]:r.NEAREST_MIPMAP_LINEAR,[kt]:r.LINEAR,[ks]:r.LINEAR_MIPMAP_NEAREST,[pi]:r.LINEAR_MIPMAP_LINEAR},oe={[pu]:r.NEVER,[vu]:r.ALWAYS,[mu]:r.LESS,[Fo]:r.LEQUAL,[gu]:r.EQUAL,[Oo]:r.GEQUAL,[_u]:r.GREATER,[xu]:r.NOTEQUAL};function le(A,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===ks||_.magFilter===zr||_.magFilter===pi||_.minFilter===kt||_.minFilter===ks||_.minFilter===zr||_.minFilter===pi)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Z[_.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Z[_.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Z[_.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ce[_.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nt||_.minFilter!==zr&&_.minFilter!==pi||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function De(A,_){let L=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",b));const j=_.source;let q=h.get(j);q===void 0&&(q={},h.set(j,q));const W=H(_);if(W!==A.__cacheKey){q[W]===void 0&&(q[W]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,L=!0),q[W].usedTimes++;const se=q[A.__cacheKey];se!==void 0&&(q[A.__cacheKey].usedTimes--,se.usedTimes===0&&T(_)),A.__cacheKey=W,A.__webglTexture=q[W].texture}return L}function je(A,_,L){return Math.floor(Math.floor(A/L)/_)}function Ke(A,_,L,j){const W=A.updateRanges;if(W.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,_.width,_.height,L,j,_.data);else{W.sort((Q,ee)=>Q.start-ee.start);let se=0;for(let Q=1;Q<W.length;Q++){const ee=W[se],xe=W[Q],ye=ee.start+ee.count,pe=je(xe.start,_.width,4),ze=je(ee.start,_.width,4);xe.start<=ye+1&&pe===ze&&je(xe.start+xe.count-1,_.width,4)===pe?ee.count=Math.max(ee.count,xe.start+xe.count-ee.start):(++se,W[se]=xe)}W.length=se+1;const J=r.getParameter(r.UNPACK_ROW_LENGTH),ue=r.getParameter(r.UNPACK_SKIP_PIXELS),me=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,_.width);for(let Q=0,ee=W.length;Q<ee;Q++){const xe=W[Q],ye=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),ze=ye%_.width,I=Math.floor(ye/_.width),ae=pe,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,ze,I,ae,re,L,j,_.data)}A.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,J),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,me)}}function K(A,_,L){let j=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=r.TEXTURE_3D);const q=De(A,_),W=_.source;t.bindTexture(j,A.__webglTexture,r.TEXTURE0+L);const se=n.get(W);if(W.version!==se.__version||q===!0){t.activeTexture(r.TEXTURE0+L);const J=Ge.getPrimaries(Ge.workingColorSpace),ue=_.colorSpace===$n?null:Ge.getPrimaries(_.colorSpace),me=_.colorSpace===$n||J===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Q=x(_.image,!1,i.maxTextureSize);Q=st(_,Q);const ee=s.convert(_.format,_.colorSpace),xe=s.convert(_.type);let ye=y(_.internalFormat,ee,xe,_.colorSpace,_.isVideoTexture);le(j,_);let pe;const ze=_.mipmaps,I=_.isVideoTexture!==!0,ae=se.__version===void 0||q===!0,re=W.dataReady,_e=w(_,Q);if(_.isDepthTexture)ye=E(_.format===mi,_.type),ae&&(I?t.texStorage2D(r.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,ye,Q.width,Q.height,0,ee,xe,null));else if(_.isDataTexture)if(ze.length>0){I&&ae&&t.texStorage2D(r.TEXTURE_2D,_e,ye,ze[0].width,ze[0].height);for(let te=0,V=ze.length;te<V;te++)pe=ze[te],I?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,pe.width,pe.height,ee,xe,pe.data):t.texImage2D(r.TEXTURE_2D,te,ye,pe.width,pe.height,0,ee,xe,pe.data);_.generateMipmaps=!1}else I?(ae&&t.texStorage2D(r.TEXTURE_2D,_e,ye,Q.width,Q.height),re&&Ke(_,Q,ee,xe)):t.texImage2D(r.TEXTURE_2D,0,ye,Q.width,Q.height,0,ee,xe,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,ye,ze[0].width,ze[0].height,Q.depth);for(let te=0,V=ze.length;te<V;te++)if(pe=ze[te],_.format!==sn)if(ee!==null)if(I){if(re)if(_.layerUpdates.size>0){const ge=Jl(pe.width,pe.height,_.format,_.type);for(const Te of _.layerUpdates){const Je=pe.data.subarray(Te*ge/pe.data.BYTES_PER_ELEMENT,(Te+1)*ge/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Te,pe.width,pe.height,1,ee,Je)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,Q.depth,ee,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,ye,pe.width,pe.height,Q.depth,0,pe.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,Q.depth,ee,xe,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,ye,pe.width,pe.height,Q.depth,0,ee,xe,pe.data)}else{I&&ae&&t.texStorage2D(r.TEXTURE_2D,_e,ye,ze[0].width,ze[0].height);for(let te=0,V=ze.length;te<V;te++)pe=ze[te],_.format!==sn?ee!==null?I?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,pe.width,pe.height,ee,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,te,ye,pe.width,pe.height,0,pe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,pe.width,pe.height,ee,xe,pe.data):t.texImage2D(r.TEXTURE_2D,te,ye,pe.width,pe.height,0,ee,xe,pe.data)}else if(_.isDataArrayTexture)if(I){if(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,ye,Q.width,Q.height,Q.depth),re)if(_.layerUpdates.size>0){const te=Jl(Q.width,Q.height,_.format,_.type);for(const V of _.layerUpdates){const ge=Q.data.subarray(V*te/Q.data.BYTES_PER_ELEMENT,(V+1)*te/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,V,Q.width,Q.height,1,ee,xe,ge)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ee,xe,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,ee,xe,Q.data);else if(_.isData3DTexture)I?(ae&&t.texStorage3D(r.TEXTURE_3D,_e,ye,Q.width,Q.height,Q.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ee,xe,Q.data)):t.texImage3D(r.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,ee,xe,Q.data);else if(_.isFramebufferTexture){if(ae)if(I)t.texStorage2D(r.TEXTURE_2D,_e,ye,Q.width,Q.height);else{let te=Q.width,V=Q.height;for(let ge=0;ge<_e;ge++)t.texImage2D(r.TEXTURE_2D,ge,ye,te,V,0,ee,xe,null),te>>=1,V>>=1}}else if(ze.length>0){if(I&&ae){const te=Me(ze[0]);t.texStorage2D(r.TEXTURE_2D,_e,ye,te.width,te.height)}for(let te=0,V=ze.length;te<V;te++)pe=ze[te],I?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ee,xe,pe):t.texImage2D(r.TEXTURE_2D,te,ye,ee,xe,pe);_.generateMipmaps=!1}else if(I){if(ae){const te=Me(Q);t.texStorage2D(r.TEXTURE_2D,_e,ye,te.width,te.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee,xe,Q)}else t.texImage2D(r.TEXTURE_2D,0,ye,ee,xe,Q);g(_)&&m(j),se.__version=W.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ne(A,_,L){if(_.image.length!==6)return;const j=De(A,_),q=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+L);const W=n.get(q);if(q.version!==W.__version||j===!0){t.activeTexture(r.TEXTURE0+L);const se=Ge.getPrimaries(Ge.workingColorSpace),J=_.colorSpace===$n?null:Ge.getPrimaries(_.colorSpace),ue=_.colorSpace===$n||se===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const me=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ee=[];for(let V=0;V<6;V++)!me&&!Q?ee[V]=x(_.image[V],!0,i.maxCubemapSize):ee[V]=Q?_.image[V].image:_.image[V],ee[V]=st(_,ee[V]);const xe=ee[0],ye=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),ze=y(_.internalFormat,ye,pe,_.colorSpace),I=_.isVideoTexture!==!0,ae=W.__version===void 0||j===!0,re=q.dataReady;let _e=w(_,xe);le(r.TEXTURE_CUBE_MAP,_);let te;if(me){I&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,ze,xe.width,xe.height);for(let V=0;V<6;V++){te=ee[V].mipmaps;for(let ge=0;ge<te.length;ge++){const Te=te[ge];_.format!==sn?ye!==null?I?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge,ze,Te.width,Te.height,0,Te.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge,0,0,Te.width,Te.height,ye,pe,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge,ze,Te.width,Te.height,0,ye,pe,Te.data)}}}else{if(te=_.mipmaps,I&&ae){te.length>0&&_e++;const V=Me(ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,ze,V.width,V.height)}for(let V=0;V<6;V++)if(Q){I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ee[V].width,ee[V].height,ye,pe,ee[V].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ze,ee[V].width,ee[V].height,0,ye,pe,ee[V].data);for(let ge=0;ge<te.length;ge++){const Je=te[ge].image[V].image;I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge+1,0,0,Je.width,Je.height,ye,pe,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge+1,ze,Je.width,Je.height,0,ye,pe,Je.data)}}else{I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ye,pe,ee[V]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ze,ye,pe,ee[V]);for(let ge=0;ge<te.length;ge++){const Te=te[ge];I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge+1,0,0,ye,pe,Te.image[V]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge+1,ze,ye,pe,Te.image[V])}}}g(_)&&m(r.TEXTURE_CUBE_MAP),W.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ie(A,_,L,j,q,W){const se=s.convert(L.format,L.colorSpace),J=s.convert(L.type),ue=y(L.internalFormat,se,J,L.colorSpace),me=n.get(_),Q=n.get(L);if(Q.__renderTarget=_,!me.__hasExternalTextures){const ee=Math.max(1,_.width>>W),xe=Math.max(1,_.height>>W);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?t.texImage3D(q,W,ue,ee,xe,_.depth,0,se,J,null):t.texImage2D(q,W,ue,ee,xe,0,se,J,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),pt(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,q,Q.__webglTexture,0,P(_)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,q,Q.__webglTexture,W),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(A,_,L){if(r.bindRenderbuffer(r.RENDERBUFFER,A),_.depthBuffer){const j=_.depthTexture,q=j&&j.isDepthTexture?j.type:null,W=E(_.stencilBuffer,q),se=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(_),W,_.width,_.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(_),W,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,W,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,A)}else{const j=_.textures;for(let q=0;q<j.length;q++){const W=j[q],se=s.convert(W.format,W.colorSpace),J=s.convert(W.type),ue=y(W.internalFormat,se,J,W.colorSpace);pt(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(_),ue,_.width,_.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(_),ue,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,ue,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(A,_,L){const j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",b)),q.__webglTexture===void 0){q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),le(r.TEXTURE_CUBE_MAP,_.depthTexture);const me=s.convert(_.depthTexture.format),Q=s.convert(_.depthTexture.type);let ee;_.depthTexture.format===zn?ee=r.DEPTH_COMPONENT24:_.depthTexture.format===mi&&(ee=r.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ee,_.width,_.height,0,me,Q,null)}}else O(_.depthTexture,0);const W=q.__webglTexture,se=P(_),J=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+L:r.TEXTURE_2D,ue=_.depthTexture.format===mi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(_.depthTexture.format===zn)pt(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,J,W,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,ue,J,W,0);else if(_.depthTexture.format===mi)pt(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,J,W,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,ue,J,W,0);else throw new Error("Unknown depthTexture format")}function Ce(A){const _=n.get(A),L=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",q)};j.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=j}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let j=0;j<6;j++)be(_.__webglFramebuffer[j],A,j);else{const j=A.texture.mipmaps;j&&j.length>0?be(_.__webglFramebuffer[0],A,0):be(_.__webglFramebuffer,A,0)}else if(L){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=r.createRenderbuffer(),Le(_.__webglDepthbuffer[j],A,!1);else{const q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,W)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),Le(_.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,W)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(A,_,L){const j=n.get(A);_!==void 0&&ie(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),L!==void 0&&Ce(A)}function Fe(A){const _=A.texture,L=n.get(A),j=n.get(_);A.addEventListener("dispose",C);const q=A.textures,W=A.isWebGLCubeRenderTarget===!0,se=q.length>1;if(se||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=_.version,a.memory.textures++),W){L.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[J]=[];for(let ue=0;ue<_.mipmaps.length;ue++)L.__webglFramebuffer[J][ue]=r.createFramebuffer()}else L.__webglFramebuffer[J]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)L.__webglFramebuffer[J]=r.createFramebuffer()}else L.__webglFramebuffer=r.createFramebuffer();if(se)for(let J=0,ue=q.length;J<ue;J++){const me=n.get(q[J]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&pt(A)===!1){L.__webglMultisampledFramebuffer=r.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let J=0;J<q.length;J++){const ue=q[J];L.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,L.__webglColorRenderbuffer[J]);const me=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),ee=y(ue.internalFormat,me,Q,ue.colorSpace,A.isXRRenderTarget===!0),xe=P(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ee,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,L.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(L.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(L.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(W){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),le(r.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)ie(L.__webglFramebuffer[J][ue],A,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue);else ie(L.__webglFramebuffer[J],A,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(_)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let J=0,ue=q.length;J<ue;J++){const me=q[J],Q=n.get(me);let ee=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,Q.__webglTexture),le(ee,me),ie(L.__webglFramebuffer,A,me,r.COLOR_ATTACHMENT0+J,ee,0),g(me)&&m(ee)}t.unbindTexture()}else{let J=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(J,j.__webglTexture),le(J,_),_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)ie(L.__webglFramebuffer[ue],A,_,r.COLOR_ATTACHMENT0,J,ue);else ie(L.__webglFramebuffer,A,_,r.COLOR_ATTACHMENT0,J,0);g(_)&&m(J),t.unbindTexture()}A.depthBuffer&&Ce(A)}function $e(A){const _=A.textures;for(let L=0,j=_.length;L<j;L++){const q=_[L];if(g(q)){const W=M(A),se=n.get(q).__webglTexture;t.bindTexture(W,se),m(W),t.unbindTexture()}}}const tt=[],Be=[];function dt(A){if(A.samples>0){if(pt(A)===!1){const _=A.textures,L=A.width,j=A.height;let q=r.COLOR_BUFFER_BIT;const W=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(A),J=_.length>1;if(J)for(let me=0;me<_.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ue=A.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let me=0;me<_.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[me]);const Q=n.get(_[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,L,j,0,0,L,j,q,r.NEAREST),l===!0&&(tt.length=0,Be.length=0,tt.push(r.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(tt.push(W),Be.push(W),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<_.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,se.__webglColorRenderbuffer[me]);const Q=n.get(_[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function P(A){return Math.min(i.maxSamples,A.samples)}function pt(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(A){const _=a.render.frame;f.get(A)!==_&&(f.set(A,_),A.update())}function st(A,_){const L=A.colorSpace,j=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||L!==Zi&&L!==$n&&(Ge.getTransfer(L)===it?(j!==sn||q!==Jt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",L)),_}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=rt,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function n_(r,e){function t(n,i=$n){let s;const a=Ge.getTransfer(i);if(n===Jt)return r.UNSIGNED_BYTE;if(n===Do)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return r.BYTE;if(n===Gc)return r.SHORT;if(n===Sr)return r.UNSIGNED_SHORT;if(n===Po)return r.INT;if(n===Rn)return r.UNSIGNED_INT;if(n===mn)return r.FLOAT;if(n===Bn)return r.HALF_FLOAT;if(n===Xc)return r.ALPHA;if(n===Yc)return r.RGB;if(n===sn)return r.RGBA;if(n===zn)return r.DEPTH_COMPONENT;if(n===mi)return r.DEPTH_STENCIL;if(n===qc)return r.RED;if(n===Io)return r.RED_INTEGER;if(n===Ki)return r.RG;if(n===Uo)return r.RG_INTEGER;if(n===No)return r.RGBA_INTEGER;if(n===Ms||n===ys||n===Ss||n===Es)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ga||n===Ha||n===Wa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ka)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===Ya||n===qa||n===ja||n===Ka||n===Za||n===$a)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xa||n===Ya)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return s.COMPRESSED_R11_EAC;if(n===Ka)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return s.COMPRESSED_RG11_EAC;if(n===$a)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===ho||n===uo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ja)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===po||n===mo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fo)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===go||n===_o||n===xo||n===vo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===go)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class s_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ih(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:i_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a_ extends Mi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,p=null;const x=typeof XRWebGLBinding<"u",g=new s_,m={},M=t.getContextAttributes();let y=null,E=null;const w=[],b=[],C=new Ne;let v=null;const T=new Yt;T.viewport=new nt;const Y=new Yt;Y.viewport=new nt;const R=[T,Y],F=new ld;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=w[K];return ne===void 0&&(ne=new js,w[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=w[K];return ne===void 0&&(ne=new js,w[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=w[K];return ne===void 0&&(ne=new js,w[K]=ne),ne.getHandSpace()};function O(K){const ne=b.indexOf(K.inputSource);if(ne===-1)return;const ie=w[ne];ie!==void 0&&(ie.update(K.inputSource,K.frame,c||a),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",B);for(let K=0;K<w.length;K++){const ne=b[K];ne!==null&&(b[K]=null,w[K].disconnect(ne))}z=null,H=null,g.reset();for(const K in m)delete m[K];e.setRenderTarget(y),d=null,h=null,u=null,i=null,E=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",U),i.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Le=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=M.stencil?mi:zn,Le=M.stencil?Er:Rn);const Ce={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new wn(h.textureWidth,h.textureHeight,{format:sn,type:Jt,depthTexture:new wr(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new wn(d.framebufferWidth,d.framebufferHeight,{format:sn,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(K){for(let ne=0;ne<K.removed.length;ne++){const ie=K.removed[ne],Le=b.indexOf(ie);Le>=0&&(b[Le]=null,w[Le].disconnect(ie))}for(let ne=0;ne<K.added.length;ne++){const ie=K.added[ne];let Le=b.indexOf(ie);if(Le===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=b.length){b.push(ie),Le=Ce;break}else if(b[Ce]===null){b[Ce]=ie,Le=Ce;break}if(Le===-1)break}const be=w[Le];be&&be.connect(ie)}}const $=new D,Z=new D;function ce(K,ne,ie){$.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ie.matrixWorld);const Le=$.distanceTo(Z),be=ne.projectionMatrix.elements,Ce=ie.projectionMatrix.elements,rt=be[14]/(be[10]-1),Fe=be[14]/(be[10]+1),$e=(be[9]+1)/be[5],tt=(be[9]-1)/be[5],Be=(be[8]-1)/be[0],dt=(Ce[8]+1)/Ce[0],P=rt*Be,pt=rt*dt,He=Le/(-Be+dt),st=He*-Be;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(st),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Me=rt+He,A=Fe+He,_=P-st,L=pt+(Le-st),j=$e*Fe/A*Me,q=tt*Fe/A*Me;K.projectionMatrix.makePerspective(_,L,j,q,Me,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ne=K.near,ie=K.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),F.near=Y.near=T.near=ne,F.far=Y.far=T.far=ie,(z!==F.near||H!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,H=F.far),F.layers.mask=K.layers.mask|6,T.layers.mask=F.layers.mask&-5,Y.layers.mask=F.layers.mask&-3;const Le=K.parent,be=F.cameras;oe(F,Le);for(let Ce=0;Ce<be.length;Ce++)oe(be[Ce],Le);be.length===2?ce(F,T,Y):F.projectionMatrix.copy(T.projectionMatrix),le(K,F,Le)};function le(K,ne,ie){ie===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$i*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(K){return m[K]};let De=null;function je(K,ne){if(f=ne.getViewerPose(c||a),p=ne,f!==null){const ie=f.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let Le=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let Fe=0;Fe<ie.length;Fe++){const $e=ie[Fe];let tt=null;if(d!==null)tt=d.getViewport($e);else{const dt=u.getViewSubImage(h,$e);tt=dt.viewport,Fe===0&&(e.setRenderTargetTextures(E,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(E))}let Be=R[Fe];Be===void 0&&(Be=new Yt,Be.layers.enable(Fe),Be.viewport=new nt,R[Fe]=Be),Be.matrix.fromArray($e.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray($e.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(tt.x,tt.y,tt.width,tt.height),Fe===0&&(F.matrix.copy(Be.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Be)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Fe=u.getDepthInformation(ie[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(Fe,i.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Fe=0;Fe<ie.length;Fe++){const $e=ie[Fe].camera;if($e){let tt=m[$e];tt||(tt=new ih,m[$e]=tt);const Be=u.getCameraImage($e);tt.sourceTexture=Be}}}}for(let ie=0;ie<w.length;ie++){const Le=b[ie],be=w[ie];Le!==null&&be!==void 0&&be.update(Le,ne,c||a)}De&&De(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}const Ke=new ph;Ke.setAnimationLoop(je),this.setAnimationLoop=function(K){De=K},this.dispose=function(){}}}const ui=new wt,o_=new Pe;function l_(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,lh(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,y,E){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,E)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),y=M.envMap,E=M.envMapRotation;y&&(g.envMap.value=y,ui.copy(E),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),g.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(ui)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function c_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const E=y.program;n.uniformBlockBinding(M,E)}function c(M,y){let E=i[M.id];E===void 0&&(p(M),E=f(M),i[M.id]=E,M.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(M,w);const b=e.render.frame;s[M.id]!==b&&(h(M),s[M.id]=b)}function f(M){const y=u();M.__bindingPointIndex=y;const E=r.createBuffer(),w=M.__size,b=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,w,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,E),E}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],E=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,C=E.length;b<C;b++){const v=Array.isArray(E[b])?E[b]:[E[b]];for(let T=0,Y=v.length;T<Y;T++){const R=v[T];if(d(R,b,T,w)===!0){const F=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let O=0;O<z.length;O++){const U=z[O],B=x(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,F+H,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,H),H+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,y,E,w){const b=M.value,C=y+"_"+E;if(w[C]===void 0)return typeof b=="number"||typeof b=="boolean"?w[C]=b:w[C]=b.clone(),!0;{const v=w[C];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return w[C]=b,!0}else if(v.equals(b)===!1)return v.copy(b),!0}return!1}function p(M){const y=M.uniforms;let E=0;const w=16;for(let C=0,v=y.length;C<v;C++){const T=Array.isArray(y[C])?y[C]:[y[C]];for(let Y=0,R=T.length;Y<R;Y++){const F=T[Y],z=Array.isArray(F.value)?F.value:[F.value];for(let H=0,O=z.length;H<O;H++){const U=z[H],B=x(U),$=E%w,Z=$%B.boundary,ce=$+Z;E+=Z,ce!==0&&w-ce<B.storage&&(E+=w-ce),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=B.storage}}}const b=E%w;return b>0&&(E+=w-b),M.__size=E,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const h_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function u_(){return yn===null&&(yn=new eh(h_,16,16,Ki,Bn),yn.name="DFG_LUT",yn.minFilter=kt,yn.magFilter=kt,yn.wrapS=pn,yn.wrapT=pn,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class f_{constructor(e={}){const{canvas:t=Su(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Jt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=d,g=new Set([No,Uo,Io]),m=new Set([Jt,Rn,Sr,Er,Do,Lo]),M=new Uint32Array(4),y=new Int32Array(4);let E=null,w=null;const b=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let Y=!1;this._outputColorSpace=ht;let R=0,F=0,z=null,H=-1,O=null;const U=new nt,B=new nt;let $=null;const Z=new Ie(0);let ce=0,oe=t.width,le=t.height,De=1,je=null,Ke=null;const K=new nt(0,0,oe,le),ne=new nt(0,0,oe,le);let ie=!1;const Le=new Go;let be=!1,Ce=!1;const rt=new Pe,Fe=new D,$e=new nt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function dt(){return z===null?De:1}let P=n;function pt(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Je,!1),P===null){const N="webgl2";if(P=pt(N,S),P===null)throw pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Ue("WebGLRenderer: "+S.message),S}let He,st,Me,A,_,L,j,q,W,se,J,ue,me,Q,ee,xe,ye,pe,ze,I,ae,re,_e;function te(){He=new fg(P),He.init(),ae=new n_(P,He),st=new rg(P,He,e,ae),Me=new e_(P,He),st.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),A=new mg(P),_=new V0,L=new t_(P,He,Me,_,st,ae,A),j=new ug(T),q=new Md(P),re=new ng(P,q),W=new dg(P,q,A,re),se=new _g(P,W,q,re,A),pe=new gg(P,st,L),ee=new sg(_),J=new z0(T,j,He,st,re,ee),ue=new l_(T,_),me=new G0,Q=new j0(He),ye=new tg(T,j,Me,se,p,l),xe=new Q0(T,se,st),_e=new c_(P,A,st,Me),ze=new ig(P,He,A),I=new pg(P,He,A),A.programs=J.programs,T.capabilities=st,T.extensions=He,T.properties=_,T.renderLists=me,T.shadowMap=xe,T.state=Me,T.info=A}te(),x!==Jt&&(v=new vg(x,t.width,t.height,i,s));const V=new a_(T,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=He.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=He.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(S){S!==void 0&&(De=S,this.setSize(oe,le,!1))},this.getSize=function(S){return S.set(oe,le)},this.setSize=function(S,N,X=!0){if(V.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=S,le=N,t.width=Math.floor(S*De),t.height=Math.floor(N*De),X===!0&&(t.style.width=S+"px",t.style.height=N+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(oe*De,le*De).floor()},this.setDrawingBufferSize=function(S,N,X){oe=S,le=N,De=X,t.width=Math.floor(S*X),t.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===Jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(U)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,N,X,G){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,N,X,G),Me.viewport(U.copy(K).multiplyScalar(De).round())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,N,X,G){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,N,X,G),Me.scissor(B.copy(ne).multiplyScalar(De).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){Me.setScissorTest(ie=S)},this.setOpaqueSort=function(S){je=S},this.setTransparentSort=function(S){Ke=S},this.getClearColor=function(S){return S.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let G=0;if(S){let k=!1;if(z!==null){const fe=z.texture.format;k=g.has(fe)}if(k){const fe=z.texture.type,ve=m.has(fe),de=ye.getClearColor(),Se=ye.getClearAlpha(),we=de.r,Ve=de.g,Ye=de.b;ve?(M[0]=we,M[1]=Ve,M[2]=Ye,M[3]=Se,P.clearBufferuiv(P.COLOR,0,M)):(y[0]=we,y[1]=Ve,y[2]=Ye,y[3]=Se,P.clearBufferiv(P.COLOR,0,y))}else G|=P.COLOR_BUFFER_BIT}N&&(G|=P.DEPTH_BUFFER_BIT),X&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),ye.dispose(),me.dispose(),Q.dispose(),_.dispose(),j.dispose(),se.dispose(),re.dispose(),_e.dispose(),J.dispose(),V.dispose(),V.removeEventListener("sessionstart",ii),V.removeEventListener("sessionend",ri),xn.stop()};function ge(S){S.preventDefault(),dl("WebGLRenderer: Context Lost."),Y=!0}function Te(){dl("WebGLRenderer: Context Restored."),Y=!1;const S=A.autoReset,N=xe.enabled,X=xe.autoUpdate,G=xe.needsUpdate,k=xe.type;te(),A.autoReset=S,xe.enabled=N,xe.autoUpdate=X,xe.needsUpdate=G,xe.type=k}function Je(S){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ze(S){const N=S.target;N.removeEventListener("dispose",Ze),Ot(N)}function Ot(S){mt(S),_.remove(S)}function mt(S){const N=_.get(S).programs;N!==void 0&&(N.forEach(function(X){J.releaseProgram(X)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,G,k,fe){N===null&&(N=tt);const ve=k.isMesh&&k.matrixWorld.determinant()<0,de=Uh(S,N,X,G,k);Me.setMaterial(G,ve);let Se=X.index,we=1;if(G.wireframe===!0){if(Se=W.getWireframeAttribute(X),Se===void 0)return;we=2}const Ve=X.drawRange,Ye=X.attributes.position;let Ae=Ve.start*we,at=(Ve.start+Ve.count)*we;fe!==null&&(Ae=Math.max(Ae,fe.start*we),at=Math.min(at,(fe.start+fe.count)*we)),Se!==null?(Ae=Math.max(Ae,0),at=Math.min(at,Se.count)):Ye!=null&&(Ae=Math.max(Ae,0),at=Math.min(at,Ye.count));const yt=at-Ae;if(yt<0||yt===1/0)return;re.setup(k,G,de,X,Se);let Mt,ot=ze;if(Se!==null&&(Mt=q.get(Se),ot=I,ot.setIndex(Mt)),k.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*dt()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(k.isLine){let Bt=G.linewidth;Bt===void 0&&(Bt=1),Me.setLineWidth(Bt*dt()),k.isLineSegments?ot.setMode(P.LINES):k.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else k.isPoints?ot.setMode(P.POINTS):k.isSprite&&ot.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Cs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Bt=k._multiDrawStarts,Ee=k._multiDrawCounts,Kt=k._multiDrawCount,Qe=Se?q.get(Se).bytesPerElement:1,on=_.get(G).currentProgram.getUniforms();for(let vn=0;vn<Kt;vn++)on.setValue(P,"_gl_DrawID",vn),ot.render(Bt[vn]/Qe,Ee[vn])}else if(k.isInstancedMesh)ot.renderInstances(Ae,yt,k.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Bt);ot.renderInstances(Ae,yt,Ee)}else ot.render(Ae,yt)};function an(S,N,X){S.transparent===!0&&S.side===nn&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,Br(S,N,X),S.side=Qn,S.needsUpdate=!0,Br(S,N,X),S.side=nn):Br(S,N,X)}this.compile=function(S,N,X=null){X===null&&(X=S),w=Q.get(X),w.init(N),C.push(w),X.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),S!==X&&S.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights();const G=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const de=fe[ve];an(de,X,k),G.add(de)}else an(fe,X,k),G.add(fe)}),w=C.pop(),G},this.compileAsync=function(S,N,X=null){const G=this.compile(S,N,X);return new Promise(k=>{function fe(){if(G.forEach(function(ve){_.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){k(S);return}setTimeout(fe,10)}He.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let gt=null;function yi(S){gt&&gt(S)}function ii(){xn.stop()}function ri(){xn.start()}const xn=new ph;xn.setAnimationLoop(yi),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(S){gt=S,V.setAnimationLoop(S),S===null?xn.stop():xn.start()},V.addEventListener("sessionstart",ii),V.addEventListener("sessionend",ri),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const X=V.enabled===!0&&V.isPresenting===!0,G=v!==null&&(z===null||X)&&v.begin(T,z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,N,z),w=Q.get(S,C.length),w.init(N),C.push(w),rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Le.setFromProjectionMatrix(rt,bn,N.reversedDepth),Ce=this.localClippingEnabled,be=ee.init(this.clippingPlanes,Ce),E=me.get(S,b.length),E.init(),b.push(E),V.enabled===!0&&V.isPresenting===!0){const ve=T.xr.getDepthSensingMesh();ve!==null&&Qt(ve,N,-1/0,T.sortObjects)}Qt(S,N,0,T.sortObjects),E.finish(),T.sortObjects===!0&&E.sort(je,Ke),Be=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Be&&ye.addToRenderList(E,S),this.info.render.frame++,be===!0&&ee.beginShadows();const k=w.state.shadowsArray;if(xe.render(k,S,N),be===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&v.hasRenderPass())===!1){const ve=E.opaque,de=E.transmissive;if(w.setupLights(),N.isArrayCamera){const Se=N.cameras;if(de.length>0)for(let we=0,Ve=Se.length;we<Ve;we++){const Ye=Se[we];Or(ve,de,S,Ye)}Be&&ye.render(S);for(let we=0,Ve=Se.length;we<Ve;we++){const Ye=Se[we];zs(E,S,Ye,Ye.viewport)}}else de.length>0&&Or(ve,de,S,N),Be&&ye.render(S),zs(E,S,N)}z!==null&&F===0&&(L.updateMultisampleRenderTarget(z),L.updateRenderTargetMipmap(z)),G&&v.end(T),S.isScene===!0&&S.onAfterRender(T,S,N),re.resetDefaultState(),H=-1,O=null,C.pop(),C.length>0?(w=C[C.length-1],be===!0&&ee.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?E=b[b.length-1]:E=null};function Qt(S,N,X,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Le.intersectsSprite(S)){G&&$e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(rt);const ve=se.update(S),de=S.material;de.visible&&E.push(S,ve,de,X,$e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Le.intersectsObject(S))){const ve=se.update(S),de=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$e.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),$e.copy(ve.boundingSphere.center)),$e.applyMatrix4(S.matrixWorld).applyMatrix4(rt)),Array.isArray(de)){const Se=ve.groups;for(let we=0,Ve=Se.length;we<Ve;we++){const Ye=Se[we],Ae=de[Ye.materialIndex];Ae&&Ae.visible&&E.push(S,ve,Ae,X,$e.z,Ye)}}else de.visible&&E.push(S,ve,de,X,$e.z,null)}}const fe=S.children;for(let ve=0,de=fe.length;ve<de;ve++)Qt(fe[ve],N,X,G)}function zs(S,N,X,G){const{opaque:k,transmissive:fe,transparent:ve}=S;w.setupLightsView(X),be===!0&&ee.setGlobalState(T.clippingPlanes,X),G&&Me.viewport(U.copy(G)),k.length>0&&Si(k,N,X),fe.length>0&&Si(fe,N,X),ve.length>0&&Si(ve,N,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Or(S,N,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Ae=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new wn(1,1,{generateMipmaps:!0,type:Ae?Bn:Jt,minFilter:pi,samples:Math.max(4,st.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const fe=w.state.transmissionRenderTarget[G.id],ve=G.viewport||U;fe.setSize(ve.z*T.transmissionResolutionScale,ve.w*T.transmissionResolutionScale);const de=T.getRenderTarget(),Se=T.getActiveCubeFace(),we=T.getActiveMipmapLevel();T.setRenderTarget(fe),T.getClearColor(Z),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),Be&&ye.render(X);const Ve=T.toneMapping;T.toneMapping=Tn;const Ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),be===!0&&ee.setGlobalState(T.clippingPlanes,G),Si(S,X,G),L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let at=0,yt=N.length;at<yt;at++){const Mt=N[at],{object:ot,geometry:Bt,material:Ee,group:Kt}=Mt;if(Ee.side===nn&&ot.layers.test(G.layers)){const Qe=Ee.side;Ee.side=jt,Ee.needsUpdate=!0,Zo(ot,X,G,Bt,Ee,Kt),Ee.side=Qe,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe))}T.setRenderTarget(de,Se,we),T.setClearColor(Z,ce),Ye!==void 0&&(G.viewport=Ye),T.toneMapping=Ve}function Si(S,N,X){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,fe=S.length;k<fe;k++){const ve=S[k],{object:de,geometry:Se,group:we}=ve;let Ve=ve.material;Ve.allowOverride===!0&&G!==null&&(Ve=G),de.layers.test(X.layers)&&Zo(de,N,X,Se,Ve,we)}}function Zo(S,N,X,G,k,fe){S.onBeforeRender(T,N,X,G,k,fe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(T,N,X,G,S,fe),k.transparent===!0&&k.side===nn&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,T.renderBufferDirect(X,N,G,k,S,fe),k.side=Qn,k.needsUpdate=!0,T.renderBufferDirect(X,N,G,k,S,fe),k.side=nn):T.renderBufferDirect(X,N,G,k,S,fe),S.onAfterRender(T,N,X,G,k,fe)}function Br(S,N,X){N.isScene!==!0&&(N=tt);const G=_.get(S),k=w.state.lights,fe=w.state.shadowsArray,ve=k.state.version,de=J.getParameters(S,k.state,fe,N,X),Se=J.getProgramCacheKey(de);let we=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Ve=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=j.get(S.envMap||G.environment,Ve),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",Ze),we=new Map,G.programs=we);let Ye=we.get(Se);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===ve)return Jo(S,de),Ye}else de.uniforms=J.getUniforms(S),S.onBeforeCompile(de,T),Ye=J.acquireProgram(de,Se),we.set(Se,Ye),G.uniforms=de.uniforms;const Ae=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=ee.uniform),Jo(S,de),G.needsLights=Fh(S),G.lightsStateVersion=ve,G.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Ye,G.uniformsList=null,Ye}function $o(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Jo(S,N){const X=_.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Uh(S,N,X,G,k){N.isScene!==!0&&(N=tt),L.resetTextureUnits();const fe=N.fog,ve=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,de=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Zi,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,we=j.get(G.envMap||ve,Se),Ve=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ye=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,yt=!!X.morphAttributes.color;let Mt=Tn;G.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Mt=T.toneMapping);const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Bt=ot!==void 0?ot.length:0,Ee=_.get(G),Kt=w.state.lights;if(be===!0&&(Ce===!0||S!==O)){const Ct=S===O&&G.id===H;ee.setState(G,S,Ct)}let Qe=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Kt.state.version||Ee.outputColorSpace!==de||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==we||G.fog===!0&&Ee.fog!==fe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ee.numPlanes||Ee.numIntersection!==ee.numIntersection)||Ee.vertexAlphas!==Ve||Ee.vertexTangents!==Ye||Ee.morphTargets!==Ae||Ee.morphNormals!==at||Ee.morphColors!==yt||Ee.toneMapping!==Mt||Ee.morphTargetsCount!==Bt)&&(Qe=!0):(Qe=!0,Ee.__version=G.version);let on=Ee.currentProgram;Qe===!0&&(on=Br(G,N,k));let vn=!1,si=!1,Ei=!1;const ct=on.getUniforms(),It=Ee.uniforms;if(Me.useProgram(on.program)&&(vn=!0,si=!0,Ei=!0),G.id!==H&&(H=G.id,si=!0),vn||O!==S){Me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(P,"projectionMatrix",S.projectionMatrix),ct.setValue(P,"viewMatrix",S.matrixWorldInverse);const kn=ct.map.cameraPosition;kn!==void 0&&kn.setValue(P,Fe.setFromMatrixPosition(S.matrixWorld)),st.logarithmicDepthBuffer&&ct.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),O!==S&&(O=S,si=!0,Ei=!0)}if(Ee.needsLights&&(Kt.state.directionalShadowMap.length>0&&ct.setValue(P,"directionalShadowMap",Kt.state.directionalShadowMap,L),Kt.state.spotShadowMap.length>0&&ct.setValue(P,"spotShadowMap",Kt.state.spotShadowMap,L),Kt.state.pointShadowMap.length>0&&ct.setValue(P,"pointShadowMap",Kt.state.pointShadowMap,L)),k.isSkinnedMesh){ct.setOptional(P,k,"bindMatrix"),ct.setOptional(P,k,"bindMatrixInverse");const Ct=k.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ct.setValue(P,"boneTexture",Ct.boneTexture,L))}k.isBatchedMesh&&(ct.setOptional(P,k,"batchingTexture"),ct.setValue(P,"batchingTexture",k._matricesTexture,L),ct.setOptional(P,k,"batchingIdTexture"),ct.setValue(P,"batchingIdTexture",k._indirectTexture,L),ct.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ct.setValue(P,"batchingColorTexture",k._colorsTexture,L));const Vn=X.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&pe.update(k,X,on),(si||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,ct.setValue(P,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(It.envMapIntensity.value=N.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=u_()),si&&(ct.setValue(P,"toneMappingExposure",T.toneMappingExposure),Ee.needsLights&&Nh(It,Ei),fe&&G.fog===!0&&ue.refreshFogUniforms(It,fe),ue.refreshMaterialUniforms(It,G,De,le,w.state.transmissionRenderTarget[S.id]),Ts.upload(P,$o(Ee),It,L)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ts.upload(P,$o(Ee),It,L),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(P,"center",k.center),ct.setValue(P,"modelViewMatrix",k.modelViewMatrix),ct.setValue(P,"normalMatrix",k.normalMatrix),ct.setValue(P,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ct=G.uniformsGroups;for(let kn=0,bi=Ct.length;kn<bi;kn++){const Qo=Ct[kn];_e.update(Qo,on),_e.bind(Qo,on)}}return on}function Nh(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Fh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,N,X){const G=_.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=N,_.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const X=_.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Oh=P.createFramebuffer();this.setRenderTarget=function(S,N=0,X=0){z=S,R=N,F=X;let G=null,k=!1,fe=!1;if(S){const de=_.get(S);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),U.copy(S.viewport),B.copy(S.scissor),$=S.scissorTest,Me.viewport(U),Me.scissor(B),Me.setScissorTest($),H=-1;return}else if(de.__webglFramebuffer===void 0)L.setupRenderTarget(S);else if(de.__hasExternalTextures)L.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ve=S.depthTexture;if(de.__boundDepthTexture!==Ve){if(Ve!==null&&_.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(S)}}const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(fe=!0);const we=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[N])?G=we[N][X]:G=we[N],k=!0):S.samples>0&&L.useMultisampledRTT(S)===!1?G=_.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?G=we[X]:G=we,U.copy(S.viewport),B.copy(S.scissor),$=S.scissorTest}else U.copy(K).multiplyScalar(De).floor(),B.copy(ne).multiplyScalar(De).floor(),$=ie;if(X!==0&&(G=Oh),Me.bindFramebuffer(P.FRAMEBUFFER,G)&&Me.drawBuffers(S,G),Me.viewport(U),Me.scissor(B),Me.setScissorTest($),k){const de=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,X)}else if(fe){const de=N;for(let Se=0;Se<S.textures.length;Se++){const we=_.get(S.textures[Se]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Se,we.__webglTexture,X,de)}}else if(S!==null&&X!==0){const de=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,X)}H=-1},this.readRenderTargetPixels=function(S,N,X,G,k,fe,ve,de=0){if(!(S&&S.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Me.bindFramebuffer(P.FRAMEBUFFER,Se);try{const we=S.textures[de],Ve=we.format,Ye=we.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!st.textureFormatReadable(Ve)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ye)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&X>=0&&X<=S.height-k&&P.readPixels(N,X,G,k,ae.convert(Ve),ae.convert(Ye),fe)}finally{const we=z!==null?_.get(z).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,G,k,fe,ve,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(N>=0&&N<=S.width-G&&X>=0&&X<=S.height-k){Me.bindFramebuffer(P.FRAMEBUFFER,Se);const we=S.textures[de],Ve=we.format,Ye=we.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!st.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(N,X,G,k,ae.convert(Ve),ae.convert(Ye),0);const at=z!==null?_.get(z).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,at);const yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Eu(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Ae),P.deleteSync(yt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){const G=Math.pow(2,-X),k=Math.floor(S.image.width*G),fe=Math.floor(S.image.height*G),ve=N!==null?N.x:0,de=N!==null?N.y:0;L.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,ve,de,k,fe),Me.unbindTexture()};const Bh=P.createFramebuffer(),zh=P.createFramebuffer();this.copyTextureToTexture=function(S,N,X=null,G=null,k=0,fe=0){let ve,de,Se,we,Ve,Ye,Ae,at,yt;const Mt=S.isCompressedTexture?S.mipmaps[fe]:S.image;if(X!==null)ve=X.max.x-X.min.x,de=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Ve=X.min.y,Ye=X.isBox3?X.min.z:0;else{const It=Math.pow(2,-k);ve=Math.floor(Mt.width*It),de=Math.floor(Mt.height*It),S.isDataArrayTexture?Se=Mt.depth:S.isData3DTexture?Se=Math.floor(Mt.depth*It):Se=1,we=0,Ve=0,Ye=0}G!==null?(Ae=G.x,at=G.y,yt=G.z):(Ae=0,at=0,yt=0);const ot=ae.convert(N.format),Bt=ae.convert(N.type);let Ee;N.isData3DTexture?(L.setTexture3D(N,0),Ee=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(L.setTexture2DArray(N,0),Ee=P.TEXTURE_2D_ARRAY):(L.setTexture2D(N,0),Ee=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Kt=P.getParameter(P.UNPACK_ROW_LENGTH),Qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),vn=P.getParameter(P.UNPACK_SKIP_ROWS),si=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ve),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ye);const Ei=S.isDataArrayTexture||S.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const It=_.get(S),Vn=_.get(N),Ct=_.get(It.__renderTarget),kn=_.get(Vn.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Ct.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let bi=0;bi<Se;bi++)Ei&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(S).__webglTexture,k,Ye+bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(N).__webglTexture,fe,yt+bi)),P.blitFramebuffer(we,Ve,ve,de,Ae,at,ve,de,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||_.has(S)){const It=_.get(S),Vn=_.get(N);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Bh),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,zh);for(let Ct=0;Ct<Se;Ct++)Ei?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.__webglTexture,k,Ye+Ct):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,It.__webglTexture,k),ct?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vn.__webglTexture,fe,yt+Ct):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Vn.__webglTexture,fe),k!==0?P.blitFramebuffer(we,Ve,ve,de,Ae,at,ve,de,P.COLOR_BUFFER_BIT,P.NEAREST):ct?P.copyTexSubImage3D(Ee,fe,Ae,at,yt+Ct,we,Ve,ve,de):P.copyTexSubImage2D(Ee,fe,Ae,at,we,Ve,ve,de);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ee,fe,Ae,at,yt,ve,de,Se,ot,Bt,Mt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,fe,Ae,at,yt,ve,de,Se,ot,Mt.data):P.texSubImage3D(Ee,fe,Ae,at,yt,ve,de,Se,ot,Bt,Mt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Ae,at,ve,de,ot,Bt,Mt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Ae,at,Mt.width,Mt.height,ot,Mt.data):P.texSubImage2D(P.TEXTURE_2D,fe,Ae,at,ve,de,ot,Bt,Mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,vn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,si),fe===0&&N.generateMipmaps&&P.generateMipmap(Ee),Me.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&L.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?L.setTextureCube(S,0):S.isData3DTexture?L.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?L.setTexture2DArray(S,0):L.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){R=0,F=0,z=null,Me.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const d_=/^[og]\s*(.+)?/,p_=/^mtllib /,m_=/^usemtl /,g_=/^usemap /,Sc=/\s+/,Ec=new D,Sa=new D,bc=new D,Tc=new D,tn=new D,ms=new Ie;function __(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;Ec.fromArray(i,e),Sa.fromArray(i,t),bc.fromArray(i,n),tn.subVectors(bc,Sa),Tc.subVectors(Ec,Sa),tn.cross(Tc),tn.normalize(),s.push(tn.x,tn.y,tn.z),s.push(tn.x,tn.y,tn.z),s.push(tn.x,tn.y,tn.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,a,o,l,c){const f=this.vertices.length;let u=this.parseVertexIndex(e,f),h=this.parseVertexIndex(t,f),d=this.parseVertexIndex(n,f);if(this.addVertex(u,h,d),this.addColor(u,h,d),o!==void 0&&o!==""){const p=this.normals.length;u=this.parseNormalIndex(o,p),h=this.parseNormalIndex(l,p),d=this.parseNormalIndex(c,p),this.addNormal(u,h,d)}else this.addFaceNormal(u,h,d);if(i!==void 0&&i!==""){const p=this.uvs.length;u=this.parseUVIndex(i,p),h=this.parseUVIndex(s,p),d=this.parseUVIndex(a,p),this.addUV(u,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class wc extends ei{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,a=new uh(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new __;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const f=c.charAt(0);if(f!=="#")if(f==="v"){const u=c.split(Sc);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(ms.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),ht),t.colors.push(ms.r,ms.g,ms.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(f==="f"){const h=c.slice(1).trim().split(Sc),d=[];for(let x=0,g=h.length;x<g;x++){const m=h[x];if(m.length>0){const M=m.split("/");d.push(M)}}const p=d[0];for(let x=1,g=d.length-1;x<g;x++){const m=d[x],M=d[x+1];t.addFace(p[0],m[0],M[0],p[1],m[1],M[1],p[2],m[2],M[2])}}else if(f==="l"){const u=c.substring(1).trim().split(" ");let h=[];const d=[];if(c.indexOf("/")===-1)h=u;else for(let p=0,x=u.length;p<x;p++){const g=u[p].split("/");g[0]!==""&&h.push(g[0]),g[1]!==""&&d.push(g[1])}t.addLineGeometry(h,d)}else if(f==="p"){const h=c.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((i=d_.exec(c))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(m_.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(p_.test(c))t.materialLibraries.push(c.substring(7).trim());else if(g_.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(i=c.split(" "),i.length>1){const h=i[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new gi;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],f=c.geometry,u=c.materials,h=f.type==="Line",d=f.type==="Points";let p=!1;if(f.vertices.length===0)continue;const x=new Gt;x.setAttribute("position",new xt(f.vertices,3)),f.normals.length>0&&x.setAttribute("normal",new xt(f.normals,3)),f.colors.length>0&&(p=!0,x.setAttribute("color",new xt(f.colors,3))),f.hasUVIndices===!0&&x.setAttribute("uv",new xt(f.uvs,2));const g=[];for(let M=0,y=u.length;M<y;M++){const E=u[M],w=E.name+"_"+E.smooth+"_"+p;let b=t.materials[w];if(this.materials!==null){if(b=this.materials.create(E.name),h&&b&&!(b instanceof xr)){const C=new xr;gn.prototype.copy.call(C,b),C.color.copy(b.color),b=C}else if(d&&b&&!(b instanceof fr)){const C=new fr({size:10,sizeAttenuation:!1});gn.prototype.copy.call(C,b),C.color.copy(b.color),C.map=b.map,b=C}}b===void 0&&(h?b=new xr:d?b=new fr({size:1,sizeAttenuation:!1}):b=new pr,b.name=E.name,b.flatShading=!E.smooth,b.vertexColors=p,t.materials[w]=b),g.push(b)}let m;if(g.length>1){for(let M=0,y=u.length;M<y;M++){const E=u[M];x.addGroup(E.groupStart,E.groupCount,M)}h?m=new zl(x,g):d?m=new pa(x,g):m=new bt(x,g)}else h?m=new zl(x,g[0]):d?m=new pa(x,g[0]):m=new bt(x,g[0]);m.name=c.name,s.add(m)}else if(t.vertices.length>0){const o=new fr({size:1,sizeAttenuation:!1}),l=new Gt;l.setAttribute("position",new xt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new xt(t.colors,3)),o.vertexColors=!0);const c=new pa(l,o);s.add(c)}return s}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var rn=Uint8Array,Hi=Uint16Array,x_=Int32Array,Mh=new rn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yh=new rn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),v_=new rn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Sh=function(r,e){for(var t=new Hi(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new x_(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Eh=Sh(Mh,2),bh=Eh.b,M_=Eh.r;bh[28]=258,M_[258]=28;var y_=Sh(yh,0),S_=y_.b,Ao=new Hi(32768);for(var ut=0;ut<32768;++ut){var jn=(ut&43690)>>1|(ut&21845)<<1;jn=(jn&52428)>>2|(jn&13107)<<2,jn=(jn&61680)>>4|(jn&3855)<<4,Ao[ut]=((jn&65280)>>8|(jn&255)<<8)>>1}var yr=(function(r,e,t){for(var n=r.length,i=0,s=new Hi(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new Hi(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new Hi(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],f=e-r[i],u=a[r[i]-1]++<<f,h=u|(1<<f)-1;u<=h;++u)o[Ao[u]>>l]=c}else for(o=new Hi(n),i=0;i<n;++i)r[i]&&(o[i]=Ao[a[r[i]-1]++]>>15-r[i]);return o}),Fr=new rn(288);for(var ut=0;ut<144;++ut)Fr[ut]=8;for(var ut=144;ut<256;++ut)Fr[ut]=9;for(var ut=256;ut<280;++ut)Fr[ut]=7;for(var ut=280;ut<288;++ut)Fr[ut]=8;var Th=new rn(32);for(var ut=0;ut<32;++ut)Th[ut]=5;var E_=yr(Fr,9,1),b_=yr(Th,5,1),Ea=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},un=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},ba=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},T_=function(r){return(r+7)/8|0},w_=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new rn(r.subarray(e,t))},A_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fn=function(r,e,t){var n=new Error(e||A_[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,fn),!t)throw n;return n},R_=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new rn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new rn(i*3));var c=function(Ce){var rt=t.length;if(Ce>rt){var Fe=new rn(Math.max(rt*2,Ce));Fe.set(t),t=Fe}},f=e.f||0,u=e.p||0,h=e.b||0,d=e.l,p=e.d,x=e.m,g=e.n,m=i*8;do{if(!d){f=un(r,u,1);var M=un(r,u+1,3);if(u+=3,M)if(M==1)d=E_,p=b_,x=9,g=5;else if(M==2){var b=un(r,u,31)+257,C=un(r,u+10,15)+4,v=b+un(r,u+5,31)+1;u+=14;for(var T=new rn(v),Y=new rn(19),R=0;R<C;++R)Y[v_[R]]=un(r,u+R*3,7);u+=C*3;for(var F=Ea(Y),z=(1<<F)-1,H=yr(Y,F,1),R=0;R<v;){var O=H[un(r,u,z)];u+=O&15;var y=O>>4;if(y<16)T[R++]=y;else{var U=0,B=0;for(y==16?(B=3+un(r,u,3),u+=2,U=T[R-1]):y==17?(B=3+un(r,u,7),u+=3):y==18&&(B=11+un(r,u,127),u+=7);B--;)T[R++]=U}}var $=T.subarray(0,b),Z=T.subarray(b);x=Ea($),g=Ea(Z),d=yr($,x,1),p=yr(Z,g,1)}else fn(1);else{var y=T_(u)+4,E=r[y-4]|r[y-3]<<8,w=y+E;if(w>i){l&&fn(0);break}o&&c(h+E),t.set(r.subarray(y,w),h),e.b=h+=E,e.p=u=w*8,e.f=f;continue}if(u>m){l&&fn(0);break}}o&&c(h+131072);for(var ce=(1<<x)-1,oe=(1<<g)-1,le=u;;le=u){var U=d[ba(r,u)&ce],De=U>>4;if(u+=U&15,u>m){l&&fn(0);break}if(U||fn(2),De<256)t[h++]=De;else if(De==256){le=u,d=null;break}else{var je=De-254;if(De>264){var R=De-257,Ke=Mh[R];je=un(r,u,(1<<Ke)-1)+bh[R],u+=Ke}var K=p[ba(r,u)&oe],ne=K>>4;K||fn(3),u+=K&15;var Z=S_[ne];if(ne>3){var Ke=yh[ne];Z+=ba(r,u)&(1<<Ke)-1,u+=Ke}if(u>m){l&&fn(0);break}o&&c(h+131072);var ie=h+je;if(h<Z){var Le=s-Z,be=Math.min(Z,ie);for(Le+h<0&&fn(3);h<be;++h)t[h]=n[Le+h]}for(;h<ie;++h)t[h]=t[h-Z]}}e.l=d,e.p=le,e.b=h,e.f=f,d&&(f=1,e.m=x,e.d=p,e.n=g)}while(!f);return h!=t.length&&a?w_(t,0,h):t.subarray(0,h)},C_=new rn(0),P_=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&fn(6,"invalid zlib data"),(r[1]>>5&1)==1&&fn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function D_(r,e){return R_(r.subarray(P_(r),-4),{i:2},e,e)}var L_=typeof TextDecoder<"u"&&new TextDecoder,I_=0;try{L_.decode(C_,{stream:!0}),I_=1}catch{}function wh(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,a=Math.floor((i+s)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?s=a:i=a,a=Math.floor((i+s)/2);return a}function U_(r,e,t,n){const i=[],s=[],a=[];i[0]=1;for(let o=1;o<=t;++o){s[o]=e-n[r+1-o],a[o]=n[r+o]-e;let l=0;for(let c=0;c<o;++c){const f=a[c+1],u=s[o-c],h=i[c]/(f+u);i[c]=l+f*h,l=u*h}i[o]=l}return i}function N_(r,e,t,n){const i=wh(r,n,e),s=U_(i,n,r,e),a=new nt(0,0,0,0);for(let o=0;o<=r;++o){const l=t[i-r+o],c=s[o],f=l.w*c;a.x+=l.x*f,a.y+=l.y*f,a.z+=l.z*f,a.w+=l.w*c}return a}function F_(r,e,t,n,i){const s=[];for(let u=0;u<=t;++u)s[u]=0;const a=[];for(let u=0;u<=n;++u)a[u]=s.slice(0);const o=[];for(let u=0;u<=t;++u)o[u]=s.slice(0);o[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[r+1-u],c[u]=i[r+u]-e;let h=0;for(let d=0;d<u;++d){const p=c[d+1],x=l[u-d];o[u][d]=p+x;const g=o[d][u-1]/o[u][d];o[d][u]=h+p*g,h=x*g}o[u][u]=h}for(let u=0;u<=t;++u)a[0][u]=o[u][t];for(let u=0;u<=t;++u){let h=0,d=1;const p=[];for(let x=0;x<=t;++x)p[x]=s.slice(0);p[0][0]=1;for(let x=1;x<=n;++x){let g=0;const m=u-x,M=t-x;u>=x&&(p[d][0]=p[h][0]/o[M+1][m],g=p[d][0]*o[m][M]);const y=m>=-1?1:-m,E=u-1<=M?x-1:t-u;for(let b=y;b<=E;++b)p[d][b]=(p[h][b]-p[h][b-1])/o[M+1][m+b],g+=p[d][b]*o[m+b][M];u<=M&&(p[d][x]=-p[h][x-1]/o[M+1][u],g+=p[d][x]*o[u][M]),a[x][u]=g;const w=h;h=d,d=w}}let f=t;for(let u=1;u<=n;++u){for(let h=0;h<=t;++h)a[u][h]*=f;f*=t-u}return a}function O_(r,e,t,n,i){const s=i<r?i:r,a=[],o=wh(r,n,e),l=F_(o,n,r,s,e),c=[];for(let f=0;f<t.length;++f){const u=t[f].clone(),h=u.w;u.x*=h,u.y*=h,u.z*=h,c[f]=u}for(let f=0;f<=s;++f){const u=c[o-r].clone().multiplyScalar(l[f][0]);for(let h=1;h<=r;++h)u.add(c[o-r+h].clone().multiplyScalar(l[f][h]));a[f]=u}for(let f=s+1;f<=i+1;++f)a[f]=new nt(0,0,0);return a}function B_(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function z_(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const a=r[s];t[s]=new D(a.x,a.y,a.z),n[s]=a.w}const i=[];for(let s=0;s<e;++s){const a=t[s].clone();for(let o=1;o<=s;++o)a.sub(i[s-o].clone().multiplyScalar(B_(s,o)*n[o]));i[s]=a.divideScalar(n[0])}return i}function V_(r,e,t,n,i){const s=O_(r,e,t,n,i);return z_(s)}class k_ extends mf{constructor(e,t,n,i,s){super();const a=t?t.length-1:0,o=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||a;for(let l=0;l<o;++l){const c=n[l];this.controlPoints[l]=new nt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new D){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=N_(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new D){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=V_(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new nt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let qe,St,Xt;class Ta extends ei{constructor(e){super(e)}load(e,t,n,i){const s=this,a=s.path===""?ad.extractUrlBase(e):s.path,o=new uh(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(q_(e))qe=new Y_().parse(e);else{const i=Ch(e);if(!j_(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Rc(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Rc(i));qe=new X_().parse(i)}const n=new td(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new G_(n,this.manager).parse(qe)}}class G_{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){St=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new H_().parse(i);return this.parseScene(i,s,n),Xt}parseConnections(){const e=new Map;return"Connections"in qe&&qe.Connections.connections.forEach(function(n){const i=n[0],s=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:s,relationship:a};e.get(i).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in qe.Objects){const n=qe.Objects.Video;for(const i in n){const s=n[i],a=parseInt(i);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){const o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;case"webp":s="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in qe.Objects){const n=qe.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,a=i!==void 0?i.value:0,o=s!==void 0?s.value:0;if(n.wrapS=a===0?xi:pn,n.wrapT=o===0?xi:pn,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const s=i.path;s||i.setPath(this.textureLoader.path);const a=St.get(e.id).children;let o;if(a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(o=t[a[0].ID],(o.indexOf("blob:")===0||o.indexOf("data:")===0)&&i.setPath(void 0)),o===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Lt;const l=i.load(o);return i.setPath(s),l}parseMaterials(e){const t=new Map;if("Material"in qe.Objects){const n=qe.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!St.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(s.toLowerCase()){case"phong":o=new pr;break;case"lambert":o=new zf;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new pr;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Ge.colorSpaceToWorking(new Ie().fromArray(e.Diffuse.value),ht):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Ge.colorSpaceToWorking(new Ie().fromArray(e.DiffuseColor.value),ht)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Ge.colorSpaceToWorking(new Ie().fromArray(e.Emissive.value),ht):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Ge.colorSpaceToWorking(new Ie().fromArray(e.EmissiveColor.value),ht)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Ge.colorSpaceToWorking(new Ie().fromArray(e.Specular.value),ht):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Ge.colorSpaceToWorking(new Ie().fromArray(e.SpecularColor.value),ht));const s=this;return St.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=s.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,a.ID),i.map!==void 0&&(i.map.colorSpace=ht);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ht);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=vs,i.envMap.colorSpace=ht);break;case"SpecularColor":i.specularMap=s.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ht);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in qe.Objects&&t in qe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=St.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in qe.Objects){const n=qe.Objects.Deformer;for(const i in n){const s=n[i],a=St.get(parseInt(i));if(s.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(s.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new Pe().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],a=t[s.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=St.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Xt=new gi;const i=this.parseModels(e.skeletons,t,n),s=qe.Objects.Model,a=this;i.forEach(function(l){const c=s[l.ID];a.setLookAtProperties(l,c),St.get(l.ID).parents.forEach(function(u){const h=i.get(u.ID);h!==void 0&&h.add(l)}),l.parent===null&&Xt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Xt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Rh(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new W_().parse();Xt.children.length===1&&Xt.children[0].isGroup&&(Xt.children[0].animations=o,Xt=Xt.children[0]),Xt.animations=o}parseModels(e,t,n){const i=new Map,s=qe.Objects.Model;for(const a in s){const o=parseInt(a),l=s[a],c=St.get(o);let f=this.buildSkeleton(c,e,o,l.attrName);if(!f){switch(l.attrType){case"Camera":f=this.createCamera(c);break;case"Light":f=this.createLight(c);break;case"Mesh":f=this.createMesh(c,t,n);break;case"NurbsCurve":f=this.createCurve(c,t);break;case"LimbNode":case"Root":f=new yo;break;case"Null":default:f=new gi;break}f.name=l.attrName?et.sanitizeNodeName(l.attrName):"",f.userData.originalName=l.attrName,f.ID=o}this.getTransformData(f,l),i.set(o,f)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,f){if(c.ID===a.ID){const u=s;s=new yo,s.matrixWorld.copy(c.transformLink),s.name=i?et.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,l.bones[f]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=qe.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new ft;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let f=45;n.FieldOfView!==void 0&&(f=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Yt(f,c,s,a),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new ft;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new ft;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=qe.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new ft;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=Ge.colorSpaceToWorking(new Ie().fromArray(n.Color.value),ht));let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Mr(s,a,o,l);break;case 1:t=new bs(s,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Dt.degToRad(n.InnerAngle.value));let f=0;n.OuterAngle!==void 0&&(f=Dt.degToRad(n.OuterAngle.value),f=Math.max(f,1)),t=new id(s,a,o,c,f,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Mr(s,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,a=null;const o=[];if(e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new pr({name:ei.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,f=s.groups.length;c<f;c++){const u=s.groups[c];(u.materialIndex<0||u.materialIndex>=o.length)&&(u.materialIndex=o.length,l=!0)}if(l){const c=new pr;o.push(c)}}return s.FBX_Deformer?(i=new lf(s,a),i.normalizeSkinWeights()):i=new bt(s,a),i}createCurve(e,t){const n=e.children.reduce(function(s,a){return t.has(a.ID)&&(s=t.get(a.ID)),s},null),i=new xr({name:ei.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new th(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Lr(t.RotationOrder.value):n.eulerOrder=Lr(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&St.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=qe.Objects.Model[i.ID];if("Lcl_Translation"in s){const a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Xt.add(e.target)):e.lookAt(new D().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const a=e[s];St.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;St.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new ko(a.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in qe.Objects){const t=qe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Pe().fromArray(s.Matrix.a)}):e[i.Node]=new Pe().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in qe){if("AmbientColor"in qe.GlobalSettings){const e=qe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new Ie().setRGB(t,n,i,ht);Xt.add(new dh(s,1))}}"UnitScaleFactor"in qe.GlobalSettings&&(Xt.userData.unitScaleFactor=qe.GlobalSettings.UnitScaleFactor.value)}}}class H_{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in qe.Objects){const n=qe.Objects.Geometry;for(const i in n){const s=St.get(parseInt(i)),a=this.parseGeometry(s,n[i],e);t.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],a=e.parents.map(function(u){return qe.Objects.Model[u.ID]});if(a.length===0)return;const o=e.children.reduce(function(u,h){return i[h.ID]!==void 0&&(u=i[h.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&s.push(n.morphTargets[u.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Lr(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const f=Rh(c);return this.genGeometry(t,o,s,f)}genGeometry(e,t,n,i){const s=new Gt;e.attrName&&(s.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new xt(o.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new xt(o.colors,3)),t&&(s.setAttribute("skinIndex",new Vo(o.weightsIndices,4)),s.setAttribute("skinWeight",new xt(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){const c=new ke().getNormalMatrix(i),f=new xt(o.normal,3);f.applyNormalMatrix(c),s.setAttribute("normal",f)}if(o.uvs.forEach(function(c,f){const u=f===0?"uv":`uv${f}`;s.setAttribute(u,new xt(o.uvs[f],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],f=0;if(o.materialIndex.forEach(function(u,h){u!==c&&(s.addGroup(f,h-f,c),c=u,f=h)}),s.groups.length>0){const u=s.groups[s.groups.length-1],h=u.start+u.count;h!==o.materialIndex.length&&s.addGroup(h,o.materialIndex.length-h,c)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:s,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,a=[],o=[],l=[],c=[],f=[],u=[];const h=this;return e.vertexIndices.forEach(function(d,p){let x,g=!1;d<0&&(d=d^-1,g=!0);let m=[],M=[];if(a.push(d*3,d*3+1,d*3+2),e.color){const y=gs(p,n,d,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(y){M.push(y.weight),m.push(y.id)}),M.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const y=[0,0,0,0],E=[0,0,0,0];M.forEach(function(w,b){let C=w,v=m[b];E.forEach(function(T,Y,R){if(C>T){R[Y]=C,C=T;const F=y[Y];y[Y]=v,v=F}})}),m=y,M=E}for(;M.length<4;)M.push(0),m.push(0);for(let y=0;y<4;++y)f.push(M[y]),u.push(m[y])}if(e.normal){const y=gs(p,n,d,e.normal);o.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=gs(p,n,d,e.material)[0],x<0&&(h.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(y,E){const w=gs(p,n,d,y);c[E]===void 0&&(c[E]=[]),c[E].push(w[0]),c[E].push(w[1])}),i++,g&&(h.genFace(t,e,a,x,o,l,c,f,u,i),n++,i=0,a=[],o=[],l=[],c=[],f=[],u=[])}),t}getNormalNewell(e){const t=new D(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t.x+=(i.y-s.y)*(i.z+s.z),t.y+=(i.z-s.z)*(i.x+s.x),t.z+=(i.x-s.x)*(i.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new D(0,1,0):new D(0,0,1)).cross(t).normalize(),s=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:s}}flattenVertex(e,t,n){return new Ne(e.dot(t),e.dot(n))}genFace(e,t,n,i,s,a,o,l,c,f){let u;if(f>3){const h=[],d=t.baseVertexPositions||t.vertexPositions;for(let m=0;m<n.length;m+=3)h.push(new D(d[n[m]],d[n[m+1]],d[n[m+2]]));const{tangent:p,bitangent:x}=this.getNormalTangentAndBitangent(h),g=[];for(const m of h)g.push(this.flattenVertex(m,p,x));u=Ho.triangulateShape(g,[])}else u=[[0,1,2]];for(const[h,d,p]of u)e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(a[h*3]),e.colors.push(a[h*3+1]),e.colors.push(a[h*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[p*3]),e.colors.push(a[p*3+1]),e.colors.push(a[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2]),e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[p*3]),e.normal.push(s[p*3+1]),e.normal.push(s[p*3+2])),t.uv&&t.uv.forEach(function(x,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(o[g][h*2]),e.uvs[g].push(o[g][h*2+1]),e.uvs[g].push(o[g][d*2]),e.uvs[g].push(o[g][d*2+1]),e.uvs[g].push(o[g][p*2]),e.uvs[g].push(o[g][p*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=qe.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,s){const a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],f=e.attributes.position.count*3,u=new Float32Array(f);for(let x=0;x<c.length;x++){const g=c[x]*3;u[g]=l[x*3],u[g+1]=l[x*3+1],u[g+2]=l[x*3+2]}const h={vertexIndices:o,vertexPositions:u,baseVertexPositions:a},d=this.genBuffers(h),p=new xt(d.vertex,3);p.name=s||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let a=0,o=new Ie;a<i.length;a+=4)o.fromArray(i,a),Ge.colorSpaceToWorking(o,ht),o.toArray(i,a);return{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let a=0;a<i.length;++a)s.push(a);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Gt;const n=t-1,i=e.KnotVector.a,s=[],a=e.Points.a;for(let u=0,h=a.length;u<h;u+=4)s.push(new nt().fromArray(a,u));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let u=0;u<n;++u)s.push(s[u])}const f=new k_(n,i,s,o,l).getPoints(s.length*12);return new Gt().setFromPoints(f)}}class W_{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(qe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=qe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=qe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(K_),values:t[n].KeyValueFloat.a},s=St.get(i.id);if(s!==void 0){const a=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=qe.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],a=St.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const f=e.get(l.ID);if(f.curves.x!==void 0||f.curves.y!==void 0||f.curves.z!==void 0){if(s[c]===void 0){const u=St.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(u!==void 0){const h=qe.Objects.Model[u.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:h.attrName?et.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Xt.traverse(function(p){p.ID===h.id&&(d.transform=p.matrix,p.userData.transformData&&(d.eulerOrder=p.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Pe),"PreRotation"in h&&(d.preRotation=h.PreRotation.value),"PostRotation"in h&&(d.postRotation=h.PostRotation.value),s[c]=d}}s[c]&&(s[c][f.attr]=f)}else if(f.curves.morph!==void 0){if(s[c]===void 0){const u=St.get(l.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,h=St.get(u).parents[0].ID,d=St.get(h).parents[0].ID,p=St.get(d).parents[0].ID,x=qe.Objects.Model[p],g={modelName:x.attrName?et.sanitizeNodeName(x.attrName):"",morphName:qe.Objects.Deformer[u].attrName};s[c]=g}s[c][f.attr]=f}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=qe.Objects.AnimationStack,n={};for(const i in t){const s=St.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new jf(e.name,-1,t)}generateTracks(e){const t=[];let n=new D,i=new D;if(e.transform&&e.transform.decompose(n,new Ut,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(s,t,n);return new Dr(e+"."+i,s,a)}generateRotationTrack(e,t,n,i,s){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,s);a=h[0],o=h[1]}const l=Lr(0);n!==void 0&&(n=n.map(Dt.degToRad),n.push(l),n=new wt().fromArray(n),n=new Ut().setFromEuler(n)),i!==void 0&&(i=i.map(Dt.degToRad),i.push(l),i=new wt().fromArray(i),i=new Ut().setFromEuler(i).invert());const c=new Ut,f=new wt,u=[];if(!o||!a)return new er(e+".quaternion",[0],[0]);for(let h=0;h<o.length;h+=3)f.set(o[h],o[h+1],o[h+2],s),c.setFromEuler(f),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),h>2&&new Ut().fromArray(u,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,h/3*4);return new er(e+".quaternion",a,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=Xt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Pr(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const a=t[s];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const f=t.x.values[a];s.push(f),i[0]=f}else s.push(i[0]);if(o!==-1){const f=t.y.values[o];s.push(f),i[1]=f}else s.push(i[1]);if(l!==-1){const f=t.z.values[l];s.push(f),i[2]=f}else s.push(i[2])}),s}interpolateRotations(e,t,n,i){const s=[],a=[];s.push(e.times[0]),a.push(Dt.degToRad(e.values[0])),a.push(Dt.degToRad(t.values[0])),a.push(Dt.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Dt.degToRad),f=[e.values[o],t.values[o],n.values[o]];if(isNaN(f[0])||isNaN(f[1])||isNaN(f[2]))continue;const u=f.map(Dt.degToRad),h=[f[0]-l[0],f[1]-l[1],f[2]-l[2]],d=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const x=Math.max(...d)/180,g=new wt(...c,i),m=new wt(...u,i),M=new Ut().setFromEuler(g),y=new Ut().setFromEuler(m);M.dot(y)&&y.set(-y.x,-y.y,-y.z,-y.w);const E=e.times[o-1],w=e.times[o]-E,b=new Ut,C=new wt;for(let v=0;v<1;v+=1/x)b.copy(M.clone().slerp(y.clone(),v)),s.push(E+v*w),C.setFromQuaternion(b,i),a.push(C.x),a.push(C.y),a.push(C.z)}else s.push(e.times[o]),a.push(Dt.degToRad(e.values[o])),a.push(Dt.degToRad(t.values[o])),a.push(Dt.degToRad(n.values[o]))}return[s,a]}}class X_{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Ah,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),f=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):f?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in o?(n==="PoseNode"?o.PoseNode.push(s):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=s)):typeof a.id=="number"?(o[n]={},o[n][a.id]=s):n!=="Properties70"&&(n==="PoseNode"?o[n]=[s]:o[n]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),f=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(h){return h.trim().replace(/^"/,"")}),i="connections",s=[c,f],$_(s,u),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=s),i in a&&Array.isArray(a[i])?a[i].push(s):i!=="a"?a[i]=s:a.a=s,this.setCurrentProp(a,i),i==="a"&&s.slice(-1)!==","&&(a.a=Aa(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Aa(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(f){return f.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Aa(c);break}this.getPrevNode()[s]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class Y_{parse(e){const t=new Ac(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Ah;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let h=0;h<s;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",f=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(o,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),f!==""&&(n.attrName=f),u!==""&&(n.attrType=u),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,a){a!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const o=D_(new Uint8Array(e.getArrayBuffer(a))),l=new Ac(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Ac{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class Ah{add(e,t){this[e]=t}}function q_(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===Ch(r,0,e.length)}function j_(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Rc(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function K_(r){return r/46186158e3}const Z_=[];function gs(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,a=s+n.dataSize;return J_(Z_,n.buffer,s,a)}const wa=new wt,Vi=new D;function Rh(r){const e=new Pe,t=new Pe,n=new Pe,i=new Pe,s=new Pe,a=new Pe,o=new Pe,l=new Pe,c=new Pe,f=new Pe,u=new Pe,h=new Pe,d=r.inheritType?r.inheritType:0;r.translation&&e.setPosition(Vi.fromArray(r.translation));const p=Lr(0);if(r.preRotation){const R=r.preRotation.map(Dt.degToRad);R.push(p),t.makeRotationFromEuler(wa.fromArray(R))}if(r.rotation){const R=r.rotation.map(Dt.degToRad);R.push(r.eulerOrder||p),n.makeRotationFromEuler(wa.fromArray(R))}if(r.postRotation){const R=r.postRotation.map(Dt.degToRad);R.push(p),i.makeRotationFromEuler(wa.fromArray(R)),i.invert()}r.scale&&s.scale(Vi.fromArray(r.scale)),r.scalingOffset&&o.setPosition(Vi.fromArray(r.scalingOffset)),r.scalingPivot&&a.setPosition(Vi.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Vi.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(Vi.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(u.copy(r.parentMatrix),f.copy(r.parentMatrixWorld));const x=t.clone().multiply(n).multiply(i),g=new Pe;g.extractRotation(f);const m=new Pe;m.copyPosition(f);const M=m.clone().invert().multiply(f),y=g.clone().invert().multiply(M),E=s,w=new Pe;if(d===0)w.copy(g).multiply(x).multiply(y).multiply(E);else if(d===1)w.copy(g).multiply(y).multiply(x).multiply(E);else{const F=new Pe().scale(new D().setFromMatrixScale(u)).clone().invert(),z=y.clone().multiply(F);w.copy(g).multiply(x).multiply(z).multiply(E)}const b=c.clone().invert(),C=a.clone().invert();let v=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(b).multiply(o).multiply(a).multiply(s).multiply(C);const T=new Pe().copyPosition(v),Y=f.clone().multiply(T);return h.copyPosition(Y),v=h.clone().multiply(w),v.premultiply(f.invert()),v}function Lr(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Aa(r){return r.split(",").map(function(t){return parseFloat(t)})}function Ch(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function $_(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function J_(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}const Cc={type:"change"},Ko={type:"start"},Ph={type:"end"},_s=new Ir,Pc=new Zn,Q_=Math.cos(70*Dt.DEG2RAD),Tt=new D,qt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ra=1e-6;class ex extends xd{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ut,this._lastTargetPosition=new D,this._quat=new Ut().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $l,this._sphericalDelta=new $l,this._scale=1,this._panOffset=new D,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new D,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nx.bind(this),this._onPointerDown=tx.bind(this),this._onPointerUp=ix.bind(this),this._onContextMenu=hx.bind(this),this._onMouseWheel=ax.bind(this),this._onKeyDown=ox.bind(this),this._onTouchStart=lx.bind(this),this._onTouchMove=cx.bind(this),this._onMouseDown=rx.bind(this),this._onMouseMove=sx.bind(this),this._interceptControlDown=ux.bind(this),this._interceptControlUp=fx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cc),this.update(),this.state=lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=qt:n>Math.PI&&(n-=qt),i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Tt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_s.origin.copy(this.object.position),_s.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_s.direction))<Q_?this.object.lookAt(this.target):(Pc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_s.intersectPlane(Pc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ra||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ra||this._lastTargetPosition.distanceToSquared(this.target)>Ra?(this.dispatchEvent(Cc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Tt.copy(i).sub(this.target);let s=Tt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tx(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function nx(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function ix(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ph),this.state=lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rx(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=lt.DOLLY;break;case Wi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=lt.ROTATE}break;case Wi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Ko)}function sx(r){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ax(r){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(r.preventDefault(),this.dispatchEvent(Ko),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ph))}function ox(r){this.enabled!==!1&&this._handleKeyDown(r)}function lx(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=lt.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=lt.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Ko)}function cx(r){switch(this._trackPointer(r),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=lt.NONE}}function hx(r){this.enabled!==!1&&r.preventDefault()}function ux(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fx(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ws=(r,e,t)=>Math.min(t,Math.max(e,r)),Sn=20;function dx(r){r.updateMatrixWorld(!0);const t=new Ft().setFromObject(r).getCenter(new D);return r.position.sub(t),r.updateMatrixWorld(!0),t}function Dc(r,e,t,n=1,i=0){const a=new Ft().setFromObject(r).getBoundingSphere(new ni),o=Math.max(a.radius,1),l=Math.max(n,.5),c=Dt.degToRad(e.fov),f=2*Math.atan(Math.tan(c/2)*e.aspect),u=o/Math.tan(c/2),h=o/Math.tan(f/2),d=Math.max(u,h)*1.15/l,p=Dt.degToRad(i);e.position.set(Math.sin(p)*d,o*.45,Math.cos(p)*d),e.near=Math.max(d/1e3,.1),e.far=Math.max(d*20,1e5),e.updateProjectionMatrix(),e.lookAt(0,0,0),t.target.set(0,0,0),t.minDistance=Math.max(o*.1,500),t.maxDistance=d*6,t.update()}function Kn(r){r.traverse(e=>{var t,n;e instanceof bt&&((t=e.geometry)==null||t.dispose(),Array.isArray(e.material)?e.material.forEach(i=>i.dispose()):(n=e.material)==null||n.dispose())})}function px(){const r=i=>{const s=document.createElement("canvas");s.width=512,s.height=512;const a=s.getContext("2d");if(!a)return null;i(a);const o=new df(s);return o.wrapS=xi,o.wrapT=xi,o.repeat.set(4,4),o},e=r(i=>{i.fillStyle="#8a9aa8",i.fillRect(0,0,512,512);for(let s=0;s<8e3;s+=1){const a=Math.random()*512,o=Math.random()*512,l=Math.random()*2+.5,f=138+(Math.random()*60-30);i.fillStyle=`rgb(${f}, ${f+10}, ${f+18})`,i.fillRect(a,o,l,l)}}),t=r(i=>{i.fillStyle="rgb(128, 128, 255)",i.fillRect(0,0,512,512);for(let s=0;s<3e3;s+=1){const a=Math.random()*512,o=Math.random()*512,l=Math.random()*3+1,c=128+(Math.random()-.5)*40,f=128+(Math.random()-.5)*40,u=255-Math.random()*30;i.fillStyle=`rgb(${c}, ${f}, ${u})`,i.fillRect(a,o,l,l)}}),n=r(i=>{i.fillStyle="rgb(220, 220, 220)",i.fillRect(0,0,512,512);for(let s=0;s<2e3;s+=1){const a=Math.random()*512,o=Math.random()*512,l=Math.random()*4+1,c=180+Math.random()*60;i.fillStyle=`rgb(${c}, ${c}, ${c})`,i.fillRect(a,o,l,l)}});return{map:e,normalMap:t,roughnessMap:n}}function mx(r,e){const t=px(),n=new Wo({map:t.map,normalMap:t.normalMap,normalScale:new Ne(.5,.5),roughnessMap:t.roughnessMap,roughness:.9,metalness:.08,color:11583696,transparent:!0,opacity:e,side:nn,emissive:3833272,emissiveIntensity:.15,envMapIntensity:.4,aoMapIntensity:.5});r.traverse(i=>{if(i instanceof bt){const s=n.clone(),a=Math.random();s.roughness=.85+a*.1,s.metalness=.05+a*.07,s.emissiveIntensity=.12+a*.08,s.color.multiplyScalar(1-a*.08),i.material=s,i.castShadow=!0,i.receiveShadow=!0}})}function gx(r,e){const t=new Ie(e);r.traverse(n=>{n instanceof bt&&(n.material=new Wo({color:t,emissive:t.clone().multiplyScalar(.8),emissiveIntensity:1.1,roughness:.12,metalness:.02,transparent:!0,opacity:1,side:nn,depthWrite:!1,depthTest:!1,toneMapped:!1}),n.renderOrder=50)})}function Lc(r){const e=new Wo({color:16765517,emissive:16752410,emissiveIntensity:1.45,roughness:.18,metalness:.05,transparent:!0,opacity:1,side:nn,depthWrite:!1,depthTest:!1,toneMapped:!1});r.traverse(t=>{t instanceof bt&&(t.material=e.clone(),t.renderOrder=65)})}function Dh(r,e){const t=new Ft().setFromObject(e),n=t.getSize(new D),i=t.getCenter(new D),s=Math.max(n.x,n.y,n.z)||1,o=new Ft().setFromObject(r).getSize(new D),l=Math.max(o.x,o.y,o.z)||1,c=s/l;if(c>5||c<.2){const f=ws(c,.02,500);r.scale.setScalar(f),r.updateMatrixWorld(!0);const h=new Ft().setFromObject(r).getCenter(new D);r.position.add(i.sub(h));return}r.position.copy(e.position),r.rotation.copy(e.rotation),r.scale.copy(e.scale)}function Lh(r,e){r.rotation.set(e.rotateX,e.rotateY,0),r.scale.setScalar(e.uniformScale),r.position.sub(e.centerOffset),r.updateMatrixWorld(!0)}function _x(r,e,t){t&&Lh(r,t),Ih(r,e)||Dh(r,e)}function Ca(r,e,t){t&&Lh(r,t),Ih(r,e)||Dh(r,e)}function Ih(r,e){const t=new Ft().setFromObject(r),n=new Ft().setFromObject(e);if(t.isEmpty()||n.isEmpty())return!1;if(t.intersectsBox(n))return!0;const i=t.getCenter(new D),s=n.getCenter(new D),a=n.getSize(new D).length();return i.distanceTo(s)<=a*.8}function xx(r,e,t){const n={x:ws(e.x,0,1),y:ws(e.y,0,1),z:ws(e.z,0,1)},i=r.getSize(new D),s=r.min,a=new D(s.x+i.x*n.x,s.y+i.y*n.y,s.z+i.z*n.z);return a.y+=t??i.y*.035,a}function Ro(r,e){const t=[],n=new Map,i=new Map,s=new Map;e&&Object.entries(e).forEach(([w,b])=>{if(!Number.isFinite(b))return;const C=w.trim().toLowerCase();s.set(C,Math.trunc(b)),s.set(C.replace(/[\s_-]+/g,""),Math.trunc(b))});const a=s.size>0,o=w=>{var v;if(a){const T=w.trim().toLowerCase(),Y=s.get(T);if(Y!=null)return Y;const R=s.get(T.replace(/[\s_-]+/g,""));if(R!=null)return R;const F=(v=w.match(/text\s*0*\d{1,4}/i))==null?void 0:v[0];if(F){const H=F.replace(/\s+/g,"").toLowerCase(),O=s.get(H);if(O!=null)return O}const z=w.match(/text[^0-9]*0*(\d{1,4})/i);if(z){const H=Number.parseInt(z[1],10);if(Number.isFinite(H)){const O=`text${String(H).padStart(3,"0")}`,U=s.get(O);if(U!=null)return U}}return null}const b=w.match(/(?:text|序号|编号)\s*0*(\d{1,4})/i);if(!b)return null;const C=Number.parseInt(b[1],10);return Number.isFinite(C)?C:null};r.updateMatrixWorld(!0),r.traverse(w=>{var F,z,H;const b=[];let C=w;for(let O=0;C&&O<6;O+=1)C.name&&b.push({node:C,name:C.name,serial:o(C.name)}),C=C.parent;const v=((F=b.find(O=>O.serial!=null))==null?void 0:F.serial)??null,T=((z=b[0])==null?void 0:z.name)??w.name??"",Y=v!=null?((H=b.find(O=>O.serial===v))==null?void 0:H.node)??null:null,R=a&&Y?Y.getWorldPosition(new D):null;if(w instanceof bt){const O=new Ft().setFromObject(w),U=O.isEmpty()?w.getWorldPosition(new D):O.getCenter(new D),B=R??U;if(t.push({name:T,point:B,serial:v}),v!=null&&v>0&&R&&(i.has(v)||i.set(v,{name:T,point:R.clone()})),v!=null&&v>0&&!O.isEmpty()){const $=n.get(v);$?$.box.union(O):n.set(v,{name:T,box:O.clone()})}}});const l=[],c=new Map;for(const w of t){const b=`${w.point.x.toFixed(3)}|${w.point.y.toFixed(3)}|${w.point.z.toFixed(3)}`,C=c.get(b);if(C!=null){const v=l[C];v.serial==null&&w.serial!=null&&(v.serial=w.serial),!v.name&&w.name&&(v.name=w.name);continue}c.set(b,l.length),l.push({name:w.name,point:w.point,serial:w.serial})}const f=new Map;for(const[w,b]of i.entries())f.set(w,{name:b.name,point:b.point.clone()});for(const[w,b]of n.entries())f.has(w)||f.set(w,{name:b.name,point:b.box.getCenter(new D)});for(const w of l)w.serial!=null&&w.serial>0&&!f.has(w.serial)&&f.set(w.serial,{name:w.name,point:w.point});const u=Array.from(f.entries()).map(([w,b])=>({name:b.name,point:b.point,serial:w})).sort((w,b)=>w.serial-b.serial||w.name.localeCompare(b.name,"zh-CN",{numeric:!0,sensitivity:"base"})),h=l.filter(w=>w.serial==null||w.serial<=0).sort((w,b)=>w.name.localeCompare(b.name,"zh-CN",{numeric:!0,sensitivity:"base"})),d=a?new Set(s.values()).size:0,p=d>0?u.length/d:1,g=a&&u.length>0&&p>=.75?u:[...u,...h],m=[],M=new Map;for(const w of g){const b=m.length;m.push(w.point),w.serial!=null&&w.serial>0&&!M.has(w.serial)&&M.set(w.serial,b)}const y=Array.from(M.keys()).sort((w,b)=>w-b),E=new Map;return y.forEach((w,b)=>{const C=M.get(w);C!=null&&E.set(b+1,C)}),{points:m,indexBySerial:M,indexByNormalizedSerial:E}}function vx(r){const e=Ro(r);return Array.from(e.indexBySerial.keys()).sort((n,i)=>n-i).map((n,i)=>{const s=e.indexBySerial.get(n);if(s==null)return null;const a=e.points[s];return a?{serialNo:i+1,point:a.clone()}:null}).filter(n=>n!=null)}function Pa(r,e){const t=new Map;if(r.length===0||e.length===0)return t;const n=[];r.forEach((a,o)=>{e.forEach(l=>{const c=a.x-l.point.x,f=a.z-l.point.z,u=a.y-l.point.y,h=c*c+f*f+u*u*.05;n.push({pointIndex:o,serialNo:l.serialNo,cost:h})})}),n.sort((a,o)=>a.cost-o.cost);const i=new Set,s=new Set;for(const a of n)if(!(i.has(a.pointIndex)||s.has(a.serialNo))&&(t.set(a.pointIndex,a.serialNo),i.add(a.pointIndex),s.add(a.serialNo),i.size>=r.length||s.size>=e.length))break;return t}function Mx(r){const e=18+r*1.73%14+r%3*.35;return Number(e.toFixed(1))}function yx(r,e,t=!0){const n=new Map,i=[];for(const a of e){const o=Number.isInteger(a.pointIndex)&&a.pointIndex>=0&&a.pointIndex<r,l=Number.isInteger(a.serialNo)&&(a.serialNo??0)>0;if(!(!o&&!l)){if(o&&!n.has(a.pointIndex)){n.set(a.pointIndex,a);continue}l&&i.push(a)}}if(!t)return[...n.values(),...i].sort((a,o)=>{const l=a.serialNo??Number.MAX_SAFE_INTEGER,c=o.serialNo??Number.MAX_SAFE_INTEGER;return l!==c?l-c:a.pointIndex-o.pointIndex});const s=[];for(let a=0;a<r;a+=1){const o=n.get(a);if(o){s.push(o);continue}const l=String(a+1).padStart(3,"0");s.push({id:`roadway-auto-${l}`,name:`巷道-${l}`,airflow:Mx(a),pointIndex:a})}return s.push(...i),s}function Ex({paused:r=!1,rotationSpeed:e=.06,opacity:t=.35,brightness:n=1.2,disableRotation:i=!1,viewScale:s=1,viewAzimuthDeg:a=0,showRouteOverlay:o=!1,routeOverlayObjPath:l,routeOverlayColor:c="#52c41a",airflowLabels:f=[],roadwayPointObjPath:u,roadwayPointSerialReferenceObjPath:h,roadwayPointOverlayVisible:d=!1,roadwayPointLabels:p=[],autoFillRoadwayPointLabels:x=!0,roadwayPointSerialNameMap:g,roadwayPointShowSerial:m=!0,roadwaySerialHighlightObjPath:M,roadwaySerialHighlightVisible:y=!1}){const E=Oe.useRef(null),w=Oe.useRef(null),b=Oe.useRef({}),C=Oe.useRef(f),v=Oe.useRef(null),T=Oe.useRef({}),Y=Oe.useRef(p),R=Oe.useRef([]),F=Oe.useRef(null),z=Oe.useRef(null),H=Oe.useRef(null),O=Oe.useRef(null),U=Oe.useRef(null),B=Oe.useRef(null),$=Oe.useRef(null),Z=Oe.useRef(null),ce=Oe.useRef(void 0),oe=Oe.useRef([]),le=Oe.useRef(new Map),De=Oe.useRef(new Map),je=Oe.useRef(new Map),Ke=Oe.useRef(void 0),K=Oe.useRef([]),ne=Oe.useRef(!1),ie=Oe.useRef(null),Le=Oe.useRef(void 0),be=Oe.useRef(!1),Ce=Oe.useRef(null),rt=Oe.useRef(!1),Fe=Oe.useRef(!1),$e=Oe.useRef(null),tt=Oe.useRef(!1),[Be,dt]=Oe.useState(0),[P,pt]=Oe.useState(null),[He,st]=Oe.useState(!1),[Me,A]=Oe.useState([]);return Oe.useEffect(()=>{C.current=f},[f]),Oe.useEffect(()=>{Y.current=p},[p]),Oe.useEffect(()=>{R.current=Me},[Me]),Oe.useEffect(()=>{if(!E.current)return;const _=E.current,L=_.clientWidth,j=_.clientHeight,q=new ef;q.background=null,F.current=q;const W=new Yt(45,L/j,1,1e6);W.position.set(0,32e3,68e3),W.lookAt(0,0,0),z.current=W;const se=new f_({antialias:!0,alpha:!0,powerPreference:"high-performance"});se.setSize(L,j),se.setPixelRatio(Math.min(window.devicePixelRatio,2)),se.setClearColor(1128030,1),_.appendChild(se.domElement),H.current=se;const J=new ex(W,se.domElement);J.enableDamping=!0,J.dampingFactor=.05,J.screenSpacePanning=!1,J.maxPolarAngle=Math.PI,J.enableRotate=!i,J.enableZoom=!0,J.enablePan=!0,J.target.set(0,0,0),O.current=J;const ue=()=>{tt.current=!0},me=()=>{tt.current=!1};J.addEventListener("start",ue),J.addEventListener("end",me),q.add(new dh(7058928,n*1.2));const Q=new bs(10277119,n*1.5);Q.position.set(5e4,5e4,5e4),q.add(Q);const ee=new bs(4890088,n);ee.position.set(-5e4,3e4,-5e4),q.add(ee);const xe=new bs(5935047,n*.8);xe.position.set(0,-3e4,-5e4),q.add(xe);const ye=new Mr(10277119,n*3,2e5);ye.position.set(0,3e4,0),q.add(ye);const pe=new Mr(4890088,n*2,15e4);pe.position.set(4e4,2e4,4e4),q.add(pe);const ze=new Mr(7058928,n*2,15e4);ze.position.set(-4e4,2e4,-4e4),q.add(ze),new wc().load("/models/IntegralTunnel.obj",V=>{U.current=V,mx(V,t);const Te=new Ft().setFromObject(V).getSize(new D),Je=Te.y<Te.x*.1&&Te.y<Te.z*.1?Math.PI/2:0,Ze=Math.PI/6;V.rotation.x=Je,V.rotation.y=Ze;const mt=new Ft().setFromObject(V).getSize(new D),yi=12e4/(Math.max(mt.x,mt.y,mt.z)||1);V.scale.setScalar(yi);const ii=dx(V);q.add(V),B.current=new Ft().setFromObject(V).clone(),Dc(V,W,J,s,a),Ce.current={rotateX:Je,rotateY:Ze,uniformScale:yi,centerOffset:ii.clone()},st(!0)},V=>{V.lengthComputable&&dt(V.loaded/V.total*100)},V=>{pt(V instanceof Error?V.message:"模型加载失败")});const ae=()=>{const V=B.current,ge=w.current,Te=C.current;if(!V||!ge||Te.length===0)return;const Je=_.clientWidth,Ze=_.clientHeight;for(const Ot of Te){const mt=b.current[Ot.id];if(!mt)continue;const gt=xx(V,Ot.anchor,Ot.lift).clone().project(W);if(!(gt.z>=-1&&gt.z<=1&&gt.x>=-1.05&&gt.x<=1.05&&gt.y>=-1.05&&gt.y<=1.05)){mt.style.opacity="0",mt.style.transform=`translate(-50%, calc(-100% - ${Sn}px)) scale(0.92)`;continue}const ii=(gt.x*.5+.5)*Je,ri=(-gt.y*.5+.5)*Ze;mt.style.left=`${ii}px`,mt.style.top=`${ri}px`,mt.style.opacity="1",mt.style.transform=`translate(-50%, calc(-100% - ${Sn}px)) scale(1)`}},re=()=>{const V=R.current,ge=oe.current,Te=le.current,Je=De.current;if(!v.current||V.length===0||ge.length===0)return;const Ot=_.clientWidth,mt=_.clientHeight;for(const an of V){const gt=T.current[an.id];if(!gt)continue;const ri=(Number.isInteger(an.serialNo)&&(an.serialNo??0)>0?Te.get(an.serialNo)??Je.get(an.serialNo):void 0)??an.pointIndex;if(ri==null){gt.style.opacity="0";continue}const xn=ge[ri];if(!xn){gt.style.opacity="0";continue}const Qt=xn.clone().project(W);if(!(Qt.z>=-1&&Qt.z<=1&&Qt.x>=-1.05&&Qt.x<=1.05&&Qt.y>=-1.05&&Qt.y<=1.05)){gt.style.opacity="0",gt.style.transform=`translate(-50%, calc(-100% - ${Sn}px)) scale(0.92)`;continue}const Or=(Qt.x*.5+.5)*Ot,Si=(-Qt.y*.5+.5)*mt;gt.style.left=`${Or}px`,gt.style.top=`${Si}px`,gt.style.opacity="1",gt.style.transform=`translate(-50%, calc(-100% - ${Sn}px)) scale(1)`}},_e=()=>{J.update(),!r&&!i&&U.current&&!tt.current&&(U.current.rotation.y+=e*.01,$.current&&($.current.rotation.y=U.current.rotation.y)),ae(),re(),se.render(q,W),$e.current=requestAnimationFrame(_e)};_e();const te=()=>{const V=E.current;if(!V)return;const ge=V.clientWidth,Te=V.clientHeight;W.aspect=ge/Te,W.updateProjectionMatrix(),se.setSize(ge,Te),U.current&&Dc(U.current,W,J,s,a)};return window.addEventListener("resize",te),()=>{window.removeEventListener("resize",te),$e.current!==null&&cancelAnimationFrame($e.current),J.removeEventListener("start",ue),J.removeEventListener("end",me),J.dispose(),se.dispose(),_.contains(se.domElement)&&_.removeChild(se.domElement),Kn(q),U.current=null,B.current=null,$.current=null,Z.current=null,ce.current=void 0,oe.current=[],le.current=new Map,De.current=new Map,je.current=new Map,Ke.current=void 0,K.current=[],ne.current=!1,ie.current=null,Le.current=void 0,be.current=!1,Ce.current=null,rt.current=!1,Fe.current=!1}},[r,e,t,n,i,s,a]),Oe.useEffect(()=>{if(!F.current)return;if(!o){$.current&&($.current.visible=!1);return}if($.current){$.current.visible=!0;return}if(!He||!l||rt.current||!U.current)return;rt.current=!0;let L=!1;return new wc().load(l,q=>{if(L||!F.current||!U.current){Kn(q),rt.current=!1;return}gx(q,c),_x(q,U.current,Ce.current),q.visible=!0,q.name="gas-escape-route-overlay",F.current.add(q),$.current=q,rt.current=!1},void 0,q=>{L||pt(q instanceof Error?q.message:"逃生路线模型加载失败"),rt.current=!1}),()=>{L=!0}},[He,l,c,o]),Oe.useEffect(()=>{const _=F.current;if(!_)return;const j=He&&!!M&&!!U.current&&y;if(ie.current&&Le.current===M){ie.current.visible=!!j;return}if(ie.current&&(_.remove(ie.current),Kn(ie.current),ie.current=null,Le.current=void 0),!j||be.current)return;be.current=!0;let q=!1;return new Ta().load(M,se=>{if(q||!F.current||!U.current){Kn(se),be.current=!1;return}Ca(se,U.current,Ce.current),Lc(se),se.visible=!0,se.name="roadway-serial-highlight-overlay",F.current.add(se),ie.current=se,Le.current=M,be.current=!1},void 0,()=>{be.current=!1}),()=>{q=!0}},[He,M,y]),Oe.useEffect(()=>{const _=F.current;if(!_)return;const L=()=>{const ue=yx(oe.current.length,Y.current,x),me=je.current;if(me.size===0){A(ue);return}const Q=ue.map(ee=>{const xe=me.get(ee.pointIndex);return xe!=null?{...ee,serialNo:xe}:ee});A(Q)},j=()=>!h||oe.current.length===0?(je.current=new Map,!0):Ke.current!==h||K.current.length===0?!1:(je.current=Pa(oe.current,K.current),!0);if(!(He&&!!u&&!!U.current)){Z.current&&(Z.current.visible=!1),oe.current=[],le.current=new Map,De.current=new Map,je.current=new Map,A([]);return}let W=!1;const se=()=>{if(!h||oe.current.length===0||!U.current||ne.current)return;if(Ke.current===h&&K.current.length>0){je.current=Pa(oe.current,K.current),L();return}ne.current=!0,new Ta().load(h,me=>{if(W||!U.current){Kn(me),ne.current=!1;return}Ca(me,U.current,Ce.current),Ke.current=h,K.current=vx(me),je.current=Pa(oe.current,K.current),L(),Kn(me),ne.current=!1},void 0,()=>{ne.current=!1})};if(Z.current&&ce.current===u){if(Z.current.visible=d,Z.current.traverse(me=>{me instanceof bt&&(me.visible=d)}),oe.current.length===0){const me=Ro(Z.current,g);oe.current=me.points,le.current=me.indexBySerial,De.current=me.indexByNormalizedSerial}const ue=j();return L(),ue||se(),()=>{W=!0}}return Z.current&&(_.remove(Z.current),Kn(Z.current),Z.current=null,ce.current=void 0,oe.current=[],le.current=new Map,De.current=new Map,je.current=new Map,A([])),Fe.current?void 0:(Fe.current=!0,new Ta().load(u,ue=>{if(W||!F.current||!U.current){Kn(ue),Fe.current=!1;return}Ca(ue,U.current,Ce.current);const me=Ro(ue,g);Lc(ue),ue.traverse(ee=>{ee instanceof bt&&(ee.visible=d)}),ue.visible=d,ue.name="roadway-point-overlay",F.current.add(ue),Z.current=ue,ce.current=u,oe.current=me.points,le.current=me.indexBySerial,De.current=me.indexByNormalizedSerial;const Q=j();L(),Q||se(),Fe.current=!1},void 0,()=>{Fe.current=!1}),()=>{W=!0})},[He,p,u,h,d,x,g]),_t.jsxs(_t.Fragment,{children:[_t.jsx("div",{ref:E,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"auto",cursor:He&&!i?"grab":"default"},onMouseDown:_=>{!i&&_.currentTarget.style.cursor==="grab"&&(_.currentTarget.style.cursor="grabbing")},onMouseUp:_=>{He&&!i&&(_.currentTarget.style.cursor="grab")}}),f.length>0&&_t.jsx("div",{ref:w,style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:2},children:f.map(_=>{const L=typeof _.airflow=="number"?_.airflow.toFixed(1):_.airflow;return _t.jsxs("div",{ref:j=>{b.current[_.id]=j},style:{position:"absolute",left:"-9999px",top:"-9999px",transform:`translate(-50%, calc(-100% - ${Sn}px)) scale(0.92)`,opacity:0,transition:"opacity 180ms ease, transform 180ms ease",padding:"6px 10px",borderRadius:8,border:`1px solid ${_.borderColor??"rgba(129, 186, 246, 0.72)"}`,background:_.background??"linear-gradient(180deg, rgba(11, 36, 64, 0.9) 0%, rgba(20, 57, 94, 0.82) 100%)",boxShadow:"0 6px 16px rgba(7, 21, 38, 0.36), inset 0 1px 0 rgba(176, 220, 255, 0.18)",backdropFilter:"blur(2px)",whiteSpace:"nowrap",lineHeight:1.2},children:[_t.jsx("div",{style:{color:_.color??"#cfe9ff",fontSize:12,fontWeight:500,marginBottom:2},children:_.name}),_t.jsxs("div",{style:{color:"#ffffff",fontSize:14,fontWeight:700,letterSpacing:.2},children:[L," ",_.unit??"m³/s"]}),_t.jsx("div",{style:{position:"absolute",left:"50%",top:"100%",width:2,height:Sn,transform:"translateX(-50%)",background:_.leaderColor??"linear-gradient(180deg, rgba(124, 196, 255, 0.88) 0%, rgba(95, 170, 242, 0.9) 100%)",boxShadow:"0 0 10px rgba(118, 188, 255, 0.75)"}}),_t.jsx("div",{style:{position:"absolute",left:"50%",top:`calc(100% + ${Sn}px)`,width:8,height:8,borderRadius:"50%",transform:"translate(-50%, -50%)",background:_.markerColor??"#8ed0ff",border:"1px solid rgba(186, 229, 255, 0.95)",boxShadow:"0 0 0 2px rgba(86, 153, 219, 0.28), 0 0 12px rgba(143, 212, 255, 0.85)"}})]},_.id)})}),Me.length>0&&_t.jsx("div",{ref:v,style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:3},children:Me.map(_=>{const L=String(Number.isInteger(_.serialNo)&&(_.serialNo??0)>0?_.serialNo:_.pointIndex+1).padStart(2,"0"),j=m,q=typeof _.airflow=="number"?_.airflow.toFixed(1):_.airflow,W=q!=null&&String(q).trim().length>0;return _t.jsxs("div",{ref:se=>{T.current[_.id]=se},style:{position:"absolute",left:"-9999px",top:"-9999px",transform:`translate(-50%, calc(-100% - ${Sn}px)) scale(0.92)`,opacity:0,transition:"opacity 180ms ease, transform 180ms ease",padding:"7px 10px",borderRadius:10,border:`1px solid ${_.borderColor??"rgba(132, 220, 255, 0.86)"}`,background:_.background??"linear-gradient(135deg, rgba(8, 20, 42, 0.92) 0%, rgba(20, 48, 88, 0.9) 45%, rgba(9, 29, 56, 0.94) 100%)",boxShadow:"0 10px 24px rgba(3, 11, 25, 0.46), 0 0 20px rgba(77, 168, 255, 0.3), inset 0 1px 0 rgba(210, 240, 255, 0.26)",backdropFilter:"blur(3px)",whiteSpace:"nowrap",lineHeight:1.2},children:[_t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:j?6:0,marginBottom:W?2:0},children:[j&&_t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:22,height:16,padding:"0 4px",borderRadius:8,color:"#092235",background:"linear-gradient(180deg, rgba(161, 241, 255, 0.96) 0%, rgba(106, 210, 255, 0.9) 100%)",border:"1px solid rgba(205, 247, 255, 0.95)",fontSize:11,fontWeight:800,letterSpacing:.2,boxShadow:"0 0 14px rgba(120, 225, 255, 0.58)"},children:L}),_t.jsx("span",{style:{color:_.color??"#f0fbff",fontSize:12,fontWeight:700,letterSpacing:.2,textShadow:"0 0 8px rgba(123, 201, 255, 0.42)"},children:_.name})]}),W&&_t.jsxs("div",{style:{color:"#9ee8ff",fontSize:13,fontWeight:700,letterSpacing:.25,textShadow:"0 0 10px rgba(78, 205, 255, 0.45)"},children:[q," ",_.unit??"m³/s"]}),_t.jsx("div",{style:{position:"absolute",left:"50%",top:"100%",width:2,height:Sn,transform:"translateX(-50%)",background:_.leaderColor??"linear-gradient(180deg, rgba(142, 232, 255, 0.92) 0%, rgba(92, 170, 240, 0.88) 100%)",boxShadow:"0 0 10px rgba(110, 205, 255, 0.6)"}}),_t.jsx("div",{style:{position:"absolute",left:"50%",top:`calc(100% + ${Sn}px)`,width:8,height:8,borderRadius:"50%",transform:"translate(-50%, -50%)",background:_.markerColor??"#74d2ff",border:"1px solid rgba(223, 239, 255, 0.92)",boxShadow:"0 0 0 2px rgba(56, 137, 206, 0.28), 0 0 16px rgba(117, 220, 255, 0.86)"}})]},_.id)})}),!He&&!P&&_t.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"rgba(120, 180, 240, 0.8)",fontSize:"14px",textAlign:"center",pointerEvents:"none",zIndex:1},children:[_t.jsx("div",{children:"正在加载巷道模型..."}),_t.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:Be>0?`${Be.toFixed(0)}%`:"准备中..."})]}),P&&_t.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"rgba(255, 100, 100, 0.85)",fontSize:"14px",textAlign:"center",pointerEvents:"none",zIndex:1},children:[_t.jsx("div",{children:"模型加载失败"}),_t.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:P})]})]})}export{Ex as HomeObjBackground3D};
