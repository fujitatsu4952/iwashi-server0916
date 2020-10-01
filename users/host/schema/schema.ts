// データ型を指定
const { buildSchema } = require('graphql');
import { Scalars } from '../../../entity/type';
// import temp from '../../../schema/repository/CancelPolicyMast.graphql';
// console.log(temp);
// フィールド名: 返却データ型
const schema = buildSchema(`
type Query {
  fetchPlanMasts(planID: ID): [PlanMast!]!
  fetchPolicyMast(policyID: ID): [PolicyMast!]!
  fetchRoomMasts(roomID: ID): [RoomMast!]!
}

type Mutation {
  addPlanMast(input: PlanMastInput): PlanMast
  addPolicyMast(input: PolicyMastInput): PolicyMast
  addRoomMast(input: RoomMastInput): RoomMast
  updatePlanMast(input: PlanMastInput): PlanMast
  updatePolicyMast(input: PolicyMastInput): PolicyMast
  updateRoomMast(input: RoomMastInput): RoomMast
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
  reservationID: String!
  checkInTime: String!
  checkOutTime: String!
  roomNum: Int!
  planNum: Int!
  peopleNum: Int!
  totalPrice: Int!
  guestName: String!
  guestEmail: String!
  GuestTell: String!
  canceledAt: String
  policyID: String!
}

input ReservationObjectInput {
  reservationID: String!
  checkInTime: String!
  checkOutTime: String!
  roomNum: Int!
  planNum: Int!
  peopleNum: Int!
  totalPrice: Int!
  guestName: String!
  guestEmail: String!
  GuestTell: String!
  canceledAt: String
  policyID: String!
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

     `);
export default schema;
