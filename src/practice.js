require('dotenv').config()
const knex = require('knex');


const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

// const knexInstance = knex({ client: 'pg', connection: 'postgresql://dunder_mifflin@localhost/knex-practice', })

knexInstance
  .select('product_id', 'name', 'price', 'category')
  .from('amazong_products')
  .where({ name: 'Point of view gun' })
  .then(result => {
    console.log(result)
  })

console.log('knex and driver installed correctly');

knexInstance.from('amazong_products').select('*')
    .then(result => {
        console.log(result)
    })

    function searchByProduceName(searchTerm) {
        knexInstance
          .select('product_id', 'name', 'price', 'category')
          .from('amazong_products')
          .where('name', 'ILIKE', `%${searchTerm}%`)
          .then(result => {
            console.log(result)
          })
      }
      
      searchByProduceName('holo')