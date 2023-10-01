import { LimitType } from 'src/app/shared/types/limit';
import { LimitTableRowData } from '../../types/types';

export const mockLimitTypes: LimitType[] = [
  {
    id: 22,
    type: 'instance.user',
    keyText: 'instance.user:3.minute',
    rate: 22,
    period: 'minute',
    userId: 3,
    roleId: null,
    serviceId: null,
    name: 'deee',
    description: 'desc',
    isActive: false,
    createdDate: '2023-08-24T20:27:45.000000Z',
    lastModifiedDate: '2023-08-24T20:27:45.000000Z',
    endpoint: null,
    verb: null,
    limitCacheByLimitId: [
      {
        id: 22,
        key: 'instance.user:3.minute',
        max: 22,
        attempts: 0,
        remaining: 22,
      },
    ],
    roleByRoleId: null,
    serviceByServiceId: null,
    userByUserId: null,
  },
  {
    id: 21,
    type: 'instance',
    keyText: 'instance.verb:DELETE.day',
    rate: 10000000,
    period: 'day',
    userId: null,
    roleId: null,
    serviceId: null,
    name: 'Fooooo',
    description: '',
    isActive: false,
    createdDate: '2023-08-24T20:22:16.000000Z',
    lastModifiedDate: '2023-08-24T20:22:55.000000Z',
    endpoint: null,
    verb: 'DELETE',
    limitCacheByLimitId: [
      {
        id: 21,
        key: 'instance.verb:DELETE.day',
        max: 10000000,
        attempts: 0,
        remaining: 10000000,
      },
    ],
    roleByRoleId: null,
    serviceByServiceId: null,
    userByUserId: null,
  },
];

export const mockTableData: LimitTableRowData[] = [
  {
    id: 22,
    name: 'deee',
    limitType: 'instance.user',
    limitRate: '22 / minute',
    limitCounter: '0 / 22',
    user: 3,
    service: null,
    role: null,
    active: false,
  },
  {
    id: 21,
    name: 'Fooooo',
    limitType: 'instance',
    limitRate: '10000000 / day',
    limitCounter: '0 / 10000000',
    user: null,
    service: null,
    role: null,
    active: false,
  },
];
