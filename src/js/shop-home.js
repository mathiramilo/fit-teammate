import Inventary from "./classes/Inventary.js";
import createInventary from "./functions/createInventary.js";

// The object Inventary contains an array of all the prodcuts
let inventary = new Inventary([]);
// Verifies if Inventary is in Session Storage
inventary['products'] = JSON.parse(sessionStorage.getItem('inventary')) || createInventary();