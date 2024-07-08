export interface ContactUs_Interface {
  name: string
  email: string
  phoneNumber: string
  contactPreference: string
  message: string
}

export interface RequestFreeAssessment_Interface {
  name: string
  email: string
  phoneNumber: string
  consultationDate: string
  // preferredServices: [{
  //   option1: string
  //   option2: string
  //   option3: string
  //   option4: string
  //   option5: string
  // }]
  preferredServices: string[]
  message: string
}

