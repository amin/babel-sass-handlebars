import "./base/styles/app.sass";

document.addEventListener('DOMContentLoaded', () => {
    const template = require("./base/templates/index.handlebars")
    document.body.insertAdjacentHTML('afterbegin',template());
    })