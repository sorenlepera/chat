export interface User {
  _id: {
    type: string;
    required: true;
  };
  email: {
    type: string;
    required: true;
    unique: true;
  };
  fullName: {
    type: string;
    required: true;
  };
  password: {
    type: string;
    required: true;
    minLength: 6;
  };
  profilePic: {
    type: string;
    default: "";
  };
}
