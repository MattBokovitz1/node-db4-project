exports.seed = function (knex) {
  return knex("recipes")
    .truncate()
    .then(function () {
      return knex("recipes").insert([
        { recipe_name: "Pasta" },
        { recipe_name: "Pizza" },
        { recipe_name: "Chicken Parmesan" },
      ]);
    });
};
