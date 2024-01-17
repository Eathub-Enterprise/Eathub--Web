/**
 * @description These are the locations eathub would be targetting
 */

const business_address_city = [
  "Agege",
  "Ajeromi/Ifelodun",
  "Apapa",
  "Ifako/Ijaye",
  "Ikeja",
  "Kosofe",
  "Lagos Island",
  "Lagos Mainland",
  "Mushin",
  "Oshodi/Isolo",
  "Shomolu",
  "Surulere",
  "Alimosho",
  "Amuwo Odofin",
  "Ojo",
  "Eti Osa",
  "Ikorodu",
  "Badagry",
  "Epe",
  "Ibeju Lekki",
];
// Converted this into array of objects
export const Locations = business_address_city.map((business_address_city) => ({
  business_address_city,
}));
