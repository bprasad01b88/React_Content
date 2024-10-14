const { ipcRenderer } = window.require('electron');

// Listen for MAC address data
ipcRenderer.on('mac-addresses', (event, macAddresses) => {
  console.log('Received MAC addresses:', macAddresses);
  // You can update your DOM or React state here
  document.getElementById('mac-addresses').innerText = macAddresses.join(', ');
});
