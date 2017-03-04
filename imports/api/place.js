import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { FilesCollection } from 'meteor/ostrio:files';
import './images.js';
import './methods.js';

Places = new Mongo.Collection("places");

Places.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});

Places.before.update(function (userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


if (Meteor.isServer) {

  Meteor.publish('places', function () {
    return Places.find({});
  });

  Meteor.publish('places.detail', function (id) {
    id = FlowRouter.getParam("_id");
    return Places.findOne({ "_id": id});
  });

  Meteor.publish("users", function () {
    return Meteor.users.find();
  });

}


// DescriptionSchema
DescriptionSchema = new SimpleSchema({
  placeName: {
    type: String,
    label: "Enter Place Title",
    max: 1000
  },
  summery: {
    type: String,
    max: 1000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 4
      }
    }
  },
  description: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 6
      }
    }
  },
  mobileNo: {
    type: String,
    max: 1000
  },

});


// Basic Info schema
BasicInfoSchema = new SimpleSchema({

  userId: {
    type: String,
    autoValue:function(){ return Meteor.user()._id }
  },
  placeType: {
    type: String,
    label: "Type of Place",    
    allowedValues: ["Entire Room","Private Place","Shared Room"]
  },
  numberOfGuest: {
    type: Number,
    label: "How many guest you can host",
    min: 0
  },

  propertyType: {
    type: String,
    label: "Type of property",
    allowedValues: ["House","Appartment","....."]
  },

  numberOfBedrooms: {
    type: Number,
    min: 0
  },
  
  numberOfBeds: {
    type: Number,
    min: 0
  },

  bedType: {
    type: String,
    allowedValues: ["Real Bed","Queen Bed","Single Bed","Sofa"],
  },
  
  numberOfBathrooms: {
    type: Number,
    min: 0
  },
});

// LocationSchema
LocationSchema = new SimpleSchema({
    country: {
        type: String,
         allowedValues: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		    ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
        ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
        ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
        ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
        ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
        ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
        ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
        ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
        ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
        ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
        ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
        ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
        ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
        ,"Yemen","Zambia","Zimbabwe"]
    },
    streetAddress: {
        type: String,
        max: 1000
    },
    aptsuite: {
        type: String,
        optional: true,
        max: 1000
    },
    city: {
        type: String,
        max: 200
    },
    state: {
        type: String,
        max: 1000
    },
    zipcode: {
        type: String
    }
});

//Amenities schema
AmenitiesSchema = new SimpleSchema({
  
  amenities: {
    type: [String],
    label: "Select the Amenities",
    autoform: {
      type: "select-checkbox",
      options: [
        { label: "Essentials, Towels, bed sheets, soap, and toilet paper", value: "Essentials" } ,
        { label: "Wifi", value: "Wifi" },
        { label: "Shampoo", value: "Shampoo" },
        { label: "Elevator in building", value: "Elevator in building" },
        { label: "Internet", value: "Internet" },
        { label: "TV", value: "TV" },
        { label: "Air conditioning", value: "Air conditioning" },
        { label: "Iron", value: "Iron" },
        { label: "Hangers", value: "Hangers" },
        { label: "Wheelchair accessible", value: "Wheelchair accessible" },
        { label: "Washer", value: "Washer" },
        { label: "Laptop friendly workspace", value: "Laptop friendly workspace" },
        { label: "Doorman", value: "Doorman" },
        { label: "Gym", value: "Gym" },
        { label: "Smoking allowed", value: "Smoking allowed" },
        { label: "Pets allowed", value: "Pets allowed" },
        { label: "Breakfast", value: "Breakfast" },
        { label: "Free parking on premises", value: "Free parking on premises" },        
      ]
    }
  },
    isBusinessReady:{
    type: String,
    label: "Business Ready",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox"
      }
    }
  },
  safetyFeatures: {
    type: [String],
    autoform: {
      type: "select-checkbox",
      options: [
        { label: "Smoke detector", value: "Smoke detector" } ,
        { label: "Carbon monoxide detector", value: "Carbon monoxide detector" },
        { label: "Fire extinguisher", value: "Fire extinguisher" },
        { label: "First aid kit", value: "First aid kit" },
        { label: "Safety card", value: "Safety card" },
      ]
    }
  },
});


// AvailabilitySchema
AvailabilitySchema = new SimpleSchema({
  
  stayDurationMinNight: {
      type: Number,
      label: "Minimum Stay Duration",
      min: 0
  },
  stayDurationMaxNight: {
      type: Number,
      label: "Maximum Stay Duration",
      min: 0      
  },
});

// HouseRulesSchema
HouseRulesSchema = new SimpleSchema({
  houseRules: {
    type: [String],
    label: "Set House Rules",
    autoform: {
      type: "select-checkbox",
      options: [
        { label: "No Smoking", value: "No Smoking" } ,
        { label: "House Rule 2", value: "House Rule 2" },
        { label: "House Rule 3", value: "House Rule 3" },
        { label: "House Rule 4", value: "House Rule 4" },
        { label: "House Rule 5", value: "House Rule 5" },
      ]
    }
  },
  optHouseRules: {
    type: Array,
    label: "Additional house rule",    
    optional: true
  },
  'optHouseRules.$': {
    type: Object
  },
  'optHouseRules.$.summery': {
    label: "Additional house rule",
    type: String
  },
});


// AttachmentSchema
AttachmentSchema = new SimpleSchema({

  pictures: {
    type: Array,
    label: 'Choose file'
  },
  'pictures.$': {
    type: Object,
  },
  'pictures.$.filename': {
    type: String,    
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    }
  }
});

//Pricing schema
PricingSchema = new SimpleSchema({

  defaultPrice: {
    type: Number,
    min: 0
  },

  cleaningFee: {
    type: Number,
    min: 0
  },

  perExtraPeople: {
    type: Number,
    label: "Price per extra people",
    min: 0
  },

  currency: {
    type: String,
     allowedValues: ["AFA","ALL","DZD","USD","EUR","AOA","XCD","NOK","ARA","AMD","AWG","AUD","AZM","BSD","BHD","BDT","BBD","BYR","BZD","XAF","BMD","BTN","BOB","BAM","BWP","BRL","GBP","BND","BGN","BIF","KHR","CAD","CVE","KYD","CLF","CNY","COP","KMF","CDZ","NZD","CRC","HRK","CUP","CZK","DKK","DJF","DOP","TPE","EGP","ERN","EEK","ETB","FKP","FJD","XPF","GMD","GEL","GHC","GIP"],
  },

  weeklyDiscount: {
    type: Number,
    min: 0
  },
  monthlyDiscount: {
    type: Number,
    min: 0
  },
});


Places.attachSchema(DescriptionSchema);
Places.attachSchema(BasicInfoSchema);
Places.attachSchema(LocationSchema);
Places.attachSchema(AmenitiesSchema);
Places.attachSchema(AvailabilitySchema);
Places.attachSchema(HouseRulesSchema);
Places.attachSchema(AttachmentSchema);
Places.attachSchema(PricingSchema);





