
const PriceOptions = () => {
    
       const priceoptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": ["Access to basic gym facilities", "Use of standard gym equipment"],
            "price": 29.99
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": ["Access to premium gym facilities", "Use of advanced gym equipment", "Access to fitness classes"],
            "price": 49.99
          },
          {
            "id": 3,
            "name": "Annual Membership",
            "features": ["Annual membership with full access to all gym amenities"],
            "price": 499.99
          },
          {
            "id": 4,
            "name": "Student Membership",
            "features": ["Discounted membership for students", "Access to basic gym facilities"],
            "price": 19.99
          },
          {
            "id": 5,
            "name": "Family Membership",
            "features": ["Membership for a family of up to four people", "Access to basic gym facilities"],
            "price": 79.99
          }
        ];
      
      
    return (
        <div>
            <h2 className="text-2xl">Best Prices</h2>
            {
                priceoptions.map(option=><PriceOptions key={option.id}></PriceOptions>)
            }
        </div>
    );
};

export default PriceOptions;