// Initial party checklist
const partyChecklist = ["Music Playlist", "Snacks", "Decorations", "Games", "Invitations"];
const extra = ["Drinks", "Pillows", "Movies"];

for (let i = 0; i < 2; i++) {
  partyChecklist.push(extra[i]);
}

for (let i = 0; i < 2; i++) {
  partyChecklist.pop();
}

partyChecklist.sort();

console.log("Initial Party Checklist:", partyChecklist);
console.log("Final Party Checklist:", partyChecklist);