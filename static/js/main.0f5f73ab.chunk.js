(window["webpackJsonppogoda-app"]=window["webpackJsonppogoda-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/galaxy.75e1c508.jpg"},function(e,t,a){e.exports=a.p+"static/media/forest1.c57c8aaf.jpg"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),l=(a(16),a(4)),i=a(5),o=a(9),m=a(10),u=(a(17),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"menu"},r.a.createElement("div",{"data-toggle":"collapse","data-target":"#menu",className:"toggleMenu",onClick:function(){return e.onToggle()}},r.a.createElement("p",null,e.toggle?"Ukryj menu":"Poka\u017c opcje prognozy")),r.a.createElement("div",{className:"dropdown"},r.a.createElement("div",{className:"collapse",id:"menu"},r.a.createElement("button",{type:"button",className:"btn btn-dark top",onClick:function(){return e.switch()}},"24h co 3 godziny"),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-dark top",onClick:function(){return e.switchTomorrow()}},"48h co 6 godzin"),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-dark top",onClick:e.switch3days},"96h co 12 godzin")))),e.dispInfo?null:r.a.createElement("div",{className:"alert alert-primary alert"},"Wybierz jedn\u0105 z opcji z menu"))}),d=a(6),p=function(e){return r.a.createElement("div",{className:"single-forecast"},r.a.createElement("h4",null,e.time),r.a.createElement("p",null,r.a.createElement("b",null,e.description)),r.a.createElement("div",{className:"forecast-info"},r.a.createElement("p",{className:"temperature"},e.temp,"\xb0C"),r.a.createElement("p",{className:"pressure"},e.press," hPa"),r.a.createElement("p",null,"Wiatr: ",e.wind," m/s"),r.a.createElement("p",null,"Wilgotno\u015b\u0107: ",e.humidity,"%")))},h=function(e){var t=[e.forecast][0].map((function(e){return r.a.createElement(p,{key:e.time,temp:e.temp,time:e.time,feelsTemp:e.feelsTemp,press:e.press,humidity:e.humidity,wind:e.wind,description:e.description})})),a=t.slice(0,3),n=t.slice(3,6),c=t.slice(6,9);return r.a.createElement("div",{className:"forecast"},r.a.createElement("div",{className:"close",onClick:e.hide},r.a.createElement("i",{class:"fas fa-times-circle"})),r.a.createElement("div",{id:"carouselForecast",className:"carousel slide","data-ride":"carousel","data-interval":"4000"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active",id:"first"},a),r.a.createElement("div",{className:"carousel-item"},n),r.a.createElement("div",{className:"carousel-item"},c)),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselForecast",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselForecast",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))),r.a.createElement("button",{className:"btn btn-secondary hide",onClick:e.hide},"Ukryj"))},f=function(e){var t=(e.sunset-e.sunrise)/3600,a=Math.floor((e.sunset-e.sunrise)/3600),n=Math.floor(60*(t-a)),c=(new Date).toLocaleDateString(),s=new Date(1e3*e.sunrise).toLocaleTimeString(),l=new Date(1e3*e.sunset).toLocaleTimeString();return r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,e.city),r.a.createElement("div",{className:"citySelect"},r.a.createElement("select",{className:"form-control",onChange:e.citySelector,onClick:e.changeInfo},r.a.createElement("option",null,"Krak\xf3w"),r.a.createElement("option",null,"Warszawa"),r.a.createElement("option",null,"Jas\u0142o"),r.a.createElement("option",null,"Rzesz\xf3w"),r.a.createElement("option",null,"Gda\u0144sk"),r.a.createElement("option",null,"Pozna\u0144"),r.a.createElement("option",null,"Wroc\u0142aw"),r.a.createElement("option",null,"Lublin")),r.a.createElement("br",null)),r.a.createElement("div",{className:"basicInfo"},r.a.createElement("p",{className:"basicInfo__day"},e.day),r.a.createElement("p",{className:"basicInfo__clock"}," ",e.hour),r.a.createElement("p",null,c),r.a.createElement("p",null,"Wsch\xf3d s\u0142o\u0144ca: ",s),r.a.createElement("p",null,"Zach\xf3d s\u0142o\u0144ca: ",l),r.a.createElement("p",null,"D\u0142ugo\u015b\u0107 dnia: ",a," godzin i ",n," minut.")),r.a.createElement("div",{className:"slide-down"},r.a.createElement("p",{className:"arrow"},">"),r.a.createElement("p",null,"Przewi\u0144"),r.a.createElement("p",{className:"arrow"},">")))},g=a(7),E=a.n(g),y=a(8),w=a.n(y),v="efa2ef11f117f7485b2fca8e87a3a2f5",N=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:new Date,hour:null,day:null,displayForecast:!1,sunrise:0,sunset:0,toggleMenu:!1,city:"Krak\xf3w",forecast:null,forecastNum:0},e.onClickToggle=function(){e.setState({toggleMenu:!e.state.toggleMenu})},e.getBasicInfo=function(){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.city,"&APPID=").concat(v,"&units=metric&lang=pl");fetch(t).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(t){e.setState({sunrise:t.sys.sunrise,sunset:t.sys.sunset})})).catch((function(e){console.log(e)}))},e.getWeather=function(){var t="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e.state.city,",PL&appid=").concat(v,"&units=metric&lang=pl");fetch(t).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119 pobra\u0107 danych!")})).then((function(e){return e.json()})).then((function(t){var a=t.list.slice(0,e.state.forecastNum),n=[];9===a.length?n=a:17===a.length?n=a.filter((function(e,t){return t%2===0})):33===a.length&&(n=a.filter((function(e,t){return t%4===0})));var r=n.map((function(e){return{time:e.dt_txt,temp:e.main.temp,feelsTemp:e.main.feels_like,press:e.main.pressure,humidity:e.main.humidity,wind:e.wind.speed,description:e.weather[0].description}}));e.setState({forecast:r})})).catch((function(e){console.log(e)}))},e.display96hForecast=function(){e.getWeather(),e.setState({displayForecast:!0,displayToday:!1,displayTomorrow:!1,forecastNum:33})},e.display48hForecast=function(){e.getWeather(),e.setState({displayForecast:!0,forecastNum:17})},e.display24hForecast=function(){e.getWeather(),e.setState({displayForecast:!0,forecastNum:9})},e.getCurrentTime=function(){e.setState({hour:(new Date).toLocaleTimeString()})},e.getCurrentDay=function(){var t=e.state.data.getDay();e.setState({day:["Niedziela","Poniedzia\u0142ek","Wtorek","\u015aroda","Czwartek","Pi\u0105tek","Sobota"][t]})},e.citySelector=function(t){e.setState({city:t.target.value})},e.onChangeInfo=function(){e.getBasicInfo(),e.getWeather()},e.onClickHide=function(){e.setState({displayForecast:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getCurrentDay(),Object(d.setInterval)(this.getCurrentTime,1e3),this.getWeather(),this.getBasicInfo()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{id:"backgroundImg",src:E.a,alt:"galaxy"})),r.a.createElement("svg",{viewBox:"0 0 1920 1080",preserveAspectRatio:"xMidYMid slice",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{id:"Polygon1",d:"M980.848 0H1920V1080H980.848V823H1131.5H1380L980.848 142L572.5 823H808.5H980.848V1080H0V0H980.848Z",fill:"url(#pattern1)"}),r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip0"},r.a.createElement("rect",{width:"1920",height:"1080",fill:"white"})),r.a.createElement("pattern",{id:"pattern1",height:"100%",width:"100%",patternContentUnits:"objectBoundingBox"},r.a.createElement("image",{height:"1",width:"1",preserveAspectRatio:"none",href:w.a}))))),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Prognoza pogody")),r.a.createElement(f,{changeInfo:this.onChangeInfo,citySelector:this.citySelector,city:this.state.city,day:this.state.day,hour:this.state.hour,sunset:this.state.sunset,sunrise:this.state.sunrise}),r.a.createElement(u,{switch:this.display24hForecast,switchTomorrow:this.display48hForecast,switch3days:this.display96hForecast,toggle:this.state.toggleMenu,onToggle:this.onClickToggle,dispInfo:this.state.displayForecast}),this.state.displayForecast?r.a.createElement(h,{forecast:this.state.forecast,city:this.state.city,hide:this.onClickHide}):null))}}]),a}(r.a.Component);s.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.0f5f73ab.chunk.js.map