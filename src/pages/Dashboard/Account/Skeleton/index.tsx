import React from 'react';

import { View } from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const AccountSkeleton: React.FC = () => (
  <SkeletonPlaceholder
    highlightColor="#fff"
    backgroundColor="#f1f1f1"
    speed={2000}
  >
    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
      <SkeletonPlaceholder.Item width={65} height={65} borderRadius={6} />
      <SkeletonPlaceholder.Item marginLeft={20}>
        <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={80}
          height={20}
          borderRadius={4}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);

export default AccountSkeleton;
