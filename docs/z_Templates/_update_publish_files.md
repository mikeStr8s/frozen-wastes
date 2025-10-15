<%*
const dv = app.plugins.plugins["dataview"].api;
const filename = "Recently Created";
const query = `TABLE WITHOUT ID ("[" + file.name + "](" + replace(file.path, " ", "%20") + ")") as Page, file.ctime as "Creation Date"
from "world"
sort file.ctime desc
limit 5`;

const tFile = tp.file.find_tfile(filename);
const queryOutput = await dv.queryMarkdown(query);

// write query output to file
await app.vault.modify(tFile, queryOutput.value);
%>