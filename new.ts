import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
const log = (text: string, color: string, size: number | null | undefined) => {
	console.log("%c%s", `color: ${color}; font-size: ${size || 1}em;`, text);
};
const css = (inject: string) => {
	const $style = document.createElement("style");
	$style.innerHTML = inject;
	document.body.appendChild($style);
};

function syntheticImport(url: string) {
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
import type _d from "dat.gui";
declare const dat: typeof _d;
async function main() {
	// Entrypoint
	await syntheticImport(
		"https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js"
	);
	log("init", "lime", 1);
	const gui = new dat.GUI();
	const folder = gui.addFolder("real");
	folder.add(window, "scrollY", 1);
	$();
}

main();
