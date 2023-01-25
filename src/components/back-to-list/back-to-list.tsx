import React, { FC, ReactNode } from 'react';
import { ListIcon, BackIcon } from '@commercetools-uikit/icons';
import FlatButton from '@commercetools-uikit/flat-button';

type Props = {
  href: string;
  iconType?: 'list' | 'arrow';
  label: ReactNode;
};

export const BackToList: FC<Props> = ({ iconType = 'list', ...props }) => {
  const icon =
    iconType === 'list' ? (
      <ListIcon size="medium" color="primary" />
    ) : (
      <BackIcon size="medium" color="primary" />
    );
  return <FlatButton as="a" {...props} icon={icon} />;
};

BackToList.displayName = 'BackToList';

export default BackToList;
