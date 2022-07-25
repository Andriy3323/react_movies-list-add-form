(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},20:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var a=i(8),s=i.n(a),c=(i(19),i(13)),n=i(9),r=i(10),l=i(14),o=i(12),m=i(1),d=i.n(m),b=(i(20),i(21),i(22),i(0)),j=function(e){var t=e.movie;return Object(b.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(b.jsxs)("div",{className:"content",children:[t.description,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},h=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(j,{movie:e},e.imdbId)}))})},u=i(5),p=i(7),g=i(2),O=(i(24),{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),v=function(e){var t=e.submitMovie,i=Object(m.useState)(O),a=Object(g.a)(i,2),s=a[0],c=a[1],n=Object(m.useState)(!0),r=Object(g.a)(n,2),l=r[0],o=r[1],d=Object(m.useState)(!1),j=Object(g.a)(d,2),h=j[0],v=j[1],f=Object(m.useState)(!1),M=Object(g.a)(f,2),w=M[0],N=M[1],x=Object(m.useState)(!1),U=Object(g.a)(x,2),_=U[0],y=U[1],T=Object(m.useState)(!1),I=Object(g.a)(T,2),k=I[0],B=I[1],A=function(e){var t=e.target,i=t.value;switch(t.name){case"title":v(!i);break;case"imgUrl":N(!i);break;case"imdbUrl":y(!i);break;case"imdbId":B(!i)}};Object(m.useEffect)((function(){var e=s.title,t=s.imgUrl,i=s.imdbUrl,a=s.imdbId;o(!(e&&t&&i&&a))}));var S=function(e){var t=e.target,i=t.name,a=t.value;c(Object(p.a)(Object(p.a)({},s),{},Object(u.a)({},i,a)))};return Object(b.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),e.currentTarget.reset(),t(s),c(O),o(!0)},children:[Object(b.jsx)("input",{name:"title",placeholder:"Title",className:"input movieAdd__title","data-cy":"form-title",onChange:S,onBlur:A}),h&&Object(b.jsx)("div",{className:"error-block",children:"This field is required"}),Object(b.jsx)("input",{name:"description",placeholder:"Description",className:"input movieAdd__description","data-cy":"form-description",onChange:S}),Object(b.jsx)("input",{name:"imgUrl",placeholder:"ImgUrl",className:"input movieAdd__imgUrl","data-cy":"form-imgUrl",onChange:S,onBlur:A}),w&&Object(b.jsx)("div",{className:"error-block",children:"This field is required"}),Object(b.jsx)("input",{name:"imdbUrl",placeholder:"ImdbUrl",className:"input movieAdd__imdbUrl","data-cy":"form-imdbUrl",onChange:S,onBlur:A}),_&&Object(b.jsx)("div",{className:"error-block",children:"This field is required"}),Object(b.jsx)("input",{name:"imdbId",placeholder:"ImdbId",className:"input movieAdd__imdbId","data-cy":"form-imdbId",onChange:S,onBlur:A}),k&&Object(b.jsx)("div",{className:"error-block",children:"This field is required"}),Object(b.jsx)("button",{type:"submit",className:"button",disabled:l,children:"Submit"})]})},f=i(11),M=function(e){Object(l.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={movies:f},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(c.a)(e.movies),[t])}}))},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(h,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(v,{submitMovie:this.addMovie})})]})}}]),i}(d.a.Component);s.a.render(Object(b.jsx)(M,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f3937f24.chunk.js.map