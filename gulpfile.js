const typescript = require("gulp-typescript");
const gulp = require("gulp");
const replace = require("gulp-replace");
const { readFile } = require("fs/promises");
const plumber = require("gulp-plumber");
const tsProject = typescript.createProject("tsconfig.json");

async function build() {
	tsProject
		.src()
		.pipe(plumber())
		.pipe(tsProject())
		.pipe(
			replace(
				"_REPLACE",
				(await readFile("new.js"))
					.toString()
					.replace(/`/gm, "\\`")
					.replace(/\${/gm, "\\${")
			)
		)
		.pipe(replace("_REPLACE2", (await readFile("style.css")).toString()))
		.pipe(gulp.dest("."));
}

module.exports = {
	default: async () => {
		await build();
	},
	watch: async () => {
		gulp.watch("*.ts", build);
	},
};
