// Import Modules
import Product from "../classes/Product.js";
import Inventary from "../classes/Inventary.js";

// Creates a new Inventary with all the products & Returns an array with all the Products
export default function createInventary() {
    // Create the inventary & store it in Local Storage
    let newInventary = new Inventary([]);

    // Create all the Products
    
    // Equipment
    const chestBench = new Product(1, "Chest Bench", 145, "machines", "Multifunctional bench that allows various levels of training, It has 3 different inclinations, inclined and reclines planes. Ideal for strengthhening chest, legs, shoulders and arms.", "170 cm x 107 cm x 66.5 cm", "machine-chest", 0);
    const runningMachine = new Product(2, "Running Machine", 750, "machines", "description", "dimensions", "machine-run", 0);
    const stationaryBike = new Product(3, "Stationary Bike", 379, "machines", "description", "dimensions", "machine-bike", 0);
    
    const dumbells2 = new Product(4, "Dumbells 2kg", 38, "dumbells", "description", "dimensions", "dumbells-10", 0);
    const dumbells4 = new Product(5, "Dumbells 4kg", 40, "dumbells", "description", "dimensions", "dumbells-10", 0);
    const dumbells6 = new Product(6, "Dumbells 6kg", 42, "dumbells", "description", "dimensions", "dumbells-10", 0);
    const dumbells8 = new Product(7, "Dumbells 8kg", 44, "dumbells", "description", "dimensions", "dumbells-10", 0);
    const dumbells10 = new Product(8, "Dumbells 10kg", 46, "dumbells", "description", "dimensions", "dumbells-10", 0);
    const dumbells12 = new Product(9, "Dumbells 12kg", 48, "dumbells", "description", "dimensions", "dumbells-10", 0);
    const dumbells14 = new Product(10, "Dumbells 14kg", 50, "dumbells", "description", "dimensions", "dumbells-10", 0);
    const dumbells16 = new Product(11, "Dumbells 16kg", 52, "dumbells", "description", "dimensions", "dumbells-10", 0);
    
    const weight2 = new Product(12, "Weight 2kg", 20, "weights", "description", "dimensions", "weight-10kg", 0);
    const weight3 = new Product(13, "Weight 3kg", 21, "weights", "description", "dimensions", "weight-10kg", 0);
    const weight5 = new Product(14, "Weight 5kg", 24, "weights", "description", "dimensions", "weight-10kg", 0);
    const weight10 = new Product(15, "Weight 10kg", 28, "weights", "description", "dimensions", "weight-10kg", 0);
    const weight20 = new Product(16, "Weight 20kg", 32, "weights", "description", "dimensions", "weight-10kg", 0);
    
    const barOlympic = new Product(17, "Olympic Bar", 90, "bars", "description", "dimensions", "bars-olympic", 0);
    const barRoman = new Product(18, "Roman Bar", 58, "bars", "description", "dimensions", "bars-roman", 0);
    const barW = new Product(19, "W Bar", 75, "bars", "description", "dimensions", "bars-w", 0);
    
    const matFitness = new Product(20, "Fitness Mat", 20, "mats", "description", "dimensions", "mats", 0);
    
    
    // Supplements
    const protein200 = new Product(21, "Whey Protein 200g", 35, "protein", "description", "dimensions", "protein200", 0);
    const protein500 = new Product(22, "Whey Protein 500g", 48, "protein", "description", "dimensions", "protein500", 0);
    const protein1000 = new Product(23, "Whey Protein 1kg", 54, "protein", "description", "dimensions", "protein1000", 0);
    const protein2000 = new Product(24, "Whey Protein 2kg", 78, "protein", "description", "dimensions", "protein2000", 0);
    
    const creatine200 = new Product(25, "Creatine 200g", 32, "creatine", "description", "dimensions", "creatine200", 0);
    const creatine300 = new Product(26, "Creatine 300g", 38, "creatine", "description", "dimensions", "creatine300", 0);
    const creatine500 = new Product(27, "Creatine 500g", 42, "creatine", "description", "dimensions", "creatine500", 0);
    
    const preworkout200 = new Product(28, "Pre-Workout 200g", 42, "preworkout", "description", "dimensions", "preworkout200", 0);
    const preworkout300 = new Product(29, "Pre-Workout 300g", 52, "preworkout", "description", "dimensions", "preworkout300", 0);
    const preworkout500 = new Product(30, "Pre-Workout 500g", 78, "preworkout", "description", "dimensions", "preworkout500", 0);
    
    const bcaas200 = new Product(31, "BCAAs 200g", 38, "bcaas", "description", "dimensions", "bcaas200", 0);
    const bcaas300 = new Product(32, "BCAAs 300g", 48, "bcaas", "description", "dimensions", "bcaas300", 0);
    const bcaas500 = new Product(33, "BCAAs 500g", 68, "bcaas", "description", "dimensions", "bcaas500", 0);
    
    const shakerStandard = new Product(34, "Standard Shaker", 18, "shaker", "description", "dimensions", "shaker-standard", 0);
    const shakerPlatinum = new Product(35, "Platinum Shaker", 28, "shaker", "description", "dimensions", "shaker-platinum", 0);
    const shakerUniversal = new Product(36, "Universal Shaker", 34, "shaker", "description", "dimensions", "shaker-universal", 0);
    
    
    // Add all products to inventary
    
    // Equipment
    newInventary.addProduct(chestBench);
    newInventary.addProduct(runningMachine);
    newInventary.addProduct(stationaryBike);
    
    newInventary.addProduct(dumbells2);
    newInventary.addProduct(dumbells4);
    newInventary.addProduct(dumbells6);
    newInventary.addProduct(dumbells8);
    newInventary.addProduct(dumbells10);
    newInventary.addProduct(dumbells12);
    newInventary.addProduct(dumbells14);
    newInventary.addProduct(dumbells16);
    
    newInventary.addProduct(weight2);
    newInventary.addProduct(weight3);
    newInventary.addProduct(weight5);
    newInventary.addProduct(weight10);
    newInventary.addProduct(weight20);
    
    newInventary.addProduct(barOlympic);
    newInventary.addProduct(barRoman);
    newInventary.addProduct(barW);
    
    newInventary.addProduct(matFitness);
    
    // Supplements
    newInventary.addProduct(protein200);
    newInventary.addProduct(protein500);
    newInventary.addProduct(protein1000);
    newInventary.addProduct(protein2000);
    
    newInventary.addProduct(creatine200);
    newInventary.addProduct(creatine300);
    newInventary.addProduct(creatine500);
    
    newInventary.addProduct(preworkout200);
    newInventary.addProduct(preworkout300);
    newInventary.addProduct(preworkout500);
    
    newInventary.addProduct(bcaas200);
    newInventary.addProduct(bcaas300);
    newInventary.addProduct(bcaas500);
    
    newInventary.addProduct(shakerStandard);
    newInventary.addProduct(shakerPlatinum);
    newInventary.addProduct(shakerUniversal);
    
    
    // Add inventary to Session, 0 Storage
    sessionStorage.setItem('inventary', JSON.stringify(newInventary.products));

    return newInventary.products;
}