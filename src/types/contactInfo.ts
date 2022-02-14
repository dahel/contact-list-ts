export interface IContactInfo {
  id: string;
  jobTitle: string;
  emailAddress: string;
  firstNameLastName: string;
}

export interface IContactStateItem extends IContactInfo {
  selected: boolean;
}
