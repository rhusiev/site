import fs from "fs";

const guidesDirectory = process.cwd() + "/content/guides/";

export function getGuidesForSection(
    section: string,
): Array<{ fileName: string; title: string }> {
    const sectionDirectory = guidesDirectory + section;
    const fileNames = fs.readdirSync(sectionDirectory);
    const guides = fileNames.map((fileName) => {
        // Get the first heading in the file
        const fullPath = sectionDirectory + "/" + fileName;
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const match = fileContents.match(/^#\s(.*)$/m);
        if (match === null) {
            throw new Error(`${fullPath} needs to have a markdown title`);
        }
        const title = match[1];
        fileName = fileName.replace(/\.md$/, "");
        return {
            fileName,
            title,
        };
    });
    return guides;
}
