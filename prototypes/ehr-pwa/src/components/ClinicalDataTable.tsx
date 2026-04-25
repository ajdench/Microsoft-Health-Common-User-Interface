import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import type { ReferenceRow } from '../types'
import { ClinicalStatusBadge } from './ClinicalStatusBadge'
import { ReferencePanelSection } from './ReferencePanelSection'

type ClinicalDataTableProps = {
  rows: ReferenceRow[]
  filter?: 'abnormal'
  onToggleAbnormal: () => void
}

export function ClinicalDataTable({ rows, filter, onToggleAbnormal }: ClinicalDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'date', desc: true }])
  const filteredRows = useMemo(() => (filter === 'abnormal' ? rows.filter((row) => row.status === 'abnormal') : rows), [filter, rows])
  const columns = useMemo<ColumnDef<ReferenceRow>[]>(
    () => [
      { accessorKey: 'date', header: 'Date' },
      { accessorKey: 'label', header: 'Result' },
      { accessorKey: 'value', header: 'Value' },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <ClinicalStatusBadge tone={row.original.status === 'abnormal' ? 'warn' : 'good'}>{row.original.status}</ClinicalStatusBadge>,
      },
    ],
    [],
  )
  // TanStack Table intentionally returns function helpers; this prototype is not using React Compiler memoization.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: filteredRows,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <ReferencePanelSection
      label="Clinical results"
      title="Recent results"
      description="Filter, sort, result count, and reset remain attached to the data."
      actions={
        <Button variant="outline" type="button" onClick={onToggleAbnormal}>
          {filter === 'abnormal' ? 'Reset filter' : 'Show abnormal only'}
        </Button>
      }
    >
      <div className="filter-summary" aria-live="polite">
        <span>
          Showing {filteredRows.length} of {rows.length} results
          {filter === 'abnormal' ? ' · active filter: abnormal only' : ' · no active filter'}
        </span>
        {filter === 'abnormal' ? (
          <Button variant="outline" size="sm" type="button" onClick={onToggleAbnormal}>
            Clear filter
          </Button>
        ) : null}
      </div>

      <Table className="clinical-table">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} scope="col" aria-sort={getAriaSort(header.column.getIsSorted())}>
                  {header.column.getCanSort() ? (
                    <Button
                      className="sort-button"
                      variant="ghost"
                      size="sm"
                      type="button"
                      onClick={header.column.getToggleSortingHandler()}
                      aria-label={`Sort by ${String(header.column.columnDef.header)}${getSortLabel(header.column.getIsSorted())}`}
                    >
                      <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                      {header.column.getIsSorted() ? (
                        <span className="sort-indicator" aria-hidden="true">
                          {header.column.getIsSorted() === 'asc' ? 'asc' : 'desc'}
                        </span>
                      ) : null}
                    </Button>
                  ) : (
                    flexRender(header.column.columnDef.header, header.getContext())
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="clinical-result-list" aria-label="Clinical results list">
        {table.getRowModel().rows.map((row) => (
          <Card key={row.id} size="sm">
            <CardHeader>
              <CardTitle>{row.original.label}</CardTitle>
              <CardDescription>{row.original.date}</CardDescription>
              <CardAction>
                <ClinicalStatusBadge tone={row.original.status === 'abnormal' ? 'warn' : 'good'}>{row.original.status}</ClinicalStatusBadge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <dl>
                <div>
                  <dt>Value</dt>
                  <dd>{row.original.value}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </ReferencePanelSection>
  )
}

function getAriaSort(state: false | 'asc' | 'desc') {
  if (!state) {
    return 'none'
  }

  return state === 'asc' ? 'ascending' : 'descending'
}

function getSortLabel(state: false | 'asc' | 'desc') {
  if (!state) {
    return ''
  }

  return state === 'asc' ? ', currently ascending' : ', currently descending'
}
