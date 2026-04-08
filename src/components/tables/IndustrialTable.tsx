import { Button, Space, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRow } from '../../mock/mockData';
import { StatusTag } from '../common/StatusTag';

interface IndustrialTableProps {
  title?: string;
  rows: TableRow[];
  maxHeight?: number;
}

export function IndustrialTable({ title = '监测明细', rows, maxHeight = 300 }: IndustrialTableProps) {
  // 根据数据判断是风流监测、气体监测还是人员监测
  const isGasMonitoring = rows.length > 0 && rows[0].id.startsWith('GAS-');
  const isPersonnelMonitoring = rows.length > 0 && rows[0].id.startsWith('P-');
  const nameColumnTitle = isPersonnelMonitoring ? '人员姓名' : isGasMonitoring ? '传感器名称' : '监测点名称';
  const valueColumnTitle = isPersonnelMonitoring ? '生理数据 / 设备状态' : isGasMonitoring ? '监测数值' : '风速 / 风压';

  const columns: ColumnsType<TableRow> = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: 90,
      fixed: 'left',
    },
    {
      title: nameColumnTitle,
      dataIndex: 'name',
      key: 'name',
      width: 160,
      ellipsis: true,
    },
    ...(isGasMonitoring ? [{
      title: '传感器类型',
      dataIndex: 'type',
      key: 'type',
      width: 100,
      align: 'center' as const,
      render: (type: string) => (
        <Typography.Text style={{
          color: '#ffc069',
          fontWeight: 600,
          fontSize: '12px',
        }}>
          {type}
        </Typography.Text>
      ),
    }] : []),
    {
      title: '所属区域',
      dataIndex: 'area',
      key: 'area',
      width: 120,
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 90,
      align: 'center',
      render: (status) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4px 0',
          }}
        >
          <StatusTag status={status} />
        </div>
      ),
      onHeaderCell: () => ({
        style: {
          background: 'linear-gradient(180deg, rgba(89, 154, 221, 0.35) 0%, rgba(89, 154, 221, 0.25) 100%)',
          borderLeft: '2px solid rgba(150, 205, 255, 0.5)',
          borderRight: '2px solid rgba(150, 205, 255, 0.5)',
        },
      }),
      onCell: () => ({
        style: {
          background: 'rgba(89, 154, 221, 0.08)',
          borderLeft: '2px solid rgba(150, 205, 255, 0.3)',
          borderRight: '2px solid rgba(150, 205, 255, 0.3)',
        },
      }),
    },
    {
      title: valueColumnTitle,
      dataIndex: 'value',
      key: 'value',
      width: 160,
      render: (value) => (
        <Typography.Text style={{ color: '#9cd0ff', fontWeight: 600 }}>
          {value}
        </Typography.Text>
      ),
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 140,
    },
    {
      title: '操作',
      key: 'action',
      width: 130,
      fixed: 'right',
      align: 'center',
      render: () => (
        <Space size={6}>
          <Button
            type="link"
            size="small"
            style={{
              padding: '2px 8px',
              height: 'auto',
              fontSize: '12px',
              color: '#69c0ff',
              fontWeight: 600,
              background: 'rgba(105, 192, 255, 0.1)',
              border: '1px solid rgba(105, 192, 255, 0.3)',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(105, 192, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(105, 192, 255, 0.5)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 0 8px rgba(105, 192, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(105, 192, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(105, 192, 255, 0.3)';
              e.currentTarget.style.color = '#69c0ff';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            详情
          </Button>
          <Button
            type="link"
            size="small"
            style={{
              padding: '2px 8px',
              height: 'auto',
              fontSize: '12px',
              color: '#95de64',
              fontWeight: 600,
              background: 'rgba(149, 222, 100, 0.1)',
              border: '1px solid rgba(149, 222, 100, 0.3)',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(149, 222, 100, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(149, 222, 100, 0.5)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 0 8px rgba(149, 222, 100, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(149, 222, 100, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(149, 222, 100, 0.3)';
              e.currentTarget.style.color = '#95de64';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            历史
          </Button>
        </Space>
      ),
      onHeaderCell: () => ({
        style: {
          background: 'linear-gradient(180deg, rgba(89, 154, 221, 0.35) 0%, rgba(89, 154, 221, 0.25) 100%)',
          borderLeft: '2px solid rgba(150, 205, 255, 0.5)',
        },
      }),
      onCell: () => ({
        style: {
          background: 'rgba(89, 154, 221, 0.08)',
          borderLeft: '2px solid rgba(150, 205, 255, 0.3)',
        },
      }),
    },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Table<TableRow>
        rowKey="id"
        size="small"
        title={title ? () => <Typography.Text strong>{title}</Typography.Text> : undefined}
        columns={columns}
        dataSource={rows}
        pagination={false}
        scroll={{ x: isGasMonitoring ? 930 : 830, y: maxHeight }}
        bordered
        style={{ flex: 1, minHeight: 0 }}
      />
    </div>
  );
}
