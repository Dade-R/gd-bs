const path = require("path");
const fs = require("fs");

// Get the icons directory
const dirIcons = path.join(__dirname, "node_modules/bootstrap-icons/icons");

// Get the icon files
fs.readdir(dirIcons, function (err, files) {
    var icons = [];
    var switches = [];
    var types = [];
    var typeDefs = [];

    // See if there is an error
    if (err) {
        // Log the error
        console.log("Error: " + err);
        return;
    }

    // Parse the files
    files.forEach(function (file) {
        // Ensure it's an svg
        if (!file.endsWith(".svg")) { return; }

        // Create the variable name
        var idx = 0;
        var varName = file[0].toLowerCase() + file.substr(1);
        while ((idx = varName.indexOf('-')) > 0) {
            // Find the instance
            varName = varName.substr(0, idx) + varName.charAt(idx + 1).toUpperCase() + varName.substr(idx + 2);
        }

        // Determine the variable and function names
        varName = varName.replace(/\.svg$/, '');
        var funcName = varName[0].toUpperCase() + varName.substr(1);

        // Add the type
        let iconType = types.length + 1;
        types.push("\t" + funcName + " = " + iconType);

        // Add the switch case statement
        switches.push("\t\t// " + file);
        switches.push("\t\tcase " + iconType + ":");
        switches.push("\t\t\treturn generateIcon(SVGIcons." + varName + ", height, width);");

        // Add the type definition
        typeDefs.push("\t// " + file);
        typeDefs.push("\t" + funcName + ": number;");

        // Convert the svg to a typescript file
        var stream = fs.createWriteStream("./src/icons/svgs/" + varName + ".ts");
        stream.write("export const " + varName + " = `" + fs.readFileSync(dirIcons + "/" + file) + "`;");
        stream.end();

        // Add an export for this file
        icons.push("export * from \"./" + varName + "\";");
    });

    // Delete the files
    try { fs.unlinkSync("./@types/icons.d.ts"); } catch { }
    try { fs.unlinkSync("./src/icons/icons.ts"); } catch { }
    try { fs.unlinkSync("./src/icons/iconTypes.ts"); } catch { }

    // Generate the file
    var stream = fs.createWriteStream("./@types/icons.d.ts");
    stream.write([
        `/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the icon and append it to the target element
 *         var elIcon = $REST.Icons($REST.IconTypes.Alarm, 32, 32);
 *         document.querySelector("#demo").appendChild(elIcon);
 *     });
 * </script>
*/`,
        `\n/**
 * ### Icons
 * 
 * Renders an icon by type
 * 
 * \`\`\`ts
 * import { Icons, IconTypes } from "gd-sprest-bs";
 * 
 * // Create the icon and append it to the target element
 * let elIcon = Icons(IconTypes.Alarm, 32, 32);
 * document.querySelector("#icon").appendChild(elIcon);
 * \`\`\`
 */`,
        "export const Icons: (iconType:number, height?:number, width?:number) => HTMLElement;",
        `\n/**
 * Icon Types
*/`,
        "export const IconTypes: {",
        typeDefs.join('\n'),
        "}"
    ].join("\n"));
    stream.end();

    // Log
    console.log("Icons definition file generated");

    // Generate the svgs index file
    var stream = fs.createWriteStream("./src/icons/svgs/index.ts");
    stream.write(icons.join('\n'));
    stream.close();

    // Generate the icons index file
    stream = fs.createWriteStream("./src/icons/index.ts");
    stream.write([
        'export * from "./iconTypes";\n',
        '// Icons to import',
        'import * as SVGIcons from "./svgs";\n',
        '// Generates the html for an icon',
        'const generateIcon = (svg: string, height: number = 32, width: number = 32) => {',
        '\t// Get the icon element',
        '\tlet elDiv = document.createElement("div");',
        '\telDiv.innerHTML = svg;',
        '\tlet icon = elDiv.firstChild as HTMLElement;',
        '\tif (icon) {',
        '\t    // Set the height/width',
        '\t    icon.setAttribute("height", (height ? height : 32).toString());',
        '\t    icon.setAttribute("width", (width ? width : 32).toString());\n',
        '\t    // Update the styling',
        '\t    icon.style.pointerEvents = "none";\n',
        '\t    // Support for IE',
        '\t    icon.setAttribute("focusable", "false");',
        '\t}\n',
        '\t// Return the icon',
        '\treturn icon;',
        '}\n',
        "// Renders an icon by type",
        "export const Icons = (iconType:number, height?:number, width?:number) => {",
        "\t// See which icon is selected",
        "\tswitch(iconType) {",
        switches.join('\n'),
        "\t}",
        "}"
    ].join('\n'));
    stream.end();

    // Generate the icon types
    var stream = fs.createWriteStream("./src/icons/iconTypes.ts");
    stream.write([
        "// Icon Types",
        "export enum IconTypes {",
        types.join(',\n'),
        '}'
    ].join('\n'));
    stream.end();

    // Log
    console.log("Icons file generated");
});