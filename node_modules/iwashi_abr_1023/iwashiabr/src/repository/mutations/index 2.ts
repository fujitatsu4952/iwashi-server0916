import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { GraphQLError } from 'graphql-request/dist/types';
import { Headers } from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSTimestamp: any;
  AWSTime: any;
  AWSEmail: any;
  AWSJSON: any;
  AWSURL: any;
  AWSPhone: any;
  AWSIPAddress: any;
};

export type DateStatusObject = {
  __typename?: 'DateStatusObject';
  date: Scalars['AWSDate'];
  isStayable: Scalars['Boolean'];
  price?: Maybe<PriceObject>;
};

export type DateStatusObjectInput = {
  date: Scalars['AWSDate'];
  isStayable: Scalars['Boolean'];
  price?: Maybe<PriceObjectInput>;
};

export type KeyValueObject = {
  __typename?: 'KeyValueObject';
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PriceObject = {
  __typename?: 'PriceObject';
  currencyType: CurrencyType;
  amount: Scalars['Int'];
};

export type PriceObjectInput = {
  currencyType: CurrencyType;
  amount: Scalars['Int'];
};

export enum CurrencyType {
  Jpy = 'jpy',
  Usd = 'usd'
}

export enum DayOfTheWeek {
  Sun = 'SUN',
  Mon = 'MON',
  Tue = 'TUE',
  Wed = 'WED',
  Thu = 'THU',
  Fri = 'FRI',
  Sat = 'SAT'
}

export enum TimeZone {
  AsiaTokyo = 'Asia__Tokyo',
  AmericaNewYork = 'America__New_York',
  EuropeLondon = 'Europe__London'
}

export type Query = {
  __typename?: 'Query';
  fetchPlanMasts: Array<PlanMast>;
  fetchPlanStatus: Array<PlanStatus>;
  fetchPolicyMast: Array<PolicyMast>;
  fetchReservationObjects: Array<ReservationObject>;
  fetchRoomMasts: Array<RoomMast>;
  fetchRoomStatus: Array<RoomStatus>;
  fetchS3Objects: Array<S3Object>;
};


export type QueryFetchPlanMastsArgs = {
  planID?: Maybe<Scalars['ID']>;
};


export type QueryFetchPlanStatusArgs = {
  Time?: Maybe<Scalars['String']>;
  planID?: Maybe<Scalars['ID']>;
};


export type QueryFetchPolicyMastArgs = {
  policyID?: Maybe<Scalars['ID']>;
};


export type QueryFetchReservationObjectsArgs = {
  reservationID?: Maybe<Scalars['ID']>;
};


export type QueryFetchRoomMastsArgs = {
  roomID?: Maybe<Scalars['ID']>;
};


export type QueryFetchRoomStatusArgs = {
  Time?: Maybe<Scalars['String']>;
  roomID?: Maybe<Scalars['ID']>;
};


export type QueryFetchS3ObjectsArgs = {
  keyName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPlanMast?: Maybe<PlanMast>;
  addPlanStatus?: Maybe<PlanStatus>;
  addPolicyMast?: Maybe<PolicyMast>;
  addReservationObject?: Maybe<ReservationObject>;
  addRoomMast?: Maybe<RoomMast>;
  addRoomStatus?: Maybe<RoomStatus>;
  addS3Object?: Maybe<S3Object>;
  updatePlanMast?: Maybe<PlanMast>;
  updatePlanStatus?: Maybe<PlanStatus>;
  updatePolicyMast?: Maybe<PolicyMast>;
  updateReservationObject?: Maybe<ReservationObject>;
  updateRoomMast?: Maybe<RoomMast>;
  updateRoomStatus?: Maybe<RoomStatus>;
  updateS3Object?: Maybe<S3Object>;
};


export type MutationAddPlanMastArgs = {
  input?: Maybe<PlanMastInput>;
};


export type MutationAddPlanStatusArgs = {
  input?: Maybe<Array<Maybe<PlanStatusInput>>>;
};


export type MutationAddPolicyMastArgs = {
  input?: Maybe<PolicyMastInput>;
};


export type MutationAddReservationObjectArgs = {
  input?: Maybe<ReservationObjectInput>;
};


export type MutationAddRoomMastArgs = {
  input?: Maybe<RoomMastInput>;
};


export type MutationAddRoomStatusArgs = {
  input?: Maybe<Array<Maybe<RoomStatusInput>>>;
};


export type MutationAddS3ObjectArgs = {
  input?: Maybe<S3ObjectInput>;
};


export type MutationUpdatePlanMastArgs = {
  input?: Maybe<PlanMastInput>;
};


export type MutationUpdatePlanStatusArgs = {
  input?: Maybe<Array<Maybe<PlanStatusInput>>>;
};


export type MutationUpdatePolicyMastArgs = {
  input?: Maybe<PolicyMastInput>;
};


export type MutationUpdateReservationObjectArgs = {
  input?: Maybe<ReservationObjectInput>;
};


export type MutationUpdateRoomMastArgs = {
  input?: Maybe<RoomMastInput>;
};


export type MutationUpdateRoomStatusArgs = {
  input?: Maybe<Array<Maybe<RoomStatusInput>>>;
};


export type MutationUpdateS3ObjectArgs = {
  input?: Maybe<S3ObjectInput>;
};

export type CancelPolicyMast = {
  __typename?: 'CancelPolicyMast';
  policyID: Scalars['ID'];
  beforeTime?: Maybe<Scalars['String']>;
  chargeRatio?: Maybe<Scalars['Int']>;
};

export type CancelPolicyMastInput = {
  policyID: Scalars['ID'];
  beforeTime?: Maybe<Scalars['String']>;
  chargeRatio?: Maybe<Scalars['Int']>;
};

export type ImageMast = {
  __typename?: 'ImageMast';
  imageID: Scalars['ID'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type ImageMastInput = {
  imageID: Scalars['ID'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type PlanImageMappingTemplate = {
  __typename?: 'PlanImageMappingTemplate';
  planID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type PlanImageMappingTemplateInput = {
  planID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type PlanMast = {
  __typename?: 'PlanMast';
  planID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription: Scalars['String'];
  price: Scalars['Int'];
  stockNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type PlanMastInput = {
  planID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  stockNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type PlanStatus = {
  __typename?: 'PlanStatus';
  planID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type PlanStatusInput = {
  planID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type PolicyMast = {
  __typename?: 'PolicyMast';
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['Int']>;
};

export type PolicyMastInput = {
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['Int']>;
};

export type ReservationObject = {
  __typename?: 'ReservationObject';
  reservationID: Scalars['ID'];
  checkInTime: Scalars['String'];
  checkOutTime: Scalars['String'];
  planID: Scalars['ID'];
  roomID: Scalars['ID'];
  roomNum?: Maybe<Scalars['Int']>;
  planNum?: Maybe<Scalars['Int']>;
  peopleNum: Scalars['Int'];
  policyID: Scalars['ID'];
  totalPrice?: Maybe<Scalars['Int']>;
  guestName?: Maybe<Scalars['String']>;
  guestEmail?: Maybe<Scalars['String']>;
  GuestTell?: Maybe<Scalars['String']>;
  canceledAt?: Maybe<Scalars['String']>;
};

export type ReservationObjectInput = {
  reservationID: Scalars['ID'];
  checkInTime: Scalars['String'];
  checkOutTime: Scalars['String'];
  planID: Scalars['ID'];
  roomID: Scalars['ID'];
  roomNum?: Maybe<Scalars['Int']>;
  planNum?: Maybe<Scalars['Int']>;
  peopleNum: Scalars['Int'];
  policyID: Scalars['ID'];
  totalPrice?: Maybe<Scalars['Int']>;
  guestName?: Maybe<Scalars['String']>;
  guestEmail?: Maybe<Scalars['String']>;
  GuestTell?: Maybe<Scalars['String']>;
  canceledAt?: Maybe<Scalars['String']>;
};

export type ReservationPlanInfo = {
  __typename?: 'ReservationPlanInfo';
  reservationID: Scalars['String'];
  planID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationPlanInfoInput = {
  reservationID: Scalars['String'];
  planID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationRoomInfo = {
  __typename?: 'ReservationRoomInfo';
  reservationID: Scalars['String'];
  roomID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationRoomInfoInput = {
  reservationID: Scalars['String'];
  roomID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type RoomImageMappingTemplate = {
  __typename?: 'RoomImageMappingTemplate';
  roomID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type RoomImageMappingTemplateInput = {
  roomID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type RoomMast = {
  __typename?: 'RoomMast';
  roomID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription: Scalars['String'];
  maxPeopleNum: Scalars['Int'];
  stockNum: Scalars['Int'];
  minOrderNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type RoomMastInput = {
  roomID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription: Scalars['String'];
  maxPeopleNum: Scalars['Int'];
  stockNum: Scalars['Int'];
  minOrderNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type RoomStatus = {
  __typename?: 'RoomStatus';
  roomID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type RoomStatusInput = {
  roomID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type S3Object = {
  __typename?: 'S3Object';
  bucket?: Maybe<Scalars['String']>;
  keyName: Scalars['String'];
  region: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type S3ObjectInput = {
  bucket?: Maybe<Scalars['String']>;
  keyName: Scalars['String'];
  region: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};










export type UpdatePlanMastMutationVariables = Exact<{
  planMast?: Maybe<PlanMastInput>;
}>;


export type UpdatePlanMastMutation = (
  { __typename?: 'Mutation' }
  & { updatePlanMast?: Maybe<(
    { __typename?: 'PlanMast' }
    & Pick<PlanMast, 'name'>
  )> }
);

export type AddPlanMastMutationVariables = Exact<{
  planMast?: Maybe<PlanMastInput>;
}>;


export type AddPlanMastMutation = (
  { __typename?: 'Mutation' }
  & { addPlanMast?: Maybe<(
    { __typename?: 'PlanMast' }
    & Pick<PlanMast, 'planID' | 'name' | 'description' | 'subDescription' | 'price' | 'stockNum' | 'deletedAt' | 'inSale'>
  )> }
);

export type FetchPlanMastsQueryVariables = Exact<{
  planID?: Maybe<Scalars['ID']>;
}>;


export type FetchPlanMastsQuery = (
  { __typename?: 'Query' }
  & { fetchPlanMasts: Array<(
    { __typename?: 'PlanMast' }
    & Pick<PlanMast, 'planID' | 'name' | 'description' | 'subDescription' | 'price' | 'stockNum' | 'deletedAt' | 'inSale'>
  )> }
);

export type UpdatePlanStatusMutationVariables = Exact<{
  planStatus?: Maybe<Array<PlanStatusInput>>;
}>;


export type UpdatePlanStatusMutation = (
  { __typename?: 'Mutation' }
  & { updatePlanStatus?: Maybe<(
    { __typename?: 'PlanStatus' }
    & Pick<PlanStatus, 'planID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>
  )> }
);

export type AddPlanStatusMutationVariables = Exact<{
  planStatus?: Maybe<Array<PlanStatusInput>>;
}>;


export type AddPlanStatusMutation = (
  { __typename?: 'Mutation' }
  & { addPlanStatus?: Maybe<(
    { __typename?: 'PlanStatus' }
    & Pick<PlanStatus, 'planID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>
  )> }
);

export type FetchPlanStatusQueryVariables = Exact<{
  Time: Scalars['String'];
  planID: Scalars['ID'];
}>;


export type FetchPlanStatusQuery = (
  { __typename?: 'Query' }
  & { fetchPlanStatus: Array<(
    { __typename?: 'PlanStatus' }
    & Pick<PlanStatus, 'planID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>
  )> }
);

export type UpdatePolicyMastMutationVariables = Exact<{
  policyMast?: Maybe<PolicyMastInput>;
}>;


export type UpdatePolicyMastMutation = (
  { __typename?: 'Mutation' }
  & { updatePolicyMast?: Maybe<(
    { __typename?: 'PolicyMast' }
    & Pick<PolicyMast, 'policyID'>
  )> }
);

export type AddPolicyMastMutationVariables = Exact<{
  policyMast?: Maybe<PolicyMastInput>;
}>;


export type AddPolicyMastMutation = (
  { __typename?: 'Mutation' }
  & { addPolicyMast?: Maybe<(
    { __typename?: 'PolicyMast' }
    & Pick<PolicyMast, 'policyID'>
  )> }
);

export type FetchPolicyMastQueryVariables = Exact<{
  policyID?: Maybe<Scalars['ID']>;
}>;


export type FetchPolicyMastQuery = (
  { __typename?: 'Query' }
  & { fetchPolicyMast: Array<(
    { __typename?: 'PolicyMast' }
    & Pick<PolicyMast, 'policyID' | 'roomChargePrice'>
  )> }
);

export type UpdateReservationObjectMutationVariables = Exact<{
  reservationObject?: Maybe<ReservationObjectInput>;
}>;


export type UpdateReservationObjectMutation = (
  { __typename?: 'Mutation' }
  & { updateReservationObject?: Maybe<(
    { __typename?: 'ReservationObject' }
    & Pick<ReservationObject, 'reservationID'>
  )> }
);

export type AddReservationObjectMutationVariables = Exact<{
  reservationObject?: Maybe<ReservationObjectInput>;
}>;


export type AddReservationObjectMutation = (
  { __typename?: 'Mutation' }
  & { addReservationObject?: Maybe<(
    { __typename?: 'ReservationObject' }
    & Pick<ReservationObject, 'reservationID'>
  )> }
);

export type FetchReservationObjectsQueryVariables = Exact<{
  reservationID?: Maybe<Scalars['ID']>;
}>;


export type FetchReservationObjectsQuery = (
  { __typename?: 'Query' }
  & { fetchReservationObjects: Array<(
    { __typename?: 'ReservationObject' }
    & Pick<ReservationObject, 'reservationID' | 'checkInTime' | 'checkOutTime' | 'planID' | 'roomID' | 'roomNum' | 'planNum' | 'peopleNum' | 'policyID' | 'totalPrice' | 'guestName' | 'guestEmail' | 'GuestTell' | 'canceledAt'>
  )> }
);

export type UpdateRoomMastMutationVariables = Exact<{
  roomMast?: Maybe<RoomMastInput>;
}>;


export type UpdateRoomMastMutation = (
  { __typename?: 'Mutation' }
  & { updateRoomMast?: Maybe<(
    { __typename?: 'RoomMast' }
    & Pick<RoomMast, 'name'>
  )> }
);

export type AddRoomMastMutationVariables = Exact<{
  roomMast?: Maybe<RoomMastInput>;
}>;


export type AddRoomMastMutation = (
  { __typename?: 'Mutation' }
  & { addRoomMast?: Maybe<(
    { __typename?: 'RoomMast' }
    & Pick<RoomMast, 'name'>
  )> }
);

export type FetchRoomMastsQueryVariables = Exact<{
  roomID?: Maybe<Scalars['ID']>;
}>;


export type FetchRoomMastsQuery = (
  { __typename?: 'Query' }
  & { fetchRoomMasts: Array<(
    { __typename?: 'RoomMast' }
    & Pick<RoomMast, 'roomID' | 'name' | 'description' | 'subDescription' | 'maxPeopleNum' | 'stockNum' | 'minOrderNum' | 'deletedAt' | 'inSale'>
  )> }
);

export type UpdateRoomStatusMutationVariables = Exact<{
  roomStatus?: Maybe<Array<RoomStatusInput>>;
}>;


export type UpdateRoomStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateRoomStatus?: Maybe<(
    { __typename?: 'RoomStatus' }
    & Pick<RoomStatus, 'roomID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>
  )> }
);

export type AddRoomStatusMutationVariables = Exact<{
  roomStatus?: Maybe<Array<RoomStatusInput>>;
}>;


export type AddRoomStatusMutation = (
  { __typename?: 'Mutation' }
  & { addRoomStatus?: Maybe<(
    { __typename?: 'RoomStatus' }
    & Pick<RoomStatus, 'roomID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>
  )> }
);

export type FetchRoomStatusQueryVariables = Exact<{
  Time: Scalars['String'];
  roomID: Scalars['ID'];
}>;


export type FetchRoomStatusQuery = (
  { __typename?: 'Query' }
  & { fetchRoomStatus: Array<(
    { __typename?: 'RoomStatus' }
    & Pick<RoomStatus, 'roomID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>
  )> }
);

export type UpdateS3ObjectMutationVariables = Exact<{
  s3Object?: Maybe<S3ObjectInput>;
}>;


export type UpdateS3ObjectMutation = (
  { __typename?: 'Mutation' }
  & { updateS3Object?: Maybe<(
    { __typename?: 'S3Object' }
    & Pick<S3Object, 'bucket'>
  )> }
);

export type AddS3ObjectMutationVariables = Exact<{
  s3Object?: Maybe<S3ObjectInput>;
}>;


export type AddS3ObjectMutation = (
  { __typename?: 'Mutation' }
  & { addS3Object?: Maybe<(
    { __typename?: 'S3Object' }
    & Pick<S3Object, 'bucket' | 'keyName' | 'region' | 'mimeType' | 'fileName'>
  )> }
);

export type FetchS3ObjectsQueryVariables = Exact<{
  keyName?: Maybe<Scalars['String']>;
}>;


export type FetchS3ObjectsQuery = (
  { __typename?: 'Query' }
  & { fetchS3Objects: Array<(
    { __typename?: 'S3Object' }
    & Pick<S3Object, 'bucket' | 'keyName' | 'region' | 'mimeType' | 'fileName'>
  )> }
);


export const UpdatePlanMastDocument = gql`
    mutation updatePlanMast($planMast: PlanMastInput) {
  updatePlanMast(input: $planMast) {
    name
  }
}
    `;
export const AddPlanMastDocument = gql`
    mutation addPlanMast($planMast: PlanMastInput) {
  addPlanMast(input: $planMast) {
    planID
    name
    description
    subDescription
    price
    stockNum
    deletedAt
    inSale
  }
}
    `;
export const FetchPlanMastsDocument = gql`
    query fetchPlanMasts($planID: ID) {
  fetchPlanMasts(planID: $planID) {
    planID
    name
    description
    subDescription
    price
    stockNum
    deletedAt
    inSale
  }
}
    `;
export const UpdatePlanStatusDocument = gql`
    mutation updatePlanStatus($planStatus: [PlanStatusInput!]) {
  updatePlanStatus(input: $planStatus) {
    planID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
export const AddPlanStatusDocument = gql`
    mutation addPlanStatus($planStatus: [PlanStatusInput!]) {
  addPlanStatus(input: $planStatus) {
    planID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
export const FetchPlanStatusDocument = gql`
    query fetchPlanStatus($Time: String!, $planID: ID!) {
  fetchPlanStatus(Time: $Time, planID: $planID) {
    planID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
export const UpdatePolicyMastDocument = gql`
    mutation updatePolicyMast($policyMast: PolicyMastInput) {
  updatePolicyMast(input: $policyMast) {
    policyID
  }
}
    `;
export const AddPolicyMastDocument = gql`
    mutation addPolicyMast($policyMast: PolicyMastInput) {
  addPolicyMast(input: $policyMast) {
    policyID
  }
}
    `;
export const FetchPolicyMastDocument = gql`
    query fetchPolicyMast($policyID: ID) {
  fetchPolicyMast(policyID: $policyID) {
    policyID
    roomChargePrice
  }
}
    `;
export const UpdateReservationObjectDocument = gql`
    mutation updateReservationObject($reservationObject: ReservationObjectInput) {
  updateReservationObject(input: $reservationObject) {
    reservationID
  }
}
    `;
export const AddReservationObjectDocument = gql`
    mutation addReservationObject($reservationObject: ReservationObjectInput) {
  addReservationObject(input: $reservationObject) {
    reservationID
  }
}
    `;
export const FetchReservationObjectsDocument = gql`
    query fetchReservationObjects($reservationID: ID) {
  fetchReservationObjects(reservationID: $reservationID) {
    reservationID
    checkInTime
    checkOutTime
    planID
    roomID
    roomNum
    planNum
    peopleNum
    policyID
    totalPrice
    guestName
    guestEmail
    GuestTell
    canceledAt
  }
}
    `;
export const UpdateRoomMastDocument = gql`
    mutation updateRoomMast($roomMast: RoomMastInput) {
  updateRoomMast(input: $roomMast) {
    name
  }
}
    `;
export const AddRoomMastDocument = gql`
    mutation addRoomMast($roomMast: RoomMastInput) {
  addRoomMast(input: $roomMast) {
    name
  }
}
    `;
export const FetchRoomMastsDocument = gql`
    query fetchRoomMasts($roomID: ID) {
  fetchRoomMasts(roomID: $roomID) {
    roomID
    name
    description
    subDescription
    maxPeopleNum
    stockNum
    minOrderNum
    deletedAt
    inSale
  }
}
    `;
export const UpdateRoomStatusDocument = gql`
    mutation updateRoomStatus($roomStatus: [RoomStatusInput!]) {
  updateRoomStatus(input: $roomStatus) {
    roomID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
export const AddRoomStatusDocument = gql`
    mutation addRoomStatus($roomStatus: [RoomStatusInput!]) {
  addRoomStatus(input: $roomStatus) {
    roomID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
export const FetchRoomStatusDocument = gql`
    query fetchRoomStatus($Time: String!, $roomID: ID!) {
  fetchRoomStatus(Time: $Time, roomID: $roomID) {
    roomID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
export const UpdateS3ObjectDocument = gql`
    mutation updateS3Object($s3Object: S3ObjectInput) {
  updateS3Object(input: $s3Object) {
    bucket
  }
}
    `;
export const AddS3ObjectDocument = gql`
    mutation addS3Object($s3Object: S3ObjectInput) {
  addS3Object(input: $s3Object) {
    bucket
    keyName
    region
    mimeType
    fileName
  }
}
    `;
export const FetchS3ObjectsDocument = gql`
    query fetchS3Objects($keyName: String) {
  fetchS3Objects(keyName: $keyName) {
    bucket
    keyName
    region
    mimeType
    fileName
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    updatePlanMast(variables?: UpdatePlanMastMutationVariables): Promise<{ data?: UpdatePlanMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<UpdatePlanMastMutation>(print(UpdatePlanMastDocument), variables));
    },
    addPlanMast(variables?: AddPlanMastMutationVariables): Promise<{ data?: AddPlanMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<AddPlanMastMutation>(print(AddPlanMastDocument), variables));
    },
    fetchPlanMasts(variables?: FetchPlanMastsQueryVariables): Promise<{ data?: FetchPlanMastsQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<FetchPlanMastsQuery>(print(FetchPlanMastsDocument), variables));
    },
    updatePlanStatus(variables?: UpdatePlanStatusMutationVariables): Promise<{ data?: UpdatePlanStatusMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<UpdatePlanStatusMutation>(print(UpdatePlanStatusDocument), variables));
    },
    addPlanStatus(variables?: AddPlanStatusMutationVariables): Promise<{ data?: AddPlanStatusMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<AddPlanStatusMutation>(print(AddPlanStatusDocument), variables));
    },
    fetchPlanStatus(variables: FetchPlanStatusQueryVariables): Promise<{ data?: FetchPlanStatusQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<FetchPlanStatusQuery>(print(FetchPlanStatusDocument), variables));
    },
    updatePolicyMast(variables?: UpdatePolicyMastMutationVariables): Promise<{ data?: UpdatePolicyMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<UpdatePolicyMastMutation>(print(UpdatePolicyMastDocument), variables));
    },
    addPolicyMast(variables?: AddPolicyMastMutationVariables): Promise<{ data?: AddPolicyMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<AddPolicyMastMutation>(print(AddPolicyMastDocument), variables));
    },
    fetchPolicyMast(variables?: FetchPolicyMastQueryVariables): Promise<{ data?: FetchPolicyMastQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<FetchPolicyMastQuery>(print(FetchPolicyMastDocument), variables));
    },
    updateReservationObject(variables?: UpdateReservationObjectMutationVariables): Promise<{ data?: UpdateReservationObjectMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<UpdateReservationObjectMutation>(print(UpdateReservationObjectDocument), variables));
    },
    addReservationObject(variables?: AddReservationObjectMutationVariables): Promise<{ data?: AddReservationObjectMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<AddReservationObjectMutation>(print(AddReservationObjectDocument), variables));
    },
    fetchReservationObjects(variables?: FetchReservationObjectsQueryVariables): Promise<{ data?: FetchReservationObjectsQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<FetchReservationObjectsQuery>(print(FetchReservationObjectsDocument), variables));
    },
    updateRoomMast(variables?: UpdateRoomMastMutationVariables): Promise<{ data?: UpdateRoomMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<UpdateRoomMastMutation>(print(UpdateRoomMastDocument), variables));
    },
    addRoomMast(variables?: AddRoomMastMutationVariables): Promise<{ data?: AddRoomMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<AddRoomMastMutation>(print(AddRoomMastDocument), variables));
    },
    fetchRoomMasts(variables?: FetchRoomMastsQueryVariables): Promise<{ data?: FetchRoomMastsQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<FetchRoomMastsQuery>(print(FetchRoomMastsDocument), variables));
    },
    updateRoomStatus(variables?: UpdateRoomStatusMutationVariables): Promise<{ data?: UpdateRoomStatusMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<UpdateRoomStatusMutation>(print(UpdateRoomStatusDocument), variables));
    },
    addRoomStatus(variables?: AddRoomStatusMutationVariables): Promise<{ data?: AddRoomStatusMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<AddRoomStatusMutation>(print(AddRoomStatusDocument), variables));
    },
    fetchRoomStatus(variables: FetchRoomStatusQueryVariables): Promise<{ data?: FetchRoomStatusQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<FetchRoomStatusQuery>(print(FetchRoomStatusDocument), variables));
    },
    updateS3Object(variables?: UpdateS3ObjectMutationVariables): Promise<{ data?: UpdateS3ObjectMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<UpdateS3ObjectMutation>(print(UpdateS3ObjectDocument), variables));
    },
    addS3Object(variables?: AddS3ObjectMutationVariables): Promise<{ data?: AddS3ObjectMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<AddS3ObjectMutation>(print(AddS3ObjectDocument), variables));
    },
    fetchS3Objects(variables?: FetchS3ObjectsQueryVariables): Promise<{ data?: FetchS3ObjectsQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<FetchS3ObjectsQuery>(print(FetchS3ObjectsDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;