declare module 'mysql';
declare module '*.graphql' {
    import { DocumentNode } from 'graphql';
    const Schema: DocumentNode;

    export = Schema;
}
