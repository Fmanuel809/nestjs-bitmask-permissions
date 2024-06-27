import { Module } from '@nestjs/common';
import { BitmaskPermissionService } from './bitmask-permission.service';
import { BitmaskPermissionModuleOptions } from './interfaces';
import {
  BITMASK_PERMISSION_MODULE_OPTIONS,
  BITMASK_PERMISSIONS_TOKEN,
  BITMASK_USER_SERVICE,
} from './bitmask-permission.constants';
import { BitmaskPermission } from 'bitmask-permissions';

@Module({
  imports: [],
  providers: [BitmaskPermissionService],
  exports: [BitmaskPermissionService],
})
export class BitmaskPermissionModule {
  static register(options: BitmaskPermissionModuleOptions) {
    const _providers = [];
    if (options.useUserService) {
      if (!options.userService) {
        throw new Error(
          'If the useUserService option is set to true, the userService option must be provided.',
        );
      }

      if (!options.userService.getUserPermissionsValue) {
        throw new Error(
          'The provided userService does not implement the BitmaskUserService interface.',
        );
      }

      _providers.push({
        provide: BITMASK_USER_SERVICE,
        useValue: options.userService,
      });
    }

    return {
      isGlobal: options.isGlobal || false,
      module: BitmaskPermissionModule,
      providers: [
        {
          provide: BITMASK_PERMISSION_MODULE_OPTIONS,
          useValue: options,
        },
        {
          provide: BITMASK_PERMISSIONS_TOKEN,
          useValue: options.permissions
            ? new BitmaskPermission(options.permissions)
            : new BitmaskPermission(),
        },
        ..._providers,
      ],
    };
  }
}
