(this.webpackJsonpdevquiz=this.webpackJsonpdevquiz||[]).push([[0],{29:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var a,o,i,r,c=t(0),s=t.n(c),l=t(18),d=t.n(l),u=(t(29),t(5)),p=t(2),h=t(19),x=t(20),b=t(6),m=t(7),g=m.a.div(a||(a=Object(b.a)(["\n    margin:70px auto 0px auto;\n\n    a{\n        text-decoration: none;\n        color: black;\n    }\n\n    div#text{\n        font-size: 28px;\n        max-width: 800px;\n        margin: auto;\n        color: black;\n\n        header{\n            background-image: linear-gradient(to right, #DE457A, #A35CFE, #3496FA);\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            padding: 5px 20px;\n            justify-content: space-between;\n            border-radius: 5px 5px 0px 0px;\n            cursor: default;\n\n            h1{\n                color: rgb(240, 240, 240);\n                \n                \n            }\n\n            h2{\n                margin: 0;\n                padding: 3%;\n                font-size: 27px;\n                color: rgb(240, 240, 240);\n            }\n            img{\n                height: 70px;\n                padding-right: 3%;\n                justify-content: right;\n            }\n        }\n\n        main{\n            background-color: #EBF1FF;\n            padding: 10%;\n            border-radius: 0px 0px 5px 5px;\n            \n\n\n            \n            p{\n                margin: 0;\n                font-size: 19px;\n            }\n        }\n\n        section#back5{\n            justify-content: center;\n            display: none;\n\n            p{\n                text-align: center;\n            }\n        }\n\n        .alternative{\n            display: flex;\n            background-color: white;\n            justify-content: left;\n            align-items:center;\n            \n            margin: 0px auto 20px auto;\n\n            border: 2px solid #C9E5FA;\n            border-radius: 50px;\n\n            min-width: 350px;\n            min-height: 55px;\n\n            transition: 0.1s;\n\n            &:hover{\n                transform: scale(1.1);\n                cursor: pointer;\n            }\n\n\n        }\n\n        .letter_alt{\n            font-size: 18px;\n            text-align: center;\n            color: black;\n\n            border: 2px solid #C9E5FA;\n            border-radius: 100%;\n\n            width: 25px;\n            margin-left: 5%;\n            margin-right: 5%;\n            \n\n        }\n\n        .img_respost{\n            width: 30px;\n            margin-left: 9%;\n            display: none;\n           \n        }\n\n        \n    }\n\n    .correct{\n        background-color: green;\n        display: initial;\n    }\n\n\n"]))),j=t(12),f=t.n(j),v=(t(17),t.p+"static/media/circle_point_00000.7c7c14de.png"),y=m.a.div(o||(o=Object(b.a)(['\n    margin:70px auto 0px auto;\n    font-size: 22px;\n    max-width: 800px;\n    margin: auto;\n    color: black;\n    padding-top: 70px;\n\n    a{\n        text-decoration: none;\n        color: #808080; \n    }\n\n    main{\n        background-color: #EBF1FF;\n        padding: 10%;\n        border-radius: 5px 5px;\n        \n        h1{\n            text-align: center;\n            margin-bottom: 0;\n        }     \n\n        h2{\n            margin-top: 0;\n            text-align: center;\n            font-size: 50px;\n        }\n\n        p{\n            text-align: center;\n        }\n    }\n\n    section{\n        text-align: center;\n    }\n\n    .wrapper{\n        display: inline-flex;\n        height: 50px;\n        width: 150px;\n        align-items: center;\n        text-align: center;\n\n        \n    }\n    .wrapper .option{\n        background: #fff;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: space-evenly;\n        margin: 0 10px;\n        border-radius: 5px;\n        cursor: pointer;\n        padding: 0 10px;\n        border: 2px solid lightgrey;\n        transition: all 0.3s ease;\n        box-shadow: 5px 5px 30px rgba(0,0,0,0.2);\n        text-align: center;\n    }\n    .wrapper .option .dot{\n        height: 20px;\n        width: 20px;\n        background: #d9d9d9;\n        border-radius: 50%;\n        position: relative;\n        box-shadow: 5px 5px 30px rgba(0,0,0,0.2)\n    }\n    .wrapper .option .dot::before{\n        position: absolute;\n        content: "";\n        top: 4px;\n        left: 4px;\n        width: 12px;\n        height: 12px;\n        background: #0069d9;\n        border-radius: 50%;\n        opacity: 0;\n        transform: scale(1.5);\n        transition: all 0.3s ease;\n        \n    }\n    input[type="radio"]{\n        display: none;\n    }\n    #option-1:checked:checked ~ .option-1, #option-2:checked:checked ~ .option-2{\n        border-color: #0069d9;\n        background: #0069d9;\n    }\n    #option-1:checked:checked ~ .option-1 .dot, #option-2:checked:checked ~ .option-2 .dot{\n        background: #fff;\n    }\n    #option-1:checked:checked ~ .option-1 .dot::before, #option-2:checked:checked ~ .option-2 .dot::before{\n        opacity: 1;\n        transform: scale(1);\n    }\n    .wrapper .option span{\n        font-size: 20px;\n        color: #808080;\n    }\n    #option-1:checked:checked ~ .option-1 span, #option-2:checked:checked ~ .option-2 span{\n        color: #fff;\n}\n\n    #jogar{\n        background: #fff;\n        height: 100%;\n        width: 100px;\n        font-size: 25px;\n        display: flex;\n        align-items: center;\n        justify-content: space-evenly;\n        margin: 0 10px;\n        border-radius: 5px;\n        cursor: pointer;\n        padding: 0 10px;\n        border: 2px solid lightgrey;\n        transition: all 0.3s ease;\n        box-shadow: 5px 5px 30px rgba(0,0,0,0.2);\n\n        color: #808080;\n\n        &:hover{\n            transform: scale(1.1);\n        }\n\n        &:active{\n            transform: scale(1);\n        }\n    }\n\n']))),O=t(1),k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t();if(1===n)return e;function t(){var n=document.querySelector("input#option-1"),e=document.querySelector("input#option-2");try{if(n.checked)return"JS";if(e.checked)return"PY"}catch(t){}}return Object(c.useEffect)((function(){f.a.init({duration:1400})}),[]),Object(O.jsx)(y,{children:Object(O.jsxs)("main",{"data-aos":"zoom-out",children:[Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"Ol\xe1, bem vindo ao meu jogo"}),Object(O.jsx)("h2",{children:"Dev Quiz"}),Object(O.jsx)("p",{children:"Ser\xe3o 5 perguntas e no final totalizar\xe1 seu resultado, escolha sua tecnologia e clique em jogar"})]}),Object(O.jsxs)("section",{children:[Object(O.jsx)("div",{id:"button",children:Object(O.jsx)("span",{children:Object(O.jsx)("button",{onClick:t,id:"jogar",children:Object(O.jsx)(u.b,{to:"/dev-quiz/game",children:"Jogar"})})})}),Object(O.jsxs)("div",{class:"wrapper",children:[Object(O.jsx)("input",{type:"radio",name:"select",id:"option-1",defaultChecked:!0}),Object(O.jsx)("input",{type:"radio",name:"select",id:"option-2"}),Object(O.jsxs)("label",{for:"option-1",class:"option option-1",children:[Object(O.jsx)("div",{class:"dot"}),Object(O.jsx)("span",{children:"JavaScript"})]}),Object(O.jsxs)("label",{for:"option-2",class:"option option-2",children:[Object(O.jsx)("div",{class:"dot"}),Object(O.jsx)("span",{children:"Python"})]})]})]})]})})},q=function(){var n=k(1);console.log(n);var e=1,t=0,a="",o="",i="",r="",c="",s={resp:[2,3,2,4,4],num:[1,2,3,4,5],quest:["Especifique =, ==, === respectivamente","Que tipos de dados s\xe3o suportados em JS?","Existe diferen\xe7a entre null e undefined?","Em JS, o que \xe9 NaN?",'Qual ser\xe1 o resultado do problema: 2+5+"3" ?, e "2"+5+3 ?',""],alt1:["Atribui\xe7\xe3o e igualdade, === n\xe3o existe","Int, string, booleano e float","Undefined \xe9 utilizado quando uma vari\xe1vel n\xe3o teve valor atribu\xeddo, null representa a aus\xeancia intencional de um valor de objeto","Representa um valor nulo","NaN, NaN"],alt2:["Atribui\xe7\xe3o, igualdade, valor e tipo respectivamente","Int, float, booleano e complexo","Null \xe9 utilizado quando uma vari\xe1vel n\xe3o teve valor atribu\xeddo, Undefined representa a aus\xeancia intencional de um valor de objeto","Representa um tipo de valor num\xe9rico","253, 28"],alt3:["Igualdade, atribui\xe7\xe3o, == e === s\xe3o iguais","N\xfamero, string, indeterminado, nulo e booleano","Sintaticamente n\xe3o h\xe1 diferen\xe7a entre os dois tipos","Representa que o valor n\xe3o \xe9 uma string","253, 253"],alt4:["Atribui\xe7\xe3o, igualdade, == e === s\xe3o iguais","String, char, n\xfamero, int e float","Undefined representa uma aus\xeancia de valor, Null \xe9 recebido quando n\xe3o teve valor atribu\xeddo","Representa que o valor n\xe3o \xe9 um n\xfamero","73, 253"]},l={resp:[1,1,3,3,4],num:[1,2,3,4,5],quest:["Qual a diferen\xe7a entre lista e tuplas?"," O que \xe9 pep 8 ?","Quais s\xe3o m\xf3dulos integrados ?","Como funciona Break, Continue, Pass ?","O que [::-1] faz ?"],alt1:["Resumidamente, a estrutura tupla \xe9 imut\xe1vel, e a lista \xe9 mut\xe1vel.","\xc9 um conjunto de regras de como formatar o c\xf3digo Python","Os, sys, pytube","Break cancela o la\xe7o, Continue e Pass n\xe3o existem","Coloca \xfaltima letra da string em mai\xfascula"],alt2:["Ambas possuem utiliza\xe7\xf5es an\xe1logas","Significa Python Edge Proposal","Math, statistics, random","Break d\xe1 a op\xe7\xe3o de ignorar o loop, Continue cancela o la\xe7o e Pass preenche espa\xe7o","Gera n\xfameros aleat\xf3rios de tr\xe1s pra frente"],alt3:["Tuplas s\xe3o acessadas por meio da chave, e a lista pelo \xedndice","\xc9 um m\xf3dulo leve, simples e livre de depend\xeancias","Math, Os, sys","Break cancela o la\xe7o, Continue d\xe1 a op\xe7\xe3o de ignorar o la\xe7o e Pass preenche lacuna","Randomiza os itens de uma lista"],alt4:["A lista \xe9 acessada por meio da chave, e a tupla pelo \xedndice","\xc9 um gerenciador de pacote padr\xe3o de Python","Pip, django, pytube","Possuem as mesmas funcionalidades que n\xe3o se diferem","Inverte a ordem de um array ou sequ\xeancia"]};"JS"===n&&(a=s.quest[0],o=s.alt1[0],i=s.alt2[0],r=s.alt3[0],c=s.alt4[0]),"PY"===n&&(a=l.quest[0],o=l.alt1[0],i=l.alt2[0],r=l.alt3[0],c=l.alt4[0]);var d=new(function(){function d(){Object(h.a)(this,d)}return Object(x.a)(d,[{key:"autenticTec",value:function(e){"JS"===n&&(this.autenticResp(e),this.autenticQuests("JS")),"PY"===n&&(this.autenticResp(e),this.autenticQuests("PY"))}},{key:"autenticResp",value:function(a){"JS"===n&&(s.resp[e-1]===a&&(t+=1));"PY"===n&&(l.resp[e-1]===a&&(t+=1))}},{key:"changeCorrect",value:function(){console.log("ACERTOU")}},{key:"autenticQuests",value:function(n){if("JS"===n){if(5===s.num[e-1])return this.resultsQuiz();a=s.quest[e],o=s.alt1[e],i=s.alt2[e],r=s.alt3[e],c=s.alt4[e],this.numAdd(),this.changeVal()}if("PY"===n){if(5===l.num[e-1])return this.resultsQuiz();a=l.quest[e],o=l.alt1[e],i=l.alt2[e],r=l.alt3[e],c=l.alt4[e],this.numAdd(),this.changeVal()}}},{key:"changeVal",value:function(){document.querySelector("h1#num").innerHTML=String(e)+"-",document.querySelector("h2#quest").innerHTML=a,document.querySelector("p#resp1").innerHTML=o,document.querySelector("p#resp2").innerHTML=i,document.querySelector("p#resp3").innerHTML=r,document.querySelector("p#resp4").innerHTML=c}},{key:"numAdd",value:function(){e+=1}},{key:"resultsQuiz",value:function(){document.querySelector("h1#num").innerHTML="",document.querySelector("h2#quest").innerHTML="Obrigado por jogar, seu resultado a baixo:",document.querySelector("section#resp1").style.display="none",document.querySelector("section#resp2").style.display="none",document.querySelector("section#resp3").style.display="none",document.querySelector("section#resp4").style.display="none";var n=document.querySelector("p#back5"),e=document.querySelector("section#back5");if(e.style.display="flex",t<=1&&t>=0){var a=t/5*100;n.innerHTML="-- ".concat(a,"% de acerto, o importante \xe9 tentar.<br>Toque para voltar"),e.style.background="#C4051B"}if(t>=2&&t<=4){var o=t/5*100;n.innerHTML="-- ".concat(o,"% de acerto, quase l\xe1.<br>Toque para voltar"),e.style.background="#FF7709"}if(5===t){var i=t/5*100;n.innerHTML="-- ".concat(i,"% de acerto, parab\xe9ns padrinho.<br>Toque para voltar"),e.style.background="#31BC2F"}}}]),d}());return Object(O.jsx)(g,{children:Object(O.jsxs)("div",{"data-aos":"zoom-out",id:"text",children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("h1",{id:"num",children:"1-"}),Object(O.jsx)("h2",{id:"quest",children:a}),Object(O.jsx)("img",{src:v,alt:"img_?"})]}),Object(O.jsxs)("main",{children:[Object(O.jsxs)("section",{id:"resp1",onClick:function(){return d.autenticTec(1)},className:"alternative",children:[Object(O.jsx)("p",{className:"letter_alt",children:"A"}),Object(O.jsx)("p",{id:"resp1",children:o})]}),Object(O.jsxs)("section",{id:"resp2",onClick:function(){return d.autenticTec(2)},className:"alternative",children:[Object(O.jsx)("p",{className:"letter_alt",children:"B"}),Object(O.jsx)("p",{id:"resp2",children:i})]}),Object(O.jsxs)("section",{id:"resp3",onClick:function(){return d.autenticTec(3)},className:"alternative",children:[Object(O.jsx)("p",{className:"letter_alt",children:"C"}),Object(O.jsx)("p",{id:"resp3",children:r})]}),Object(O.jsxs)("section",{id:"resp4",onClick:function(){return d.autenticTec(4)},className:"alternative",children:[Object(O.jsx)("p",{id:"numb4",className:"letter_alt",children:"D"}),Object(O.jsx)("p",{id:"resp4",children:c})]}),Object(O.jsx)(u.b,{to:"/dev-quiz",target:"_self",children:Object(O.jsx)("section",{id:"back5",className:"alternative",children:Object(O.jsx)("p",{id:"back5",children:"ESTER EGG KK :)"})})})]})]})})},S=function(){return Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/dev-quiz",children:Object(O.jsx)(k,{})}),Object(O.jsx)(p.a,{exact:!0,path:"/dev-quiz/game",children:Object(O.jsx)(q,{})})]})},w=m.a.div(i||(i=Object(b.a)(["\n    background-color: rgba(26, 29, 30, 0.90);\n    padding: 8px 0px;\n\n    top: 0;\n    position: fixed;\n\n    width: 100%;\n    padding: 5px 20px;\n    \n    display: flex;\n    justify-content: center ;\n    height: 60px;\n\n\n    nav{\n        background-color: #1A1D1E;\n        text-align: center;\n        width: 260px;\n        margin: auto;\n        padding: 10px 0px;\n        \n        \n        a{\n            text-decoration: none;\n            color: #BDB7AF ;\n\n            &:hover{\n                color: yellow;\n            }\n            \n        }\n    }\n\n    .margin_left{\n        margin-left: 10px;\n    }\n\n    h1{\n        margin: 0;\n        text-align: left;\n    }\n\n"]))),z=(t.p,function(){return Object(O.jsx)(w,{children:Object(O.jsxs)("nav",{children:[Object(O.jsx)("a",{href:"https://github.com/ymaninho54",target:"_blank",rel:"noreferrer",children:"Github"}),Object(O.jsx)(u.b,{to:"/dev-quiz",target:"_self",className:"margin_left",children:"Home"}),Object(O.jsx)("a",{className:"margin_left",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/angelo-menti-663040210/",children:"LinkedIn"})]})})});m.a.div(r||(r=Object(b.a)(["\n    background-color: rgb(26, 29, 30);\n    color: black;\n    \n"])));var T=function(){return Object(O.jsxs)(u.a,{children:[Object(O.jsx)(z,{}),Object(O.jsx)(S,{})]})};d.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.eedeacc8.chunk.js.map