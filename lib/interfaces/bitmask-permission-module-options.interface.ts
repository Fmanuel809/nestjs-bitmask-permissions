import { Permissions } from 'bitmask-permissions';
import { BitmaskUserService } from './bitmask-user-service.interface';

/**
 * Options to be provided to the BitmaskPermissionModule.
 *
 * @export
 * @interface BitmaskPermissionModuleOptions
 */
export interface BitmaskPermissionModuleOptions {
  /**
   * List of permissions to be registered in the module, if not provided, the module will register default permissions.
   * @type {Permissions[]}
   * @memberof BitmaskPermissionModuleOptions
   */
  permissions?: Permissions[];

  /**
   * If true, the module will register the permissions globally.
   * @type {boolean}
   * @memberof BitmaskPermissionModuleOptions
   * @default false
   */
  isGlobal?: boolean;

  /**
   * This option is used to enable the possibility to use a user service to get the user's permissions.
   * If this option is set to true, the user service must be provided.
   * @type {boolean}
   * @memberof BitmaskPermissionModuleOptions
   * @default false
   */
  useUserService?: boolean;

  /**
   * The user service to be used to get the user's permissions.
   * This option is required if the useUserService option is set to true, otherwise it will be ignored.
   *
   * This service must implement the BitmaskUserService interface.
   *
   * @type {BitmaskUserService}
   * @memberof BitmaskPermissionModuleOptions
   */
  userService?: BitmaskUserService;
}
