import { S3Object } from "../index";
export declare class imageMastRepository {
    updateS3Object(s3Object: S3Object | null): Promise<void>;
    addS3Object(s3Object: S3Object | null): Promise<void>;
    fetchS3Objects(keyName: string | null | undefined): Promise<{
        data?: import("./mutations").FetchS3ObjectsQuery | undefined;
        extensions?: any;
        headers: import("graphql-request/dist/types.dom").Headers;
        status: number;
        errors?: import("graphql-request/dist/types").GraphQLError[] | undefined;
    }>;
}
