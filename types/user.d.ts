type UserType = {
  _id: { $oid: string };
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  photo: string;
  isBlocked: boolean;
  oldPassword: string;
  confirmPassword: string;
  isVerified: boolean;
  isOnline: boolean;
  permission: string[];
  role: Role;
  gender: Gender;
  fcmToken: FCMToken;
  updatedAt: Date;
  createdAt: Date;
  image: string;
  subject: string;
  timing: string;
  style: string;
  lastLogin:
    | {
        $date: string;
      }
    | string;
};

type Role = "Admin" | "Creator" | "Reviewer" | "TeamLead";
type Gender = "Male" | "Female";
type FCMToken = {
  web: String;
  android: String;
  ios: String;
};
