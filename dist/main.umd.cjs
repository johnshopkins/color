(function(r,a){typeof exports=="object"&&typeof module!="undefined"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(r=typeof globalThis!="undefined"?globalThis:r||self,a(r.color={}))})(this,function(r){"use strict";const a=[{id:1,name:"Heritage Blue",slug:"heritage-blue",pms:"288 C",cmyk:[100,80,6,32],rgb:[0,45,114],hex:"002D72"},{id:2,name:"Spirit Blue",slug:"spirit-blue",pms:"284 C",cmyk:[56,18,0,0],rgb:[114,172,229],hex:"68ACE5"},{id:3,name:"Secondary Orange",slug:"secondary-orange",pms:"1375 C",cmyk:[0,45,94,0],rgb:[255,158,27],hex:"FF9E1B"},{id:4,name:"Secondary Green",slug:"secondary-green",pms:"3278 C",cmyk:[99,0,69,0],rgb:[0,155,119],hex:"009B77"},{id:5,name:"Secondary Blue",slug:"secondary-blue",pms:"285 C",cmyk:[90,48,0,0],rgb:[0,114,206],hex:"0072CE"},{id:6,name:"Secondary Yellow",slug:"secondary-yellow",pms:"7406 C",cmyk:[0,20,100,2],rgb:[241,196,0],hex:"F1C400"},{id:7,name:"Tertiary Tan",slug:"tertiary-tan",pms:"7407 C",cmyk:[6,36,79,12],rgb:[203,160,82],hex:"CBA052"},{id:8,name:"Tertiary Orange",slug:"tertiary-orange",pms:"1505 C",cmyk:[0,56,90,0],rgb:[255,105,0],hex:"FF6900"},{id:9,name:"Tertiary Brown",slug:"tertiary-brown",pms:"7586 C",cmyk:[0,69,89,41],rgb:[158,83,48],hex:"9E5330"},{id:10,name:"Tertiary Dark Brown",slug:"tertiary-dark-brown",pms:"4625 C",cmyk:[30,72,74,80],rgb:[79,44,29],hex:"4F2C1D"},{id:11,name:"Tertiary Coral",slug:"tertiary-coral",pms:"486 C",cmyk:[0,55,50,0],rgb:[232,146,124],hex:"E8927C"},{id:12,name:"Tertiary Dark Orange",slug:"tertiary-dark-orange",pms:"173 C",cmyk:[0,82,94,2],rgb:[207,69,32],hex:"CF4520"},{id:13,name:"Tertiary Red",slug:"tertiary-red",pms:"187 C",cmyk:[7,100,82,26],rgb:[166,25,46],hex:"A6192E"},{id:14,name:"Tertiary Maroon",slug:"tertiary-maroon",pms:"188 C",cmyk:[16,100,65,58],rgb:[118,35,47],hex:"76232F"},{id:15,name:"Tertiary Dark Purple",slug:"tertiary-dark-purple",pms:"262 C",cmyk:[58,92,12,54],rgb:[81,40,79],hex:"51284F"},{id:16,name:"Tertiary Purple",slug:"tertiary-purple",pms:"7655 C",cmyk:[33,72,0,0],rgb:[161,90,149],hex:"A15A95"},{id:17,name:"Tertiary Lavender",slug:"tertiary-lavender",pms:"666 C",cmyk:[36,39,2,5],rgb:[161,146,178],hex:"A192B2"},{id:17,name:"Tertiary Blue",slug:"tertiary-blue",pms:"279 C",cmyk:[68,34,0,0],rgb:[65,143,222],hex:"418FDE"},{id:17,name:"Tertiary Seafoam",slug:"tertiary-seafoam",pms:"564 C",cmyk:[43,0,23,0],rgb:[134,200,188],hex:"86C8BC"},{id:18,name:"Tertiary Dark Green",slug:"tertiary-dark-green",pms:"7734 C",cmyk:[77,0,82,65],rgb:[40,97,64],hex:"286140"},{id:19,name:"Tertiary Green",slug:"tertiary-green",pms:"7490 C",cmyk:[57,6,92,19],rgb:[113,153,73],hex:"719949"}],n=e=>(e=e/255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4),t=e=>{const i=n(e[0]),s=n(e[1]),m=n(e[2]);return .2126*i+.7152*s+.0722*m},y=(e,i)=>{const s=t(e)+.05,m=t(i)+.05;return parseFloat((s/m).toFixed(2))};r.colors=a,r.contrast=y,r.luminance=t,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
