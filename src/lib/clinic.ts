export const SITE_URL = "https://smilecliniquedental.com";

export const CLINIC = {
  name: "Smile Clinique Dental Care Centre",
  shortName: "Smile Clinique",
  doctor: "Dr. Nidhi Mehta",
  doctorQualification: "BDS",
  phoneDisplay: "+91 98206 27550",
  phoneHref: "tel:+919820627550",
  landlineDisplay: "022-35780947",
  landlineHref: "tel:02235780947",
  whatsappHref:
    "https://wa.me/919820627550?text=Hi%20Smile%20Clinique%2C%20I%27d%20like%20to%20book%20an%20appointment%20for%20a%20consultation.%20Please%20let%20me%20know%20the%20available%20slots.",
  email: "",
  street: "G 3, Akashdeep Building, Dongersi Road",
  locality: "Malabar Hill",
  region: "Mumbai",
  postalCode: "400006",
  country: "IN",
  addressLine:
    "G 3, Akashdeep Building, Dongersi Road, Malabar Hill, Mumbai - 400006",
  latitude: 18.9553,
  longitude: 72.8007,
  mapsUrl: "https://maps.app.goo.gl/9R6wR89u792Y7X7Z7",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.630131844217!2d72.7959881!3d18.9477588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cdfba84ed791%3A0x9ba637a308aabb27!2sSmile%20Clinique%20-%20Dr.%20Nidhi%20Mehta!5e0!3m2!1sen!2sin!4v1778780300517!5m2!1sen!2sin",
  hours: [
    { days: "Monday to Saturday", time: "9:00 AM to 1:00 PM" },
    { days: "Monday to Saturday", time: "4:00 PM to 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  areasServed: [
    "Malabar Hill",
    "Walkeshwar",
    "Cumballa Hill",
    "Kemps Corner",
    "Peddar Road",
    "Breach Candy",
    "Altamount Road",
    "Tardeo",
    "Marine Lines",
    "Churchgate",
    "Colaba",
    "Worli",
    "South Mumbai",
  ],
} as const;

export const HOME_SECTIONS = {
  services: "/#services",
  workflow: "/#workflow",
  cases: "/#cases",
  faq: "/#faq",
  location: "/#location",
  contact: "/#contact",
} as const;
