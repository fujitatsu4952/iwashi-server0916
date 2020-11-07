import rootFunc from './users/host/interactor/index';
import schema from './users/host/schema/schema';
import app from './app';

const { graphqlHTTP } = require('express-graphql');

// optionの詳細は https://github.com/graphql/express-graphql
app.use(
    '/',
    graphqlHTTP({
        schema: schema,
        rootValue: rootFunc,
        graphiql: true, // ブラウザにGraphiQLを表示したい場合true。falseならjsonが返される
    }),
);

app.listen(8081, () => {
    console.log('Now browse to localhost:8080/graphql');
});
