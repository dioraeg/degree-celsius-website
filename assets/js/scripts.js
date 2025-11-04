// JSON-LD for HVACBusiness
const hvacBusiness = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://www.degreecelsius.com.au/#business",
  "name": "Degree Celsius",
  "url": "https://www.degreecelsius.com.au/",
  "logo": "https://www.degreecelsius.com.au/assets/images/degreecelsius-logo.png",
  "image": "https://www.degreecelsius.com.au/assets/images/degreecelsius-logo.png",
  "telephone": "+61459326621",
  "email": "admin@degreecelsius.com.au",
  "areaServed": [
    { "@type": "City", "name": "Melbourne" },
    { "@type": "AdministrativeArea", "name": "Victoria" }
  ],
  "serviceType": [
    "Ducted air conditioning",
    "Split-system air conditioning",
    "Hydronic heating",
    "Underfloor heating",
    "HVAC maintenance & servicing"
  ],
  "sameAs": [
    "https://www.instagram.com/degreecelsius_hvac",
    "https://www.facebook.com/share/1AeKjB9W2e/",
    "https://www.linkedin.com/company/degree-celsius/"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+61459326621",
    "areaServed": "AU",
    "availableLanguage": "en"
  }]
};

// JSON-LD for Website
const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.degreecelsius.com.au/",
  "name": "Degree Celsius",
  "publisher": { "@id": "https://www.degreecelsius.com.au/#business" }
};

// Inject the structured data into the HTML document
const scriptTag1 = document.createElement('script');
scriptTag1.type = 'application/ld+json';
scriptTag1.textContent = JSON.stringify(hvacBusiness);
document.head.appendChild(scriptTag1);

const scriptTag2 = document.createElement('script');
scriptTag2.type = 'application/ld+json';
scriptTag2.textContent = JSON.stringify(websiteData);
document.head.appendChild(scriptTag2);
