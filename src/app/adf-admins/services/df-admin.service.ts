import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from 'src/app/core/constants/urls';
import { UserProfile, CreateAdmin } from 'src/app/shared/types/user';
import { DfBaseUserService } from 'src/app/shared/services/user-base.service';

@Injectable()
export class DfAdminService extends DfBaseUserService<
  UserProfile,
  CreateAdmin
> {
  url = URLS.SYSTEM_ADMIN;
  related = 'user_to_app_to_role_by_user_id,lookup_by_user_id';
  messagePrefix = 'admins';
  constructor(http: HttpClient) {
    super(http);
  }
}
