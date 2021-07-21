const { CosmosClient } = require("@azure/cosmos");
const endpoint = "https://koduchi.documents.azure.com:443";
const key = "lEDgiqRK65XGH2LkJkivOmYHetozk6tWMHqAoineLTXNeiqYHIjHdwHdnFUm1KmkGFZD7I7uCbBSpMt6yLRzpQ==;";
const client = new CosmosClient({ endpoint, key });
const container = client.database("kotaro").container("messages");

module.exports = async function (context, req) {
    const data = await container.items
    .query("select s.keiDate, c.tokName, p.code, p.name, sum(d.amount) from s join s.customer c join d in s.details join d.product p group by s.keiDate, c.tokName, p.code, p.name")
    .fetchAll()

    context.res = {
        body: data
    };
}