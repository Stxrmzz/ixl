"use strict";
const script = document.createElement("script");
script.type = "module";
script.innerHTML = `import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
const log = (text, color, size) => {
    console.log("%c%s", \`color: \${color}; font-size: \${size || 1}em;\`, text);
};
const css = (inject) => {
    const $style = document.createElement("style");
    $style.innerHTML = inject;
    document.body.appendChild($style);
};
function syntheticImport(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.async = true;
        script.src = url;
        script.addEventListener("load", resolve);
        script.addEventListener("error", reject);
        document.head.appendChild(script);
    });
}
const require = syntheticImport;
async function main() {
    // Entrypoint
    await syntheticImport("https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js");
    log("init", "lime", 1);
    const gui = new dat.GUI();
    const folder = gui.addFolder("real");
    folder.add(window, "scrollY", 1);
    $();
}
main();
`;
document.body.appendChild(script);
const style = document.createElement("style");
style.innerHTML = `import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
const log = (text, color, size) => {
    console.log("%c%s", \`color: \${color}; font-size: \${size || 1}em;\`, text);
};
const css = (inject) => {
    const $style = document.createElement("style");
    $style.innerHTML = inject;
    document.body.appendChild($style);
};
function syntheticImport(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.async = true;
        script.src = url;
        script.addEventListener("load", resolve);
        script.addEventListener("error", reject);
        document.head.appendChild(script);
    });
}
const require = syntheticImport;
async function main() {
    // Entrypoint
    await syntheticImport("https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js");
    log("init", "lime", 1);
    const gui = new dat.GUI();
    const folder = gui.addFolder("real");
    folder.add(window, "scrollY", 1);
    $();
}
main();
2`;
document.body.appendChild(style);
