export interface BitmaskUserService {
  /**
   * This method should return the permissions value of the user.
   *
   * The permissions value is a number that represents the user's permissions.
   * @param userId
   */
  getUserPermissionsValue(userId: any): Promise<number>;
}
