export interface UserData_Interface {
  userId: number
  deptId: number
  firstName: string
  middleName: string
  lastName: string
  email: string
  phoneNumber: string
  roleId: number
  createdByUserId: number
  dateCreated: string
  isModified: boolean
  lastModifiedByUserId: number
  dateModified: string
  isLogin: boolean
  isActive: boolean
  lastLoginDate: string
  lastLoginAttemptAt: string
  loginFailedAttemptsCount: number
  loggedInWithIPAddress: string
  isApproved: boolean
  approvedByUserId: number
  dateApproved: string
  isDisapproved: boolean
  disapprovedComment: string|null
  disapprovedByUserId: number|null
  dateDisapproved: string|null
  isDeactivated: boolean
  deactivatedComment: string|null
  deactivatedByUserId: number|null
  dateDeactivated: string|null
  isResubmited: boolean
  resubmitedComment: string|null
  resubmitedByUserId: number|null
  dateReSubmited: string|null
  roleName: string
  userStatus: string|null
  userStatusId: number
  isLockedOut: boolean
}

export interface User_Interface {
  '#####': string
  '####': string
}

export interface Login_Interface {
  email: string
  password: string
}

export interface Logout_Interface {
  email: string | undefined
}

export interface ChangePassword_Interface {
  email: string|undefined
  oldPassword: string
  newPassword: string
}

export interface ChangePasswordModel_Interface {
  oldPassword: string
  newPassword: string
  reenteredPassword: string
}

export interface ContactUs_Interface {
  fullName: string
  email: string
  phone: string
  message: string
}
