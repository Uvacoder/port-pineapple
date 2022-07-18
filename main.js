<<<<<<< HEAD
(function () {
    let hash = window.location.hash.substring(1);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    if (hash)
        for (let i = 0; i < $$('.select-project-type').length; i++) {
            const select = $$('.select-project-type')[i];
            if (select.getAttribute('data-type').includes(hash)) {
                removeActive(select.parentElement);
                select.classList.add('selected');
                break;
            }
        }
    const projects = [{
            name: "Bezier Visualizer", description: "A site to visualize manipulable, animated Cubic Bezier curves.",
            img: "bezier-visualizer/thumb.png",
            link: "/bezier-visualizer",
            type: 'site'
        }, {
            name: "Radium", description: "A fresh-looking theme for VSCode. Almost radioactive.</p><p class=\"small\">Made with a friend",
            img: 'https://radium-theme.github.io/example.png',
            link: 'https://radium-theme.github.io',
            type: 'theme'
        }, {
            name: "Colours", description: "Album (2022)",
            img: '/music/colours/colours.png',
            link: 'https://artists.landr.com/pr',
            type: 'music', tracks: 6, time: 31
        }, {
            name: "Polyhedra", description: "Single (2022)",
            img: 'imgs/polyhedra',
            type: 'music',
            link: '/music/polyhedra/polyhedra.thumb.png', tracks: 1, time: 3
        }, {
            name: "Social Credit Quiz",
            description: 'Inspired by the Internet meme, this quiz tests your loyalty to the CCP',
            link: "/social-credit",
            type: 'site',
            img: './social-credit/eye-pop.png'
        }, {
            name: "Wiggle Text",
            description: "Make a string of text that appears to be in the shape of a wiggle",
            link: "/wiggle",
            type: 'site',
            img: './imgs/wiggle.png'
        }];
    function loadProjects(projectType) {
        var projectsHTML = '';
        for (const project of projects) {
            let { name, img, type, link, description } = project;
            let imgHTML = img ? '<img alt="' + name + '" src="' + img + '">' : '';
            let display = isType(type, projectType) ? 'none' : 'flex';
            let descriptionHTML = type === "music" ? `<p>${description}</p><p class="album-sub tracks">${project.tracks === 1 ? "Single" : `${project.tracks} tracks`}</p><p class="album-sub duration">${project.time} minutes</p>` : '<p>' + description + '</p>';
            projectsHTML += '<a class="project project-type-' + type + '" style="display: ' + display + '" href="' + link + '" target="_blank">' + imgHTML + '<div><h1 data-type="' + type + '"> ' + name + '</h1>' + descriptionHTML + '</div></a>';
        }
        return projectsHTML;
    }
    function isType(type, projectType) {
        let indices = ['site', 'music', 'other'];
        if (projectType === 'other' && indices.indexOf(type) === -1)
            return false;
        return type !== projectType;
    }
    var pType = {
        string: hash ? hash : 'site',
        element: hash ? $('.select-project-type.' + hash) : $('.select-project-type.site')
    };
    if (hash)
        pType.element.classList.add('active');
    $('.projects').innerHTML += loadProjects(pType.string);
    function sortProjects(type) {
        let projects = $('.projects');
        if (pType.string === type)
            return;
        let dir = getdir(pType.string, type);
        projects.classList.add(('going-' + (dir === 'right' ? 'left' : 'right')));
        pType.string = type;
        var npDummy = document.createElement('div');
        npDummy.innerHTML = loadProjects(pType.string);
        npDummy.classList.add('projects', ('coming-' + dir));
        projects.parentElement.insertAdjacentElement('afterbegin', npDummy);
        setTimeout(function () { npDummy.classList.remove('coming-' + dir); });
        setTimeout(function () {
            projects.remove();
        }, 600);
    }
    function getdir(from, to) {
        let indices = ['site', 'music', 'other'];
        if (indices.indexOf(from) < indices.indexOf(to))
            return 'right';
        return 'left';
    }
    let projectTypes = $$('.select-project-type');
    for (let i = 0; i < projectTypes.length; i++) {
        projectTypes[i].addEventListener('click', function () {
            sortProjects(this.getAttribute('data-type'));
            removeActive(projectTypes);
            pType.element = this;
            window.location.hash = this.getAttribute('data-type');
            this.classList.add('selected');
        });
    }
    function removeActive(projectTypes) {
        for (let i = 0; i < projectTypes.length; i++)
            projectTypes[i].classList.remove('selected');
    }
})();
=======
"use strict";function _createForOfIteratorHelper(a,d){var b="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!b){if(Array.isArray(a)||(b=_unsupportedIterableToArray(a))||d&&a&&"number"==typeof a.length){b&&(a=b);var e=0,c=function(){};return{s:c,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(a){throw a},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function(){b=b.call(a)},n:function(){var a=b.next();return g=a.done,a},e:function(a){h=!0,f=a},f:function(){try{g||null==b.return||b.return()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,c){if(a){if("string"==typeof a)return _arrayLikeToArray(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return _arrayLikeToArray(a,c)}}function _arrayLikeToArray(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}!function(){var a=window.location.hash.substring(1),$=document.querySelector.bind(document),b=document.querySelectorAll.bind(document);if(a)for(var c=0;c<b(".select-project-type").length;c++){var d=b(".select-project-type")[c];if(d.getAttribute("data-type").includes(a)){m(d.parentElement),d.classList.add("selected");break}}var i=[{name:"Bezier Visualizer",description:"A site to visualize manipulable, animated Cubic Bezier curves.",img:"bezier-visualizer/thumb.png",link:"/bezier-visualizer",type:"site"},{name:"Radium",description:'A fresh-looking theme for VSCode. Almost radioactive.</p><p class="small">Made with a friend',img:"https://radium-theme.github.io/example.png",link:"https://radium-theme.github.io",type:"theme"},{name:"Colours",description:"Each song is a color",img:"imgs/colours.png",link:"https://artists.landr.com/pr",type:"album",tracks:6,time:31},{name:"Coming soon",description:"???? ?? ? ?-????? ??",img:"imgs/comingsoon.png",type:"album",link:!1,tracks:"?",time:"?"},{name:"Social Credit Quiz",description:"Inspired by the Internet meme, this quiz tests your loyalty to the CCP",link:"/social-credit",type:"site",img:"./social-credit/eye-pop.png"},{name:"Wiggle Text",description:"Make a string of text that appears to be in the shape of a wiggle",link:"/wiggle",type:"site",img:"./imgs/wiggle.png"}];function h(k){var d,e="",b=_createForOfIteratorHelper(i);try{for(b.s();!(d=b.n()).done;){var a=d.value,f=a.name,g=a.img,c=a.type,l=a.link,h=a.description,m=g?'<img alt="'+f+'" src="'+g+'">':"",n=j(c,k)?"none":"flex",o="album"===c?"<p>"+h+'</p><p class="album-sub tracks">'+a.tracks+' tracks</p><p class="album-sub duration">'+a.time+" minutes</p>":"<p>"+h+"</p>";e+='<a class="project project-type-'+c+'" style="display: '+n+'" href="'+l+'" target="_blank">'+m+'<div><h1 data-type="'+c+'"> '+f+"</h1>"+o+"</div></a>"}}catch(p){b.e(p)}finally{b.f()}return e}function j(a,b){return("other"!==b|| -1!==["site","album","other"].indexOf(a))&&a!==b}var f={string:a||"site",element:a?$(".select-project-type."+a):$(".select-project-type.site")};function k(a){var c=$(".projects");if(f.string!==a){var d=l(f.string,a);c.classList.add("going-"+("right"===d?"left":"right")),f.string=a;var b=document.createElement("div");b.innerHTML=h(f.string),b.classList.add("projects","coming-"+d),c.parentElement.insertAdjacentElement("afterbegin",b),setTimeout(function(){b.classList.remove("coming-"+d)}),setTimeout(function(){c.remove()},600)}}function l(b,c){var a=["site","album","other"];return a.indexOf(b)<a.indexOf(c)?"right":"left"}a&&f.element.classList.add("active"),$(".projects").innerHTML+=h(f.string);for(var g=b(".select-project-type"),e=0;e<g.length;e++)g[e].addEventListener("click",function(){k(this.getAttribute("data-type")),m(g),f.element=this,window.location.hash=this.getAttribute("data-type"),this.classList.add("selected")});function m(b){for(var a=0;a<b.length;a++)b[a].classList.remove("selected")}}()
>>>>>>> 8b106d63d9e1a2aafe53a3f49e955be70a02cadf
