let chargeCodeMap = {}
chrome.storage.sync.get(
    { chargeCodes: {} },
    (items) => {
      chargeCodeMap = items.chargeCodes
  });

function relabelTimesheet(){
    const unitFrame = document.querySelector("#unitFrame");
    if (!unitFrame) {
        setTimeout(relabelTimesheet, 500);
        return;
    }
    try {
        const doc = unitFrame.contentWindow.document;
        const chargeCodeColumn = doc.querySelector("#udtColumn0");
        const labelColumn = doc.querySelector("#udtColumn1");
        const chargeCodeCells = Array.from(chargeCodeColumn.children)
            const labelCells = Array.from(labelColumn.children)

        Object.entries(chargeCodeMap).forEach(([chargeCode, newLabel]) => {
            const chargeCodeCell = chargeCodeCells.find(cell => cell.innerText === chargeCode);
            const labelCellId = chargeCodeCell.id.replace("_0", "_1");
            const labelCell = labelCells.find(cell => cell.id === labelCellId);
            labelCell.innerText = newLabel;
        });
    } catch (e) {
        setTimeout(relabelTimesheet, 500);
        return;
    }
    setTimeout(relabelTimesheet, 500);
}

relabelTimesheet()