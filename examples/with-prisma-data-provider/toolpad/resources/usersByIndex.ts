/**
 * Toolpad data provider file.
 * See: https://mui.com/toolpad/concepts/data-providers/
 */

import { createDataProvider } from '@mui/toolpad/server';
import prisma from '../prisma';

export default createDataProvider({
  async getRecords({ paginationModel: { start, pageSize } }) {
    const [userRecords, totalCount] = await Promise.all([
      prisma.user.findMany({
        skip: start,
        take: pageSize,
      }),
      prisma.user.count(),
    ]);
    return {
      records: userRecords,
      totalCount,
    };
  },
});
