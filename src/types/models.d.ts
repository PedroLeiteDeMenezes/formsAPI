export interface Models {
  User: typeof import('../models/user').default;
  Lab: typeof import('../models/lab').default;
  Study: typeof import('../models/study').default
}
