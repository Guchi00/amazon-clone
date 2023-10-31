import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import data from "./data.json";
import styles from "./styles.module.css"

interface INewProductsProps {
  data: typeof data
}

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];


export const ProductsDropdownMenu: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space className={styles.space}>
        <p className={styles.all}>All</p>
        <ArrowDropDownOutlinedIcon className={styles.arrowdownIcon} />
      </Space>
    </a>
  </Dropdown>
);

