// Saves options to chrome.storage
const saveOptions = () => {
    const range = [...Array(20).keys()]
    const output = {}
    range.forEach(idx => {
        const chargeCode = document.getElementById(`chargeCode${idx}`).value
        const label = document.getElementById(`chargeLabel${idx}`).value
        output[chargeCode] = label
    })
    console.log(output);
    chrome.storage.sync.set(
      { chargeCodes: output },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.style.display = 'block';
        setTimeout(() => {
            status.style.display = 'none';
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { chargeCodes: {} },
      (items) => {
        Object.entries(items.chargeCodes).forEach(([chargeCode, label], index) => {
            document.getElementById(`chargeCode${index}`).value = chargeCode;
            document.getElementById(`chargeLabel${index}`).value = label;
        })
    });
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);