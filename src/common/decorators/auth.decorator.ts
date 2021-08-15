import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { ROLE } from '../constants';
import { RolesGuard } from '../guards/roles.guard';

export function Authorize(roles?: ROLE[]): (...args) => void {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(GqlAuthGuard, RolesGuard),
  );
}
