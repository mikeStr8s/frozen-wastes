<%*
const dv = app.plugins.plugins["dataview"].api;
const filename = "Recently Created";
const query = `table file.ctime as "Creation Date"
from ""
sort file.ctime desc
limit 10`;

const tFile = tp.file.find_tfile(filename);
const queryOutput = await dv.queryMarkdown(query);

// write query output to file
await app.vault.modify(tFile, queryOutput.value);
%>