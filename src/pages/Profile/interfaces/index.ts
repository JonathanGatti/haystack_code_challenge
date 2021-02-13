
export interface Preferences {
  __typename: string;
  remoteInterest: string | null;
  sectors: string | null;
}

export interface Tech {
  __typename?: string;
  uid: string;
  weight: number;
}

export interface Location {
  __typename: string;
  name: string;
}

export interface Data {
  viewer: ViewerInterface;
}

export interface ViewerInterface {
  __typename: String;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  companyId: string | null;
  linkedin: string | null;
  github: string | null;
  location: Location;
  active: boolean | null;
  created: string;
  biography: string | null;
  linkedInProfileURL: string | null;
  currentCompany: string;
  techs: Tech[];
  preferences: Preferences;
}

export interface Icon {
  name: string,
  iconUrl: string;
}
