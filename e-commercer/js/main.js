// const apiKey = '53d3c02e056edba8db0c02bf0dea15ed';




fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=82009&page=1&pagesize=100', {
  method: 'GET',
  headers: {
    'apikey': '53d3c02e056edba8db0c02bf0dea15ed',
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    const propertyList = document.getElementById('property-list');
    data.property.forEach(property => {
      const propertyElement = document.createElement('div');
      propertyElement.className = 'property';
      propertyElement.innerHTML = `
        <div class="property-details">
          <div>Address: ${property.address}</div>
          <div>City: ${property.identifier}</div>
          <div>State: ${property.location}</div>
          <div>Zip: ${property.vintage}</div>
        </div>
      `;
      propertyList.appendChild(propertyElement);
    });
  })
  .catch(error => console.error('Error:'+ error));

  