import { Component, signal, computed } from '@angular/core';
import { SlicePipe } from '@angular/common';
import {
  TuiButton,
  TuiIcon,
  TuiTitle,
  TuiInput,
  TuiTextfield,
  TuiCell,
} from '@taiga-ui/core';
import {
  TuiBadge,
  TuiSelect,
  TuiDataListWrapper,
  TuiChevron,
} from '@taiga-ui/kit';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { FormsModule } from '@angular/forms';

export interface Customer {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: string;
  spent: string;
  joined: string;
}

@Component({
  standalone: true,
  imports: [
    FormsModule,
    SlicePipe,
    TuiButton,
    TuiIcon,
    TuiHeader,
    TuiTitle,
    TuiSelect,
    TuiDataListWrapper,
    TuiChevron,
    TuiInput,
    TuiTextfield,
    TuiTable,
    TuiCell,
  ],
  selector: 'app-customers',
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  protected readonly filter = signal('');
  protected readonly statusFilter = signal('all');

  protected readonly customers = signal<Customer[]>([
    {
      id: 'C-1001',
      name: 'Sarah Jenkins',
      email: 'sarah.j@brightco.com',
      plan: 'Pro',
      status: 'active',
      spent: '$1,240',
      joined: 'Mar 12, 2024',
    },
    {
      id: 'C-1002',
      name: 'Marcus Lee',
      email: 'marcus@nexus.io',
      plan: 'Enterprise',
      status: 'active',
      spent: '$4,890',
      joined: 'Jan 22, 2024',
    },
    {
      id: 'C-1003',
      name: 'Elena Rossi',
      email: 'elena@studio.design',
      plan: 'Starter',
      status: 'pending',
      spent: '$0',
      joined: 'Apr 05, 2024',
    },
    {
      id: 'C-1004',
      name: 'David Kim',
      email: 'david@labs.io',
      plan: 'Pro',
      status: 'active',
      spent: '$2,310',
      joined: 'Feb 18, 2024',
    },
    {
      id: 'C-1005',
      name: 'Olivia Brown',
      email: 'olivia@mail.io',
      plan: 'Starter',
      status: 'inactive',
      spent: '$0',
      joined: 'May 01, 2024',
    },
    {
      id: 'C-1006',
      name: 'James Carter',
      email: 'james@corp.com',
      plan: 'Enterprise',
      status: 'active',
      spent: '$7,560',
      joined: 'Dec 10, 2023',
    },
    {
      id: 'C-1007',
      name: 'Nina Patel',
      email: 'nina@startup.xyz',
      plan: 'Starter',
      status: 'active',
      spent: '$450',
      joined: 'Jun 14, 2024',
    },
    {
      id: 'C-1008',
      name: 'Leo Müller',
      email: 'leo@agentur.de',
      plan: 'Pro',
      status: 'pending',
      spent: '$0',
      joined: 'Jul 02, 2024',
    },
  ]);

  protected readonly filteredCustomers = computed(() => {
    const q = this.filter().toLowerCase();
    const status = this.statusFilter();
    return this.customers().filter((c) => {
      const matchText =
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q);
      const matchStatus = status === 'all' || c.status === status;
      return matchText && matchStatus;
    });
  });

  protected readonly statusOptions = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Pending', value: 'pending' },
    { label: 'Inactive', value: 'inactive' },
  ];

  protected readonly stringifyStatus = (item: { label: string; value: string }) =>
    item.label;

  protected readonly statusLabel = new Map([
    ['active', 'Active'],
    ['pending', 'Pending'],
    ['inactive', 'Inactive'],
  ]);
}
