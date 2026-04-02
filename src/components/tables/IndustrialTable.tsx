import { Button, Space, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRow } from '../../mock/mockData';
import { StatusTag } from '../common/StatusTag';

interface IndustrialTableProps {
  title?: string;
  rows: TableRow[];
}

export function IndustrialTable({ title = '监测明细', rows }: IndustrialTableProps) {
  const columns: ColumnsType<TableRow> = [
    { title: '编号', dataIndex: 'id', key: 'id', width: 100 },
    { title: '名称', dataIndex: 'name', key: 'name', width: 150 },
    { title: '区域', dataIndex: 'area', key: 'area', width: 130 },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status) => <StatusTag status={status} />,
    },
    { title: '指标值', dataIndex: 'value', key: 'value', width: 120 },
    { title: '时间', dataIndex: 'updatedAt', key: 'updatedAt', width: 160 },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: () => (
        <Space>
          <Button type="link" size="small">
            详情
          </Button>
          <Button type="link" size="small">
            历史
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table<TableRow>
      rowKey="id"
      size="small"
      title={() => <Typography.Text strong>{title}</Typography.Text>}
      columns={columns}
      dataSource={rows}
      pagination={false}
      scroll={{ x: 860 }}
      bordered
    />
  );
}
