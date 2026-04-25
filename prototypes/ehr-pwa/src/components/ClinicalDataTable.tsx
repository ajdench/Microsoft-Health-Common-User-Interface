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
        cell: ({ row }) => <span className={`state-chip ${row.original.status === 'abnormal' ? 'warn' : 'good'}`}>{row.original.status}</span>,
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
    <section className="reference-content" aria-label="Clinical results">
      <header className="reference-header">
        <div>
          <h2>Recent results</h2>
          <p>Filter, sort, result count, and reset remain attached to the data.</p>
        </div>
        <button type="button" onClick={onToggleAbnormal}>
          {filter === 'abnormal' ? 'Reset filter' : 'Show abnormal only'}
        </button>
      </header>

      <div className="filter-summary" aria-live="polite">
        <span>
          Showing {filteredRows.length} of {rows.length} results
          {filter === 'abnormal' ? ' · active filter: abnormal only' : ' · no active filter'}
        </span>
        {filter === 'abnormal' ? (
          <button type="button" onClick={onToggleAbnormal}>
            Clear filter
          </button>
        ) : null}
      </div>

      <table className="clinical-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" aria-sort={getAriaSort(header.column.getIsSorted())}>
                  {header.column.getCanSort() ? (
                    <button
                      className="sort-button"
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
                    </button>
                  ) : (
                    flexRender(header.column.columnDef.header, header.getContext())
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="clinical-result-list" aria-label="Clinical results list">
        {table.getRowModel().rows.map((row) => (
          <article className="result-card" key={row.id}>
            <header>
              <div>
                <h3>{row.original.label}</h3>
                <p>{row.original.date}</p>
              </div>
              <span className={`state-chip ${row.original.status === 'abnormal' ? 'warn' : 'good'}`}>{row.original.status}</span>
            </header>
            <dl>
              <div>
                <dt>Value</dt>
                <dd>{row.original.value}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
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
