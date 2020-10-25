// データ型を指定
const { buildSchema } = require('graphql');
import { Scalars } from 'iwashi_abr_1023/iwashiabr';
// import temp from '../../../schema/repository/CancelPolicyMast.graphql';
// console.log(temp);
// フィールド名: 返却データ型
const schema = buildSchema(`
type Query {
  fetchPlanMasts(planID: ID): [PlanMast!]!
  fetchPolicyMast(policyID: ID): [PolicyMast!]!
  fetchReservationObjects(reservationID: ID): [ReservationObject!]!
  fetchRoomMasts(roomID: ID): [RoomMast!]!
  fetchS3Objects(keyName: String): [S3Object!]!
}

type Mutation {
  addPlanMast(input: PlanMastInput): PlanMast
  addPolicyMast(input: PolicyMastInput): PolicyMast
  addReservationObject(input: ReservationObjectInput): ReservationObject
  addRoomMast(input: RoomMastInput): RoomMast
  addS3Object(input: S3ObjectInput): S3Object
  updatePlanMast(input: PlanMastInput): PlanMast
  updatePolicyMast(input: PolicyMastInput): PolicyMast
  updateReservationObject(input: ReservationObjectInput): ReservationObject
  updateRoomMast(input: RoomMastInput): RoomMast
  updateS3Object(input: S3ObjectInput): S3Object
}

type CancelPolicyMast {
  policyID: ID!
  beforeTime: String
  chargeRatio: Int
}

input CancelPolicyMastInput {
  policyID: ID!
  beforeTime: String
  chargeRatio: Int
}

type ImageMast {
  imageID: ID!
  bucket: String!
  key: String!
  mimeType: String
  fileName: String
}

input ImageMastInput {
  imageID: ID!
  bucket: String!
  key: String!
  mimeType: String
  fileName: String
}

type PlanImageMappingTemplate {
  planID: String!
  imageID: String
}

input PlanImageMappingTemplateInput {
  planID: String!
  imageID: String
}

type PlanMast {
  planID: ID!
  name: String!
  description: String!
  subDescription: String!
  price: Int!
  stockNum: Int!
  deletedAt: String
  inSale: Boolean
}

input PlanMastInput {
  planID: ID!
  name: String!
  description: String!
  subDescription: String
  price: Int!
  stockNum: Int!
  deletedAt: String
  inSale: Boolean
}

type PlanStatus {
  planID: ID!
  Time: String!
  soldNum: Int
  availableNum: Int
  isAvailabe: Boolean
}

input PlanStatusInput {
  planID: ID!
  Time: String!
  soldNum: Int
  availableNum: Int
  isAvailabe: Boolean
}

type PolicyMast {
  policyID: ID!
  roomChargePrice: Int
}

input PolicyMastInput {
  policyID: ID!
  roomChargePrice: Int
}

type ReservationObject {
  reservationID: ID!
  checkInTime: String!
  checkOutTime: String!
  planID: ID!
  roomID: ID!
  roomNum: Int
  planNum: Int
  peopleNum: Int!
  policyID: ID!
  totalPrice: Int
  guestName: String
  guestEmail: String
  GuestTell: String
  canceledAt: String
}

input ReservationObjectInput {
  reservationID: ID!
  checkInTime: String!
  checkOutTime: String!
  planID: ID!
  roomID: ID!
  roomNum: Int
  planNum: Int
  peopleNum: Int!
  policyID: ID!
  totalPrice: Int
  guestName: String
  guestEmail: String
  GuestTell: String
  canceledAt: String
}

type ReservationPlanInfo {
  reservationID: String!
  planID: String!
  name: String!
  amount: String!
  price: String!
}

input ReservationPlanInfoInput {
  reservationID: String!
  planID: String!
  name: String!
  amount: String!
  price: String!
}

type ReservationRoomInfo {
  reservationID: String!
  roomID: String!
  name: String!
  amount: String!
  price: String!
}

input ReservationRoomInfoInput {
  reservationID: String!
  roomID: String!
  name: String!
  amount: String!
  price: String!
}

type RoomImageMappingTemplate {
  roomID: String!
  imageID: String
}

input RoomImageMappingTemplateInput {
  roomID: String!
  imageID: String
}

type RoomMast {
  roomID: ID!
  name: String!
  description: String!
  subDescription: String!
  maxPeopleNum: Int!
  stockNum: Int!
  minOrderNum: Int!
  deletedAt: String
  inSale: Boolean
}

input RoomMastInput {
  roomID: ID!
  name: String!
  description: String!
  subDescription: String!
  maxPeopleNum: Int!
  stockNum: Int!
  minOrderNum: Int!
  deletedAt: String
  inSale: Boolean
}

type RoomStatus {
  roomID: ID!
  Time: String!
  soldNum: Int
  availableNum: Int
  isAvailabe: Boolean
}

input RoomStatusInput {
  roomID: ID!
  Time: String!
  soldNum: Int
  availableNum: Int
  isAvailabe: Boolean
}

type S3Object {
  bucket: String
  keyName: String!
  region: String!
  mimeType: String
  fileName: String
}

input S3ObjectInput {
  bucket: String
  keyName: String!
  region: String!
  mimeType: String
  fileName: String
}

scalar AWSDate

scalar AWSDateTime

scalar AWSTimestamp

scalar AWSTime

scalar AWSEmail

scalar AWSJSON

scalar AWSURL

scalar AWSPhone

scalar AWSIPAddress

     `);
export default schema;
