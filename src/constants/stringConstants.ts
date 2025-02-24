const LOG_IN = {
  label: 'Login',
  signUp: 'Sign Up',
  forgotPass: 'Forgot Password ?',
  createAccount: "Don't have an account? ",
  message: 'Enter credentials to continue...',
};

const PROFILE = {
  welcomeMessage: 'Welcome to Just Buy UK',
  access:
    'Sign in to unlock exclusive offers and discover top-quality products tailored just for you!',
};

const SEARCH = {
  address: 'Enter the postcode for search...',
  search: 'Please Search here...',
};

const SIGN_UP = {
  label: 'Create an Account',
  message: 'Enter Create Account to continue...',
  haveAccount: 'Already have an account? ',
  signIn: 'Sign In',
};

const EMPTY: string = 'No data found';

const FORGOT_PASSWORD = {
  label: 'Forgot Password?',
  message: 'Enter Phone number to for reset password',
};

const EMAIL_CONFIRMATION = {
  label: 'Email Confirmation',
  message: 'Please enter confirmation code received in registration email.',
  resendMessage:
    "If you didn't receive confirmation code on registration email.",
  resend: ' Resend code',
};

const CHANGE_PASSWORD = {
  label: 'Change Password',
  message: 'Update your new password for access.',
};

const RESET_PASSWORD = {
  label: 'Reset Password',
  message: 'Please enter new Password to reset.',
};

const EDIT_PROFILE = {
  editProfile:
    "<P style='color: #306843; font-size:12.0pt; padding: 0px 10px 0px 0px; margin: 0px 0px 10px 0px;'><br> Note: For pricing request of individual store, please visit <a href='justbuyuk://availableStore'>Available Store</a> tab.<br><P>",
};

const PLACEHOLDER = {
  name: 'Enter name',
  loanAmount: 'Loan amount',
  password: 'Enter password',
  totalAmount: 'Total amount',
  phone: 'Enter Mobile number',
  email: 'Enter email address',
  sametiName: 'Enter sameti name',
  duration: 'Enter duration (year)',
  interestAmount: 'Interest amount',
  confirm: 'Enter confirm password',
  shareAmount: 'Enter share amount',
  loanPenalty: 'Enter loan penalty amount',
  currentPassword: 'Enter current password',
  sametiDate: 'Enter fixed date for sameti',
  penaltyType: 'Please select penalty type',
  sharePenalty: 'Enter share penalty amount',
  interestType: 'Please select interest type',
  shareType: 'Please select share amount type',
  interestPenalty: 'Enter interest penalty amount',
};

const REQUIRED = {
  name: 'Name is required',
  email: 'Email is required',
  password: 'Password is required',
  fixedDate:'Sameti Date is required',
  sametiName:'Sameti Name is required',
  mobileNo: 'Mobile number is required',
  shareType:'Sameti Share type is required',
  fixedDuration:'Sameti Duration is required',
  confirmPass: 'Confirm Password is required',
  loanPenalty: 'Sameti loan penalty is required',
  shareAmount: 'Sameti Share amount is required',
  interestType:'Sameti interest Type is required',
  interestRate:'Sameti interest rate is required',
  businessAddress: 'Business Address is required',
  sharePenalty: 'Sameti Share penalty is required',
  currentPassword: 'Current password is required.',
  loanPenaltyType: 'Please select loan penalty type',
  sharePenaltyType: 'Please select share penalty type',
  interestPenalty: 'Sameti interest penalty is required',
  interestPenaltyType: 'Please select interest penalty type',
  agreeTerms: 'Please agree to JustBuyUk Terms and Conditions.',
};

const WARNING = {};

const VALID = {
  email: 'Please enter valid email',
  phone: 'Phone Number is not valid.',
  password: 'Password format is not valid.',
  mobileNumber: 'Mobile number is not valid.',
  telephone: 'Telephone number is not valid.',
  confrimPassMatch: 'Confirm Password must match',
  passLimit: 'Password must be at least 8 characters.',
  specialChar:
    'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.',
};

const CREATE_SAMETI = {
  sametiDate:'Is your sameti have fixed date?',
  duration:'Is your sameti have fixed duration?',
  onlinePayment: 'Is your sameti allow online payments?',
  caseStructure: 'Do you want case structure in your sameti?',
  loanPenaty: 'Is your sameti allow late loan amount penaty?',
  sharePenaty: 'Is your sameti allow late share amount penaty?',
  interestPenaty: 'Is your sameti allow late interest amount penaty?',
};

export {
  VALID,
  EMPTY,
  LOG_IN,
  SEARCH,
  SIGN_UP,
  WARNING,
  PROFILE,
  REQUIRED,
  PLACEHOLDER,
  EDIT_PROFILE,
  CREATE_SAMETI,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  CHANGE_PASSWORD,
  EMAIL_CONFIRMATION,
};
