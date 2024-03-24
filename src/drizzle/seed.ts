import { db } from "./connection";
import { roles, places, productCategories, payments, suppliers, unitTypes } from "./schemas";
import roleData from "./dummy/role.json";
import placeData from "./dummy/place.json";
import productCategoryData from "./dummy/product-category.json";
import paymentData from "./dummy/payment.json";
import supplierData from "./dummy/supplier.json";
import unitTypeData from "./dummy/unit-type.json";

const enabledSeedItems = [
  "roles",
  "places",
  "productCategories",
  "payments",
  "suppliers",
  "unitTypes",
];

async function main() {
  const seeds: { [key: string]: () => Promise<unknown> } = {
    roles: roleSeed,
    places: placeSeed,
    productCategories: productCategorySeed,
    payments: paymentSeed,
    suppliers: supplierSeed,
    unitTypes: unitTypeSeed,
  };

  for (const seedName of enabledSeedItems) {
    const seed = seeds[seedName];
    if (seed) {
      await seed();
    }
  }
}

export const roleSeed = async () => {
  for (const role of roleData.roles) {
    await db.insert(roles).values(role).onConflictDoNothing().execute();
  }
};

export const placeSeed = async () => {
  for (const place of placeData.places) {
    await db.insert(places).values({ name: place.name }).onConflictDoNothing().execute();
  }
};

export const productCategorySeed = async () => {
  for (const productCategory of productCategoryData.productCategories) {
    await db.insert(productCategories).values(productCategory).onConflictDoNothing().execute();
  }
};

export const paymentSeed = async () => {
  for (const payment of paymentData.paymentMethods) {
    await db.insert(payments).values(payment).onConflictDoNothing().execute();
  }
};

export const supplierSeed = async () => {
  for (const supplier of supplierData.suppliers) {
    await db.insert(suppliers).values(supplier).onConflictDoNothing().execute();
  }
};

export const unitTypeSeed = async () => {
  for (const unitType of unitTypeData.unitTypes) {
    await db.insert(unitTypes).values(unitType).onConflictDoNothing().execute();
  }
};

main()
  .then(async () => {
    console.info("\n🏁 Seeding complete");
  })
  .catch((e) => {
    console.error(e);
    console.error("\n⛔ Seeding failed");
    process.exit(1);
  });
