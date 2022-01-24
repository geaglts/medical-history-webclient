export type CheckupType = {
  anotation: string;
  bloodPressure: string;
  createdAt: string;
  date: string;
  heartRate: string;
  month: string;
  patient: string;
  time: string;
  updatedAt: string;
};

export type PatientType = {
  _id: string;
  name: string;
  lastName: string;
  secondLastName: string;
  age: string;
  alias: string;
  phoneNumber: string;
  fullName: string;
  checkups: CheckupType[];
};
