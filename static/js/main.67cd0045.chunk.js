(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(6),r=a.n(o),c=(a(14),a(1)),l=a(2),i=a(4),m=a(3),u=a(5),d=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"bg-dark container jumbotron"},s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("p",{className:"text-white h3 p-2 border"},"Todo App"),s.a.createElement("p",{className:" border border-dark p-2"},"by Saood")))}}]),t}(n.Component),h=(a(15),a(7)),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={task:"",tasks:[],isDone:!1,taskDone:0},a.changeHandler=function(e){return a.setState({task:e.target.value})},a.ClickHandler=function(e){if(console.log("i am clicked"),""===a.state.task)return null;a.state.tasks.push(a.state.task),a.setState({task:""}),a.forceUpdate()},a.isDoneHandler=function(e){e.target.classList.toggle("is-done"),a.setState({taskDone:document.getElementsByClassName("is-done").length})},a.delToDo=function(e){a.state.tasks.splice(e,1),a.forceUpdate()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container text-center mt-2"},s.a.createElement("form",{action:"",className:"form-group d-flex justify-content-center"},s.a.createElement("input",{required:!0,type:"text",onChange:this.changeHandler,value:this.state.task,className:"form-control w-50 mr-1",placeholder:"Type your task here..."}),s.a.createElement("button",{className:"btn btn-success",type:"button",onClick:this.ClickHandler},"Add")),this.state.tasks.length>0?s.a.createElement("p",{className:"bg-dark p-3 text-white w-50 m-auto",style:{animation:h.animations.bounceIn}},this.state.tasks.length-this.state.taskDone," remaining out of"," ",this.state.tasks.length," tasks"):s.a.createElement("p",{className:"bg-light p-3 No-task-text"},"No task found. Please add some task..."),s.a.createElement("div",{className:"text-decoration-none text-center"},s.a.createElement("table",{border:"0",className:"table w-50 m-auto"},s.a.createElement("tbody",null,this.state.tasks.map((function(t,a){return s.a.createElement("tr",{key:"c"+a,className:"single-task",style:{animation:h.animations.fadeInUp}},s.a.createElement("td",{className:"p-3 text-left sno"},a+1,"."),s.a.createElement("td",{className:"p-3 text-left",onClick:e.isDoneHandler},t.charAt(0).toUpperCase()+t.slice(1)),s.a.createElement("td",{className:"p-3 text-right sno"},s.a.createElement("button",{id:a,onClick:function(t){return e.delToDo(t.target.id)},className:"btn btn-danger"},"\xd7")))})),this.state.tasks.length>0?s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"3",className:"text-muted font-weight-light font-italic mark-complete-text p-0 "},"Click on task to mark complete")):null))))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d,null),s.a.createElement(p,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);r.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.67cd0045.chunk.js.map