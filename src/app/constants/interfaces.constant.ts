export interface IPaymentData {
  amountPaid: string
  amountLeftToPay: string
  totalPrice: string
  percentage: string
  nextPaymentDate: string
  nextPaymentAmount: string
  currentBalance: string
  upcomingPayments: string
  updatedToDate: boolean | null
}

export type nextPaymentsListType = {
  date: string
  monthlyInterest: number
  paymentCode: number
  priceWithVat: string
  purposeOfPayment: boolean | null
  paymentNumber: boolean | null
  status: number
}

export type nextPaymentsType = {
  date: string
  monthlyInterest: number
  paymentCode: number
  priceWithVat: string
  purposeOfPayment: boolean | null
  paymentNumber: boolean | null
  status: number
}
export interface INextListData {
  paymentsList: nextPaymentsListType[]
  nextPayment: nextPaymentsType[]
  totalPayment: number
}

export type guaranteesListType = {
  id: string
  amount: string
  numberOfGuarantee: string
  startDate: string
}
export interface IGuaranteesData {
  guaranteesList: guaranteesListType[]
}

export type balanceListType = {
  fund: string
  linkage: string
  interest: string
  vat: string
  debtFor: string
  totalPayment: string
}
export interface IBalanceData {
  balanceList: balanceListType[]
}

export type amountPaidListType = {
  receptionNumber: string
  date: string
  fund: string
  linkage: string
  interest: string
  vat: string
  totalPayment: string
  paidFor: string
}
export interface IAmountPaidData {
  amountPaidList: amountPaidListType[]
}
export interface IQuestionData {
  sugCode: number
  sugDescription: string
  subCode: number | null | ''
  subDescription: string
  empCode: number
  employeeEmail: string
  value: string
}
export interface IAllQuestionsData {
  services: servicesType[]
}
export type servicesType = {
  callID: number
  subject: string | null
  descrption: string
  createDate: string
  statusID: number
  ActivityCalls: ActivityCallsType[]
}
export type ActivityCallsType = {
  Notes: string
  Details: string
  statusID: null | any
  CntctDate: string
  owner: number
}

export type ParkingPlace = {
  propertyName: any
  name: string
  floor: string
}
export type ApartmentType = {
  address: string
  building: string
}
export type storeRoomType = {
  propertyName: string
  floor: string
}

export interface IContractData {
  purchaseOverview: {
    signDate: string
    estimatedDate: string
    priceWithTax: string
    lotNumber: string
  }
  parking: ParkingPlace[]
  apartment: ApartmentType
  storeRoom: storeRoomType
}

export type ChosenMaterialsType = {
  name: string
  subjectName: string
  supplierName: string
  subjectId: number
  lastDateToChoose: string
  type: string
  chosen_date: string
  invite_date: string
  room: string
  model: string
  note: string
}
export type NotChosenMaterialsType = {
  name: string
  subjectName: string
  supplierName: string
  subjectId: number
  lastDateToChoose: string
  type: string
  chosen_date: string
  invite_date: string
  room: string
  model: string
  note: string
}

export type PogressStatusType = {
  status: {
    basement: number
    form4: any
    permit: any
    structure: number
    finishing: number
  }
  // basement: number
  // form4: any
  // permit: any
  // structure: number
  // finishing: number
}
export type StatusType = {
  basement: number
  form4: any
  permit: any
  structure: number
  finishing: number
}
export interface IFinishingMaterialsData {
  pogressStatus: PogressStatusType
  status: StatusType
}

export interface IFinishingMaterialsData {
  ChosenMaterials: ChosenMaterialsType[]
  notChosenMaterials: NotChosenMaterialsType[]
}
export interface IToolTipData {
  key: string
  value: string
}
export interface IFilesData {
  name: string
  url: string
  created: string
  uploadToApp: boolean
}
export type suppliersListType = {
  supplierName: string
  supllierId: string
  specialization: string[]
  siteUrl: string
  address: string
  city: string
  Street: string
  Latitude: string
  Longtitude: string
  phone: string
  wazeLink: string
}
export interface IFetchsuppliersData {
  suppliersList: suppliersListType[]
}
