export interface iUserPermissions {
  general: {
    canDeleteUsers: boolean;
    canEditUsers: boolean;
  };
  self: {
    canDeleteOwnAccount: boolean;
    canEditOwnAccount: boolean;
  };
}