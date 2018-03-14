const apiKey = 'QJCrkw7kXWyp7GyPn75PrJF4YSom14d8GYEW_ChUllSzxKCG5Y4k2xO4PJPmQi51zKU2z-l5QBjauw8fxKGgGiJJzZyU3mDAEDWVpOFomZZf_GVf05TO3qQolLCVWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount
          }
        });
      }
    });
  }
}

export default Yelp;
